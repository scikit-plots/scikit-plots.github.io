# Normal model with exchangeable parameters[#](#normal-model-with-exchangeable-parameters "Link to this heading")

****Part 1 · Stage 5 · 🏛️ Hierarchical Models**** · Lesson 036 of 144 · **beginner**

[◀ Previous · Bayesian analysis of conjugate hierarchical models](035-bayesian-analysis-of-conjugate-hierarchical-models.html) · [Next · Example: parallel experiments in eight schools ▶](037-example-parallel-experiments-in-eight-schools.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The hierarchical normal[#](#the-hierarchical-normal "Link to this heading")

Replace binomial groups with normal ones and the hierarchy becomes fully transparent — every quantity
has a closed form, and the mechanics of shrinkage can be read off directly. Each of \(J\) groups
supplies an estimate \(\bar{y}\_j\) of its own mean \(\theta\_j\), with ****known**** standard error
\(\sigma\_j\):

\[\bar{y}\_j \mid \theta\_j \sim \mathrm{N}(\theta\_j, \sigma\_j^2), \qquad
\theta\_j \mid \mu, \tau \sim \mathrm{N}(\mu, \tau^2), \qquad
(\mu, \tau) \sim p(\mu, \tau).\]

Here \(\mu\) is the ****population mean**** and \(\tau\) the ****between-group standard deviation****:
how different the groups really are.

## Shrinkage, in closed form[#](#shrinkage-in-closed-form "Link to this heading")

Conditional on \((\mu, \tau)\), each group’s posterior is the Stage 2 normal update — precisions
add, and the mean is precision-weighted:

\[\theta\_j \mid \mu, \tau, y \;\sim\; \mathrm{N}(\hat{\theta}\_j,\; V\_j), \qquad
\hat{\theta}\_j = \frac{\frac{1}{\sigma\_j^2}\bar{y}\_j + \frac{1}{\tau^2}\mu}
{\frac{1}{\sigma\_j^2} + \frac{1}{\tau^2}}, \qquad
\frac{1}{V\_j} = \frac{1}{\sigma\_j^2} + \frac{1}{\tau^2}.\]

Define the ****shrinkage factor**** \(B\_j = \sigma\_j^2 / (\sigma\_j^2 + \tau^2)\); then
\(\hat{\theta}\_j = (1 - B\_j)\, \bar{y}\_j + B\_j\, \mu\). A noisy group (large \(\sigma\_j\)) has
\(B\_j\) near 1 and is pulled almost entirely to the population mean; a precise group keeps its own
estimate. And crucially, \(\tau\) is ****not chosen**** — it is inferred, so the data decide how much
pooling is warranted.

## The whole model in code[#](#the-whole-model-in-code "Link to this heading")

```
import pymc as pm
with pm.Model():
    mu  = pm.Normal("mu", 0, 10)
    tau = pm.HalfNormal("tau", 10)               # weakly informative; never inverse-gamma(eps,eps)
    theta = pm.Normal("theta", mu, tau, shape=J)
    pm.Normal("y", theta, sigma=sigma_j, observed=ybar)   # sigma_j known
    idata = pm.sample(target_accept=0.95)

```

## Two warnings[#](#two-warnings "Link to this heading")

When \(\tau\) is near ****zero****, the posterior sits at a boundary — the counterexample from Stage 4 —
and the geometry becomes a funnel that samplers negotiate badly; the standard repair is the
****non-centred**** parameterisation, \(\theta\_j = \mu + \tau \eta\_j\) with
\(\eta\_j \sim \mathrm{N}(0,1)\). And the prior on \(\tau\) ****matters****, especially with few
groups: with \(J = 8\), a careless inverse-gamma can dominate. Both issues are met head-on in the
eight-schools example that follows.

> **Hint**
> ****Related lessons:**** [Normal Distribution with Known Variance](015-normal-distribution-with-known-variance.html) · [Exchangeability and hierarchical models](034-exchangeability-and-hierarchical-models.html) · [Example: parallel experiments in eight schools](037-example-parallel-experiments-in-eight-schools.html) · [Weakly Informative Priors for Variance Parameters](039-weakly-informative-priors-for-variance-parameters.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/normal-model-with-exchangeable-parameters/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)