🧮  ****Wilson Score Interval****

# Wilson Score Interval[#](#wilson-score-interval "Link to this heading")

**An accurate confidence interval for a proportion, robust for small samples.**

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

The ****Wilson score interval**** is a well-calibrated confidence interval for a ****binomial proportion****, derived
by improving the crude ****normal-approximation (Wald)**** interval. Introduced by E. B. Wilson in 1927, it is
****asymmetric**** and always stays ****within [0, 1]****.

## Why it’s better[#](#why-it-s-better "Link to this heading")

Unlike the ****Wald**** interval, it doesn’t ****overshoot**** past 0 or 1 and doesn’t collapse to ****zero width****
when the observed proportion is 0 or 1; and unlike ****Clopper–Pearson****, it isn’t overly ****conservative**** —
its coverage sits ****close to nominal****, so its intervals are ****narrower****. That balance makes it the
****recommended default**** in most applications.

## The caveats[#](#the-caveats "Link to this heading")

Its coverage can dip ****slightly below**** nominal for a few awkward proportions, and for ****extremely small****
samples the guaranteed ****Clopper–Pearson**** may still be safer. A continuity-corrected variant exists for
tighter coverage.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Normal Distribution](238-normal-distribution.html) · [Standard Error (SE)](084-standard-error-se.html) · [Z-Score](097-z-score.html) · [Statistical Tests](328-statistical-tests.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Wilson Score Interval](https://insightful-data-lab.com/2025/08/20/wilson-score-interval/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)