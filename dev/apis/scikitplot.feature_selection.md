# scikitplot.feature\_selection[#](#module-scikitplot.feature_selection "Link to this heading")

## scikitplot.feature\_selection[#](#id1 "Link to this heading")

Understand, group, track and monitor the features of wide pandas tables.

Three questions, three tools:

**What is each feature?**
:   `profile_features` (or `FeatureProfiler` in a pipeline) fits a
    `FeatureSchema` on training data. Each `FeatureSpec` knows
    its role, dtype family, semantic kind, user tags, a bin recommendation,
    and policy-backed assessments with evidence (“am I skewed / discrete /
    constant / binary / identifier-like / high-cardinality …?”). Thresholds
    live in a `FeaturePolicy` (TOML, YAML or JSON), and custom
    questions are registered with `register_assessment`.

**What happened to each feature in a pipeline?**
:   `trace_pipeline` reads a fitted `Pipeline` /
    `ColumnTransformer` / `FeatureUnion` and returns a
    `FeatureLineage`: which steps touched a raw column, which outputs it
    became, where it was dropped, and `FeatureLineage.attribute` to sum
    one-hot (or any exactly traced) importances back to raw columns.

**Has it drifted?**
:   `ReferenceProfile` freezes training buckets per feature and
    reports PSI, Jensen-Shannon distance, missingness change and unseen
    categories for later data.

The scikit-learn pieces (`FeatureColumnSelector` for
`ColumnTransformer`, `FeatureFilter`, `FeatureRenamer`) fit
on the training fold only, so they are safe under cross-validation.

Examples

Try it in your browser!
```
>>> import numpy as np, pandas as pd
>>> from scikitplot.feature_selection import profile_features
>>> rng = np.random.default_rng(0)
>>> X = pd.DataFrame(
...     {
...         "income": rng.lognormal(10, 1, 300),
...         "age": rng.integers(18, 80, 300),
...         "kids": rng.integers(0, 4, 300),
...         "city": rng.choice(["ankara", "izmir", "bursa"], 300),
...         "customer_id": [f"c{i}" for i in range(300)],
...     }
... )
>>> schema = profile_features(X)
>>> schema.groups(by="kind")["numeric_continuous"]
['income', 'age']
>>> schema["income"].is_("skewed"), schema["kids"].kind
(True, 'numeric_discrete')
>>> schema.select(is_=("identifier_like",))
['customer_id']

```
Go BackOpen In Tab

Notes

****User note.**** Profile the training split only and keep the schema
(`FeatureSchema.save`); audit later splits with
`FeatureSchema.audit` and `ReferenceProfile`. Recommendations
(`recommend_treatments`, `analysis_plan`, bin plans) are advice and
never modify data.

****Developer note.**** The package is pure Python on top of pandas, NumPy,
SciPy and scikit-learn; PyYAML and `tomli-w` are needed only to read YAML or
write TOML. Every persisted artefact carries a `schema_version` and is
checked field by field on load.

