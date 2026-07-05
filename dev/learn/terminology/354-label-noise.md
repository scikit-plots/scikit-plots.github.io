🏋️  ****Label Noise****

# Label Noise[#](#label-noise "Link to this heading")

**Errors in training labels that can mislead a model.**

## What it is[#](#what-it-is "Link to this heading")

****Label noise**** is ****incorrect or unreliable labels**** in a dataset — training examples assigned the
wrong class or target, arising from human labellers, weak heuristics or imperfect sensors (a tweet “I
love this” marked ****negative****, or a misrecorded diagnosis).

## The three types[#](#the-three-types "Link to this heading")

****Random (uniform) noise****: labels flipped independently of the features (say 10% at random).
****Class-conditional noise****: mislabeling depends on the class — “cat” is confused for “dog” more often
than for “car”. ****Feature-dependent (systematic) noise****: ambiguous or low-quality inputs are
mislabeled more — blurry dog photos read as cats.

## Why it hurts[#](#why-it-hurts "Link to this heading")

It ****degrades training**** (models learn wrong patterns), ****miscalibrates**** probabilities, and
****distorts evaluation**** (a noisy test set makes metrics meaningless). Tell-tale signs: training
accuracy never reaching 100%, a ****stalling loss****, memorisation of noise with low validation
performance, and ****high disagreement among annotators****.

## Coping[#](#coping "Link to this heading")

****Clean**** the data (multiple annotators, keep high-agreement labels); use ****noise-robust losses**** (MAE,
generalised cross-entropy) with regularisation and early stopping; ****model the noise**** with a
transition matrix; combine a small clean set with a large noisy one (****weak / semi-supervised****); and
always keep a ****clean gold-standard evaluation set**** with robust metrics like AUC.

---

****Mind map — connected ideas****

> [Dataset Shift](353-dataset-shift.html) · [Evaluation Set](355-evaluation-set.html) · [Weak Supervision](346-weak-supervision.html) · [Full Annotation](345-full-annotation.html) · [Discriminatory Power](185-discriminatory-power.html) · [Multiclass AUROC](022-multiclass-auroc.html)

---

****More in Model Training & Optimization****

> [Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html)

---

**Theme:** Model Training & Optimization  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Label Noise](https://insightful-data-lab.com/2025/08/20/label-noise/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)