# ProbabilityFusion[#](#probabilityfusion "Link to this heading")

class scikitplot.corpus.ProbabilityFusion(**policy**, **calibrators**, **scope=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_logodds_fusion.py#L428)[#](#scikitplot.corpus.ProbabilityFusion "Link to this definition")
:   Opt-in probability fusion for hybrid search: a policy and a calibrator per leg.

    Parameters:
    :   ****policy****LogOddsFusion
        :   Weights, base rate and clipping. A leg runs only if its weight is
            above 0.

        ****calibrators****mapping of str to calibrator
        :   Fitted calibrator for each leg that runs, keyed by `"lexical"`
            (BM25 scores) and `"dense"` (cosine similarity). Each must be fitted
            on the scores that leg produces for the hybrid candidate pool:
            `3 * top_k` hits per leg.

        ****scope****SecurityFilter or None, default=None
        :   The scope the lexical calibrator was fitted under, or None for an
            unscoped index. When the lexical leg runs, hybrid search fuses only
            on an index bound to a scope with the same
            [`SecurityFilter.digest`](scikitplot.corpus.SecurityFilter.html#scikitplot.corpus.SecurityFilter.digest "scikitplot.corpus.SecurityFilter.digest") (None: an index with no scope).

    Raises:
    :   TypeError
        :   If `policy` is not a [`LogOddsFusion`](scikitplot.corpus.LogOddsFusion.html#scikitplot.corpus.LogOddsFusion "scikitplot.corpus.LogOddsFusion"), `calibrators` is not
            a mapping, a calibrator lacks the contract, or `scope` is not a
            [`SecurityFilter`](scikitplot.corpus.SecurityFilter.html#scikitplot.corpus.SecurityFilter "scikitplot.corpus.SecurityFilter") or None.

        ValueError
        :   For an unknown leg name, a running leg without a calibrator, an
            unfitted calibrator, or no running leg.

    Parameters:
    :   * ****policy**** ([**LogOddsFusion**](scikitplot.corpus.LogOddsFusion.html#scikitplot.corpus.LogOddsFusion "scikitplot.corpus._logodds_fusion.LogOddsFusion"))
        * ****calibrators**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****scope**** ([**SecurityFilter**](scikitplot.corpus.SecurityFilter.html#scikitplot.corpus.SecurityFilter "scikitplot.corpus._filters.SecurityFilter") **|** **None**)

    Notes

    ****User.**** Pass it as `RetrievalConfig(match_mode="hybrid",
    probability_fusion=...)`; hits then carry `score` = the fused
    probability of relevance and `native_metric="logodds_probability"`.

    BM25 document count, document frequencies and average length are computed
    over the documents a scope admits, so the same document scores
    differently under another scope. For a scoped index, fit the lexical
    calibrator on that index’s scores and pass its `SecurityFilter` as
    `scope`; any other scope, or none, is refused with both digests named.
    Cosine similarity does not depend on the scope, so a dense-only fusion
    (lexical weight 0) runs under any scope.

    ****Developer.**** The scope is matched by digest, never by label: two
    filters with one label are two scopes.

    calibrators: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_logodds_fusion.py#L428)[#](#scikitplot.corpus.ProbabilityFusion.calibrators "Link to this definition")

    policy: [LogOddsFusion](scikitplot.corpus.LogOddsFusion.html#scikitplot.corpus.LogOddsFusion "scikitplot.corpus._logodds_fusion.LogOddsFusion")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_logodds_fusion.py#L428)[#](#scikitplot.corpus.ProbabilityFusion.policy "Link to this definition")

    require\_scope(**scope**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_logodds_fusion.py#L516)[#](#scikitplot.corpus.ProbabilityFusion.require_scope "Link to this definition")
    :   Refuse an index scope the lexical calibrator was not fitted under.

        Parameters:
        :   ****scope****SecurityFilter or None
            :   The scope the index is bound to; None for an unscoped index.

        Raises:
        :   ValueError
            :   If the lexical leg runs and the digests differ, naming both.

        Parameters:
        :   ****scope**** ([**SecurityFilter**](scikitplot.corpus.SecurityFilter.html#scikitplot.corpus.SecurityFilter "scikitplot.corpus._filters.SecurityFilter") **|** **None**)

        Return type:
        :   None

    runs(**leg**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_logodds_fusion.py#L543)[#](#scikitplot.corpus.ProbabilityFusion.runs "Link to this definition")
    :   Whether the leg named `leg` is retrieved and fused.

        Parameters:
        :   ****leg**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    scope: [SecurityFilter](scikitplot.corpus.SecurityFilter.html#scikitplot.corpus.SecurityFilter "scikitplot.corpus._filters.SecurityFilter") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ProbabilityFusion.scope "Link to this definition")

    property scope\_digest: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.corpus.ProbabilityFusion.scope_digest "Link to this definition")
    :   The digest of [`scope`](#scikitplot.corpus.ProbabilityFusion.scope "scikitplot.corpus.ProbabilityFusion.scope"), or None when fitted unscoped (str or None).