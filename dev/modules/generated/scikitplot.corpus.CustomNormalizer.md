# CustomNormalizer[#](#customnormalizer "Link to this heading")

class scikitplot.corpus.CustomNormalizer(**fn**, **\***, **name=None**, **text\_mode=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L390)[#](#scikitplot.corpus.CustomNormalizer "Link to this definition")
:   Wrap any callable as a `NormalizerBase`.

    Parameters:
    :   ****fn****callable
        :   Normalizer callable. One of two signatures accepted:

            `(doc: CorpusDocument) -> CorpusDocument`
            :   Full document transform — the callable controls exactly which
                fields change via `doc.replace()`.

            `(text: str) -> str`
            :   Pure text transform — the module wraps the result in
                `doc.replace(normalized_text=result)` automatically.
                Detected by inspecting whether the return value is a `str`.

        ****name****str, optional
        :   Human-readable label used in `__repr__`.

        ****text\_mode****bool, optional
        :   When `True`, treat `fn` as a `str → str` transform and wrap
            automatically. When `False` (default), treat `fn` as a full
            `CorpusDocument → CorpusDocument` transform. Pass `True` for
            simple string-level operations (regex substitution, lowercasing, etc.)
            without writing the `doc.replace()` boilerplate.

    Raises:
    :   TypeError
        :   If `fn` is not callable.

    Parameters:
    :   * ****fn**** (**Callable****[****...****,** **Any****]**)
        * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****text\_mode**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    > **See also**
    > `scikitplot.corpus._normalizers.NormalizationPipeline`
    :   Chain normalizers.

    `scikitplot.corpus._normalizers.NormalizerBase`
    :   Abstract base class.

    Notes

    ****User note:**** Combine with `NormalizationPipeline`
    to slot a custom step anywhere in the normalisation sequence.

    Examples

    Try it in your browser!

    Strip citation markers `[1]`, `[2]` from academic text:

    ```
    import re

    def strip_citations(text: str) -> str:
        return re.sub(r"\\[\\d+\\]", "", text)

    norm = CustomNormalizer(strip_citations, text_mode=True)

    ```

    Full document transform (language detection side-channel):

    ```
    def tag_language(doc):
        lang = detect(doc.normalized_text or doc.text)
        return doc.replace(language=lang)

    norm = CustomNormalizer(tag_language)

    ```
    Go BackOpen In Tab

    normalize\_doc(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L487)[#](#scikitplot.corpus.CustomNormalizer.normalize_doc "Link to this definition")
    :   Apply the user-supplied callable to `doc`.

        Parameters:
        :   ****doc****CorpusDocument
            :   Corpus Document.

        Returns:
        :   CorpusDocument
            :   Modified document.

        Raises:
        :   RuntimeError
            :   If the callable raises an unexpected exception.

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")