🧫  ****Online Experimentation Platforms****

# Online Experimentation Platforms[#](#online-experimentation-platforms "Link to this heading")

**Systems that randomise, run and analyse controlled experiments on live traffic.**

## What it is[#](#what-it-is "Link to this heading")

An ****online experimentation platform**** is the ****infrastructure that lets a company run
controlled experiments — A/B tests, multivariate tests, bandits — on a live digital
product****, usually built internally at scale. It gives product managers, data scientists
and engineers a way to randomly assign users to variants, log outcomes automatically,
analyse them with sound statistics, and enforce guardrails so experiments don’t harm
users.

## Core components[#](#core-components "Link to this heading")

* ****Assignment & randomisation**** — bucket users (by cookie, device or account) into
  variants, with **stable** assignment so a user always sees the same one.
* ****Data collection & logging**** — track clicks, conversions, retention and revenue
  consistently across pipelines.
* ****Metrics framework**** — predefined primary KPIs plus ****guardrail metrics**** (engagement
  should rise, latency must not).
* ****Statistical engine**** — frequentist (p-values, fixed-horizon or sequential), Bayesian
  (posteriors, credible intervals), and variance reduction (CUPED) or stratified
  sampling.
* ****Dashboard**** — automated significance, effect sizes and time series.
* ****Governance / guardrails**** — flag harmful launches and enforce GDPR/HIPAA compliance.

## Modern capabilities[#](#modern-capabilities "Link to this heading")

The leading platforms add ****sequential testing**** (safe peeking), ****Bayesian analysis****,
****multi-armed bandits**** (adaptive traffic), ****heterogeneous treatment-effect / CATE****
analysis by segment, ****ML-driven personalisation****, and ****scale**** to hundreds of
simultaneous tests.

## Who builds them[#](#who-builds-them "Link to this heading")

Commercial tools include ****Optimizely****, ****Adobe Target****, ****VWO**** and feature-flag
platforms like ****Split.io / LaunchDarkly**** (Google Optimize was retired in favour of
GA4). The big platforms run their own: ****Microsoft’s ExP**** (Bing, Office, Windows),
****Airbnb’s ERF****, ****Uber’s**** and ****Netflix’s**** XP infrastructure, ****LinkedIn’s XLNT****,
and ****Meta’s PlanOut****.

## Hard problems[#](#hard-problems "Link to this heading")

Running thousands of concurrent experiments raises real challenges: ****statistical
validity**** at scale (many simultaneous tests), ****interference / contamination**** (users
caught in several experiments), ****metric definition**** (does the KPI track product
health?), sheer ****scale****, and ****ethics**** (avoiding harmful or unfair experiments). The
payoff is ****evidence-based decisions**** instead of intuition, lower launch risk, and
continuous optimisation.

---

****Mind map — connected ideas****

> [Optimizely](069-optimizely.html) · [Google Experiments](100-google-experiments.html) · [A/B Testing](380-a-b-testing.html) · [Stopping Rules](071-stopping-rules.html) · [Sequential Settings](058-sequential-settings.html) · [Bandit Algorithms](113-bandit-algorithms.html)

---

****More in A/B Testing & Experimentation****

> [A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Treatment Effect](072-treatment-effect.html)

---

**Theme:** A/B Testing & Experimentation  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Online Experimentation Platforms](https://insightful-data-lab.com/2025/08/25/online-experimentation-platforms/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)