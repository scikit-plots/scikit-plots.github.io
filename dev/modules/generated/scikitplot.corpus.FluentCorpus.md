# FluentCorpus[#](#fluentcorpus "Link to this heading")

class scikitplot.corpus.FluentCorpus(**plan=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L402)[#](#scikitplot.corpus.FluentCorpus "Link to this definition")
:   Immutable fluent builder over a [`CorpusPlan`](scikitplot.corpus.CorpusPlan.html#scikitplot.corpus.CorpusPlan "scikitplot.corpus.CorpusPlan").

    Notes

    Every method returns a ****new**** instance, so a partially-configured builder is
    safely reusable as a template:

    ```
    base = FluentCorpus().reader(r)
    strict, lenient = base.storage(a), base.storage(b)

    ```

    Examples

    Try it in your browser!
    ```
    >>> a = FluentCorpus().embedder("E").storage("S")
    >>> b = FluentCorpus().storage("S").embedder("E")
    >>> a.plan() == b.plan()
    True

    ```
    Go BackOpen In Tab

    Parameters:
    :   ****plan**** ([**CorpusPlan**](scikitplot.corpus.CorpusPlan.html#scikitplot.corpus.CorpusPlan "scikitplot.corpus.CorpusPlan") **|** **None**)

    build()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L479)[#](#scikitplot.corpus.FluentCorpus.build "Link to this definition")
    :   Validate and return the plan, raising on any problem.

        Raises:
        :   ValueError
            :   Naming every validation problem found.

        Return type:
        :   [**CorpusPlan**](scikitplot.corpus.CorpusPlan.html#scikitplot.corpus.CorpusPlan "scikitplot.corpus._plan.CorpusPlan")

        Notes

        ****Developer.**** `build()` remains the validated-plan boundary for
        backward compatibility. Runtime component construction is explicit via
        [`materialize`](#scikitplot.corpus.FluentCorpus.materialize "scikitplot.corpus.FluentCorpus.materialize"), so a caller can still inspect, compare and serialise
        a plan without constructing operational state.

    chunker(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L526)[#](#scikitplot.corpus.FluentCorpus.chunker "Link to this definition")
    :   Configure the chunker.

        Parameters:
        :   ****value****Any
            :   Configuration fragment or component for the chunker domain.

            ****conflict****{{‘error’, ‘replace’}}, optional
            :   What to do if the chunker is already configured. Default
                `'error'`: silently discarding the previous value would be
                a configuration that looks applied but was overwritten.

        Returns:
        :   FluentCorpus
            :   A new builder; the original is unchanged.

        Raises:
        :   ConfigConflictError
            :   If the chunker is already configured and `conflict` is
                `'error'`.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    config(**domain**, **value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L449)[#](#scikitplot.corpus.FluentCorpus.config "Link to this definition")
    :   Set one configuration domain by name.

        Parameters:
        :   * ****domain**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    embedder(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L526)[#](#scikitplot.corpus.FluentCorpus.embedder "Link to this definition")
    :   Configure the embedder.

        Parameters:
        :   ****value****Any
            :   Configuration fragment or component for the embedder domain.

            ****conflict****{{‘error’, ‘replace’}}, optional
            :   What to do if the embedder is already configured. Default
                `'error'`: silently discarding the previous value would be
                a configuration that looks applied but was overwritten.

        Returns:
        :   FluentCorpus
            :   A new builder; the original is unchanged.

        Raises:
        :   ConfigConflictError
            :   If the embedder is already configured and `conflict` is
                `'error'`.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    enricher(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L526)[#](#scikitplot.corpus.FluentCorpus.enricher "Link to this definition")
    :   Configure the enricher.

        Parameters:
        :   ****value****Any
            :   Configuration fragment or component for the enricher domain.

            ****conflict****{{‘error’, ‘replace’}}, optional
            :   What to do if the enricher is already configured. Default
                `'error'`: silently discarding the previous value would be
                a configuration that looks applied but was overwritten.

        Returns:
        :   FluentCorpus
            :   A new builder; the original is unchanged.

        Raises:
        :   ConfigConflictError
            :   If the enricher is already configured and `conflict` is
                `'error'`.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    export(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L526)[#](#scikitplot.corpus.FluentCorpus.export "Link to this definition")
    :   Configure the export.

        Parameters:
        :   ****value****Any
            :   Configuration fragment or component for the export domain.

            ****conflict****{{‘error’, ‘replace’}}, optional
            :   What to do if the export is already configured. Default
                `'error'`: silently discarding the previous value would be
                a configuration that looks applied but was overwritten.

        Returns:
        :   FluentCorpus
            :   A new builder; the original is unchanged.

        Raises:
        :   ConfigConflictError
            :   If the export is already configured and `conflict` is
                `'error'`.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    index(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L526)[#](#scikitplot.corpus.FluentCorpus.index "Link to this definition")
    :   Configure the index.

        Parameters:
        :   ****value****Any
            :   Configuration fragment or component for the index domain.

            ****conflict****{{‘error’, ‘replace’}}, optional
            :   What to do if the index is already configured. Default
                `'error'`: silently discarding the previous value would be
                a configuration that looks applied but was overwritten.

        Returns:
        :   FluentCorpus
            :   A new builder; the original is unchanged.

        Raises:
        :   ConfigConflictError
            :   If the index is already configured and `conflict` is
                `'error'`.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    materialize(**\***, **policy=None**, **registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L500)[#](#scikitplot.corpus.FluentCorpus.materialize "Link to this definition")
    :   Validate this plan and construct a [`RuntimeCorpus`](scikitplot.corpus.RuntimeCorpus.html#scikitplot.corpus.RuntimeCorpus "scikitplot.corpus.RuntimeCorpus").

        Unlike the fluent setters, materialization is an operational boundary:
        it may construct storage/index/component objects, but it does not read
        the configured source. Source processing starts only when
        [`RuntimeCorpus.run`](scikitplot.corpus.RuntimeCorpus.html#scikitplot.corpus.RuntimeCorpus.run "scikitplot.corpus.RuntimeCorpus.run") or [`RuntimeCorpus.add`](scikitplot.corpus.RuntimeCorpus.html#scikitplot.corpus.RuntimeCorpus.add "scikitplot.corpus.RuntimeCorpus.add") is called.

        Parameters:
        :   * ****policy**** ([**RuntimePolicy**](scikitplot.corpus.RuntimePolicy.html#scikitplot.corpus.RuntimePolicy "scikitplot.corpus.RuntimePolicy") **|** **None**)
            * ****registry**** ([**ComponentRegistry**](scikitplot.corpus.ComponentRegistry.html#scikitplot.corpus.ComponentRegistry "scikitplot.corpus.ComponentRegistry") **|** **None**)

        Return type:
        :   [RuntimeCorpus](scikitplot.corpus.RuntimeCorpus.html#scikitplot.corpus.RuntimeCorpus "scikitplot.corpus.RuntimeCorpus")

    normalizer(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L526)[#](#scikitplot.corpus.FluentCorpus.normalizer "Link to this definition")
    :   Configure the normalizer.

        Parameters:
        :   ****value****Any
            :   Configuration fragment or component for the normalizer domain.

            ****conflict****{{‘error’, ‘replace’}}, optional
            :   What to do if the normalizer is already configured. Default
                `'error'`: silently discarding the previous value would be
                a configuration that looks applied but was overwritten.

        Returns:
        :   FluentCorpus
            :   A new builder; the original is unchanged.

        Raises:
        :   ConfigConflictError
            :   If the normalizer is already configured and `conflict` is
                `'error'`.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    plan()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L471)[#](#scikitplot.corpus.FluentCorpus.plan "Link to this definition")
    :   Return the canonical plan this builder describes.

        Return type:
        :   [**CorpusPlan**](scikitplot.corpus.CorpusPlan.html#scikitplot.corpus.CorpusPlan "scikitplot.corpus._plan.CorpusPlan")

    reader(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L526)[#](#scikitplot.corpus.FluentCorpus.reader "Link to this definition")
    :   Configure the reader.

        Parameters:
        :   ****value****Any
            :   Configuration fragment or component for the reader domain.

            ****conflict****{{‘error’, ‘replace’}}, optional
            :   What to do if the reader is already configured. Default
                `'error'`: silently discarding the previous value would be
                a configuration that looks applied but was overwritten.

        Returns:
        :   FluentCorpus
            :   A new builder; the original is unchanged.

        Raises:
        :   ConfigConflictError
            :   If the reader is already configured and `conflict` is
                `'error'`.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_chunker(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L557)[#](#scikitplot.corpus.FluentCorpus.replace_chunker "Link to this definition")
    :   Replace the chunker, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_embedder(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L557)[#](#scikitplot.corpus.FluentCorpus.replace_embedder "Link to this definition")
    :   Replace the embedder, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_enricher(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L557)[#](#scikitplot.corpus.FluentCorpus.replace_enricher "Link to this definition")
    :   Replace the enricher, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_export(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L557)[#](#scikitplot.corpus.FluentCorpus.replace_export "Link to this definition")
    :   Replace the export, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_index(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L557)[#](#scikitplot.corpus.FluentCorpus.replace_index "Link to this definition")
    :   Replace the index, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_normalizer(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L557)[#](#scikitplot.corpus.FluentCorpus.replace_normalizer "Link to this definition")
    :   Replace the normalizer, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_reader(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L557)[#](#scikitplot.corpus.FluentCorpus.replace_reader "Link to this definition")
    :   Replace the reader, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_retrieval(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L557)[#](#scikitplot.corpus.FluentCorpus.replace_retrieval "Link to this definition")
    :   Replace the retrieval, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_source(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L557)[#](#scikitplot.corpus.FluentCorpus.replace_source "Link to this definition")
    :   Replace the source, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_storage(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L557)[#](#scikitplot.corpus.FluentCorpus.replace_storage "Link to this definition")
    :   Replace the storage, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    retrieval(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L526)[#](#scikitplot.corpus.FluentCorpus.retrieval "Link to this definition")
    :   Configure the retrieval.

        Parameters:
        :   ****value****Any
            :   Configuration fragment or component for the retrieval domain.

            ****conflict****{{‘error’, ‘replace’}}, optional
            :   What to do if the retrieval is already configured. Default
                `'error'`: silently discarding the previous value would be
                a configuration that looks applied but was overwritten.

        Returns:
        :   FluentCorpus
            :   A new builder; the original is unchanged.

        Raises:
        :   ConfigConflictError
            :   If the retrieval is already configured and `conflict` is
                `'error'`.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    source(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L526)[#](#scikitplot.corpus.FluentCorpus.source "Link to this definition")
    :   Configure the source.

        Parameters:
        :   ****value****Any
            :   Configuration fragment or component for the source domain.

            ****conflict****{{‘error’, ‘replace’}}, optional
            :   What to do if the source is already configured. Default
                `'error'`: silently discarding the previous value would be
                a configuration that looks applied but was overwritten.

        Returns:
        :   FluentCorpus
            :   A new builder; the original is unchanged.

        Raises:
        :   ConfigConflictError
            :   If the source is already configured and `conflict` is
                `'error'`.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    stages(**\*stages**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L455)[#](#scikitplot.corpus.FluentCorpus.stages "Link to this definition")
    :   Set an explicit pipeline stage order.

        Notes

        ****Developer.**** This is the **only** way to express execution order.
        Chained configuration calls deliberately do not, because a chain whose
        order silently changed the pipeline would be a second execution engine
        defined by call order.

        Parameters:
        :   ****stages**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    storage(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L526)[#](#scikitplot.corpus.FluentCorpus.storage "Link to this definition")
    :   Configure the storage.

        Parameters:
        :   ****value****Any
            :   Configuration fragment or component for the storage domain.

            ****conflict****{{‘error’, ‘replace’}}, optional
            :   What to do if the storage is already configured. Default
                `'error'`: silently discarding the previous value would be
                a configuration that looks applied but was overwritten.

        Returns:
        :   FluentCorpus
            :   A new builder; the original is unchanged.

        Raises:
        :   ConfigConflictError
            :   If the storage is already configured and `conflict` is
                `'error'`.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    validate()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L475)[#](#scikitplot.corpus.FluentCorpus.validate "Link to this definition")
    :   Return cross-fragment problems, empty when coherent.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_corpus_script_thumb.png)

[Configure Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_corpus_script.html)

Configure Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v1_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v1.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v2_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v2.html)

Build and Search a Real Hamlet Corpus with FluentCorpus