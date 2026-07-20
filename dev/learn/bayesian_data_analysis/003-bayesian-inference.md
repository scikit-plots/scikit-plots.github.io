# Bayesian Inference[#](#bayesian-inference "Link to this heading")

****Part 1 · Stage 1 · 🎲 The Bayesian Idea**** · Lesson 003 of 144 · **beginner**

[◀ Previous · General Notation for Statistical Inference](002-general-notation-for-statistical-inference.html) · [Next · Discrete Bayesian Examples – Genetics and Spell Checking (with θ) ▶](004-discrete-bayesian-examples-genetics-and-spell-checking-with.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Conclusions as probabilities[#](#conclusions-as-probabilities "Link to this heading")

****Bayesian inference**** is the process of drawing conclusions about unknown quantities as ****probability
statements conditional on the observed data****. Not “the estimate is 0.58 ± 0.05”, but “given these
data, there is a 93% probability that \(\theta\) exceeds 0.5”. Every conclusion is read off the
posterior distribution, and every conclusion carries its uncertainty with it.

## Bayes’ rule, again[#](#bayes-rule-again "Link to this heading")

The machinery is one line. Starting from the joint model \(p(\theta, y) = p(\theta) p(y \mid
\theta)\) and conditioning on \(y\):

\[p(\theta \mid y) = \frac{p(\theta)\, p(y \mid \theta)}{p(y)},
\qquad p(y) = \int p(\theta)\, p(y \mid \theta) \, d\theta .\]

The denominator — the ****marginal likelihood**** or **evidence** — does not depend on \(\theta\), so for
inference it merely normalises. This is why the unnormalised form
\(p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)\) is the working equation, and why samplers
need only the numerator.

## Reading a posterior[#](#reading-a-posterior "Link to this heading")

Once you have the posterior (analytically or as samples), every question is answered by summarising it:

```
import numpy as np
post = ...                                   # draws from p(theta | y)
post.mean(), np.median(post)                 # point summaries
np.percentile(post, [2.5, 97.5])             # 95% credible interval
(post > 0.5).mean()                          # P(theta > 0.5 | y), directly

```

That last line is the Bayesian signature: a probability of a hypothesis, computed by counting draws.

## What differs, and why[#](#what-differs-and-why "Link to this heading")

Bayesian and frequentist conclusions often agree in simple problems with plenty of data. They diverge
where ****conditioning**** matters: small samples, many parameters, hierarchical structure, or genuine
prior information. The cost is that you must state a prior; the benefit is that the answer is a
distribution you may interpret directly, and that uncertainty propagates automatically into any
derived quantity.

> **Hint**
> ****Related lessons:**** [The three steps of Bayesian data analysis](001-the-three-steps-of-bayesian-data-analysis.html) · [General Notation for Statistical Inference](002-general-notation-for-statistical-inference.html) · [Discrete Bayesian Examples – Genetics and Spell Checking (with θ)](004-discrete-bayesian-examples-genetics-and-spell-checking-with.html) · [Probability as a Measure of Uncertainty](005-probability-as-a-measure-of-uncertainty.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/08/bayesian-inference-2/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)