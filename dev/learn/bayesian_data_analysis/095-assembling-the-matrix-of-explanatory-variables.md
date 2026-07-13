# Assembling the matrix of explanatory variables[#](#assembling-the-matrix-of-explanatory-variables "Link to this heading")

****Part 4 · Stage 11 · 📈 Regression Foundations**** · Lesson 095 of 144 · **advanced**

[◀ Previous · Goals of regression analysis](094-goals-of-regression-analysis.html) · [Next · Regularization and dimension reduction ▶](096-regularization-and-dimension-reduction.html) · [↑ Section](index.html)

## The model is in the design matrix[#](#the-model-is-in-the-design-matrix "Link to this heading")

A “linear” model is linear ****in the coefficients****, not in the predictors. Almost all of the modelling
happens when you build \(X\) — coding categories, transforming scales, forming interactions. This is
where subject knowledge enters, and where most fitted models go wrong.

## Categorical predictors[#](#categorical-predictors "Link to this heading")

A factor with \(K\) levels becomes \(K - 1\) indicator columns plus the intercept (else
\(X^{\top} X\) is singular). But the classical choice of a ****baseline**** level is arbitrary and makes
coefficients hard to interpret. When \(K\) is large — counties, schools, products — the better move
is to treat the levels as ****exchangeable**** and give them a hierarchical prior, which is exactly the
varying-intercept model of Stage 12. Indicator coding is the \(\tau \to \infty\) special case.

## Transformations[#](#transformations "Link to this heading")

Choose the scale on which the relationship is ****plausibly linear and the errors plausibly symmetric****:

* ****Logarithms**** for positive, right-skewed quantities (income, concentration, counts). A log–log
  coefficient is an ****elasticity****; a log–linear one is a proportional change per unit.
* ****Standardising**** predictors, \((x - \bar{x}) / \mathrm{sd}(x)\) — this is what makes a
  \(\mathrm{N}(0, 2.5^2)\) prior weakly informative rather than arbitrary, and it decorrelates the
  intercept from the slopes.
* ****Splines**** where the functional form is unknown (Stage 15).

## Interactions[#](#interactions "Link to this heading")

An interaction says the effect of one predictor ****depends on**** another. Include one when theory or plots
suggest it, and ****always with its main effects**** — a model with \(x\_1 x\_2\) but not \(x\_1\) makes
a claim about the origin that is almost never intended. ****Centre**** the components first, or the main
effects become conditional on \(x = 0\), a value that may not exist.

```
import numpy as np, pymc as pm
x1c = (x1 - x1.mean()) / x1.std()                  # centre and scale
x2c = (x2 - x2.mean()) / x2.std()
X = np.column_stack([np.ones_like(x1c), x1c, x2c, x1c * x2c])   # interaction + main effects
with pm.Model():
    beta = pm.Normal("beta", 0, 2.5, shape=X.shape[1])   # prior now means something
    pm.Normal("y", X @ beta, pm.HalfNormal("s", 1), observed=y)

```

## Two disciplines[#](#two-disciplines "Link to this heading")

Choose the design matrix from ****knowledge****, not from a search over \(p\)-values: stepwise selection
invalidates every inference computed afterwards. And ****check the implications****: simulate from the prior
predictive to see what data your coding and priors imply, before you look at the outcome. A design
matrix that yields absurd prior predictions is a modelling error, not a detail.

> **Hint**
> ****Related lessons:**** [Goals of regression analysis](094-goals-of-regression-analysis.html) · [Regularization and dimension reduction](096-regularization-and-dimension-reduction.html) · [Splines and weighted sums of basis functions](126-splines-and-weighted-sums-of-basis-functions.html) · [Varying intercepts and slopes](102-varying-intercepts-and-slopes.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/23/assembling-the-matrix-of-explanatory-variables/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)