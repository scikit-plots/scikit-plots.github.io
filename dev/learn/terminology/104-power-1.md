🧮  ****Power (1 – β)****

# Power (1 – β)[#](#power-1 "Link to this heading")

**The probability a test correctly detects a real effect (rejects a false null).**

## What it is[#](#what-it-is "Link to this heading")

****Power**** is the probability of ****correctly rejecting**** the null hypothesis \(H\_0\)
when the alternative is true — of ****detecting a real effect****. Formally,

\[\text{Power} = 1 - \beta,\]

where \(\beta\) is the probability of a ****Type II error**** (missing a true effect). The
usual target is ****power**** \(\ge 0.80\): an 80% chance of catching an effect that is
really there.

## The error triad[#](#the-error-triad "Link to this heading")

Three quantities partition the possibilities when \(H\_0\) is actually false or true:
\(\alpha\) is the ****Type I**** error (a false positive — rejecting a true \(H\_0\)),
\(\beta\) the ****Type II**** error (a false negative), and \(1 - \beta\) the power (a
true positive).

## What raises power[#](#what-raises-power "Link to this heading")

Four levers. A larger ****effect size**** \(\delta\) is easier to detect; a larger
****sample size**** \(n\) shrinks the standard error and lifts power; a more lenient
****significance level**** \(\alpha\) (say 0.10 rather than 0.05) raises power but admits
more false positives; and ****lower variance**** \(\sigma^2\) sharpens detection.

## Example[#](#example "Link to this heading")

Testing whether a drug lowers blood pressure, with a medium effect (\(\delta = 0.5\)),
\(n = 30\) and \(\alpha = 0.05\), power might be only ****0.60**** — a 40% chance of
missing the effect. Raising \(n\) to ****100**** lifts power to about ****0.90****.

## Where it’s used[#](#where-it-s-used "Link to this heading")

Power is the target of ****a-priori power analysis****: fixing \(\alpha\), a desired power
(commonly 0.80) and an expected \(\delta\), one solves for the ****minimum sample size****
needed — so that a true effect is very likely to register rather than slip away as a false
negative.

---

****Mind map — connected ideas****

> [Type I Error](080-type-i-error.html) · [Statistical Power](348-statistical-power.html) · [A Priori Power Analysis](095-a-priori-power-analysis.html) · [Effect Size (δ)](106-effect-size.html) · [Sample size](103-sample-size.html) · [Statistical Significance](096-statistical-significance.html)

---

****More in Statistical Inference & Power****

> [A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html) · [Significance Level (α)](105-significance-level.html)

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Power (1 – β)](https://insightful-data-lab.com/2025/08/24/power-1-%ce%b2/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)