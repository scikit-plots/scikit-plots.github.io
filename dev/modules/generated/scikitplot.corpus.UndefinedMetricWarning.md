# UndefinedMetricWarning[#](#undefinedmetricwarning "Link to this heading")

exception scikitplot.corpus.UndefinedMetricWarning[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_inputs.py#L61)[#](#scikitplot.corpus.UndefinedMetricWarning "Link to this definition")
:   A metric is undefined for some queries and was scored by `zero_division`.

    Notes

    Raised with `zero_division="warn"`, which scores an undefined value as
    `0.0`, as scikit-learn does for precision and recall. It is distinct from
    `sklearn.exceptions.UndefinedMetricWarning`, so a filter for one does not
    silence the other.

    Annotation:
    :   Unrecognized objtype: `exception`