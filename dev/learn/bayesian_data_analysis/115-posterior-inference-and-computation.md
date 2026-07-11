# Posterior inference and computation[#](#posterior-inference-and-computation "Link to this heading")

****Part 4 · Stage 14 · 🛡️ Robustness & Missing Data**** · Lesson 115 of 144 · **advanced**

[◀ Previous · Overdispersed versions of standard models](114-overdispersed-versions-of-standard-models.html) · [Next · Robust inference for the eight schools ▶](116-robust-inference-for-the-eight-schools.html)

## Fitting robust models[#](#fitting-robust-models "Link to this heading")

Heavy-tailed and overdispersed likelihoods are more expressive, and modestly harder to compute.
Two techniques — one classical, one modern — make them routine, and the classical one reveals **why** the
Student-\(t\) works.

## The t as a scale mixture of normals[#](#the-t-as-a-scale-mixture-of-normals "Link to this heading")

The key representation: a Student-\(t\) is a ****normal whose variance is itself random****, drawn from
an inverse-gamma (equivalently, a normal whose precision is Gamma). Introduce a per-observation scale
\(\lambda\_i\):

\[y\_i \mid \lambda\_i \sim \mathrm{N}(\mu, \sigma^2 / \lambda\_i), \qquad
\lambda\_i \sim \mathrm{Gamma}(\nu/2, \nu/2)
\quad \Longrightarrow \quad y\_i \sim t\_\nu(\mu, \sigma).\]

This is not just a computational trick; it is the ****mechanism of robustness made visible****. Each
\(\lambda\_i\) is a weight, and an outlier is simply an observation whose posterior \(\lambda\_i\)
is ****small**** — its variance inflates, so it pulls on \(\mu\) weakly. The model down-weights
aberrant points **automatically**, and the weights are readable: a small \(\lambda\_i\) flags exactly
which observations the model treated as outliers.

```
import pymc as pm
# explicit scale-mixture form: the lambda_i ARE the outlier weights
with pm.Model():
    nu = pm.Gamma("nu", 2, 0.1)
    lam = pm.Gamma("lam", nu / 2, nu / 2, shape=n)       # per-obs weights
    sigma = pm.HalfNormal("sigma", 1)
    pm.Normal("y", mu=X @ beta, sigma=sigma / pm.math.sqrt(lam), observed=y)
    # posterior mean of lam[i] << 1  <=>  observation i is an outlier

```

With augmentation, every conditional is standard, so ****Gibbs**** samples the model directly — the classical
route, and the reason robust models were tractable before HMC. In modern practice you simply write the
\(t\) and let ****NUTS**** handle it; the mixture form is then a diagnostic and an explanation rather
than a necessity.

## Computational cautions[#](#computational-cautions "Link to this heading")

Two recur. The degrees of freedom \(\nu\) is often ****weakly identified**** — data rarely pin down tail
weight precisely — so it needs a sensible prior (a Gamma keeping \(\nu\) away from zero) and should
be reported with its full, often wide, posterior. And heavy-tailed models can induce ****funnel**** geometry
between \(\nu\), the scales, and the coefficients, so the non-centred parameterisation and the
divergence diagnostics of Stage 9 apply here too.

## The payoff[#](#the-payoff "Link to this heading")

Robust computation costs little beyond a standard fit and returns two things: estimates that ****do not
lurch**** when one point is extreme, and an explicit account — through the weights \(\lambda\_i\) or the
posterior of \(\nu\) — of **how much** robustness the data actually demanded. The next lesson puts the
whole apparatus to work on a familiar dataset.

> **See also**
> ****Related lessons:**** [Overdispersed versions of standard models](114-overdispersed-versions-of-standard-models.html) · [Robust regression using t-distributed errors](117-robust-regression-using-t-distributed-errors.html) · [Gibbs sampler](069-gibbs-sampler.html) · [Robust inference for the eight schools](116-robust-inference-for-the-eight-schools.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/12/07/posterior-inference-and-computation/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)