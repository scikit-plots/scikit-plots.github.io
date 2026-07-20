🔗  ****Incremental Gain****

# Incremental Gain[#](#incremental-gain "Link to this heading")

**The improvement in outcome from targeting versus a baseline.**

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

****Incremental gain**** is the ****extra positive outcome**** — conversions, sales, sign-ups — produced by
applying a treatment (a campaign, discount or intervention) ****versus not applying it****, measured for a
****specific slice of the population****. It is the ****building block**** of the cumulative incremental gain
and the Qini curve: the step-by-step value added as you target more people.

## The formula[#](#the-formula "Link to this heading")

For one segment,

\[\text{Incremental Gain} = \text{Responses}\_{\text{treatment}} - \text{Responses}\_{\text{control}},\]

or, in probability terms, \(\left(P(\text{Outcome} \mid \text{Treatment}) - P(\text{Outcome} \mid \text{Control})\right) \times n\), where \(n\) is the number of individuals targeted in that
segment and the control response is what the same group would have done untreated.

## A worked example[#](#a-worked-example "Link to this heading")

Rank 2,000 customers by uplift score and split into deciles of 200. In the ****top decile****, the
treatment group converts at 18% (36 purchases) against a control of 10% (20) — an incremental gain of
****16****. The ****second decile**** converts at 14% (28) versus 12% (24) — a gain of ****4****. Their running
total, the cumulative incremental gain after the top 20%, is ****20 extra purchases****.

## Where it fits[#](#where-it-fits "Link to this heading")

Incremental gain is the ****local**** effect in each segment; summing it as you move down the ranking
gives the ****cumulative incremental gain****, and plotting that against the fraction targeted traces the
****Qini curve****. Reading it segment by segment shows ****where uplift is strongest**** and where to stop
targeting — once the gain flattens or turns negative, additional targeting destroys value.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Total Incremental Benefit (TIB)](201-total-incremental-benefit-tib.html) · [Qini Curve](203-qini-curve.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Treatment Effect](072-treatment-effect.html) · [Incremental Revenue](193-incremental-revenue.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html) · [Qini Curve](203-qini-curve.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Incremental Gain](https://insightful-data-lab.com/2025/08/23/incremental-gain/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)