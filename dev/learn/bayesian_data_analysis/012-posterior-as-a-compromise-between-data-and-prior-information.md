# Posterior as a Compromise Between Data and Prior Information[#](#posterior-as-a-compromise-between-data-and-prior-information "Link to this heading")

****Part 1 · Stage 2 · 📍 Single-Parameter Models & Priors**** · Lesson 012 of 144 · **beginner**

[◀ Previous · Estimating a Probability from Binomial Data](011-estimating-a-probability-from-binomial-data.html) · [Next · Summarizing Posterior Inference ▶](013-summarizing-posterior-inference.html) · [↑ Section](index.html)

## Between two answers[#](#between-two-answers "Link to this heading")

The posterior always lies ****between**** the prior and the data. The Beta–Binomial makes this exact rather
than metaphorical: the posterior mean is a ****weighted average**** of the prior mean and the sample
proportion, and the weights are interpretable.

## The weighted average[#](#the-weighted-average "Link to this heading")

With \(\theta \mid y \sim \mathrm{Beta}(\alpha + y,\ \beta + n - y)\), the posterior mean is

\[\mathrm{E}[\theta \mid y] = \frac{\alpha + y}{\alpha + \beta + n}
= \underbrace{\frac{\alpha + \beta}{\alpha + \beta + n}}\_{\text{prior weight}}
\cdot \frac{\alpha}{\alpha + \beta}
\;+\;
\underbrace{\frac{n}{\alpha + \beta + n}}\_{\text{data weight}}
\cdot \frac{y}{n} .\]

The prior mean is \(\alpha / (\alpha+\beta)\); the data’s answer is the sample proportion
\(y/n\). Each is weighted by its ****effective sample size**** — \(\alpha + \beta\) for the prior,
\(n\) for the data. A \(\mathrm{Beta}(2, 8)\) prior carries the weight of ****ten**** prior
observations; against \(n = 10\) it contributes about half the answer, against \(n = 200\),
about five per cent.

## The data wins, eventually[#](#the-data-wins-eventually "Link to this heading")

The data weight \(n / (n + \alpha + \beta)\) climbs to ****1**** as \(n \to \infty\). So the
posterior mean converges to the sample proportion, and the posterior itself concentrates — a preview of
the large-sample theory in Stage 4. Two analysts with different (reasonable) priors are ****driven to
agreement**** by enough data. The prior matters most exactly where it should: when data are ****sparse****.

```
from scipy import stats
for n in (10, 100, 1000):
    y = int(0.8 * n)                       # same proportion, growing n
    a, b = 2, 8                            # prior mean 0.2, prior "sample size" 10
    print(n, round(stats.beta(a + y, b + n - y).mean(), 3))
# 10 -> 0.500   100 -> 0.745   1000 -> 0.792   (approaching 0.8)

```

## Shrinkage, and its price[#](#shrinkage-and-its-price "Link to this heading")

Pulling the estimate toward the prior mean is ****shrinkage****, and it is a feature: it regularises noisy
small-sample estimates and prevents the absurdity of a 0% or 100% rate from three trials. The price is
that a ****badly chosen**** informative prior biases the answer, most damagingly when \(n\) is small
and the pull is strongest. Hence the discipline: state the prior, justify it, and ****check the
sensitivity**** of conclusions to reasonable alternatives.

> **Hint**
> ****Related lessons:**** [Estimating a Probability from Binomial Data](011-estimating-a-probability-from-binomial-data.html) · [Informative Prior Distributions](014-informative-prior-distributions.html) · [Noninformative Prior Distributions](018-noninformative-prior-distributions.html) · [Large-Sample Theory](029-large-sample-theory.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/posterior-as-a-compromise-between-data-and-prior-information/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)