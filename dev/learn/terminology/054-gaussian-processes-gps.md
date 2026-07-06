🔁  ****Gaussian Processes (GPs)****

# Gaussian Processes (GPs)[#](#gaussian-processes-gps "Link to this heading")

**A nonparametric Bayesian prior over functions that yields predictions with calibrated uncertainty.**

## The big idea[#](#the-big-idea "Link to this heading")

A ****Gaussian process (GP)**** is a ****distribution over functions****. Just as a Gaussian
over numbers is fixed by a mean and variance, a GP over functions is fixed by a ****mean
function**** and a ****covariance function (kernel)****. Rather than positing parameters
(like neural-network weights) and fitting them, a GP says directly: **here is the family
of functions I believe in, with uncertainty around it.**

## Formal definition[#](#formal-definition "Link to this heading")

\[f(x) \sim \mathcal{GP}\big(m(x),\, k(x, x')\big),\]

with mean \(m(x) = \mathbb{E}[f(x)]\) and kernel
\(k(x, x') = \operatorname{Cov}(f(x), f(x'))\). The defining property: ****any****
finite set of inputs has a joint multivariate Gaussian,

\[(f(x\_1), \dots, f(x\_n)) \sim \mathcal{N}(\mathbf{m}, K),\]

where \(K\_{ij} = k(x\_i, x\_j)\) is built from the kernel.

## Kernels encode your assumptions[#](#kernels-encode-your-assumptions "Link to this heading")

The kernel decides how correlated nearby inputs are:

* ****RBF / squared-exponential**** —
  \(k(x, x') = \exp\!\big(-\lVert x - x' \rVert^2 / 2\ell^2\big)\) — smooth
  functions, with the length-scale \(\ell\) setting how fast correlation decays.
* ****Linear**** — straight-line trends.
* ****Periodic**** — repeating patterns.

Kernels ****compose**** (sum or product) to build structure like trend + seasonality.

## Posterior inference[#](#posterior-inference "Link to this heading")

Given training data \((X, y)\) and test inputs \(X\_\*\), the GP prior makes
\(y\) and the test values \(f\_\*\) jointly Gaussian; ****conditioning**** on
\(y\) yields a Gaussian posterior over \(f\_\*\) with both a ****mean prediction****
and a ****variance****. So a GP returns a smooth curve **and** a calibrated confidence band —
uncertainty for free.

## Cost and trade-offs[#](#cost-and-trade-offs "Link to this heading")

The catch is computation: conditioning inverts an \(n \times n\) covariance matrix
at \(O(n^3)\) cost, so exact GPs suit ****small-to-medium**** data and need sparse /
inducing-point approximations to scale. Kernel choice is critical — the wrong kernel
gives poor predictions. In scikit-learn, `GaussianProcessRegressor` implements this.

## GPs and neural networks[#](#gps-and-neural-networks "Link to this heading")

A GP places uncertainty over ****functions****; a ****Bayesian neural network**** places it
over ****weights****. The two meet at a famous limit: an ****infinitely wide**** neural network
with random weights **converges to a Gaussian process**.

---

****Mind map — connected ideas****

> [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Variational Inference (VI)](056-variational-inference-vi.html) · [Posterior](063-posterior.html) · [Bayesian Inference.](375-bayesian-inference.html)

---

****More in Bayesian Inference****

> [Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Gaussian Processes (GPs)](https://insightful-data-lab.com/2025/08/29/gaussian-processes-gps/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)