🔬  ****Bootstrap****

# Bootstrap[#](#bootstrap "Link to this heading")

**Resampling with replacement to estimate the variability of a statistic.**

## What it is[#](#what-it-is "Link to this heading")

The ****bootstrap**** is a resampling method that draws new samples ****with replacement**** from the observed data
— each resample the same size as the original, with some points repeated and others omitted. From many such
resamples it estimates a statistic’s ****sampling distribution****.

## What it’s for[#](#what-it-s-for "Link to this heading")

By recomputing a statistic (a mean, an AUC) across hundreds or thousands of bootstrap resamples, you get its
****standard error**** and ****confidence intervals**** ****without**** assuming a formula or a distribution. That makes
it a flexible, ****non-parametric**** way to quantify ****uncertainty****.

## Where it appears[#](#where-it-appears "Link to this heading")

The same idea powers ****bagging**** (bootstrap aggregating) and ****random forests****, which train each model on a
different bootstrap sample to reduce variance. Its main cost is ****compute**** — many refits — and it can
struggle with very small samples or extreme statistics.

---

****Mind map — connected ideas****

> [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Standard Error (SE)](084-standard-error-se.html) · [Upsampling](367-upsampling.html) · [Downsampling](368-downsampling.html) · [Decision Trees](340-decision-trees.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html)

---

****More in Model Evaluation & Uncertainty****

> [Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Relative accuracy](258-relative-accuracy.html)

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Bootstrap](https://insightful-data-lab.com/2025/08/20/bootstrap/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)