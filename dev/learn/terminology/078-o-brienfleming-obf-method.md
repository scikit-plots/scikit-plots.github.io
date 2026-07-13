🎰  ****O'Brien–Fleming (OBF) Method****

# O’Brien–Fleming (OBF) Method[#](#o-brienfleming-obf-method "Link to this heading")

**A group-sequential boundary that is very strict early and relaxes toward the final analysis.**

## What it is[#](#what-it-is "Link to this heading")

The ****O’Brien–Fleming (OBF) method**** is a ****group-sequential design**** that controls the
overall Type I error \(\alpha\) across multiple interim analyses with a distinctive
spending shape: ****very strict early, lenient late****. Early on you need overwhelming
evidence to stop; by the final look the threshold is essentially the usual
\(\alpha\).

## The spending shape[#](#the-spending-shape "Link to this heading")

For \(\alpha = 0.05\) (two-sided) with 4 looks, the OBF critical z-values are roughly

* 25% — \(z \approx 3.47\) (\(p \approx 0.0005\))
* 50% — \(z \approx 2.45\) (\(p \approx 0.014\))
* 75% — \(z \approx 2.00\) (\(p \approx 0.045\))
* 100% — \(z \approx 1.98\) (\(p \approx 0.048\))

so the early bar is extreme and the final bar is almost a normal \(\alpha = 0.05\)
test. This is the opposite philosophy to Pocock’s flat \(z \approx 2.41\).

## Example[#](#example "Link to this heading")

A heart-drug trial with 4 interim looks: at 25% an observed \(p = 0.002\)
(\(z \approx 3.1\)) is ****not**** below the OBF bound (\(p \approx 0.0005\)), so
continue; at 50%, \(p = 0.009\) (\(z \approx 2.6\)) clears the bound
(\(\approx 0.014\)) → ****stop early for efficacy****.

## Strengths and trade-offs[#](#strengths-and-trade-offs "Link to this heading")

OBF gives ****strong early protection against false positives**** (random noise can’t stop
the trial prematurely) while still permitting an early stop for a genuinely large effect,
and its ****final test barely loses power**** versus fixed-horizon. The downside: it ****rarely
stops early**** unless the effect is huge, so you often collect nearly the full sample.
That conservatism is exactly why it suits ****safety-critical**** domains like medicine,
whereas Pocock fits exploratory or business A/B tests where stopping early saves money.

---

**Theme:** [Sequential Methods & Bandits](index.html#term-theme-bandits)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Pocock Method](077-pocock-method.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Stopping Rules](071-stopping-rules.html) · [Frequentist](059-frequentist.html) · [Sequential Settings](058-sequential-settings.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html)

---

> **Hint**
> ****More in Sequential Methods & Bandits****

[Bandit Algorithms](113-bandit-algorithms.html) · [Pocock Method](077-pocock-method.html) · [Sequential Probability Ratio Test (SPRT)](076-sequential-probability-ratio-test-sprt.html) · [Sequential Settings](058-sequential-settings.html) · [Thompson Sampling (TS) in Bandits (Multi-Armed Bandit Problem (MAB))](050-thompson-sampling-ts-in-bandits-multi-armed-band.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [O’Brien–Fleming (OBF) Method](https://insightful-data-lab.com/2025/08/25/obrien-fleming-obf-method/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)