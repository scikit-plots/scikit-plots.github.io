# html\_to\_markdown[#](#html-to-markdown "Link to this heading")

scikitplot.\_externals.\_sphinx\_ext.\_sphinx\_ai\_assistant.html\_to\_markdown(**html\_content**, **strip\_tags=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/_externals/_sphinx_ext/_sphinx_ai_assistant/__init__.py#L1633)[#](#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.html_to_markdown "Link to this definition")
:   Convert an HTML string to Markdown using the Sphinx-tuned converter.

    Parameters:
    :   ****html\_content****str
        :   Raw HTML string to convert.

        ****strip\_tags****str or list of str or None, optional
        :   HTML tag names whose elements (including all their content) are
            removed before conversion. A bare `str` is treated as a
            single-element list. Defaults to `["script", "style"]` when
            `None`.

    Returns:
    :   str
        :   Markdown representation of the HTML content.

    Raises:
    :   ImportError
        :   If `markdownify` is not installed.

    Parameters:
    :   * ****html\_content**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****strip\_tags**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    Notes

    `bs4` is imported ****lazily**** inside this function. If it is not
    available the stripping step is skipped; `markdownify`’s own
    `strip=` option still removes the listed tags from the output.

    Examples

    ```
    >>> html_to_markdown("<h1>Hello</h1><p>World</p>")
    '# Hello\n\nWorld\n\n'

    ```