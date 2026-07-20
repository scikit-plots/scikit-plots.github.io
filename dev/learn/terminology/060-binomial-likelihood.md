🔁  ****Binomial Likelihood****

# Binomial Likelihood[#](#binomial-likelihood "Link to this heading")

**The probability model for the number of successes in a fixed number of independent Bernoulli trials.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The setup[#](#the-setup "Link to this heading")

Model \(n\) independent Bernoulli (success/failure) trials with success probability
\(p\), observing \(k\) successes. The ****binomial PMF**** gives the probability of
exactly \(k\) successes:

\[P(X = k \mid p) = \binom{n}{k} p^k (1 - p)^{n - k}.\]

## Likelihood vs PMF[#](#likelihood-vs-pmf "Link to this heading")

The ****likelihood**** is the **same expression read the other way**: with the data
\((k, n)\) fixed, it is a function of the unknown \(p\),

\[L(p \mid k, n) = \binom{n}{k} p^k (1 - p)^{n - k} \;\propto\; p^k (1 - p)^{n - k},\]

dropping the binomial coefficient because it doesn’t depend on \(p\). The PMF asks
“given \(p\), how probable is this data?”; the likelihood asks “given this data, how
well does each \(p\) explain it?”.

## Maximum likelihood[#](#maximum-likelihood "Link to this heading")

Maximising the log-likelihood,

\[\ell(p) = k \ln p + (n - k)\ln(1 - p),\]

and setting the derivative to zero gives the intuitive estimate

\[\hat{p}\_{\text{MLE}} = \frac{k}{n},\]

the observed success proportion. For \(n = 10,\ k = 7\), the likelihood
\(\propto p^7 (1-p)^3\) peaks at \(\hat{p} = 0.7\).

## The Bayesian half[#](#the-bayesian-half "Link to this heading")

Pair the binomial likelihood with a ****Beta prior**** and conjugacy makes the posterior
Beta as well:

\[\text{Beta}(\alpha, \beta) \times \text{Binomial}(k, n) \;\Rightarrow\;
\text{Beta}(\alpha + k,\; \beta + n - k).\]

So the binomial likelihood sits at the centre of ****both**** worlds — its MLE is the
frequentist sample proportion, and with a Beta prior it gives the classic Beta–Binomial
Bayesian model.

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Beta Distribution](099-beta-distribution.html) · [Posterior belief](061-posterior-belief.html) · [Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Frequentist](059-frequentist.html)

---

> **Hint**
> ****More in Bayesian Inference****

[Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Binomial Likelihood](https://insightful-data-lab.com/2025/08/28/binomial-likelihood/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)