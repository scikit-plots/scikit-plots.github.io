# Estimating a Probability from Binomial Data[#](#estimating-a-probability-from-binomial-data "Link to this heading")

****Part 1 · Stage 2 · 📍 Single-Parameter Models & Priors**** · Lesson 011 of 144 · **beginner**

[◀ Previous · Bayesian Inference in Applied Statistics](010-bayesian-inference-in-applied-statistics.html) · [Next · Posterior as a Compromise Between Data and Prior Information ▶](012-posterior-as-a-compromise-between-data-and-prior-information.html) · [↑ Section](index.html)

## The workhorse model[#](#the-workhorse-model "Link to this heading")

The simplest interesting Bayesian problem: estimate an unknown probability \(\theta\) — a
conversion rate, a survival rate, the chance of a female birth — from \(y\) successes in \(n\)
independent trials. The likelihood is ****binomial****,

\[p(y \mid \theta) = \binom{n}{y} \theta^{y} (1 - \theta)^{n - y}
\;\;\propto\;\; \theta^{y} (1 - \theta)^{n - y},\]

and the whole of single-parameter Bayesian inference can be seen in miniature here.

## A Beta prior[#](#a-beta-prior "Link to this heading")

For a parameter confined to \([0, 1]\), the natural prior is a ****Beta**** distribution,
\(\theta \sim \mathrm{Beta}(\alpha, \beta)\), whose density is proportional to
\(\theta^{\alpha - 1} (1 - \theta)^{\beta - 1}\). Note the shape: it is **the same functional form**
as the likelihood. That is not a coincidence but the definition of ****conjugacy****, and it makes the
update exact.

## The update is addition[#](#the-update-is-addition "Link to this heading")

Multiply prior by likelihood and read off the kernel:

\[p(\theta \mid y) \;\propto\; \theta^{y}(1-\theta)^{n-y} \cdot \theta^{\alpha-1}(1-\theta)^{\beta-1}
= \theta^{\alpha + y - 1} (1 - \theta)^{\beta + n - y - 1},\]

so

\[\theta \mid y \;\sim\; \mathrm{Beta}(\alpha + y,\; \beta + n - y).\]

Bayesian updating here is nothing more than ****counting****: add successes to \(\alpha\), failures to
\(\beta\). This licenses reading \(\alpha\) and \(\beta\) as ****prior successes and
failures****, with \(\alpha + \beta\) a ****prior sample size****.

## In code[#](#in-code "Link to this heading")

With \(\mathrm{Beta}(1,1)\) (uniform) and 8 successes in 10 trials:

```
from scipy import stats
post = stats.beta(1 + 8, 1 + 10 - 8)          # Beta(9, 3)
post.mean()                                    # 0.75
post.interval(0.95)                            # 95% credible interval
1 - post.cdf(0.5)                              # P(theta > 0.5 | y) ≈ 0.981

```

The MLE is \(8/10 = 0.80\); the posterior mean is \(0.75\), pulled toward the prior mean of
\(0.5\). That pull — its size, and its fate as \(n\) grows — is the subject of the next lesson.

> **Hint**
> ****Related lessons:**** [Posterior as a Compromise Between Data and Prior Information](012-posterior-as-a-compromise-between-data-and-prior-information.html) · [Summarizing Posterior Inference](013-summarizing-posterior-inference.html) · [Informative Prior Distributions](014-informative-prior-distributions.html) · [Discrete Bayesian Examples – Genetics and Spell Checking (with θ)](004-discrete-bayesian-examples-genetics-and-spell-checking-with.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/estimating-a-probability-from-binomial-data/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)