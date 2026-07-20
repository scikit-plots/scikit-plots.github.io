⚙️  ****Re-scoring****

# Re-scoring[#](#re-scoring "Link to this heading")

**Recomputing model scores on data, e.g. after retraining or recalibration.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****Re-scoring**** is ****adjusting or recomputing a model’s scores**** — predictions, probabilities
or rankings — **after** the initial output, by layering on extra information, calibration or
rules. It improves ****relevance, fairness or calibration without retraining****, and shows up in
ranking, recommendations, search, fraud detection and NLP pipelines.

## Where it’s used[#](#where-it-s-used "Link to this heading")

Five common settings. In ****search and recommendation****, a base ranking is re-scored with
business rules, diversity constraints or personalisation (boost new items, demote
duplicates). In ****classification****, raw probabilities are re-scored by ****calibration**** (Platt
scaling, isotonic regression, Bayesian correction). In ****ensembles****, several models’ outputs
are combined — a weighted average of fraud scores, say. For ****fairness****, re-scoring enforces
guardrails so no group is systematically disadvantaged. And in ****NLP reranking****, an N-best
list from an acoustic or translation model is re-scored by a second model (a language model)
to pick the most fluent candidate.

## Examples[#](#examples "Link to this heading")

A fraud model’s ****0.7**** probability is re-scored against the customer’s risk profile to
****0.85****; an e-commerce relevance score gets a ****+0.2**** promotion boost; a speech system’s
N-best hypotheses are re-scored by a language model to choose the most fluent sentence.

## Benefits and challenges[#](#benefits-and-challenges "Link to this heading")

It buys ****accuracy without full retraining****, ****flexibility**** (rules, fairness) and
****real-time, context-aware**** adjustment. The risks: a complex re-scoring stage adds
****latency****, weighting must be tuned to ****avoid introducing bias****, and leaning on it too hard
can ****paper over**** model weaknesses instead of fixing their root cause.

---

**Theme:** [MLOps, Serving & Monitoring](index.html#term-theme-mlops)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Platt Scaling](280-platt-scaling.html) · [Isotonic Regression](281-isotonic-regression.html) · [Recalibration](159-recalibration.html) · [Ranking Algorithms](108-ranking-algorithms.html) · [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html) · [Demographic Parity (Statistical Parity)](030-demographic-parity-statistical-parity.html)

---

> **Hint**
> ****More in MLOps, Serving & Monitoring****

[AWS SageMaker Endpoints](151-aws-sagemaker-endpoints.html) · [Caching](342-caching.html) · [Cloud Inference](153-cloud-inference.html) · [Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [Compute budgets](383-compute-budgets.html) · [Continuous Retraining](161-continuous-retraining.html) · [Feature Values](188-feature-values.html) · [Guardrails (in ML & Data Systems)](166-guardrails-in-ml-data-systems.html) · [Inference Cost (Inference $)](385-inference-cost-inference.html) · [Latency Guardrails](350-latency-guardrails.html) · [Manual review minutes](384-manual-review-minutes.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Model Stability](187-model-stability.html) · [Monitoring Pipelines](162-monitoring-pipelines.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Re-scoring](https://insightful-data-lab.com/2025/08/24/re-scoring/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)