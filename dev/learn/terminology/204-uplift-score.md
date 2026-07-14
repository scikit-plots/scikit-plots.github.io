🔗  ****Uplift Score****

# Uplift Score[#](#uplift-score "Link to this heading")

**A model’s estimate of how much an action changes an individual’s outcome.**

## What it is[#](#what-it-is "Link to this heading")

An ****uplift score**** is the number an ****uplift model**** assigns to an individual, estimating the
****incremental impact**** — positive or negative — of a treatment (a campaign, discount or medical
intervention) on that person’s likelihood of acting. It answers: **how much more (or less) likely is
this person to act if we intervene than if we do not?**

## The formula[#](#the-formula "Link to this heading")

At the individual level,

\[\text{Uplift Score}\_i = P(\text{Outcome} \mid \text{Treatment}, i) - P(\text{Outcome} \mid \text{Control}, i).\]

A ****positive**** score means the treatment raises the chance of the desired outcome, a ****negative****
score means it backfires, and a score ****near zero**** means the treatment barely matters.

## A worked example[#](#a-worked-example "Link to this heading")

For a subscription campaign: ****Customer A**** has a treated probability of 0.40 versus 0.25 untreated —
an uplift of ****+0.15****, a strong target. ****Customer B**** sits at 0.70 versus 0.68 — just ****+0.02****,
barely worth the spend. ****Customer C**** is 0.10 versus 0.20 — an uplift of ****-0.10****, meaning the
campaign actively **hurts** (a “Do-Not-Disturb” case).

## How it’s used[#](#how-it-s-used "Link to this heading")

Uplift scores let you ****rank and target**** the highest-scoring customers — the **persuadables** — while
avoiding **sure things** and **lost causes**, and ****excluding negative-uplift**** customers who might churn
or unsubscribe if contacted. Aggregated across the population, the scores build the ****uplift and Qini
curves**** whose quality the ****Qini coefficient**** summarises.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Uplift Models](205-uplift-models.html) · [Qini Curve](203-qini-curve.html) · [Qini Coefficient](397-qini-coefficient.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Treatment Effect](072-treatment-effect.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Uplift Score](https://insightful-data-lab.com/2025/08/23/uplift-score/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)