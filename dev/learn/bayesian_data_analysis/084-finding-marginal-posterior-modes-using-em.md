# Finding marginal posterior modes using EM[#](#finding-marginal-posterior-modes-using-em "Link to this heading")

****Part 3 · Stage 10 · 🎛️ Modal & Variational Approximation**** · Lesson 084 of 144 · **intermediate**

[◀ Previous · Normal and related mixture approximations](083-normal-and-related-mixture-approximations.html) · [Next · Conditional and marginal posterior approximations ▶](085-conditional-and-marginal-posterior-approximations.html)

## Modes of what, exactly?[#](#modes-of-what-exactly "Link to this heading")

In a hierarchical model the joint mode of \((\theta, \phi)\) — group parameters and hyperparameters
together — is often useless: it is the point where all \(\theta\_j\) equal \(\mu\) and
\(\tau = 0\), the degenerate solution of the boundary lesson. What you usually want is the
****marginal**** mode of the hyperparameters,

\[\hat{\phi} = \arg\max\_{\phi} \; p(\phi \mid y)
= \arg\max\_{\phi} \int p(\theta, \phi \mid y) \, d\theta ,\]

with the nuisance \(\theta\) ****integrated out**** rather than maximised over. The integral usually has
no closed form, and ****EM**** computes the maximiser without doing it directly.

## The algorithm[#](#the-algorithm "Link to this heading")

Treat \(\theta\) as ****missing data****. Alternate:

* ****E-step.**** Given the current \(\phi^{(t)}\), form the expected complete-data log posterior,
  averaging over the conditional distribution of the missing parameters:

  \[Q\bigl(\phi \mid \phi^{(t)}\bigr) =
  \mathrm{E}\_{\theta \mid \phi^{(t)}, y}\bigl[\log p(\theta, \phi \mid y)\bigr].\]
* ****M-step.**** Maximise \(Q\) over \(\phi\) to get \(\phi^{(t+1)}\).

Each iteration ****cannot decrease**** the marginal posterior density — the guarantee that makes EM stable
without a step size. It converges to a ****local**** mode, monotonically, from wherever it starts.

```
import numpy as np
# hierarchical normal: E-step gives E[theta_j], var[theta_j]; M-step updates mu, tau
for _ in range(n_iter):
    V = 1 / (1 / sigma**2 + 1 / tau**2)              # E-step: conditional moments
    Etheta = V * (ybar / sigma**2 + mu / tau**2)
    mu = Etheta.mean()                                # M-step: closed-form maximisers
    tau = np.sqrt(np.mean((Etheta - mu) ** 2 + V))    # note: +V, the E-step variance

```

That `+ V` is the whole point: EM adds back the ****uncertainty**** in \(\theta\), which a naive
“plug in the estimates and maximise” would discard, and which is why the resulting \(\tau\) is not
biased toward zero.

## Uses, and the ceiling[#](#uses-and-the-ceiling "Link to this heading")

EM shines where the complete-data problem is easy: mixture models (the latent component labels are the
missing data), models with censoring, factor models, and hierarchical normal models. Variants extend it
— ****ECM**** for hard M-steps, ****SEM**** for standard errors, ****MCEM**** when the E-step needs simulation.

Its ceiling is inherent. EM returns a ****point****, not a distribution: the curvature at the mode gives an
approximate covariance, but the uncertainty in \(\phi\) is not propagated into inferences about
\(\theta\), which is the empirical-Bayes understatement flagged in Stage 5. EM is the right tool when
\(n\) is large, the posterior is regular, and speed matters — and a ****starting point**** for full Bayes
otherwise.

> **See also**
> ****Related lessons:**** [Finding posterior modes](081-finding-posterior-modes.html) · [Averaging Over Nuisance Parameters](020-averaging-over-nuisance-parameters.html) · [Conditional and marginal posterior approximations](085-conditional-and-marginal-posterior-approximations.html) · [Setting up and interpreting mixture models](134-setting-up-and-interpreting-mixture-models.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/11/22/finding-marginal-posterior-modes-using-em/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)