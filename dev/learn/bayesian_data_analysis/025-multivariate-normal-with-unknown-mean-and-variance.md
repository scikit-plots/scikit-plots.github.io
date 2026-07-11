# Multivariate Normal with Unknown Mean and Variance[#](#multivariate-normal-with-unknown-mean-and-variance "Link to this heading")

****Part 1 · Stage 3 · 🧮 Multiparameter Models**** · Lesson 025 of 144 · **beginner**

[◀ Previous · Multivariate Normal Model with Known Variance](024-multivariate-normal-model-with-known-variance.html) · [Next · Example: Bayesian analysis of a bioassay experiment (logistic, nonconjugate) ▶](026-example-bayesian-analysis-of-a-bioassay-experiment-logistic-nonconjugate.html)

## The full multivariate model[#](#the-full-multivariate-model "Link to this heading")

Drop the fiction that \(\Sigma\) is known. With \(y\_i \sim \mathrm{N}(\theta, \Sigma)\) and
both unknown, the conjugate prior is the matrix version of the normal–inverse-\(\chi^2\) from
earlier in this stage: a ****normal–inverse-Wishart****,

\[\Sigma \sim \text{Inv-Wishart}(\nu\_0, \Lambda\_0^{-1}), \qquad
\theta \mid \Sigma \sim \mathrm{N}\!\left(\mu\_0,\, \frac{\Sigma}{\kappa\_0}\right).\]

Again the mean’s prior is scaled by the very covariance being estimated, and again \(\kappa\_0\)
and \(\nu\_0\) are ****equivalent sample sizes**** — for the mean and for the covariance respectively.

## The update[#](#the-update "Link to this heading")

Conjugacy holds, and the hyperparameters update by addition exactly as in the scalar case:

\[\kappa\_n = \kappa\_0 + n, \qquad \nu\_n = \nu\_0 + n, \qquad
\mu\_n = \frac{\kappa\_0 \mu\_0 + n \bar{y}}{\kappa\_0 + n},\]\[\Lambda\_n = \Lambda\_0 + S + \frac{\kappa\_0 n}{\kappa\_0 + n}
(\bar{y} - \mu\_0)(\bar{y} - \mu\_0)^{\top},\]

where \(S = \sum\_i (y\_i - \bar{y})(y\_i - \bar{y})^{\top}\). The last term is the multivariate
****conflict detector****: prior–data disagreement about the mean inflates the posterior covariance.
Marginalising \(\Sigma\) gives a ****multivariate**** \(t\) for \(\theta\), the vector analogue
of the scalar result.

## Why the inverse-Wishart disappoints[#](#why-the-inverse-wishart-disappoints "Link to this heading")

The inverse-Wishart is conjugate, guarantees positive-definiteness, and makes Gibbs sampling trivial —
which is why it dominated Bayesian software for decades. It is also, in Gelman’s own later assessment,
a ****poor default****. A **single** degrees-of-freedom parameter \(\nu\_0\) controls the certainty of
****every**** variance at once; the implied marginal for each variance has ****little density near zero****,
biasing small variances upward; and it forces an ****a priori dependence between correlations and
variances**** that nobody believes.

## The modern alternative[#](#the-modern-alternative "Link to this heading")

Modern practice decomposes \(\Sigma\) into ****scales**** and a ****correlation matrix****, giving each its
own prior — an ****LKJ**** prior on the correlations, half-normal or half-Cauchy on the standard
deviations:

```
import pymc as pm
with pm.Model():
    sd = pm.HalfNormal("sd", sigma=1, shape=d)             # scales, separately
    chol, corr, _ = pm.LKJCholeskyCov("Sigma", n=d, eta=2,  # correlations, separately
                                       sd_dist=pm.HalfNormal.dist(1))
    pm.MvNormal("y", mu=theta, chol=chol, observed=Y)

```

Conjugacy bought tractability when computation was scarce. With HMC available, the honest prior wins —
a theme that recurs whenever Part I’s closed forms meet Part III’s samplers.

> **See also**
> ****Related lessons:**** [Multivariate Normal Model with Known Variance](024-multivariate-normal-model-with-known-variance.html) · [Normal Data with a Conjugate Prior Distribution](022-normal-data-with-a-conjugate-prior-distribution.html) · [Weakly Informative Priors for Variance Parameters](039-weakly-informative-priors-for-variance-parameters.html) · [Hierarchical models for batches of variance components](105-hierarchical-models-for-batches-of-variance-components.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/11/09/multivariate-normal-with-unknown-mean-and-variance/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)