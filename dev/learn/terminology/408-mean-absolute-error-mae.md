🔬  ****Mean Absolute Error (MAE)****

# Mean Absolute Error (MAE)[#](#mean-absolute-error-mae "Link to this heading")

**The average absolute difference between predictions and actuals.**

## What it is[#](#what-it-is "Link to this heading")

****Mean Absolute Error**** is the average ****absolute**** gap between prediction and truth — the ****L1**** error:

\[\text{MAE} = \frac{1}{N}\sum\_{i=1}^{N} |y\_i - \hat{y}\_i|.\]

It reports the typical error in the ****same units**** as the target, with no squaring.

## How it behaves[#](#how-it-behaves "Link to this heading")

Because it takes ****absolute**** values rather than squares, MAE weights ****all**** errors ****linearly**** and is far
more ****robust to outliers**** than MSE / RMSE — one huge miss doesn’t dominate. The forecast that minimizes MAE
is the ****median**** of the target (for RMSE it is the mean).

## When to use it[#](#when-to-use-it "Link to this heading")

MAE is the right choice when you want an ****interpretable****, outlier-****resistant**** measure of typical error and
don’t need to punish large mistakes extra hard. Its main limits: it is ****scale-dependent**** (not comparable
across series — use ****MASE**** for that) and, being ****point-only****, it can’t score probabilistic forecasts.

---

****Mind map — connected ideas****

> [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Root Mean Squared Error (RMSE)](426-root-mean-squared-error-rmse.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html)

---

****More in Model Evaluation & Uncertainty****

> [Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Relative accuracy](258-relative-accuracy.html)

---

**Theme:** Model Evaluation & Uncertainty  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Mean Absolute Error (MAE)](https://insightful-data-lab.com/2025/08/19/mean-absolute-error-mae/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)