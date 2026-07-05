🧰  ****OpenAI API (ML API)****

# OpenAI API (ML API)[#](#openai-api-ml-api "Link to this heading")

**A hosted API for accessing OpenAI’s models programmatically.**

## What it is[#](#what-it-is "Link to this heading")

The ****OpenAI API**** is a cloud ****machine-learning API****: it exposes OpenAI’s models — LLMs,
embeddings, fine-tuned variants — through simple ****HTTP endpoints****. Rather than training and
hosting a model yourself, you ****send a request, the cloud runs inference, and JSON comes
back**** — inference-as-a-service.

## What it offers[#](#what-it-offers "Link to this heading")

The surface is broad. ****Chat and text generation**** (GPT-family models) for Q&A, summarisation
and reasoning. An ****embeddings**** endpoint turning text into vectors for semantic search,
clustering and ****RAG****. A ****fine-tuning**** endpoint to specialise a model on your data.
****Moderation**** for unsafe content, ****vision/multimodal**** for images alongside text, and
****speech**** both ways (text-to-speech and Whisper transcription). Plus ****batch/async****
processing for volume.

## Calling it[#](#calling-it "Link to this heading")

You POST to a REST endpoint (or use an SDK) and read the response:

```
from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Explain Bayesian inference simply."}],
)

```

## Benefits and limits[#](#benefits-and-limits "Link to this heading")

The appeal is ****no training or hosting****, ****automatic scale****, and ****simple integration**** that
improves as OpenAI ships new models. The constraints: it is ****cloud-only**** (needs internet),
adds ****network latency****, ****costs per token**** of input and output, and raises ****privacy****
questions — sensitive data must clear HIPAA/GDPR review before it leaves your systems.

---

****Mind map — connected ideas****

> [AWS SageMaker](148-aws-sagemaker.html) · [Vertex AI](149-vertex-ai.html) · [AWS SageMaker Endpoints](151-aws-sagemaker-endpoints.html) · [Embedding](173-embedding.html) · [Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html)

---

****More in ML Platforms & Tools****

> [AWS SageMaker](148-aws-sagemaker.html) · [Google Experiments](100-google-experiments.html) · [Kaggle](273-kaggle.html) · [ONNX (Open Neural Network Exchange)](344-onnx-open-neural-network-exchange.html) · [TPU Clusters](347-tpu-clusters.html) · [Vertex AI](149-vertex-ai.html)

---

**Theme:** ML Platforms & Tools  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [OpenAI API (ML API)](https://insightful-data-lab.com/2025/08/24/openai-api-ml-api/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)