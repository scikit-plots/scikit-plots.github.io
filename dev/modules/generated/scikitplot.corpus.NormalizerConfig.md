# NormalizerConfig[#](#normalizerconfig "Link to this heading")

class scikitplot.corpus.NormalizerConfig(**unicode\_form='NFKC'**, **expand\_ligatures=True**, **fix\_hyphenation=True**, **collapse\_whitespace=True**, **strip\_control\_chars=True**, **lowercase=False**, **min\_length=1**, **custom\_pipeline=<factory>**, **steps=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/corpus/_normalizers/_text_normalizer.py#L54)[#](#scikitplot.corpus.NormalizerConfig "Link to this definition")
:   Configuration for [`TextNormalizer`](scikitplot.corpus.TextNormalizer.html#scikitplot.corpus.TextNormalizer "scikitplot.corpus.TextNormalizer").

    Parameters:
    :   ****unicode\_form****str
        :   Unicode normalisation form: `"NFKC"` (default, canonical
            decomposition then compatibility composition) or `"NFC"`,
            `"NFD"`, `"NFKD"`. Set to `""` to disable.

        ****expand\_ligatures****bool
        :   Replace common ligatures (ﬁ → fi, ﬂ → fl, ﬀ → ff, etc.).

        ****fix\_hyphenation****bool
        :   Re-join words split across line breaks by a trailing hyphen
            (e.g., `"compu-\\nter"` → `"computer"`).

        ****collapse\_whitespace****bool
        :   Replace runs of whitespace (including `\\t`, `\\r`,
            `\\n`) with a single space, then strip leading/trailing.

        ****strip\_control\_chars****bool
        :   Remove Unicode category Cc/Cf chars except `\\n` and
            `\\t`. Removes zero-width joiners, BOM, soft hyphens, etc.

        ****lowercase****bool
        :   Convert text to lowercase. ****Default False**** — casing often
            matters for named-entity recognition in RAG contexts.

        ****min\_length****int
        :   If the normalised text is shorter than this (in chars),
            set `normalized_text = None` so the embedding engine
            falls back to raw `text`.

        ****custom\_pipeline****tuple of Callable[[str], str]
        :   Additional user-supplied `str → str` transforms applied
            ****after**** all built-in steps. Order is preserved.

        ****steps****list of str or None, optional
        :   Ordered list of step names to apply. `None` (default)
            derives the list automatically from the boolean flags above.
            Pass an explicit list to run only a named subset, e.g.
            `steps=["unicode", "whitespace"]`. Valid names:
            `"unicode"`, `"ligatures"`, `"control_chars"`,
            `"hyphenation"`, `"whitespace"`, `"lowercase"`,
            `"custom"`. Used by [`TextNormalizer.normalize`](scikitplot.corpus.TextNormalizer.html#scikitplot.corpus.TextNormalizer.normalize "scikitplot.corpus.TextNormalizer.normalize").

    Parameters:
    :   * ****unicode\_form**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****expand\_ligatures**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****fix\_hyphenation**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****collapse\_whitespace**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****strip\_control\_chars**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****lowercase**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****min\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****custom\_pipeline**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** **...****]**)
        * ****steps**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Notes

    ****User note:**** The default configuration is designed for
    English-language PDF and OCR sources. For CJK text, set
    `fix_hyphenation=False` (CJK does not hyphenate) and
    `unicode_form="NFKC"` (normalises full-width characters).

    ****Developer note:**** `steps` is excluded from `__hash__` and
    `__eq__` so that two configs with identical boolean flags but
    different `steps` lists are treated as equal for caching. If you
    need strict equality on `steps`, compare the lists explicitly.

    collapse\_whitespace: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.NormalizerConfig.collapse_whitespace "Link to this definition")

    custom\_pipeline: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")], [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")], ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/corpus/_normalizers/_text_normalizer.py#L54)[#](#scikitplot.corpus.NormalizerConfig.custom_pipeline "Link to this definition")

    expand\_ligatures: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.NormalizerConfig.expand_ligatures "Link to this definition")

    fix\_hyphenation: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.NormalizerConfig.fix_hyphenation "Link to this definition")

    lowercase: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.NormalizerConfig.lowercase "Link to this definition")

    min\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 1[#](#scikitplot.corpus.NormalizerConfig.min_length "Link to this definition")

    steps: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.NormalizerConfig.steps "Link to this definition")
    :   Ordered list of normalisation step names to apply.

        When `None` (default), the list is derived automatically from the
        boolean flags above in pipeline order:
        `"unicode"`, `"ligatures"`, `"control_chars"`, `"hyphenation"`,
        `"whitespace"`, `"lowercase"`, `"custom"`.
        Pass an explicit list to run only a named subset, e.g.
        `steps=["unicode", "whitespace"]`.

    strip\_control\_chars: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.NormalizerConfig.strip_control_chars "Link to this definition")

    unicode\_form: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'NFKC'[#](#scikitplot.corpus.NormalizerConfig.unicode_form "Link to this definition")