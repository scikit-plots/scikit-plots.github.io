# plan\_whisper\_backends[#](#plan-whisper-backends "Link to this heading")

scikitplot.corpus.plan\_whisper\_backends(**media\_path**, **model\_size**, **language**, **\***, **component**, **strict=False**, **faster\_model\_kwargs=None**, **faster\_transcribe\_kwargs=None**, **include\_confidence=False**, **policy=None**, **custom\_backends=()**, **capability\_registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_readers/_whisper.py#L370)[#](#scikitplot.corpus.plan_whisper_backends "Link to this definition")
:   Plan the exact ASR chain without importing/loading/running a model.

    Parameters:
    :   * ****media\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****model\_size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****component**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****faster\_model\_kwargs**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****faster\_transcribe\_kwargs**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****include\_confidence**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****policy**** ([**BackendPolicy**](scikitplot.corpus.BackendPolicy.html#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****custom\_backends**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")**[**[**ASRBackend**](scikitplot.corpus.ASRBackend.html#scikitplot.corpus.ASRBackend "scikitplot.corpus._readers._whisper.ASRBackend")**]**)
        * ****capability\_registry**** ([**CapabilityRegistry**](scikitplot.corpus.CapabilityRegistry.html#scikitplot.corpus.CapabilityRegistry "scikitplot.corpus._capabilities.CapabilityRegistry") **|** **None**)

    Return type:
    :   [**BackendPlan**](scikitplot.corpus.BackendPlan.html#scikitplot.corpus.BackendPlan "scikitplot.corpus._backends.BackendPlan")