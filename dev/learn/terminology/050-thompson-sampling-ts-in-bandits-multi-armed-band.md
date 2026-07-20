🎰  ****Thompson Sampling (TS) in Bandits (Multi-Armed Bandit Problem (MAB))****

# Thompson Sampling (TS) in Bandits (Multi-Armed Bandit Problem (MAB))[#](#thompson-sampling-ts-in-bandits-multi-armed-bandit-problem-mab "Link to this heading")

**A bandit strategy that samples from posterior beliefs to balance exploration and exploitation.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The multi-armed bandit problem[#](#the-multi-armed-bandit-problem "Link to this heading")

Picture a row of slot machines (****arms****). Each arm \(i\) pays out from an unknown
reward distribution with mean \(\mu\_i\), and the goal is to ****maximise total reward
over time****. That forces a trade-off between:

* ****Exploration**** — trying arms to learn their payoffs, and
* ****Exploitation**** — playing the arm that looks best so far.

Pull only the current best and you may never discover a better arm; explore too much
and you waste pulls on bad ones. ****Thompson Sampling**** resolves this elegantly.

## The Bayesian view[#](#the-bayesian-view "Link to this heading")

Keep a ****posterior distribution**** over each arm’s reward parameter. For Bernoulli
(success/failure) rewards the natural choice is a Beta posterior:

\[p\_i \sim \text{Beta}(\alpha\_i, \beta\_i),\]

updated as successes and failures accumulate.

## The algorithm[#](#the-algorithm "Link to this heading")

Each round:

1. ****Sample**** a value \(\tilde{\mu}\_i\) from every arm’s posterior.
2. ****Select**** the arm with the highest sampled value.
3. ****Play**** it and observe reward \(r\).
4. ****Update**** that arm’s posterior by Bayes’ rule.

The intuition is the whole trick: an **uncertain** arm has a wide posterior, so its
samples are sometimes high — it gets explored; an arm you’re confident is bad rarely
produces a winning sample — it’s quietly dropped.

## Worked example — the Bernoulli bandit[#](#worked-example-the-bernoulli-bandit "Link to this heading")

Arm \(i\) returns 1 with probability \(p\_i\). Start from a uniform prior
\(p\_i \sim \text{Beta}(1,1)\). After \(s\) successes and \(f\) failures,
conjugacy gives

\[p\_i \mid \text{data} \sim \text{Beta}(1+s,\, 1+f).\]

Each round, draw \(\tilde{p}\_i \sim \text{Beta}(1+s, 1+f)\) for every arm and pull
the one with the largest draw.

```
import numpy as np
# alpha, beta hold Beta posterior params per arm (start at 1, 1)
samples = np.random.beta(alpha, beta)      # one draw per arm
arm = int(np.argmax(samples))              # play the best sampled arm
# observe reward r in {0, 1}, then update:
alpha[arm] += r
beta[arm]  += 1 - r

```

## Why it works, and how well[#](#why-it-works-and-how-well "Link to this heading")

Exploration and exploitation are handled ****automatically**** by the sampling — no manual
exploration rate to tune. As evidence accumulates the posteriors concentrate, and the
best arm comes to dominate. Its ****regret**** — the gap between the optimal arm’s expected
reward and what you actually earned — grows only ****logarithmically****,
\(O(\log T)\), which is near the theoretical optimum.

## Extensions[#](#extensions "Link to this heading")

* ****Contextual Thompson Sampling**** — condition on covariates \(x\) (user features)
  via Bayesian linear or logistic regression, so the chosen arm depends on context.
* ****Other reward models**** — Gaussian posteriors for continuous rewards, Dirichlet for
  categorical.
* ****Parallel Thompson Sampling**** — for distributed settings with many simultaneous
  users.

## Where it fits[#](#where-it-fits "Link to this heading")

Thompson Sampling is the Bayesian member of the ****bandit-algorithm**** family and a
direct alternative to fixed-split ****A/B testing****: instead of holding a 50/50 split for
a set horizon, it shifts traffic toward the winning variant as evidence builds, cutting
the cost of showing the worse option. Compared with \(\epsilon\)-greedy it needs no
hand-tuned exploration rate, and compared with UCB it explores via posterior sampling
rather than confidence bounds.

---

**Theme:** [Sequential Methods & Bandits](index.html#term-theme-bandits)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Bandit Algorithms](113-bandit-algorithms.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [A/B Testing](380-a-b-testing.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Posterior](063-posterior.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)

---

> **Hint**
> ****More in Sequential Methods & Bandits****

[Bandit Algorithms](113-bandit-algorithms.html) · [O’Brien–Fleming (OBF) Method](078-o-brienfleming-obf-method.html) · [Pocock Method](077-pocock-method.html) · [Sequential Probability Ratio Test (SPRT)](076-sequential-probability-ratio-test-sprt.html) · [Sequential Settings](058-sequential-settings.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Thompson Sampling (TS) in Bandits (Multi-Armed Bandit Problem (MAB))](https://insightful-data-lab.com/2025/08/29/thompson-sampling-ts-in-bandits/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)