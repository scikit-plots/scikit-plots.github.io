🎰  ****Sequential Settings****

# Sequential Settings[#](#sequential-settings "Link to this heading")

**Decision problems where data arrive over time and choices adapt as evidence accrues.**

## What it is[#](#what-it-is "Link to this heading")

A ****sequential setting**** is any framework where ****data arrives over time**** and you can
make decisions — stop or continue, accept or reject, reallocate traffic — ****as the data
accumulates****, rather than only at a single fixed end point. It is the opposite of a
****fixed-horizon**** design, where you pre-commit a sample size and analyse once at the
end.

## What makes it different[#](#what-makes-it-different "Link to this heading")

Data comes one observation (or small batch) at a time, decisions can be ****adaptive****,
and — crucially — naive repeated testing ****inflates the Type I error rate****: every time
you “peek” at a frequentist p-value and consider stopping, you get extra chances to hit
significance by chance. Sequential settings therefore demand ****specialised methods****.

## Where it shows up[#](#where-it-shows-up "Link to this heading")

* ****Clinical trials**** — interim analyses with stopping rules for efficacy, harm or
  futility (continuing a harmful treatment is unethical).
* ****A/B testing**** — users arrive over time and teams want to peek mid-experiment;
  valid sequential methods let them.
* ****Online learning / bandits**** — algorithms learn as data streams, shifting traffic
  to better variants.

## The three families of methods[#](#the-three-families-of-methods "Link to this heading")

* ****Frequentist**** — the ****SPRT (sequential probability ratio test)**** checks a
  likelihood ratio continuously; ****group-sequential**** designs (O’Brien–Fleming,
  Pocock) analyse at pre-planned checkpoints with ****α-spending**** to keep the overall
  error controlled.
* ****Bayesian**** — naturally sequential: the ****posterior updates continuously**** as data
  arrive, and you stop when a posterior probability crosses a threshold (say
  \(\Pr(\text{uplift} > 0) > 0.95\)), with no peeking penalty.
* ****Adaptive / online**** — multi-armed bandits (\(\epsilon\)-greedy, Thompson
  sampling) and reinforcement learning, built for sequential decisions.

## Why it matters[#](#why-it-matters "Link to this heading")

Stopping early saves ****time and cost****, avoids ****ethically**** continuing a clearly
harmful trial, lets businesses ****adapt quickly****, and matches how many ML algorithms
actually receive data — provided the right method preserves statistical validity.

---

****Mind map — connected ideas****

> [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Thompson Sampling (TS) in Bandits (Multi-Armed Bandit Problem (MAB))](050-thompson-sampling-ts-in-bandits-multi-armed-band.html) · [A/B Testing](380-a-b-testing.html) · [Frequentist](059-frequentist.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html)

---

****More in Sequential Methods & Bandits****

> [Bandit Algorithms](113-bandit-algorithms.html) · [O’Brien–Fleming (OBF) Method](078-o-brienfleming-obf-method.html) · [Pocock Method](077-pocock-method.html) · [Sequential Probability Ratio Test (SPRT)](076-sequential-probability-ratio-test-sprt.html) · [Thompson Sampling (TS) in Bandits (Multi-Armed Bandit Problem (MAB))](050-thompson-sampling-ts-in-bandits-multi-armed-band.html)

---

**Theme:** [Sequential Methods & Bandits](index.html#term-theme-bandits)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Sequential Settings](https://insightful-data-lab.com/2025/08/28/sequential-settings/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)