📦  ****Reorder Point (ROP) Optimization****

# Reorder Point (ROP) Optimization[#](#reorder-point-rop-optimization "Link to this heading")

**Setting the stock level at which to reorder to avoid stockouts.**

## What it is[#](#what-it-is "Link to this heading")

The ****reorder point**** is the inventory level that ****triggers a new order**** — set so stock arrives just
before you run out. Under a ****continuous-review**** policy, when on-hand inventory falls to the ROP, a
replenishment order is placed.

## The formula[#](#the-formula "Link to this heading")

\[\text{ROP} = \underbrace{\mu\_D \times L}\_{\text{demand during lead time}} \;+\; \underbrace{\text{SS}}\_{\text{safety stock}},\]

where \(\mu\_D\) is average demand per period and \(L\) is the lead time. The first term covers
****expected**** usage while the order is in transit; the second buffers ****variability****.

## Optimizing it[#](#optimizing-it "Link to this heading")

A good ROP balances ****stockout risk**** against ****holding cost****. It is tuned with ****accurate demand
forecasts****, measured ****demand and lead-time variability****, and a chosen ****service level****; modern systems
recompute it in ****real time**** as those inputs drift. Drop the safety-stock term only when demand is very
stable and suppliers are reliable.

---

****Mind map — connected ideas****

> [Safety Stock](217-safety-stock.html) · [Demand Forecasting](215-demand-forecasting.html) · [Long Lead Times](210-long-lead-times.html) · [Fill Rate](220-fill-rate.html) · [Stockout Rate](221-stockout-rate.html) · [Supplier Management](214-supplier-management.html)

---

****More in Operations & Supply Chain****

> [Backorder Rate](218-backorder-rate.html) · [Crew Overtime](398-crew-overtime.html) · [Demand Forecasting](215-demand-forecasting.html) · [Fill Rate](220-fill-rate.html) · [Long Lead Times](210-long-lead-times.html) · [Long-Tail Items](260-long-tail-items.html) · [Lost Sales Value](219-lost-sales-value.html) · [Overstock %](400-overstock.html) · [Real-Time Inventory Tracking](213-real-time-inventory-tracking.html) · [Safety Stock](217-safety-stock.html) · [SKU](212-sku.html) · [Slow-Moving SKUs](211-slow-moving-skus.html) · [Stockout Rate](221-stockout-rate.html) · [Stockouts](401-stockouts.html)

---

**Theme:** Operations & Supply Chain  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Reorder Point (ROP) Optimization](https://insightful-data-lab.com/2025/08/23/reorder-point-rop-optimization/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)