****User guide.**** See the [Feature Selection](../user_guide/feature_selection/index.html#feature-selection-index) section for further details.

## Profiling and the fitted schema[#](#profiling-and-the-fitted-schema "Link to this heading")

|  |  |
| --- | --- |
| `profile_features` | Fit a `FeatureSchema` on training data. |
| `FeatureSchema` | Immutable, fitted description of a table's columns. |
| `FeatureSpec` | Everything a fitted schema knows about one column. |
| `FeatureStats` | Training statistics of one column. |

## Policy and configuration[#](#policy-and-configuration "Link to this heading")

|  |  |
| --- | --- |
| `FeaturePolicy` | Complete, declarative description of how to profile a table. |
| `ColumnRule` | Select columns by exact name and/or shell-style pattern. |
| `AssessmentSpec` | Which provider answers one assessment question, with which parameters. |
| `BinningPolicy` | How bin recommendations are computed for numeric features. |
| `DriftPolicy` | How a drift reference is frozen and judged. |
| `DEFAULT_ASSESSMENTS` |  |
| `load_policy` | Load a `FeaturePolicy` from a file, a mapping or a policy. |
| `dump_policy` | Write `policy` to `path` atomically, verified by reading it back. |

## Assessments[#](#assessments "Link to this heading")

|  |  |
| --- | --- |
| `Assessment` | The recorded answer to one assessment for one feature. |
| `AssessmentContext` | What a provider may read about one feature. |
| `AssessmentOutcome` | What a provider returns: a state, reason codes and evidence. |
| `AssessmentProvider` | A named, versioned function that answers one kind of question. |
| `AssessmentRegistry` | Name table of assessment providers. |
| `default_registry` | Name table of assessment providers. |
| `register_assessment` | Register an assessment provider; usable as a decorator. |
| `list_assessment_providers` | Tabulate registered providers. |

## Binning[#](#binning "Link to this heading")

|  |  |
| --- | --- |
| `BinningRecommendation` | A frozen bin recommendation for one feature. |
| `knuth_bin_count` | Return the equal-width bin count that maximises Knuth's posterior. |
| `make_kbins_discretizer` | Build a `KBinsDiscretizer` with the recommended per-feature bin counts. |

## Scikit-learn estimators[#](#scikit-learn-estimators "Link to this heading")

Class inheritance

![Inheritance diagram of FeatureProfiler, FeatureFilter, FeatureRenamer](../_images/inheritance-26e758e02b83a1e6b240d72bec3e08b1696a2e67.png)




|  |  |
| --- | --- |
| `FeatureProfiler` | Fit a feature schema on the training data; pass data through unchanged. |
| `FeatureFilter` | Drop features whose assessments are true, and columns with non-feature roles. |
| `FeatureColumnSelector` | Column selector for `ColumnTransformer` driven by a feature schema. |
| `FeatureRenamer` | Rename columns with a plan frozen at fit time. |
| `RenamePlan` | A complete, frozen `old -> new` name mapping. |

## Pipeline lineage[#](#pipeline-lineage "Link to this heading")

|  |  |
| --- | --- |
| `trace_pipeline` | Trace the feature lineage of a fitted estimator. |
| `FeatureLineage` | Traced feature graph of a fitted pipeline. |
| `FeatureMapping` | How one transformer's outputs derive from its inputs. |
| `Attribution` | Values of transformed features summed back onto raw input features. |

## Drift[#](#drift "Link to this heading")

|  |  |
| --- | --- |
| `ReferenceProfile` | Frozen training distribution of every compared feature. |
| `FeatureReference` | Frozen reference buckets of one feature. |

## Analysis routing[#](#analysis-routing "Link to this heading")

|  |  |
| --- | --- |
| `analysis_plan` | Route every feature to the plots, summaries and tests that fit its kind. |
| `recommend_treatments` | Recommend an ordered preprocessing chain per feature. |
| `treatment_groups` | Group features that share the same recommended chain. |
| `DEFAULT_ANALYSIS_RULES` |  |

## Vocabularies and errors[#](#vocabularies-and-errors "Link to this heading")

|  |  |
| --- | --- |
| `AssessmentState` | Outcome of one assessment of one feature. |
| `DtypeFamily` | Physical storage family of a column, read from its pandas dtype and values. |
| `FeatureKind` | Semantic kind of a feature: what analyses and treatments make sense. |
| `FeatureRole` | Role of a column in a modelling task; only `FEATURE` columns are model inputs. |
| `LineageQuality` | How strongly a lineage edge is supported. |
| `Relation` | How the outputs of one pipeline stage relate to its inputs. |
| `FeatureSelectionError` | Base class of every error raised by [`scikitplot.feature_selection`](#module-scikitplot.feature_selection "scikitplot.feature_selection"). |
| `PolicyError` | A policy or configuration document is off contract (unknown key, wrong type, bad range). |
| `SchemaMismatchError` | Data given after fitting does not match the fitted schema (missing, extra or retyped columns). |
| `SchemaMismatchWarning` | Later data differs from the fitted schema and `on_mismatch="warn"` let it through. |
| `IncompatibleSchemaError` | A persisted artefact was written by another, unsupported schema generation. |
| `LineageError` | A pipeline's feature topology cannot be traced or does not reconcile with its output. |