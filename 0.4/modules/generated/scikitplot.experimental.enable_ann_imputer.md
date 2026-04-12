# scikitplot.experimental.enable\_ann\_imputer[#](#scikitplot-experimental-enable-ann-imputer "Link to this heading")

Enables ANNImputer

The API and results of this estimator might change without any deprecation
cycle.

Importing this file dynamically sets [`ANNImputer`](scikitplot.impute._ann.ANNImputer.html#scikitplot.impute._ann.ANNImputer "scikitplot.impute._ann.ANNImputer")
as an attribute of the impute module.

Examples

Explicitly require this experimental feature

```
>>> from scikitplot.experimental import enable_ann_imputer  # noqa

```

Now you can import normally from impute

```
>>> from scikitplot.impute import ANNImputer

```