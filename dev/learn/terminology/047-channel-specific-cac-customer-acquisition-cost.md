💼  ****Channel-Specific CAC (Customer Acquisition Cost)****

# Channel-Specific CAC (Customer Acquisition Cost)[#](#channel-specific-cac-customer-acquisition-cost "Link to this heading")

**Acquisition cost computed separately for each marketing channel.**

## What it is[#](#what-it-is "Link to this heading")

****Channel-specific CAC**** is the cost to acquire a customer through a ****single
channel**** — Facebook Ads, Google Search, LinkedIn, SEO, events, each measured on its
own. Where blended CAC averages everything, this isolates the efficiency of each
channel.

## Formula[#](#formula "Link to this heading")

\[\text{CAC}\_{\text{channel}} = \frac{\text{Total Spend on Channel}}{\text{Customers from Channel}},\]

using channel-specific ad spend, agency fees, tools and creative in the numerator and
the customers directly attributable to that channel in the denominator.

## Worked example[#](#worked-example "Link to this heading")

In one month, three channels can look completely different:

* Google Ads — $30,000 / 200 customers = $150
* Facebook Ads — $20,000 / 250 customers = $80
* SEO — $10,000 / 500 customers = $20

Those gaps are ****invisible**** in a single blended number.

## Why it’s useful[#](#why-it-s-useful "Link to this heading")

It tells you ****which channels are most cost-effective****, so you can scale the cheap
ones and fix the expensive ones, and — paired with LTV — gives a per-channel
\(\text{LTV:CAC}\) to rank channels by true value, not just cost.

## Challenges[#](#challenges "Link to this heading")

* ****Attribution**** — a customer may touch ads, then email, then organic search before
  converting; deciding which channel gets credit is the central difficulty.
* ****Lag**** — SEO and content investment can take months to pay off, inflating
  short-term CAC.
* ****Hidden overhead**** — brand-building and shared salaries don’t map cleanly to one
  channel.

## The data-science angle[#](#the-data-science-angle "Link to this heading")

Getting channel CAC right is fundamentally an ****attribution**** problem: last-touch and
first-touch are crude, so teams use ****multi-touch attribution****, ****Shapley-value****
credit, or ****marketing-mix modelling (MMM)**** — a regression of conversions on
per-channel spend with adstock/lag terms — to assign credit across the journey.

## Blended vs channel-specific[#](#blended-vs-channel-specific "Link to this heading")

****Blended CAC**** is the snapshot for board reports and financial health;
****channel-specific CAC**** is the optimisation tool for deciding where the next dollar
goes.

---

****Mind map — connected ideas****

> [Blended CAC (Customer Acquisition Cost)](048-blended-cac-customer-acquisition-cost.html) · [Paid CAC (Customer Acquisition Cost)](046-paid-cac-customer-acquisition-cost.html) · [Fully Loaded CAC (Customer Acquisition Cost)](044-fully-loaded-cac-customer-acquisition-cost.html) · [CAC (Customer Acquisition Cost)](374-cac-customer-acquisition-cost.html) · [LTV:CAC Ratio](037-ltv-cac-ratio.html)

---

****More in Business & Growth Analytics****

> [Blended CAC (Customer Acquisition Cost)](048-blended-cac-customer-acquisition-cost.html) · [CAC (Customer Acquisition Cost)](374-cac-customer-acquisition-cost.html) · [Cannibalization](392-cannibalization.html) · [Churn](123-churn.html) · [Cohort](183-cohort.html) · [Cohort-Based LTV (Simple Version)](041-cohort-based-ltv-simple-version.html) · [Conversion Rate (CR)](299-conversion-rate-cr.html) · [Cost-Per-Click (CPC) Models](300-cost-per-click-cpc-models.html) · [Cross-Selling](031-cross-selling.html) · [CTR (Click-Through Rate)](421-ctr-click-through-rate.html) · [Customer Lifetime](042-customer-lifetime.html) · [Customer Segmentation](033-customer-segmentation.html) · [D2C (Direct-to-Consumer)](036-d2c-direct-to-consumer.html) · [FTEs](147-ftes.html)

---

**Theme:** [Business & Growth Analytics](index.html#term-theme-growth)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Channel-Specific CAC (Customer Acquisition Cost)](https://insightful-data-lab.com/2025/08/29/channel-specific-cac-customer-acquisition-cost/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)