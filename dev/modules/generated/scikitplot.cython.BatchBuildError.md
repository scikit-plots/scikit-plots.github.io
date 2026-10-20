# BatchBuildError[#](#batchbuilderror "Link to this heading")

exception scikitplot.cython.BatchBuildError(**result**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cython/_result.py#L468)[#](#scikitplot.cython.BatchBuildError "Link to this definition")
:   Raised by fail-fast batch builds, carrying the partial result.

    Attributes:
    :   ****result****BatchBuildResult
        :   The partial result up to and including the failure, so callers can see
            what was already committed and resume (CYTHON-BATCH-001).

    Parameters:
    :   ****result**** ([**BatchBuildResult**](scikitplot.cython.BatchBuildResult.html#scikitplot.cython.BatchBuildResult "scikitplot.cython.BatchBuildResult"))

    Return type:
    :   None

    Annotation:
    :   Unrecognized objtype: `exception`

    Parameters:
    :   ****result**** ([**BatchBuildResult**](scikitplot.cython.BatchBuildResult.html#scikitplot.cython.BatchBuildResult "scikitplot.cython.BatchBuildResult"))

    Return type:
    :   None