🔗  ****Causal ML (Causal Machine Learning)****

# Causal ML (Causal Machine Learning)[#](#causal-ml-causal-machine-learning "Link to this heading")

**ML methods that estimate causal effects rather than predictive associations.**

## What it is[#](#what-it-is "Link to this heading")

****Causal ML (causal machine learning)**** is the branch of machine learning that estimates
****cause-and-effect relationships****, not merely correlations or predictions. Where traditional ML asks
**“what is likely to happen?”**, causal ML asks **“what will happen** ****because of**** **this
intervention?”** — making it essential for policy evaluation, medical treatment, marketing and any
decision where an action **changes** the outcome.

## The counterfactual problem[#](#the-counterfactual-problem "Link to this heading")

Everything rests on ****treatment versus control**** — the intervention against no intervention. The
difficulty is the ****counterfactual problem****: for any individual we observe only **one** outcome
(treated or not), never the other, so the effect must be ****estimated****. That effect comes in three
grains: the ****ATE**** (average treatment effect across the population,
\(\text{ATE} = \mathbb{E}[Y(1) - Y(0)]\)), the ****CATE**** (conditional on a subgroup), and the
****ITE**** (for a single individual).

## Methods[#](#methods "Link to this heading")

The gold standard is ****experimental**** — a randomised controlled trial (RCT) assigns treatment at
random, eliminating confounding. When experiments are impossible, ****observational**** methods step in:
propensity-score matching, inverse-propensity weighting, and doubly-robust estimators that combine
regression with weighting. ****ML extensions**** add ****meta-learners**** (S-, T-, X- and R-learners),
****causal trees and forests**** for heterogeneous effects, and deep models (Dragonnet, TARNet) — with
libraries such as `CausalML`, `EconML` and `DoWhy`.

## An example[#](#an-example "Link to this heading")

In a marketing email campaign, traditional ML predicts ****who will buy****; causal ML predicts ****who
will buy because of the email****. If the treatment group buys at 15% and the control at 10%, the
****ATE is a 5% uplift**** — and causal ML then estimates ****CATE/ITE**** to reveal which segments or
individuals respond most.

## Benefits and challenges[#](#benefits-and-challenges "Link to this heading")

The payoff is real: it captures ****true causal effect**** rather than correlation, targets only those
who benefit, and supports ****counterfactual reasoning**** (“what if?”). The costs are structural — it
needs a ****treatment-control design**** (experiments or strong assumptions), is ****sensitive to
confounding**** in observational data, and is harder to explain and validate than standard ML.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Treatment Effect](072-treatment-effect.html) · [Causal Inference](117-causal-inference.html) · [Uplift Models](205-uplift-models.html) · [Uplift](424-uplift.html) · [Random Targeting Strategy](196-random-targeting-strategy.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html) · [Qini Curve](203-qini-curve.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Causal ML (Causal Machine Learning)](https://insightful-data-lab.com/2025/08/23/causal-ml-causal-machine-learning/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)