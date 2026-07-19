# Measures of predictive accuracy[#](#measures-of-predictive-accuracy "Link to this heading")

****Part 2 · Stage 6 · 🔍 Model Checking & Comparison**** · Lesson 045 of 144 · **intermediate**

[◀ Previous · Model checking for the educational testing example](044-model-checking-for-the-educational-testing-example.html) · [Next · Model comparison based on predictive performance ▶](046-model-comparison-based-on-predictive-performance.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Scoring a model by what it predicts[#](#scoring-a-model-by-what-it-predicts "Link to this heading")

Checking asks whether a model fits. ****Comparison**** asks which of several models to prefer, and the
Bayesian answer is: the one that would ****predict new data best****. That requires a score. The default
is the ****log predictive density**** — reward a model for putting high probability where the data actually
land, and it is **proper**, meaning it cannot be gamed by reporting a distribution you do not believe.

## Expected log pointwise predictive density[#](#expected-log-pointwise-predictive-density "Link to this heading")

For future observations, the target quantity is the ****elpd****, the expected log predictive density
summed over data points:

\[\mathrm{elpd} = \sum\_{i=1}^{n} \int p\_t(\tilde{y}\_i) \,
\log p(\tilde{y}\_i \mid y) \; d\tilde{y}\_i ,\]

where \(p\_t\) is the (unknown) true data-generating process. Since \(p\_t\) is unavailable, elpd
must be ****estimated****. The naive estimate uses the observed data themselves:

\[\mathrm{lppd} = \sum\_{i=1}^{n} \log \left( \frac{1}{S} \sum\_{s=1}^{S}
p(y\_i \mid \theta^{(s)}) \right) .\]

This is the ****log pointwise predictive density****, and it is ****optimistic****: the same data fitted the
model, so the score is inflated by exactly the amount the model overfit.

## Correcting the optimism[#](#correcting-the-optimism "Link to this heading")

Information criteria subtract an estimate of that overfitting. ****WAIC**** uses the posterior variance of
the pointwise log-likelihood as an ****effective number of parameters**** \(p\_{\text{WAIC}}\):

\[\widehat{\mathrm{elpd}}\_{\text{WAIC}} = \mathrm{lppd} - p\_{\text{WAIC}},
\qquad
p\_{\text{WAIC}} = \sum\_{i=1}^{n} \mathrm{var}\_{s}\bigl(\log p(y\_i \mid \theta^{(s)})\bigr).\]

Unlike AIC and DIC — which count parameters, or use a point estimate — WAIC is ****fully Bayesian****: it
averages over the posterior and works when the effective number of parameters is not obvious, as in
hierarchical models where partial pooling makes \(J\) groups behave like far fewer.

```
import arviz as az
az.waic(idata)        # elpd_waic, p_waic, se
az.loo(idata)         # elpd_loo — usually preferred (next lesson)

```

## Pointwise is the point[#](#pointwise-is-the-point "Link to this heading")

Note that every quantity here is a ****sum over observations****. That decomposition is what makes standard
errors available (the sd of the \(n\) components times \(\sqrt{n}\)), what lets you see ****which
observations**** a model predicts badly, and what makes leave-one-out cross-validation — the more direct
estimate of the same elpd — computable from a single fit.

> **Hint**
> ****Related lessons:**** [Posterior predictive checking](042-posterior-predictive-checking.html) · [Model comparison based on predictive performance](046-model-comparison-based-on-predictive-performance.html) · [Model comparison using Bayes factors](047-model-comparison-using-bayes-factors.html) · [Bayesian interpretations of other statistical methods](032-bayesian-interpretations-of-other-statistical-methods.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/10/measures-of-predictive-accuracy/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)