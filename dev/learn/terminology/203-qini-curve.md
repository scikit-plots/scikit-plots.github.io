🔗  ****Qini Curve****

# Qini Curve[#](#qini-curve "Link to this heading")

**An uplift-evaluation curve plotting incremental gain against the fraction targeted.**

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

The ****Qini curve**** is the ****visual evaluation tool**** for uplift models (causal or
incremental-response models). It shows the ****incremental benefit**** gained by targeting customers
****ranked by predicted uplift score**** — the uplift-modelling analogue of an ROC curve, measuring how
well the model finds ****persuadables****. The higher and more “bowed upward” it is, the better.

## How it’s built[#](#how-it-s-built "Link to this heading")

Rank customers by uplift score from highest to lowest, ****incrementally target**** the top **x\*%, and for
each portion compute the \*\*incremental response\*** — treatment responses minus control responses. The
****cumulative**** incremental response is what gets plotted.

## Axes and baselines[#](#axes-and-baselines "Link to this heading")

The ****X-axis**** is the proportion of the population targeted (0% to 100%); the ****Y-axis**** is the
cumulative incremental response. A ****random-targeting diagonal**** marks the uplift you would expect from
targeting at random, and the ****model curve**** ideally sits well above it.

## Reading it, with an example[#](#reading-it-with-an-example "Link to this heading")

Targeting the top 20% might show a treatment purchase rate of 18% against a control of 12% — a ****+6%****
incremental lift on those customers — and so on at 40%, 60%. A ****steep early rise**** means the model
concentrates persuadables at the top; a ****flat, near-diagonal**** line means it is no better than
random. The area between the model curve and the diagonal is the ****Qini coefficient****.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Uplift Score](204-uplift-score.html) · [Qini Coefficient](397-qini-coefficient.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Incremental Gain](200-incremental-gain.html) · [Treatment Effect](072-treatment-effect.html) · [Uplift Models](205-uplift-models.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Qini Curve](https://insightful-data-lab.com/2025/08/23/qini-curve/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)