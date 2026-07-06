💼  ****Lagging Indicators****

# Lagging Indicators[#](#lagging-indicators "Link to this heading")

**Metrics that confirm trends after they occur, such as revenue or churn.**

## What it is[#](#what-it-is "Link to this heading")

A ****lagging indicator**** is a metric that ****confirms the impact of a change after it has already
happened****. Lagging indicators measure ****outcomes****, not early signals — in ML monitoring, they are
the ****model-performance metrics****: loss, AUC, accuracy, calibration.

## Characteristics[#](#characteristics "Link to this heading")

They are ****reactive****, surfacing a problem only once it has occurred. They are a ****direct measure****
of end results — model performance and business KPIs — which makes them the natural tools for
****validation and confirmation**** rather than early warning.

## Examples[#](#examples "Link to this heading")

Three groups. ****Performance metrics****: accuracy, precision/recall/F1, AUC, log loss, calibration
error. ****Business KPIs after the fact****: CTR falling, fraud losses rising, churn climbing. And in a
****monitoring**** context: an AUC drop that means drift **already** hurt predictions, or a loss spike
that follows a distribution change.

## Why they matter[#](#why-they-matter "Link to this heading")

Lagging indicators ****confirm whether the leading indicators actually mattered**** — whether drift or a
data-quality issue translated into real damage. They are what go/no-go ****retraining decisions**** rest
on. In a fraud model, a leading indicator might be drift in `transaction_type`; the ****lagging****
indicator is AUC sliding from 0.87 to 0.72 — proof the model is now underperforming.

---

****Mind map — connected ideas****

> [Leading Indicators](169-leading-indicators.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Monitoring Pipelines](162-monitoring-pipelines.html) · [Drift Detection](138-drift-detection.html) · [Concept Drift](330-concept-drift.html) · [Re-scoring](137-re-scoring.html)

---

****More in Business & Growth Analytics****

> [Blended CAC (Customer Acquisition Cost)](048-blended-cac-customer-acquisition-cost.html) · [CAC (Customer Acquisition Cost)](374-cac-customer-acquisition-cost.html) · [Cannibalization](392-cannibalization.html) · [Channel-Specific CAC (Customer Acquisition Cost)](047-channel-specific-cac-customer-acquisition-cost.html) · [Churn](123-churn.html) · [Cohort](183-cohort.html) · [Cohort-Based LTV (Simple Version)](041-cohort-based-ltv-simple-version.html) · [Conversion Rate (CR)](299-conversion-rate-cr.html) · [Cost-Per-Click (CPC) Models](300-cost-per-click-cpc-models.html) · [Cross-Selling](031-cross-selling.html) · [CTR (Click-Through Rate)](421-ctr-click-through-rate.html) · [Customer Lifetime](042-customer-lifetime.html) · [Customer Segmentation](033-customer-segmentation.html) · [D2C (Direct-to-Consumer)](036-d2c-direct-to-consumer.html)

---

**Theme:** [Business & Growth Analytics](index.html#term-theme-growth)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Lagging Indicators](https://insightful-data-lab.com/2025/08/23/lagging-indicators/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)