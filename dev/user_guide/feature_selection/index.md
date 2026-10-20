# Feature Selection[#](#feature-selection "Link to this heading")

## Feature profiling, lineage and drift[#](#feature-profiling-lineage-and-drift "Link to this heading")

`scikitplot.feature_selection` helps with tables that have too many columns
to reason about one by one. It answers three questions that are usually
answered by hand and forgotten:

* ****What is each feature?**** Role, dtype family, semantic kind, user tags, a bin
  recommendation, and policy-backed assessments such as **skewed**, **discrete**,
  **constant**, **binary** or **identifier-like**, each with evidence and an explicit
  `unknown` / `not_applicable` state.
* ****What happened to each feature in a fitted pipeline?**** Which steps touched
  it, which columns it became, where it was dropped, and how a model’s
  importances map back to raw columns.
* ****Has it drifted?**** A frozen training reference compared with later data.

> **Important**
> Profile the ****training**** split only. Validation, test and production data
are audited against the fitted schema and the frozen reference; they are
never profiled into them.
Getting started

Profile a table, ask features about themselves, group and select them.

[Getting started](getting_started.html#feature-selection-getting-started)Configuration

Policies in TOML, YAML or JSON; thresholds; overrides; custom assessments.

[Configuration](configuration.html#feature-selection-configuration)Pipelines and lineage

Route columns in a ColumnTransformer, trace a fitted pipeline, attribute importances.

[Pipelines and lineage](pipelines_and_lineage.html#feature-selection-lineage)Drift

Freeze a training reference and judge later data feature by feature.

[Drift](drift.html#feature-selection-drift)

## Examples[#](#examples "Link to this heading")

See [Feature Selection](../../auto_examples/feature_selection/index.html#feature-selection-examples) for executable examples that accompany this guide.