💼  ****Cohort-Based LTV (Simple Version)****

# Cohort-Based LTV (Simple Version)[#](#cohort-based-ltv-simple-version "Link to this heading")

**Lifetime value estimated by tracking the revenue of customer cohorts over time.**

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

****Cohort-based LTV**** estimates lifetime value from **observed** behaviour rather than a
churn assumption. Customers are grouped into ****cohorts**** by when they joined (the
January 2025 cohort, the February 2025 cohort, and so on), and you track how much
revenue each cohort generates month by month, then sum it — so the retention curve is
**measured**, not assumed.

## The method[#](#the-method "Link to this heading")

1. ****Define cohorts**** — e.g. everyone acquired in January 2025.
2. ****Track average revenue per customer**** for each month after signup (month 0,
   month 1, and so on).
3. ****Accumulate**** that revenue until the cohort stabilises or churns out.
4. ****Estimate the tail**** — if the curve has flattened, take the total; if not, fit a
   simple decay (exponential or linear) to project the remaining months.

## Formula[#](#formula "Link to this heading")

Summing average per-customer revenue across months, optionally discounted to present
value:

\[\text{LTV} = \sum\_{t=0}^{T} \frac{\text{Avg Revenue per Customer in month } t}{(1 + r)^t},\]

where \(T\) is the months tracked and \(r\) is an optional discount rate
(often dropped in a simple calculation).

## Worked example[#](#worked-example "Link to this heading")

A 100-customer January cohort with average per-customer revenue of $100, 40, 38, 35,
32, 30 over months 0–5 gives

\[\text{LTV (6 months)} = 100 + 40 + 38 + 35 + 32 + 30 = 275 \text{ per customer},\]

with later months projected via a decay assumption if revenue is still falling.

## Why it beats the churn shortcut[#](#why-it-beats-the-churn-shortcut "Link to this heading")

Because it uses ****real observed retention and spend****, cohort LTV captures the early
drop-off and long-tail loyalty that a flat \(1/\text{churn}\) misses, and it
exposes differences by acquisition month, channel or segment — making it easy to see
whether ****retention is improving or worsening**** over time.

---

**Theme:** [Business & Growth Analytics](index.html#term-theme-growth)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Cohort](183-cohort.html) · [Predictive LTV (pLTV)](040-predictive-ltv-pltv.html) · [Customer Lifetime](042-customer-lifetime.html) · [Gross LTV (Customer Lifetime Value)](039-gross-ltv-customer-lifetime-value.html) · [Retention](124-retention.html)

---

> **Hint**
> ****More in Business & Growth Analytics****

[Blended CAC (Customer Acquisition Cost)](048-blended-cac-customer-acquisition-cost.html) · [CAC (Customer Acquisition Cost)](374-cac-customer-acquisition-cost.html) · [Cannibalization](392-cannibalization.html) · [Channel-Specific CAC (Customer Acquisition Cost)](047-channel-specific-cac-customer-acquisition-cost.html) · [Churn](123-churn.html) · [Cohort](183-cohort.html) · [Conversion Rate (CR)](299-conversion-rate-cr.html) · [Cost-Per-Click (CPC) Models](300-cost-per-click-cpc-models.html) · [Cross-Selling](031-cross-selling.html) · [CTR (Click-Through Rate)](421-ctr-click-through-rate.html) · [Customer Lifetime](042-customer-lifetime.html) · [Customer Segmentation](033-customer-segmentation.html) · [D2C (Direct-to-Consumer)](036-d2c-direct-to-consumer.html) · [FTEs](147-ftes.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Cohort-Based LTV (Simple Version)](https://insightful-data-lab.com/2025/08/29/cohort-based-ltv-simple-version/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)