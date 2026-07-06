🧫  ****Treatment Effect****

# Treatment Effect[#](#treatment-effect "Link to this heading")

**The causal difference in outcome between treated and untreated units.**

## What it is[#](#what-it-is "Link to this heading")

The ****treatment effect**** is the ****causal impact of an intervention**** versus a control —
**how much did the treatment change the outcome compared with what would have happened
without it?** In the ****potential-outcomes**** framework,

\[\text{Treatment Effect} = Y(1) - Y(0),\]

where \(Y(1)\) is the outcome if the unit **is** treated and \(Y(0)\) the outcome
if it is **not**.

## The fundamental problem[#](#the-fundamental-problem "Link to this heading")

For any single unit you only ever observe ****one**** of \(Y(1)\) or \(Y(0)\) — never
both — so the individual effect is unobservable. This **fundamental problem of causal
inference** is why we estimate ****averages**** instead of individual effects.

## The hierarchy of effects[#](#the-hierarchy-of-effects "Link to this heading")

* ****ITE (individual)**** — \(Y\_i(1) - Y\_i(0)\) for one unit; unobservable.
* ****ATE (average)**** — \(\text{ATE} = \mathbb{E}[Y(1) - Y(0)]\), the
  population-average effect, the usual target of RCTs and A/B tests.
* ****CATE (conditional average)**** —
  \(\text{CATE}(x) = \mathbb{E}[Y(1) - Y(0) \mid X = x]\), the effect within a
  subgroup defined by covariates \(x\) (age, segment) — the basis of personalised
  interventions.
* ****LATE (local average)**** — the effect for a specific compliant subgroup, typically via
  instrumental variables.

## Examples[#](#examples "Link to this heading")

A drug with 60% recovery vs 50% on placebo has \(\text{ATE} = +10\) points. A website
variant at 5.5% vs 5% conversion has \(\text{ATE} = +0.5\) points, a
\((0.055 - 0.05)/0.05 = +10\%\) relative lift.

## How it’s estimated[#](#how-it-s-estimated "Link to this heading")

In a ****randomised controlled trial**** (or A/B test), randomisation makes the groups
comparable, so the ****difference in group means**** is an unbiased estimate of the ATE. In
****observational**** data, confounding must be removed with causal-inference tools —
matching, regression adjustment, instrumental variables, difference-in-differences or
****propensity scores****. ML methods increasingly estimate ****heterogeneous (CATE)**** effects
for targeting.

---

****Mind map — connected ideas****

> [A/B Testing](380-a-b-testing.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Causal Inference](117-causal-inference.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html)

---

****More in A/B Testing & Experimentation****

> [A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html)

---

**Theme:** [A/B Testing & Experimentation](index.html#term-theme-abtest)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Treatment Effect](https://insightful-data-lab.com/2025/08/25/treatment-effect/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)