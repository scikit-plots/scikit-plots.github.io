# print\_labels[#](#print-labels "Link to this heading")

scikitplot.seaborn.print\_labels(**as\_json=True**, **indent=2**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/6d916ad/scikitplot/seaborn/_decile.py#L303)[#](#scikitplot.seaborn.print_labels "Link to this definition")
:   Pretty-print the legend of decile table column names.

    ```
    [
        "decile",
        "prob_min",
        "prob_max",
        "prob_avg",
        "cnt_resp_total",
        "cnt_resp_true",
        "cnt_resp_false",
        "cnt_resp_rndm_true",
        "cnt_resp_wiz_true",
        "rate_resp",  # (alias to decile_wise_response, decile_wise_gain)
        "rate_resp_pct",  # (alias to decile_wise_response, decile_wise_gain %)
        "overall_rate",
        "cum_resp_total",
        "cum_resp_total_pct",
        "cum_resp_true",  #  (alias to cumulative_gain)
        "cum_resp_true_pct",  #  (alias to cumulative_gain %)
        "cum_resp_false",
        "cum_resp_false_pct",
        "cum_resp_rndm_true",
        "cum_resp_rndm_true_pct",
        "cum_resp_wiz_true",
        "cum_resp_wiz_true_pct",
        "cumulative_lift",
        "decile_wise_lift",
        "KS",
    ]

    ```

    Parameters:
    :   ****as\_json****bool, default=True
        :   If True, pretty-print as JSON. If False, use Python’s pprint.

        ****indent****int, default=2
        :   Indentation for JSON formatting.

    Parameters:
    :   * ****as\_json**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****indent**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    Return type:
    :   None

    > **See also**
    > [`decileplot`](scikitplot.seaborn.decileplot.html#scikitplot.seaborn.decileplot "scikitplot.seaborn.decileplot")
    :   Given binary labels y\_true (0/1) and probabilities y\_score 1d array, compute/plot a decile table.

    References

    [1]

    [tensorbored/kds](https://github.com/tensorbored/kds/blob/master/kds/metrics.py#L382)

    [2]

    [tensorbored/kds](https://github.com/tensorbored/kds/blob/master/kds/metrics.py#L382)

    Examples

    Try it in your browser!
    ```
    >>> import scikitplot.seaborn as sp
    >>> sp.print_labels()

    ```
    ```
    {
      "decile": "Meaning: Ranked group based on predicted probabilities (1 = highest probability). Critical: Ensure data is sorted descending by model score; top deciles should capture the majority of positives. Formula: Assign samples to k quantiles (e.g., 10 deciles) based on model score.",
      "prob_min": "Meaning: Minimum predicted probability within the decile. Critical: Indicates model calibration; values too close to prob_max suggest poor separation. Formula: min(score in decile).",
      "prob_max": "Meaning: Maximum predicted probability within the decile. Critical: Checks separation; overlap with lower deciles indicates poor discrimination. Formula: max(score in decile).",
      "prob_avg": "Meaning: Average predicted probability within the decile. Critical: Useful for calibration checks; should decrease monotonically across deciles. Formula: mean(score in decile).",
      "cnt_resp_true": "Meaning: Actual positives/responders in the decile. Critical: Should never exceed cnt_resp_wiz_true; flat counts across deciles indicate a weak or non-discriminative model. Formula: sum(y_true = 1 in decile).",
      "cnt_resp_false": "Meaning: Actual negatives/non-responders in the decile. Critical: Used in KS/statistical calculations; too many negatives in top deciles is a warning. Formula: cnt_resp_total - cnt_resp_true.",
      "cnt_resp_total": "Meaning: Total samples in the decile (positives + negatives). Critical: Denominator for rate_resp and cumulative % calculations; decile imbalance can distort lift/gain. Formula: count(samples in decile).",
      "cnt_resp_rndm_true": "Meaning: Expected positives in the decile under a random model. Critical: Baseline for lift/gain comparison; fatal if model barely exceeds random. Formula: total_positives / n_deciles.",
      "cnt_resp_wiz_true": "Meaning: Ideal/maximum possible positives if the model were perfect. Critical: Must always be ≥ cnt_resp_true; NaN or extremely low values indicate data issues. Formula: allocate top positives directly to highest scoring deciles.",
      "rate_resp": "Meaning: Decile-level response rate (alias: decile_wise_response, decile_wise_gain). Critical: Measures decile quality; early deciles should outperform later ones. Formula: rate_resp = cnt_resp_true / cnt_resp_total.",
      "overall_rate": "Meaning: Overall response rate across the dataset; serves as the baseline probability of a positive. Critical: Used as the denominator in decile-wise lift; essential to assess improvement vs random. Formula: overall_rate = sum(cnt_resp_true) / sum(cnt_resp_total) (fraction or %).",
      "cum_resp_true": "Meaning: Cumulative number of positives captured up to the current decile (alias: cumulative_gain). Critical: Should increase monotonically; maximum = total responders. Flat curve indicates weak model. Formula: Σ cnt_resp_true (≤ current decile).",
      "cum_resp_true_pct": "Meaning: Cumulative % of positives captured = cum_resp_true / total_responders * 100. Critical: Used for lift/gain curves; should always be ≥ model baseline. Formula: cum_resp_true / total_responders * 100.",
      "cum_resp_false": "Meaning: Cumulative number of negatives captured up to the current decile. Critical: Used for KS/statistical calculations; dominance in early deciles is undesirable. Formula: Σ cnt_resp_false (≤ current decile).",
      "cum_resp_false_pct": "Meaning: Cumulative % of negatives captured = cum_resp_false / total_nonresponders * 100. Critical: Should differ from cum_resp_true_pct; nearly equal curves indicate model failure. Formula: cum_resp_false / total_nonresponders * 100.",
      "cum_resp_total": "Meaning: Cumulative total samples up to the current decile. Critical: Tracks population coverage for lift/gain charts. Formula: Σ cnt_resp_total (≤ current decile).",
      "cum_resp_total_pct": "Meaning: Cumulative % of total population covered. Critical: X-axis for lift/gain curves; check decile balance. Formula: cum_resp_total / total_samples * 100.",
      "cum_resp_rndm_true": "Meaning: Cumulative expected positives if randomly assigned. Critical: Baseline for cumulative lift; fatal if model ≈ random curve. Formula: Σ cnt_resp_rndm_true (≤ current decile).",
      "cum_resp_rndm_true_pct": "Meaning: Cumulative % of expected positives under random = cum_resp_rndm_true / total_responders * 100. Critical: Baseline curve is linear from (0,0) to (100,100); model curve must exceed this. Formula: cum_resp_rndm_true / total_responders * 100.",
      "cum_resp_wiz_true": "Meaning: Cumulative ideal/maximum possible positives. Critical: Must always be ≥ model values; never NaN. Formula: Σ cnt_resp_wiz_true (≤ current decile).",
      "cum_resp_wiz_true_pct": "Meaning: % cumulative ideal positives = cum_resp_wiz_true / total_responders * 100. Critical: Wizard benchmark for lift/gain curves; gaps indicate model weakness. Formula: cum_resp_wiz_true / total_responders * 100.",
      "cumulative_lift": "Meaning: Empirical discriminative power; shows cumulative improvement vs random. Critical: Always cumulative; should exceed 1 (or ≥2 in top decile). Formula: cumulative_lift = cum_resp_true_pct / cum_resp_total_pct.",
      "decile_wise_lift": "Meaning: Improvement factor for individual deciles; shows how much better each decile performs vs random. Critical: Fatal if <1. Early deciles should show highest lift. Formula: decile_wise_lift = cnt_resp_true / cnt_resp_rndm_true.",
      "KS": "Meaning: Peak discriminative power (scalar) extracted from cumulative gain curves; maximum distance between cumulative distributions of positives and negatives. Range: 0-1 (fraction) or 0-100 (percent). Interpretation: - <0.2 → Poor discrimination - 0.2-0.4 → Fair - 0.4-0.6 → Good - ≥0.6 → Excellent - ≥0.7 → Suspiciously high (possible overfitting or leakage). Critical: Report across train/validation/test; ensure top deciles dominate appropriately. Formula: KS = max(cum_resp_true_pct - cum_resp_false_pct) (sorted descending by model score)."
    }

    ```
    Go BackOpen In Tab

Make live