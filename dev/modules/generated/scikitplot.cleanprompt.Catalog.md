# Catalog[#](#catalog "Link to this heading")

class scikitplot.cleanprompt.Catalog(**packs=<factory>**, **formats=<factory>**, **documents=<factory>**, **partial=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_catalog.py#L119)[#](#scikitplot.cleanprompt.Catalog "Link to this definition")
:   An immutable set of packs and formats.

    Parameters:
    :   ****packs****mapping
        :   Name to [`PackSpec`](scikitplot.cleanprompt.PackSpec.html#scikitplot.cleanprompt.PackSpec "scikitplot.cleanprompt._packs.PackSpec").

        ****formats****mapping
        :   Name to [`FormatSpec`](scikitplot.cleanprompt.FormatSpec.html#scikitplot.cleanprompt.FormatSpec "scikitplot.cleanprompt._formats.FormatSpec").

        ****documents****mapping
        :   `"pack:NAME"` or `"format:NAME"` to the canonical JSON the spec was
            built from. Carried so a plan can be fingerprinted by content.

        ****partial****bool, default=False
        :   A fragment meant only to be merged — a set of custom definitions whose
            `requires` name packs that live in the catalog it will join. Cross
            references are checked when it is merged, not before.

    Raises:
    :   CleanPromptError
        :   If two formats claim one extension, or a `requires` names a pack that
            is not in the catalog, or the requirements form a cycle.

    Parameters:
    :   * ****packs**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**PackSpec**](scikitplot.cleanprompt.PackSpec.html#scikitplot.cleanprompt.PackSpec "scikitplot.cleanprompt._packs.PackSpec")**]**)
        * ****formats**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**FormatSpec**](scikitplot.cleanprompt.FormatSpec.html#scikitplot.cleanprompt.FormatSpec "scikitplot.cleanprompt._formats.FormatSpec")**]**)
        * ****documents**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****partial**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    static code\_vocabulary(**packs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_catalog.py#L429)[#](#scikitplot.cleanprompt.Catalog.code_vocabulary "Link to this definition")
    :   Return the union of the packs’ code sections.

        Parameters:
        :   ****packs****iterable of PackSpec
            :   Resolved packs.

        Returns:
        :   CodeSpec
            :   Sorted and deduplicated.

        Parameters:
        :   ****packs**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**PackSpec**](scikitplot.cleanprompt.PackSpec.html#scikitplot.cleanprompt.PackSpec "scikitplot.cleanprompt._packs.PackSpec")**]**)

        Return type:
        :   **CodeSpec**

    documents: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_catalog.py#L119)[#](#scikitplot.cleanprompt.Catalog.documents "Link to this definition")

    static field\_index(**packs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_catalog.py#L387)[#](#scikitplot.cleanprompt.Catalog.field_index "Link to this definition")
    :   Return normalised field name to rule, across packs.

        Parameters:
        :   ****packs****iterable of PackSpec
            :   Resolved packs.

        Returns:
        :   dict
            :   One entry per field name.

        Raises:
        :   CleanPromptError
            :   If two packs give one field name different kinds. Silently keeping
                either would decide what a value is called by the order packs
                were listed in.

        Parameters:
        :   ****packs**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**PackSpec**](scikitplot.cleanprompt.PackSpec.html#scikitplot.cleanprompt.PackSpec "scikitplot.cleanprompt._packs.PackSpec")**]**)

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**FieldSpec**](scikitplot.cleanprompt.FieldSpec.html#scikitplot.cleanprompt.FieldSpec "scikitplot.cleanprompt._packs.FieldSpec")]

    fingerprint(**packs**, **formats**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_catalog.py#L458)[#](#scikitplot.cleanprompt.Catalog.fingerprint "Link to this definition")
    :   Return a digest of the selected definitions’ content.

        Parameters:
        :   ****packs, formats****iterable
            :   The selection.

        Returns:
        :   str
            :   Hex SHA-256 over their canonical documents.

        Parameters:
        :   * ****packs**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**PackSpec**](scikitplot.cleanprompt.PackSpec.html#scikitplot.cleanprompt.PackSpec "scikitplot.cleanprompt._packs.PackSpec")**]**)
            * ****formats**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**FormatSpec**](scikitplot.cleanprompt.FormatSpec.html#scikitplot.cleanprompt.FormatSpec "scikitplot.cleanprompt._formats.FormatSpec")**]**)

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    format\_for(**path**, **allowed=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_catalog.py#L341)[#](#scikitplot.cleanprompt.Catalog.format_for "Link to this definition")
    :   Return the format that reads a file, or `None`.

        Parameters:
        :   ****path****str or path-like
            :   The file name. Only the name is used; nothing is opened.

            ****allowed****iterable of FormatSpec, optional
            :   Restrict the answer to these formats.

        Returns:
        :   FormatSpec or None
            :   `None` when no allowed format claims the extension.

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
            * ****allowed**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**FormatSpec**](scikitplot.cleanprompt.FormatSpec.html#scikitplot.cleanprompt.FormatSpec "scikitplot.cleanprompt._formats.FormatSpec")**]** **|** **None**)

        Return type:
        :   [**FormatSpec**](scikitplot.cleanprompt.FormatSpec.html#scikitplot.cleanprompt.FormatSpec "scikitplot.cleanprompt._formats.FormatSpec") | None

        Notes

        ****Developer notes.**** A dotfile such as `.env` has no suffix to
        [`pathlib`](https://docs.python.org/3/library/pathlib.html#module-pathlib "(in Python v3.15)"), so its whole name is tried as the extension. That is
        the only special case, and it is the one that matters: `.env` is
        where credentials live.

        Examples

        Try it in your browser!
        ```
        >>> builtin_catalog().format_for("deploy/.env").name
        'env'
        >>> builtin_catalog().format_for("notes.MD").name
        'markdown'

        ```
        Go BackOpen In Tab

    formats: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [FormatSpec](scikitplot.cleanprompt.FormatSpec.html#scikitplot.cleanprompt.FormatSpec "scikitplot.cleanprompt._formats.FormatSpec")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_catalog.py#L119)[#](#scikitplot.cleanprompt.Catalog.formats "Link to this definition")

    merge(**other**, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_catalog.py#L482)[#](#scikitplot.cleanprompt.Catalog.merge "Link to this definition")
    :   Return this catalog with another’s definitions added.

        Parameters:
        :   ****other****Catalog
            :   Usually a custom catalog.

            ****conflict****{‘error’, ‘replace’}, default=’error’
            :   What to do when both define a name **differently**. An identical
                redefinition is never a conflict.

        Returns:
        :   Catalog
            :   A new catalog.

        Raises:
        :   CleanPromptError
            :   On a conflict under `'error'`, naming every clashing definition.

        Parameters:
        :   * ****other**** ([**Catalog**](#scikitplot.cleanprompt.Catalog "scikitplot.cleanprompt._catalog.Catalog"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**Catalog**](#scikitplot.cleanprompt.Catalog "scikitplot.cleanprompt._catalog.Catalog")

    packs: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [PackSpec](scikitplot.cleanprompt.PackSpec.html#scikitplot.cleanprompt.PackSpec "scikitplot.cleanprompt._packs.PackSpec")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_catalog.py#L119)[#](#scikitplot.cleanprompt.Catalog.packs "Link to this definition")

    partial: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.cleanprompt.Catalog.partial "Link to this definition")

    resolve\_formats(**selection='all'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_catalog.py#L293)[#](#scikitplot.cleanprompt.Catalog.resolve_formats "Link to this definition")
    :   Return the formats a selection means, sorted by name.

        Parameters:
        :   ****selection****str or iterable of str or None, default=’all’
            :   `'all'`, one name, or several; `None` or `'none'` for none.
                An extension such as `'.sh'` is accepted in place of a name.

        Returns:
        :   tuple of FormatSpec
            :   Sorted by name.

        Raises:
        :   CleanPromptError
            :   If a name or extension is unknown.

        Parameters:
        :   ****selection**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**FormatSpec**](scikitplot.cleanprompt.FormatSpec.html#scikitplot.cleanprompt.FormatSpec "scikitplot.cleanprompt._formats.FormatSpec"), …]

    resolve\_packs(**selection='all'**, **formats=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_catalog.py#L236)[#](#scikitplot.cleanprompt.Catalog.resolve_packs "Link to this definition")
    :   Return the packs a selection means, with their requirements.

        Parameters:
        :   ****selection****str or iterable of str or None, default=’all’
            :   `'all'`, `'none'`, `'auto'`, one name, or several. `None`
                means `'none'`.

            ****formats****iterable of FormatSpec, optional
            :   Consulted only by `'auto'`: the union of their suggested packs.

        Returns:
        :   tuple of PackSpec
            :   Dependencies first, ties broken by name.

        Raises:
        :   CleanPromptError
            :   If a name is unknown.

        Parameters:
        :   * ****selection**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
            * ****formats**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**FormatSpec**](scikitplot.cleanprompt.FormatSpec.html#scikitplot.cleanprompt.FormatSpec "scikitplot.cleanprompt._formats.FormatSpec")**]** **|** **None**)

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**PackSpec**](scikitplot.cleanprompt.PackSpec.html#scikitplot.cleanprompt.PackSpec "scikitplot.cleanprompt._packs.PackSpec"), …]

        Examples

        Try it in your browser!
        ```
        >>> [p.name for p in builtin_catalog().resolve_packs("addressbook")]
        ['personal', 'addressbook']

        ```
        Go BackOpen In Tab