# Overdispersed versions of standard models[#](#overdispersed-versions-of-standard-models "Link to this heading")

****Part 4 · Stage 14 · 🛡️ Robustness & Missing Data**** · Lesson 114 of 144 · **advanced**

[◀ Previous · Aspects of robustness](113-aspects-of-robustness.html) · [Next · Posterior inference and computation ▶](115-posterior-inference-and-computation.html)

## Adding a tail to every likelihood[#](#adding-a-tail-to-every-likelihood "Link to this heading")

The standard likelihoods — normal, Poisson, binomial — each impose a ****rigid variance****. Robustness is
bought by relaxing that rigidity: replace each with an ****overdispersed**** version carrying an extra
parameter that lets the tails or the variance grow. The pattern is uniform across families.

## The normal to the t[#](#the-normal-to-the-t "Link to this heading")

For continuous data, replace the normal with the ****Student-****\(t\), whose degrees of freedom
\(\nu\) tune tail weight:

\[y\_i \sim t\_\nu(\mu, \sigma), \qquad \nu > 0.\]

Small \(\nu\) gives heavy tails that tolerate outliers; large \(\nu\) recovers the normal (the
\(t\) converges to it as \(\nu \to \infty\)). Estimating \(\nu\) lets the data decide ****how
heavy-tailed**** they are — a self-diagnosing robustness.

## Poisson and binomial, overdispersed[#](#poisson-and-binomial-overdispersed "Link to this heading")

The count families gain a variance parameter the same way. The ****negative binomial**** is a Poisson whose
rate is itself Gamma-distributed, giving variance that ****exceeds**** the mean by a controllable amount —
the closed-form counterpart of the log-normal error added by hand in the police-stops lesson. The
****beta-binomial**** does the same for the binomial, letting the success probability vary across trials.

```
import pymc as pm
# robust continuous: Student-t with estimated tail weight
with pm.Model():
    nu = pm.Gamma("nu", 2, 0.1)                          # degrees of freedom, >~ 1
    pm.StudentT("y", nu=nu, mu=X @ beta, sigma=sigma, observed=y)

# overdispersed counts: negative binomial
with pm.Model():
    mu = pm.math.exp(X @ beta)
    alpha = pm.Exponential("alpha", 1)                   # dispersion; Poisson as alpha -> inf
    pm.NegativeBinomial("y", mu=mu, alpha=alpha, observed=counts)

```

## Nested, so testable[#](#nested-so-testable "Link to this heading")

The elegance is that the standard model is a ****special case**** of its overdispersed version — Poisson is
negative-binomial with infinite dispersion, normal is \(t\) with infinite \(\nu\). So fitting
the richer model and inspecting the extra parameter’s posterior is a ****direct test**** of the restrictive
assumption: if \(\nu\) is estimated small, the data are heavy-tailed and the normal was wrong; if the
negative-binomial dispersion is large, Poisson was adequate. You never have to choose in advance —
embed the standard model in its generalisation and let the posterior report which you needed.

## The unifying idea[#](#the-unifying-idea "Link to this heading")

Each overdispersed model adds ****one parameter**** for the variance the standard model fixed by fiat, and
partial pooling of that parameter connects straight back to the hierarchical stage: the police-stops
model **built** overdispersion from a normal error term, while the negative binomial **packages** the same
idea in closed form. Robustness, here, is just refusing to let a convenient distribution dictate how much
your data are allowed to vary.

> **See also**
> ****Related lessons:**** [Aspects of robustness](113-aspects-of-robustness.html) · [Posterior inference and computation](115-posterior-inference-and-computation.html) · [Overdispersed Poisson regression for police stops](109-overdispersed-poisson-regression-for-police-stops.html) · [Robust regression using t-distributed errors](117-robust-regression-using-t-distributed-errors.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/12/07/overdispersed-versions-of-standard-models/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)