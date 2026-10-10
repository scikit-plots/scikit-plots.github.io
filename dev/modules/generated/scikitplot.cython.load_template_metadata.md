# load\_template\_metadata[#](#load-template-metadata "Link to this heading")

scikitplot.cython.load\_template\_metadata(**template\_id**, **\***, **kind=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cython/_templates_api.py#L591)[#](#scikitplot.cython.load_template_metadata "Link to this definition")
:   Load template metadata from an adjacent `*.meta.json` file.

    Parameters:
    :   ****template\_id****str
        :   Template ID.

        ****kind****{‘cython’, ‘python’} or None, default=None
        :   Optional kind constraint.

    Returns:
    :   dict[str, Any]
        :   Metadata dictionary. If no metadata file exists, a minimal metadata
            dictionary is returned.

    Parameters:
    :   * ****template\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]