# assert\_capability\_vocabulary\_matches\_corpus[#](#assert-capability-vocabulary-matches-corpus "Link to this heading")

scikitplot.mcp.assert\_capability\_vocabulary\_matches\_corpus()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/mcp/_capabilities.py#L134)[#](#scikitplot.mcp.assert_capability_vocabulary_matches_corpus "Link to this definition")
:   Verify this module’s capability vocabulary still matches Corpus’s.

    Raises:
    :   RuntimeError
        :   If `scikitplot.corpus` is not installed.

        AssertionError
        :   If Corpus’s [`CapabilityStatus`](scikitplot.corpus.CapabilityStatus.html#scikitplot.corpus.CapabilityStatus "scikitplot.corpus.CapabilityStatus") has gained or
            renamed a member relative to the constants defined here.

    Return type:
    :   None

    Notes

    ****Developer-focused.**** Drift gate for the duplicated vocabulary. Called by
    the test suite whenever `scikitplot.corpus` is importable.