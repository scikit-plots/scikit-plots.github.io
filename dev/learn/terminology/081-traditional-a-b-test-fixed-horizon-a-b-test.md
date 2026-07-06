🧫  ****Traditional A/B Test (Fixed-Horizon A/B Test)****

# Traditional A/B Test (Fixed-Horizon A/B Test)[#](#traditional-a-b-test-fixed-horizon-a-b-test "Link to this heading")

**A test analysed once at a pre-committed sample size in order to control error rates.**

## What it is[#](#what-it-is "Link to this heading")

A ****traditional A/B test**** — equivalently a ****fixed-horizon A/B test**** — is the classical
approach: ****predefine a sample size or duration, collect data until that point, and run
the hypothesis test exactly once at the end****. No interim decisions.

## The procedure[#](#the-procedure "Link to this heading")

1. State the hypotheses (\(H\_0\): \(CR\_A = CR\_B\)).
2. Choose a significance level \(\alpha\) (typically 0.05).
3. Run an ****a-priori power analysis**** to find the required sample size \(n\).
4. ****Fix the horizon**** — e.g. “stop at 10,000 users per variant.”
5. Collect data to that horizon.
6. Run the test (a ****two-proportion z-test**** for conversion rates).
7. Reject or fail to reject \(H\_0\).

The defining feature is ****no peeking****: because the analysis happens once, at a
pre-committed sample size, the Type I error stays at \(\alpha\).

## Example[#](#example "Link to this heading")

To test a new button colour with a 5% baseline and a ****minimum detectable lift**** of +10%,
an a-priori power analysis might call for ****~8,000 users per group****. You run until each
arm hits 8,000, then run a two-proportion z-test, and only then decide whether B beats A.

## Strengths and limits[#](#strengths-and-limits "Link to this heading")

It is ****rigorous, widely understood, and easy to explain****, and it controls Type I error
cleanly when its assumptions hold. The cost is ****inflexibility****: you must wait for the
full horizon, which ****wastes traffic**** when one variant is clearly better early, and it
can’t adapt in real time. The modern alternatives relax exactly this — ****sequential
testing**** (interim looks via α-spending), ****Bayesian A/B**** (probability of superiority,
peek freely), and ****multi-armed bandits**** (shift traffic to the winner as you learn).

---

****Mind map — connected ideas****

> [Type I Error](080-type-i-error.html) · [Stopping Rules](071-stopping-rules.html) · [Sequential Settings](058-sequential-settings.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bandit Algorithms](113-bandit-algorithms.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html)

---

****More in A/B Testing & Experimentation****

> [A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Treatment Effect](072-treatment-effect.html)

---

**Theme:** [A/B Testing & Experimentation](index.html#term-theme-abtest)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Traditional A/B Test (Fixed-Horizon A/B Test)](https://insightful-data-lab.com/2025/08/25/traditional-a-b-test-fixed-horizon-a-b-test/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)