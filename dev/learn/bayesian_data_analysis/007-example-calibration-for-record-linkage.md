# Example — Calibration for Record Linkage[#](#example-calibration-for-record-linkage "Link to this heading")

****Part 1 · Stage 1 · 🎲 The Bayesian Idea**** · Lesson 007 of 144 · **beginner**

[◀ Previous · Example — Probabilities from Football Point Spreads](006-example-probabilities-from-football-point-spreads.html) · [Next · Some Useful Results from Probability Theory ▶](008-some-useful-results-from-probability-theory.html)

## Are two records the same person?[#](#are-two-records-the-same-person "Link to this heading")

****Record linkage**** is the problem of deciding which records in two files — a census and a survey, two
hospital databases — refer to the ****same individual****, when there is no shared unique key and the
fields are noisy: misspelled names, transposed digits, missing values. Each candidate pair gets a
****score**** from comparing its fields, and the question is what that score **means**.

## From score to probability[#](#from-score-to-probability "Link to this heading")

A score is only useful if it can be turned into \(\Pr(\text{match} \mid \text{score})\). Bayes’
rule supplies the conversion: with a ****prior**** probability that a random pair matches, and the
****likelihood**** of the observed score under matching and non-matching pairs,

\[\Pr(\text{match} \mid \text{score})
= \frac{p(\text{score} \mid \text{match}) \; \pi}
{p(\text{score} \mid \text{match}) \; \pi
+ p(\text{score} \mid \text{non-match}) \, (1 - \pi)} .\]

The prior \(\pi\) matters enormously: comparing two files of size \(n\) produces \(n^2\)
pairs but at most \(n\) true matches, so ****most pairs are non-matches**** and \(\pi\) is tiny. A
score that looks convincing can still leave the pair more likely a coincidence.

## Calibration[#](#calibration "Link to this heading")

The point of the example is ****calibration****: among all pairs assigned probability 0.9, roughly 90%
should truly be matches. Calibration is ****checkable****, by holding out pairs whose truth is known:

```
import numpy as np
# bin predicted match probabilities; compare bin mean to observed match rate
bins = np.linspace(0, 1, 11)
idx = np.digitize(p_match, bins) - 1
for b in range(10):
    m = idx == b
    if m.sum():
        print(f"{bins[b]:.1f}-{bins[b+1]:.1f}: predicted {p_match[m].mean():.2f}"
              f"  observed {is_match[m].mean():.2f}  (n={m.sum()})")

```

A model whose stated probabilities survive this test can be ****trusted downstream****; one that does not
will quietly corrupt every analysis built on the linked file. The mismatch between fitted and observed
probabilities is a first taste of the ****posterior predictive check**** in Part II — and the decision of
**which** pairs to declare matched is a decision problem, with its own costs for false links and missed
ones.

> **See also**
> ****Related lessons:**** [Probability as a Measure of Uncertainty](005-probability-as-a-measure-of-uncertainty.html) · [Example — Probabilities from Football Point Spreads](006-example-probabilities-from-football-point-spreads.html) · [Posterior predictive checking](042-posterior-predictive-checking.html) · [Bayesian decision theory in diﬀerent contexts](057-bayesian-decision-theory-in-different-contexts.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/11/08/example-calibration-for-record-linkage/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)