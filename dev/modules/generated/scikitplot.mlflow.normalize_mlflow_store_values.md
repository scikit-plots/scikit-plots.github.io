# normalize\_mlflow\_store\_values[#](#normalize-mlflow-store-values "Link to this heading")

scikitplot.mlflow.normalize\_mlflow\_store\_values(**\***, **backend\_store\_uri**, **default\_artifact\_root**, **base\_dir**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/mlflow/_project.py#L421)[#](#scikitplot.mlflow.normalize_mlflow_store_values "Link to this definition")
:   Normalize local store values for consistent multi-script usage.

    Deterministic normalization rules:

    * If backend\_store\_uri starts with “sqlite:///” => normalize the filesystem path to absolute.
    * Else if backend\_store\_uri is a local path => normalize to absolute.
    * For default\_artifact\_root: if it is a local path => normalize to absolute.
      Otherwise, leave as-is (remote schemes like s3://, gs://, dbfs:/, http(s)://).

    This ensures `train.py`, `hpo.py`, `predict.py` behave consistently regardless of CWD.

    Parameters:
    :   ****backend\_store\_uri****str or None
        :   Backend store URI or path.

        ****default\_artifact\_root****str or None
        :   Default artifact root URI or path.

        ****base\_dir****pathlib.Path
        :   Base directory used to resolve relative paths.

    Returns:
    :   tuple[str or None, str or None]
        :   Normalized (backend\_store\_uri, default\_artifact\_root).

    Parameters:
    :   * ****backend\_store\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****default\_artifact\_root**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****base\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))

    Return type:
    :   [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | None, [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | None]