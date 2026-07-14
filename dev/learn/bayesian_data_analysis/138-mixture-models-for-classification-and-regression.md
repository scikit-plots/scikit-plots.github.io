# Mixture models for classification and regression[#](#mixture-models-for-classification-and-regression "Link to this heading")

****Part 5 · Stage 16 · ♾️ Mixtures & Nonparametric Bayes**** · Lesson 138 of 144 · **advanced**

[◀ Previous · Unspecified number of mixture components](137-unspecified-number-of-mixture-components.html) · [Next · Bayesian histograms ▶](139-bayesian-histograms.html) · [↑ Section](index.html)

## Mixtures for supervised learning[#](#mixtures-for-supervised-learning "Link to this heading")

Mixtures are usually met in ****unsupervised**** settings — clustering, density estimation. The same
structure powers ****supervised**** learning too: classification and regression gain flexibility when the
model is a mixture, either of the classes themselves or of local expert models. The latent-component idea
carries directly across.

## Mixture discriminant analysis[#](#mixture-discriminant-analysis "Link to this heading")

Ordinary discriminant analysis models each class as a single Gaussian — too rigid when a class is itself
****heterogeneous**** (handwritten “4”s come in two styles; a disease has subtypes). Model each class as its
****own mixture**** of Gaussians, and the decision boundary bends to the real, multimodal structure:

\[p(x \mid y = c) = \sum\_{k=1}^{K\_c} \pi\_{ck} \, \mathrm{N}(x \mid \mu\_{ck}, \Sigma\_{ck}), \qquad
\Pr(y = c \mid x) \propto p(x \mid y = c) \, \Pr(y = c),\]

with classification by the posterior class probability. Each class density is as flexible as it needs to
be, and the Bayesian fit carries uncertainty into the predicted class probabilities.

## Mixture of experts[#](#mixture-of-experts "Link to this heading")

For regression, a ****mixture of experts**** lets **different regressions hold in different regions** of the
predictor space. Several “expert” models each fit part of the space, and a ****gating**** function — itself a
function of the inputs — decides which expert governs where:

\[p(y \mid x) = \sum\_{k=1}^{K} g\_k(x) \, p\_k(y \mid x), \qquad \sum\_k g\_k(x) = 1,\]

the gate \(g\_k(x)\) a softmax over the inputs. The result is a flexible regression that can switch
regime with \(x\) — piecewise-linear where the experts are linear, but with soft, learned boundaries.

```
import pymc as pm
with pm.Model():
    # gate: input-dependent component probabilities (softmax)
    Wg = pm.Normal("Wg", 0, 1, shape=(k_experts, X.shape[1]))
    g = pm.math.softmax(X @ Wg.T, axis=1)                # which expert, per input
    beta = pm.Normal("beta", 0, 1, shape=(k_experts, X.shape[1]))   # each expert's slope
    mu = (g * (X @ beta.T)).sum(axis=1)                  # gated combination
    pm.Normal("y", mu, pm.HalfNormal("s", 1), observed=y)

```

## Why mixtures help here[#](#why-mixtures-help-here "Link to this heading")

Two reasons close the supervised case. Mixtures grant ****local flexibility**** — different structure in
different regions or classes — without a global nonlinear form, and the components can carry
interpretation (a subtype, a regime). And because the whole apparatus is Bayesian, the ****uncertainty in
which component applies**** flows into predictions: a point near a class boundary or an expert’s edge gets
an honestly wider predictive distribution. Mixtures thus extend supervised learning the same way they
extended density estimation — flexibility assembled from simple, interpretable local pieces.

> **Hint**
> ****Related lessons:**** [Setting up and interpreting mixture models](134-setting-up-and-interpreting-mixture-models.html) · [Standard generalized linear model likelihoods](106-standard-generalized-linear-model-likelihoods.html) · [Example: reaction times and schizophrenia](135-example-reaction-times-and-schizophrenia.html) · [Density regression](144-density-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/09/mixture-models-for-classification-and-regression/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)