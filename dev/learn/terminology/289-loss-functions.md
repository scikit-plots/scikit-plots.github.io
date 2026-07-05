🏋️  ****Loss Functions****

# Loss Functions[#](#loss-functions "Link to this heading")

**Objectives quantifying prediction error that training seeks to minimise.**

## What it is[#](#what-it-is "Link to this heading")

A ****loss function**** (cost or objective) measures ****how wrong**** a model’s predictions are on the training
data — a single number the model ****minimizes****. Lower loss means predictions closer to targets; it is the
signal that ****gradient descent**** follows to update parameters.

## Matching loss to task[#](#matching-loss-to-task "Link to this heading")

The loss encodes what “wrong” means — ****regression**** uses ****mean squared error**** or MAE; ****binary
classification**** uses ****binary cross-entropy****; ****multi-class**** uses ****categorical cross-entropy****. Squared
error can’t tell a bad classification from a disastrous one, which is why classification uses cross-entropy.

## Why it matters[#](#why-it-matters "Link to this heading")

The loss defines what the model actually ****optimizes****, so a mismatched loss silently optimizes the wrong
thing (MSE on a sigmoid gives a ****non-convex**** surface). A good loss is ****differentiable****, fits the task,
and aligns with the real objective.

---

****Mind map — connected ideas****

> [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Logit Space](291-logit-space.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Sigmoid Function](297-sigmoid-function.html) · [Softmax Function](296-softmax-function.html) · [Neural Networks](287-neural-networks.html)

---

****More in Model Training & Optimization****

> [Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html)

---

**Theme:** Model Training & Optimization  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Loss Functions](https://insightful-data-lab.com/2025/08/21/loss-functions/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)