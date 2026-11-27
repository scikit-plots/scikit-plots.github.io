# run\_backend\_chain[#](#run-backend-chain "Link to this heading")

scikitplot.corpus.run\_backend\_chain(**candidates**, **\***, **default**, **logger**, **component**, **operation**, **subject=None**, **error\_code='OPTIONAL\_BACKEND\_FAILED'**, **error\_category=ErrorCategory.CAPABILITY**, **stage=None**, **is\_empty=<function \_never\_empty>**, **passthrough\_exceptions=(<class 'MemoryError'>**, **)**, **policy=None**, **capability\_registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_backends.py#L693)[#](#scikitplot.corpus.run_backend_chain "Link to this definition")
:   Try **candidates** in order and return a structured outcome.

    This function deliberately does ****not**** decide whether a failed chain should
    raise. That is operation policy: ASR may be fail-soft by default and
    strict on request, while a parser may always raise. Callers inspect the
    returned status/errors and apply their own public contract.

    Parameters:
    :   ****candidates****sequence of BackendCandidate
        :   Ordered backend attempts.

        ****default****object
        :   Value returned when no backend produces an accepted result.

        ****logger****logging.Logger
        :   Logger receiving per-backend diagnostics.

        ****component****str
        :   Human-facing owner, e.g. `"AudioReader"`.

        ****operation****str
        :   Operation label, e.g. `"transcription"`.

        ****subject****str or None, optional
        :   Filename or other specific subject for diagnostics.

        ****error\_code****str, optional
        :   Stable [`ErrorRecord`](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus.ErrorRecord") code used for backend exceptions.

        ****error\_category****ErrorCategory or str, optional
        :   Diagnostic category. Defaults to `CAPABILITY`.

        ****stage****str or None, optional
        :   Pipeline stage stored in structured errors.

        ****is\_empty****callable, optional
        :   Predicate identifying a successful but empty accepted value.

        ****passthrough\_exceptions****tuple, optional
        :   Exceptions never converted into fallback diagnostics. Defaults to
            [`MemoryError`](https://docs.python.org/3/builtins/exceptions.html#MemoryError "(in Python v3.15)").

    Returns:
    :   BackendOutcome
        :   Safe result plus backend provenance and structured errors. No live
            exception objects are retained.

    Parameters:
    :   * ****candidates**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**BackendCandidate**](scikitplot.corpus.BackendCandidate.html#scikitplot.corpus.BackendCandidate "scikitplot.corpus._backends.BackendCandidate")**[****\_T****]****]**)
        * ****default**** (**\_T**)
        * ****logger**** ([**Logger**](scikitplot.logging.Logger.html#scikitplot.logging.Logger "logging.Logger"))
        * ****component**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****operation**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****subject**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****error\_code**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****error\_category**** ([**ErrorCategory**](scikitplot.corpus.ErrorCategory.html#scikitplot.corpus.ErrorCategory "scikitplot.corpus._diagnostics.ErrorCategory") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****stage**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****is\_empty**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****\_T****]****,** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]**)
        * ****passthrough\_exceptions**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**type**](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)")**[**[**BaseException**](https://docs.python.org/3/builtins/exceptions.html#BaseException "(in Python v3.15)")**]****,** **...****]**)
        * ****policy**** ([**BackendPolicy**](scikitplot.corpus.BackendPolicy.html#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****capability\_registry**** ([**CapabilityRegistry**](scikitplot.corpus.CapabilityRegistry.html#scikitplot.corpus.CapabilityRegistry "scikitplot.corpus._capabilities.CapabilityRegistry") **|** **None**)

    Return type:
    :   [**BackendOutcome**](scikitplot.corpus.BackendOutcome.html#scikitplot.corpus.BackendOutcome "scikitplot.corpus._backends.BackendOutcome")[**\_T**]