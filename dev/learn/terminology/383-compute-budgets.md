⚙️  ****Compute budgets****

# Compute budgets[#](#compute-budgets "Link to this heading")

**Limits on the compute resources a workload may consume.**

## What it is[#](#what-it-is "Link to this heading")

A ****compute budget**** is the pool of ****computational resources**** — GPU / TPU hours, ****FLOPs****, and the dollars
behind them — allocated to an ML system’s ****training**** and ****serving****. It caps how big a model you can
train and how much traffic you can serve.

## The two halves[#](#the-two-halves "Link to this heading")

****Training**** is a ****one-time**** cost that grows with model and data size (its FLOPs approximated by the
****6ND**** rule — roughly 6 × parameters × tokens), while ****inference**** is an ****ongoing**** cost (about ****2N****
FLOPs per forward pass) that scales with usage:

\[C\_{\text{train}} \approx 6ND, \qquad C\_{\text{inf}} \approx 2N \ \text{FLOPs per pass}.\]

In production, inference usually claims the ****majority**** of the budget.

## Managing it[#](#managing-it "Link to this heading")

Teams set ****budgets and alerts****, model ****optimistic / expected / pessimistic**** scenarios, and track unit
economics like ****cost per prediction**** and ****GPU utilization****. Hidden drains — idle instances, failed runs,
oversized experiments — routinely add ****20–40%**** over the planned figure.

---

****Mind map — connected ideas****

> [Inference Cost (Inference $)](385-inference-cost-inference.html) · [TPU Clusters](347-tpu-clusters.html) · [Quantization](343-quantization.html) · [Caching](342-caching.html) · [Cloud Inference](153-cloud-inference.html) · [Latency Guardrails](350-latency-guardrails.html)

---

****More in MLOps, Serving & Monitoring****

> [AWS SageMaker Endpoints](151-aws-sagemaker-endpoints.html) · [Caching](342-caching.html) · [Cloud Inference](153-cloud-inference.html) · [Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [Continuous Retraining](161-continuous-retraining.html) · [Feature Values](188-feature-values.html) · [Guardrails (in ML & Data Systems)](166-guardrails-in-ml-data-systems.html) · [Inference Cost (Inference $)](385-inference-cost-inference.html) · [Latency Guardrails](350-latency-guardrails.html) · [Manual review minutes](384-manual-review-minutes.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Model Stability](187-model-stability.html) · [Monitoring Pipelines](162-monitoring-pipelines.html) · [Ops Health Dashboard](206-ops-health-dashboard.html)

---

**Theme:** MLOps, Serving & Monitoring  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Compute budgets](https://insightful-data-lab.com/2025/08/19/compute-budgets/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)