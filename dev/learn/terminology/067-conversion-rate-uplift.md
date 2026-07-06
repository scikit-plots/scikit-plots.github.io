🧫  ****Conversion Rate Uplift****

# Conversion Rate Uplift[#](#conversion-rate-uplift "Link to this heading")

**The increase in conversion rate attributable to a treatment versus control.**

## What it is[#](#what-it-is "Link to this heading")

****Conversion-rate uplift**** measures the improvement (or decline) in conversion rate of a
****treatment**** (variant) relative to a ****control**** (baseline) — the headline success
metric of an A/B test. It answers: **by how much did the new variant move conversions
versus the baseline?**

## Absolute vs relative[#](#absolute-vs-relative "Link to this heading")

With \(CR\_A\) the control rate and \(CR\_B\) the treatment rate, there are two
distinct quantities:

\[\text{Absolute uplift} = CR\_B - CR\_A \ \text{(percentage points)}, \qquad
\text{Relative uplift} = \frac{CR\_B - CR\_A}{CR\_A} \times 100\%.\]

## Examples[#](#examples "Link to this heading")

* ****Positive**** — control 5%, treatment 6%: absolute uplift ****+1 point****, relative uplift
  \((6-5)/5 = +20\%\).
* ****Negative**** — control 10%, treatment 9.5%: absolute uplift ****−0.5 point****, relative
  uplift \((9.5-10)/10 = -5\%\).

## Why both matter[#](#why-both-matter "Link to this heading")

The two can tell very different stories: a ****1-point**** absolute uplift sounds tiny, but
on a ****2%**** baseline it is a ****50% relative**** improvement. Quoting only one can mislead —
report both.

## How it drives A/B decisions[#](#how-it-drives-a-b-decisions "Link to this heading")

Uplift is the primary metric, and the ****minimum detectable uplift / effect (MDE)**** — the
smallest effect you want to catch given sample size, \(\alpha\) and power — sets how
big the experiment must be. The decision rule: a ****significant positive**** uplift → ship;
****not significant**** → inconclusive; ****significant negative**** → stop or rethink. Whether
the uplift is real or just noise is settled by a ****two-proportion z-test**** (frequentist)
or the ****posterior probability of uplift**** (Bayesian).

---

****Mind map — connected ideas****

> [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [A/B Testing](380-a-b-testing.html) · [Conversion Rate (CR)](299-conversion-rate-cr.html) · [True Conversion Rate](083-true-conversion-rate.html) · [Incremental Conversions](394-incremental-conversions.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html)

---

****More in A/B Testing & Experimentation****

> [A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Treatment Effect](072-treatment-effect.html)

---

**Theme:** [A/B Testing & Experimentation](index.html#term-theme-abtest)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Conversion Rate Uplift](https://insightful-data-lab.com/2025/08/25/conversion-rate-uplift/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)