🧮  ****Effect Size (δ)****

# Effect Size (δ)[#](#effect-size "Link to this heading")

**The magnitude of a difference or relationship, independent of sample size.**

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****Effect size**** \(\delta\) measures the ****magnitude**** of a difference or relationship
— **how big** an effect is, not merely **whether** it exists. Where a p-value answers the
yes/no question of detectability, effect size carries the ****practical importance****, and it
is the key input to ****power analysis****.

## Why it matters[#](#why-it-matters "Link to this heading")

Statistical and practical significance diverge: with a huge sample a 0.1% difference can be
“significant” yet trivial. Effect size restores the real-world magnitude, which is why it
anchors ****sample-size planning****, results reporting in medicine and psychology, and A/B
testing in business.

## The common forms[#](#the-common-forms "Link to this heading")

* ****Cohen’s d**** (standardised mean difference): \(d = (\bar{X}\_1 - \bar{X}\_2)/s\_p\)
  with pooled SD \(s\_p\); by rule of thumb ****0.2 small, 0.5 medium, 0.8 large****.
* ****Noncentrality**** \(\delta\) (power analysis):
  \(\delta = (\mu - \mu\_0)/(\sigma/\sqrt{n})\), essentially the ****expected
  t-statistic**** under \(H\_1\) — larger \(\delta\), higher power.
* ****Association****: Pearson \(r\), variance-explained \(R^2\), and ANOVA’s
  \(\eta^2\).
* ****Proportions**** (A/B): the raw gap \(\delta = p\_1 - p\_2\), or the standardised
  \(h = 2\arcsin\!\sqrt{p\_1} - 2\arcsin\!\sqrt{p\_2}\).

## Example[#](#example "Link to this heading")

A one-sample t-test with \(H\_0\) mean 100, sample mean 104, \(\sigma = 10\),
\(n = 25\) gives \(\delta = (104 - 100)/(10/\sqrt{25}) = 4/2 = 2.0\) — the mean is
****2 standard errors**** from \(H\_0\), a very large effect.

## Effect size vs p-value[#](#effect-size-vs-p-value "Link to this heading")

The crucial contrast: a ****p-value**** says whether an effect exists and ****depends on sample
size**** (large \(n\) makes tiny effects significant), while ****effect size**** says how big
it is and is ****independent of sample size****. Report them together — significance for
detectability, effect size for meaning.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Statistical Significance](096-statistical-significance.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Statistical Power](348-statistical-power.html) · [Sample size](103-sample-size.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [Hypothesis Testing](107-hypothesis-testing.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html) · [Significance Level (α)](105-significance-level.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Effect Size (δ)](https://insightful-data-lab.com/2025/08/24/effect-size-%ce%b4/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)