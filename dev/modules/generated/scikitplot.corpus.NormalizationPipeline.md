# NormalizationPipeline[#](#normalizationpipeline "Link to this heading")

class scikitplot.corpus.NormalizationPipeline(**steps**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/corpus/_normalizers/_normalizer.py#L648)[#](#scikitplot.corpus.NormalizationPipeline "Link to this definition")
:   Apply a sequence of normalisers in order.

    Each normaliser in the pipeline receives the output of the previous
    one. Normalisers that have no effect return the document unchanged,
    so only modified documents incur a `replace()` call.

    Parameters:
    :   ****steps****sequence of NormalizerBase
        :   Ordered list of normalisers to apply.

    Raises:
    :   ValueError
        :   If `steps` is empty.

    Parameters:
    :   ****steps**** (**Sequence****[**[**NormalizerBase**](scikitplot.corpus.NormalizerBase.html#scikitplot.corpus.NormalizerBase "scikitplot.corpus.NormalizerBase")**]**)

    Examples

    Try it in your browser!
    ```
    >>> pipeline = NormalizationPipeline(
    ...     [
    ...         UnicodeNormalizer(form="NFKC"),
    ...         HTMLStripNormalizer(),
    ...         WhitespaceNormalizer(),
    ...     ]
    ... )
    >>> result = pipeline.normalize_doc(doc)

    ```
    Go BackOpen In Tab

    normalize\_batch(**docs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/corpus/_normalizers/_normalizer.py#L707)[#](#scikitplot.corpus.NormalizationPipeline.normalize_batch "Link to this definition")
    :   Apply the pipeline to a list of documents.

        Parameters:
        :   ****docs****list[CorpusDocument]

        Returns:
        :   list[CorpusDocument]

        Parameters:
        :   ****docs**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")]

    normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/corpus/_normalizers/_normalizer.py#L689)[#](#scikitplot.corpus.NormalizationPipeline.normalize_doc "Link to this definition")
    :   Apply all normalisers in order.

        Parameters:
        :   ****doc****CorpusDocument

        Returns:
        :   CorpusDocument
            :   Document after all normalisation stages.

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples