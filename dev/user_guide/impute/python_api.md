# Python API[#](#python-api "Link to this heading")

## Stable imports[#](#stable-imports "Link to this heading")

## Experimental import[#](#experimental-import "Link to this heading")

`ANNImputer` is added only after:

```
from scikitplot.experimental import enable_ann_imputer  # noqa: F401

```

The estimator follows fit/transform conventions and exposes
`get_feature_names_out`. `VoyagerKNNImputer` is an implementation-level
specialization; prefer the unified `ANNImputer(backend=...)` surface for new
application code unless a specific compatibility requirement says otherwise.