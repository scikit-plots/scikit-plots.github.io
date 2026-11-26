# DedupLinesNormalizer[#](#deduplinesnormalizer "Link to this heading")

class scikitplot.corpus.DedupLinesNormalizer(**ignore\_whitespace=True**, **min\_line\_length=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_normalizers/_normalizer.py#L536)[#](#scikitplot.corpus.DedupLinesNormalizer "Link to this definition")
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
    :   * ****ignore\_whitespace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****min\_line\_length**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Examples

    Try it in your browser!
    ```
    >>> norm = DedupLinesNormalizer()
    >>> doc = CorpusDocument.create("f.txt", 0, "Hello.\\nHello.\\nWorld.")
    >>> norm.normalize_doc(doc).normalized_text
    'Hello.\\nWorld.'

    ```
    Go BackOpen In Tab

    normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_normalizers/_normalizer.py#L225)[#](#scikitplot.corpus.DedupLinesNormalizer.normalize_doc "Link to this definition")
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

    normalize\_text(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_normalizers/_normalizer.py#L574)[#](#scikitplot.corpus.DedupLinesNormalizer.normalize_text "Link to this definition")
    :   Remove duplicate lines from the text.

        Parameters:
        :   ****text****str
            :   The text to normalise.

        Returns:
        :   str

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")