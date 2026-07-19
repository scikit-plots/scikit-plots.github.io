🔗  ****Causal Inference****

# Causal Inference[#](#causal-inference "Link to this heading")

**Drawing cause-and-effect conclusions from data, not merely associations.**

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

****Causal inference**** is the discipline of establishing whether one variable ****actually
causes**** a change in another, rather than merely ****correlating**** with it. The classic trap:
ice-cream sales and drownings rise together, but neither causes the other — hot weather
drives both. Causal inference is the toolkit for separating ****causation from association****.

## Why it matters[#](#why-it-matters "Link to this heading")

Decisions hinge on it. Did the campaign ****cause**** the sales lift, or would sales have risen
anyway? Did the treatment ****cause**** recovery, or was it natural? Did the policy ****cause**** the
change, or did something else? Acting on a spurious correlation wastes money and harms
people.

## The gold standard and its alternatives[#](#the-gold-standard-and-its-alternatives "Link to this heading")

A ****randomised controlled trial (RCT)**** assigns treatment and control ****at random****, which
balances confounders and makes the comparison causal. When randomisation is impossible
(ethics, cost), ****observational**** methods approximate it: ****regression**** adjusts for measured
confounders; ****propensity-score matching**** pairs treated and untreated units with similar
covariates; ****difference-in-differences**** compares before/after trends against an untreated
group; ****instrumental variables**** exploit a variable that moves treatment but not the
outcome directly; and ****regression discontinuity**** compares units just above and below a
treatment cutoff.

## The counterfactual core[#](#the-counterfactual-core "Link to this heading")

Underneath sits the ****potential-outcomes (Rubin) model****: each unit has a treated outcome
\(Y\_1\) and an untreated outcome \(Y\_0\), and the causal effect is
\(E[Y\_1 - Y\_0]\). The ****fundamental problem**** is that we never observe ****both**** for the
same unit — which is exactly why we need RCTs, DiD and the rest. ****Directed acyclic graphs
(DAGs)**** complement this by mapping confounders and mediators visually.

## The pitfalls[#](#the-pitfalls "Link to this heading")

The enemies of causal claims are ****confounding**** (a third variable driving both),
****selection bias**** (groups that differ systematically), ****reverse causality**** (the outcome
also influences the cause), and ****unobserved variables**** that can’t be adjusted for if
they’re never measured.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Causal Impact](112-causal-impact.html) · [Treatment Effect](072-treatment-effect.html) · [Regression Coefficient](090-regression-coefficient.html) · [A/B Testing](380-a-b-testing.html) · [Counterfactual Explanations](336-counterfactual-explanations.html) · [Frequentist](059-frequentist.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html) · [Qini Curve](203-qini-curve.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Causal Inference](https://insightful-data-lab.com/2025/08/24/causal-inference/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)