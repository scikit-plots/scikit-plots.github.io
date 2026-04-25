# load\_package\_example\_metadata[#](#load-package-example-metadata "Link to this heading")

scikitplot.cython.load\_package\_example\_metadata(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/cython/_templates_api.py#L808)[#](#scikitplot.cython.load_package_example_metadata "Link to this definition")
:   Load package example metadata from `package.meta.json`.

    Parameters:
    :   ****name****str
        :   Package example name.

    Returns:
    :   dict[str, Any]
        :   Metadata dictionary.

    Raises:
    :   FileNotFoundError
        :   If metadata file does not exist.

        ValueError
        :   If metadata is invalid.

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]