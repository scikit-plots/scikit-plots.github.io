🔗  ****Causal Impact****

# Causal Impact[#](#causal-impact "Link to this heading")

**The estimated effect of an intervention, often via a counterfactual time-series model.**

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

****Causal impact**** is the ****overall effect of an intervention**** — a campaign, launch or
policy — ****on an outcome****. In data science the term usually points to ****Google’s
CausalImpact**** (Brodersen et al., 2015): a ****Bayesian structural time-series**** model that
estimates what **would** have happened without the intervention and compares it to what
actually did.

## Why it’s needed[#](#why-it-s-needed "Link to this heading")

In an RCT or A/B test the causal effect is easy — you have treatment and control groups. But
in ****observational or time-series**** settings there may be ****no untreated control****: run a
nationwide ad campaign and there is no parallel country that didn’t see it. The fix is to
model the ****counterfactual**** — the outcome you’d have seen without the intervention — and
measure the gap.

## The method and formula[#](#the-method-and-formula "Link to this heading")

CausalImpact fits a model on the ****pre-intervention**** period (using historical data and
****control covariates****), forecasts the ****counterfactual**** for the post period, and
subtracts:

\[\text{Causal Impact} = Y\_{\text{observed, post}} - Y\_{\text{predicted, counterfactual}},\]

reporting the difference ****with Bayesian credible intervals**** rather than a single number.

## Example[#](#example "Link to this heading")

A firm launches a TV campaign in July. Trained on January–June sales, the model forecasts a
****counterfactual of 50,000 units****; actual sales come in at ****60,000**** — an estimated impact
of ****+10,000 units****, with a credible interval of roughly [7,000, 13,000].

## Strengths, limits, and effect vs impact[#](#strengths-limits-and-effect-vs-impact "Link to this heading")

It handles ****time series**** naturally, yields ****full posterior distributions****, uses
****covariates**** to sharpen accuracy, and needs no RCT — but it ****assumes the model captures
the dynamics****, is ****sensitive to the choice of controls****, and wants a ****clear start date****.
Note the level distinction: the ****causal effect**** is micro (the change per unit — a drug
lowers blood pressure 5 mmHg), while the ****causal impact**** is macro (the aggregate — a
nationwide rollout prevents 10,000 hospitalisations).

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Treatment Effect](072-treatment-effect.html) · [Causal Inference](117-causal-inference.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [A/B Testing](380-a-b-testing.html) · [Counterfactual Explanations](336-counterfactual-explanations.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html) · [Qini Curve](203-qini-curve.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Causal Impact](https://insightful-data-lab.com/2025/08/24/causal-impact/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)