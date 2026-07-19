# Weakly Informative Priors for Variance Parameters[#](#weakly-informative-priors-for-variance-parameters "Link to this heading")

****Part 1 · Stage 5 · 🏛️ Hierarchical Models**** · Lesson 039 of 144 · **beginner**

[◀ Previous · Hierarchical modeling applied to a meta-analysis](038-hierarchical-modeling-applied-to-a-meta-analysis.html) · [Next · The Place of Model Checking in Applied Bayesian Statistics ▶](040-the-place-of-model-checking-in-applied-bayesian-statistics.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The parameter that decides everything[#](#the-parameter-that-decides-everything "Link to this heading")

In a hierarchical model, \(\tau\) — the group-level standard deviation — governs how much the
groups pool. It is also the parameter the data constrain ****least****, especially when the number of
groups \(J\) is small (eight schools: \(J = 8\)). So the prior on \(\tau\) is not a
formality; it can decide the answer.

## Why the old default failed[#](#why-the-old-default-failed "Link to this heading")

For years the reflex was an ****inverse-gamma\*\*(:math:`epsilon, epsilon`) prior on :math:`tau^2`, with
:math:`epsilon = 0.001`, chosen because it is conjugate and “nearly noninformative”. Gelman’s 2006
analysis showed it is neither. As :math:`epsilon to 0` the prior approaches an improper limit whose
posterior may not exist; and for any small :math:`epsilon` the prior has \*\*almost no mass near zero****
while placing weight far out in the tail. When the data genuinely suggest \(\tau \approx 0\) — the
eight-schools case — this prior ****fights them****, inflating \(\tau\) and under-pooling. Worse, the
answer is sensitive to \(\epsilon\), a number chosen for its irrelevance.

## What to use instead[#](#what-to-use-instead "Link to this heading")

Put the prior on the ****standard deviation**** \(\tau\), not the variance, and choose a density that is
****positive at zero**** and has a finite scale:

* ****half-normal**** — \(\tau \sim \mathrm{N}^{+}(0, s)\), light tails, a sensible default when a rough
  scale is known;
* ****half-Cauchy**** — \(\tau \sim \mathrm{C}^{+}(0, s)\), heavy-tailed, allowing large
  \(\tau\) if the data insist while still regularising;
* ****uniform on**** \((0, A)\) — acceptable when \(J\) is large and \(A\) is generous.

```
import pymc as pm
with pm.Model():
    tau = pm.HalfNormal("tau", sigma=5)     # or pm.HalfCauchy("tau", beta=5)
    # NOT: pm.InverseGamma("tau2", alpha=0.001, beta=0.001)
    ...

```

## Scale, and honesty[#](#scale-and-honesty "Link to this heading")

The scale \(s\) is a real statement: it should be large relative to the plausible group-level
variation and small relative to absurdity. On SAT points (sd ≈ 100) a half-Cauchy(0, 5) says
between-school effects of a few points are ordinary and of fifty points are not. ****Standardise, or
scale the prior to the data.****

Two closing notes. Allowing \(\tau\) to be near zero is a ****feature**** — the model can discover that
complete pooling is right — but it creates the funnel geometry that demands the non-centred
parameterisation. And with very small \(J\) (say \(J \le 5\)), no prior is truly weak: report
the sensitivity, because the prior is doing visible work.

> **Hint**
> ****Related lessons:**** [Weakly Informative Prior Distributions](019-weakly-informative-prior-distributions.html) · [Example: parallel experiments in eight schools](037-example-parallel-experiments-in-eight-schools.html) · [Multivariate Normal with Unknown Mean and Variance](025-multivariate-normal-with-unknown-mean-and-variance.html) · [Hierarchical models for batches of variance components](105-hierarchical-models-for-batches-of-variance-components.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/10/weakly-informative-priors-for-variance-parameters/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)