# LanguageDetectionNormalizer[#](#languagedetectionnormalizer "Link to this heading")

class scikitplot.corpus.LanguageDetectionNormalizer(**fallback\_language=None**, **min\_confidence=0.7**, **overwrite=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/corpus/_normalizers/_normalizer.py#L515)[#](#scikitplot.corpus.LanguageDetectionNormalizer "Link to this definition")
:   Detect document language and set `CorpusDocument.language`.

    Uses `langdetect` (`pip install langdetect`) which is a port of
    Google’s language-detection library. Falls back to the provided
    `fallback_language` if detection fails or the detected language
    has confidence below `min_confidence`.

    Parameters:
    :   ****fallback\_language****str or None, optional
        :   ISO 639-1 language code to use when detection fails.
            `None` leaves `language` unchanged on failure.
            Default: `None`.

        ****min\_confidence****float, optional
        :   Minimum probability threshold for accepting a detected language.
            Must be in `[0.0, 1.0]`. Default: `0.7`.

        ****overwrite****bool, optional
        :   When `False`, skip detection if the document already has a
            non-`None` `language` field. Default: `False`.

    Parameters:
    :   * ****fallback\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****min\_confidence**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Examples

    Try it in your browser!
    ```
    >>> norm = LanguageDetectionNormalizer(fallback_language="en")
    >>> doc = CorpusDocument.create("f.txt", 0, "The quick brown fox.")
    >>> result = norm.normalize_doc(doc)
    >>> result.language
    'en'

    ```
    Go BackOpen In Tab

    normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/corpus/_normalizers/_normalizer.py#L561)[#](#scikitplot.corpus.LanguageDetectionNormalizer.normalize_doc "Link to this definition")
    :   Detect language and update `doc.language`.

        Parameters:
        :   ****doc****CorpusDocument

        Returns:
        :   CorpusDocument
            :   New instance with `language` set (or unchanged on failure).

        Raises:
        :   ImportError
            :   If `langdetect` is not installed.

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")