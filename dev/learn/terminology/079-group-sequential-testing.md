🧫  ****Group Sequential Testing****

# Group Sequential Testing[#](#group-sequential-testing "Link to this heading")

**Frequentist designs allowing interim analyses at planned points with adjusted error spending.**

## What it is[#](#what-it-is "Link to this heading")

****Group sequential testing**** lets you ****analyse accumulating data at several pre-planned
interim points**** during an experiment — not just once at the end — and at each look
decide to ****stop for efficacy**** (the effect is clearly there), ****stop for futility**** (it
clearly isn’t), or ****continue****. It is standard in clinical trials and increasingly used
in A/B testing where stopping early saves resources.

## The peeking problem it solves[#](#the-peeking-problem-it-solves "Link to this heading")

Repeatedly checking a fixed-\(\alpha\) test and stopping the moment \(p < 0.05\)
****inflates the Type I error**** badly — with many looks, the chance of a false positive can
climb to ****20–30%****. Group sequential designs fix this with an ****α-spending function****
that divides the error budget across looks so the **overall** Type I rate stays at
\(\alpha\).

## How it works[#](#how-it-works "Link to this heading")

Plan the number of interim analyses up front, then use an ****α-spending rule**** to set a
significance cutoff at each: early looks get ****stricter**** thresholds, later looks more
****lenient**** ones, and you stop as soon as a threshold is crossed.

## The α-spending rules[#](#the-spending-rules "Link to this heading")

* ****O’Brien–Fleming**** — very strict early, lenient late (final ≈ fixed \(\alpha\)).
* ****Pocock**** — the same moderate threshold at every look.
* ****Lan–DeMets**** — a flexible spending function that allocates \(\alpha\)
  adaptively, without fixing the look times in advance.

## Example[#](#example "Link to this heading")

A trial of 1,000 patients, analysed every 250 with total \(\alpha = 0.05\) under an
O’Brien–Fleming schedule, might spend \(\alpha = 0.001, 0.01, 0.02, 0.04\) across the
four looks. A p-value of 0.008 at 500 patients crosses the second bound → ****stop early
for efficacy****.

## Where it sits[#](#where-it-sits "Link to this heading")

It is the middle ground between extremes: more efficient than the ****fixed-horizon**** A/B
test (one look, may waste data) and statistically valid unlike ****naive peeking**** (which
inflates false positives), while ****bandit / adaptive**** methods go further still by
reallocating traffic continuously.

---

**Theme:** [A/B Testing & Experimentation](index.html#term-theme-abtest)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[O’Brien–Fleming (OBF) Method](078-o-brienfleming-obf-method.html) · [Pocock Method](077-pocock-method.html) · [Stopping Rules](071-stopping-rules.html) · [Sequential Settings](058-sequential-settings.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Type I Error](080-type-i-error.html)

---

> **Hint**
> ****More in A/B Testing & Experimentation****

[A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Treatment Effect](072-treatment-effect.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Group Sequential Testing](https://insightful-data-lab.com/2025/08/25/group-sequential-testing/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)