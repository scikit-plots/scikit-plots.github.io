# online\_help[#](#online-help "Link to this heading")

scikitplot.online\_help(**query=''**, **docs\_root\_url='https://scikit-plots.github.io/'**, **search\_page='search.html'**, **new\_window=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/__init__.py#L452)[#](#scikitplot.online_help "Link to this definition")
:   Open the online documentation search page in the default web browser.

    Parameters:
    :   ****query****str, optional
        :   The search query. Defaults to `""`.

        ****docs\_root\_url****str, optional
        :   Base URL of the documentation website.
            Overridden by the `DOCS_ROOT_URL` environment variable when set.
            Defaults to `"https://scikit-plots.github.io/"`.

        ****search\_page****str, optional
        :   Search page path relative to `docs_root_url`.
            Defaults to `"search.html"`.

        ****new\_window****int, optional
        :   Browser open mode — `0` same window, `1` new window,
            `2` new tab. Defaults to `0`.

    Returns:
    :   bool
        :   `True` if the browser was successfully launched, `False`
            otherwise.

    Raises:
    :   Does not raise — all errors are caught and logged; returns `False`.

    Parameters:
    :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****docs\_root\_url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****search\_page**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****new\_window**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    Return type:
    :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")

    Notes

    ****User:**** Requires an active internet connection. The URL printed to
    stderr shows the exact page that will open.

    ****Developer:**** URL construction is intentionally separated into
    `_validate_base_url` and `_build_docs_url` so that each concern
    is independently testable and the security boundary is explicit.
    `os.getenv` is resolved **before** validation so that an unsafe env
    value is rejected with a clear error rather than silently used.

    Examples

    Try it in your browser!
    ```
    >>> import scikitplot
    >>> scikitplot.online_help("installation")
    https://scikit-plots.github.io/dev/search.html?q=installation

    ```
    Go BackOpen In Tab