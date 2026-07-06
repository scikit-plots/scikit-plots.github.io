🧰  ****Vertex AI****

# Vertex AI[#](#vertex-ai "Link to this heading")

**Google Cloud’s managed platform for ML model development and deployment.**

## What it is[#](#what-it-is "Link to this heading")

****Vertex AI**** is ****Google Cloud’s managed ML platform**** for building, training, deploying and
monitoring models end-to-end, unifying ****data, training, inference and monitoring**** in one
workflow. It is the GCP counterpart to AWS SageMaker and Azure ML.

## The pipeline it covers[#](#the-pipeline-it-covers "Link to this heading")

****Training**** for custom models (TensorFlow, PyTorch, scikit-learn, XGBoost) with distributed
runs across CPUs, GPUs and ****TPUs****, plus built-in tuning. ****Deployment**** as real-time or batch
endpoints over Google Cloud Storage, with autoscaling. ****Foundation models**** — Google’s PaLM,
Gemini, Imagen and Chirp — accessible through ****Vertex AI Studio**** without training from
scratch. ****MLOps**** with monitoring (drift, bias, feature skew), pipelines, ****explainable AI****
and metadata versioning. And a ****Feature Store**** integrated with BigQuery and Dataflow.

## Workflow, benefits, costs[#](#workflow-benefits-costs "Link to this heading")

The flow runs ingest (BigQuery, GCS) → prepare features → train (custom or ****AutoML****) →
deploy → monitor for drift, performance and fairness. Its strengths are being ****fully
managed****, ****first-class access to Google’s foundation models****, and tight ****GCP integration****.
The costs mirror SageMaker’s: it can be ****expensive at scale**** and brings ****vendor lock-in**** to
GCP.

## Versus SageMaker[#](#versus-sagemaker "Link to this heading")

The two are near-mirror images — both end-to-end, both supporting any framework and full
MLOps. The real differentiators are ****ecosystem**** (BigQuery/GCS vs S3/Redshift) and
****foundation-model access**** (Gemini and friends native to Vertex). The choice usually follows
whichever cloud an organisation already lives in.

---

****Mind map — connected ideas****

> [AWS SageMaker](148-aws-sagemaker.html) · [OpenAI API (ML API)](150-openai-api-ml-api.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Drift Detection](138-drift-detection.html) · [Hyperparameter](142-hyperparameter.html) · [Quantization](343-quantization.html)

---

****More in ML Platforms & Tools****

> [AWS SageMaker](148-aws-sagemaker.html) · [Google Experiments](100-google-experiments.html) · [Kaggle](273-kaggle.html) · [ONNX (Open Neural Network Exchange)](344-onnx-open-neural-network-exchange.html) · [OpenAI API (ML API)](150-openai-api-ml-api.html) · [TPU Clusters](347-tpu-clusters.html)

---

**Theme:** [ML Platforms & Tools](index.html#term-theme-platforms)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Vertex AI](https://insightful-data-lab.com/2025/08/24/vertex-ai/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)