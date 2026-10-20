# SourceProtocol[#](#sourceprotocol "Link to this heading")

class scikitplot.corpus.SourceProtocol(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L870)[#](#scikitplot.corpus.SourceProtocol "Link to this definition")
:   Structural interface every document source must satisfy.

    load()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L874)[#](#scikitplot.corpus.SourceProtocol.load "Link to this definition")
    :   Load and return all available documents.

        Returns:
        :   list[CorpusDocument]

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[CorpusDocument](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument")]

    stream()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L883)[#](#scikitplot.corpus.SourceProtocol.stream "Link to this definition")
    :   Yield documents one at a time without loading all into memory.

        Yields:
        :   CorpusDocument

        Return type:
        :   Iterator[[CorpusDocument](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument")]