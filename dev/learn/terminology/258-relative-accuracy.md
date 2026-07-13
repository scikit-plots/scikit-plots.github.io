🔬  ****Relative accuracy****

# Relative accuracy[#](#relative-accuracy "Link to this heading")

**Forecast accuracy measured against a baseline rather than in absolute terms.**

## What it is[#](#what-it-is "Link to this heading")

****Relative accuracy**** measures forecast accuracy ****relative to a benchmark**** rather than in absolute
units. You ****normalize**** the error by a reference method’s error — usually the ****naïve**** (or
seasonal-naïve) forecast — so results land on a ****common, scale-free**** scale comparable across series:

\[\text{relative error} = \frac{\mathrm{MAE}\_{\text{model}}}{\mathrm{MAE}\_{\text{benchmark}}}.\]

## How to read it[#](#how-to-read-it "Link to this heading")

A value ****< 1**** means the model ****beats**** the benchmark, ****= 1**** means it ****matches**** it, and ****> 1****
means it is ****worse**** — a relative error of 0.6 is roughly ****40% better**** than the benchmark. This family
includes ****MASE****, ****Theil’s U**** (\(<1\) beats a naïve guess), and relative / bounded relative
absolute errors.

## Why it matters[#](#why-it-matters "Link to this heading")

Absolute errors like MAE and RMSE are ****meaningless without a reference**** — **is an MAE of 10 good?**
depends entirely on the problem — whereas relative accuracy is ****interpretable**** and puts easy and
hard-to-forecast series on equal footing.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Forecast Error](250-forecast-error.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [R² (R-squared)](259-r2-r-squared.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Relative accuracy](https://insightful-data-lab.com/2025/08/22/relative-accuracy/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)