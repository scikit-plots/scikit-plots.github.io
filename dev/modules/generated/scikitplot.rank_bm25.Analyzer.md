# Analyzer[#](#analyzer "Link to this heading")

class scikitplot.rank\_bm25.Analyzer(**name**, **version='1'**, **language=None**, **stopwords=frozenset({})**, **stemmer=None**, **lowercase=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/rank_bm25/_identity.py#L72)[#](#scikitplot.rank_bm25.Analyzer "Link to this definition")
:   How text becomes tokens, declared so a build can record it.

    Parameters:
    :   ****name****str
        :   Analyzer name, e.g. `"whitespace"`.

        ****version****str, optional
        :   Version of this analyzer’s behaviour. Bump it whenever the tokens it
            produces change, so an index built with the old behaviour is visibly a
            different build rather than silently the same one.

        ****language****str or None, optional
        :   Language tag the analysis assumes, when it assumes one.

        ****stopwords****frozenset of str, optional
        :   Tokens removed after splitting.

        ****stemmer****str or None, optional
        :   Name of the stemmer applied, if any. A name rather than a callable: a
            callable has no identity that survives the process.

        ****lowercase****bool, optional
        :   Whether text is case-folded before splitting.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****stopwords**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****stemmer**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****lowercase**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****User.**** Two indexes built with analyzers that share a fingerprint hold
    comparable frequencies. Two that do not, do not – whatever their class
    names say.

    property fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.rank_bm25.Analyzer.fingerprint "Link to this definition")
    :   Full SHA-256 digest of the declared behaviour.

        Returns:
        :   str
            :   A 64-character hex digest, stable across processes because every
                part is a declared string and sets are sorted before hashing.

    language: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.rank_bm25.Analyzer.language "Link to this definition")

    lowercase: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.rank_bm25.Analyzer.lowercase "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/rank_bm25/_identity.py#L72)[#](#scikitplot.rank_bm25.Analyzer.name "Link to this definition")

    stemmer: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.rank_bm25.Analyzer.stemmer "Link to this definition")

    stopwords: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = frozenset({})[#](#scikitplot.rank_bm25.Analyzer.stopwords "Link to this definition")

    tokenize(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/rank_bm25/_identity.py#L170)[#](#scikitplot.rank_bm25.Analyzer.tokenize "Link to this definition")
    :   Split `text` into tokens, applying what this analyzer declares.

        Parameters:
        :   ****text****str
            :   Text to analyse.

        Returns:
        :   list of str
            :   Tokens, in order.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

        Notes

        ****Developer.**** The declaration drives the behaviour rather than
        describing it from a distance. A declared field that did not affect the
        tokens would make the fingerprint a claim about nothing.

        `stemmer` is recorded but not applied here: this module carries no
        stemming implementation, and pretending to apply one would be worse than
        declaring that a build used it.

    version: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = '1'[#](#scikitplot.rank_bm25.Analyzer.version "Link to this definition")