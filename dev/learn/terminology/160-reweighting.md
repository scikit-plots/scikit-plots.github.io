⚙️  ****Reweighting****

# Reweighting[#](#reweighting "Link to this heading")

**Adjusting sample or class weights to correct bias or distribution shift.**

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

****Reweighting**** assigns ****different weights to samples, features or loss terms**** so that training
or evaluation reflects the ****true importance, fairness or distribution**** of the data. It leaves
the raw data untouched and instead changes ****how much influence**** each part has.

## Where it’s used[#](#where-it-s-used "Link to this heading")

Several settings. ****Class imbalance****: upweight rare positives (fraud, disease) so the model
can’t ignore them. ****Covariate shift / domain adaptation****: reweight training samples to match
the production distribution (an 80%-desktop training set toward 50%-mobile production).
****Fairness****: upweight underrepresented protected groups for equal contribution. Plus ****loss
reweighting**** (balancing terms in multi-task or adversarial training) and ****importance sampling****
(correcting biased draws for unbiased estimates).

## The math[#](#the-math "Link to this heading")

The ordinary average loss

\[L = \frac{1}{N} \sum\_{i=1}^{N} \ell(f(x\_i), y\_i)\]

becomes, with weights,

\[L = \frac{1}{N} \sum\_{i=1}^{N} w\_i \, \ell(f(x\_i), y\_i),\]

where \(w\_i\) is the weight on sample \(i\) — a larger \(w\_i\) gives that example
more influence.

## Examples and trade-offs[#](#examples-and-trade-offs "Link to this heading")

On a ****1%-fraud**** dataset, an unweighted model predicts “not fraud” always; weighting fraud at 99
against 1 makes those cases count and ****lifts recall****. A loan model that is 80% male can upweight
female applicants toward fairness. The benefits — handling imbalance and drift, improving
fairness, ****keeping data intact**** (no over/undersampling) — come with risks: ****extreme weights****
can overfit the minority, and choosing weights well takes validation.

---

**Theme:** [MLOps, Serving & Monitoring](index.html#term-theme-mlops)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Class Weighting](002-class-weighting.html) · [Demographic Parity (Statistical Parity)](030-demographic-parity-statistical-parity.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Recalibration](159-recalibration.html) · [Continuous Retraining](161-continuous-retraining.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html)

---

> **Hint**
> ****More in MLOps, Serving & Monitoring****

[AWS SageMaker Endpoints](151-aws-sagemaker-endpoints.html) · [Caching](342-caching.html) · [Cloud Inference](153-cloud-inference.html) · [Cloud Inference with Big Payloads](152-cloud-inference-with-big-payloads.html) · [Compute budgets](383-compute-budgets.html) · [Continuous Retraining](161-continuous-retraining.html) · [Feature Values](188-feature-values.html) · [Guardrails (in ML & Data Systems)](166-guardrails-in-ml-data-systems.html) · [Inference Cost (Inference $)](385-inference-cost-inference.html) · [Latency Guardrails](350-latency-guardrails.html) · [Manual review minutes](384-manual-review-minutes.html) · [Model KPIs (Key Performance Indicators)](167-model-kpis-key-performance-indicators.html) · [Model Stability](187-model-stability.html) · [Monitoring Pipelines](162-monitoring-pipelines.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Reweighting](https://insightful-data-lab.com/2025/08/23/reweighting/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)