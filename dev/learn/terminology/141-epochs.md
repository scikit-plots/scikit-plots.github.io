🏋️  ****Epochs****

# Epochs[#](#epochs "Link to this heading")

**One full pass of the training algorithm over the entire dataset.**

## What it is[#](#what-it-is "Link to this heading")

An ****epoch**** is ****one complete pass of the entire training set through the model****. In each
epoch the model sees every training sample once — in ****mini-batches****, not all at once — and
across many epochs it refines its weights through repeated exposure.

## Epoch vs batch vs iteration[#](#epoch-vs-batch-vs-iteration "Link to this heading")

Three terms that are easy to conflate. A ****batch**** is a subset of the data processed together;
an ****iteration**** is one update step (a forward and backward pass on one batch); and an
****epoch**** is one full cycle through **all** batches. So with ****10,000 samples**** and a ****batch
size of 100****, it takes ****100 iterations to complete 1 epoch****.

## Too few, too many[#](#too-few-too-many "Link to this heading")

Epoch count trades ****underfitting against overfitting****. Too few and the model ****hasn’t
learned enough****; too many and it begins to ****memorise**** the training data and generalises
worse. Loss falls with more epochs only ****up to a point****.

## The training loop and an example[#](#the-training-loop-and-an-example "Link to this heading")

The loop is: initialise weights; for each epoch, run forward/backward passes over the
mini-batches and update, then evaluate on a validation set; stop when validation stops
improving (****early stopping****). Training an image classifier on ****CIFAR-10**** for 20 epochs,
the model sees all 50,000 images each epoch and, by epoch 20, the loss has stabilised. Since
the right count is data-dependent — roughly ****50–200**** for small sets, ****5–30**** with early
stopping for large ones — the ****epoch count is itself a hyperparameter****.

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Hyperparameter](142-hyperparameter.html) · [Early Stopping](140-early-stopping.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html) · [Neural Networks](287-neural-networks.html) · [Quantization](343-quantization.html)

---

> **Hint**
> ****More in Model Training & Optimization****

[Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Epochs](https://insightful-data-lab.com/2025/08/24/epochs/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)