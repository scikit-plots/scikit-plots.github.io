🧮  ****Chi-square (χ²) Test****

# Chi-square (χ²) Test[#](#chi-square-2-test "Link to this heading")

**A test of association between categorical variables using expected counts.**

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

The ****chi-square test**** works on ****categorical**** data, comparing ****observed**** counts to the ****expected****
counts under a null hypothesis:

\[\chi^2 = \sum\_{i} \frac{(O\_i - E\_i)^2}{E\_i}.\]

A large \(\chi^2\) means observations stray far from expectation.

## Its two forms[#](#its-two-forms "Link to this heading")

****Goodness-of-fit**** asks whether one categorical variable follows a ****specified distribution**** (do dice
rolls look fair?); ****independence**** asks whether two categorical variables in a ****contingency table**** are
****associated**** (is purchase related to region?). The statistic is compared to the ****χ² distribution**** with
the appropriate ****degrees of freedom****.

## Reading it and its limits[#](#reading-it-and-its-limits "Link to this heading")

A small ****p-value**** rejects the null (a real fit failure or association); the strength of an association is
then summarized by ****Cramér’s V****. The test needs ****adequate expected counts**** per cell and has ****low
power**** on small samples — a non-significant result is weak evidence, not confirmation.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Statistical Tests](328-statistical-tests.html) · [Cramér’s V](180-cramer-s-v.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Power Analysis](378-power-analysis.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Data Drift](331-data-drift.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html) · [Significance Level (α)](105-significance-level.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Chi-square (χ²) Test](https://insightful-data-lab.com/2025/08/20/chi-square-%cf%87%c2%b2-test/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)