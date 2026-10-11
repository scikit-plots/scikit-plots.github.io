# is\_valid\_doc\_id[#](#is-valid-doc-id "Link to this heading")

scikitplot.mcp.is\_valid\_doc\_id(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/mcp/_core.py#L95)[#](#scikitplot.mcp.is_valid_doc_id "Link to this definition")
:   Return whether `value` is an acceptable document identifier.

    Parameters:
    :   ****value****object
        :   Candidate identifier. A non-string is not an identifier and is
            answered `False` rather than raised on, so a caller validating
            untrusted input gets a decision instead of a traceback.

    Returns:
    :   bool
        :   `True` when the value matches [`DOC_ID_RE`](scikitplot.mcp.DOC_ID_RE.html#scikitplot.mcp.DOC_ID_RE "scikitplot.mcp.DOC_ID_RE").

    Parameters:
    :   ****value**** ([**object**](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)"))

    Return type:
    :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")