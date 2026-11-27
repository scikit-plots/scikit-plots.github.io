# transcribe\_whisper[#](#transcribe-whisper "Link to this heading")

scikitplot.corpus.transcribe\_whisper(**media\_path**, **model\_size**, **language**, **\***, **component**, **logger**, **strict=False**, **faster\_model\_kwargs=None**, **faster\_transcribe\_kwargs=None**, **include\_confidence=False**, **report=None**, **policy=None**, **custom\_backends=()**, **capability\_registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_readers/_whisper.py#L404)[#](#scikitplot.corpus.transcribe_whisper "Link to this definition")
:   Transcribe media with a shared, policy-driven ASR backend chain.

    Preflight and execution are built from the same candidate factory. Runtime
    failures therefore cannot silently change the order/readiness contract that
    [`plan_whisper_backends`](scikitplot.corpus.plan_whisper_backends.html#scikitplot.corpus.plan_whisper_backends "scikitplot.corpus.plan_whisper_backends") reports.

    Parameters:
    :   * ****media\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****model\_size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****component**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****logger**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****faster\_model\_kwargs**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****faster\_transcribe\_kwargs**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****include\_confidence**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****report**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.15)")**[****[**[**BackendOutcome**](scikitplot.corpus.BackendOutcome.html#scikitplot.corpus.BackendOutcome "scikitplot.corpus._backends.BackendOutcome")**[**[**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]****]****]****,** **None****]** **|** **None**)
        * ****policy**** ([**BackendPolicy**](scikitplot.corpus.BackendPolicy.html#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****custom\_backends**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")**[**[**ASRBackend**](scikitplot.corpus.ASRBackend.html#scikitplot.corpus.ASRBackend "scikitplot.corpus._readers._whisper.ASRBackend")**]**)
        * ****capability\_registry**** ([**CapabilityRegistry**](scikitplot.corpus.CapabilityRegistry.html#scikitplot.corpus.CapabilityRegistry "scikitplot.corpus._capabilities.CapabilityRegistry") **|** **None**)

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]