🧫  ****Stopping Rules****

# Stopping Rules[#](#stopping-rules "Link to this heading")

**Predefined conditions that determine when to stop collecting data in a test.**

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

A ****stopping rule**** is the ****pre-specified condition for ending an experiment**** — it says
**when** to stop collecting data and decide. Without one, you can ****“peek” until the result
looks significant****, which inflates the ****Type I error**** (false-positive) rate. The
choice of stopping rule is what makes continuous monitoring valid or invalid.

## The families[#](#the-families "Link to this heading")

* ****Fixed-horizon (the traditional A/B test)**** — fix the sample size up front (say
  10,000 per arm), analyse ****once**** at the end. Simple and protects \(\alpha\), but
  inflexible.
* ****Group-sequential**** — pre-plan ****interim looks**** (e.g. every 25%) and spend the error
  budget with an ****α-spending**** rule (O’Brien–Fleming, Pocock), allowing early stops for
  efficacy or futility. Efficient; standard in clinical trials.
* ****Sequential probability ratio test (SPRT)**** — check a ****likelihood ratio**** after each
  observation and stop once it crosses a bound for \(H\_1\) or \(H\_0\); often uses
  far fewer samples.
* ****Bayesian**** — stop when a ****posterior probability**** crosses a threshold (e.g.
  \(P(H\_1 \mid \text{data}) > 0.95\)); intuitive and needs no α-spending.
* ****Ethical / practical**** — in trials, stop for ****harm****, for ****clear benefit**** (it’s
  unethical to withhold), or for ****futility****.

## Examples[#](#examples "Link to this heading")

An A/B test might run to a fixed ****50,000 visitors per arm****; or check every ****5,000****
and stop early if \(p < 0.001\) under an O’Brien–Fleming bound; or stop once the
posterior probability that B beats A exceeds ****0.95****. A clinical trial planned for 1,000
patients might look at 250, 500 and 750 — stopping early for strong benefit, immediately
for harm, or for futility.

## Why they matter[#](#why-they-matter "Link to this heading")

Stopping rules prevent ****p-hacking**** (stopping the moment things look good), keep ****Type
I error**** controlled, ****save time and cost**** by ending early when results are clear, and
****protect participants**** in clinical settings. The dividing line: ****fixed horizon**** (one
look) versus ****sequential / adaptive**** (group-sequential, SPRT, Bayesian) that permit
interim looks without inflating false positives.

---

**Theme:** [A/B Testing & Experimentation](index.html#term-theme-abtest)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Sequential Settings](058-sequential-settings.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Frequentist](059-frequentist.html) · [A/B Testing](380-a-b-testing.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html)

---

> **Hint**
> ****More in A/B Testing & Experimentation****

[A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Treatment Effect](072-treatment-effect.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Stopping Rules](https://insightful-data-lab.com/2025/08/25/stopping-rules/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)