# ensure\_local\_store\_layout[#](#ensure-local-store-layout "Link to this heading")

scikitplot.mlflow.ensure\_local\_store\_layout(**\***, **backend\_store\_uri**, **default\_artifact\_root**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/mlflow/_project.py#L468)[#](#scikitplot.mlflow.ensure_local_store_layout "Link to this definition")
:   Ensure local backend/artifact directories exist.

    Parameters:
    :   ****backend\_store\_uri****str or None
        :   Backend store URI or path.

        ****default\_artifact\_root****str or None
        :   Default artifact root URI or path.

    Returns:
    :   None

    Parameters:
    :   * ****backend\_store\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****default\_artifact\_root**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   None

    Notes

    This function only creates directories for local filesystem locations.
    Remote stores (s3://, gs://, dbfs:/, http(s)://) are not touched.