# default\_registry[#](#default-registry "Link to this heading")

scikitplot.feature\_selection.default\_registry = <scikitplot.feature\_selection.\_assessments.AssessmentRegistry object>[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L)[#](#scikitplot.feature_selection.default_registry "Link to this definition")
:   Name table of assessment providers.

    Notes

    ****Developer note.**** Thread-safe. `register` refuses to replace an
    existing name unless `replace=True`; `_register_builtin` inserts
    only absent names.