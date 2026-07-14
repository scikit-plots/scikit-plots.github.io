🎲  ****IID (Independent and Identically Distributed)****

# IID (Independent and Identically Distributed)[#](#iid-independent-and-identically-distributed "Link to this heading")

**An assumption that samples are mutually independent and share one distribution.**

## What it is[#](#what-it-is "Link to this heading")

****IID**** — ****independent and identically distributed**** — is the bedrock assumption of most
statistics and machine learning. Two conditions: each observation is ****independent**** (knowing
one tells you nothing about another) and all observations are ****identically distributed****
(drawn from the same \(P(X)\)). Compactly,

\[X\_1, X\_2, \dots, X\_n \sim \text{i.i.d. } P(X).\]

Ten fair-coin flips are the canonical case — each flip independent, each with the same
\(P(H) = 0.5\).

## The two halves[#](#the-two-halves "Link to this heading")

****Independence**** fails when one sample carries information about another. ****Identical
distribution**** fails when the underlying distribution shifts across the sample. Both can
break separately: data can be dependent but identically distributed, or independent but
drifting.

## When it holds and when it doesn’t[#](#when-it-holds-and-when-it-doesn-t "Link to this heading")

The clean case is ****random sampling**** from a fixed population (survey respondents drawn at
random). It breaks in ****time series**** (today’s stock price depends on yesterday’s — not
independent), under a ****changing population**** (early vs late customers differ — not
identical), and with ****grouped data**** (several records from the same patient are correlated).

## Why it matters[#](#why-it-matters "Link to this heading")

IID is what makes the math tractable — the ****law of large numbers**** and the ****central limit
theorem**** lean on it, and linear/logistic regression, hypothesis tests and freshly
initialised neural nets all assume it. Violating it yields ****biased estimates and
overconfident predictions****. In ML the training set is usually assumed IID but often isn’t
(autocorrelation, drift, leakage), which is why ****time-series CV, grouped CV and domain
adaptation**** exist to cope.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Temporal autocorrelation (Serial Correlation)](127-temporal-autocorrelation-serial-correlation.html) · [Time Series](010-time-series.html) · [Probability](025-probability.html) · [Signal Processing](009-signal-processing.html) · [Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html) · [Probability](025-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [IID (Independent and Identically Distributed)](https://insightful-data-lab.com/2025/08/24/iid-independent-and-identically-distributed/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)