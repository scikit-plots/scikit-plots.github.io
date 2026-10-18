# make\_levenshtein\_ranker[#](#make-levenshtein-ranker "Link to this heading")

scikitplot.corpus.make\_levenshtein\_ranker(**\***, **backend='auto'**, **strict=False**, **use\_normalized\_text=True**, **score\_cutoff=0.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_similarity/_pairwise.py#L389)[#](#scikitplot.corpus.make_levenshtein_ranker "Link to this definition")
:   Make a [`CustomRetrievalIndex`](scikitplot.corpus.CustomRetrievalIndex.html#scikitplot.corpus.CustomRetrievalIndex "scikitplot.corpus.CustomRetrievalIndex") ranker by Levenshtein similarity.

    Parameters:
    :   ****backend****str, default=”auto”
        :   A backend of [`scikitplot.levenshtein.available_backends`](scikitplot.levenshtein.available_backends.html#scikitplot.levenshtein.available_backends "scikitplot.levenshtein.available_backends").

        ****strict****bool, default=False
        :   Raise instead of falling back when `backend` is unavailable.

        ****use\_normalized\_text****bool, default=True
        :   Compare with `normalized_text` when a document has one.

        ****score\_cutoff****float, default=0.0
        :   Minimum normalised similarity in [0, 1]. `config.top_k` is an upper
            bound: a cutoff may return fewer hits.

    Returns:
    :   LevenshteinRanker

    Raises:
    :   ImportError
        :   If [`scikitplot.levenshtein`](../../apis/scikitplot.levenshtein.html#module-scikitplot.levenshtein "scikitplot.levenshtein") is not installed, or `strict=True`
            and `backend` is unavailable.

        TypeError, ValueError
        :   For an invalid argument, including an unknown backend name.

    Parameters:
    :   * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****use\_normalized\_text**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****score\_cutoff**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    Return type:
    :   [**LevenshteinRanker**](scikitplot.corpus.LevenshteinRanker.html#scikitplot.corpus.LevenshteinRanker "scikitplot.corpus._similarity._pairwise.LevenshteinRanker")

    > **See also**
    > [`make_pairwise_ranker`](scikitplot.corpus.make_pairwise_ranker.html#scikitplot.corpus.make_pairwise_ranker "scikitplot.corpus.make_pairwise_ranker")
    :   Any pairwise function.

    Notes

    The backend name is checked here, and [`scikitplot.levenshtein.rank`](scikitplot.levenshtein.rank.html#scikitplot.levenshtein.rank "scikitplot.levenshtein.rank")
    resolves it once per search, so an unavailable backend warns once per
    search rather than once per document.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus import (
    ...     CorpusDocument,
    ...     RetrievalConfig,
    ...     make_levenshtein_ranker,
    ... )
    >>> ranker = make_levenshtein_ranker(backend="python", score_cutoff=0.5)
    >>> docs = [
    ...     CorpusDocument.create("a.txt", 0, "colour"),
    ...     CorpusDocument.create("b.txt", 0, "cloud"),
    ... ]
    >>> [
    ...     (hit.doc.text, hit.backend)
    ...     for hit in ranker("color", docs, RetrievalConfig(top_k=5))
    ... ]
    [('colour', 'levenshtein:python')]

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_levenshtein_script_thumb.png)

[Use Levenshtein distance with Corpus retrieval](../../auto_examples/corpus/plot_corpus_levenshtein_script.html)

Use Levenshtein distance with Corpus retrieval![](../../_images/sphx_glr_plot_levenshtein_corpus_script_thumb.png)

[Use Levenshtein with Corpus](../../auto_examples/levenshtein/plot_levenshtein_corpus_script.html)

Use Levenshtein with Corpus