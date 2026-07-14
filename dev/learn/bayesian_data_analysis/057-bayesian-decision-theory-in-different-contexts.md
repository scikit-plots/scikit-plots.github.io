# Bayesian decision theory in diﬀerent contexts[#](#bayesian-decision-theory-in-different-contexts "Link to this heading")

****Part 2 · Stage 7 · 🗳️ Data Collection & Decisions**** · Lesson 057 of 144 · **intermediate**

[◀ Previous · Censoring and truncation](056-censoring-and-truncation.html) · [Next · Using regression predictions: survey incentives ▶](058-using-regression-predictions-survey-incentives.html) · [↑ Section](index.html)

## From inference to action[#](#from-inference-to-action "Link to this heading")

A posterior is not a decision. To act you need one more ingredient: a ****utility function**** stating what
outcomes are worth. Bayesian decision theory then supplies the rule — among the available actions,
choose the one whose utility is greatest ****on average over the posterior****.

## The rule[#](#the-rule "Link to this heading")

Let \(a\) be an action, \(\theta\) the unknown state, and \(U(a, \theta)\) the utility of
taking \(a\) when the truth is \(\theta\). The optimal action maximises ****expected utility****:

\[a^{\*} = \arg\max\_{a} \; \mathrm{E}\_{\theta \mid y}\bigl[U(a, \theta)\bigr]
= \arg\max\_{a} \int U(a, \theta) \; p(\theta \mid y) \; d\theta .\]

With posterior draws this is a one-line computation — the expectation becomes an average, and the
optimisation a search over the (usually few) candidate actions.

```
import numpy as np
theta = idata.posterior["theta"].values.ravel()      # posterior draws
actions = np.linspace(0, 1, 101)                     # candidate actions
EU = [np.mean(utility(a, theta)) for a in actions]   # expected utility per action
best = actions[int(np.argmax(EU))]

```

Note what the posterior does here: it ****weights**** each possible truth by its plausibility. The full
distribution matters, not just its mean — because utilities are usually ****nonlinear****, and
\(\mathrm{E}[U(a, \theta)] \ne U(a, \mathrm{E}[\theta])\).

## Why estimation is not decision[#](#why-estimation-is-not-decision "Link to this heading")

Familiar Bayesian summaries are decisions in disguise, each optimal under a particular loss (negative
utility). Squared-error loss gives the ****posterior mean****; absolute-error loss gives the ****median****;
0–1 loss gives the ****mode****. So the choice of point estimate is not a matter of taste but of the cost
of being wrong — and when those costs are ****asymmetric**** (a flood barrier too low versus too high) the
optimal action can lie far out in a tail, nowhere near any conventional estimate.

## Contexts differ[#](#contexts-differ "Link to this heading")

Three settings recur through this stage, and their utilities differ in kind. A ****one-shot**** choice: pick
\(a\) once, as with a survey incentive. A ****sequential**** problem: act, observe, act again, where an
early action buys information for later ones. And a ****hierarchical**** problem, where decisions are made
for many units at once and shrinkage governs each. The final lesson adds the sharpest distinction of
all — ****whose**** utility, the individual’s or the institution’s, since the two can rationally disagree.

> **Hint**
> ****Related lessons:**** [Using regression predictions: survey incentives](058-using-regression-predictions-survey-incentives.html) · [Multistage decision making: medical screening](059-multistage-decision-making-medical-screening.html) · [Summarizing Posterior Inference](013-summarizing-posterior-inference.html) · [Personal vs. institutional decision analysis](061-personal-vs-institutional-decision-analysis.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/11/bayesian-decision-theory-in-di%ef%ac%80erent-contexts/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)