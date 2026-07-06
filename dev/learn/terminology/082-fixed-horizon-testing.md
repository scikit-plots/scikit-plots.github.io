🧫  ****Fixed-Horizon Testing****

# Fixed-Horizon Testing[#](#fixed-horizon-testing "Link to this heading")

**Testing where the sample size is fixed in advance and analysed only at the end.**

## What it is[#](#what-it-is "Link to this heading")

****Fixed-horizon testing**** is the general statistical principle behind the classic
experiment: ****decide the sample size**** \(n\) ****(or end time) in advance, collect data
to that point, and run the hypothesis test exactly once.**** The “horizon” is that
pre-committed stopping point. Applied to an A/B test specifically, this **is** the
****traditional A/B test****.

## Why the horizon matters[#](#why-the-horizon-matters "Link to this heading")

Fixing it up front is what keeps the statistics honest: the ****Type I error stays at****
\(\alpha\), ****peeking is ruled out**** (checking early and stopping on significance
inflates false positives), and the resulting ****p-values and confidence intervals remain
valid**** under their assumptions.

## The procedure[#](#the-procedure "Link to this heading")

State \(H\_0\) and \(H\_1\); choose \(\alpha\) (say 0.05); run an ****a-priori
power analysis**** to size the sample; fix the horizon; collect to it; test once; decide.

## Example[#](#example "Link to this heading")

To detect a ****+10% lift**** (5% → 5.5%) at \(\alpha = 0.05\) and ****power 0.80****, an
a-priori power analysis calls for ****≈ 7,850 users per variant****. You stop at that horizon
and run a single two-proportion z-test: \(p \le 0.05\) rejects \(H\_0\), otherwise
you fail to reject.

## Strengths and limits[#](#strengths-and-limits "Link to this heading")

It is ****simple, widely accepted, and preserves error guarantees****. The price is
****rigidity****: no early stop even when the result is already obvious, wasted samples when
an effect is large, and no continuous monitoring. ****Sequential and adaptive**** methods
(α-spending, Bayesian updating, bandits) trade some of that simplicity for the ability to
stop early.

---

****Mind map — connected ideas****

> [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Stopping Rules](071-stopping-rules.html) · [Sequential Settings](058-sequential-settings.html) · [Type I Error](080-type-i-error.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Standard Error (SE)](084-standard-error-se.html)

---

****More in A/B Testing & Experimentation****

> [A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Treatment Effect](072-treatment-effect.html)

---

**Theme:** [A/B Testing & Experimentation](index.html#term-theme-abtest)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Fixed-Horizon Testing](https://insightful-data-lab.com/2025/08/25/fixed-horizon-testing/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)