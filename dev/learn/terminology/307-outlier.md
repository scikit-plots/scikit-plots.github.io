🎲  ****Outlier****

# Outlier[#](#outlier "Link to this heading")

**An observation far from the bulk of the data.**

## What it is[#](#what-it-is "Link to this heading")

An ****outlier**** is an ****extreme, atypical**** value that sits far from the bulk of the data. Outliers arise
from genuine rare events, measurement or data-entry ****errors****, or a mixture of populations — and spotting
them matters because they can ****distort**** an analysis.

## What they break[#](#what-they-break "Link to this heading")

Outliers hit statistics that use ****every**** value hardest — the ****mean****, the ****variance / standard
deviation****, and ****squared-error**** losses like ****MSE****, which square the large residual — while ****robust****
measures like the ****median**** barely move. This gap between mean and median is itself a ****signal**** of outliers
or skew.

## How they’re handled[#](#how-they-re-handled "Link to this heading")

Outliers are ****detected**** (z-scores, the ****IQR**** rule, distance- or model-based methods), then
****investigated**** — a true error is corrected or removed, but a genuine extreme is often ****kept**** and handled
with ****robust**** methods or transforms rather than silently discarded.

---

****Mind map — connected ideas****

> [Mean](316-mean.html) · [Median](315-median.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Normal Distribution](238-normal-distribution.html) · [Z-Score](097-z-score.html) · [Standard Error (SE)](084-standard-error-se.html)

---

****More in Probability & Statistics Foundations****

> [Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Population Proportion](199-population-proportion.html) · [Probability](025-probability.html)

---

**Theme:** Probability & Statistics Foundations  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Outlier](https://insightful-data-lab.com/2025/08/21/outlier/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)