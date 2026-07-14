⚙️  ****SLI (Service Level Indicator)****

# SLI (Service Level Indicator)[#](#sli-service-level-indicator "Link to this heading")

**A measured signal such as latency or error rate used to track service health.**

## What it is[#](#what-it-is "Link to this heading")

A ****Service Level Indicator (SLI)**** is a ****specific, measurable metric**** that reflects a service’s
actual performance against what was agreed or expected — the ****“thermometer”**** of how well a service
is running. It is the ****raw measurement**** used to judge whether a service is meeting its objective.

## SLI vs SLO vs SLA[#](#sli-vs-slo-vs-sla "Link to this heading")

Three layers stack up. The ****SLI**** is the metric measured — “percentage of requests completed within
300 ms”. The ****SLO**** is the target for that metric — “99% of requests must complete within 300 ms”.
The ****SLA**** is the formal contract, often with penalties — “if availability drops below 99%, the
provider credits the customer”. SLI is the most granular layer; SLO and SLA build on it.

## Common SLIs[#](#common-slis "Link to this heading")

They fall into families: ****reliability**** (uptime %, mean time between failures), ****performance****
(latency, throughput in requests per second), and ****quality**** (error rate, data accuracy). The same
idea appears in operations as ****on-time delivery %****, ****fill rate****, or ****stockout frequency****.

## An example, and why it matters[#](#an-example-and-why-it-matters "Link to this heading")

An e-commerce site might measure that ****95%**** of checkout requests finish in under two seconds (the
SLI) against an SLO target of ****99%****, under an SLA that compensates customers if uptime falls below
****98%****. SLIs matter because they give ****objective evidence**** of performance, guide ****where to
improve****, and form the measurable ****foundation**** of every SLO and SLA.

---

**Theme:** [MLOps, Serving & Monitoring](index.html#term-theme-mlops)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[SLOs (Service Level Objectives)](391-slos-service-level-objectives.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Monitoring Pipelines](162-monitoring-pipelines.html) · [Guardrails (in ML & Data Systems)](166-guardrails-in-ml-data-systems.html) · [Model Stability](187-model-stability.html) · [ROI (Return on Investment)](191-roi-return-on-investment.html)

---

> **Hint**
> ****More in MLOps, Serving & Monitoring****

[AWS SageMaker Endpoints](151-aws-sagemaker-endpoints.html) · [Caching](342-caching.html) · [Cloud Inference](153-cloud-inference.html) · [Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [Compute budgets](383-compute-budgets.html) · [Continuous Retraining](161-continuous-retraining.html) · [Feature Values](188-feature-values.html) · [Guardrails (in ML & Data Systems)](166-guardrails-in-ml-data-systems.html) · [Inference Cost (Inference $)](385-inference-cost-inference.html) · [Latency Guardrails](350-latency-guardrails.html) · [Manual review minutes](384-manual-review-minutes.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Model Stability](187-model-stability.html) · [Monitoring Pipelines](162-monitoring-pipelines.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [SLI (Service Level Indicator)](https://insightful-data-lab.com/2025/08/23/sli-service-level-indicator/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)