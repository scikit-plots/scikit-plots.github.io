# citation[#](#citation "Link to this heading")

scikitplot.config.citation(**which='all'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/config/_citation.py#L193)[#](#scikitplot.config.citation "Link to this definition")
:   Return a BibTeX citation of scikit-plots.

    Parameters:
    :   ****which****{“all”, “build”}, default=”all”
        :   `"all"` cites every version (the concept DOI, which resolves to the
            latest release); it is [`__bibtex__`](scikitplot.config.__bibtex__.html#scikitplot.config.__bibtex__ "scikitplot.config.__bibtex__"). `"build"` cites the
            installed build: its version and kind, the build version with its
            commit, and the URL of that exact source tree.

    Returns:
    :   str
        :   One `@software` entry.

    Raises:
    :   TypeError
        :   If `which` is not a str.

        ValueError
        :   If `which` is not `"all"` or `"build"`.

        RuntimeError
        :   If the installed build records an invalid version, commit or date.

    > **See also**
    > [`__bibtex__`](scikitplot.config.__bibtex__.html#scikitplot.config.__bibtex__ "scikitplot.config.__bibtex__")
    :   The entry for every version.

    Notes

    ****User notes.**** Cite `which="build"` when results must be reproducible:
    a notebook can record exactly what it ran. A build made without git has
    no commit, so its entry has no year or month and its `url` is the
    repository. A release gets its own Zenodo DOI only when it was known when
    the package was built. Nothing is read from the network.

    ****Developer notes.**** The fields come from `tools/citation/citation_ref.py`
    (`fields`, embedded at build time) and the build facts from
    `scikitplot.version`, imported only when `which="build"`. The entry is
    the one `citation_ref.py render --commit <git_revision> --date <date>`
    writes for that version.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.config import citation
    >>> citation() == citation("all")
    True
    >>> citation("build").startswith("@software{scikit-plots_v")
    True

    ```
    Go BackOpen In Tab