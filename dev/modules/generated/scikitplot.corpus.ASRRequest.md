# ASRRequest[#](#asrrequest "Link to this heading")

class scikitplot.corpus.ASRRequest(**media\_path**, **model\_size**, **language**, **component**, **include\_confidence=False**, **allow\_network=True**, **allow\_download=True**, **policy\_name='resilient'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_readers/_whisper.py#L53)[#](#scikitplot.corpus.ASRRequest "Link to this definition")
:   Stable immutable request passed to user-provided ASR backends.

    `allow_network` and `allow_download` communicate orchestration policy to
    trusted custom backends; they are requirements, not suggestions, when a
    backend declares itself `offline_capable`. `policy_name` is provenance
    for diagnostics and backend-specific tuning, not an authorization token.

    Parameters:
    :   * ****media\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****model\_size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****component**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****include\_confidence**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****allow\_network**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****allow\_download**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****policy\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    allow\_download: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.ASRRequest.allow_download "Link to this definition")

    allow\_network: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.ASRRequest.allow_network "Link to this definition")

    component: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_readers/_whisper.py#L53)[#](#scikitplot.corpus.ASRRequest.component "Link to this definition")

    include\_confidence: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.ASRRequest.include_confidence "Link to this definition")

    language: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_readers/_whisper.py#L53)[#](#scikitplot.corpus.ASRRequest.language "Link to this definition")

    media\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_readers/_whisper.py#L53)[#](#scikitplot.corpus.ASRRequest.media_path "Link to this definition")

    model\_size: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_readers/_whisper.py#L53)[#](#scikitplot.corpus.ASRRequest.model_size "Link to this definition")

    policy\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'resilient'[#](#scikitplot.corpus.ASRRequest.policy_name "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_backend_policy_script_thumb.png)

[Customize Corpus backends and readiness policies](../../auto_examples/corpus/plot_corpus_backend_policy_script.html)

Customize Corpus backends and readiness policies