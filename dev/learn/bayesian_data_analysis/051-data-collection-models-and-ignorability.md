# Data-collection models and ignorability[#](#data-collection-models-and-ignorability "Link to this heading")

****Part 2 · Stage 7 · 🗳️ Data Collection & Decisions**** · Lesson 051 of 144 · **intermediate**

[◀ Previous · Bayesian inference requires a model for data collection](050-bayesian-inference-requires-a-model-for-data-collection.html) · [Next · Sample surveys ▶](052-sample-surveys.html) · [↑ Section](index.html)

## When can the design be ignored?[#](#when-can-the-design-be-ignored "Link to this heading")

The previous lesson wrote the joint model \(p(y \mid \theta) \, p(I \mid y, \phi)\). Ignorability
is the precise statement of when the second factor can be ****dropped**** — when the posterior obtained from
modelling \(y\) alone equals the posterior obtained from modelling \(y\) ****and**** \(I\).

## Two conditions[#](#two-conditions "Link to this heading")

Ignorability requires ****both****:

* ****Missing at random (MAR).**** The inclusion mechanism does not depend on the values you failed to
  observe, given the ones you did:

  \[p(I \mid y\_{\text{obs}}, y\_{\text{mis}}, \phi) = p(I \mid y\_{\text{obs}}, \phi).\]
* ****Parameter distinctness.**** The parameters \(\theta\) of the data model and \(\phi\) of the
  mechanism are ****a priori independent****, \(p(\theta, \phi) = p(\theta) p(\phi)\).

Grant both, and the mechanism contributes a factor free of \(\theta\) that cancels in the
normalisation. The likelihood you wanted to use is the one you may use.

## The hierarchy of mechanisms[#](#the-hierarchy-of-mechanisms "Link to this heading")

* ****MCAR**** (missing completely at random) — \(I\) is independent of the data altogether; a simple
  random sample. Strong, and rarely true.
* ****MAR**** — \(I\) may depend on ****observed**** quantities: sampling more heavily in some strata, or
  non-response predicted by recorded covariates. Ignorable, **provided those quantities are in the
  model**.
* ****MNAR**** (missing not at random) — \(I\) depends on the unobserved values themselves: people with
  high incomes decline to state their income. ****Not ignorable****; the mechanism must be modelled, and the
  answer will depend on assumptions the data cannot check.

## The practical corollary[#](#the-practical-corollary "Link to this heading")

MAR is a statement about a ****model****, not about the world: a mechanism that is non-ignorable given no
covariates can become ignorable once the variables driving selection are ****included as predictors****.
This is the single most useful fact in the chapter — it is why survey analyses must include the design
variables (strata, cluster, weights’ determinants), and why omitting them silently converts an
ignorable design into a biased analysis.

```
import pymc as pm
# Non-response depends on age and region (both recorded) -> MAR *if* they are in the model.
with pm.Model():
    beta = pm.Normal("beta", 0, 2.5, shape=X.shape[1])   # X includes age, region, strata
    pm.Bernoulli("y", logit_p=X @ beta, observed=y_obs)
    # omit those columns and the same design becomes non-ignorable

```

Randomisation, then, is not a ritual: assigning treatment by a coin flip makes \(I\) depend on
nothing but a known probability, guaranteeing ignorability ****by design**** rather than by assumption.

> **Hint**
> ****Related lessons:**** [Bayesian inference requires a model for data collection](050-bayesian-inference-requires-a-model-for-data-collection.html) · [Sensitivity and the role of randomization](054-sensitivity-and-the-role-of-randomization.html) · [Observational studies](055-observational-studies.html) · [Multiple imputation](119-multiple-imputation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/11/data-collection-models-and-ignorability/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)