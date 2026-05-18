# TextNormalizer[#](#textnormalizer "Link to this heading")

class scikitplot.corpus.TextNormalizer(**config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_normalizers/_text_normalizer.py#L298)[#](#scikitplot.corpus.TextNormalizer "Link to this definition")
:   Pipeline component that populates `normalized_text` on
    [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") instances.

    Parameters:
    :   ****config****NormalizerConfig or None, optional
        :   Normalisation settings. `None` uses defaults.

    Parameters:
    :   ****config**** ([**NormalizerConfig**](scikitplot.corpus.NormalizerConfig.html#scikitplot.corpus.NormalizerConfig "scikitplot.corpus.NormalizerConfig") **|** **None**)

    > **See also**
    > [`scikitplot.corpus._schema.CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")
    :   The normalised `normalized_text` field.

    [`scikitplot.corpus._enrichers._nlp_enricher.NLPEnricher`](scikitplot.corpus.NLPEnricher.html#scikitplot.corpus.NLPEnricher "scikitplot.corpus._enrichers._nlp_enricher.NLPEnricher")
    :   Downstream component that tokenises `normalized_text`.

    Notes

    ****User note:**** Insert this component between the filter and
    embedding stages:

    ```
    source → reader → chunker → filter → **normalizer** → embedder

    ```

    If `normalized_text` is already set on a document (e.g., by a
    reader that does its own cleaning), this component skips it
    unless `overwrite=True` is passed to [`normalize_documents`](#scikitplot.corpus.TextNormalizer.normalize_documents "scikitplot.corpus.TextNormalizer.normalize_documents").

    ****Developer note:**** This class is stateless and thread-safe.
    All mutable state lives in the documents being processed.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus._normalizers._text_normalizer import (
    ...     TextNormalizer,
    ... )
    >>> normalizer = TextNormalizer()
    >>> # doc = CorpusDocument(text="The  ﬁrst  compu-\\nter.", ...)
    >>> # docs = normalizer.normalize_documents([doc])
    >>> # docs[0].normalized_text == "The first computer."

    ```
    Go BackOpen In Tab

    normalize(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_normalizers/_text_normalizer.py#L345)[#](#scikitplot.corpus.TextNormalizer.normalize "Link to this definition")
    :   Normalise a single string using only the steps in `config.steps`.

        Unlike [`normalize_text`](scikitplot.corpus.normalize_text.html#scikitplot.corpus.normalize_text "scikitplot.corpus.normalize_text"), this method:

        * Applies steps **selectively** — only those listed in
          `self.config.steps` are executed, in that order.
        * Returns `""` for empty input rather than `None`.
        * Never returns `None` — callers that need the min-length guard
          should use [`normalize_text`](scikitplot.corpus.normalize_text.html#scikitplot.corpus.normalize_text "scikitplot.corpus.normalize_text") directly.

        Parameters:
        :   ****text****str
            :   Raw text to normalise.

        Returns:
        :   str
            :   Normalised text, or `""` if **text** is empty or becomes empty
                after normalisation.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

        Examples

        Try it in your browser!
        ```
        >>> n = TextNormalizer(NormalizerConfig(steps=["unicode"]))
        >>> "\\ufb01" not in n.normalize("fi\\ufb01rst")
        True
        >>> n2 = TextNormalizer(NormalizerConfig(steps=["whitespace"]))
        >>> "   " not in n2.normalize("Hello   world")
        True
        >>> TextNormalizer(NormalizerConfig()).normalize("")
        ''

        ```
        Go BackOpen In Tab

    normalize\_documents(**documents**, **\***, **overwrite=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_normalizers/_text_normalizer.py#L408)[#](#scikitplot.corpus.TextNormalizer.normalize_documents "Link to this definition")
    :   Normalise text for a batch of `CorpusDocument` instances.

        Parameters:
        :   ****documents****Sequence[CorpusDocument]
            :   Documents to normalise. Not mutated — new instances are
                returned via `doc.replace()`.

            ****overwrite****bool, optional
            :   If `True`, re-normalise even if `normalized_text` is
                already set. Default `False`.

        Returns:
        :   list[CorpusDocument]
            :   New document instances with `normalized_text` populated.

        Parameters:
        :   * ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
            * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]