🧮  ****Kolmogorov–Smirnov (KS) Test****

# Kolmogorov–Smirnov (KS) Test[#](#kolmogorovsmirnov-ks-test "Link to this heading")

**A test comparing distributions via their largest cumulative gap.**

## What it is[#](#what-it-is "Link to this heading")

The ****KS test**** is a ****non-parametric**** test of whether two samples come from the ****same distribution****
(two-sample), or whether a sample matches a ****reference**** distribution (goodness-of-fit). It compares their
****cumulative distribution functions (CDFs)****.

## The statistic[#](#the-statistic "Link to this heading")

Its ****D-statistic**** is the ****largest vertical gap**** between the two CDFs:

\[D = \sup\_{x} \,\big|F\_1(x) - F\_2(x)\big|.\]

A bigger D means the distributions are further apart. Because it uses the CDF directly, it makes ****no
assumptions**** about the distribution’s shape — its great strength.

## Where it’s used[#](#where-it-s-used "Link to this heading")

With a null of “same distribution,” a small p-value flags a ****significant**** difference — making the KS test
a standard tool for ****drift detection**** on continuous features and for ****goodness-of-fit**** checks. It
underlies the ****KS statistic**** used as a drift metric.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [Data Drift](331-data-drift.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Statistical Tests](328-statistical-tests.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html) · [Significance Level (α)](105-significance-level.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Kolmogorov–Smirnov (KS) Test](https://insightful-data-lab.com/2025/08/20/kolmogorov-smirnov-ks-test/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)