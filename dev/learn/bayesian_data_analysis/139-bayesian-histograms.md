# Bayesian histograms[#](#bayesian-histograms "Link to this heading")

****Part 5 · Stage 16 · ♾️ Mixtures & Nonparametric Bayes**** · Lesson 139 of 144 · **advanced**

[◀ Previous · Mixture models for classification and regression](138-mixture-models-for-classification-and-regression.html) · [Next · Dirichlet process prior distributions ▶](140-dirichlet-process-prior-distributions.html) · [↑ Section](index.html)

## The simplest nonparametric density[#](#the-simplest-nonparametric-density "Link to this heading")

Before the elaborate machinery, the humblest density estimator deserves a Bayesian treatment: the
****histogram****. Partition the range into bins and estimate the probability in each. A Bayesian histogram
puts a ****prior on the bin probabilities**** and reports a posterior — turning a familiar picture into a
model with honest uncertainty, and illustrating nonparametric ideas at their most transparent.

## The model[#](#the-model "Link to this heading")

With \(B\) bins and counts \(n\_b\) of the \(N\) observations falling in each, the natural
model is multinomial with a ****Dirichlet prior**** on the bin probabilities:

\[(n\_1, \dots, n\_B) \sim \mathrm{Multinomial}(N, p), \qquad
p \sim \mathrm{Dirichlet}(\alpha\_1, \dots, \alpha\_B).\]

Conjugacy makes the posterior immediate — \(p \mid n \sim \mathrm{Dirichlet}(\alpha\_b + n\_b)\) — so
each bin’s height comes with a full posterior, and sparsely-populated bins are ****smoothed**** toward the
prior instead of estimated as zero. The Dirichlet concentration controls that smoothing.

```
import numpy as np
from scipy import stats
counts, edges = np.histogram(y, bins=B)
alpha = np.ones(B) * 1.0                                  # symmetric Dirichlet prior
post = stats.dirichlet(alpha + counts)                    # conjugate posterior on bin probs
heights = post.mean() / np.diff(edges)                    # density estimate
draws = post.rvs(500) / np.diff(edges)                    # posterior uncertainty bands

```

## Smoothing and the bin-width problem[#](#smoothing-and-the-bin-width-problem "Link to this heading")

The histogram’s perennial weakness is the ****bin width**** — too wide oversmooths, too narrow is noisy.
Bayesian versions address it by borrowing this stage’s tools: a ****prior favouring smoothness**** across
adjacent bins (neighbouring probabilities tied, as in the P-spline lesson) regularises the jagged
edges; the bin count or width can itself be ****inferred**** rather than fixed; and finer partitions can be
combined hierarchically. ****Pólya trees**** carry the idea to its logical end — a **nested**, recursively
refined binning with a prior at every level, giving a genuine nonparametric prior on densities built
from binary splits.

## Where it fits[#](#where-it-fits "Link to this heading")

The Bayesian histogram is the ****conceptual bridge**** into nonparametrics. It shows the essential moves —
a prior over a flexible, high-dimensional object (the bin probabilities), a posterior that ****smooths where
data are thin****, and uncertainty on the whole estimated density — in the simplest possible container. The
Dirichlet prior here is the finite ancestor of the ****Dirichlet process**** of the next lessons, which
replaces a fixed grid of bins with an adaptive, unbounded partition. From counting in boxes to infinite
mixtures is one continuous idea.

> **Hint**
> ****Related lessons:**** [Density estimation and regression](133-density-estimation-and-regression.html) · [Dirichlet process prior distributions](140-dirichlet-process-prior-distributions.html) · [Setting up and interpreting mixture models](134-setting-up-and-interpreting-mixture-models.html) · [Continuous model expansion](048-continuous-model-expansion.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/13/bayesian-histograms/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)