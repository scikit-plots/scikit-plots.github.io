# BackendPolicy[#](#backendpolicy "Link to this heading")

class scikitplot.corpus.BackendPolicy(**name='resilient'**, **order=()**, **include\_unlisted=True**, **allow\_fallback=True**, **require\_ready=False**, **allow\_network=True**, **allow\_download=True**, **on\_exhausted=ErrorPolicy.COLLECT**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L109)[#](#scikitplot.corpus.BackendPolicy "Link to this definition")
:   Policy for selecting and exhausting optional backend chains.

    The policy controls **orchestration**, not backend implementation details.
    Readers continue to decide what counts as a usable result and which
    exceptions are safe to fall back from.

    Parameters:
    :   ****name****str
        :   Stable policy label used in diagnostics.

        ****order****tuple[str, …], optional
        :   Preferred backend names. Unlisted candidates follow in their declared
            order unless `include_unlisted` is false.

        ****include\_unlisted****bool, optional
        :   Append candidates absent from `order`. Default: `True`.

        ****allow\_fallback****bool, optional
        :   When false, only the first selected candidate is attempted.

        ****require\_ready****bool, optional
        :   Skip candidates whose registered capability is not definitely ready.
            This is useful for deterministic/offline runs; the default resilient
            policy may attempt components whose model readiness is unknowable until
            first use.

        ****allow\_network****bool, optional
        :   Permit candidates declaring a network requirement.

        ****allow\_download****bool, optional
        :   Permit candidates that may download assets on first use. Backends that
            declare `offline_capable=True` may still run when downloads are
            forbidden, but they must enforce a local-only execution mode.

        ****on\_exhausted****ErrorPolicy, optional
        :   Public operation behavior after every backend fails. The generic runner
            records the policy but does not raise; readers apply it because only the
            reader knows the correct exception/message contract.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****order**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****include\_unlisted**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****allow\_fallback**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****require\_ready**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****allow\_network**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****allow\_download**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****on\_exhausted**** ([**ErrorPolicy**](scikitplot.corpus.ErrorPolicy.html#scikitplot.corpus.ErrorPolicy "scikitplot.corpus._schema.ErrorPolicy"))

    allow\_download: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.BackendPolicy.allow_download "Link to this definition")

    allow\_fallback: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.BackendPolicy.allow_fallback "Link to this definition")

    allow\_network: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.BackendPolicy.allow_network "Link to this definition")

    classmethod first\_available()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L215)[#](#scikitplot.corpus.BackendPolicy.first_available "Link to this definition")
    :   Attempt only the first selected candidate; do not cascade.

        Return type:
        :   [**BackendPolicy**](#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy")

    classmethod from\_config(**config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L252)[#](#scikitplot.corpus.BackendPolicy.from_config "Link to this definition")
    :   Build a policy from JSON/YAML-shaped configuration.

        The optional `preset` key selects `resilient` (default), `strict`,
        `offline` or `first` first; remaining fields explicitly override the
        preset. Unknown fields are rejected so misspelled policy controls never
        look applied while doing nothing.

        Parameters:
        :   ****config**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**BackendPolicy**](#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy")

    include\_unlisted: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.BackendPolicy.include_unlisted "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'resilient'[#](#scikitplot.corpus.BackendPolicy.name "Link to this definition")

    classmethod offline()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L199)[#](#scikitplot.corpus.BackendPolicy.offline "Link to this definition")
    :   Use only local components and forbid network/download side effects.

        Readiness may be `UNKNOWN` for model-backed engines whose cache can
        only be proven by attempting a local-only load. Such engines are
        eligible only when their candidate declares `offline_capable=True`.

        Return type:
        :   [**BackendPolicy**](#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy")

    on\_exhausted: [ErrorPolicy](scikitplot.corpus.ErrorPolicy.html#scikitplot.corpus.ErrorPolicy "scikitplot.corpus._schema.ErrorPolicy") = 'collect'[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.BackendPolicy.on_exhausted "Link to this definition")

    order: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.BackendPolicy.order "Link to this definition")

    property raise\_on\_exhausted: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.BackendPolicy.raise_on_exhausted "Link to this definition")
    :   Whether the operation should raise after chain exhaustion.

    require\_ready: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.BackendPolicy.require_ready "Link to this definition")

    classmethod resilient()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L189)[#](#scikitplot.corpus.BackendPolicy.resilient "Link to this definition")
    :   Fallback through declared candidates and collect final failure.

        Return type:
        :   [**BackendPolicy**](#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy")

    classmethod strict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L194)[#](#scikitplot.corpus.BackendPolicy.strict "Link to this definition")
    :   Fallback through candidates, then require the caller to raise.

        Return type:
        :   [**BackendPolicy**](#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L239)[#](#scikitplot.corpus.BackendPolicy.to_dict "Link to this definition")
    :   Return a JSON-compatible policy representation.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    with\_order(**\*names**, **include\_unlisted=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L220)[#](#scikitplot.corpus.BackendPolicy.with_order "Link to this definition")
    :   Return a copy with explicit backend preference order.

        Parameters:
        :   * ****names**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****include\_unlisted**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**BackendPolicy**](#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_backend_policy_script_thumb.png)

[Customize Corpus backends and readiness policies](../../auto_examples/corpus/plot_corpus_backend_policy_script.html)

Customize Corpus backends and readiness policies