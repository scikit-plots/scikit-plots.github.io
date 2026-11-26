# ScoreCalibrator[#](#scorecalibrator "Link to this heading")

class scikitplot.rank\_bm25.ScoreCalibrator(**method='sigmoid'**, **\***, **platt\_targets=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/rank_bm25/_calibration.py#L222)[#](#scikitplot.rank_bm25.ScoreCalibrator "Link to this definition")
:   Monotone map from BM25 scores to probabilities of relevance.

    Parameters:
    :   ****method****{“sigmoid”, “isotonic”}, default=”sigmoid”
        :   Platt scaling (two parameters, data-efficient, strictly monotone) or
            isotonic regression (flexible, needs more labels, can merge ranks).

        ****platt\_targets****bool, default=True
        :   For `"sigmoid"`: fit to Platt’s smoothed targets instead of 0/1,
            which keeps the fit finite on perfectly separable labels.

    Attributes:
    :   ****fitted****bool
        :   Whether [`fit`](#scikitplot.rank_bm25.ScoreCalibrator.fit "scikitplot.rank_bm25.ScoreCalibrator.fit") has run.

        ****population****str or None
        :   The population the labels were drawn from, as declared at fit.

        ****prevalence\_****float
        :   Share of relevant labels in the population, after any
            [`shift_prior`](#scikitplot.rank_bm25.ScoreCalibrator.shift_prior "scikitplot.rank_bm25.ScoreCalibrator.shift_prior").

        ****n\_samples\_, n\_queries\_****int
        :   Labelled pairs and distinct queries used to fit.

        ****slope\_, intercept\_****float
        :   Sigmoid parameters (`"sigmoid"` only).

        ****thresholds\_, values\_****numpy.ndarray
        :   Fitted points (`"isotonic"` only).

    Parameters:
    :   * ****method**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****platt\_targets**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****User.**** Fit on scores produced exactly as they will be at prediction
    time – same recipe, same parameters, same analyzer, same candidate
    selection – and evaluate only on queries not used to fit
    ([`require_held_out`](#scikitplot.rank_bm25.ScoreCalibrator.require_held_out "scikitplot.rank_bm25.ScoreCalibrator.require_held_out")). A score transformed without fitting is not a
    probability; this class has no unfitted transform on purpose.

    fit(**scores**, **labels**, **\***, **query\_ids**, **population**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/rank_bm25/_calibration.py#L276)[#](#scikitplot.rank_bm25.ScoreCalibrator.fit "Link to this definition")
    :   Fit the map on labelled (query, document) pairs.

        Parameters:
        :   ****scores****array-like of shape (n\_pairs,)
            :   BM25 scores, finite.

            ****labels****array-like of shape (n\_pairs,)
            :   Binary relevance (0/1 or `bool`).

            ****query\_ids****iterable of str
            :   The query each pair belongs to; kept only as SHA-256 digests, for
                [`require_held_out`](#scikitplot.rank_bm25.ScoreCalibrator.require_held_out "scikitplot.rank_bm25.ScoreCalibrator.require_held_out").

            ****population****str
            :   What the pairs were drawn from, e.g. `"bm25-top100"`; a
                calibrator is valid for that population only.

        Returns:
        :   ScoreCalibrator
            :   `self`.

        Raises:
        :   ValueError
            :   For mismatched lengths, non-binary labels, labels of one class
                only, a non-finite score, an empty `population`, a sigmoid slope
                `<= 0`, or divergence on separable labels.

            TypeError
            :   For non-numeric scores or labels.

        Parameters:
        :   * ****scores**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****labels**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****query\_ids**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
            * ****population**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**ScoreCalibrator**](#scikitplot.rank_bm25.ScoreCalibrator "scikitplot.rank_bm25._calibration.ScoreCalibrator")

    classmethod from\_dict(**state**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/rank_bm25/_calibration.py#L485)[#](#scikitplot.rank_bm25.ScoreCalibrator.from_dict "Link to this definition")
    :   Rebuild a fitted calibrator from [`to_dict`](#scikitplot.rank_bm25.ScoreCalibrator.to_dict "scikitplot.rank_bm25.ScoreCalibrator.to_dict") output.

        Raises:
        :   ValueError
            :   If the schema is not this one, or a required field is missing.

        Parameters:
        :   ****state**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**ScoreCalibrator**](#scikitplot.rank_bm25.ScoreCalibrator "scikitplot.rank_bm25._calibration.ScoreCalibrator")

    predict\_proba(**scores**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/rank_bm25/_calibration.py#L363)[#](#scikitplot.rank_bm25.ScoreCalibrator.predict_proba "Link to this definition")
    :   Probability of relevance for each score.

        Parameters:
        :   ****scores****array-like of shape (n,)
            :   BM25 scores produced the way the training scores were.

        Returns:
        :   numpy.ndarray of float64, shape (n,)
            :   One probability per score (one column, not scikit-learn’s two).

        Raises:
        :   RuntimeError
            :   If not fitted.

            ValueError, TypeError
            :   For non-finite, non-numeric or multi-dimensional scores.

        Parameters:
        :   ****scores**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")

    require\_held\_out(**query\_ids**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/rank_bm25/_calibration.py#L434)[#](#scikitplot.rank_bm25.ScoreCalibrator.require_held_out "Link to this definition")
    :   Refuse evaluation queries that were used to fit.

        Parameters:
        :   ****query\_ids****iterable of str
            :   The queries an evaluation will use.

        Raises:
        :   ValueError
            :   Naming how many of them were seen during fit. Fit and evaluate on
                the same queries and calibration error is underestimated.

        Parameters:
        :   ****query\_ids**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   None

    shift\_prior(**base\_rate**, **\***, **population**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/rank_bm25/_calibration.py#L400)[#](#scikitplot.rank_bm25.ScoreCalibrator.shift_prior "Link to this definition")
    :   Return a copy valid for a population with another relevant share.

        Parameters:
        :   ****base\_rate****float
            :   Share of relevant pairs in the new population, in `(0, 1)`.

            ****population****str
            :   Name of the new population.

        Returns:
        :   ScoreCalibrator
            :   A new calibrator; `self` is unchanged.

        Parameters:
        :   * ****base\_rate**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
            * ****population**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**ScoreCalibrator**](#scikitplot.rank_bm25.ScoreCalibrator "scikitplot.rank_bm25._calibration.ScoreCalibrator")

        Notes

        ****User.**** Adds `logit(base_rate) - logit(training prevalence)` to
        every log-odds. Exact when the scores of relevant and of non-relevant
        pairs are distributed the same way in both populations (only their
        mix differs) – true for a subsample, not for a different candidate
        generator. Isotonic outputs of exactly 0 or 1 stay 0 or 1.

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/rank_bm25/_calibration.py#L462)[#](#scikitplot.rank_bm25.ScoreCalibrator.to_dict "Link to this definition")
    :   Return a JSON-serialisable state; query ids appear only as digests.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]