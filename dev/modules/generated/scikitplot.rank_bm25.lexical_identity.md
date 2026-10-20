# lexical\_identity[#](#lexical-identity "Link to this heading")

scikitplot.rank\_bm25.lexical\_identity(**recipe**, **analyzer**, **parameters**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/rank_bm25/_identity.py#L266)[#](#scikitplot.rank_bm25.lexical_identity "Link to this definition")
:   Return the identity of a lexical build.

    Parameters:
    :   ****recipe****Recipe
        :   The scoring formula used.

        ****analyzer****Analyzer or None
        :   How the text was tokenised. `None` records that the caller supplied
            tokens directly, which is a different build from any analysed one.

        ****parameters****mapping
        :   Scoring parameters, e.g. `{"k1": 1.5, "b": 0.75}`.

    Returns:
    :   str
        :   A 64-character hex digest covering what produced the numbers.

    Parameters:
    :   * ****recipe**** ([**Recipe**](scikitplot.rank_bm25.Recipe.html#scikitplot.rank_bm25.Recipe "scikitplot.rank_bm25._identity.Recipe"))
        * ****analyzer**** ([**Analyzer**](scikitplot.rank_bm25.Analyzer.html#scikitplot.rank_bm25.Analyzer "scikitplot.rank_bm25._identity.Analyzer") **|** **None**)
        * ****parameters**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Return type:
    :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    Notes

    ****Developer.**** Parameters are sorted by name, so identity does not depend on
    the order a caller happened to pass them. The corpus content is deliberately
    not part of this: it answers “how was this built”, and the documents answer
    “what was built from”. Mixing them would mean a re-tokenisation and a new
    document looked like the same kind of change.