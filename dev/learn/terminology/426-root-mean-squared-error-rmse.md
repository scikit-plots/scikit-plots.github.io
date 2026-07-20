🔬  ****Root Mean Squared Error (RMSE)****

# Root Mean Squared Error (RMSE)[#](#root-mean-squared-error-rmse "Link to this heading")

**The square root of mean squared error, in the target’s units.**

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

****Root mean squared error**** is the ****square root**** of the MSE:

\[\text{RMSE} = \sqrt{\frac{1}{n}\sum\_{i=1}^{n}\big(y\_i - \hat{y}\_i\big)^2}.\]

The root returns the error to the target’s ****original units****, so it reads as a ****typical error magnitude****.

## How it behaves[#](#how-it-behaves "Link to this heading")

RMSE keeps MSE’s heavy ****penalty on large errors**** and its ****outlier sensitivity****, but is far more
****interpretable**** — an RMSE of 5 means predictions are off by about ****5 units**** on average. It ranks models
****identically**** to MSE, is always ****≥ the MAE****, and the RMSE–MAE gap widens as the ****error variance**** grows.

## When to use it[#](#when-to-use-it "Link to this heading")

Report RMSE for regression when ****large errors are costly**** and you want a number in the data’s units; pair
it with ****R²**** for a scale-free complement. Like R², it also ****falls**** as you add variables, so watch
****overfitting****.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [R² (R-squared)](259-r2-r-squared.html) · [Loss Functions](289-loss-functions.html) · [Regression Models](309-regression-models.html) · [Average Absolute Error (AAE)](246-average-absolute-error-aae.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Root Mean Squared Error (RMSE)](https://insightful-data-lab.com/2025/08/17/root-mean-squared-error-rmse/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)