🔗  ****Uplift****

# Uplift[#](#uplift "Link to this heading")

**The incremental effect of an action on an individual’s outcome.**

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

****Uplift**** measures the ****incremental impact**** of an action, treatment or intervention compared to
****not taking it****. In machine learning, ****uplift modelling**** — also called **incremental response** or
**true lift** modelling — predicts the ****change in outcome probability**** caused by applying a treatment
(say, sending a marketing offer). It is about ****causal effect****, not mere correlation.

## The formula[#](#the-formula "Link to this heading")

\[\text{Uplift}(x) = P(Y = 1 \mid T = 1, X = x) - P(Y = 1 \mid T = 0, X = x),\]

where \(Y\) is the outcome (purchase, churn, click), \(T\) is the treatment (1 = received,
0 = not), and \(X\) are the individual’s features.

## A worked example[#](#a-worked-example "Link to this heading")

For a promotional email, compare each customer’s treated and untreated purchase probability.
****Customer A****: 30% with the email versus 25% without — an uplift of ****+5%****, worth targeting.
****Customer B****: 60% versus 60% — ****0%****, the email is irrelevant. ****Customer C****: 20% versus 30% — a
****-10%**** uplift, meaning the email actively **reduces** the chance (a spam-sensitive recipient).

## Why it matters[#](#why-it-matters "Link to this heading")

Uplift buys ****targeting efficiency**** — spending only on customers who change behaviour **because of**
the treatment — and ****cost savings****, by skipping “sure things” who would act anyway and “sleeping
dogs” who react badly. Used across ****marketing, healthcare, finance and policy****, it is measured with
the ****uplift (Qini) curve****, its area ****AUUC****, and the ****Qini coefficient****.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Uplift Models](205-uplift-models.html) · [Uplift Score](204-uplift-score.html) · [Treatment Effect](072-treatment-effect.html) · [Causal Inference](117-causal-inference.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Qini Coefficient](397-qini-coefficient.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Uplift](https://insightful-data-lab.com/2025/08/17/uplift/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)