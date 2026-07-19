🔗  ****Incremental Conversions****

# Incremental Conversions[#](#incremental-conversions "Link to this heading")

**Extra conversions caused by a treatment beyond the baseline.**

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

****Incremental conversions**** measure the ****additional number of conversions caused by a treatment**** —
a campaign, promotion or intervention — compared with what would have happened without it (the
control). They are the extra conversions ****directly attributable**** to the treatment, not the raw
total.

## The formula[#](#the-formula "Link to this heading")

The basic form is treatment conversions minus control conversions. To scale the effect to a full
population, use the rate-based version,

\[\text{Incremental Conversions} = \left( \frac{y^T}{n^T} - \frac{y^C}{n^C} \right) \times N,\]

where \(y^T/n^T\) and \(y^C/n^C\) are the treatment and control conversion rates and
\(N\) is the total population you would target. This adjusts for the baseline rate and scales the
per-user uplift up to everyone.

## A worked example[#](#a-worked-example "Link to this heading")

Run a campaign on 10,000 users: the treatment group (5,000) converts at 12% (600), the control group
(5,000) at 8% (400). The rate difference is ****4%****, so across the full 10,000 the incremental
conversions are \(0.04 \times 10{,}000 = 400\) — the extra conversions the campaign genuinely
caused.

## Why it matters[#](#why-it-matters "Link to this heading")

****Total**** conversions mislead, because some users would have converted anyway. ****Incremental****
conversions isolate the ****causal effect**** of the treatment, which is why they are the foundation of
****uplift modelling**** and incrementality testing across marketing, ads and A/B testing.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Treatment Effect](072-treatment-effect.html) · [Causal Effect](306-causal-effect.html) · [Incremental Revenue](193-incremental-revenue.html) · [Uplift](424-uplift.html) · [Causal Inference](117-causal-inference.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html) · [Qini Curve](203-qini-curve.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Incremental Conversions](https://insightful-data-lab.com/2025/08/19/incremental-conversions/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)