🧮  ****P-Value (probability value)****

# P-Value (probability value)[#](#p-value-probability-value "Link to this heading")

**The probability of data at least as extreme as observed, assuming the null is true.**

## What it is[#](#what-it-is "Link to this heading")

The ****p-value**** is the probability of observing data ****at least as extreme**** as what you
saw, ****assuming the null hypothesis**** \(H\_0\) ****is true****. It is a measure of ****evidence
against**** \(H\_0\): a ****low**** p-value means the data would be surprising under
\(H\_0\) (stronger evidence against it), a ****high**** one means the data sit comfortably
with \(H\_0\).

## Reading it[#](#reading-it "Link to this heading")

By convention \(p < 0.01\) is very strong evidence, \(p < 0.05\) is “significant”,
\(p < 0.10\) is weak, and \(p > 0.10\) is not significant. The decision rule pairs it
with a threshold: if \(p \le \alpha\), reject \(H\_0\); if \(p > \alpha\), fail to
reject.

## How it’s computed[#](#how-it-s-computed "Link to this heading")

Form the ****test statistic**** (z, t, \(\chi^2\)…) and find the tail probability of a value
that extreme under its distribution — one tail for a one-sided test, both for two-sided. For
a two-tailed t-test,

\[p = 2 \times P\!\left(T \ge |t\_{\text{observed}}|\right).\]

For example, 17 heads in 20 tosses gives a binomial p of about ****0.003**** against a fair coin
(reject); a two-sample test with \(t = 2.1, df = 28\) gives \(p \approx 0.045\)
(reject at 0.05).

## What it is not[#](#what-it-is-not "Link to this heading")

Three persistent misconceptions: the p-value is ****not**** the probability that \(H\_0\) is
true; it is ****not**** an effect size (a tiny p means **surprising**, not **large**); and it is
****sample-size sensitive**** — huge samples make trivial effects significant, tiny samples can
miss real ones. Always read it alongside an effect size and a confidence interval.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Statistical Significance](096-statistical-significance.html) · [Significance Level (α)](105-significance-level.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Type I Error](080-type-i-error.html) · [Effect Size (δ)](106-effect-size.html) · [Z-Test](119-z-test.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html) · [Significance Level (α)](105-significance-level.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [P-Value (probability value)](https://insightful-data-lab.com/2025/08/24/p-value-probability-value/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)