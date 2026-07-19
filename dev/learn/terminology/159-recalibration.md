⚙️  ****Recalibration****

# Recalibration[#](#recalibration "Link to this heading")

**Re-aligning predicted probabilities with observed frequencies after drift.**

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

****Recalibration**** adjusts a model’s ****predicted probabilities**** so they match the ****true
likelihood**** of outcomes. A model may output a 0.9 “probability of fraud”, but if that score is
****over- or under-confident****, recalibration corrects the mismatch — without touching the model’s
ranking.

## Why it’s needed[#](#why-it-s-needed "Link to this heading")

Many models (SVMs, neural nets, boosted trees) are ****poorly calibrated****: their raw outputs are
useful for **ordering** cases but are not true probabilities. In high-stakes domains — medicine,
finance, fraud — decisions need ****trustworthy probabilities****, not just a ranking. The target is
simple: of all cases scored ****0.7****, about ****70%**** should actually be positive.

## How it’s done[#](#how-it-s-done "Link to this heading")

Fit a small ****calibration model on a validation set****, comparing predicted scores to true
outcomes. The common methods are ****Platt scaling**** (a logistic fit on the raw scores),
****isotonic regression**** (a non-parametric monotonic mapping), ****temperature scaling**** (one
parameter on the logits, popular in deep learning), and ****Bayesian**** recalibration. A
****calibration curve**** — predicted probability versus observed frequency — diagnoses the need:
deviation from the diagonal means miscalibration.

## Examples and the contrast[#](#examples-and-the-contrast "Link to this heading")

A spam filter scores an email ****0.9****, but only 70% of such emails are truly spam — Platt scaling
corrects it toward ****0.72****. A mortality model predicts ****0.2**** where the real rate is ****30%**** —
recalibration nudges it to ****0.3****. This is distinct from ****threshold tuning****, which moves the
decision cutoff (say 0.5 → 0.3) to trade precision against recall; recalibration changes the
****probabilities themselves****. It works as a ****post-processing**** step (no retraining), though it
needs a reliable calibration set and may leave ranking metrics like AUC unchanged.

---

**Theme:** [MLOps, Serving & Monitoring](index.html#term-theme-mlops)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Re-scoring](137-re-scoring.html) · [Platt Scaling](280-platt-scaling.html) · [Isotonic Regression](281-isotonic-regression.html) · [Temperature Scaling](279-temperature-scaling.html) · [Recalibrate Thresholds](165-recalibrate-thresholds.html) · [Drift Detection](138-drift-detection.html)

---

> **Hint**
> ****More in MLOps, Serving & Monitoring****

[AWS SageMaker Endpoints](151-aws-sagemaker-endpoints.html) · [Caching](342-caching.html) · [Cloud Inference](153-cloud-inference.html) · [Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [Compute budgets](383-compute-budgets.html) · [Continuous Retraining](161-continuous-retraining.html) · [Feature Values](188-feature-values.html) · [Guardrails (in ML & Data Systems)](166-guardrails-in-ml-data-systems.html) · [Inference Cost (Inference $)](385-inference-cost-inference.html) · [Latency Guardrails](350-latency-guardrails.html) · [Manual review minutes](384-manual-review-minutes.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Model Stability](187-model-stability.html) · [Monitoring Pipelines](162-monitoring-pipelines.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Recalibration](https://insightful-data-lab.com/2025/08/23/recalibration/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)