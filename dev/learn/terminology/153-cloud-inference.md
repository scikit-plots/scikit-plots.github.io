⚙️  ****Cloud Inference****

# Cloud Inference[#](#cloud-inference "Link to this heading")

**Running model predictions on managed cloud infrastructure.**

## What it is[#](#what-it-is "Link to this heading")

****Cloud inference**** is running a ****trained model on cloud infrastructure**** to make predictions
on new data. “Inference” means **using** a trained model rather than training one, and “cloud”
means it runs on AWS, GCP or Azure rather than on local or on-device hardware.

## How it works[#](#how-it-works "Link to this heading")

Three stages. ****Train**** a model (locally or in the cloud) and save its weights. ****Deploy**** it to
a cloud service (SageMaker, Vertex AI, Azure ML) behind an ****API endpoint**** (REST or gRPC).
Then ****infer****: the client sends input, the service loads the model, runs a forward pass and
returns the prediction.

## Benefits and challenges[#](#benefits-and-challenges "Link to this heading")

The upsides are ****scalability**** (autoscale to millions of requests), ****low maintenance**** (the
provider runs servers and GPUs), ****flexibility**** (serve and version many models), and
****accessibility**** (any device can call the API). The costs are ****latency**** (a network round
trip), ****OpEx**** per prediction at scale, ****privacy**** obligations when sensitive data leaves the
device, and the need for ****monitoring**** to keep uptime and fairness in check.

## Cloud vs edge[#](#cloud-vs-edge "Link to this heading")

The contrast is with ****edge / on-device**** inference. Cloud runs on powerful servers (GPUs,
TPUs) and is easy to update but pays a network-latency cost; edge runs locally on a phone or
IoT device with ****low latency**** but limited compute and harder remote updates. Image-tagging
APIs, LLM chat services and fraud-scoring endpoints are all cloud inference.

---

**Theme:** [MLOps, Serving & Monitoring](index.html#term-theme-mlops)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [AWS SageMaker Endpoints](151-aws-sagemaker-endpoints.html) · [OpenAI API (ML API)](150-openai-api-ml-api.html) · [AWS SageMaker](148-aws-sagemaker.html) · [Vertex AI](149-vertex-ai.html) · [Quantization](343-quantization.html)

---

> **Hint**
> ****More in MLOps, Serving & Monitoring****

[AWS SageMaker Endpoints](151-aws-sagemaker-endpoints.html) · [Caching](342-caching.html) · [Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [Compute budgets](383-compute-budgets.html) · [Continuous Retraining](161-continuous-retraining.html) · [Feature Values](188-feature-values.html) · [Guardrails (in ML & Data Systems)](166-guardrails-in-ml-data-systems.html) · [Inference Cost (Inference $)](385-inference-cost-inference.html) · [Latency Guardrails](350-latency-guardrails.html) · [Manual review minutes](384-manual-review-minutes.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Model Stability](187-model-stability.html) · [Monitoring Pipelines](162-monitoring-pipelines.html) · [Ops Health Dashboard](206-ops-health-dashboard.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Cloud Inference](https://insightful-data-lab.com/2025/08/24/cloud-inference/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)