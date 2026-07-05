🧫  ****Optimizely****

# Optimizely[#](#optimizely "Link to this heading")

**A commercial online experimentation and A/B-testing platform.**

## What it is[#](#what-it-is "Link to this heading")

****Optimizely**** is a commercial ****experimentation and digital-experience platform****.
Originally known for website A/B testing, it has grown into a full ****experimentation +
feature-management**** suite used by marketers, product managers and data scientists to
test and personalise user experiences.

## Core capabilities[#](#core-capabilities "Link to this heading")

* ****Experimentation**** — A/B, multivariate and multi-page tests across web, mobile and
  ****server-side****, with random assignment and a no-code WYSIWYG editor for simple tests.
* ****Feature management**** — ****feature flags**** to toggle features without redeploying,
  gradual percentage rollouts, and targeting (e.g. only Premium users).
* ****Personalisation**** — audience-targeting rules and custom segments.
* ****Statistics**** — default ****frequentist with sequential-testing adjustments**** (so
  monitoring doesn’t inflate error), Bayesian methods in some tiers, plus ****variance
  reduction (CUPED-style)**** in enterprise plans.
* ****Integration**** — connects to Google Analytics, Segment, Salesforce, Amplitude and
  warehouses like Snowflake and BigQuery.

## A typical workflow[#](#a-typical-workflow "Link to this heading")

State a hypothesis → configure the experiment → split traffic (say 50/50) → track
conversions and events → monitor significance in real time → end when conclusive (with
****sequential-testing corrections****) → roll the winner out behind a ****feature flag****.

## Strengths and limits[#](#strengths-and-limits "Link to this heading")

It is ****user-friendly**** (non-technical teams can run tests), spans ****client- and
server-side****, has ****built-in feature flags****, and brings real statistical rigour. The
costs: it is a ****pricey SaaS**** next to open-source options, results live or die by
****metric definition****, and the most complex experimentation needs (Google/Netflix scale)
may still want bespoke internal platforms. Among peers, VWO is cheaper but lighter for
engineering, Adobe Target is enterprise-grade but complex, and LaunchDarkly leads on
feature flagging but leans on external analytics.

---

****Mind map — connected ideas****

> [Google Experiments](100-google-experiments.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [A/B Testing](380-a-b-testing.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Sequential Settings](058-sequential-settings.html)

---

****More in A/B Testing & Experimentation****

> [A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Treatment Effect](072-treatment-effect.html)

---

**Theme:** A/B Testing & Experimentation  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Optimizely](https://insightful-data-lab.com/2025/08/25/optimizely/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)