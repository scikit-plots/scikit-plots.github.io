🧮  ****Significance Level (α)****

# Significance Level (α)[#](#significance-level "Link to this heading")

**The tolerated false-positive probability, fixed before testing.**

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

The ****significance level**** \(\alpha\) is the ****threshold probability**** for rejecting
the null hypothesis \(H\_0\) — the ****maximum risk of a Type I error**** (rejecting a true
\(H\_0\)) you are willing to accept. Common choices are \(\alpha = 0.05\) (the
default), \(0.01\) (stricter, stronger evidence demanded) and \(0.10\) (more
lenient).

## The decision rule[#](#the-decision-rule "Link to this heading")

Compute a test statistic and its ****p-value****, then compare: if \(p \le \alpha\),
****reject**** \(H\_0\); if \(p > \alpha\), ****fail to reject****. So \(\alpha\) is
simply the ****decision cutoff**** fixed in advance.

## What α is[#](#what-is "Link to this heading")

It is the ****long-run false-positive rate****: at \(\alpha = 0.05\), about 5 in 100 tests
of a **true** null will wrongly reject it. Choose it by stakes — ****0.01**** in medicine,
genetics and other high-stakes settings; ****0.05**** as a general balance; ****0.10**** in
exploratory work where missing a real effect costs more than a false alarm.

## Tied to the confidence level[#](#tied-to-the-confidence-level "Link to this heading")

Significance and confidence are complements: the ****confidence level is**** \(1 - \alpha\).
An \(\alpha = 0.05\) test corresponds to ****95% confidence**** — across repeated
experiments, 95% of the resulting intervals would contain the true parameter.

## What it is not[#](#what-it-is-not "Link to this heading")

Three cautions: \(\alpha\) is ****not**** the probability that \(H\_0\) is true; it is
chosen ****before**** the data, not tuned after; and clearing it means ****statistically****
significant, not ****practically**** important — for that you still need an effect size.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Type I Error](080-type-i-error.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Statistical Significance](096-statistical-significance.html) · [Power (1 – β)](104-power-1.html) · [Critical Value](087-critical-value.html) · [Effect Size (δ)](106-effect-size.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Significance Level (α)](https://insightful-data-lab.com/2025/08/24/significance-level-%ce%b1/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)