🔗  ****Uplift Random Forests****

# Uplift Random Forests[#](#uplift-random-forests "Link to this heading")

**An ensemble of trees that estimates individual-level treatment effects.**

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

An ****uplift random forest**** is a modified random forest built to ****estimate the causal effect**** of a
treatment directly, not merely to predict an outcome. Instead of modelling \(P(Y \mid X)\), it
models the ****treatment-versus-control difference****,

\[\Delta(X) = P(Y = 1 \mid T = 1, X) - P(Y = 1 \mid T = 0, X).\]

## How it works[#](#how-it-works "Link to this heading")

The trees are ****uplift trees****: each split is chosen to ****maximise the difference in treatment effect****
between its branches, rather than to maximise class purity. Many such trees are then ****averaged in an
ensemble****, exactly as in an ordinary random forest, for stability — and each individual receives an
estimated uplift, the incremental probability change caused by the treatment.

## Why use it[#](#why-use-it "Link to this heading")

It ****handles nonlinear relationships and feature interactions**** automatically, ****reduces variance****
compared with a single uplift tree, and delivers ****individual-level treatment-effect**** predictions —
learning how features **modify** the treatment effect, not just how they drive the outcome.

## Applications[#](#applications "Link to this heading")

It powers ****marketing**** (targeting customers who respond **because of** a campaign), ****personalised
medicine**** (patients who benefit most from a drug), and ****policy**** (subgroups most positively
affected). It requires ****both treated and control data**** — an A/B setup. In an email sign-up campaign,
a standard forest predicts the probability of signing up, while the uplift forest predicts the **extra**
probability caused by the email — separating loyal always-signers (low uplift) from persuadables
(high) and negative reactors (negative uplift).

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Uplift Models](205-uplift-models.html) · [Uplift](424-uplift.html) · [Treatment Effect](072-treatment-effect.html) · [Causal Inference](117-causal-inference.html) · [Uplift Score](204-uplift-score.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Uplift Random Forests](https://insightful-data-lab.com/2025/08/21/uplift-random-forests/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)