# Example: forecasting U.S. presidential elections[#](#example-forecasting-u-s-presidential-elections "Link to this heading")

****Part 4 · Stage 12 · 🏗️ Hierarchical Regression**** · Lesson 100 of 144 · **advanced**

[◀ Previous · Regression coeﬃcients exchangeable in batches](099-regression-coefficients-exchangeable-in-batches.html) · [Next · Interpreting a normal prior distribution as extra data ▶](101-interpreting-a-normal-prior-distribution-as-extra-data.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## A puzzle of two timescales[#](#a-puzzle-of-two-timescales "Link to this heading")

Gelman and King posed a question that looks paradoxical: U.S. presidential elections are ****predictable****
months in advance, to within a couple of points, from a handful of fundamentals — yet the campaign
****polls swing wildly****. How can the outcome be forecastable while opinion is so volatile? The resolution
and the forecasting model together make this the capstone of regression foundations.

## The forecasting model[#](#the-forecasting-model "Link to this heading")

Predict each state’s vote share from national and state-level predictors — economic growth, presidential
approval, incumbency, past partisan lean — with the states treated as an ****exchangeable batch**** around
the national swing:

\[y\_{s} = X\_{s}\beta + \alpha\_{s} + \epsilon\_{s}, \qquad
\alpha\_{s} \sim \mathrm{N}(0, \tau^2),\]

where \(X\_s\beta\) carries the fundamentals common to all states and \(\alpha\_s\) is a
state-level deviation, ****pooled**** toward zero by an inferred \(\tau\). States with little history
borrow strength from the national pattern — the hierarchical move of the previous lesson, in a
consequential setting.

```
import pymc as pm
with pm.Model():
    beta = pm.Normal("beta", 0, 1, shape=k)              # national fundamentals
    tau = pm.HalfNormal("tau", 0.05)                     # state-deviation scale
    z = pm.Normal("z", 0, 1, shape=n_states)
    alpha = pm.Deterministic("alpha", tau * z)           # pooled state effects
    mu = X @ beta + alpha[state]
    pm.Normal("y", mu, pm.HalfNormal("s", 0.05), observed=vote_share)
    idata = pm.sample()
# electoral-college distribution: simulate all states jointly from the posterior

```

## The resolution of the puzzle[#](#the-resolution-of-the-puzzle "Link to this heading")

The key insight is about what the fundamentals do. Variables like incumbency and economic conditions are
****fixed months ahead****, so in the model they are **held constant** — and, as Gelman and King put it, a
predictor held constant is ****effectively controlled**** and cannot contribute to forecast variance. The
outcome is predictable because it is driven by these stable quantities. The polls swing because
respondents, mid-campaign, report ****unenlightened**** preferences that have not yet converged on the vote
their fundamentals imply; by election day they arrive at their ****enlightened**** preferences, which the
fundamentals predicted all along.

## Why it is the capstone[#](#why-it-is-the-capstone "Link to this heading")

Every thread of the stage runs through it. It is a ****regression**** on chosen predictors (conditional
modelling); its predictors are assembled with judgement (past vote as a control); its states are an
****exchangeable batch**** with a learned scale (hierarchical coefficients); and its output is not a point
but a ****posterior distribution over the electoral college****, obtained by simulating all states jointly —
propagating correlated uncertainty in a way no single number could. Prediction, description and a careful
causal story, in one model. Part V now takes regression beyond linearity and beyond a fixed set of
coefficients.

> **Hint**
> ****Related lessons:**** [Regression coeﬃcients exchangeable in batches](099-regression-coefficients-exchangeable-in-batches.html) · [Regression for causal inference: incumbency and voting](093-regression-for-causal-inference-incumbency-and-voting.html) · [Varying intercepts and slopes](102-varying-intercepts-and-slopes.html) · [Sample surveys](052-sample-surveys.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/24/example-forecasting-u-s-presidential-elections/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)