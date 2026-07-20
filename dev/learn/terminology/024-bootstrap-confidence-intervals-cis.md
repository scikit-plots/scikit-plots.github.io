🔬  ****Bootstrap Confidence Intervals (CIs)****

# Bootstrap Confidence Intervals (CIs)[#](#bootstrap-confidence-intervals-cis "Link to this heading")

**Interval estimates built by resampling the data with replacement and recomputing the statistic many times.**

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

A ****bootstrap confidence interval**** estimates the uncertainty of a statistic — a
mean, median, regression coefficient, even an AUROC — by ****resampling the data****
rather than relying on a parametric formula. The idea: when the population
distribution is unknown, approximate it by drawing from the sample you already have.
It shines when sample sizes are small, the data are non-normal, or no clean
standard-error formula exists.

## The procedure[#](#the-procedure "Link to this heading")

1. Start with the original sample of size \(n\).
2. ****Resample with replacement**** to build \(B\) bootstrap samples (often
   \(B = 1000\) or more), each of size \(n\).
3. Compute the statistic on each bootstrap sample.
4. The spread of those \(B\) values is the ****bootstrap distribution**** of the
   statistic.
5. Read a confidence interval off that distribution.

## Three ways to build the interval[#](#three-ways-to-build-the-interval "Link to this heading")

* ****Percentile**** — take the \(\alpha/2\) and \(1-\alpha/2\) quantiles
  directly (a 95% CI is the 2.5th–97.5th percentiles).
* ****Basic (reverse percentile)**** — reflect the percentile interval around the
  observed statistic to correct simple bias.
* ****BCa (bias-corrected and accelerated)**** — adjusts for both bias and skew in the
  bootstrap distribution; usually the most accurate and the default recommendation.

## Worked example[#](#worked-example "Link to this heading")

For \(X = [5, 7, 9, 10, 12, 8, 6, 7, 9, 11]\) the mean is 8.4. Draw 1000
resamples, take each mean, and read the 2.5th and 97.5th percentiles — about 7.2 and
9.6 — giving a ****95% CI of [7.2, 9.6]****.

```
import numpy as np

rng = np.random.default_rng(42)
boot = [rng.choice(X, size=len(X), replace=True).mean() for _ in range(1000)]
lo, hi = np.percentile(boot, [2.5, 97.5])

```

## Pitfalls and edge cases[#](#pitfalls-and-edge-cases "Link to this heading")

* ****Too few resamples**** — small \(B\) makes the interval itself noisy; prefer
  thousands.
* ****A bad sample stays bad**** — the bootstrap can only resample what you have; a tiny
  or unrepresentative sample yields a confident-looking but wrong interval.
* ****Dependent data break it**** — for time series or grouped data the plain bootstrap
  destroys the dependence structure; use a ****block bootstrap**** instead.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Subsampling](001-subsampling.html) · [Probability](025-probability.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Relative accuracy](258-relative-accuracy.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Bootstrap Confidence Intervals (CIs)](https://insightful-data-lab.com/2025/08/30/bootstrap-confidence-intervals-cis/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)