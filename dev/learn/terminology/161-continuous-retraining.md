⚙️  ****Continuous Retraining****

# Continuous Retraining[#](#continuous-retraining "Link to this heading")

**Automatically retraining models on fresh data to counter drift.**

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

****Continuous retraining**** is the practice of ****regularly updating a model with new data**** to keep
it accurate in production — also called online retraining or model refresh. It exists because
real-world data ****changes over time****: distribution shift, new categories, seasonal patterns.

## Why it’s needed[#](#why-it-s-needed "Link to this heading")

Three pressures. ****Drift**** — feature distributions move (customer behaviour, fraud tactics) and
feature-target relationships evolve. ****Business change**** — new products, regulations or customer
segments. And ****operational resilience**** — keeping KPIs (AUC, calibration, accuracy) stable
rather than letting the model ****decay**** on stale data.

## How it works[#](#how-it-works "Link to this heading")

A monitoring pipeline watches for ****drift and KPI degradation****, then a ****trigger**** fires —
****scheduled**** (weekly/monthly refresh) or ****event-driven**** (drift past a threshold, KPI below
target). The retraining pipeline pulls ****new labelled data****, retrains or fine-tunes, ****validates
on a fresh holdout****, compares against the current model (A/B or shadow deployment), and
****deploys only if it improves****.

## Approaches and trade-offs[#](#approaches-and-trade-offs "Link to this heading")

****Batch**** retraining rebuilds from scratch periodically — simple but resource-heavy.
****Incremental / online**** learning updates weights as data streams in. ****Hybrid**** keeps a frozen
base and fine-tunes on recent data. The payoff is ****stability under drift**** with less manual work;
the costs are needing ****robust MLOps**** (validation, reproducibility), ****label availability**** (no
labels, no retraining), and guarding against ****catastrophic forgetting**** when old data is dropped.

---

**Theme:** [MLOps, Serving & Monitoring](index.html#term-theme-mlops)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Drift Detection](138-drift-detection.html) · [Monitoring Pipelines](162-monitoring-pipelines.html) · [Data Drift](331-data-drift.html) · [Concept Drift](330-concept-drift.html) · [Recalibration](159-recalibration.html) · [Reweighting](160-reweighting.html)

---

> **Hint**
> ****More in MLOps, Serving & Monitoring****

[AWS SageMaker Endpoints](151-aws-sagemaker-endpoints.html) · [Caching](342-caching.html) · [Cloud Inference](153-cloud-inference.html) · [Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [Compute budgets](383-compute-budgets.html) · [Feature Values](188-feature-values.html) · [Guardrails (in ML & Data Systems)](166-guardrails-in-ml-data-systems.html) · [Inference Cost (Inference $)](385-inference-cost-inference.html) · [Latency Guardrails](350-latency-guardrails.html) · [Manual review minutes](384-manual-review-minutes.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Model Stability](187-model-stability.html) · [Monitoring Pipelines](162-monitoring-pipelines.html) · [Ops Health Dashboard](206-ops-health-dashboard.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Continuous Retraining](https://insightful-data-lab.com/2025/08/23/continuous-retraining/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)