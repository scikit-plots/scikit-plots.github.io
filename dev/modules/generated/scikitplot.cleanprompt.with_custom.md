# with\_custom[#](#with-custom "Link to this heading")

scikitplot.cleanprompt.with\_custom(**paths**, **conflict='error'**, **base=None**, **pattern\_risk=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_custom.py#L220)[#](#scikitplot.cleanprompt.with_custom "Link to this definition")
:   Return the built-in catalog with custom definitions merged in.

    Parameters:
    :   ****paths****path, iterable of paths, or None
        :   Definition files. `None` or empty returns `base` unchanged.

        ****conflict****{‘error’, ‘replace’}, default=’error’
        :   What to do when a custom definition differs from a built-in of the same
            name.

        ****base****Catalog, optional
        :   Defaults to `builtin_catalog`.

        ****pattern\_risk****{‘warn’, ‘ignore’, ‘refuse’}, optional
        :   Passed to [`load_custom`](scikitplot.cleanprompt.load_custom.html#scikitplot.cleanprompt.load_custom "scikitplot.cleanprompt.load_custom").

    Returns:
    :   Catalog
        :   Validated as a whole, including every `requires`.

    Parameters:
    :   * ****paths**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")**]** **|** **None**)
        * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****base**** (**Catalog** **|** **None**)
        * ****pattern\_risk**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   **Catalog**

    Examples

    Try it in your browser!
    ```
    >>> import json, tempfile, pathlib
    >>> folder = pathlib.Path(tempfile.mkdtemp())
    >>> _ = (folder / "hr.json").write_text(
    ...     json.dumps(
    ...         {
    ...             "name": "hr",
    ...             "version": 1,
    ...             "summary": "HR ids.",
    ...             "requires": ["personal"],
    ...             "fields": [
    ...                 {"names": ["badge_id"], "kind": "EMPLOYEE", "role": "id"}
    ...             ],
    ...         }
    ...     )
    ... )
    >>> [p.name for p in with_custom(folder / "hr.json").resolve_packs("hr")]
    ['personal', 'hr']

    ```
    Go BackOpen In Tab