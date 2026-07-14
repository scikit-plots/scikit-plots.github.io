🏋️  ****Quantization****

# Quantization[#](#quantization "Link to this heading")

**Reducing numeric precision of weights to shrink and speed up models.**

## What it is[#](#what-it-is "Link to this heading")

****Quantization**** lowers the ****numerical precision**** of a model’s ****weights**** (and often activations) — from
32-bit floating point (****FP32****) down to ****INT8****, ****FP8****, or even ****INT4****. Fewer bits per number means a
****smaller, faster, cheaper**** model.

## The payoff[#](#the-payoff "Link to this heading")

An ****INT8**** model uses about ****75% less memory**** than FP32, and because decoding is often
****memory-bandwidth-bound****, 4-bit weights can be read up to ****4× faster**** than 16-bit — directly cutting
****latency**** and ****inference cost**** on hardware that supports low precision.

## Managing the trade-off[#](#managing-the-trade-off "Link to this heading")

Naive quantization ****degrades accuracy****. ****Post-training quantization (PTQ)**** converts a trained model
quickly (with a small calibration set), while ****quantization-aware training (QAT)**** bakes precision loss into
training to preserve accuracy; advanced schemes like ****AWQ**** and ****GPTQ**** protect the most ****sensitive****
weights to reach near-FP16 quality at INT4 speeds.

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Caching](342-caching.html) · [TPU Clusters](347-tpu-clusters.html) · [Inference Cost (Inference $)](385-inference-cost-inference.html) · [Neural Networks](287-neural-networks.html) · [Compute budgets](383-compute-budgets.html) · [ONNX (Open Neural Network Exchange)](344-onnx-open-neural-network-exchange.html)

---

> **Hint**
> ****More in Model Training & Optimization****

[Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Quantization](https://insightful-data-lab.com/2025/08/20/quantization/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)