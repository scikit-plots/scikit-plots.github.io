🧮  ****Type I Error****

# Type I Error[#](#type-i-error "Link to this heading")

**Rejecting a true null hypothesis — a false positive, controlled at level alpha.**

## What it is[#](#what-it-is "Link to this heading")

A ****Type I error**** is a ****false positive****: you ****reject the null hypothesis****
\(H\_0\) ****when it is actually true**** — concluding there is an effect or difference
when in reality there is none.

## Its probability is α[#](#its-probability-is "Link to this heading")

The probability of a Type I error is exactly the ****significance level**** \(\alpha\),
fixed **before** the test: \(\alpha = 0.05\) accepts a 5% chance of wrongly rejecting a
true \(H\_0\); \(\alpha = 0.01\) a 1% chance. Choosing \(\alpha\) **is** choosing
how often you are willing to cry wolf.

## Examples[#](#examples "Link to this heading")

* ****Medicine**** — \(H\_0\): the drug has no effect. If it truly doesn’t, but the data
  happen to give \(p < 0.05\), you reject \(H\_0\) and declare it works — a Type I
  error.
* ****A/B testing**** — \(H\_0\): conversion rates are equal. If they really are, but
  random variation produces a “significant” gap, you’ve made a Type I error.

Geometrically, with overlapping \(H\_0\) and \(H\_1\) distributions, \(\alpha\)
is the ****rejection region**** in the tail; a statistic landing there **while** \(H\_0\)
holds is the error.

## Type I vs Type II vs power[#](#type-i-vs-type-ii-vs-power "Link to this heading")

There are two ways to be wrong and one way the test “works”:

* ****Type I (false positive)**** — reject a true \(H\_0\); probability \(\alpha\).
* ****Type II (false negative)**** — fail to reject a false \(H\_0\); probability
  \(\beta\).
* ****Power**** — correctly reject a false \(H\_0\); equals \(1 - \beta\) (and grows
  with sample size, effect size and \(\alpha\)).

Lowering \(\alpha\) reduces Type I errors but, all else equal, raises \(\beta\) —
the two trade off.

## Controlling it[#](#controlling-it "Link to this heading")

Use a ****stricter**** \(\alpha\); apply ****Bonferroni**** or other multiple-testing
corrections when running many tests; stick to ****fixed-horizon**** testing (no peeking), or
an α-spending design if you must look early; and ****replicate**** to confirm.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Frequentist](059-frequentist.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Stopping Rules](071-stopping-rules.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [A/B Testing](380-a-b-testing.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Type I Error](https://insightful-data-lab.com/2025/08/25/type-i-error/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)