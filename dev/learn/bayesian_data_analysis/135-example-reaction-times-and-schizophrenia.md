# Example: reaction times and schizophrenia[#](#example-reaction-times-and-schizophrenia "Link to this heading")

****Part 5 · Stage 16 · ♾️ Mixtures & Nonparametric Bayes**** · Lesson 135 of 144 · **advanced**

[◀ Previous · Setting up and interpreting mixture models](134-setting-up-and-interpreting-mixture-models.html) · [Next · Label switching and posterior computation ▶](136-label-switching-and-posterior-computation.html) · [↑ Section](index.html)

## A mixture with a scientific meaning[#](#a-mixture-with-a-scientific-meaning "Link to this heading")

Not every mixture is a mere density approximation — sometimes the components are ****real and
interpretable****. A study of reaction times, comparing schizophrenic patients with a control group,
provides the archetype: the mixture structure encodes a genuine hypothesis about how the mind produces
the data.

## The finding, and the model[#](#the-finding-and-the-model "Link to this heading")

Schizophrenic patients show more variable reaction times than controls, but the excess is not a uniform
slowing. The data suggest that on ****most**** trials a patient responds like a control, while on a
****minority**** of trials an attentional lapse produces a much slower response. That is a ****mixture within
each patient****: two components, a “normal” reaction-time distribution and a “delayed” one, with a
patient-specific probability of lapsing.

\[y\_{ij} \sim \lambda\_i \, \mathrm{N}(\mu\_i, \sigma^2)
+ (1 - \lambda\_i) \, \mathrm{N}(\mu\_i + \tau, \sigma^2),\]

where \(\lambda\_i\) is patient \(i\)’s probability of a normal (non-lapse) response and
\(\tau > 0\) the extra delay when attention lapses. The parameters carry meaning: \(\tau\) is the
size of a lapse, \(\lambda\_i\) how often patient \(i\) lapses.

```
import pymc as pm
with pm.Model():
    # hierarchical: each patient's lapse probability, pooled across patients
    lam = pm.Beta("lam", 2, 2, shape=n_patients)         # P(normal response)
    mu = pm.Normal("mu", 0, 5, shape=n_patients)
    tau = pm.HalfNormal("tau", 5)                         # lapse delay (ordered => identified)
    w = pm.math.stack([lam[pid], 1 - lam[pid]], axis=1)
    comp = [pm.Normal.dist(mu[pid], sigma), pm.Normal.dist(mu[pid] + tau, sigma)]
    pm.Mixture("y", w=w, comp_dists=comp, observed=rt)

```

## Why this example matters[#](#why-this-example-matters "Link to this heading")

Three points. The components are ****substantive****, not basis elements — “normal response” and
“attentional lapse” are the hypothesis, and \(\lambda\_i\), \(\tau\) are the quantities of
scientific interest. The ****hierarchy**** ties it to the rest of the book: lapse probabilities are pooled
across patients, so a patient with few trials borrows strength. And the ordering \(\tau > 0\)
****identifies**** the components — the delayed component is, by construction, the slower one — which
sidesteps the label-switching problem the next lesson tackles in general. A mixture, here, is a ****model of
a mechanism****: two cognitive states, their sizes and frequencies estimated from response times.

> **Hint**
> ****Related lessons:**** [Setting up and interpreting mixture models](134-setting-up-and-interpreting-mixture-models.html) · [Label switching and posterior computation](136-label-switching-and-posterior-computation.html) · [Exchangeability and hierarchical models](034-exchangeability-and-hierarchical-models.html) · [Mixture models for classification and regression](138-mixture-models-for-classification-and-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/09/example-reaction-times-and-schizophrenia/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)