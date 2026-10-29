# make\_pairwise\_ranker[#](#make-pairwise-ranker "Link to this heading")

scikitplot.corpus.make\_pairwise\_ranker(**score\_func**, **\***, **greater\_is\_better=True**, **use\_normalized\_text=True**, **score\_cutoff=None**, **name=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_similarity/_pairwise.py#L198)[#](#scikitplot.corpus.make_pairwise_ranker "Link to this definition")
:   Make a [`CustomRetrievalIndex`](scikitplot.corpus.CustomRetrievalIndex.html#scikitplot.corpus.CustomRetrievalIndex "scikitplot.corpus.CustomRetrievalIndex") ranker from a pairwise function.

    Parameters:
    :   ****score\_func****callable
        :   `score_func(query, text, **kwargs) -> float`, for example
            [`edit_similarity`](scikitplot.corpus.edit_similarity.html#scikitplot.corpus.edit_similarity "scikitplot.corpus.edit_similarity"), a RapidFuzz ratio or a
            cross-encoder.

        ****greater\_is\_better****bool, default=True
        :   `False` for a distance, which is negated so higher is better.

        ****use\_normalized\_text****bool, default=True
        :   Compare with `normalized_text` when a document has one.

        ****score\_cutoff****float or None, default=None
        :   Minimum (signed) score of a returned hit.

        ****name****str or None, default=None
        :   Recorded as each hit’s `native_metric`.

        ****\*\*kwargs****dict
        :   Passed to `score_func` on every call.

    Returns:
    :   PairwiseRanker

    Raises:
    :   TypeError
        :   For a non-callable `score_func`, non-bool flags, or `kwargs` that do
            not fit its signature.

        ValueError
        :   For a non-finite `score_cutoff`.

    Parameters:
    :   * ****score\_func**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****...****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****greater\_is\_better**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****use\_normalized\_text**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****score\_cutoff**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**PairwiseRanker**](scikitplot.corpus.PairwiseRanker.html#scikitplot.corpus.PairwiseRanker "scikitplot.corpus._similarity._pairwise.PairwiseRanker")

    > **See also**
    > [`make_levenshtein_ranker`](scikitplot.corpus.make_levenshtein_ranker.html#scikitplot.corpus.make_levenshtein_ranker "scikitplot.corpus.make_levenshtein_ranker")
    :   The Levenshtein ranker with backend provenance.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus import (
    ...     CorpusDocument,
    ...     CustomRetrievalIndex,
    ...     edit_similarity,
    ...     make_pairwise_ranker,
    ... )
    >>> index = CustomRetrievalIndex(
    ...     custom_scorer_fn=make_pairwise_ranker(edit_similarity)
    ... )
    >>> index.build(
    ...     [
    ...         CorpusDocument.create("a.txt", 0, "kitten"),
    ...         CorpusDocument.create("b.txt", 0, "sitting"),
    ...     ]
    ... )
    >>> [hit.doc.text for hit in index.search("kitten")]
    ['kitten', 'sitting']

    ```
    Go BackOpen In Tab