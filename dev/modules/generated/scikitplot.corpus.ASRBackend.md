# ASRBackend[#](#asrbackend "Link to this heading")

class scikitplot.corpus.ASRBackend(**name**, **transcribe**, **capability=None**, **fallback\_exceptions=(<class 'Exception'>**, **)**, **requires\_network=False**, **may\_download=False**, **offline\_capable=False**, **degrades\_on\_failure=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_readers/_whisper.py#L73)[#](#scikitplot.corpus.ASRBackend "Link to this definition")
:   User-defined ASR backend adapter.

    Parameters:
    :   ****name****str
        :   Stable name used by [`BackendPolicy`](scikitplot.corpus.BackendPolicy.html#scikitplot.corpus.BackendPolicy "scikitplot.corpus.BackendPolicy") ordering and diagnostics.

        ****transcribe****callable
        :   `transcribe(request: ASRRequest) -> iterable[Mapping]`. Every segment
            must provide `text`, `timecode_start` and `timecode_end`. Optional
            metadata is preserved.

        ****capability****str or None, optional
        :   Capability-registry identifier used by readiness-aware policies.

        ****fallback\_exceptions****tuple, optional
        :   Exceptions safe to convert into fallback diagnostics.

        ****requires\_network****bool, optional
        :   Declare a network requirement for offline policy enforcement.

        ****may\_download****bool, optional
        :   Declare that first use may download model/assets.

        ****offline\_capable****bool, optional
        :   Whether the backend can honour `ASRRequest.allow_network=False` and
            `allow_download=False` without attempting a download. Custom
            backends must opt in explicitly; the orchestrator trusts this contract.

        ****degrades\_on\_failure****bool, optional
        :   Whether failure followed by another backend success is DEGRADED.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****transcribe**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.15)")**[****[**[**ASRRequest**](scikitplot.corpus.ASRRequest.html#scikitplot.corpus.ASRRequest "scikitplot.corpus._readers._whisper.ASRRequest")**]****,** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]****]**)
        * ****capability**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****fallback\_exceptions**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**type**](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)")**[**[**BaseException**](https://docs.python.org/3/builtins/exceptions.html#BaseException "(in Python v3.15)")**]****,** **...****]**)
        * ****requires\_network**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****may\_download**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****offline\_capable**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****degrades\_on\_failure**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    User callables receive one immutable request object rather than an expanding
    keyword signature, so future request fields can be added compatibly.

    capability: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ASRBackend.capability "Link to this definition")

    degrades\_on\_failure: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.ASRBackend.degrades_on_failure "Link to this definition")

    fallback\_exceptions: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[type](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)")[[BaseException](https://docs.python.org/3/builtins/exceptions.html#BaseException "(in Python v3.15)")], ...] = (<class 'Exception'>,)[#](#scikitplot.corpus.ASRBackend.fallback_exceptions "Link to this definition")

    may\_download: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.ASRBackend.may_download "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_readers/_whisper.py#L73)[#](#scikitplot.corpus.ASRBackend.name "Link to this definition")

    offline\_capable: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.ASRBackend.offline_capable "Link to this definition")

    requires\_network: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.ASRBackend.requires_network "Link to this definition")

    transcribe: [Callable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.15)")[[[ASRRequest](scikitplot.corpus.ASRRequest.html#scikitplot.corpus.ASRRequest "scikitplot.corpus._readers._whisper.ASRRequest")], [Iterable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")[[Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]][[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_readers/_whisper.py#L73)[#](#scikitplot.corpus.ASRBackend.transcribe "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_backend_policy_script_thumb.png)

[Customize Corpus backends and readiness policies](../../auto_examples/corpus/plot_corpus_backend_policy_script.html)

Customize Corpus backends and readiness policies