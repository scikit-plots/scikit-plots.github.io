# CorpusPlan[#](#corpusplan "Link to this heading")

class scikitplot.corpus.CorpusPlan(**fragments=<factory>**, **stages=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_plan.py#L163)[#](#scikitplot.corpus.CorpusPlan "Link to this definition")
:   An immutable, canonical description of a corpus configuration.

    Parameters:
    :   ****fragments****dict
        :   Mapping of domain name to configuration fragment.

        ****stages****tuple of str or None, optional
        :   Explicit pipeline stage order. `None` means `DEFAULT_STAGES`.

    Parameters:
    :   * ****fragments**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****stages**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]** **|** **None**)

    Notes

    ****Developer.**** `fragments` is stored sorted by domain, so two plans built
    by different call orders are **equal** rather than merely equivalent. That is
    what makes order-independence checkable rather than aspirational.

    property configured: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.corpus.CorpusPlan.configured "Link to this definition")
    :   Domains that have been configured, in canonical order.

    property effective\_stages: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][#](#scikitplot.corpus.CorpusPlan.effective_stages "Link to this definition")
    :   Stage order this plan will execute in.

    property fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.CorpusPlan.fingerprint "Link to this definition")
    :   Stable content-derived identifier for this configuration.

        Raises:
        :   scikitplot.\_utils.\_canonical.CanonicalError
            :   If a fragment holds a value with no deterministic encoding. The
                message names the fragment and the field.

        Notes

        ****Developer.**** Two plans built by different call orders share a
        fingerprint; two plans differing in any fragment do not. A config change
        that moves this value is exactly a change that should invalidate a built
        index.

        The derivation is `scikitplot._utils._canonical.canonical_digest`,
        the one encoding every identity in this package uses, so a plan, an
        embedding generation and a build generation cannot disagree about what
        two equal configurations are. It replaced a `repr`-based derivation
        that was not stable across interpreters: a fragment holding a plain
        object or a set of strings fingerprinted differently in a second
        process, which makes a persisted cache key unsound.

        The full SHA-256 is returned. Use [`short_fingerprint`](#scikitplot.corpus.CorpusPlan.short_fingerprint "scikitplot.corpus.CorpusPlan.short_fingerprint") for display.

    fragments: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_plan.py#L163)[#](#scikitplot.corpus.CorpusPlan.fragments "Link to this definition")

    get(**domain**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_plan.py#L311)[#](#scikitplot.corpus.CorpusPlan.get "Link to this definition")
    :   Return the fragment for `domain`, or `None`.

        Parameters:
        :   ****domain**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    property ingest\_fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.CorpusPlan.ingest_fingerprint "Link to this definition")
    :   Identity of everything that decides what this plan builds.

        Notes

        ****User.**** This is the value an artifact binds. If it is unchanged, a
        previously built index is still valid for this plan, however the
        retrieval configuration has moved.

        ****Developer.**** Covers `INGEST_DOMAINS` and the effective stage
        order, which changes what is produced rather than how it is read.

    classmethod of(**\*\*fragments**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_plan.py#L184)[#](#scikitplot.corpus.CorpusPlan.of "Link to this definition")
    :   Build a plan from keyword fragments.

        Raises:
        :   ValueError
            :   If a keyword is not a known configuration domain.

        Parameters:
        :   ****fragments**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**CorpusPlan**](#scikitplot.corpus.CorpusPlan "scikitplot.corpus._plan.CorpusPlan")

    property query\_fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.CorpusPlan.query_fingerprint "Link to this definition")
    :   Identity of everything that decides how a build is queried.

        Notes

        ****Developer.**** Covers `QUERY_DOMAINS`. A change here never
        invalidates an artifact; it is separated so that a cache keyed on the
        build cannot be discarded by a query-time edit.

    property short\_fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.CorpusPlan.short_fingerprint "Link to this definition")
    :   First 16 characters of [`fingerprint`](#scikitplot.corpus.CorpusPlan.fingerprint "scikitplot.corpus.CorpusPlan.fingerprint"), for display only.

        Notes

        ****Developer.**** Never persist this or use it as a key. The full digest is
        the identity; a prefix narrows the collision bound for no benefit the
        storage layer needs.

    stages: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CorpusPlan.stages "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_plan.py#L388)[#](#scikitplot.corpus.CorpusPlan.to_dict "Link to this definition")
    :   Return a JSON-compatible description of the plan.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    validate()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_plan.py#L315)[#](#scikitplot.corpus.CorpusPlan.validate "Link to this definition")
    :   Check cross-fragment coherence.

        Returns:
        :   list of ErrorRecord
            :   Empty when the plan is coherent. Records rather than exceptions, so
                a caller sees every problem in one pass.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")]

        Notes

        This is **phase 2** validation: fragment-level schema errors are raised at
        fragment construction, and capability errors (is this backend actually
        installed?) are deferred to build time. Nothing here touches the
        network or loads a model.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_corpus_script_thumb.png)

[Configure Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_corpus_script.html)

Configure Corpus with FluentCorpus