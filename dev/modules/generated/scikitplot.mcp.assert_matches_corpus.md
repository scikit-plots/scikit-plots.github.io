# assert\_matches\_corpus[#](#assert-matches-corpus "Link to this heading")

scikitplot.mcp.assert\_matches\_corpus()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/mcp/_outcome.py#L337)[#](#scikitplot.mcp.assert_matches_corpus "Link to this definition")
:   Verify this module’s vocabulary still matches Corpus’s.

    Raises:
    :   RuntimeError
        :   If `scikitplot.corpus` is not installed.

        AssertionError
        :   If Corpus’s [`RetrievalStatus`](scikitplot.corpus.RetrievalStatus.html#scikitplot.corpus.RetrievalStatus "scikitplot.corpus.RetrievalStatus") has gained or
            renamed a member relative to the constants defined here.

    Return type:
    :   None

    Notes

    ****Developer-focused.**** This is the drift gate for the one piece of duplicated
    vocabulary in the MCP tier. It is called by the test suite whenever
    `scikitplot.corpus` is importable, so the strings above cannot silently
    diverge from the enum they mirror.