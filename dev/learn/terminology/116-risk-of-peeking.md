🧫  ****Risk of Peeking****

# Risk of Peeking[#](#risk-of-peeking "Link to this heading")

**The inflated false-positive risk from repeatedly checking a fixed-horizon test early.**

## What it is[#](#what-it-is "Link to this heading")

****Peeking**** is looking at an experiment’s results ****before it officially ends**** and acting
on that interim data. The ****risk of peeking**** is the ****inflated false-positive (Type I)
rate**** that results from repeatedly checking and ****stopping as soon as significance
appears****.

## Why it breaks the test[#](#why-it-breaks-the-test "Link to this heading")

A fixed-horizon test assumes a ****single look at a predetermined sample size****. Each extra
peek is another ****independent chance**** for noise to cross \(p < 0.05\), so the true
error rate compounds far above the nominal \(\alpha\). Peek ten times at a 5% threshold
and the real false-positive rate can reach ****20–30%**** — this compounding is called ****alpha
inflation****.

## What it costs[#](#what-it-costs "Link to this heading")

Concretely: a button test shows A ahead on day 1 (\(p = 0.04\)), you stop and crown
A — but over the full two weeks ****B**** would have won. The early stop produced a ****false
conclusion****, and at scale that means wrong launches, lost revenue, and eroded trust in
experimentation.

## How to avoid it[#](#how-to-avoid-it "Link to this heading")

Four routes: ****predefine**** the sample size and duration and only check at the end; use
****sequential testing / alpha-spending**** designs built for interim looks (****group
sequential****, ****O’Brien–Fleming****, ****Pocock****); use ****Bayesian**** methods designed for
continuous monitoring; or, if peeks are unavoidable, apply ****multiplicity corrections****
(Bonferroni, Holm). The peeking problem is precisely why the whole machinery of
fixed-horizon and sequential testing exists.

---

**Theme:** [A/B Testing & Experimentation](index.html#term-theme-abtest)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Stopping Rules](071-stopping-rules.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [O’Brien–Fleming (OBF) Method](078-o-brienfleming-obf-method.html) · [Pocock Method](077-pocock-method.html) · [Type I Error](080-type-i-error.html)

---

> **Hint**
> ****More in A/B Testing & Experimentation****

[A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Treatment Effect](072-treatment-effect.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Risk of Peeking](https://insightful-data-lab.com/2025/08/24/risk-of-peeking/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)