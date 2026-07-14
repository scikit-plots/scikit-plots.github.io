# Constructing a Parameterized Prior Distribution[#](#constructing-a-parameterized-prior-distribution "Link to this heading")

****Part 1 · Stage 5 · 🏛️ Hierarchical Models**** · Lesson 033 of 144 · **beginner**

[◀ Previous · Bayesian interpretations of other statistical methods](032-bayesian-interpretations-of-other-statistical-methods.html) · [Next · Exchangeability and hierarchical models ▶](034-exchangeability-and-hierarchical-models.html) · [↑ Section](index.html)

## Where does the prior come from?[#](#where-does-the-prior-come-from "Link to this heading")

Every analysis so far fixed the prior’s parameters by hand: \(\mathrm{Beta}(2, 8)\),
\(\mathrm{N}(0, 2.5^2)\). But in the cancer-rate example the honest answer was that the “national
rate” \(\alpha/\beta\) should have been ****learned from the counties themselves****. That single move
— treating the prior’s parameters as ****unknowns with their own distribution**** — is the whole of
hierarchical modelling.

## Hyperparameters and hyperpriors[#](#hyperparameters-and-hyperpriors "Link to this heading")

Give the prior parameters a name and a distribution. The parameters \(\phi\) of the prior
\(p(\theta \mid \phi)\) are ****hyperparameters****; the distribution \(p(\phi)\) placed over them
is a ****hyperprior****. The joint model gains a level:

\[p(\phi, \theta, y) = \underbrace{p(\phi)}\_{\text{hyperprior}}
\; \underbrace{p(\theta \mid \phi)}\_{\text{population}}
\; \underbrace{p(y \mid \theta)}\_{\text{likelihood}} .\]

Nothing new is required to fit it: condition on \(y\), and marginalise whatever you do not want.
The population distribution \(p(\theta \mid \phi)\) is now a ****prior estimated from data**** — not
circular, because it is estimated from **all** the groups jointly while each group’s \(\theta\_j\) is
informed by its own data.

## Why this is not cheating[#](#why-this-is-not-cheating "Link to this heading")

The obvious worry: are we using the data twice? No. The model is a single joint distribution written
down ****before**** seeing \(y\), and Bayes’ rule is applied once. What looks like “learning the prior”
is simply the marginal posterior \(p(\phi \mid y)\) — inference about a parameter that happens to
sit one level up. The distinction from ****empirical Bayes****, which plugs in a point estimate
\(\hat{\phi}\) and thereby understates uncertainty, is exactly the nuisance-parameter lesson: a
full Bayesian analysis ****integrates**** over \(\phi\).

```
import pymc as pm
with pm.Model():
    # hyperprior: the population's location and spread are unknowns
    mu  = pm.Normal("mu", 0, 5)
    tau = pm.HalfNormal("tau", 5)
    # population distribution: each group's parameter drawn from it
    theta = pm.Normal("theta", mu, tau, shape=J)
    pm.Normal("y", theta[group], sigma_obs, observed=y)

```

## What it buys[#](#what-it-buys "Link to this heading")

Three things, all visible in the next lessons. Estimates for data-poor groups are ****stabilised**** by
borrowing strength from the others. The ****amount**** of borrowing is not chosen by the analyst but
****inferred**** from how similar the groups turn out to be. And the uncertainty in that similarity
propagates into every group’s interval. But the construction needs a justification — why should
\(\theta\_j\) share a distribution at all? That is ****exchangeability****, and it is the next lesson.

> **Hint**
> ****Related lessons:**** [Exchangeability and hierarchical models](034-exchangeability-and-hierarchical-models.html) · [Informative Prior Distribution for Cancer Rates](017-informative-prior-distribution-for-cancer-rates.html) · [Bayesian analysis of conjugate hierarchical models](035-bayesian-analysis-of-conjugate-hierarchical-models.html) · [Averaging Over Nuisance Parameters](020-averaging-over-nuisance-parameters.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/constructing-a-parameterized-prior-distribution/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)