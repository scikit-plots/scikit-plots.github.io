# ArchiveBudgetError[#](#archivebudgeterror "Link to this heading")

exception scikitplot.corpus.ArchiveBudgetError[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_readers/_zip.py#L114)[#](#scikitplot.corpus.ArchiveBudgetError "Link to this definition")
:   Raised when the members of an archive tree inflate past its extraction budget.

    The budget belongs to the top-level archive and is shared by every
    archive nested in it, so a small file cannot extract more through
    nesting than it could directly. Like [`ArchiveNestingError`](scikitplot.corpus.ArchiveNestingError.html#scikitplot.corpus.ArchiveNestingError "scikitplot.corpus.ArchiveNestingError"), it
    aborts the whole tree instead of skipping one member (CX-41). With
    `on_text_limit="truncate"` the top-level reader ends the archive with
    a warning instead, keeping what it has read.

    Annotation:
    :   Unrecognized objtype: `exception`