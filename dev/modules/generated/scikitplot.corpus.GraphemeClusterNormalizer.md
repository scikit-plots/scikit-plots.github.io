# GraphemeClusterNormalizer[#](#graphemeclusternormalizer "Link to this heading")

class scikitplot.corpus.GraphemeClusterNormalizer(**form='NFC'**, **\***, **strip\_bom=True**, **strip\_control=True**, **max\_text\_length=None**, **write\_normalized\_text=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_normalizers/_normalizer.py#L734)[#](#scikitplot.corpus.GraphemeClusterNormalizer "Link to this definition")
:   Normalize text to NFC and compute grapheme cluster boundaries.

    ****This is the mandatory first step for all multilang processing.****
    It MUST be placed before any chunker that operates on non-Latin,
    mixed-script, or emoji-containing text.

    After normalization the following [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")
    fields are populated:

    * `text` — NFC-normalised (or NFKC/NFD/NFKD as configured).
    * `grapheme_count` — user-perceived character count (UAX #29).
    * `codepoint_count` — raw `len(text)` after normalization.

    Parameters:
    :   ****form****{“NFC”, “NFD”, “NFKC”, “NFKD”}, optional
        :   Unicode normalization form. Default `"NFC"`.
            Use `"NFC"` for storage and comparison (canonical, composed).
            Use `"NFKC"` only when you need compatibility folding
            (`ﬁ` → `fi`, `①` → `1`).

        ****strip\_bom****bool, optional
        :   Strip Byte Order Mark (U+FEFF) from the start of `text`.
            Default `True`.

        ****strip\_control****bool, optional
        :   Strip C0/C1 control characters except `\\n` and `\\t`.
            This also strips NUL bytes (`\\x00`) — matching the
            `_validate_text_input` guard.
            Default `True`.

        ****max\_text\_length****int or None, optional
        :   Reject (raise [`ValueError`](https://docs.python.org/3/builtins/exceptions.html#ValueError "(in Python v3.15)")) documents whose grapheme count
            exceeds this value. Default `None` (no limit). Set in
            production to prevent OOM on adversarial inputs.

        ****write\_normalized\_text****bool, optional
        :   When `True` (default), write the NFC text back to
            `doc.text`. Set to `False` to write to
            `doc.normalized_text` instead and preserve the original in
            `doc.text`.

    Raises:
    :   ImportError
        :   If the `regex` (PyPI) library is not installed.
            Message includes `pip install regex`.

        ValueError
        :   If `form` is not one of the four valid normalization forms.
            If `max_text_length` is set and the text exceeds it.

    Parameters:
    :   * ****form**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****strip\_bom**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****strip\_control**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****max\_text\_length**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****write\_normalized\_text**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****User note:**** Install `regex` with `pip install regex`.
    Place this normalizer ****first**** in any
    [`NormalizationPipeline`](scikitplot.corpus.NormalizationPipeline.html#scikitplot.corpus.NormalizationPipeline "scikitplot.corpus.NormalizationPipeline") that handles non-Latin scripts.

    ****Developer note:**** Uses `regex.findall(r'\\X', text)` for grapheme
    cluster splitting per UAX #29. The `\\X` pattern matches extended
    grapheme clusters including ZWJ emoji sequences, Devanagari conjunct
    consonants, Arabic ligatures, and Hangul Jamo compositions.

    NFC is idempotent: `unicodedata.normalize('NFC', nfc_text) == nfc_text`.
    Grapheme counting is read-only with respect to the clusters.

    Idempotency guarantee:

    ```
    normalize_doc(normalize_doc(doc)).text == normalize_doc(doc).text
    normalize_doc(normalize_doc(doc)).grapheme_count
        == normalize_doc(doc).grapheme_count

    ```

    References

    UAX #15 (Unicode Normalization): <https://unicode.org/reports/tr15/>
    UAX #29 (Text Segmentation / Grapheme Clusters): <https://unicode.org/reports/tr29/>
    regex library: <https://pypi.org/project/regex/>

    Examples

    Try it in your browser!
    ```
    >>> norm = GraphemeClusterNormalizer()
    >>> doc = CorpusDocument.create(
    ...     input_path="f.txt",
    ...     chunk_index=0,
    ...     text="\U0001f468\u200d\U0001f469\u200d\U0001f467 calf\u00e9",
    ... )
    >>> out = norm.normalize_doc(doc)
    >>> out.grapheme_count  # 7 clusters: family-ZWJ emoji + space + c a f é
    7
    >>> out.codepoint_count  # raw len()
    10

    ```
    Go BackOpen In Tab

    normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_normalizers/_normalizer.py#L875)[#](#scikitplot.corpus.GraphemeClusterNormalizer.normalize_doc "Link to this definition")
    :   Normalize **doc** text to NFC and populate grapheme-cluster counts.

        Parameters:
        :   ****doc****CorpusDocument
            :   Document to normalize. The `text` field is read; either
                `text` or `normalized_text` is updated depending on
                `write_normalized_text`.

        Returns:
        :   CorpusDocument
            :   The same document object with updated fields.

        Raises:
        :   ValueError
            :   If `max_text_length` is set and the text exceeds it.

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")