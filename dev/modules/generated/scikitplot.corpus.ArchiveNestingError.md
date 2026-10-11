# ArchiveNestingError[#](#archivenestingerror "Link to this heading")

exception scikitplot.corpus.ArchiveNestingError[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_readers/_zip.py#L91)[#](#scikitplot.corpus.ArchiveNestingError "Link to this definition")
:   Raised when archive nesting exceeds `max_depth` (nested-archive bomb).

    A subclass of [`ValueError`](https://docs.python.org/3/builtins/exceptions.html#ValueError "(in Python v3.15)") (so existing handlers still catch it), but
    distinct so per-member error handling re-raises it and aborts the whole
    archive rather than skipping a single member (CORPUS-ARC-002).

    Annotation:
    :   Unrecognized objtype: `exception`