# Fluent configuration and policies[#](#fluent-configuration-and-policies "Link to this heading")

[`FluentCorpus`](../../modules/generated/scikitplot.corpus.FluentCorpus.html#scikitplot.corpus.FluentCorpus "scikitplot.corpus.FluentCorpus") is an immutable facade over [`CorpusPlan`](../../modules/generated/scikitplot.corpus.CorpusPlan.html#scikitplot.corpus.CorpusPlan "scikitplot.corpus.CorpusPlan"). It is
suitable for hand-written Python, configuration files and deterministic tuning
grids.

## Generate from a mapping[#](#generate-from-a-mapping "Link to this heading")

```
from scikitplot.corpus import FluentCorpus

corpus = FluentCorpus.from_config({
    "reader": {"default_language": "en"},
    "chunker": "paragraph",
    "storage": "memory",
})

```

Batch configuration keeps the same conflict rule as individual setters:

```
base = FluentCorpus().chunker("sentence")
tuned = base.with_overrides(chunker="paragraph", storage="memory")

```

`configure()` refuses replacement by default. `with_overrides()` states the
replacement intent explicitly.

## Generate bounded variants[#](#generate-bounded-variants "Link to this heading")

Use [`FluentCorpus.iter_variants`](../../modules/generated/scikitplot.corpus.FluentCorpus.html#scikitplot.corpus.FluentCorpus.iter_variants "scikitplot.corpus.FluentCorpus.iter_variants") for a lazy, deterministic Cartesian
tuning grid:

```
variants = base.iter_variants(
    max_variants=16,
    chunker=["sentence", "paragraph"],
    retrieval=["lexical", "hybrid"],
)
first = next(variants)

```

[`FluentCorpus.variants`](../../modules/generated/scikitplot.corpus.FluentCorpus.html#scikitplot.corpus.FluentCorpus.variants "scikitplot.corpus.FluentCorpus.variants") is the convenience tuple wrapper when eager
materialization is useful. Both APIs compute the ****entire grid size before the
first plan is yielded**** and refuse a product larger than `max_variants`. This
keeps the generator lazy without creating an unbounded configuration source.
Domain ordering follows `CONFIG_DOMAINS` rather than keyword insertion order,
so eager and lazy forms produce identical fingerprint order. Strings, bytes,
mappings and non-iterable scalar fragments are treated as ****one choice****; lists,
tuples and other iterables are explicit variant axes.

## Explain and compare[#](#explain-and-compare "Link to this heading")

`explain()` returns fingerprints, configured domains, stages and validation
records without constructing runtime components. `diff()` reports which
domains or stages differ between plans.

```
print(base.explain())
print(base.diff(tuned))

```

## Policy layers are separate[#](#policy-layers-are-separate "Link to this heading")

Do not collapse all policy into one `strict` flag:

* [`RuntimePolicy`](../../modules/generated/scikitplot.corpus.RuntimePolicy.html#scikitplot.corpus.RuntimePolicy "scikitplot.corpus.RuntimePolicy") controls source execution boundaries such as URL
  permission. It provides `offline` and `networked` presets and strict
  mapping validation.
* `DownloadPolicy` controls transfer security/resource budgets such as
  TLS verification, SSRF blocking, redirects, retries and maximum bytes.
* `BackendPolicy` controls optional backend selection/fallback/readiness.
* [`ErrorPolicy`](../../modules/generated/scikitplot.corpus.ErrorPolicy.html#scikitplot.corpus.ErrorPolicy "scikitplot.corpus.ErrorPolicy") describes per-document pipeline error behavior.
* reader-specific options still own format semantics.

Keeping these dimensions separate prevents a single convenience preset from
silently changing unrelated security or data-quality behavior.

Backend policy can also be loaded from JSON/YAML-shaped data without inventing a
new named preset for every combination:

```
from scikitplot.corpus import BackendPolicy

policy = BackendPolicy.from_config({
    "preset": "offline",
    "name": "offline-local-strict",
    "order": ["company-asr", "faster-whisper"],
    "include_unlisted": False,
    "on_exhausted": "raise",
})

round_trip = BackendPolicy.from_config(policy.to_dict())

```

Unknown keys are rejected rather than silently ignored, so misspelled tuning
settings cannot look applied while leaving the default behavior unchanged.

A practical local-only recipe can keep the scopes explicit:

```
from scikitplot.corpus import BackendPolicy, DownloadPolicy, RuntimePolicy

runtime_policy = RuntimePolicy.offline()
backend_policy = BackendPolicy.offline()
download_policy = DownloadPolicy.constrained()

```

## Compose without collapsing policy dimensions[#](#compose-without-collapsing-policy-dimensions "Link to this heading")

When the same policy family is reused across readers, builders and runtimes,
`CorpusPolicyBundle` provides a typed convenience layer. It ****composes****
the existing policies; it does not replace them with a second execution engine
or a global `strict` switch.

```
from scikitplot.corpus import CorpusPolicyBundle

policies = CorpusPolicyBundle.safe_local()

# Runtime/source boundary
runtime_policy = policies.runtime

# Audio/Video backend selection
reader_kwargs = policies.reader_kwargs(model_size="tiny")

# CorpusBuilder download boundary
builder_config = policies.builder_config(chunker="paragraph")

# PipelineGuard behavior remains explicit
error_policy = policies.errors

```

Built-in bundles are intentionally few and orthogonal. In Python they are
constructed with `CorpusPolicyBundle.default`,
`CorpusPolicyBundle.safe_local`, `CorpusPolicyBundle.strict_local`,
`CorpusPolicyBundle.networked`, and `CorpusPolicyBundle.docs_ci`;
the mapping/preset spellings use hyphens where appropriate.

`default`
:   Match current Corpus defaults: offline URL execution, resilient optional
    backends, secure download settings, and collected pipeline errors.

`safe-local`
:   Forbid URL execution plus backend network/download side effects while
    preserving fail-observable fallback.

`strict-local`
:   Stay local and raise when the backend chain or guarded document processing
    cannot complete as requested.

`networked`
:   Permit URL sources while keeping TLS/SSRF protections and resilient
    backend behavior.

`docs-ci`
:   Local-only backend behavior plus constrained transfer/resource budgets.

Nested JSON/YAML-shaped configuration is supported with the same strict key and
type validation as the individual policy classes:

```
policies = CorpusPolicyBundle.from_config({
    "preset": "safe-local",
    "name": "team-local",
    "backend": {
        "preset": "offline",
        "order": ["company-asr", "faster-whisper"],
        "include_unlisted": False,
    },
    "download": {"preset": "constrained", "max_retries": 0},
    "errors": "collect",
})

print(policies.explain()["derived"])

```

The bundle does not inject backend policy into every reader automatically. A
PDF parser, OCR engine, ASR engine and text decoder do not share identical
fallback semantics. Convenience helpers therefore target only the seams that
actually own those policies.

For configuration files, [`RuntimePolicy`](../../modules/generated/scikitplot.corpus.RuntimePolicy.html#scikitplot.corpus.RuntimePolicy "scikitplot.corpus.RuntimePolicy"), `BackendPolicy`,
`DownloadPolicy` and `CorpusPolicyBundle` all reject unknown
keys. Security booleans must be real booleans; strings such as `"false"` are
not accepted as truthy stand-ins.