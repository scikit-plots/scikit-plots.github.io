# Normal Approximations to the Posterior Distribution[#](#normal-approximations-to-the-posterior-distribution "Link to this heading")

****Part 1 · Stage 4 · 📏 Asymptotics & Frequentist Ties**** · Lesson 028 of 144 · **beginner**

[◀ Previous · Summary of Elementary Modeling and Computation](027-summary-of-elementary-modeling-and-computation.html) · [Next · Large-Sample Theory ▶](029-large-sample-theory.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## A quadratic on the log scale[#](#a-quadratic-on-the-log-scale "Link to this heading")

Posteriors are often awkward; ****normal**** distributions are not. The ****normal (Laplace)
approximation**** exploits a happy fact: near its peak, a smooth log-posterior looks like a downward
parabola. Expand \(\log p(\theta \mid y)\) in a Taylor series about the ****posterior mode****
\(\hat{\theta}\), where the gradient vanishes:

\[\log p(\theta \mid y) \;\approx\; \log p(\hat{\theta} \mid y)
- \tfrac{1}{2} (\theta - \hat{\theta})^{\top} I(\hat{\theta}) (\theta - \hat{\theta}) .\]

Exponentiating a quadratic gives a normal. So

\[p(\theta \mid y) \;\approx\; \mathrm{N}\!\left(\hat{\theta},\; I(\hat{\theta})^{-1}\right),
\qquad
I(\hat{\theta}) = -\left. \frac{\partial^2 \log p(\theta \mid y)}
{\partial \theta \, \partial \theta^{\top}}
\right|\_{\theta = \hat{\theta}} ,\]

where \(I(\hat{\theta})\) is the ****observed information**** — the curvature at the mode. Sharp peak,
high information, small variance.

## Computing it[#](#computing-it "Link to this heading")

Optimise, then differentiate twice:

```
import numpy as np
from scipy.optimize import minimize

neg_log_post = lambda th: -log_posterior(th, y)      # any log posterior
fit = minimize(neg_log_post, x0, method="BFGS")
mode = fit.x
cov = fit.hess_inv                    # inverse observed information ≈ posterior covariance
sd = np.sqrt(np.diag(cov))            # approximate posterior standard deviations

```

Two lines give a point estimate and an uncertainty — for pennies, compared to MCMC.

## When it works, and when it lies[#](#when-it-works-and-when-it-lies "Link to this heading")

The approximation improves as \(n\) grows (next lesson), and it is excellent for smooth,
unimodal, roughly symmetric posteriors. It ****fails****, sometimes badly, when the posterior is
****skewed**** (the bioassay’s banana), ****multimodal**** (mixtures, Stage 16), constrained near a
****boundary**** (a variance close to zero), or ****heavy-tailed**** — and it always describes only the
neighbourhood of **one** mode. A common repair is to approximate on a ****transformed**** scale where the
posterior is more nearly normal (\(\log \sigma\) rather than \(\sigma\),
\(\mathrm{logit}\,\theta\) rather than \(\theta\)), then transform the draws back.

## Still useful[#](#still-useful "Link to this heading")

Even where it is not the final answer, the normal approximation earns its keep: as a fast ****first
look****, as a source of ****starting values and proposal scales**** for MCMC, and as the analytical device
behind ****variational**** and ****modal**** methods in Part III. Its accuracy is exactly the subject of
large-sample theory — and its failure modes are the subject of the counterexamples two lessons on.

> **Hint**
> ****Related lessons:**** [Large-Sample Theory](029-large-sample-theory.html) · [Finding posterior modes](081-finding-posterior-modes.html) · [Counterexamples to large-sample (asymptotic) Bayesian theorems](030-counterexamples-to-large-sample-asymptotic-bayesian-theorems.html) · [Summarizing Posterior Inference](013-summarizing-posterior-inference.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/normal-approximations-to-the-posterior-distribution/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)