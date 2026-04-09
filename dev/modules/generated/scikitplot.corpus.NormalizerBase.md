# NormalizerBase[#](#normalizerbase "Link to this heading")

class scikitplot.corpus.NormalizerBase[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_normalizers/_normalizer.py#L86)[#](#scikitplot.corpus.NormalizerBase "Link to this definition")
:   Abstract base class for all text normalisers.

    A normaliser receives a `CorpusDocument`
    and returns a new instance with `normalized_text` updated. If the
    normaliser has nothing to do (empty text, already clean, etc.) it
    returns the document unchanged.

    Normalisers are composable via [`NormalizationPipeline`](scikitplot.corpus.NormalizationPipeline.html#scikitplot.corpus.NormalizationPipeline "scikitplot.corpus.NormalizationPipeline").

    Notes

    Subclasses must implement [`normalize_doc`](#scikitplot.corpus.NormalizerBase.normalize_doc "scikitplot.corpus.NormalizerBase.normalize_doc"). They must never
    call `CorpusDocument.replace` with `text=` — only
    `normalized_text=` may be modified.

    abstractmethod normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_normalizers/_normalizer.py#L104)[#](#scikitplot.corpus.NormalizerBase.normalize_doc "Link to this definition")
    :   Apply normalisation to `doc`.

        Parameters:
        :   ****doc****CorpusDocument
            :   Input document. Must be a valid, validated instance.

        Returns:
        :   CorpusDocument
            :   New instance with `normalized_text` updated. `text` is
                never modified.

        Parameters:
        :   ****doc**** (**CorpusDocument**)

        Return type:
        :   **CorpusDocument**