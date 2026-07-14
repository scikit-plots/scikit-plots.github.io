# Discrete Bayesian Examples – Genetics and Spell Checking (with θ)[#](#discrete-bayesian-examples-genetics-and-spell-checking-with "Link to this heading")

****Part 1 · Stage 1 · 🎲 The Bayesian Idea**** · Lesson 004 of 144 · **beginner**

[◀ Previous · Bayesian Inference](003-bayesian-inference.html) · [Next · Probability as a Measure of Uncertainty ▶](005-probability-as-a-measure-of-uncertainty.html) · [↑ Section](index.html)

## Bayes’ rule on a discrete unknown[#](#bayes-rule-on-a-discrete-unknown "Link to this heading")

The clearest way to see Bayes’ rule work is when \(\theta\) takes only a ****few discrete values****.
No integrals, no sampling — just arithmetic on probabilities. Two classic examples, both in Gelman’s
first chapter, show the whole logic of updating.

## Genetics: the carrier problem[#](#genetics-the-carrier-problem "Link to this heading")

Hemophilia is X-linked recessive. A woman whose brother is affected has a carrier status
\(\theta \in \{0, 1\}\) with ****prior**** \(\Pr(\theta = 1) = \tfrac{1}{2}\). Suppose she then
has two ****unaffected**** sons, \(y = (0, 0)\). A carrier passes the gene with probability
\(\tfrac{1}{2}\) per son, so the likelihoods are
\(p(y \mid \theta = 1) = (\tfrac{1}{2})^2 = \tfrac14\) and \(p(y \mid \theta = 0) = 1\).
Bayes’ rule updates her carrier probability:

\[\Pr(\theta = 1 \mid y)
= \frac{\tfrac14 \cdot \tfrac12}{\tfrac14 \cdot \tfrac12 + 1 \cdot \tfrac12}
= \frac{1}{5} = 0.20 .\]

Two healthy sons drop the probability from 0.50 to 0.20 — ****evidence, not proof****. Each further
unaffected son multiplies the odds again; the update is ****sequential****, and today’s posterior is
tomorrow’s prior.

## Spell checking: which word was meant?[#](#spell-checking-which-word-was-meant "Link to this heading")

The same rule powers a spell checker. Seeing the typed string `radom`, the candidate corrections
\(\theta \in \{\text{random}, \text{radon}, \text{radom}\}\) are scored by
\(p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)\): the ****prior**** is how common each word is
in the language, and the ****likelihood**** is how likely that typo is given the intended word.

```
prior = {"random": 7.6e-5, "radon": 6.1e-6, "radom": 1.2e-7}   # word frequencies
like  = {"random": 0.00193, "radon": 0.000143, "radom": 0.975} # typo model
post  = {w: prior[w] * like[w] for w in prior}
Z = sum(post.values())
{w: p / Z for w, p in post.items()}    # normalised posterior over intended words

```

A rare word needs a **much** better typo-likelihood to win. Both examples make the same point: the prior
supplies context, the likelihood supplies evidence, and the posterior is their ****compromise**** — the
theme of the next stage.

> **Hint**
> ****Related lessons:**** [Bayesian Inference](003-bayesian-inference.html) · [Probability as a Measure of Uncertainty](005-probability-as-a-measure-of-uncertainty.html) · [Posterior as a Compromise Between Data and Prior Information](012-posterior-as-a-compromise-between-data-and-prior-information.html) · [Estimating a Probability from Binomial Data](011-estimating-a-probability-from-binomial-data.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/08/discrete-bayesian-examples-genetics-and-spell-checking-with-%ce%b8/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)