💼  ****Customer Lifetime****

# Customer Lifetime[#](#customer-lifetime "Link to this heading")

**The expected duration of a customer’s active relationship with a business.**

## What it is[#](#what-it-is "Link to this heading")

****Customer lifetime**** is the average length of time a customer keeps buying from or
using a business before ****churning****. It is measured in time units (months, years)
and is a key **input** to lifetime value (LTV) — LTV is the revenue or profit earned
across that span.

## Formula[#](#formula "Link to this heading")

If you know the churn rate (the share of customers lost per period), the expected
lifetime is its reciprocal:

\[\text{Customer Lifetime} \approx \frac{1}{\text{Churn Rate}}.\]

This follows from modelling churn as a constant per-period probability: the expected
number of periods until a customer leaves is \(1/\text{churn}\).

## Worked example[#](#worked-example "Link to this heading")

At 5% monthly churn,

\[\text{Customer Lifetime} = \frac{1}{0.05} = 20 \text{ months}.\]

## How it’s used[#](#how-it-s-used "Link to this heading")

It plugs straight into LTV and unit economics:

\[\text{LTV} = \text{ARPU} \times \text{Gross Margin} \times \text{Customer Lifetime},\]

and the resulting LTV is compared against CAC, with ****LTV:CAC ≥ 3**** as the healthy
benchmark.

## Limitations[#](#limitations "Link to this heading")

* ****Constant-churn assumption**** — real churn is highest early and falls for loyal
  cohorts, so \(1/\text{churn}\) can mislead.
* ****Sensitivity**** — because lifetime is \(1/\text{churn}\), a small churn error
  swings it a lot (5% → 20 months, but 4% → 25 months).
* For retention-driven businesses, refine it with ****survival analysis**** or
  ****cohort analysis**** rather than the shortcut.

---

**Theme:** [Business & Growth Analytics](index.html#term-theme-growth)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Churn](123-churn.html) · [Retention](124-retention.html) · [Gross LTV (Customer Lifetime Value)](039-gross-ltv-customer-lifetime-value.html) · [LTV (Customer Lifetime Value)](373-ltv-customer-lifetime-value.html) · [Cohort-Based LTV (Simple Version)](041-cohort-based-ltv-simple-version.html)

---

> **Hint**
> ****More in Business & Growth Analytics****

[Blended CAC (Customer Acquisition Cost)](048-blended-cac-customer-acquisition-cost.html) · [CAC (Customer Acquisition Cost)](374-cac-customer-acquisition-cost.html) · [Cannibalization](392-cannibalization.html) · [Channel-Specific CAC (Customer Acquisition Cost)](047-channel-specific-cac-customer-acquisition-cost.html) · [Churn](123-churn.html) · [Cohort](183-cohort.html) · [Cohort-Based LTV (Simple Version)](041-cohort-based-ltv-simple-version.html) · [Conversion Rate (CR)](299-conversion-rate-cr.html) · [Cost-Per-Click (CPC) Models](300-cost-per-click-cpc-models.html) · [Cross-Selling](031-cross-selling.html) · [CTR (Click-Through Rate)](421-ctr-click-through-rate.html) · [Customer Segmentation](033-customer-segmentation.html) · [D2C (Direct-to-Consumer)](036-d2c-direct-to-consumer.html) · [FTEs](147-ftes.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Customer Lifetime](https://insightful-data-lab.com/2025/08/29/customer-lifetime/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)