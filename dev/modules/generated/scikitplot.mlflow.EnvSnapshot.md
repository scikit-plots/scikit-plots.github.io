# EnvSnapshot[#](#envsnapshot "Link to this heading")

class scikitplot.mlflow.EnvSnapshot(**\_data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/mlflow/_env.py#L23)[#](#scikitplot.mlflow.EnvSnapshot "Link to this definition")
:   Full snapshot of process environment for strict restoration.

    Attributes:
    :   [`data`](#scikitplot.mlflow.EnvSnapshot.data "scikitplot.mlflow.EnvSnapshot.data")dict[str, str]
        :   A copy of the full environment mapping.

    Parameters:
    :   ****\_data**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)

    Notes

    Restoration clears the current environment first to remove any session-added keys.

    classmethod capture()[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/mlflow/_env.py#L45)[#](#scikitplot.mlflow.EnvSnapshot.capture "Link to this definition")
    :   Capture the current process environment mapping.

        Returns:
        :   EnvSnapshot
            :   Captured environment snapshot.

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.14)")

    property data: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")][#](#scikitplot.mlflow.EnvSnapshot.data "Link to this definition")
    :   A copy of the full environment mapping.

    restore()[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/mlflow/_env.py#L57)[#](#scikitplot.mlflow.EnvSnapshot.restore "Link to this definition")
    :   Restore the environment exactly to the captured snapshot.

        Returns:
        :   None

        Return type:
        :   None