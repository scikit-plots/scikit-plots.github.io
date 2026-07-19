📦  ****Safety Stock****

# Safety Stock[#](#safety-stock "Link to this heading")

**Extra inventory held to buffer against demand or supply variability.**

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

****Safety stock**** is the ****buffer inventory**** held to absorb ****uncertainty**** in demand and supply — the
cushion that keeps you selling when demand spikes or a shipment is late. It is the difference between a
naive “average” reorder level and a robust one.

## The formula[#](#the-formula "Link to this heading")

The statistical form sizes it from the ****service level**** and demand ****variability****:

\[\text{SS} = Z \times \sigma\_D \times \sqrt{L},\]

where \(Z\) is the service-level z-score (1.28 for 90%, 1.65 for 95%, 2.33 for 99%), \(\sigma\_D\)
is the standard deviation of demand per period, and \(L\) is the lead time.

## The trade-off[#](#the-trade-off "Link to this heading")

More safety stock ****raises**** the service level (fewer stockouts) but ****ties up capital**** in holding cost —
so the ****service level**** is chosen by weighing stockout cost against carrying cost, often set higher for
critical or perishable items (via ABC / XYZ classing).

---

**Theme:** [Operations & Supply Chain](index.html#term-theme-ops)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Reorder Point (ROP) Optimization](216-reorder-point-rop-optimization.html) · [Demand Forecasting](215-demand-forecasting.html) · [Fill Rate](220-fill-rate.html) · [Stockout Rate](221-stockout-rate.html) · [Backorder Rate](218-backorder-rate.html) · [Long Lead Times](210-long-lead-times.html)

---

> **Hint**
> ****More in Operations & Supply Chain****

[Backorder Rate](218-backorder-rate.html) · [Crew Overtime](398-crew-overtime.html) · [Demand Forecasting](215-demand-forecasting.html) · [Fill Rate](220-fill-rate.html) · [Long Lead Times](210-long-lead-times.html) · [Long-Tail Items](260-long-tail-items.html) · [Lost Sales Value](219-lost-sales-value.html) · [Overstock %](400-overstock.html) · [Real-Time Inventory Tracking](213-real-time-inventory-tracking.html) · [Reorder Point (ROP) Optimization](216-reorder-point-rop-optimization.html) · [SKU](212-sku.html) · [Slow-Moving SKUs](211-slow-moving-skus.html) · [Stockout Rate](221-stockout-rate.html) · [Stockouts](401-stockouts.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Safety Stock](https://insightful-data-lab.com/2025/08/23/safety-stock/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)