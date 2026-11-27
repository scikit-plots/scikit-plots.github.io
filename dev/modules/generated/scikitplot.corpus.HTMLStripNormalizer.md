# HTMLStripNormalizer[#](#htmlstripnormalizer "Link to this heading")

class scikitplot.corpus.HTMLStripNormalizer(**use\_beautifulsoup=False**, **parser='html.parser'**, **decode\_entities=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_normalizers/_normalizer.py#L380)[#](#scikitplot.corpus.HTMLStripNormalizer "Link to this definition")
:   Remove HTML and XML tags from the document text.

    Two modes are available:

    * `use_beautifulsoup=False` (default): regex-based stripping.
      Zero additional dependencies; handles well-formed HTML.
    * `use_beautifulsoup=True`: uses `bs4.BeautifulSoup` for robust
      parsing of malformed or deeply nested HTML.
      Requires `pip install beautifulsoup4`.

    Parameters:
    :   ****use\_beautifulsoup****bool, optional
        :   Use BeautifulSoup for parsing. Default: `False`.

        ****parser****str, optional
        :   BeautifulSoup parser (`\"html.parser\"`, `\"lxml\"`,
            `\"html5lib\"`). Ignored when `use_beautifulsoup=False`.
            Default: `\"html.parser\"` (stdlib, no extra deps).

        ****decode\_entities****bool, optional
        :   Decode HTML entities (e.g. `&amp;` → `&`). Default: `True`.

    Parameters:
    :   * ****use\_beautifulsoup**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****parser**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****decode\_entities**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****Regex mode:**** comments go first (`<!-- ... -->`, even holding
    `<`), then every `<...>` holding no other `<`. So a lone `<` in
    text keeps what follows it (`x < y and <b>b</b>` gives `x < y and
    b`), and the cost is linear in the text however many `<` it holds.
    A tag whose attribute value holds an unescaped `<`
    (`title="a < b"`) is not recognised and leaves a fragment; use
    `use_beautifulsoup=True` for markup that needs exact parsing.

    Examples

    Try it in your browser!
    ```
    >>> norm = HTMLStripNormalizer()
    >>> doc = CorpusDocument.create("f.txt", 0, "<p>Hello <b>world</b>.</p>")
    >>> norm.normalize_doc(doc).normalized_text
    'Hello world.'

    ```
    Go BackOpen In Tab

    normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_normalizers/_normalizer.py#L225)[#](#scikitplot.corpus.HTMLStripNormalizer.normalize_doc "Link to this definition")
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

    normalize\_text(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_normalizers/_normalizer.py#L431)[#](#scikitplot.corpus.HTMLStripNormalizer.normalize_text "Link to this definition")
    :   Strip HTML tags from the text.

        Parameters:
        :   ****text****str
            :   The text to normalise.

        Returns:
        :   str

        Raises:
        :   ImportError
            :   If `use_beautifulsoup=True` and `beautifulsoup4` is not installed.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")