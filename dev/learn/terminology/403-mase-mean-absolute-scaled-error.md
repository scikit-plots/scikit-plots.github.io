🔬  ****MASE (Mean Absolute Scaled Error)****

# MASE (Mean Absolute Scaled Error)[#](#mase-mean-absolute-scaled-error "Link to this heading")

**Forecast error scaled by a naive baseline’s error, comparable across series.**

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

****Mean Absolute Scaled Error**** divides a forecast’s ****mean absolute error**** by the MAE of an ****in-sample
naive**** benchmark — the seasonal-naive or last-value forecast — giving a pure ratio:

\[\text{MASE} = \frac{\text{MAE}\_{\text{model}}}{\text{MAE}\_{\text{naive}}}.\]

It answers a single question: **did the model beat the trivial baseline?**

## Reading it[#](#reading-it "Link to this heading")

****MASE < 1**** means the forecast ****outperforms**** naive; ****= 1**** ties it; ****> 1**** means the naive forecast
****wins**** and the model should be reconsidered. Because numerator and denominator share ****units****, MASE is
****scale-free**** and comparable across series of wildly different magnitudes.

## Why it’s the gold standard[#](#why-it-s-the-gold-standard "Link to this heading")

Unlike percentage errors, MASE is ****symmetric**** (over- and under-forecasts penalized equally), ****robust**** to
****zeros**** and outliers (the naive step is bounded away from zero unless the series is constant), and
****interpretable****. Proposed by Hyndman & Koehler (2006), it is a default for forecasting ****competitions**** and
multi-SKU demand.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[WMAPE (Weighted Mean Absolute Percentage Error)](405-wmape-weighted-mean-absolute-percentage-error.html) · [sMAPE (Symmetric Mean Absolute Percentage Error)](406-smape-symmetric-mean-absolute-percentage-error.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Root Mean Squared Error (RMSE)](426-root-mean-squared-error-rmse.html) · [Forecasting Competitions](251-forecasting-competitions.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Relative accuracy](258-relative-accuracy.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [MASE (Mean Absolute Scaled Error)](https://insightful-data-lab.com/2025/08/19/mase-mean-absolute-scaled-error/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)