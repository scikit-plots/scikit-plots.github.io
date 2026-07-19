⚙️  ****AWS SageMaker Endpoints****

# AWS SageMaker Endpoints[#](#aws-sagemaker-endpoints "Link to this heading")

**Managed HTTPS endpoints that serve SageMaker model predictions.**

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

An ****AWS SageMaker endpoint**** is a ****fully managed API**** for serving a trained model: you
deploy the model and SageMaker handles ****infrastructure, scaling and serving**** so there are no
servers to run. Input goes in, the endpoint runs inference, predictions come out.

## The three types[#](#the-three-types "Link to this heading")

****Real-time**** endpoints are always-on HTTPS with low latency and autoscaling — for fraud
checks or chatbots. ****Asynchronous**** endpoints handle ****large payloads or long jobs****: upload
to S3, the endpoint processes, results land back in S3 — good for video or big documents.
****Batch transform**** runs ****offline**** over a whole S3 dataset with no live endpoint — ideal for
scheduled jobs like scoring every customer monthly.

## Deploying one[#](#deploying-one "Link to this heading")

The path is: train or ****import**** a model (any framework, or ONNX) and save artifacts to S3;
****register**** it as a Model with its inference script; create an ****endpoint configuration****
(instance type, scaling); deploy; then ****invoke**** via the SDK or REST:

```
import boto3
sm = boto3.client("sagemaker-runtime")
response = sm.invoke_endpoint(
    EndpointName="my-endpoint",
    ContentType="application/json",
    Body='{"data":[1.0, 2.0, 3.0]}',
)

```

## Why use them[#](#why-use-them "Link to this heading")

They are ****fully managed**** (no EC2 to babysit), ****autoscaling**** for traffic spikes,
****framework-flexible**** (custom Docker too), ****secure**** (IAM, VPC, encryption), and ****cost
controllable**** — pay for instance time, or shift to async/batch to save when latency is not
critical.

---

**Theme:** [MLOps, Serving & Monitoring](index.html#term-theme-mlops)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[AWS SageMaker](148-aws-sagemaker.html) · [Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [OpenAI API (ML API)](150-openai-api-ml-api.html) · [ONNX (Open Neural Network Exchange)](344-onnx-open-neural-network-exchange.html) · [Drift Detection](138-drift-detection.html) · [Vertex AI](149-vertex-ai.html)

---

> **Hint**
> ****More in MLOps, Serving & Monitoring****

[Caching](342-caching.html) · [Cloud Inference](153-cloud-inference.html) · [Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [Compute budgets](383-compute-budgets.html) · [Continuous Retraining](161-continuous-retraining.html) · [Feature Values](188-feature-values.html) · [Guardrails (in ML & Data Systems)](166-guardrails-in-ml-data-systems.html) · [Inference Cost (Inference $)](385-inference-cost-inference.html) · [Latency Guardrails](350-latency-guardrails.html) · [Manual review minutes](384-manual-review-minutes.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Model Stability](187-model-stability.html) · [Monitoring Pipelines](162-monitoring-pipelines.html) · [Ops Health Dashboard](206-ops-health-dashboard.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [AWS SageMaker Endpoints](https://insightful-data-lab.com/2025/08/24/aws-sagemaker-endpoints/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)