🔬  ****Baseline Heuristics****

# Baseline Heuristics[#](#baseline-heuristics "Link to this heading")

**Simple rules used as reference points to judge whether a model adds value.**

## What it is[#](#what-it-is "Link to this heading")

****Baseline heuristics**** are the ****simple, naive**** reference models a real system must ****beat**** to earn its
complexity — the “****dumb****” benchmark. Predicting the ****mean**** or ****median****, the ****majority class****, the
****last value****, or a basic ****if-then rule**** are all baselines.

## Why they’re essential[#](#why-they-re-essential "Link to this heading")

A metric is ****meaningless**** in isolation — 90% accuracy is trivial if the majority class is already 90%. A
baseline sets the ****floor****: if a complex model ****can’t**** beat it, the model adds ****no value**** and may even
hide a ****bug****. Baselines are ****cheap****, fast, and interpretable, so they cost almost nothing to run.

## Where they show up[#](#where-they-show-up "Link to this heading")

Baselines frame every honest ****evaluation**** and are ****built into**** metrics — ****MASE****, for instance, divides a
forecast’s error by a ****naive**** baseline’s, so a score below 1 literally means “****better than the
heuristic****.” Always establish the baseline ****first****.

---

****Mind map — connected ideas****

> [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Root Mean Squared Error (RMSE)](426-root-mean-squared-error-rmse.html) · [Accuracy](323-accuracy.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Time Series Forecasting](256-time-series-forecasting.html) · [Model Score](364-model-score.html)

---

****More in Model Evaluation & Uncertainty****

> [Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Relative accuracy](258-relative-accuracy.html)

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Baseline Heuristics](https://insightful-data-lab.com/2025/08/17/baseline-heuristics/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)