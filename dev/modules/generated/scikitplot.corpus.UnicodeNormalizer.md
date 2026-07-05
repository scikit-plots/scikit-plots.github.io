# UnicodeNormalizer[#](#unicodenormalizer "Link to this heading")

class scikitplot.corpus.UnicodeNormalizer(**form='NFC'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_normalizers/_normalizer.py#L159)[#](#scikitplot.corpus.UnicodeNormalizer "Link to this definition")
:   Apply Unicode normalisation (NFC, NFD, NFKC, or NFKD).

    Parameters:
    :   ****form****{"NFC", "NFD", "NFKC", "NFKD"}, optional
        :   Unicode normalisation form. `NFKC` is recommended for NLP
            (decomposes ligatures, expands compatibility characters).
            Default: `\"NFC\"`.

    Parameters:
    :   ****form**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus._normalizers import UnicodeNormalizer
    >>> norm = UnicodeNormalizer(form="NFKC")
    >>> doc = CorpusDocument.create("f.txt", 0, "ﬁle")  # fi ligature
    >>> norm.normalize_doc(doc).normalized_text
    'file'

    ```
    Go BackOpen In Tab

    normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_normalizers/_normalizer.py#L189)[#](#scikitplot.corpus.UnicodeNormalizer.normalize_doc "Link to this definition")
    :   Apply Unicode normalisation to the document text.

        Parameters:
        :   ****doc****CorpusDocument

        Returns:
        :   CorpusDocument

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples