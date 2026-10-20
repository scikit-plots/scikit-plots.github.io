# Configuration[#](#configuration "Link to this heading")

A `FeaturePolicy` is the complete, declarative description of how to
profile a table. Every section is optional. The same policy can be written in
TOML, YAML or JSON; `dump_policy` reads its output back before writing
and refuses anything the format cannot hold.

```
schema_version = 1

[roles]
target = ["churn"]
identifier = { columns = ["customer_id"] }

[kinds]
zip_code = "categorical_nominal"

[tags.one_hot]
patterns = ["cat_*"]

[assessments.skewed]
provider = "skewed"
params = { threshold = 0.75 }

[assessments.very_skewed]
provider = "skewed"
params = { threshold = 2.0 }

[overrides.income]
skewed = true

[binning]
rule = "knuth"
max_bins = 50

```
```
from scikitplot.feature_selection import FeaturePolicy, load_policy, dump_policy

policy = FeaturePolicy(
    roles={"target": ["churn"]},
    assessments={"skewed": {"provider": "skewed", "params": {"threshold": 0.75}}},
)
dump_policy(policy, "policy.toml")
assert load_policy("policy.toml") == policy
policy.digest   # recorded in every schema fitted with it

```

## Rules of the policy[#](#rules-of-the-policy "Link to this heading")

* `assessments` merge over the built-in ones by name. Default parameters are
  defined once, on the providers; `list_assessment_providers` shows them.
  `None` means “provider default”.
* `kinds` replace inference. `text` is never inferred, only declared.
* `overrides` set an answer by hand; the inferred answer is kept next to it
  (`Assessment.inferred_state`), and kinds follow the overridden answers.
* A column with two roles, an unknown key, `true` where a number is expected,
  or a YAML date where a name is expected are refused with `PolicyError`.

## Custom questions[#](#custom-questions "Link to this heading")

Register a provider once at run time; policies refer to it by name, so no code
is stored in a configuration file:

```
from scikitplot.feature_selection import register_assessment

@register_assessment("looks_like_percentage", defaults={"tolerance": 0.0})
def looks_like_percentage(context, tolerance):
    s = context.stats
    if not s.is_numeric or s.min is None:
        return context.result("not_applicable", "not_numeric")
    inside = s.min >= -tolerance and s.max <= 100 + tolerance
    return context.result("true" if inside else "false", "range", min=s.min, max=s.max)

policy = {"assessments": {"looks_like_percentage": {"provider": "looks_like_percentage"}}}

```

## Pydantic[#](#pydantic "Link to this heading")

The policy sections are standard dataclasses, so `pydantic.TypeAdapter` can
validate them without an extra model; the dataclass checks still run.