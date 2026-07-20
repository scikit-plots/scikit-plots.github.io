# Some Useful Results from Probability Theory[#](#some-useful-results-from-probability-theory "Link to this heading")

****Part 1 · Stage 1 · 🎲 The Bayesian Idea**** · Lesson 008 of 144 · **beginner**

[◀ Previous · Example — Calibration for Record Linkage](007-example-calibration-for-record-linkage.html) · [Next · Computation and Software ▶](009-computation-and-software.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The toolkit[#](#the-toolkit "Link to this heading")

A handful of identities do nearly all the work in Bayesian derivations. They are elementary, but worth
stating once, precisely, because every later chapter leans on them.

## Conditioning and marginalising[#](#conditioning-and-marginalising "Link to this heading")

Two operations turn joint distributions into the ones you want. ****Marginalising**** integrates a variable
away; ****conditioning**** fixes it. Together they give the law of total probability:

\[p(y) = \int p(y, \theta) \, d\theta = \int p(y \mid \theta) \, p(\theta) \, d\theta .\]

This is exactly the evidence in Bayes’ rule, and the same averaging produces the ****posterior
predictive**** distribution \(p(\tilde{y} \mid y) = \int p(\tilde{y} \mid \theta) p(\theta \mid y)
\, d\theta\) — a mixture of predictions, weighted by posterior plausibility.

## Iterated expectation and variance[#](#iterated-expectation-and-variance "Link to this heading")

Summaries of a marginal can be built from summaries of conditionals, without doing the integral:

\[\mathrm{E}(u) = \mathrm{E}\bigl(\mathrm{E}(u \mid v)\bigr), \qquad
\mathrm{var}(u) = \mathrm{E}\bigl(\mathrm{var}(u \mid v)\bigr)
+ \mathrm{var}\bigl(\mathrm{E}(u \mid v)\bigr).\]

The variance decomposition is the more revealing: total uncertainty splits into the ****average
conditional uncertainty**** plus the ****uncertainty in the conditional mean****. Averaging over a parameter
you have not learned always **adds** variance — which is precisely why point estimates understate
uncertainty, and why hierarchical models must propagate it.

## Transformation of variables[#](#transformation-of-variables "Link to this heading")

Reparameterising (to \(\log \sigma\), to \(\mathrm{logit}\,\theta\)) is routine, and densities
do not simply carry over: they pick up a ****Jacobian****,

\[p\_{\phi}(\phi) = p\_{\theta}(\theta) \left| \frac{d\theta}{d\phi} \right| .\]

Forgetting the Jacobian is a classic bug — a “noninformative” flat prior on \(\theta\) is ****not****
flat on \(\log \theta\), a subtlety the noninformative-prior lesson confronts directly. Simulation
sidesteps the algebra entirely: transform the ****draws**** and summarise them.

```
import numpy as np
theta = ...                       # posterior draws
phi = np.log(theta)               # any function of the draws is itself posterior draws
phi.mean(), np.percentile(phi, [2.5, 97.5])

```

That last property — that a function of posterior draws gives the posterior of that function, with no
Jacobian and no delta method — is one of the quiet advantages of the simulation-based workflow this
course adopts.

> **Hint**
> ****Related lessons:**** [General Notation for Statistical Inference](002-general-notation-for-statistical-inference.html) · [Bayesian Inference](003-bayesian-inference.html) · [Averaging Over Nuisance Parameters](020-averaging-over-nuisance-parameters.html) · [Noninformative Prior Distributions](018-noninformative-prior-distributions.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/08/some-useful-results-from-probability-theory/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)