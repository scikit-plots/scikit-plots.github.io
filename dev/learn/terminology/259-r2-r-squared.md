🔬  ****R² (R-squared)****

# R² (R-squared)[#](#r2-r-squared "Link to this heading")

**The share of variance in the target explained by a regression model.**

## What it is[#](#what-it-is "Link to this heading")

****R²****, the ****coefficient of determination****, is the ****proportion of variance**** in the target that the
model explains. It compares the model’s ****residual**** error to the variance around the ****mean****:

\[R^2 = 1 - \frac{SS\_{\text{res}}}{SS\_{\text{tot}}}, \qquad
SS\_{\text{res}} = \sum\_i (y\_i - \hat{y}\_i)^2, \quad SS\_{\text{tot}} = \sum\_i (y\_i - \bar{y})^2.\]

## How to read it[#](#how-to-read-it "Link to this heading")

It usually runs ****0 to 1**** — ****1**** is a perfect fit, ****0**** means the model does no better than predicting
the ****mean**** (and it can go ****negative**** for a model worse than that). Being ****dimensionless****, it
complements MAE / RMSE, which report error in the target’s units; in simple regression it equals
\(r^2\), the squared ****Pearson correlation****.

## Caveats[#](#caveats "Link to this heading")

R² ****never decreases**** when predictors are added (even noise), so use ****adjusted R²**** to compare models
of different size; it is sensitive to ****outliers****, assumes the modeled relationship, and a high value
implies ****neither causation nor good out-of-sample**** performance.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Forecast Error](250-forecast-error.html) · [Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Relative accuracy](258-relative-accuracy.html) · [Regression Coefficient](090-regression-coefficient.html) · [Target Variable](236-target-variable.html) · [Point Forecasts](233-point-forecasts.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [R² (R-squared)](https://insightful-data-lab.com/2025/08/22/r%c2%b2-r-squared/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)