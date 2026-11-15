# CorpusPolicyBundle[#](#corpuspolicybundle "Link to this heading")

class scikitplot.corpus.CorpusPolicyBundle(**name='default'**, **runtime=None**, **backend=None**, **download=None**, **errors=ErrorPolicy.COLLECT**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_policies.py#L47)[#](#scikitplot.corpus.CorpusPolicyBundle "Link to this definition")
:   Typed composition of the independent Corpus policy dimensions.

    Parameters:
    :   ****name****str, optional
        :   Human-facing label used only in diagnostics/serialization.

        ****runtime****RuntimePolicy, str, mapping or None, optional
        :   Source-execution policy.

        ****backend****BackendPolicy, str, mapping or None, optional
        :   Optional-backend orchestration policy.

        ****download****DownloadPolicy, str, mapping or None, optional
        :   Transport/resource policy.

        ****errors****ErrorPolicy or str, optional
        :   Per-document pipeline error behaviour.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****runtime**** ([**RuntimePolicy**](scikitplot.corpus.RuntimePolicy.html#scikitplot.corpus.RuntimePolicy "scikitplot.corpus._runtime.RuntimePolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****backend**** ([**BackendPolicy**](scikitplot.corpus.BackendPolicy.html#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****download**** ([**DownloadPolicy**](scikitplot.corpus.DownloadPolicy.html#scikitplot.corpus.DownloadPolicy "scikitplot.corpus._downloader._policy.DownloadPolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****errors**** ([**ErrorPolicy**](scikitplot.corpus.ErrorPolicy.html#scikitplot.corpus.ErrorPolicy "scikitplot.corpus._schema.ErrorPolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    The fields remain independent on purpose. For example, allowing URL source
    execution does not imply that an ASR backend may download a model, and an
    offline source policy does not require every pipeline error to raise.

    backend: [BackendPolicy](scikitplot.corpus.BackendPolicy.html#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy") | [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CorpusPolicyBundle.backend "Link to this definition")

    builder\_config(**\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_policies.py#L224)[#](#scikitplot.corpus.CorpusPolicyBundle.builder_config "Link to this definition")
    :   Construct [`BuilderConfig`](scikitplot.corpus.BuilderConfig.html#scikitplot.corpus.BuilderConfig "scikitplot.corpus.BuilderConfig") with this bundle’s download policy.

        Other bundle dimensions remain explicit at their own execution seams;
        this method must not pretend that `CorpusBuilder` controls reader ASR
        or `RuntimeCorpus` URL-source permission.

        Parameters:
        :   ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    classmethod default()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_policies.py#L86)[#](#scikitplot.corpus.CorpusPolicyBundle.default "Link to this definition")
    :   Return policies matching the existing Corpus defaults.

        Return type:
        :   [**CorpusPolicyBundle**](#scikitplot.corpus.CorpusPolicyBundle "scikitplot.corpus._policies.CorpusPolicyBundle")

    classmethod docs\_ci()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_policies.py#L136)[#](#scikitplot.corpus.CorpusPolicyBundle.docs_ci "Link to this definition")
    :   Return bounded, local-only defaults suitable for docs/CI.

        Return type:
        :   [**CorpusPolicyBundle**](#scikitplot.corpus.CorpusPolicyBundle "scikitplot.corpus._policies.CorpusPolicyBundle")

    download: [DownloadPolicy](scikitplot.corpus.DownloadPolicy.html#scikitplot.corpus.DownloadPolicy "scikitplot.corpus._downloader._policy.DownloadPolicy") | [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CorpusPolicyBundle.download "Link to this definition")

    errors: [ErrorPolicy](scikitplot.corpus.ErrorPolicy.html#scikitplot.corpus.ErrorPolicy "scikitplot.corpus._schema.ErrorPolicy") | [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'collect'[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.CorpusPolicyBundle.errors "Link to this definition")

    explain()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_policies.py#L192)[#](#scikitplot.corpus.CorpusPolicyBundle.explain "Link to this definition")
    :   Return the bundle plus derived operational risk/strictness signals.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    classmethod from\_config(**config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_policies.py#L157)[#](#scikitplot.corpus.CorpusPolicyBundle.from_config "Link to this definition")
    :   Build from nested configuration with strict unknown-key rejection.

        Parameters:
        :   ****config**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**CorpusPolicyBundle**](#scikitplot.corpus.CorpusPolicyBundle "scikitplot.corpus._policies.CorpusPolicyBundle")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'default'[#](#scikitplot.corpus.CorpusPolicyBundle.name "Link to this definition")

    classmethod networked()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_policies.py#L125)[#](#scikitplot.corpus.CorpusPolicyBundle.networked "Link to this definition")
    :   Permit URL sources while retaining secure transfer defaults.

        Return type:
        :   [**CorpusPolicyBundle**](#scikitplot.corpus.CorpusPolicyBundle "scikitplot.corpus._policies.CorpusPolicyBundle")

    reader\_kwargs(**\*\*overrides**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_policies.py#L208)[#](#scikitplot.corpus.CorpusPolicyBundle.reader_kwargs "Link to this definition")
    :   Return reader kwargs carrying this bundle’s backend policy.

        This helper is intended for readers that expose `backend_policy` such
        as [`AudioReader`](scikitplot.corpus.AudioReader.html#scikitplot.corpus.AudioReader "scikitplot.corpus.AudioReader") and [`VideoReader`](scikitplot.corpus.VideoReader.html#scikitplot.corpus.VideoReader "scikitplot.corpus.VideoReader"). It deliberately does
        not inject the value into every reader automatically because many
        formats do not have interchangeable optional backends.

        Parameters:
        :   ****overrides**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    runtime: [RuntimePolicy](scikitplot.corpus.RuntimePolicy.html#scikitplot.corpus.RuntimePolicy "scikitplot.corpus._runtime.RuntimePolicy") | [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CorpusPolicyBundle.runtime "Link to this definition")

    classmethod safe\_local()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_policies.py#L97)[#](#scikitplot.corpus.CorpusPolicyBundle.safe_local "Link to this definition")
    :   Return an explicitly local/offline, fail-observable preset.

        Return type:
        :   [**CorpusPolicyBundle**](#scikitplot.corpus.CorpusPolicyBundle "scikitplot.corpus._policies.CorpusPolicyBundle")

    classmethod strict\_local()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_policies.py#L108)[#](#scikitplot.corpus.CorpusPolicyBundle.strict_local "Link to this definition")
    :   Return local-only policies that raise instead of degrading.

        Return type:
        :   [**CorpusPolicyBundle**](#scikitplot.corpus.CorpusPolicyBundle "scikitplot.corpus._policies.CorpusPolicyBundle")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_policies.py#L147)[#](#scikitplot.corpus.CorpusPolicyBundle.to_dict "Link to this definition")
    :   Return a JSON/YAML-compatible nested representation.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    with\_overrides(**\***, **name=None**, **runtime=None**, **backend=None**, **download=None**, **errors=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_policies.py#L174)[#](#scikitplot.corpus.CorpusPolicyBundle.with_overrides "Link to this definition")
    :   Return a typed copy with explicitly selected policy dimensions changed.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****runtime**** ([**RuntimePolicy**](scikitplot.corpus.RuntimePolicy.html#scikitplot.corpus.RuntimePolicy "scikitplot.corpus._runtime.RuntimePolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
            * ****backend**** ([**BackendPolicy**](scikitplot.corpus.BackendPolicy.html#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
            * ****download**** ([**DownloadPolicy**](scikitplot.corpus.DownloadPolicy.html#scikitplot.corpus.DownloadPolicy "scikitplot.corpus._downloader._policy.DownloadPolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
            * ****errors**** ([**ErrorPolicy**](scikitplot.corpus.ErrorPolicy.html#scikitplot.corpus.ErrorPolicy "scikitplot.corpus._schema.ErrorPolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**CorpusPolicyBundle**](#scikitplot.corpus.CorpusPolicyBundle "scikitplot.corpus._policies.CorpusPolicyBundle")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_policy_bundle_script_thumb.png)

[Compose Corpus policies without hiding boundaries](../../auto_examples/corpus/plot_corpus_policy_bundle_script.html)

Compose Corpus policies without hiding boundaries