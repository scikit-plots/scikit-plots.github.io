# TextNormalizerConfig[#](#textnormalizerconfig "Link to this heading")

class scikitplot.corpus.TextNormalizerConfig(**unicode\_form='NFKC'**, **expand\_ligatures=True**, **fix\_hyphenation=True**, **collapse\_whitespace=True**, **strip\_control\_chars=True**, **lowercase=False**, **min\_length=1**, **custom\_pipeline=<factory>**, **steps=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_normalizers/_text_normalizer.py#L68)[#](#scikitplot.corpus.TextNormalizerConfig "Link to this definition")
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
    :   * ****unicode\_form**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'NFC'****,** **'NFD'****,** **'NFKC'****,** **'NFKD'****,** **''****]**)
        * ****expand\_ligatures**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****fix\_hyphenation**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****collapse\_whitespace**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****strip\_control\_chars**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****lowercase**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****min\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****custom\_pipeline**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** **...****]**)
        * ****steps**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **...****]** **|** **None**)

    Notes

    ****User note:**** The default configuration is designed for
    English-language PDF and OCR sources. For CJK text, set
    `fix_hyphenation=False` (CJK does not hyphenate) and
    `unicode_form="NFKC"` (normalises full-width characters).

    ****Developer note:**** `steps` participates in semantic
    equality because changing the ordered step list changes
    normalization behavior. It remains excluded from
    `__hash__` while represented as a mutable list.

    collapse\_whitespace: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.TextNormalizerConfig.collapse_whitespace "Link to this definition")

    custom\_pipeline: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")], [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")], ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_normalizers/_text_normalizer.py#L68)[#](#scikitplot.corpus.TextNormalizerConfig.custom_pipeline "Link to this definition")

    expand\_ligatures: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.TextNormalizerConfig.expand_ligatures "Link to this definition")

    fix\_hyphenation: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.TextNormalizerConfig.fix_hyphenation "Link to this definition")

    lowercase: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.TextNormalizerConfig.lowercase "Link to this definition")

    min\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 1[#](#scikitplot.corpus.TextNormalizerConfig.min_length "Link to this definition")

    steps: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.TextNormalizerConfig.steps "Link to this definition")
    :   Ordered list of normalisation step names to apply.

        When `None` (default), the list is derived automatically from the
        boolean flags above in pipeline order:
        `"unicode"`, `"ligatures"`, `"control_chars"`, `"hyphenation"`,
        `"whitespace"`, `"lowercase"`, `"custom"`.
        Pass an explicit list to run only a named subset, e.g.
        `steps=["unicode", "whitespace"]`.

        Notes

        Do not silently deduplicate unless the normalizer contract explicitly
        says each stage can execute at most once.
        Order and repetition might eventually be intentional:
        `stage ordering is semantic` So preserving caller input is safest.

        Valid step names:

        `"unicode"` :
        :   Apply `unicode_form` normalisation.

        `"ligatures"` :
        :   Expand typographic ligatures (requires `expand_ligatures=True`).

        `"control_chars"` :
        :   Strip Unicode control characters (requires `strip_control_chars=True`).

        `"hyphenation"` :
        :   Re-join hyphenated line-breaks (requires `fix_hyphenation=True`).

        `"whitespace"` :
        :   Collapse runs of whitespace (requires `collapse_whitespace=True`).

        `"lowercase"` :
        :   Convert to lowercase (requires `lowercase=True`).

        `"custom"` :
        :   Apply `custom_pipeline` callables.

    strip\_control\_chars: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.TextNormalizerConfig.strip_control_chars "Link to this definition")

    unicode\_form: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")['NFC', 'NFD', 'NFKC', 'NFKD', ''] = 'NFKC'[#](#scikitplot.corpus.TextNormalizerConfig.unicode_form "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v1_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v1.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v2_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v2.html)

Build and Search a Real Hamlet Corpus with FluentCorpus