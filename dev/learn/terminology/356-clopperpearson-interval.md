🧮  ****Clopper–Pearson Interval****

# Clopper–Pearson Interval[#](#clopperpearson-interval "Link to this heading")

**An exact confidence interval for a binomial proportion.**

## What it is[#](#what-it-is "Link to this heading")

The ****Clopper–Pearson interval**** is the ****“exact”**** confidence interval for a ****binomial proportion**** — built
directly from the ****binomial distribution**** (via ****Beta-distribution**** quantiles) rather than a normal
approximation. It ****inverts**** the binomial CDF to find the proportions consistent with the data.

## Its guarantee[#](#its-guarantee "Link to this heading")

It ****never has less than**** the nominal coverage — a 95% Clopper–Pearson interval covers the true proportion
****at least**** 95% of the time for ****every**** p and n. That safety is its selling point when you ****must not****
under-cover.

## The cost[#](#the-cost "Link to this heading")

Guaranteeing coverage makes it ****conservative**** — the actual coverage is often ****~99%****, so the interval is
****wider than necessary**** and demands larger samples for a given precision. It is the ****widest**** of the common
methods, best reserved for ****very small samples**** or when guaranteed coverage is essential.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Wilson Score Interval](357-wilson-score-interval.html) · [Normal Distribution](238-normal-distribution.html) · [Statistical Tests](328-statistical-tests.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Standard Error (SE)](084-standard-error-se.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html) · [Significance Level (α)](105-significance-level.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Clopper–Pearson Interval](https://insightful-data-lab.com/2025/08/20/clopper-pearson-interval/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)