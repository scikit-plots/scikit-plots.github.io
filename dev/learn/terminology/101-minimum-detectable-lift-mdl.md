🧮  ****Minimum Detectable Lift (MDL)****

# Minimum Detectable Lift (MDL)[#](#minimum-detectable-lift-mdl "Link to this heading")

**The smallest effect an experiment is powered to detect reliably.**

## What it is[#](#what-it-is "Link to this heading")

The ****minimum detectable lift (MDL)**** is the ****smallest relative change in a metric**** —
conversion, revenue, clicks — that an experiment can ****reliably detect****, given its sample
size \(n\), significance level \(\alpha\) and power \(1 - \beta\). It is, in
effect, the smallest effect you have decided is worth catching.

## Why it matters[#](#why-it-matters "Link to this heading")

It stops teams ****over-optimising for trivial effects**** and forces the design question up
front: **what improvement is big enough to justify the test?** Crucially, the relationship
is inverse — ****the smaller the MDL you want to detect, the larger the sample you need****.

## The formula[#](#the-formula "Link to this heading")

For conversion rates,

\[\text{MDL} = \frac{p\_{\text{treatment}} - p\_{\text{control}}}{p\_{\text{control}}}.\]

With a 5% baseline, \(\alpha = 0.05\), power 0.80 and 20,000 per variant, the design
can detect a ****10% relative lift**** (5% → 5.5%) — so the MDL is +10%. A true lift of only
+2% would likely slip past undetected.

## MDL vs MDE[#](#mdl-vs-mde "Link to this heading")

The two are easy to confuse. The ****minimum detectable effect (MDE)**** is the smallest
****absolute**** change (e.g. +0.5 percentage points); the ****MDL**** is the smallest
****relative**** change (a percentage lift). For control 5% → treatment 5.5%, the MDE is +0.5
points while the MDL is +10%.

## Striking the balance[#](#striking-the-balance "Link to this heading")

Set the MDL ****too high**** and you miss small-but-valuable wins; set it ****too low**** and the
test may need millions of users. The resolution is a negotiation: the ****business**** names
the smallest improvement worth acting on, and the ****statistician**** sizes the experiment to
detect at least that.

---

****Mind map — connected ideas****

> [A Priori Power Analysis](095-a-priori-power-analysis.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Statistical Power](348-statistical-power.html) · [Effect Size (δ)](106-effect-size.html) · [Two-Proportion Z-Test](098-two-proportion-z-test.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html)

---

****More in Statistical Inference & Power****

> [A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html) · [Significance Level (α)](105-significance-level.html)

---

**Theme:** Statistical Inference & Power  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Minimum Detectable Lift (MDL)](https://insightful-data-lab.com/2025/08/24/minimum-detectable-lift-mdl/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)