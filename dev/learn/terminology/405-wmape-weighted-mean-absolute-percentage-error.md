🔬  ****WMAPE (Weighted Mean Absolute Percentage Error)****

# WMAPE (Weighted Mean Absolute Percentage Error)[#](#wmape-weighted-mean-absolute-percentage-error "Link to this heading")

**MAPE weighted by volume so large items count more.**

## What it is[#](#what-it-is "Link to this heading")

****Weighted Mean Absolute Percentage Error**** divides the ****total**** absolute error by the ****total**** actual
demand — the sum of errors over the sum of actuals:

\[\text{WMAPE} = \frac{\sum\_i |y\_i - \hat{y}\_i|}{\sum\_i |y\_i|}.\]

Rather than averaging per-item percentages, it weights each error by its ****volume****.

## Why weighting matters[#](#why-weighting-matters "Link to this heading")

Plain MAPE treats a 50% miss on a ****tiny**** item the same as on a ****huge**** one and blows up when actuals are
near ****zero****. WMAPE lets ****high-volume**** items dominate — reflecting real ****business impact**** — and stays
defined as long as total demand isn’t zero, making it a ****retail**** and demand-planning staple.

## Its trade-off[#](#its-trade-off "Link to this heading")

Because big items dominate, WMAPE can ****hide**** poor accuracy on the ****long tail**** of small items — a model can
score well while badly missing many low-volume SKUs. It is closely related to ****WAPE****, and best read
****alongside**** a per-item metric to catch tail errors.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [sMAPE (Symmetric Mean Absolute Percentage Error)](406-smape-symmetric-mean-absolute-percentage-error.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [WAPE (Weighted Absolute Percentage Error)](422-wape-weighted-absolute-percentage-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Root Mean Squared Error (RMSE)](426-root-mean-squared-error-rmse.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [WMAPE (Weighted Mean Absolute Percentage Error)](https://insightful-data-lab.com/2025/08/19/wmape-weighted-mean-absolute-percentage-error/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)