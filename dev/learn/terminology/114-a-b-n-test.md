🧫  ****A/B/n Test****

# A/B/n Test[#](#a-b-n-test "Link to this heading")

**An experiment comparing more than two variants simultaneously.**

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

An ****A/B/n test**** generalises the two-arm A/B test to ****several variants at once**** —
A vs B vs C vs … n — of a page, app or feature, splitting traffic across all of them to find
which scores best on a chosen metric (conversion, click-through, engagement).

## How it works[#](#how-it-works "Link to this heading")

Pick a ****control**** (A, the current design), build variants B, C, D…; ****randomly split****
users across them; track the metric; and use a statistical test (two-proportion z-test,
chi-square or a Bayesian model) to pick the winner. Testing button text — “Buy Now” vs
“Shop Now” vs “Get Yours Today” vs “Order Now” — sends each of four equal groups one variant
and compares conversions.

## Why and when[#](#why-and-when "Link to this heading")

It tests ****many ideas in one experiment**** rather than a sequence of A/B tests, which is
faster when you have several candidate designs and enough traffic for a ****winner-takes-all****
verdict.

## The costs[#](#the-costs "Link to this heading")

Two prices. ****Traffic****: a 50/50 split becomes 33/33/33 and beyond, so each arm gets less
data and significance takes longer. And the ****multiple-comparisons problem****: every extra
variant is another chance for a false positive, so the family-wise error rate climbs unless
corrected. It also reveals less about ****element interactions**** than a multivariate test.

## Example[#](#example "Link to this heading")

Optimising newsletter sign-ups across four calls to action at 25% traffic each, after two
weeks A converts 5%, B 6%, ****C 7.5%**** and D 5.2%. C is the significant winner and ships.

---

**Theme:** [A/B Testing & Experimentation](index.html#term-theme-abtest)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[A/B Testing](380-a-b-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Bandit Algorithms](113-bandit-algorithms.html) · [Two-Proportion Z-Test](098-two-proportion-z-test.html) · [Type I Error](080-type-i-error.html)

---

> **Hint**
> ****More in A/B Testing & Experimentation****

[A/B Testing](380-a-b-testing.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Treatment Effect](072-treatment-effect.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [A/B/n Test](https://insightful-data-lab.com/2025/08/24/a-b-n-test/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)