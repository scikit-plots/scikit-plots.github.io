# LowercaseNormalizer[#](#lowercasenormalizer "Link to this heading")

class scikitplot.corpus.LowercaseNormalizer(**locale\_aware=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_normalizers/_normalizer.py#L490)[#](#scikitplot.corpus.LowercaseNormalizer "Link to this definition")
:   Convert the document text to lowercase.

    Parameters:
    :   ****locale\_aware****bool, optional
        :   When `True`, use Python’s `str.casefold()` (more aggressive,
            handles German ß → ss etc.) instead of `str.lower()`.
            Default: `False`.

    Parameters:
    :   ****locale\_aware**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Examples

    Try it in your browser!
    ```
    >>> norm = LowercaseNormalizer()
    >>> doc = CorpusDocument.create("f.txt", 0, "Hello World.")
    >>> norm.normalize_doc(doc).normalized_text
    'hello world.'

    ```
    Go BackOpen In Tab

    normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_normalizers/_normalizer.py#L225)[#](#scikitplot.corpus.LowercaseNormalizer.normalize_doc "Link to this definition")
    :   Apply [`normalize_text`](scikitplot.corpus.normalize_text.html#scikitplot.corpus.normalize_text "scikitplot.corpus.normalize_text") to the document.

        Parameters:
        :   ****doc****CorpusDocument
            :   Input document.

        Returns:
        :   CorpusDocument
            :   New instance with `normalized_text` updated. `text` is never
                modified.

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")

    normalize\_text(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_normalizers/_normalizer.py#L512)[#](#scikitplot.corpus.LowercaseNormalizer.normalize_text "Link to this definition")
    :   Lowercase the text.

        Parameters:
        :   ****text****str
            :   The text to normalise.

        Returns:
        :   str

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")