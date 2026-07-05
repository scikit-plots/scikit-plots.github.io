⚙️  ****SLOs (Service Level Objectives)****

# SLOs (Service Level Objectives)[#](#slos-service-level-objectives "Link to this heading")

**Internal targets for reliability that a service aims to meet.**

## What it is[#](#what-it-is "Link to this heading")

A ****Service Level Objective (SLO)**** is a ****measurable target**** for how a service should perform —
usually a percentage or number. It is the ****goal**** for reliability, performance or availability that a
team commits to.

## The SLA, SLO, SLI hierarchy[#](#the-sla-slo-sli-hierarchy "Link to this heading")

The three fit together. The ****SLA**** is the external ****contract**** with customers; the ****SLO**** is the
internal ****target**** that supports it; and the ****SLI**** is the actual ****measurement**** used to check
performance. The SLO sits in the middle — stricter than the SLA, expressed in terms the SLI can
measure.

## Examples and error budgets[#](#examples-and-error-budgets "Link to this heading")

Typical SLOs cover ****availability**** (“99.9% uptime per month”, SLI = uptime %), ****latency**** (“95% of
requests under 300 ms”), ****error rate**** (“under 0.1% of requests return 5xx in 30 days”) and
****throughput**** (“at least 5,000 requests per second at peak”). An SLO of 99.9% implies an ****error
budget**** of 0.1% allowed downtime — the slack that decides when to prioritise reliability over new
features, and that stops teams from the costly, unrealistic chase for 100%.

## A worked example[#](#a-worked-example "Link to this heading")

Suppose an SLA requires ****99.5%**** uptime. The internal SLO is set at ****99.9%**** for margin, and the SLI
is measured uptime over the last 30 days. If uptime slips to ****99.6%****, the SLA is still safe but the
****SLO is breached**** — an early warning of reliability risk **before** any SLA penalty is triggered.

---

****Mind map — connected ideas****

> [SLI (Service Level Indicator)](190-sli-service-level-indicator.html) · [SLA (Service Level Agreement)](208-sla-service-level-agreement.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Monitoring Pipelines](162-monitoring-pipelines.html) · [Guardrails (in ML & Data Systems)](166-guardrails-in-ml-data-systems.html) · [Model Stability](187-model-stability.html)

---

****More in MLOps, Serving & Monitoring****

> [AWS SageMaker Endpoints](151-aws-sagemaker-endpoints.html) · [Caching](342-caching.html) · [Cloud Inference](153-cloud-inference.html) · [Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [Compute budgets](383-compute-budgets.html) · [Continuous Retraining](161-continuous-retraining.html) · [Feature Values](188-feature-values.html) · [Guardrails (in ML & Data Systems)](166-guardrails-in-ml-data-systems.html) · [Inference Cost (Inference $)](385-inference-cost-inference.html) · [Latency Guardrails](350-latency-guardrails.html) · [Manual review minutes](384-manual-review-minutes.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Model Stability](187-model-stability.html) · [Monitoring Pipelines](162-monitoring-pipelines.html)

---

**Theme:** MLOps, Serving & Monitoring  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [SLOs (Service Level Objectives)](https://insightful-data-lab.com/2025/08/19/slos-service-level-objectives/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)