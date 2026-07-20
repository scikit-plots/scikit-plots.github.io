# Hierarchical modeling applied to a meta-analysis[#](#hierarchical-modeling-applied-to-a-meta-analysis "Link to this heading")

****Part 1 · Stage 5 · 🏛️ Hierarchical Models**** · Lesson 038 of 144 · **beginner**

[◀ Previous · Example: parallel experiments in eight schools](037-example-parallel-experiments-in-eight-schools.html) · [Next · Weakly Informative Priors for Variance Parameters ▶](039-weakly-informative-priors-for-variance-parameters.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The same model, a different name[#](#the-same-model-a-different-name "Link to this heading")

****Meta-analysis**** combines results from separate studies of the same question — a drug trial run in
twelve hospitals, a treatment tested in a dozen papers. Each study reports an effect estimate and a
standard error. That is precisely the eight-schools structure, and the Bayesian hierarchical model is
the ****random-effects meta-analysis**** familiar to medicine, arrived at from first principles rather than
by convention.

## The model[#](#the-model "Link to this heading")

Study \(j\) estimates \(y\_j\) of its own true effect \(\theta\_j\), with within-study error
\(\sigma\_j\) treated as known; the true effects are exchangeable draws around a population effect:

\[y\_j \mid \theta\_j \sim \mathrm{N}(\theta\_j, \sigma\_j^2), \qquad
\theta\_j \mid \mu, \tau \sim \mathrm{N}(\mu, \tau^2).\]

Here \(\mu\) is the ****overall effect**** and \(\tau\) the ****between-study heterogeneity****. Classical
meta-analysis calls \(\tau = 0\) the **fixed-effect** model and \(\tau > 0\) the **random-effects**
model, then chooses between them by a test. The Bayesian analysis does not choose: it ****estimates****
\(\tau\) and averages over its uncertainty.

## Why that matters[#](#why-that-matters "Link to this heading")

Two payoffs follow. First, the pooled effect’s interval ****widens honestly**** when studies disagree,
because uncertainty in \(\tau\) propagates into \(\mu\) — a plug-in \(\hat{\tau}\) (the
DerSimonian–Laird estimator, say) understates it, and badly so when \(J\) is small. Second, each
study gets a ****shrunken**** estimate \(\theta\_j\), so a small outlying trial is not read literally.
And a genuinely new quantity comes free: the ****predictive**** effect in a **future** study,
\(\tilde{\theta} \sim \mathrm{N}(\mu, \tau^2)\), which is what a clinician deciding for the next
patient actually needs — always wider than the interval for \(\mu\).

```
import pymc as pm
with pm.Model():
    mu  = pm.Normal("mu", 0, 1)                  # scale: log odds ratio
    tau = pm.HalfNormal("tau", 0.5)              # heterogeneity, weakly informative
    eta = pm.Normal("eta", 0, 1, shape=J)
    theta = pm.Deterministic("theta", mu + tau * eta)
    pm.Normal("y", theta, sigma=se, observed=y)  # se = within-study standard errors
    # effect in a new study:
    theta_new = pm.Normal("theta_new", mu, tau)
    idata = pm.sample(target_accept=0.9)

```

## The assumption worth interrogating[#](#the-assumption-worth-interrogating "Link to this heading")

Everything rests on ****exchangeability of the studies****. If trials differ systematically — dose,
population, decade, industry funding — they are not exchangeable as they stand, and pooling them
averages apples with oranges. The repair is the one from the exchangeability lesson: model the known
differences as ****covariates**** (a hierarchical **meta-regression**) and assume exchangeability of what
remains. Publication bias is a harder problem still: it corrupts the likelihood itself, and no prior
fixes a biased sample of studies.

> **Hint**
> ****Related lessons:**** [Example: parallel experiments in eight schools](037-example-parallel-experiments-in-eight-schools.html) · [Exchangeability and hierarchical models](034-exchangeability-and-hierarchical-models.html) · [Normal model with exchangeable parameters](036-normal-model-with-exchangeable-parameters.html) · [Robust inference for the eight schools](116-robust-inference-for-the-eight-schools.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/10/hierarchical-modeling-applied-to-a-meta-analysis/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)