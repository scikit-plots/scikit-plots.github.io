🧫  ****Sequential Testing (also called sequential analysis)****

# Sequential Testing (also called sequential analysis)[#](#sequential-testing-also-called-sequential-analysis "Link to this heading")

**Analysing results as data arrive while controlling error from repeated looks.**

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

****Sequential testing**** (sequential analysis) ****monitors an experiment continuously**** and lets you ****stop as
soon as**** the evidence is conclusive — rather than waiting for a fixed sample size. It is built for the
streaming data of modern experimentation platforms.

## The problem it solves[#](#the-problem-it-solves "Link to this heading")

Repeatedly checking a ****fixed-horizon**** test and stopping when it looks good — ****peeking**** — badly
****inflates the Type I error****. Sequential methods like the ****sequential probability ratio test (SPRT)**** and
group-sequential designs keep the false-positive rate controlled ****at any time****, so early stopping is
****valid****.

## The payoff[#](#the-payoff "Link to this heading")

Because it can end as soon as a winner (or a dead end) is clear, sequential testing ****cuts the average
sample size**** and ****deployment time****, exposing ****fewer users**** to an inferior variant — at the price of
slightly more conservative thresholds to preserve error control.

---

**Theme:** [A/B Testing & Experimentation](index.html#term-theme-abtest)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[A/B Testing](380-a-b-testing.html) · [Interleaving Tests](379-interleaving-tests.html) · [Statistical Tests](328-statistical-tests.html) · [Power Analysis](378-power-analysis.html) · [Bootstrap](365-bootstrap.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html)

---

> **Hint**
> ****More in A/B Testing & Experimentation****

[A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Treatment Effect](072-treatment-effect.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Sequential Testing (also called sequential analysis)](https://insightful-data-lab.com/2025/08/19/sequential-testing-also-called-sequential-analysis/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)