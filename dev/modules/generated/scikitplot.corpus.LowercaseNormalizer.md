# LowercaseNormalizer[#](#lowercasenormalizer "Link to this heading")

class scikitplot.corpus.LowercaseNormalizer(**locale\_aware=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_normalizers/_normalizer.py#L384)[#](#scikitplot.corpus.LowercaseNormalizer "Link to this definition")
:   Convert the document text to lowercase.

    Parameters:
    :   ****locale\_aware****bool, optional
        :   When `True`, use Python’s `str.casefold()` (more aggressive,
            handles German ß → ss etc.) instead of `str.lower()`.
            Default: `False`.

    Parameters:
    :   ****locale\_aware**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Examples

    Try it in your browser!
    ```
    >>> norm = LowercaseNormalizer()
    >>> doc = CorpusDocument.create("f.txt", 0, "Hello World.")
    >>> norm.normalize_doc(doc).normalized_text
    'hello world.'

    ```
    Go BackOpen In Tab

    normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_normalizers/_normalizer.py#L406)[#](#scikitplot.corpus.LowercaseNormalizer.normalize_doc "Link to this definition")
    :   Lowercase the document text.

        Parameters:
        :   ****doc****CorpusDocument

        Returns:
        :   CorpusDocument

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")