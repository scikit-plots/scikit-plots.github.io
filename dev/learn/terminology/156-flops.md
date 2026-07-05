🏋️  ****FLOPs****

# FLOPs[#](#flops "Link to this heading")

**Floating-point operations — a measure of a model’s compute cost.**

## What it is[#](#what-it-is "Link to this heading")

****FLOPs — floating-point operations**** — count the ****mathematical operations**** (adds, multiplies,
divides) a model or algorithm performs. In ML, FLOPs are a standard ****proxy for computational
complexity**** and for training/inference ****cost**** — they measure **workload**, not memory access or
I/O.

## The units[#](#the-units "Link to this heading")

One operation is a ****FLOP****, and the scale climbs fast: ****MFLOPs**** (millions), ****GFLOPs****
(billions), ****TFLOPs**** (trillions), ****PFLOPs**** (quadrillions). A single large matrix
multiplication already involves enormous counts.

## Counting them[#](#counting-them "Link to this heading")

Multiplying an \(m \times n\) matrix by an \(n \times p\) matrix costs about
\(2 \, m \, n \, p\) FLOPs — so two \(1000 \times 1000\) matrices run to roughly ****2
billion****. In deep learning, ****training**** FLOPs scale with dataset size × model size × epochs,
while ****inference**** FLOPs per forward pass drive deployment latency. For comparison, ResNet-50 is
~4 GFLOPs per image, BERT-base ~22 GFLOPs per sequence, and GPT-3 took an estimated
\(3 \times 10^{23}\) FLOPs to train.

## FLOPs vs FLOPS[#](#flops-vs-flops "Link to this heading")

Two letters, two meanings. ****FLOPs**** is a ****count**** of operations (the workload); ****FLOPS**** is
****floating-point operations per second****, the ****speed**** of hardware — an NVIDIA A100 delivers
~312 TFLOPS on its tensor cores. FLOPs is the job; FLOPS is how fast the worker does it. Because
training cost scales almost linearly with FLOPs, the count is a key lever in the
efficiency-versus-accuracy trade-off.

---

****Mind map — connected ideas****

> [Model Weights](155-model-weights.html) · [Quantization](343-quantization.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html) · [Cloud Inference](153-cloud-inference.html) · [OpEx](157-opex.html) · [Neural Networks](287-neural-networks.html)

---

****More in Model Training & Optimization****

> [Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html)

---

**Theme:** Model Training & Optimization  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [FLOPs](https://insightful-data-lab.com/2025/08/24/flops/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)