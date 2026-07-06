# process\_html\_directory[#](#process-html-directory "Link to this heading")

scikitplot.\_externals.\_sphinx\_ext.\_sphinx\_ai\_assistant.process\_html\_directory(**input\_dir**, **\***, **output\_dir=None**, **selectors=None**, **theme\_preset=None**, **exclude\_patterns=None**, **strip\_tags=None**, **max\_workers=None**, **recursive=True**, **generate\_llms=False**, **base\_url=''**, **llms\_txt\_max\_entries=None**, **llms\_txt\_full\_content=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/_externals/_sphinx_ext/_sphinx_ai_assistant/__init__.py#L2848)[#](#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.process_html_directory "Link to this definition")
:   Walk any HTML directory tree and convert pages to Markdown.

    This function is entirely ****Sphinx-free**** and works with any
    static-site generator: Sphinx, MkDocs, Jekyll, Hugo, Hexo,
    Docusaurus, VitePress, GitBook, or plain HTML.

    Parameters:
    :   ****input\_dir****str or pathlib.Path
        :   Root directory containing `.html` files.

        ****output\_dir****str or pathlib.Path or None, optional
        :   Directory where `.md` files are written, mirroring the
            directory structure of **input\_dir**. When `None` (default),
            `.md` files are written alongside each `.html` file (inline
            mode).

        ****selectors****list of str or None, optional
        :   CSS selectors tried in order to locate the main content element.
            When `None`, uses the module default combined with **theme\_preset**.

        ****theme\_preset****str or None, optional
        :   Theme name from `_THEME_SELECTOR_PRESETS` (e.g.
            `"mkdocs_material"`, `"jekyll"`, `"plain_html"`). Merged
            with **selectors**.

        ****exclude\_patterns****list of str or None, optional
        :   Path substrings to skip. Defaults to
            `["genindex", "search", "py-modindex", "_sources", "_static"]`.

        ****strip\_tags****list of str or None, optional
        :   HTML tag names removed (with content) before conversion. Defaults
            to `["script", "style", "nav", "footer", "header"]`.

        ****max\_workers****int or None, optional
        :   Maximum parallel worker processes. `None` → auto-detect (CPU
            count or 1).

        ****recursive****bool, optional
        :   When `True` (default), recurse into subdirectories. When
            `False`, only the top-level `.html` files are processed.

        ****generate\_llms****bool, optional
        :   When `True`, write an `llms.txt` index file after conversion.

        ****base\_url****str, optional
        :   Base URL prepended to `.md` paths in `llms.txt`.

        ****llms\_txt\_max\_entries****int or None, optional
        :   Cap on the number of entries in `llms.txt`.

        ****llms\_txt\_full\_content****bool, optional
        :   When `True`, embed full Markdown content inline in `llms.txt`.

    Returns:
    :   dict
        :   `{"generated": int, "skipped": int, "errors": int}` — counts of
            files processed, skipped, and errored.

    Raises:
    :   ValueError
        :   If **input\_dir** does not exist or is not a directory.

        ImportError
        :   If `beautifulsoup4` or `markdownify` is not installed.

    Parameters:
    :   * ****input\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****output\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****selectors**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****theme\_preset**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****exclude\_patterns**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****strip\_tags**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****max\_workers**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****recursive**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****generate\_llms**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****base\_url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****llms\_txt\_max\_entries**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****llms\_txt\_full\_content**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")]

    Examples

    Try it in your browser!
    ```
    >>> stats = process_html_directory(
    ...     "/site/_build",
    ...     theme_preset="mkdocs_material",
    ...     generate_llms=True,
    ...     base_url="https://example.com",
    ... )
    >>> print(stats)
    {"generated": 42, "skipped": 3, "errors": 0}

    ```
    Go BackOpen In Tab