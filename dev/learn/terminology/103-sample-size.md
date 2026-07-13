🧮  ****Sample size****

# Sample size[#](#sample-size "Link to this heading")

**The number of observations collected; larger samples shrink estimation error.**

## What it is[#](#what-it-is "Link to this heading")

****Sample size**** \(n\) is the ****number of observations**** used to estimate a parameter
or test a hypothesis. It is the master dial of inference, setting the ****precision**** of
estimates, the ****power**** of tests, and the ****stability**** of conclusions — in a word, the
**resolution** of what the data can tell you.

## The square-root law[#](#the-square-root-law "Link to this heading")

The central relationship is

\[\text{SE} \propto \frac{1}{\sqrt{n}}.\]

The square root has a sharp consequence: ****doubling**** \(n\) does **not** halve the
standard error — to ****halve**** it you must ****quadruple**** \(n\). Precision is bought at
an accelerating price.

## In estimation and testing[#](#in-estimation-and-testing "Link to this heading")

For ****estimation****, larger \(n\) means ****narrower confidence intervals****. For
****testing****, the statistic is roughly \(\text{effect}/\text{SE}\), so as the SE shrinks
the statistic grows — the same effect becomes ****easier to push past the critical value****,
and ****power rises****. Small effects only become detectable once \(n\) is large enough.

## The trade-off with effect size[#](#the-trade-off-with-effect-size "Link to this heading")

Sample size and effect size ****substitute**** for one another: a ****large**** effect shows up in
a ****small**** sample, while a ****small**** effect needs a ****large**** one. In short, **sample size
compensates for a weak signal** — which is exactly why it is chosen up front via ****power
analysis**** from \(\alpha\), target power, the expected effect and the variance.

## What n cannot do[#](#what-n-cannot-do "Link to this heading")

More data ****cannot fix bias, poor measurement or a wrong model****, and it can make
****trivial effects statistically significant**** — precision is not correctness or importance.
So interpretation, not just design, depends on \(n\): a non-significant result with
small \(n\) is **inconclusive**, and a significant one with enormous \(n\) should be
checked for ****practical relevance****. The emphasis shifts by context — precision in
estimation, power in testing, generalisation in ML, confounding in observational work — but
the concept is one.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Standard Error (SE)](084-standard-error-se.html) · [Statistical Power](348-statistical-power.html) · [A Priori Power Analysis](095-a-priori-power-analysis.html) · [Effect Size (δ)](106-effect-size.html) · [Power (1 – β)](104-power-1.html) · [Trivial Effects](102-trivial-effects.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Significance Level (α)](105-significance-level.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Sample size](https://insightful-data-lab.com/2025/08/24/sample-size-n/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)