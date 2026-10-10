# CitationOutput[#](#citationoutput "Link to this heading")

class scikitplot.mcp.CitationOutput(**\***, **n**, **source\_uri**, **title**, **anchor**, **doc\_id**, **score**, **also\_in=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/mcp/_server.py#L78)[#](#scikitplot.mcp.CitationOutput "Link to this definition")
:   Stable source metadata for one returned passage.

    Parameters:
    :   * ****n**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****source\_uri**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****title**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****anchor**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****score**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****also\_in**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[****AlsoInOutput****]**)

    also\_in: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[AlsoInOutput][#](#scikitplot.mcp.CitationOutput.also_in "Link to this definition")
    :   Every other source whose passage was identical and was therefore sent
        once, under this citation, instead of repeated.

    anchor: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.mcp.CitationOutput.anchor "Link to this definition")

    classmethod construct(**\_fields\_set=None**, **\*\*values**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L1559)[#](#scikitplot.mcp.CitationOutput.construct "Link to this definition")
    :   Parameters:
        :   * ****\_fields\_set**** ([**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
            * ****values**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.15)")

    copy(**\***, **include=None**, **exclude=None**, **update=None**, **deep=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L1569)[#](#scikitplot.mcp.CitationOutput.copy "Link to this definition")
    :   Returns a copy of the model.

        !!! warning “Deprecated”
        :   This method is now deprecated; use `model_copy` instead.

        If you need `include` or `exclude`, use:

        ``python {test="skip" lint="skip"}
        data = self.model_dump(include=include, exclude=exclude, round_trip=True)
        data = {**data, **(update or {})}
        copied = self.model_validate(data)
        ``

        Parameters:
        :   * ****include**** (**AbstractSetIntStr** **|** **MappingIntStrAny** **|** **None**) – Optional set or mapping specifying which fields to include in the copied model.
            * ****exclude**** (**AbstractSetIntStr** **|** **MappingIntStrAny** **|** **None**) – Optional set or mapping specifying which fields to exclude in the copied model.
            * ****update**** (**Dict****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]** **|** **None**) – Optional dictionary of field-value pairs to override field values in the copied model.
            * ****deep**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – If True, the values of fields that are Pydantic models will be deep-copied.

        Returns:
        :   A copy of the model with included, excluded and updated fields as specified.

        Return type:
        :   Self

    dict(**\***, **include=None**, **exclude=None**, **by\_alias=False**, **exclude\_unset=False**, **exclude\_defaults=False**, **exclude\_none=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L1385)[#](#scikitplot.mcp.CitationOutput.dict "Link to this definition")
    :   Parameters:
        :   * ****include**** ([**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** **None**)
            * ****exclude**** ([**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** **None**)
            * ****by\_alias**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****exclude\_unset**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****exclude\_defaults**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****exclude\_none**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [**Dict**](https://docs.python.org/3/library/typing.html#typing.Dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    doc\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.mcp.CitationOutput.doc_id "Link to this definition")

    classmethod from\_orm(**obj**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L1540)[#](#scikitplot.mcp.CitationOutput.from_orm "Link to this definition")
    :   Parameters:
        :   ****obj**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.15)")

    json(**\***, **include=None**, **exclude=None**, **by\_alias=False**, **exclude\_unset=False**, **exclude\_defaults=False**, **exclude\_none=False**, **encoder=PydanticUndefined**, **models\_as\_dict=PydanticUndefined**, **\*\*dumps\_kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L1410)[#](#scikitplot.mcp.CitationOutput.json "Link to this definition")
    :   Parameters:
        :   * ****include**** ([**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** **None**)
            * ****exclude**** ([**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** **None**)
            * ****by\_alias**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****exclude\_unset**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****exclude\_defaults**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****exclude\_none**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****encoder**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
            * ****models\_as\_dict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****dumps\_kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    model\_computed\_fields = {}[#](#scikitplot.mcp.CitationOutput.model_computed_fields "Link to this definition")

    model\_config = {'extra': 'forbid'}[#](#scikitplot.mcp.CitationOutput.model_config "Link to this definition")
    :   Configuration for the model, should be a dictionary conforming to [`ConfigDict`][pydantic.config.ConfigDict].

    classmethod model\_construct(**\_fields\_set=None**, **\*\*values**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L333)[#](#scikitplot.mcp.CitationOutput.model_construct "Link to this definition")
    :   Creates a new instance of the `Model` class with validated data.

        Creates a new model setting `__dict__` and `__pydantic_fields_set__` from trusted or pre-validated data.
        Default values are respected, but no other validation is performed.

        !!! note
        :   `model_construct()` generally respects the `model_config.extra` setting on the provided model.
            That is, if `model_config.extra == 'allow'`, then all extra passed values are added to the model instance’s `__dict__`
            and `__pydantic_extra__` fields. If `model_config.extra == 'ignore'` (the default), then all extra passed values are ignored.
            Because no validation is performed with a call to `model_construct()`, having `model_config.extra == 'forbid'` does not result in
            an error if extra values are passed, but they will be ignored.

        Parameters:
        :   * ****\_fields\_set**** ([**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**) – A set of field names that were originally explicitly set during instantiation. If provided,
              this is directly used for the [`model_fields_set`][pydantic.BaseModel.model\_fields\_set] attribute.
              Otherwise, the field names from the `values` argument will be used.
            * ****values**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")) – Trusted or pre-validated data dictionary.

        Returns:
        :   A new instance of the `Model` class with validated data.

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.15)")

    model\_copy(**\***, **update=None**, **deep=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L410)[#](#scikitplot.mcp.CitationOutput.model_copy "Link to this definition")
    :   !!! abstract “Usage Documentation”
        :   [`model_copy`](../concepts/models.md#model-copy)

        Returns a copy of the model.

        !!! note
        :   The underlying instance’s [`__dict__`][object.\_\_dict\_\_] attribute is copied. This
            might have unexpected side effects if you store anything in it, on top of the model
            fields (e.g. the value of [cached properties][functools.cached\_property]).

        Parameters:
        :   * ****update**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**) – A mapping of values to update the copied model. Updates are **not**
              applied recursively, and no validation is performed on updated values.
              Only the known fields are updated (if unknown keys are being passed and
              the model has [`extra`][pydantic.ConfigDict.extra] set to `'allow'`, they
              are added as extra data).
            * ****deep**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether a [deep copy][copy.deepcopy] of the model should be performed.

        Returns:
        :   New model instance.

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.15)")

    model\_dump(**\***, **mode='python'**, **include=None**, **exclude=None**, **context=None**, **by\_alias=None**, **exclude\_unset=False**, **exclude\_defaults=False**, **exclude\_none=False**, **exclude\_computed\_fields=False**, **round\_trip=False**, **warnings=True**, **fallback=None**, **serialize\_as\_any=False**, **polymorphic\_serialization=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L472)[#](#scikitplot.mcp.CitationOutput.model_dump "Link to this definition")
    :   !!! abstract “Usage Documentation”
        :   [`model_dump`](../concepts/serialization.md#python-mode)

        Generate a dictionary representation of the model, optionally specifying which fields to include or exclude.

        Parameters:
        :   * ****mode**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'json'****,** **'python'****]** **|** **str**) – The mode in which `to_python` should run.
              If mode is ‘json’, the output will only contain JSON serializable types.
              If mode is ‘python’, the output may contain non-JSON-serializable Python objects.
            * ****include**** ([**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** **None**) – A set of fields to include in the output.
            * ****exclude**** ([**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** **None**) – A set of fields to exclude from the output.
            * ****context**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") **|** **None**) – Additional context to pass to the serializer.
            * ****by\_alias**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to use the field’s alias in the dictionary key if defined.
            * ****exclude\_unset**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to exclude fields that have not been explicitly set.
            * ****exclude\_defaults**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to exclude fields that are set to their default value.
            * ****exclude\_none**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to exclude fields that have a value of `None`.
            * ****exclude\_computed\_fields**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to exclude computed fields.
              While this can be useful for round-tripping, it is usually recommended to use the dedicated
              `round_trip` parameter instead.
            * ****round\_trip**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – If True, dumped values should be valid as input for non-idempotent types such as Json[T].
            * ****warnings**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'none'****,** **'warn'****,** **'error'****]**) – How to handle serialization errors. False/”none” ignores them, True/”warn” logs errors,
              “error” raises a [`PydanticSerializationError`][pydantic\_core.PydanticSerializationError].
            * ****fallback**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**) – A function to call when an unknown value is encountered. If not provided,
              a [`PydanticSerializationError`][pydantic\_core.PydanticSerializationError] error is raised.
            * ****serialize\_as\_any**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to serialize fields with duck-typing serialization behavior.
            * ****polymorphic\_serialization**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to use model and dataclass polymorphic serialization for this call.

        Returns:
        :   A dictionary representation of the model.

        Return type:
        :   [**Dict**](https://docs.python.org/3/library/typing.html#typing.Dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    model\_dump\_json(**\***, **indent=None**, **ensure\_ascii=False**, **include=None**, **exclude=None**, **context=None**, **by\_alias=None**, **exclude\_unset=False**, **exclude\_defaults=False**, **exclude\_none=False**, **exclude\_computed\_fields=False**, **round\_trip=False**, **warnings=True**, **fallback=None**, **serialize\_as\_any=False**, **polymorphic\_serialization=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L538)[#](#scikitplot.mcp.CitationOutput.model_dump_json "Link to this definition")
    :   !!! abstract “Usage Documentation”
        :   [`model_dump_json`](../concepts/serialization.md#json-mode)

        Generates a JSON representation of the model using Pydantic’s `to_json` method.

        Parameters:
        :   * ****indent**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**) – Indentation to use in the JSON output. If None is passed, the output will be compact.
            * ****ensure\_ascii**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – If `True`, the output is guaranteed to have all incoming non-ASCII characters escaped.
              If `False` (the default), these characters will be output as-is.
            * ****include**** ([**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** **None**) – Field(s) to include in the JSON output.
            * ****exclude**** ([**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** [**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **IncEx** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** **None**) – Field(s) to exclude from the JSON output.
            * ****context**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") **|** **None**) – Additional context to pass to the serializer.
            * ****by\_alias**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to serialize using field aliases.
            * ****exclude\_unset**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to exclude fields that have not been explicitly set.
            * ****exclude\_defaults**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to exclude fields that are set to their default value.
            * ****exclude\_none**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to exclude fields that have a value of `None`.
            * ****exclude\_computed\_fields**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to exclude computed fields.
              While this can be useful for round-tripping, it is usually recommended to use the dedicated
              `round_trip` parameter instead.
            * ****round\_trip**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – If True, dumped values should be valid as input for non-idempotent types such as Json[T].
            * ****warnings**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'none'****,** **'warn'****,** **'error'****]**) – How to handle serialization errors. False/”none” ignores them, True/”warn” logs errors,
              “error” raises a [`PydanticSerializationError`][pydantic\_core.PydanticSerializationError].
            * ****fallback**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**) – A function to call when an unknown value is encountered. If not provided,
              a [`PydanticSerializationError`][pydantic\_core.PydanticSerializationError] error is raised.
            * ****serialize\_as\_any**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to serialize fields with duck-typing serialization behavior.
            * ****polymorphic\_serialization**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to use model and dataclass polymorphic serialization for this call.

        Returns:
        :   A JSON string representation of the model.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    property model\_extra: [Dict](https://docs.python.org/3/library/typing.html#typing.Dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.mcp.CitationOutput.model_extra "Link to this definition")
    :   Get extra fields set during validation.

        Returns:
        :   A dictionary of extra fields, or `None` if `config.extra` is not set to `"allow"`.

    model\_fields = {'also\_in': FieldInfo(annotation=list[AlsoInOutput], required=False, default\_factory=list), 'anchor': FieldInfo(annotation=str, required=True), 'doc\_id': FieldInfo(annotation=str, required=True), 'n': FieldInfo(annotation=int, required=True, metadata=[Ge(ge=1)]), 'score': FieldInfo(annotation=float, required=True), 'source\_uri': FieldInfo(annotation=str, required=True), 'title': FieldInfo(annotation=str, required=True)}[#](#scikitplot.mcp.CitationOutput.model_fields "Link to this definition")

    property model\_fields\_set: [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.mcp.CitationOutput.model_fields_set "Link to this definition")
    :   Returns the set of fields that have been explicitly set on this model instance.

        Returns:
        :   A set of strings representing the fields that have been set,
            :   i.e. that were not filled from defaults.

    classmethod model\_json\_schema(**by\_alias=True**, **ref\_template='#/$defs/{model}'**, **schema\_generator=<class 'pydantic.json\_schema.GenerateJsonSchema'>**, **mode='validation'**, **\***, **union\_format='any\_of'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L606)[#](#scikitplot.mcp.CitationOutput.model_json_schema "Link to this definition")
    :   Generates a JSON schema for a model class.

        Parameters:
        :   * ****by\_alias**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to use attribute aliases or not.
            * ****ref\_template**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")) – The reference template.
            * ****union\_format**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'any\_of'****,** **'primitive\_type\_array'****]**) –

              The format to use when combining schemas from unions together. Can be one of:

              * `'any_of'`: Use the [`anyOf`](<https://json-schema.org/understanding-json-schema/reference/combining#anyOf>)

              keyword to combine schemas (the default).
              - `'primitive_type_array'`: Use the [`type`](<https://json-schema.org/understanding-json-schema/reference/type>)
              keyword as an array of strings, containing each type of the combination. If any of the schemas is not a primitive
              type (`string`, `boolean`, `null`, `integer` or `number`) or contains constraints/metadata, falls back to
              `any_of`.
            * ****schema\_generator**** ([**type**](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)")**[****GenerateJsonSchema****]**) – To override the logic used to generate the JSON schema, as a subclass of
              `GenerateJsonSchema` with your desired modifications
            * ****mode**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'validation'****,** **'serialization'****]**) – The mode in which to generate the schema.

        Returns:
        :   The JSON schema for the given model class.

        Return type:
        :   [**Dict**](https://docs.python.org/3/library/typing.html#typing.Dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    classmethod model\_parametrized\_name(**params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L645)[#](#scikitplot.mcp.CitationOutput.model_parametrized_name "Link to this definition")
    :   Compute the class name for parametrizations of generic classes.

        This method can be overridden to achieve a custom naming scheme for generic BaseModels.

        Parameters:
        :   ****params**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[****TypeForm****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** **...****]**) – Tuple of types of the class. Given a generic class
            `Model` with 2 type variables and a concrete model `Model[str, int]`,
            the value `(str, int)` would be passed to `params`.

        Returns:
        :   String representing the new class where `params` are passed to `cls` as type variables.

        Raises:
        :   [****TypeError****](https://docs.python.org/3/builtins/exceptions.html#TypeError "(in Python v3.15)") – Raised when trying to generate concrete names for non-generic models.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    model\_post\_init(**context**, **/**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L672)[#](#scikitplot.mcp.CitationOutput.model_post_init "Link to this definition")
    :   Override this method to perform additional initialization after `__init__` and `model_construct`.
        This is useful if you want to do some validation that requires the entire model to be initialized.

        Parameters:
        :   ****context**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   None

    classmethod model\_rebuild(**\***, **force=False**, **raise\_errors=True**, **\_parent\_namespace\_depth=2**, **\_types\_namespace=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L677)[#](#scikitplot.mcp.CitationOutput.model_rebuild "Link to this definition")
    :   Try to rebuild the pydantic-core schema for the model.

        This may be necessary when one of the annotations is a ForwardRef which could not be resolved during
        the initial attempt to build the schema, and automatic rebuilding fails.

        Parameters:
        :   * ****force**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to force the rebuilding of the model schema, defaults to `False`.
            * ****raise\_errors**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")) – Whether to raise errors, defaults to `True`.
            * ****\_parent\_namespace\_depth**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")) – The depth level of the parent namespace, defaults to 2.
            * ****\_types\_namespace**** (**MappingNamespace** **|** **None**) – The types namespace, defaults to `None`.

        Returns:
        :   Returns `None` if the schema is already “complete” and rebuilding was not required.
            If rebuilding \_was\_ required, returns `True` if rebuilding was successful, otherwise `False`.

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | None

    classmethod model\_validate(**obj**, **\***, **strict=None**, **extra=None**, **from\_attributes=None**, **context=None**, **by\_alias=None**, **by\_name=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L746)[#](#scikitplot.mcp.CitationOutput.model_validate "Link to this definition")
    :   Validate a pydantic model instance.

        If validation fails, the resulting [`ValidationError`][pydantic\_core.ValidationError] reports the
        rejected locations and values. [Logfire](../integrations/logfire.md) can retain the complete validation
        input and surrounding trace context for production debugging (see
        [Troubleshooting validation errors](../errors/troubleshooting.md)).

        Parameters:
        :   * ****obj**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")) – The object to validate.
            * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to enforce types strictly.
            * ****extra**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'allow'****,** **'ignore'****,** **'forbid'****]** **|** **None**) – Whether to ignore, allow, or forbid extra data during model validation.
              See the [`extra` configuration value][pydantic.ConfigDict.extra] for details.
            * ****from\_attributes**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to extract data from object attributes.
            * ****context**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") **|** **None**) – Additional context to pass to the validator.
            * ****by\_alias**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to use the field’s alias when validating against the provided input data.
            * ****by\_name**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to use the field’s name when validating against the provided input data.

        Raises:
        :   [****ValidationError****](scikitplot.corpus.ValidationError.html#scikitplot.corpus.ValidationError "scikitplot.corpus.ValidationError") – If the object could not be validated.

        Returns:
        :   The validated model instance.

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.15)")

    classmethod model\_validate\_json(**json\_data**, **\***, **strict=None**, **extra=None**, **context=None**, **by\_alias=None**, **by\_name=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L800)[#](#scikitplot.mcp.CitationOutput.model_validate_json "Link to this definition")
    :   !!! abstract “Usage Documentation”
        :   [JSON Parsing](../concepts/json.md#json-parsing)

        Validate the given JSON data against the Pydantic model.

        A [`ValidationError`][pydantic\_core.ValidationError] raised here reports the rejected locations and
        values, but may not retain the complete source document. Recording validations with
        [Logfire](../integrations/logfire.md) keeps the complete JSON input alongside the error — see
        [Troubleshooting validation errors](../errors/troubleshooting.md).

        Parameters:
        :   * ****json\_data**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)") **|** [**bytearray**](https://docs.python.org/3/builtins/stdtypes.html#bytearray "(in Python v3.15)")) – The JSON data to validate.
            * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to enforce types strictly.
            * ****extra**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'allow'****,** **'ignore'****,** **'forbid'****]** **|** **None**) – Whether to ignore, allow, or forbid extra data during model validation.
              See the [`extra` configuration value][pydantic.ConfigDict.extra] for details.
            * ****context**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") **|** **None**) – Extra variables to pass to the validator.
            * ****by\_alias**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to use the field’s alias when validating against the provided input data.
            * ****by\_name**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to use the field’s name when validating against the provided input data.

        Returns:
        :   The validated Pydantic model.

        Raises:
        :   [****ValidationError****](scikitplot.corpus.ValidationError.html#scikitplot.corpus.ValidationError "scikitplot.corpus.ValidationError") – If `json_data` is not a JSON string or the object could not be validated.

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.15)")

    classmethod model\_validate\_strings(**obj**, **\***, **strict=None**, **extra=None**, **context=None**, **by\_alias=None**, **by\_name=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L849)[#](#scikitplot.mcp.CitationOutput.model_validate_strings "Link to this definition")
    :   Validate the given object with string data against the Pydantic model.

        Parameters:
        :   * ****obj**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")) – The object containing string data to validate.
            * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to enforce types strictly.
            * ****extra**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'allow'****,** **'ignore'****,** **'forbid'****]** **|** **None**) – Whether to ignore, allow, or forbid extra data during model validation.
              See the [`extra` configuration value][pydantic.ConfigDict.extra] for details.
            * ****context**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") **|** **None**) – Extra variables to pass to the validator.
            * ****by\_alias**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to use the field’s alias when validating against the provided input data.
            * ****by\_name**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**) – Whether to use the field’s name when validating against the provided input data.

        Returns:
        :   The validated Pydantic model.

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.15)")

    n: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.mcp.CitationOutput.n "Link to this definition")

    classmethod parse\_file(**path**, **\***, **content\_type=None**, **encoding='utf8'**, **proto=None**, **allow\_pickle=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L1508)[#](#scikitplot.mcp.CitationOutput.parse_file "Link to this definition")
    :   Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **Path**)
            * ****content\_type**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****encoding**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****proto**** (**DeprecatedParseProtocol** **|** **None**)
            * ****allow\_pickle**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   Self

    classmethod parse\_obj(**obj**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L1444)[#](#scikitplot.mcp.CitationOutput.parse_obj "Link to this definition")
    :   Parameters:
        :   ****obj**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.15)")

    classmethod parse\_raw(**b**, **\***, **content\_type=None**, **encoding='utf8'**, **proto=None**, **allow\_pickle=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L1454)[#](#scikitplot.mcp.CitationOutput.parse_raw "Link to this definition")
    :   Parameters:
        :   * ****b**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)"))
            * ****content\_type**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****encoding**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****proto**** (**DeprecatedParseProtocol** **|** **None**)
            * ****allow\_pickle**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   Self

    classmethod schema(**by\_alias=True**, **ref\_template='#/$defs/{model}'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L1646)[#](#scikitplot.mcp.CitationOutput.schema "Link to this definition")
    :   Parameters:
        :   * ****by\_alias**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****ref\_template**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**Dict**](https://docs.python.org/3/library/typing.html#typing.Dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    classmethod schema\_json(**\***, **by\_alias=True**, **ref\_template='#/$defs/{model}'**, **\*\*dumps\_kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L1658)[#](#scikitplot.mcp.CitationOutput.schema_json "Link to this definition")
    :   Parameters:
        :   * ****by\_alias**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****ref\_template**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****dumps\_kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    score: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[#](#scikitplot.mcp.CitationOutput.score "Link to this definition")

    source\_uri: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.mcp.CitationOutput.source_uri "Link to this definition")

    title: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.mcp.CitationOutput.title "Link to this definition")

    classmethod update\_forward\_refs(**\*\*localns**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L1691)[#](#scikitplot.mcp.CitationOutput.update_forward_refs "Link to this definition")
    :   Parameters:
        :   ****localns**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   None

    classmethod validate(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../pydantic/main.py#L1681)[#](#scikitplot.mcp.CitationOutput.validate "Link to this definition")
    :   Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.15)")