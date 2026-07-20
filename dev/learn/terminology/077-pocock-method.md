🎰  ****Pocock Method****

# Pocock Method[#](#pocock-method "Link to this heading")

**A group-sequential boundary using a constant significance threshold at every interim look.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

The ****Pocock method**** is a ****group-sequential design**** that allows several interim
analyses while keeping the overall Type I error at \(\alpha\). Its defining choice:
****every look — interim and final — uses the same significance threshold**** (the same
critical value), in contrast to O’Brien–Fleming, which varies it.

## How the threshold is set[#](#how-the-threshold-is-set "Link to this heading")

The constant cutoff is chosen so the **overall** error across all looks still equals
\(\alpha\). For \(\alpha = 0.05\) (two-sided) with 4 looks at 25/50/75/100%, the
Pocock critical value is about \(z \approx \pm 2.41\) (a nominal \(p \approx
0.017\)) ****at every look**** — stricter than 1.96 because four chances to reject must share
the budget.

## Example[#](#example "Link to this heading")

A checkout-flow A/B test plans 40,000 users (20,000 per arm) with interim looks every
10,000. The Pocock cutoff is \(z \ge 2.41\) at every stage: an observed
\(z = 2.6\) at the first look means ****stop early, B wins****; \(z = 2.0\) means
continue.

## Trade-offs vs OBF[#](#trade-offs-vs-obf "Link to this heading")

Pocock is ****easy to communicate**** (“same threshold every time”) and ****stops early more
readily**** for moderate effects, which saves resources. The cost: because it spends
\(\alpha\) evenly, the ****final test is stricter**** than a plain \(\alpha = 0.05\)
(≈ 0.017 with 4 looks), so it is ****less powerful**** if the trial runs to completion and
may need a slightly larger sample. Rule of thumb: ****Pocock when early stopping is likely****
(business/exploratory A/B), ****O’Brien–Fleming when the trial will probably run to the
end**** (safety-critical medicine).

---

**Theme:** [Sequential Methods & Bandits](index.html#term-theme-bandits)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[O’Brien–Fleming (OBF) Method](078-o-brienfleming-obf-method.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Stopping Rules](071-stopping-rules.html) · [Frequentist](059-frequentist.html) · [Sequential Settings](058-sequential-settings.html) · [Sequential Probability Ratio Test (SPRT)](076-sequential-probability-ratio-test-sprt.html)

---

> **Hint**
> ****More in Sequential Methods & Bandits****

[Bandit Algorithms](113-bandit-algorithms.html) · [O’Brien–Fleming (OBF) Method](078-o-brienfleming-obf-method.html) · [Sequential Probability Ratio Test (SPRT)](076-sequential-probability-ratio-test-sprt.html) · [Sequential Settings](058-sequential-settings.html) · [Thompson Sampling (TS) in Bandits (Multi-Armed Bandit Problem (MAB))](050-thompson-sampling-ts-in-bandits-multi-armed-band.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Pocock Method](https://insightful-data-lab.com/2025/08/25/pocock-method/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)