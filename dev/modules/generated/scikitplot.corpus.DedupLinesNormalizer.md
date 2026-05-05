# DedupLinesNormalizer[#](#deduplinesnormalizer "Link to this heading")

class scikitplot.corpus.DedupLinesNormalizer(**ignore\_whitespace=True**, **min\_line\_length=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_normalizers/_normalizer.py#L423)[#](#scikitplot.corpus.DedupLinesNormalizer "Link to this definition")
:   Remove exact duplicate lines while preserving first-occurrence order.

    Useful for de-noising OCR output and web-scraped text which often
    contains repeated navigation bars, headers, or footers.

    Parameters:
    :   ****ignore\_whitespace****bool, optional
        :   When `True`, lines are compared after stripping; the original
            (un-stripped) line is preserved in the output. Default: `True`.

        ****min\_line\_length****int, optional
        :   Lines shorter than this (after stripping) are always kept even
            if they are duplicates. Prevents discarding single-character
            structural lines. Default: `0`.

    Parameters:
    :   * ****ignore\_whitespace**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****min\_line\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    Examples

    Try it in your browser!
    ```
    >>> norm = DedupLinesNormalizer()
    >>> doc = CorpusDocument.create("f.txt", 0, "Hello.\\nHello.\\nWorld.")
    >>> norm.normalize_doc(doc).normalized_text
    'Hello.\\nWorld.'

    ```
    Go BackOpen In Tab

    normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_normalizers/_normalizer.py#L461)[#](#scikitplot.corpus.DedupLinesNormalizer.normalize_doc "Link to this definition")
    :   Remove duplicate lines from the document text.

        Parameters:
        :   ****doc****CorpusDocument

        Returns:
        :   CorpusDocument

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")