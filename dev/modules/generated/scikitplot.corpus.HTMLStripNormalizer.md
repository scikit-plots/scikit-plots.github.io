# HTMLStripNormalizer[#](#htmlstripnormalizer "Link to this heading")

class scikitplot.corpus.HTMLStripNormalizer(**use\_beautifulsoup=False**, **parser='html.parser'**, **decode\_entities=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/corpus/_normalizers/_normalizer.py#L282)[#](#scikitplot.corpus.HTMLStripNormalizer "Link to this definition")
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
    :   * ****use\_beautifulsoup**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****parser**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****decode\_entities**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Examples

    Try it in your browser!
    ```
    >>> norm = HTMLStripNormalizer()
    >>> doc = CorpusDocument.create("f.txt", 0, "<p>Hello <b>world</b>.</p>")
    >>> norm.normalize_doc(doc).normalized_text
    'Hello world.'

    ```
    Go BackOpen In Tab

    normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/corpus/_normalizers/_normalizer.py#L323)[#](#scikitplot.corpus.HTMLStripNormalizer.normalize_doc "Link to this definition")
    :   Strip HTML tags from the document text.

        Parameters:
        :   ****doc****CorpusDocument

        Returns:
        :   CorpusDocument

        Raises:
        :   ImportError
            :   If `use_beautifulsoup=True` and `beautifulsoup4` is not installed.

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")