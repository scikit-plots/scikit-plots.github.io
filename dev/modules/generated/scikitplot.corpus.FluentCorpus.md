# FluentCorpus[#](#fluentcorpus "Link to this heading")

class scikitplot.corpus.FluentCorpus(**plan=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L408)[#](#scikitplot.corpus.FluentCorpus "Link to this definition")
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

    build()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L684)[#](#scikitplot.corpus.FluentCorpus.build "Link to this definition")
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

    chunker(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L731)[#](#scikitplot.corpus.FluentCorpus.chunker "Link to this definition")
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

    config(**domain**, **value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L613)[#](#scikitplot.corpus.FluentCorpus.config "Link to this definition")
    :   Set one configuration domain by name.

        Parameters:
        :   * ****domain**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    configure(**config=None**, **\***, **conflict='error'**, **\*\*fragments**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L466)[#](#scikitplot.corpus.FluentCorpus.configure "Link to this definition")
    :   Set several domains atomically using the normal conflict contract.

        Domains are applied in canonical [`CONFIG_DOMAINS`](scikitplot.corpus.CONFIG_DOMAINS.html#scikitplot.corpus.CONFIG_DOMAINS "scikitplot.corpus.CONFIG_DOMAINS") order, never in
        mapping insertion order; fluent configuration therefore remains
        declarative and order-independent.

        Parameters:
        :   * ****config**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****fragments**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    diff(**other**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L653)[#](#scikitplot.corpus.FluentCorpus.diff "Link to this definition")
    :   Describe domain/stage differences without constructing components.

        Parameters:
        :   ****other**** ([**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus") **|** [**CorpusPlan**](scikitplot.corpus.CorpusPlan.html#scikitplot.corpus.CorpusPlan "scikitplot.corpus._plan.CorpusPlan"))

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    embedder(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L731)[#](#scikitplot.corpus.FluentCorpus.embedder "Link to this definition")
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

    enricher(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L731)[#](#scikitplot.corpus.FluentCorpus.enricher "Link to this definition")
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

    explain()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L643)[#](#scikitplot.corpus.FluentCorpus.explain "Link to this definition")
    :   Return a JSON-compatible explanation of configuration and validity.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    export(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L731)[#](#scikitplot.corpus.FluentCorpus.export "Link to this definition")
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

    classmethod from\_config(**config=None**, **\***, **stages=None**, **\*\*fragments**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L434)[#](#scikitplot.corpus.FluentCorpus.from_config "Link to this definition")
    :   Generate a fluent plan from a user mapping plus keyword fragments.

        This is the data-driven counterpart to chained setters. It is useful for
        configuration files, notebooks and generated experiment matrices while
        preserving the same canonical conflict/validation rules.

        Parameters:
        :   * ****config**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
            * ****stages**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]** **|** [**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
            * ****fragments**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    identity(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L731)[#](#scikitplot.corpus.FluentCorpus.identity "Link to this definition")
    :   Configure the identity.

        Parameters:
        :   ****value****Any
            :   Configuration fragment or component for the identity domain.

            ****conflict****{{‘error’, ‘replace’}}, optional
            :   What to do if the identity is already configured. Default
                `'error'`: silently discarding the previous value would be
                a configuration that looks applied but was overwritten.

        Returns:
        :   FluentCorpus
            :   A new builder; the original is unchanged.

        Raises:
        :   ConfigConflictError
            :   If the identity is already configured and `conflict` is
                `'error'`.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    index(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L731)[#](#scikitplot.corpus.FluentCorpus.index "Link to this definition")
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

    iter\_variants(**\***, **max\_variants=256**, **\*\*choices**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L556)[#](#scikitplot.corpus.FluentCorpus.iter_variants "Link to this definition")
    :   Lazily generate a deterministic bounded configuration grid.

        The full Cartesian size is validated **before** the first value is
        yielded. This preserves the existing safety bound while letting
        callers stream variants into CI/tuning loops without materializing
        every [`FluentCorpus`](#scikitplot.corpus.FluentCorpus "scikitplot.corpus.FluentCorpus") instance at once.

        Parameters:
        :   * ****max\_variants**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****choices**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")[[**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")]

    materialize(**\***, **policy=None**, **registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L705)[#](#scikitplot.corpus.FluentCorpus.materialize "Link to this definition")
    :   Validate this plan and construct a [`RuntimeCorpus`](scikitplot.corpus.RuntimeCorpus.html#scikitplot.corpus.RuntimeCorpus "scikitplot.corpus.RuntimeCorpus").

        Unlike the fluent setters, materialization is an operational boundary:
        it may construct storage/index/component objects, but it does not read
        the configured source. Source processing starts only when
        [`RuntimeCorpus.run`](scikitplot.corpus.RuntimeCorpus.html#scikitplot.corpus.RuntimeCorpus.run "scikitplot.corpus.RuntimeCorpus.run") or [`RuntimeCorpus.add`](scikitplot.corpus.RuntimeCorpus.html#scikitplot.corpus.RuntimeCorpus.add "scikitplot.corpus.RuntimeCorpus.add") is called.

        Parameters:
        :   * ****policy**** ([**RuntimePolicy**](scikitplot.corpus.RuntimePolicy.html#scikitplot.corpus.RuntimePolicy "scikitplot.corpus.RuntimePolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **Mapping****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]** **|** **None**)
            * ****registry**** ([**ComponentRegistry**](scikitplot.corpus.ComponentRegistry.html#scikitplot.corpus.ComponentRegistry "scikitplot.corpus.ComponentRegistry") **|** **None**)

        Return type:
        :   [RuntimeCorpus](scikitplot.corpus.RuntimeCorpus.html#scikitplot.corpus.RuntimeCorpus "scikitplot.corpus.RuntimeCorpus")

    normalizer(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L731)[#](#scikitplot.corpus.FluentCorpus.normalizer "Link to this definition")
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

    plan()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L635)[#](#scikitplot.corpus.FluentCorpus.plan "Link to this definition")
    :   Return the canonical plan this builder describes.

        Return type:
        :   [**CorpusPlan**](scikitplot.corpus.CorpusPlan.html#scikitplot.corpus.CorpusPlan "scikitplot.corpus._plan.CorpusPlan")

    reader(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L731)[#](#scikitplot.corpus.FluentCorpus.reader "Link to this definition")
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

    replace\_chunker(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L762)[#](#scikitplot.corpus.FluentCorpus.replace_chunker "Link to this definition")
    :   Replace the chunker, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_embedder(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L762)[#](#scikitplot.corpus.FluentCorpus.replace_embedder "Link to this definition")
    :   Replace the embedder, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_enricher(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L762)[#](#scikitplot.corpus.FluentCorpus.replace_enricher "Link to this definition")
    :   Replace the enricher, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_export(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L762)[#](#scikitplot.corpus.FluentCorpus.replace_export "Link to this definition")
    :   Replace the export, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_identity(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L762)[#](#scikitplot.corpus.FluentCorpus.replace_identity "Link to this definition")
    :   Replace the identity, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_index(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L762)[#](#scikitplot.corpus.FluentCorpus.replace_index "Link to this definition")
    :   Replace the index, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_normalizer(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L762)[#](#scikitplot.corpus.FluentCorpus.replace_normalizer "Link to this definition")
    :   Replace the normalizer, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_reader(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L762)[#](#scikitplot.corpus.FluentCorpus.replace_reader "Link to this definition")
    :   Replace the reader, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_retrieval(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L762)[#](#scikitplot.corpus.FluentCorpus.replace_retrieval "Link to this definition")
    :   Replace the retrieval, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_source(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L762)[#](#scikitplot.corpus.FluentCorpus.replace_source "Link to this definition")
    :   Replace the source, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    replace\_storage(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L762)[#](#scikitplot.corpus.FluentCorpus.replace_storage "Link to this definition")
    :   Replace the storage, whether or not one is already configured.

        The explicit counterpart to the error-by-default rule: the
        intent to substitute is stated in the method name.

        Returns:
        :   FluentCorpus

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    retrieval(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L731)[#](#scikitplot.corpus.FluentCorpus.retrieval "Link to this definition")
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

    source(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L731)[#](#scikitplot.corpus.FluentCorpus.source "Link to this definition")
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

    stages(**\*stages**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L619)[#](#scikitplot.corpus.FluentCorpus.stages "Link to this definition")
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

    storage(**value**, **\***, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L731)[#](#scikitplot.corpus.FluentCorpus.storage "Link to this definition")
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

    validate()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L639)[#](#scikitplot.corpus.FluentCorpus.validate "Link to this definition")
    :   Return cross-fragment problems, empty when coherent.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")]

    variants(**\***, **max\_variants=256**, **\*\*choices**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L579)[#](#scikitplot.corpus.FluentCorpus.variants "Link to this definition")
    :   Materialize [`iter_variants`](#scikitplot.corpus.FluentCorpus.iter_variants "scikitplot.corpus.FluentCorpus.iter_variants") as a convenience tuple.

        Use [`iter_variants`](#scikitplot.corpus.FluentCorpus.iter_variants "scikitplot.corpus.FluentCorpus.iter_variants") when the consumer itself is streaming or when
        constructing every variant object at once is unnecessary.

        Parameters:
        :   * ****max\_variants**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****choices**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus"), …]

    with\_overrides(**config=None**, **\*\*fragments**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L498)[#](#scikitplot.corpus.FluentCorpus.with_overrides "Link to this definition")
    :   Return a copy with explicit multi-domain replacements.

        Parameters:
        :   * ****config**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
            * ****fragments**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

    without(**\*domains**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_plan.py#L506)[#](#scikitplot.corpus.FluentCorpus.without "Link to this definition")
    :   Return a copy with selected configuration domains removed.

        Parameters:
        :   ****domains**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCorpus**](#scikitplot.corpus.FluentCorpus "scikitplot.corpus._plan.FluentCorpus")

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