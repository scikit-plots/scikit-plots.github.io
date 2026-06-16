# normalize\_extractor\_output[#](#normalize-extractor-output "Link to this heading")

scikitplot.corpus.normalize\_extractor\_output(**raw**, **\***, **source\_type=SourceType.UNKNOWN**, **section\_type=SectionType.TEXT**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_readers/_custom.py#L99)[#](#scikitplot.corpus.normalize_extractor_output "Link to this definition")
:   Coerce an extractor return value to a list of raw chunk dicts.

    Every dict in the returned list is guaranteed to contain a `"text"`
    key. Missing `"section_type"` and `"source_type"` keys are filled
    with the supplied defaults.

    Parameters:
    :   ****raw****str, list[str], dict, or list[dict]
        :   Value returned by a user-supplied extractor callable. Supported
            types:

            `str`
            :   Entire resource as a single text chunk.

            `list[str]`
            :   Multiple text chunks. All elements must be `str`.

            `dict`
            :   Single chunk with text and optional metadata. Must contain a
                `"text"` key whose value is a `str`.

            `list[dict]`
            :   Multiple chunks. Every element must be a `dict` with a
                `"text"` key.

        ****source\_type****SourceType, optional
        :   Default source type injected into chunks that do not specify
            `"source_type"`.
            Default: `UNKNOWN`.

        ****section\_type****SectionType, optional
        :   Default section type injected into chunks that do not specify
            `"section_type"`.
            Default: `TEXT`.

    Returns:
    :   list of dict
        :   Normalised list of raw chunk dicts, each containing at minimum
            `{"text": str}`. The list may be empty when `raw` is an empty
            list.

    Raises:
    :   TypeError
        :   If `raw` is not one of the four supported types, or if a list
            contains a mix of `str` and non-`str` elements, or if a list
            element is neither `str` nor `dict`.

        ValueError
        :   If any `dict` in `raw` is missing a `"text"` key, or if the
            `"text"` value is not a `str`.

    Parameters:
    :   * ****raw**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType"))
        * ****section\_type**** ([**SectionType**](scikitplot.corpus.SectionType.html#scikitplot.corpus.SectionType "scikitplot.corpus._schema.SectionType"))

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]]

    Notes

    This function is intentionally **pure** (no side effects, deterministic).
    It is called by [`CustomReader`](scikitplot.corpus.CustomReader.html#scikitplot.corpus.CustomReader "scikitplot.corpus.CustomReader") and by the `custom_extractor`
    dispatch branches of `PDFReader`,
    `ImageReader`,
    `AudioReader`, and
    `VideoReader`.

    Examples

    Try it in your browser!

    Single string → one-element list:

    ```
    >>> from scikitplot.corpus._readers._custom import normalize_extractor_output
    >>> normalize_extractor_output("Hello world")
    [{'text': 'Hello world', 'section_type': 'text', 'source_type': 'unknown'}]

    ```

    List of strings → list of chunk dicts:

    ```
    >>> normalize_extractor_output(["Page one", "Page two"])
    [{'text': 'Page one', ...}, {'text': 'Page two', ...}]

    ```

    Dict with extra metadata preserved:

    ```
    >>> normalize_extractor_output({"text": "Hello", "page_number": 0})
    [{'text': 'Hello', 'page_number': 0, 'section_type': 'text', 'source_type': 'unknown'}]

    ```
    Go BackOpen In Tab