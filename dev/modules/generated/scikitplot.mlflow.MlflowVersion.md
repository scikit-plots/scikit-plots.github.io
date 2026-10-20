# MlflowVersion[#](#mlflowversion "Link to this heading")

class scikitplot.mlflow.MlflowVersion(**raw=''**, **major=0**, **minor=0**, **patch=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/mlflow/_utils.py#L28)[#](#scikitplot.mlflow.MlflowVersion "Link to this definition")
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
    :   * ****raw**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****major**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****minor**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****patch**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Notes

    This parser is intentionally conservative: it extracts the first three numeric
    components from the version string. Pre-release/build metadata is ignored for
    compatibility checks.

    major: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.mlflow.MlflowVersion.major "Link to this definition")

    minor: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.mlflow.MlflowVersion.minor "Link to this definition")

    patch: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.mlflow.MlflowVersion.patch "Link to this definition")

    raw: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.mlflow.MlflowVersion.raw "Link to this definition")

    property triple: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][#](#scikitplot.mlflow.MlflowVersion.triple "Link to this definition")
    :   Return (major, minor, patch).