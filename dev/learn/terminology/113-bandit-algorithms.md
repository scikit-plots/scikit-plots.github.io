🎰  ****Bandit Algorithms****

# Bandit Algorithms[#](#bandit-algorithms "Link to this heading")

**Strategies that allocate trials to options to maximise reward while learning.**

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****Bandit algorithms**** solve the ****exploration–exploitation trade-off**** in sequential
decisions. Cast as a ****multi-armed bandit (MAB)**** — slot machines with several arms — the
goal is to ****maximise cumulative reward**** by choosing which arm to pull, balancing
****exploration**** (trying options to learn their payoff) against ****exploitation**** (playing the
best-known option now).

## Why it matters[#](#why-it-matters "Link to this heading")

An A/B test holds a ****fixed split**** until significance, spending traffic on losing variants
the whole time. A bandit ****reallocates traffic dynamically**** toward what’s winning, so better
options get more users ****sooner**** — cutting the cost of learning. It powers ad selection,
recommendations, pricing and adaptive trials.

## The core tension[#](#the-core-tension "Link to this heading")

Suppose three arms pay out at 5%, 7% and 6%. Always playing the current best (7%) risks
****never discovering**** the 6% arm is actually better with more data; always exploring
****wastes**** reward. Good bandits trade these off automatically.

## The main algorithms[#](#the-main-algorithms "Link to this heading")

* ****ε-greedy****: with probability \(\varepsilon\) explore a random arm, otherwise exploit
  the best — simple and effective.
* ****UCB**** (upper confidence bound): play the arm with the highest ****optimistic**** estimate,
  exploring when uncertainty is high and settling as data accrues.
* ****Thompson sampling**** (Bayesian): keep a posterior per arm (a Beta distribution for
  click/no-click), ****sample**** from each, and play the highest draw — a natural, highly
  effective balance.
* ****Softmax / Boltzmann****: choose arms with probability rising in estimated reward, tuned by
  a temperature.

## Trade-offs vs A/B testing[#](#trade-offs-vs-a-b-testing "Link to this heading")

Bandits ****maximise reward during the test**** (not just identify a winner after it) and
typically need ****fewer samples****, at the cost of ****more complexity**** and less clean
significance reporting. They shine when rewards are ****immediate and measurable**** and the
environment is ****stable****; rapidly shifting preferences or delayed rewards weaken them.

---

**Theme:** [Sequential Methods & Bandits](index.html#term-theme-bandits)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Thompson Sampling (TS) in Bandits (Multi-Armed Bandit Problem (MAB))](050-thompson-sampling-ts-in-bandits-multi-armed-band.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [A/B/n Test](114-a-b-n-test.html) · [Beta Distribution](099-beta-distribution.html) · [A/B Testing](380-a-b-testing.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html)

---

> **Hint**
> ****More in Sequential Methods & Bandits****

[O’Brien–Fleming (OBF) Method](078-o-brienfleming-obf-method.html) · [Pocock Method](077-pocock-method.html) · [Sequential Probability Ratio Test (SPRT)](076-sequential-probability-ratio-test-sprt.html) · [Sequential Settings](058-sequential-settings.html) · [Thompson Sampling (TS) in Bandits (Multi-Armed Bandit Problem (MAB))](050-thompson-sampling-ts-in-bandits-multi-armed-band.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Bandit Algorithms](https://insightful-data-lab.com/2025/08/24/bandit-algorithms/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)