# PreprocessingStep[#](#preprocessingstep "Link to this heading")

class scikitplot.corpus.PreprocessingStep(**name**, **description**, **changed**, **char\_delta**, **grapheme\_delta=None**, **params=None**, **input\_hash=None**, **output\_hash=None**, **duration\_s=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L1249)[#](#scikitplot.corpus.PreprocessingStep "Link to this definition")
:   Record of a single preprocessing transformation applied to raw text.

    Used to build a [`PreprocessingTrace`](scikitplot.corpus.PreprocessingTrace.html#scikitplot.corpus.PreprocessingTrace "scikitplot.corpus.PreprocessingTrace") that makes the
    preprocessing pipeline fully retrospective — every change is
    documented with enough information to verify, replay, or invert it.

    Parameters:
    :   ****name****str
        :   Short identifier of the transformation (e.g.
            `"nfc_normalise"`, `"strip_control"`, `"bom_strip"`,
            `"whitespace_collapse"`, `"ocr_correction"`).

        ****description****str
        :   Human-readable explanation of what this step does.

        ****changed****bool
        :   `True` if this step actually modified the text.
            `False` when the text was already in the expected form
            (idempotent execution).

        ****char\_delta****int
        :   Change in codepoint count: `len(after) - len(before)`.
            Negative for stripping steps; zero for reordering steps.

        ****grapheme\_delta****int or None
        :   Change in grapheme cluster count. `None` if grapheme
            counting was not available at this step (`regex` not installed).

        ****params****MetadataDict or None
        :   Configuration parameters used for this step. Must be
            JSON-serialisable. `None` if the step has no parameters.

        ****input\_hash****str or None
        :   MD5 hex of the text **before** this step. Allows exact change
            detection without storing the full text. `None` if not tracked.

        ****output\_hash****str or None
        :   MD5 hex of the text **after** this step.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****description**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****changed**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****char\_delta**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****grapheme\_delta**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****params**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****input\_hash**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****output\_hash**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****duration\_s**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)

    Notes

    ****Developer note:**** Hash all PreprocessingStep objects into a stable
    fingerprint to build a preprocessing fingerprint for idempotency
    verification on pipeline re-runs. The fingerprint is:
    `hashlib.md5(",".join(s.name for s in trace.steps).encode()).hexdigest()`

    changed: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L1249)[#](#scikitplot.corpus.PreprocessingStep.changed "Link to this definition")

    char\_delta: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L1249)[#](#scikitplot.corpus.PreprocessingStep.char_delta "Link to this definition")

    description: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L1249)[#](#scikitplot.corpus.PreprocessingStep.description "Link to this definition")

    duration\_s: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PreprocessingStep.duration_s "Link to this definition")
    :   Wall-clock seconds this step took. `None` when not timed.

    grapheme\_delta: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PreprocessingStep.grapheme_delta "Link to this definition")

    input\_hash: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PreprocessingStep.input_hash "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L1249)[#](#scikitplot.corpus.PreprocessingStep.name "Link to this definition")

    output\_hash: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PreprocessingStep.output_hash "Link to this definition")

    params: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PreprocessingStep.params "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L1304)[#](#scikitplot.corpus.PreprocessingStep.to_dict "Link to this definition")
    :   Serialise to a JSON-safe dict.

        Returns:
        :   MetadataDict

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]