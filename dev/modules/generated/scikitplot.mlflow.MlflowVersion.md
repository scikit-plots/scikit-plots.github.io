# MlflowVersion[#](#mlflowversion "Link to this heading")

class scikitplot.mlflow.MlflowVersion(**raw=''**, **major=0**, **minor=0**, **patch=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/287271b/scikitplot/mlflow/_utils.py#L28)[#](#scikitplot.mlflow.MlflowVersion "Link to this definition")
:   Parsed MLflow version.

    Parameters:
    :   ****raw****str
        :   Raw version string from package metadata.

        ****major****int
        :   Major component.

        ****minor****int
        :   Minor component.

        ****patch****int
        :   Patch component.

    Parameters:
    :   * ****raw**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****major**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****minor**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****patch**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    Notes

    This parser is intentionally conservative: it extracts the first three numeric
    components from the version string. Pre-release/build metadata is ignored for
    compatibility checks.

    major: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.mlflow.MlflowVersion.major "Link to this definition")

    minor: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.mlflow.MlflowVersion.minor "Link to this definition")

    patch: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.mlflow.MlflowVersion.patch "Link to this definition")

    raw: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = ''[#](#scikitplot.mlflow.MlflowVersion.raw "Link to this definition")

    property triple: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"), [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"), [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")][#](#scikitplot.mlflow.MlflowVersion.triple "Link to this definition")
    :   Return (major, minor, patch).