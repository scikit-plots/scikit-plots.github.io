🔗  ****Uplift Models****

# Uplift Models[#](#uplift-models "Link to this heading")

**Models that predict the incremental effect of treating each individual.**

## What it is[#](#what-it-is "Link to this heading")

****Uplift models**** — also called incremental, net-lift or true-lift models — are predictive models
that estimate the ****causal impact**** of an action (a campaign, discount or treatment) on an
individual’s behaviour, rather than the behaviour itself. They shift the question from **“who will
buy?”** to **“who will buy** ****because of**** **the campaign?”** — predicting incremental change, not raw
outcome.

## Four kinds of customer[#](#four-kinds-of-customer "Link to this heading")

Uplift modelling divides people by how they respond to intervention: ****persuadables**** act **only**
because of it (the target), ****sure things**** would act anyway, ****lost causes**** never act, and
****do-not-disturbs**** react **negatively** if contacted. The goal is to reach persuadables, stop wasting
budget on sure things and lost causes, and avoid provoking do-not-disturbs.

## Techniques[#](#techniques "Link to this heading")

Four families. The ****two-model approach**** trains separate treated- and control-group models and
subtracts their probabilities. ****Class transformation**** relabels the target to encode both outcome
and treatment, so a single classifier predicts uplift directly. ****Uplift trees and forests**** choose
splits that maximise the treatment-control difference. And ****meta-learners**** (T-, S- and X-learners)
build uplift on top of standard models within causal-ML frameworks.

## Evaluation and trade-offs[#](#evaluation-and-trade-offs "Link to this heading")

Because uplift concerns **causal** effect, accuracy and AUC are not enough; models are judged by the
****Qini curve and coefficient****, the ****uplift curve****, and ****AUUC****. In a subscription campaign where
the treatment group buys at 20% against a control’s 15%, the model tries to pinpoint which
individuals make up that ****+5%****. The payoff is better spend, ROI and causal insight; the costs are a
need for ****experimental (A/B) data****, greater model complexity, and harder interpretation.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Uplift](424-uplift.html) · [Uplift Score](204-uplift-score.html) · [Qini Curve](203-qini-curve.html) · [AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Treatment Effect](072-treatment-effect.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Uplift Models](https://insightful-data-lab.com/2025/08/23/uplift-models/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)