🏋️  ****Ensemble****

# Ensemble[#](#ensemble "Link to this heading")

**Combining several models’ predictions to improve accuracy and robustness.**

## What it is[#](#what-it-is "Link to this heading")

An ****ensemble**** combines ****multiple models into one stronger predictor****. The intuition is the
****wisdom of the crowd**** — a group of diverse or individually “weak” models, averaged together,
is usually more accurate and more stable than any one of them.

## Why use one[#](#why-use-one "Link to this heading")

Ensembles ****reduce variance**** (steadier, less noise-sensitive predictions), can ****reduce bias****
(capturing more complex patterns), and ****improve robustness**** (one model’s errors offset by
others). They routinely win competitions like Kaggle for exactly these reasons.

## The five strategies[#](#the-five-strategies "Link to this heading")

****Bagging**** (bootstrap aggregating) trains models on different random samples and averages or
votes — ****random forest**** is bagged decision trees. ****Boosting**** trains models
****sequentially****, each fixing the last one’s errors (AdaBoost, gradient boosting, XGBoost,
LightGBM, CatBoost). ****Stacking**** trains base models and a ****meta-learner**** to combine them.
****Voting**** takes a majority (hard) or averages probabilities (soft). ****Blending**** is stacking
with the meta-learner trained on a ****holdout set**** rather than CV folds.

## Trade-offs[#](#trade-offs "Link to this heading")

The wins — ****higher accuracy****, ****resistance to overfitting****, complementary patterns from
different algorithms — come at a price: ****more compute****, ****harder interpretability**** than a
single model, and ****deployment complexity**** (several models mean more latency and OpEx).

---

****Mind map — connected ideas****

> [Re-scoring](137-re-scoring.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html) · [Cloud Inference](153-cloud-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Model Weights](155-model-weights.html)

---

****More in Model Training & Optimization****

> [Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html)

---

**Theme:** Model Training & Optimization  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Ensemble](https://insightful-data-lab.com/2025/08/24/ensemble/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)