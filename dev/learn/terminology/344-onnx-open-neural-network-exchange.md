🧰  ****ONNX (Open Neural Network Exchange)****

# ONNX (Open Neural Network Exchange)[#](#onnx-open-neural-network-exchange "Link to this heading")

**An open format for exchanging trained models across frameworks.**

## What it is[#](#what-it-is "Link to this heading")

****ONNX (Open Neural Network Exchange)**** is an ****open-source, standardised format**** for representing
machine-learning models — both deep-learning and traditional ML. It acts as a ****universal
translator****: build a model in one framework (PyTorch, TensorFlow, scikit-learn) and ****deploy it in
another**** environment optimised for inference, without rewriting or retraining. Originally called
**Toffee** and built by the PyTorch team at Facebook, it was renamed ONNX in September 2017 and is now
backed by Microsoft, IBM, Intel, AMD, Arm, Qualcomm and others.

## How it represents a model[#](#how-it-represents-a-model "Link to this heading")

An ONNX model is an ****extensible computation graph**** — a directed acyclic graph whose ****nodes**** are
****operators**** (convolution, pooling, activation) with typed inputs and outputs. It defines a set of
****built-in operators**** and ****standard data types****, and serialises the network structure (layers,
connections) and parameters (weights, biases) in a ****framework-agnostic**** way using ****Protocol
Buffers**** as the container format. The focus is on ****inference**** (evaluation), not training.

## The workflow[#](#the-workflow "Link to this heading")

The lifecycle is ****train, export, run****. Train in any framework, ****export**** to a single `.onnx` file
(for example with `torch.onnx.export`), then execute it with a runtime such as ****ONNX Runtime****,
whose ****execution providers**** target CPUs, GPUs and specialised accelerators. The runtime applies
****graph optimisations**** — node fusion, constant folding — that cut inference latency.

## Why it matters[#](#why-it-matters "Link to this heading")

ONNX delivers ****framework interoperability**** (no ecosystem lock-in), ****hardware optimisation**** (one
`.onnx` runs on NVIDIA GPUs, Intel CPUs or mobile NPUs via tools like OpenVINO and CoreML),
****faster inference****, and ****simplified deployment**** — one delivery format across cloud, edge, mobile
and even the browser (ONNX Runtime Web on WebGL/WebAssembly). Its main limitation is that some
****proprietary or very new operators**** are not yet supported.

```
import torch
import onnxruntime as ort

# Export a trained PyTorch model to ONNX
dummy = torch.randn(1, 3, 224, 224)
torch.onnx.export(model, dummy, "model.onnx",
                  input_names=["input"], output_names=["output"],
                  dynamic_axes={"input": {0: "batch_size"}})

# Run inference with ONNX Runtime
session = ort.InferenceSession("model.onnx", providers=["CPUExecutionProvider"])
outputs = session.run(None, {"input": input_array})

```

---

**Theme:** [ML Platforms & Tools](index.html#term-theme-platforms)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Quantization](343-quantization.html) · [Caching](342-caching.html) · [Neural Networks](287-neural-networks.html) · [TPU Clusters](347-tpu-clusters.html) · [Latency Guardrails](350-latency-guardrails.html) · [Monitoring Pipelines](162-monitoring-pipelines.html)

---

> **Hint**
> ****More in ML Platforms & Tools****

[AWS SageMaker](148-aws-sagemaker.html) · [Google Experiments](100-google-experiments.html) · [Kaggle](273-kaggle.html) · [OpenAI API (ML API)](150-openai-api-ml-api.html) · [TPU Clusters](347-tpu-clusters.html) · [Vertex AI](149-vertex-ai.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [ONNX (Open Neural Network Exchange)](https://insightful-data-lab.com/2025/08/20/onnx-open-neural-network-exchange/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)