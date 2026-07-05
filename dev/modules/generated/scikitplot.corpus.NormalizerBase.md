# NormalizerBase[#](#normalizerbase "Link to this heading")

class scikitplot.corpus.NormalizerBase[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_normalizers/_normalizer.py#L94)[#](#scikitplot.corpus.NormalizerBase "Link to this definition")
:   Abstract base class for all text normalisers.

    A normaliser receives a [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")
    and returns a new instance with `normalized_text` updated. If the
    normaliser has nothing to do (empty text, already clean, etc.) it
    returns the document unchanged.

    Normalisers are composable via [`NormalizationPipeline`](scikitplot.corpus.NormalizationPipeline.html#scikitplot.corpus.NormalizationPipeline "scikitplot.corpus.NormalizationPipeline").

    Notes

    Subclasses must implement [`normalize_doc`](#scikitplot.corpus.NormalizerBase.normalize_doc "scikitplot.corpus.NormalizerBase.normalize_doc"). They must never
    call [`CorpusDocument.replace`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument.replace "scikitplot.corpus.CorpusDocument.replace") with `text=` — only
    `normalized_text=` may be modified.

    abstractmethod normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_normalizers/_normalizer.py#L112)[#](#scikitplot.corpus.NormalizerBase.normalize_doc "Link to this definition")
    :   Apply normalisation to `doc`.

        Parameters:
        :   ****doc****CorpusDocument
            :   Input document. Must be a valid, validated instance.

        Returns:
        :   CorpusDocument
            :   New instance with `normalized_text` updated. `text` is
                never modified.

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")