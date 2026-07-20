🔬  ****Mean Absolute Percentage Error (MAPE)****

# Mean Absolute Percentage Error (MAPE)[#](#mean-absolute-percentage-error-mape "Link to this heading")

**The average absolute error expressed as a percentage of actuals.**

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

****Mean absolute percentage error**** expresses each error as a ****percentage of the actual**** value, averaged:

\[\text{MAPE} = \frac{100\%}{n}\sum\_{i=1}^{n}\left|\frac{y\_i - \hat{y}\_i}{y\_i}\right|.\]

This makes it ****scale-free**** — comparable across series of wildly different magnitudes.

## Why it’s popular[#](#why-it-s-popular "Link to this heading")

“8% off” is instantly meaningful to non-specialists and lets you compare accuracy across products or regions
on different scales — hence its ubiquity in ****demand forecasting**** and business reporting.

## The pitfalls[#](#the-pitfalls "Link to this heading")

MAPE ****explodes when actuals are zero or near-zero**** (the denominator → 0), and it is ****asymmetric**** —
over-forecasts can incur unbounded percentage error while under-forecasts are capped at 100%, biasing it
toward models that ****under-predict****. For intermittent or zero-heavy data, ****scaled**** errors like ****MASE****
are safer.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Root Mean Squared Error (RMSE)](426-root-mean-squared-error-rmse.html) · [Relative accuracy](258-relative-accuracy.html) · [Forecast Error](250-forecast-error.html) · [R² (R-squared)](259-r2-r-squared.html) · [Regression Models](309-regression-models.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Relative accuracy](258-relative-accuracy.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Mean Absolute Percentage Error (MAPE)](https://insightful-data-lab.com/2025/08/17/mean-absolute-percentage-error-mape/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)