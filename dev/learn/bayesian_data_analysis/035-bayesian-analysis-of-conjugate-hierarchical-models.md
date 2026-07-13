# Bayesian analysis of conjugate hierarchical models[#](#bayesian-analysis-of-conjugate-hierarchical-models "Link to this heading")

****Part 1 · Stage 5 · 🏛️ Hierarchical Models**** · Lesson 035 of 144 · **beginner**

[◀ Previous · Exchangeability and hierarchical models](034-exchangeability-and-hierarchical-models.html) · [Next · Normal model with exchangeable parameters ▶](036-normal-model-with-exchangeable-parameters.html) · [↑ Section](index.html)

## The rat tumours[#](#the-rat-tumours "Link to this heading")

The canonical worked example: \(J = 71\) historical laboratory experiments, each reporting
\(y\_j\) rats developing tumours out of \(n\_j\). Some experiments are tiny. Estimating each rate
separately gives wild answers (an experiment with 0 of 5 suggests a rate of exactly zero); pooling them
all into one rate denies that experiments differ. Exchangeability says: model the rates as drawn from a
****common population distribution****.

## The three-level model[#](#the-three-level-model "Link to this heading")

Binomial likelihood, Beta population, hyperprior on the Beta’s parameters:

\[y\_j \mid \theta\_j \sim \mathrm{Binomial}(n\_j, \theta\_j), \qquad
\theta\_j \mid \alpha, \beta \sim \mathrm{Beta}(\alpha, \beta), \qquad
(\alpha, \beta) \sim p(\alpha, \beta) .\]

Because the Beta is conjugate to the binomial, the ****conditional**** posterior of each group is immediate:

\[\theta\_j \mid \alpha, \beta, y \;\sim\; \mathrm{Beta}(\alpha + y\_j,\; \beta + n\_j - y\_j),\]

which makes \(\mathrm{E}[\theta\_j \mid \alpha, \beta, y]\) the familiar weighted average of the
group’s own rate \(y\_j/n\_j\) and the population mean \(\alpha/(\alpha+\beta)\) — with the
population now acting as a ****prior estimated from all 71 experiments****. Small experiments are pulled
hard toward the population; large ones barely move.

## Two levels, two computations[#](#two-levels-two-computations "Link to this heading")

The hyperparameters are handled by marginalising the group parameters analytically (conjugacy again),
leaving a two-dimensional marginal posterior \(p(\alpha, \beta \mid y)\) that can be evaluated on a
****grid**** — exactly the bioassay trick. Then draw \((\alpha, \beta)\), and draw each
\(\theta\_j\) from its conditional Beta. Modern practice simply hands the whole thing to a sampler:

```
import pymc as pm
with pm.Model():
    # hyperprior on population mean and "prior sample size"
    mu  = pm.Beta("mu", 1, 1)                    # population mean rate
    kap = pm.HalfNormal("kappa", 50)             # concentration = alpha + beta
    theta = pm.Beta("theta", mu * kap, (1 - mu) * kap, shape=J)
    pm.Binomial("y", n=n, p=theta, observed=y)
    idata = pm.sample()

```

## Choosing the hyperprior[#](#choosing-the-hyperprior "Link to this heading")

One trap deserves naming. A flat prior on \((\alpha, \beta)\) is ****improper**** and yields an
****improper posterior**** — the concentration \(\alpha + \beta\) runs off to infinity. Gelman
reparameterises to the population mean \(\alpha/(\alpha+\beta)\) and a transformed concentration,
placing a proper prior there. The lesson from Stage 2 returns with teeth: for hierarchical variance and
concentration parameters, ****check propriety****, and prefer weakly informative hyperpriors.

> **Hint**
> ****Related lessons:**** [Estimating a Probability from Binomial Data](011-estimating-a-probability-from-binomial-data.html) · [Constructing a Parameterized Prior Distribution](033-constructing-a-parameterized-prior-distribution.html) · [Normal model with exchangeable parameters](036-normal-model-with-exchangeable-parameters.html) · [Informative Prior Distribution for Cancer Rates](017-informative-prior-distribution-for-cancer-rates.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/bayesian-analysis-of-conjugate-hierarchical-models/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)