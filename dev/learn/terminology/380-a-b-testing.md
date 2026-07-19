🧫  ****A/B Testing****

# A/B Testing[#](#a-b-testing "Link to this heading")

**A randomised experiment comparing two variants to measure an effect.**

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

An ****A/B test**** is a ****controlled experiment**** that ****randomly assigns**** users to two variants — ****A****
(control) and ****B**** (treatment) — and measures which performs better on a chosen ****metric**** (conversion
rate, time on page, retention). Randomization is what lets you read the difference as ****causal****.

## How it’s run[#](#how-it-s-run "Link to this heading")

You fix the ****metric****, use a ****power analysis**** to set the ****sample size****, pick a ****statistical test****
(t-test, chi-square), and choose a ****significance level α****. When the data are in, the test decides whether
B’s effect is ****real**** or noise.

## Its discipline[#](#its-discipline "Link to this heading")

The classic A/B test is ****fixed-horizon**** — you must wait for the pre-planned sample before deciding.
****Peeking**** early and stopping when it looks significant ****inflates false positives****, which is exactly the
failure that ****sequential**** methods are designed to fix.

---

**Theme:** [A/B Testing & Experimentation](index.html#term-theme-abtest)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Interleaving Tests](379-interleaving-tests.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Power Analysis](378-power-analysis.html) · [Statistical Tests](328-statistical-tests.html) · [Conversion Rate (CR)](299-conversion-rate-cr.html)

---

> **Hint**
> ****More in A/B Testing & Experimentation****

[A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Treatment Effect](072-treatment-effect.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [A/B Testing](https://insightful-data-lab.com/2025/08/19/a-b-testing/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)