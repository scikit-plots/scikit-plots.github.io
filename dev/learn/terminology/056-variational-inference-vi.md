🔁  ****Variational Inference (VI)****

# Variational Inference (VI)[#](#variational-inference-vi "Link to this heading")

**Approximating an intractable posterior by optimising a simpler distribution to be close to it.**

## The problem it solves[#](#the-problem-it-solves "Link to this heading")

Bayesian inference wants the ****posterior****

\[p(\theta \mid x) = \frac{p(x \mid \theta)\, p(\theta)}{p(x)},\]

but the ****evidence**** in the denominator,
\(p(x) = \int p(x \mid \theta)\, p(\theta)\, d\theta\), is an integral over all
parameters that is ****intractable**** in most real models. MCMC tackles this by sampling;
****variational inference (VI)**** tackles it by ****optimisation****.

## The core idea[#](#the-core-idea "Link to this heading")

Replace the hard posterior with the closest member of a ****simpler family****
\(q(\theta)\) (say, Gaussians):

\[q^\*(\theta) = \arg\min\_q \; \operatorname{KL}\!\big(q(\theta) \,\Vert\, p(\theta \mid x)\big),\]

measuring closeness by ****Kullback–Leibler divergence****. Inference becomes a search for
the best-fitting approximation.

## The ELBO[#](#the-elbo "Link to this heading")

We can’t minimise that KL directly (it contains the unknown posterior), so VI instead
****maximises the Evidence Lower Bound****:

\[\mathcal{L}(q) = \mathbb{E}\_{q(\theta)}\big[\log p(x, \theta) - \log q(\theta)\big].\]

Maximising the ELBO is **equivalent** to minimising the KL, and the ELBO is a genuine
****lower bound**** on \(\log p(x)\) — so gradient-based optimisation of
\(\mathcal{L}\) drives \(q\) toward the posterior.

## How it’s done in practice[#](#how-it-s-done-in-practice "Link to this heading")

Pick a ****variational family**** \(q(\theta; \phi)\) (e.g. a Gaussian’s mean and
variance), then optimise \(\phi\) to maximise the ELBO and use \(q\) as the
posterior. Common machinery:

* ****Mean-field**** — assume independence, \(q(\theta) = \prod\_i q\_i(\theta\_i)\).
* ****CAVI**** — coordinate ascent, updating each factor in turn.
* ****Stochastic VI**** — mini-batch stochastic optimisation for large data.
* ****Reparameterisation trick**** — write \(\theta = g(\phi, \epsilon)\) with noise
  \(\epsilon\) so gradients flow through samples (the engine of ****variational
  autoencoders****).

## Where it shows up[#](#where-it-shows-up "Link to this heading")

Topic models (latent Dirichlet allocation), variational autoencoders, Bayesian neural
networks and probabilistic graphical models. The trade-off vs ****MCMC****: VI is ****faster
and scalable**** but gives a **biased** approximation (only as good as the family), whereas
MCMC is asymptotically exact but slower.

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Posterior](063-posterior.html) · [Bayesian Inference.](375-bayesian-inference.html)

---

> **Hint**
> ****More in Bayesian Inference****

[Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Variational Inference (VI)](https://insightful-data-lab.com/2025/08/29/variational-inference-vi/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)