# IncompatibleSchemaError[#](#incompatibleschemaerror "Link to this heading")

exception scikitplot.corpus.IncompatibleSchemaError[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_schema.py#L1005)[#](#scikitplot.corpus.IncompatibleSchemaError "Link to this definition")
:   Raised for data written by another generation of the document schema.

    A payload, a store row, a pickled export or a checkpoint line that declares
    no `schema_version`, or a MAJOR version this build cannot read.

    Notes

    ****User-focused.**** The remedy is always to rebuild from the sources with
    this build: a major generation changes what fields mean (3.0 widened every
    identity to 64 hex characters), so nothing is converted or guessed.

    ****Developer-focused.**** A subclass of [`ValueError`](https://docs.python.org/3/builtins/exceptions.html#ValueError "(in Python v3.15)") so existing handlers
    still catch it. Readers that skip a **malformed** row must re-raise this one:
    a whole store from another generation is not a malformed row, and skipping
    every row would present it as empty.

    Annotation:
    :   Unrecognized objtype: `exception`