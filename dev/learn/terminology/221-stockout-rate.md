📦  ****Stockout Rate****

# Stockout Rate[#](#stockout-rate "Link to this heading")

**The frequency with which an item is out of stock.**

## What it is[#](#what-it-is "Link to this heading")

****Stockout Rate**** is a supply-chain and inventory metric measuring ****how often items are out of stock
when there is demand**** — the percentage of demand that could not be filled because the product was
unavailable. It is a direct reading of ****service-level**** performance: a low rate means shelves stay
stocked, a high rate means customers keep hitting empty ones.

## The formula[#](#the-formula "Link to this heading")

It is computed by demand or by orders,

\[\text{Stockout Rate} = \frac{\text{Unfulfilled Units}}{\text{Total Demand}} \times 100\%,\]

or, order-based, the share of orders that hit at least one stockout.

## A worked example[#](#a-worked-example "Link to this heading")

A month’s demand is 1,000 units; inventory covers 950 and 50 go unfilled. The stockout rate is
50 / 1,000 = ****5%**** — one order in twenty meets an empty shelf.

## Why it matters, and reducing it[#](#why-it-matters-and-reducing-it "Link to this heading")

Frequent stockouts ****push customers to competitors****, forfeit sales, and flag weak forecasting, so the
metric captures the tension between ****service level**** and ****holding cost****. It falls with better
****demand forecasting**** (ARIMA, Prophet, LSTM), adequate ****safety stock****, shorter vendor ****lead
times****, ****multi-location**** inventory and ****real-time tracking****. It is the exact ****complement of the
fill rate****.

---

**Theme:** [Operations & Supply Chain](index.html#term-theme-ops)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Fill Rate](220-fill-rate.html) · [Backorder Rate](218-backorder-rate.html) · [Lost Sales Value](219-lost-sales-value.html) · [Safety Stock](217-safety-stock.html) · [Ops Health Dashboard](206-ops-health-dashboard.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html)

---

> **Hint**
> ****More in Operations & Supply Chain****

[Backorder Rate](218-backorder-rate.html) · [Crew Overtime](398-crew-overtime.html) · [Demand Forecasting](215-demand-forecasting.html) · [Fill Rate](220-fill-rate.html) · [Long Lead Times](210-long-lead-times.html) · [Long-Tail Items](260-long-tail-items.html) · [Lost Sales Value](219-lost-sales-value.html) · [Overstock %](400-overstock.html) · [Real-Time Inventory Tracking](213-real-time-inventory-tracking.html) · [Reorder Point (ROP) Optimization](216-reorder-point-rop-optimization.html) · [Safety Stock](217-safety-stock.html) · [SKU](212-sku.html) · [Slow-Moving SKUs](211-slow-moving-skus.html) · [Stockouts](401-stockouts.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Stockout Rate](https://insightful-data-lab.com/2025/08/23/stockout-rate/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)