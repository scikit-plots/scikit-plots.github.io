# Normal Data with a Conjugate Prior Distribution[#](#normal-data-with-a-conjugate-prior-distribution "Link to this heading")

****Part 1 · Stage 3 · 🧮 Multiparameter Models**** · Lesson 022 of 144 · **beginner**

[◀ Previous · Normal Data with a Noninformative Prior Distribution](021-normal-data-with-a-noninformative-prior-distribution.html) · [Next · Multinomial Model for Categorical Data ▶](023-multinomial-model-for-categorical-data.html) · [↑ Section](index.html)

## Prior information on both[#](#prior-information-on-both "Link to this heading")

To bring real prior knowledge to the normal model, the conjugate choice is the
****normal–inverse-****\(\chi^2\) family, specified hierarchically — the prior for the mean is scaled
by the very variance it accompanies:

\[\mu \mid \sigma^2 \sim \mathrm{N}\!\left(\mu\_0,\, \frac{\sigma^2}{\kappa\_0}\right),
\qquad
\sigma^2 \sim \text{Inv-}\chi^2(\nu\_0,\, \sigma\_0^2).\]

Four hyperparameters carry four meanings: \(\mu\_0\) a prior mean, \(\kappa\_0\) how many
observations that mean is worth; \(\sigma\_0^2\) a prior variance, \(\nu\_0\) how many
observations **it** is worth.

## The update adds counts[#](#the-update-adds-counts "Link to this heading")

Conjugacy delivers a posterior in the same family, with hyperparameters that update by ****addition****:

\[\kappa\_n = \kappa\_0 + n, \qquad \nu\_n = \nu\_0 + n, \qquad
\mu\_n = \frac{\kappa\_0\, \mu\_0 + n\, \bar{y}}{\kappa\_0 + n},\]

so \(\mu\_n\) is the familiar weighted average, with \(\kappa\_0\) acting as an ****equivalent
sample size**** for the prior mean. The posterior scale \(\sigma\_n^2\) combines three ingredients:
the prior sum of squares, the sample sum of squares, and a term
\(\frac{\kappa\_0 n}{\kappa\_0 + n}(\bar{y} - \mu\_0)^2\) that ****inflates the variance when the data
and the prior disagree**** — a built-in conflict detector.

## Marginals, and the limit[#](#marginals-and-the-limit "Link to this heading")

Marginalising \(\sigma^2\) again yields a \(t\), now centred between prior and data:

\[\mu \mid y \;\sim\; t\_{\,\nu\_n}\!\left(\mu\_n,\; \frac{\sigma\_n^2}{\kappa\_n}\right).\]

Setting \(\kappa\_0 \to 0\) and \(\nu\_0 \to -1\) recovers the noninformative
\(p(\mu, \sigma^2) \propto 1/\sigma^2\) of the previous lesson: the flat prior is the ****limiting
case**** of the conjugate one, carrying zero pseudo-observations.

```
mu0, k0, nu0, s0sq = 5.0, 2, 2, 0.25       # prior: mean worth 2 obs, var worth 2 obs
n, ybar, s2 = len(y), y.mean(), y.var(ddof=1)
kn, nun = k0 + n, nu0 + n
mun = (k0 * mu0 + n * ybar) / kn
snsq = (nu0 * s0sq + (n - 1) * s2 + k0 * n / kn * (ybar - mu0) ** 2) / nun

```

## Convenient, but coupled[#](#convenient-but-coupled "Link to this heading")

The tidy algebra has a cost worth naming: this prior ****couples**** \(\mu\) and \(\sigma^2\) — a
belief about the mean is expressed in units of the unknown variance. If that dependence is not
something you actually believe, the conjugate family is buying convenience at the price of realism, and
a non-conjugate prior fitted by MCMC is the more honest route.

> **Hint**
> ****Related lessons:**** [Normal Data with a Noninformative Prior Distribution](021-normal-data-with-a-noninformative-prior-distribution.html) · [Informative Prior Distributions](014-informative-prior-distributions.html) · [Normal Distribution with Known Variance](015-normal-distribution-with-known-variance.html) · [Multivariate Normal with Unknown Mean and Variance](025-multivariate-normal-with-unknown-mean-and-variance.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/normal-data-with-a-conjugate-prior-distribution/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)