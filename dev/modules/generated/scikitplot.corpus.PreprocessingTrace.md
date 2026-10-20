# PreprocessingTrace[#](#preprocessingtrace "Link to this heading")

class scikitplot.corpus.PreprocessingTrace(**raw\_text**, **steps**, **final\_text**, **pipeline\_fingerprint**, **total\_char\_delta**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1405)[#](#scikitplot.corpus.PreprocessingTrace "Link to this definition")
:   Ordered audit trail of all preprocessing transformations.

    Provides full retrospective visibility into how raw text was
    transformed into the normalised text stored in
    `text`.

    Parameters:
    :   ****raw\_text****str or None
        :   The original raw text **before any preprocessing**.
            `None` when `include_raw_text=False` (the default, to save
            memory on large corpora).

        ****steps****list[PreprocessingStep]
        :   Ordered list of transformations, from first applied to last.

        ****final\_text****str
        :   The normalised text after all steps.

        ****pipeline\_fingerprint****str
        :   SHA-256 hex digest (64 characters) of the step names
            (`",".join(s.name for s in steps)`).
            Use this to detect preprocessing pipeline changes across corpus
            versions or pipeline runs.

        ****total\_char\_delta****int
        :   Sum of all `PreprocessingStep.char_delta` values.

    Parameters:
    :   * ****raw\_text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****steps**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**PreprocessingStep**](scikitplot.corpus.PreprocessingStep.html#scikitplot.corpus.PreprocessingStep "scikitplot.corpus._types.PreprocessingStep")**]**)
        * ****final\_text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****pipeline\_fingerprint**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****total\_char\_delta**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Notes

    ****User note:**** Use `PreprocessingTrace` to:

    * Verify that preprocessing was applied consistently across corpus
      versions (compare `pipeline_fingerprint`).
    * Debug unexpected chunk boundaries by comparing
      `raw_text` vs `final_text`.
    * Feed the raw text into a separate embedding index for raw-vs-normalised
      retrieval comparison.

    ****Developer note:**** `PreprocessingTrace` is stored in
    `chunk.metadata["preprocessing_trace"]` as a dict (via
    [`to_dict`](#scikitplot.corpus.PreprocessingTrace.to_dict "scikitplot.corpus.PreprocessingTrace.to_dict")). It is NOT stored in `CorpusDocument` fields
    directly (too large); consumers must pull it from the chunk metadata.

    Examples

    Try it in your browser!
    ```
    >>> step = PreprocessingStep(
    ...     name="nfc_normalise", description="Apply NFC", changed=False, char_delta=0
    ... )
    >>> trace = PreprocessingTrace.build(
    ...     raw_text="café", steps=[step], final_text="café"
    ... )
    >>> len(trace.pipeline_fingerprint)
    64

    ```
    Go BackOpen In Tab

    static build(**raw\_text**, **steps**, **final\_text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1465)[#](#scikitplot.corpus.PreprocessingTrace.build "Link to this definition")
    :   Construct a [`PreprocessingTrace`](#scikitplot.corpus.PreprocessingTrace "scikitplot.corpus.PreprocessingTrace") from parts.

        Parameters:
        :   ****raw\_text****str or None
            :   Original text before preprocessing.

            ****steps****list[PreprocessingStep]
            :   Ordered list of applied steps.

            ****final\_text****str
            :   Text after all steps.

        Returns:
        :   PreprocessingTrace

        Parameters:
        :   * ****raw\_text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****steps**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**PreprocessingStep**](scikitplot.corpus.PreprocessingStep.html#scikitplot.corpus.PreprocessingStep "scikitplot.corpus._types.PreprocessingStep")**]**)
            * ****final\_text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**PreprocessingTrace**](#scikitplot.corpus.PreprocessingTrace "scikitplot.corpus._types.PreprocessingTrace")

    final\_text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1405)[#](#scikitplot.corpus.PreprocessingTrace.final_text "Link to this definition")

    pipeline\_fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1405)[#](#scikitplot.corpus.PreprocessingTrace.pipeline_fingerprint "Link to this definition")

    raw\_text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1405)[#](#scikitplot.corpus.PreprocessingTrace.raw_text "Link to this definition")

    steps: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[PreprocessingStep](scikitplot.corpus.PreprocessingStep.html#scikitplot.corpus.PreprocessingStep "scikitplot.corpus._types.PreprocessingStep")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1405)[#](#scikitplot.corpus.PreprocessingTrace.steps "Link to this definition")

    to\_dict(**\***, **include\_raw\_text=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1499)[#](#scikitplot.corpus.PreprocessingTrace.to_dict "Link to this definition")
    :   Serialise to a JSON-safe dict for chunk metadata storage.

        Parameters:
        :   ****include\_raw\_text****bool, optional
            :   When `True`, include `raw_text` in the output.
                Default `False` to keep chunk metadata small.

        Returns:
        :   MetadataDict

        Parameters:
        :   ****include\_raw\_text**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    total\_char\_delta: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1405)[#](#scikitplot.corpus.PreprocessingTrace.total_char_delta "Link to this definition")