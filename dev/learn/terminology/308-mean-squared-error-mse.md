🔬  ****Mean Squared Error (MSE)****

# Mean Squared Error (MSE)[#](#mean-squared-error-mse "Link to this heading")

**The average of squared differences between predictions and actuals.**

## What it is[#](#what-it-is "Link to this heading")

****Mean squared error**** is the average of the ****squared**** differences between predictions and truth — the
workhorse ****loss**** and metric for ****regression**** (also called ****L2**** or quadratic loss):

\[\text{MSE} = \frac{1}{n}\sum\_{i=1}^{n}\big(y\_i - \hat{y}\_i\big)^2.\]

Squaring makes every error positive and ****weights large errors far more**** than small ones.

## How it behaves[#](#how-it-behaves "Link to this heading")

Because errors are squared, MSE is dominated by ****big misses**** and is ****sensitive to outliers**** — one large
error can swamp many small ones. Its units are the ****square**** of the target’s, so it doesn’t read directly;
minimizing MSE yields the ****mean**** (conditional expectation) as the optimal prediction.

## Why it’s used[#](#why-it-s-used "Link to this heading")

It is ****smooth and differentiable****, ideal for ****gradient descent**** (it is the loss regression networks
minimize), and it is the ****maximum-likelihood**** loss under ****Gaussian**** noise. When outliers should count
less, ****MAE**** is preferred.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Root Mean Squared Error (RMSE)](426-root-mean-squared-error-rmse.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Loss Functions](289-loss-functions.html) · [R² (R-squared)](259-r2-r-squared.html) · [Regression Models](309-regression-models.html) · [Forecast Error](250-forecast-error.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Relative accuracy](258-relative-accuracy.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Mean Squared Error (MSE)](https://insightful-data-lab.com/2025/08/21/mean-squared-error-mse/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)