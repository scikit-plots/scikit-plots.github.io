# WhitespaceNormalizer[#](#whitespacenormalizer "Link to this heading")

class scikitplot.corpus.WhitespaceNormalizer(**collapse\_newlines=False**, **strip=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_normalizers/_normalizer.py#L312)[#](#scikitplot.corpus.WhitespaceNormalizer "Link to this definition")
:   Collapse runs of whitespace and optionally strip leading/trailing space.

    Parameters:
    :   ****collapse\_newlines****bool, optional
        :   When `True`, newline characters are treated as whitespace and
            collapsed with other spaces. When `False`, newlines are
            preserved (only intra-line spaces are collapsed). Default: `False`.

        ****strip****bool, optional
        :   Strip leading and trailing whitespace from the result.
            Default: `True`.

    Parameters:
    :   * ****collapse\_newlines**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****strip**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Examples

    Try it in your browser!
    ```
    >>> norm = WhitespaceNormalizer()
    >>> doc = CorpusDocument.create("f.txt", 0, "Hello   world.")
    >>> norm.normalize_doc(doc).normalized_text
    'Hello world.'

    ```
    Go BackOpen In Tab

    normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_normalizers/_normalizer.py#L225)[#](#scikitplot.corpus.WhitespaceNormalizer.normalize_doc "Link to this definition")
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

    normalize\_text(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_normalizers/_normalizer.py#L342)[#](#scikitplot.corpus.WhitespaceNormalizer.normalize_text "Link to this definition")
    :   Collapse whitespace in the text.

        Parameters:
        :   ****text****str
            :   The text to normalise.

        Returns:
        :   str

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[Build a Multi-Source WHO Corpus](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

Build a Multi-Source WHO Corpus