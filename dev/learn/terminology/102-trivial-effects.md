🧮  ****Trivial Effects****

# Trivial Effects[#](#trivial-effects "Link to this heading")

**Effects too small to matter in practice even if statistically detectable.**

## What it is[#](#what-it-is "Link to this heading")

A ****trivial effect**** is a result that is ****statistically significant****
(\(p < \alpha\)) yet ****so small in magnitude that it has little or no practical
importance****. The difference is **real** — not chance — but too tiny to matter.

## Why they appear[#](#why-they-appear "Link to this heading")

Two causes. First, ****large samples****: with enough data, even a minuscule difference clears
the significance bar — in an A/B test on millions of users, a 0.05% conversion bump can be
“significant” yet meaningless. Second, ****fixating on p-values****: a p-value says whether an
effect exists, not how big it is, so reading it without an ****effect size**** invites
over-interpretation.

## Examples[#](#examples "Link to this heading")

A drug that lowers blood pressure by ****0.5 mmHg**** versus standard care, tested on 10,000
patients, can show \(p < 0.001\) — significant, but clinically trivial. A landing page
that moves conversion from 10.00% to ****10.05%**** across 1,000,000 users gives
\(p < 0.01\), yet a 0.05% lift is not worth deploying.

## How to avoid the trap[#](#how-to-avoid-the-trap "Link to this heading")

Always report an ****effect size**** (Cohen’s d, a difference in proportions) next to the
p-value; read the ****confidence interval**** (a tight band hugging zero signals triviality);
judge ****practical relevance****; and fix a ****minimum detectable effect**** in advance — “we act
only if conversion improves by at least +1%.”

## The link to power and n[#](#the-link-to-power-and-n "Link to this heading")

Because larger samples raise power, they make even ****trivial**** effects detectable. The
discipline is to size a study to catch effects ****worth caring about****, not the smallest
detectable ones — significance is necessary for a finding to matter, but never sufficient.

---

****Mind map — connected ideas****

> [Statistical Significance](096-statistical-significance.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [Effect Size (δ)](106-effect-size.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Sample size](103-sample-size.html) · [Statistical Power](348-statistical-power.html)

---

****More in Statistical Inference & Power****

> [A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html)

---

**Theme:** Statistical Inference & Power  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Trivial Effects](https://insightful-data-lab.com/2025/08/24/trivial-effects/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)