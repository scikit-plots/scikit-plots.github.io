⚙️  ****Caching****

# Caching[#](#caching "Link to this heading")

**Storing computed results to serve repeated requests faster.**

## What it is[#](#what-it-is "Link to this heading")

****Caching**** stores the results of expensive computation and ****reuses**** them instead of recomputing —
trading ****memory**** for ****speed**** and ****cost****. If the same work would produce the same answer, a cache
returns it instantly.

## In model serving[#](#in-model-serving "Link to this heading")

The signature example is the ****KV cache**** in transformers, which keeps the ****key/value**** tensors of earlier
tokens so generating each new token doesn’t re-process the whole sequence. It grows ****linearly with sequence
length**** and can exceed the ****model weights**** in memory — which is why it is often ****quantized****. Beyond
that, ****prediction caching**** reuses answers to repeated requests and ****feature caching**** precomputes costly
features.

## The trade-offs[#](#the-trade-offs "Link to this heading")

A cache must handle ****staleness**** — cached values can go ****out of date**** when inputs or the model change — so
it needs ****invalidation**** and ****eviction**** policies, and it consumes ****memory**** that must be budgeted against
the speed it buys.

---

**Theme:** [MLOps, Serving & Monitoring](index.html#term-theme-mlops)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Quantization](343-quantization.html) · [TPU Clusters](347-tpu-clusters.html) · [Inference Cost (Inference $)](385-inference-cost-inference.html) · [Cloud Inference](153-cloud-inference.html) · [Latency Guardrails](350-latency-guardrails.html) · [Compute budgets](383-compute-budgets.html)

---

> **Hint**
> ****More in MLOps, Serving & Monitoring****

[AWS SageMaker Endpoints](151-aws-sagemaker-endpoints.html) · [Cloud Inference](153-cloud-inference.html) · [Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [Compute budgets](383-compute-budgets.html) · [Continuous Retraining](161-continuous-retraining.html) · [Feature Values](188-feature-values.html) · [Guardrails (in ML & Data Systems)](166-guardrails-in-ml-data-systems.html) · [Inference Cost (Inference $)](385-inference-cost-inference.html) · [Latency Guardrails](350-latency-guardrails.html) · [Manual review minutes](384-manual-review-minutes.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Model Stability](187-model-stability.html) · [Monitoring Pipelines](162-monitoring-pipelines.html) · [Ops Health Dashboard](206-ops-health-dashboard.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Caching](https://insightful-data-lab.com/2025/08/20/caching/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)