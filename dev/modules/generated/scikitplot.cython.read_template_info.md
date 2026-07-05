# read\_template\_info[#](#read-template-info "Link to this heading")

scikitplot.cython.read\_template\_info(**template\_id**, **\***, **encoding='utf-8'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/cython/_templates_api.py#L222)[#](#scikitplot.cython.read_template_info "Link to this definition")
:   Read metadata for a template and return a [`TemplateInfo`](scikitplot.cython.TemplateInfo.html#scikitplot.cython.TemplateInfo "scikitplot.cython.TemplateInfo").

    Parameters:
    :   ****template\_id****str
        :   Template identifier returned by [`list_templates`](scikitplot.cython.list_templates.html#scikitplot.cython.list_templates "scikitplot.cython.list_templates").

        ****encoding****str, default=”utf-8”
        :   Reserved for future use (kept to preserve API stability).

    Returns:
    :   TemplateInfo
        :   Structured template metadata. If no metadata file exists, returns
            a populated object with defaults and inferred fields.

    Raises:
    :   FileNotFoundError
        :   If the template source file cannot be found.

        ValueError
        :   If a metadata file exists but is invalid JSON or invalid shape.

    Parameters:
    :   * ****template\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****encoding**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**TemplateInfo**](scikitplot.cython.TemplateInfo.html#scikitplot.cython.TemplateInfo "scikitplot.cython._templates_api.TemplateInfo")

    Notes

    This function never imports or executes template code. It is safe for
    documentation builds.