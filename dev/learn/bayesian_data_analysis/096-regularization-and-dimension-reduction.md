# Regularization and dimension reduction[#](#regularization-and-dimension-reduction "Link to this heading")

****Part 4 · Stage 11 · 📈 Regression Foundations**** · Lesson 096 of 144 · **advanced**

[◀ Previous · Assembling the matrix of explanatory variables](095-assembling-the-matrix-of-explanatory-variables.html) · [Next · Unequal variances and correlations ▶](097-unequal-variances-and-correlations.html)

## When there are too many predictors[#](#when-there-are-too-many-predictors "Link to this heading")

With \(k\) comparable to or larger than \(n\), least squares breaks: \(X^{\top}X\) is
singular or nearly so, coefficients are wild, and the noninformative posterior is diffuse or improper.
The Bayesian answer is not to delete predictors but to ****shrink**** them — with a prior that expresses what
you believe about their sizes.

## The ridge and lasso, and their limitation[#](#the-ridge-and-lasso-and-their-limitation "Link to this heading")

From Stage 4: a \(\mathrm{N}(0, \tau^2)\) prior on each coefficient gives ****ridge**** at the mode; a
Laplace prior gives the ****lasso****. Both apply the ****same**** amount of shrinkage to every coefficient,
governed by one global scale. That is exactly wrong when the truth is ****sparse****: a single global scale
must either shrink the null coefficients enough (and thereby crush the real signals) or preserve the
signals (and leave noise unshrunk).

## Global–local shrinkage: the horseshoe[#](#globallocal-shrinkage-the-horseshoe "Link to this heading")

The fix is a scale ****per coefficient****, drawn from a heavy-tailed distribution. The ****horseshoe**** prior
of Carvalho, Polson and Scott:

\[\beta\_j \mid \lambda\_j, \tau \sim \mathrm{N}(0, \; \tau^2 \lambda\_j^2), \qquad
\lambda\_j \sim \mathrm{C}^{+}(0, 1), \qquad \tau \sim \mathrm{C}^{+}(0, 1).\]

The ****global**** scale \(\tau\) pulls everything toward zero; the ****local**** scales \(\lambda\_j\),
with their Cauchy tails, let a genuinely large coefficient ****escape**** the shrinkage entirely. The result
is aggressive shrinkage of noise and near-zero shrinkage of signal — behaviour the lasso cannot achieve,
and achieved ****continuously****, without the discrete mixture of spike-and-slab.

```
import pymc as pm
with pm.Model():
    tau = pm.HalfCauchy("tau", 1)                       # global
    lam = pm.HalfCauchy("lam", 1, shape=k)              # local, heavy-tailed
    z = pm.Normal("z", 0, 1, shape=k)
    beta = pm.Deterministic("beta", z * lam * tau)      # non-centred: the funnel again
    pm.Normal("y", X @ beta, pm.HalfNormal("s", 1), observed=y)

```

## The horseshoe’s own pathology[#](#the-horseshoe-s-own-pathology "Link to this heading")

Those Cauchy tails create an ****extreme funnel**** in \((\tau, \lambda, \beta)\) — the geometry of Stage
9, worse — and NUTS reports divergences even on simple problems. Piironen and Vehtari’s ****regularized
horseshoe**** repairs it: a slab caps how large the escaped coefficients may be, and the prior on
\(\tau\) is set from a ****guess at the number of nonzero coefficients****, turning a vague default into
a statement of sparsity you can defend.

## Alternatives and the caveat[#](#alternatives-and-the-caveat "Link to this heading")

Principal components and other ****dimension reduction**** replace predictors with fewer combinations,
buying stability with interpretability. Whatever the route, one caution: ****regularisation is a prior****,
and a prior distorts causal estimands. Shrink the nuisance coefficients; leave the effect you came to
measure weakly informative, so the data — not the penalty — determine it.

> **See also**
> ****Related lessons:**** [Bayesian interpretations of other statistical methods](032-bayesian-interpretations-of-other-statistical-methods.html) · [Assembling the matrix of explanatory variables](095-assembling-the-matrix-of-explanatory-variables.html) · [Weakly Informative Prior Distributions](019-weakly-informative-prior-distributions.html) · [Basis selection and shrinkage of coeﬃcients](127-basis-selection-and-shrinkage-of-coefficients.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/11/23/regularization-and-dimension-reduction/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)