🔗  ****Treatment Cost****

# Treatment Cost[#](#treatment-cost "Link to this heading")

**The cost of applying an intervention to a unit in an experiment or campaign.**

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

In ****causal ML and uplift modeling****, ****treatment cost**** is the expense of applying an intervention
to one individual, customer or unit — the ****per-unit cost**** of sending a coupon, serving an ad,
granting a discount, or administering a drug. Summed over everyone treated, it becomes the ****total
cost of the campaign****.

## The formula[#](#the-formula "Link to this heading")

Per unit it is simply the direct cost of the intervention per customer; in total,

\[\text{Total Treatment Cost} = \text{Cost per unit} \times \text{Number of Treated Customers}.\]

## A worked example[#](#a-worked-example "Link to this heading")

A retailer sends a `$5` coupon to 2,000 customers, so the per-unit cost is `$5` and the total
treatment cost is 2,000 × 5 = `$10,000`. If that campaign produces `$15,000` in incremental
revenue, the ****net incremental profit**** is 15,000 − 10,000 = `$5,000`.

## Why it matters for uplift and ROI[#](#why-it-matters-for-uplift-and-roi "Link to this heading")

Treatment cost is what turns raw uplift into **profit**. Incremental revenue is the extra money earned;
treatment cost is what was spent to earn it; the difference is ****incremental profit****, and the ratio
is the ****ROI of treatment****. Tracking it prevents targeting customers where ****cost exceeds benefit****,
enables ****profit-based**** (not conversion-only) uplift modeling, and forces attention on ****net value****
rather than gross outcomes.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Incremental Revenue](193-incremental-revenue.html) · [ROI (Return on Investment)](191-roi-return-on-investment.html) · [Treatment Effect](072-treatment-effect.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Causal Inference](117-causal-inference.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Treatment Cost](https://insightful-data-lab.com/2025/08/23/treatment-cost/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)