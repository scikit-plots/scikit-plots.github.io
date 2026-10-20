# scorer\_backend\_info[#](#scorer-backend-info "Link to this heading")

scikitplot.corpus.scorer\_backend\_info()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_scorer.py#L391)[#](#scikitplot.corpus.scorer_backend_info "Link to this definition")
:   Report which base class corpus scorers use in this process.

    Returns:
    :   ScorerBackendInfo

    Return type:
    :   [**ScorerBackendInfo**](scikitplot.corpus.ScorerBackendInfo.html#scikitplot.corpus.ScorerBackendInfo "scikitplot.corpus._metrics._scorer.ScorerBackendInfo")

    Examples

    Try it in your browser!
    ```
    >>> scorer_backend_info().base in {"sklearn", "vendored"}
    True

    ```
    Go BackOpen In Tab