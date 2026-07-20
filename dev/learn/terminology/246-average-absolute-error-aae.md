🔬  ****Average Absolute Error (AAE)****

# Average Absolute Error (AAE)[#](#average-absolute-error-aae "Link to this heading")

**The mean of absolute differences between forecasts and outcomes.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

The ****average absolute error**** is the mean of the ****absolute**** errors — the average of
\(|\text{forecast} - \text{actual}|\) across all points. It answers **how big is the typical error?**
in the ****same units**** as the data, and is identical to the ****Mean Absolute Error (MAE)**** (often also
called the Mean Absolute Deviation):

\[\mathrm{AAE} = \frac{1}{n}\sum\_{i=1}^{n} |y\_i - \hat{y}\_i|.\]

## Properties[#](#properties "Link to this heading")

Because it uses ****absolute**** (not squared) errors, AAE is ****robust to outliers**** — a few large misses do
not dominate — and it treats over- and under-prediction ****symmetrically****, ignoring the **direction** of
error. The forecast that minimizes it is the ****median****.

## Limitation[#](#limitation "Link to this heading")

AAE is ****scale-dependent****: you cannot compare it across series on different scales (an AAE of 10 is tiny
for house prices, huge for temperatures). For that, switch to a ****percentage**** or ****relative**** metric.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Forecast Error](250-forecast-error.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Relative accuracy](258-relative-accuracy.html) · [R² (R-squared)](259-r2-r-squared.html) · [Point Forecasts](233-point-forecasts.html) · [Time Series Forecasting](256-time-series-forecasting.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Relative accuracy](258-relative-accuracy.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Average Absolute Error (AAE)](https://insightful-data-lab.com/2025/08/22/average-absolute-error-aae/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)