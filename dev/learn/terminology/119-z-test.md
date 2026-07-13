🧮  ****Z-Test****

# Z-Test[#](#z-test "Link to this heading")

**A hypothesis test using the normal distribution when variance is known or n is large.**

## What it is[#](#what-it-is "Link to this heading")

A ****z-test**** is a hypothesis test for whether a ****sample mean (or proportion) differs from a
known population value****, built on the ****standard normal**** distribution. It applies when the
****sample is large**** (\(n > 30\), so the CLT holds) and the ****population variance is
known**** — or well approximated by a large sample.

## The statistic[#](#the-statistic "Link to this heading")

For a one-sample mean,

\[z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}},\]

the gap between the sample mean \(\bar{X}\) and the hypothesised \(\mu\), measured in
****standard errors****. There are three common forms: ****one-sample**** (mean vs population),
****two-sample**** (two independent means), and the ****proportion**** z-test.

## The procedure[#](#the-procedure "Link to this heading")

State \(H\_0\) (no difference) and \(H\_1\); pick \(\alpha\); compute \(z\);
and compare to the ****critical value**** (\(\pm 1.96\) at \(\alpha = 0.05\), two-tailed)
or read off a p-value — reject when \(|z|\) exceeds it.

## Examples[#](#examples "Link to this heading")

With \(\mu = 100, \sigma = 15, n = 50\) and a sample mean of 105,
\(z = 5 / 2.12 \approx 2.36 > 1.96\), so reject \(H\_0\). For a proportion, 320 of 500
(0.64) against a hypothesised 0.60 gives \(z = 0.04 / 0.022 \approx 1.82 < 1.96\) —
****fail**** to reject.

## Z-test vs t-test[#](#z-test-vs-t-test "Link to this heading")

The choice turns on what you know about the variance. Use a ****z-test**** when \(\sigma\) is
****known**** and the sample is ****large****, working from the normal distribution; use a
****t-test**** when \(\sigma\) is ****unknown**** and estimated from the sample \(s\),
working from the heavier-tailed ****Student’s t**** — the gap between them vanishes as \(n\)
grows.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Z-Score](097-z-score.html) · [Two-Proportion Z-Test](098-two-proportion-z-test.html) · [Critical Value](087-critical-value.html) · [Standard Error (SE)](084-standard-error-se.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [T-Test](120-t-test.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Z-Test](https://insightful-data-lab.com/2025/08/24/z-test/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)