# LogOddsFusion[#](#logoddsfusion "Link to this heading")

class scikitplot.corpus.LogOddsFusion(**base\_rate**, **weights=()**, **default\_weight=1.0**, **clip=1e-06**, **top\_k=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_logodds_fusion.py#L219)[#](#scikitplot.corpus.LogOddsFusion "Link to this definition")
:   Pool calibrated legs as log-odds evidence into probabilities of relevance.

    Parameters:
    :   ****base\_rate****float
        :   Prior probability of relevance for the fused population, in
            `(0, 1)`. It shifts every log-odds equally, so it changes the
            probabilities but never the order. Required: there is no neutral
            default.

        ****weights****mapping of str to float, optional
        :   Weight per leg name; finite and non-negative; 0 removes the leg.

        ****default\_weight****float, default=1.0
        :   Weight of a leg `weights` does not name.

        ****clip****float, default=1e-6
        :   Probabilities are clipped to `[clip, 1 - clip]` before the logit; in
            `(0, 0.5)`.

        ****top\_k****int or None, default=None
        :   Number of items to return; `None` returns all.

    Raises:
    :   TypeError, ValueError
        :   For a parameter outside its domain.

    Parameters:
    :   * ****base\_rate**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****weights**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** [**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]****,** **...****]**)
        * ****default\_weight**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****clip**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****top\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> class Fitted:  # stands in for a fitted ScoreCalibrator
    ...     fitted, prevalence_ = True, 0.5
    ...
    ...     def predict_proba(self, scores):
    ...         return [min(max(s, 0.0), 1.0) for s in scores]
    >>> fusion = LogOddsFusion(base_rate=0.5)
    >>> result = fusion.fuse(
    ...     [
    ...         ("lexical", [("A", 0.9), ("B", 0.6)], Fitted()),
    ...         ("dense", [("B", 0.8), ("C", 0.7)], Fitted()),
    ...     ]
    ... )
    >>> [item.key for item in result.items]
    ['A', 'B', 'C']
    >>> round(result.items[1].probability, 4)  # odds 1.5 * 4 = 6
    0.8571

    ```
    Go BackOpen In Tab

    base\_rate: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_logodds_fusion.py#L219)[#](#scikitplot.corpus.LogOddsFusion.base_rate "Link to this definition")

    clip: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 1e-06[#](#scikitplot.corpus.LogOddsFusion.clip "Link to this definition")

    default\_weight: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 1.0[#](#scikitplot.corpus.LogOddsFusion.default_weight "Link to this definition")

    fuse(**legs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_logodds_fusion.py#L314)[#](#scikitplot.corpus.LogOddsFusion.fuse "Link to this definition")
    :   Fuse calibrated legs.

        Parameters:
        :   ****legs****iterable of (str, iterable of (str, float), calibrator)
            :   Each leg’s name, its `(key, raw score)` hits best first, and the
                fitted calibrator for that leg’s scores.

        Returns:
        :   LogOddsFusionResult
            :   Items and evidence diagnostics.

        Raises:
        :   TypeError
            :   For a malformed leg, a non-`str` key or name, a non-numeric
                score, or a calibrator without the required contract.

            ValueError
            :   For an empty key, a non-finite score, an unfitted calibrator, or a
                calibrated probability outside `[0, 1]`.

        Parameters:
        :   ****legs**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]**)

        Return type:
        :   [**LogOddsFusionResult**](scikitplot.corpus.LogOddsFusionResult.html#scikitplot.corpus.LogOddsFusionResult "scikitplot.corpus._logodds_fusion.LogOddsFusionResult")

    top\_k: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LogOddsFusion.top_k "Link to this definition")

    weight(**leg**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_logodds_fusion.py#L310)[#](#scikitplot.corpus.LogOddsFusion.weight "Link to this definition")
    :   Return the weight of the leg named `leg`.

        Parameters:
        :   ****leg**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")

    weights: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")] | [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")], ...] = ()[#](#scikitplot.corpus.LogOddsFusion.weights "Link to this definition")