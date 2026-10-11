# validate\_template\_info[#](#validate-template-info "Link to this heading")

scikitplot.cython.validate\_template\_info(**info**, **\***, **raw=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cython/_templates_api.py#L364)[#](#scikitplot.cython.validate_template_info "Link to this definition")
:   Strictly validate template metadata against the schema (CYTHON-TPL-002).

    Unlike the permissive default read path (which silently coerces), this
    rejects wrong-typed list entries, unknown schema versions, and support/
    extra-source references that are absolute or escape the template root.

    Parameters:
    :   ****info****TemplateInfo
        :   The parsed template info to validate.

        ****raw****Mapping[str, Any] or None, optional
        :   The raw metadata dict, if available. When given, list fields are
            checked for **silently discarded** wrong-typed entries (which the lenient
            parser would have dropped).

    Raises:
    :   TemplateValidationError
        :   If the metadata violates the schema.

    Parameters:
    :   * ****info**** ([**TemplateInfo**](scikitplot.cython.TemplateInfo.html#scikitplot.cython.TemplateInfo "scikitplot.cython._templates_api.TemplateInfo"))
        * ****raw**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

    Return type:
    :   None