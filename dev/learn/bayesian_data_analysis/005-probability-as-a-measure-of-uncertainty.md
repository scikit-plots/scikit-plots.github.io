# Probability as a Measure of Uncertainty[#](#probability-as-a-measure-of-uncertainty "Link to this heading")

****Part 1 · Stage 1 · 🎲 The Bayesian Idea**** · Lesson 005 of 144 · **beginner**

[◀ Previous · Discrete Bayesian Examples – Genetics and Spell Checking (with θ)](004-discrete-bayesian-examples-genetics-and-spell-checking-with.html) · [Next · Example — Probabilities from Football Point Spreads ▶](006-example-probabilities-from-football-point-spreads.html) · [↑ Section](index.html)

## Uncertainty, not just frequency[#](#uncertainty-not-just-frequency "Link to this heading")

Bayesian analysis uses ****probability to quantify uncertainty**** — about anything, not merely about
repeatable experiments. “The probability this coin lands heads is 0.5” and “the probability this
patient carries the gene is 0.2” are, in this framework, the same kind of statement: a ****numerical
measure of how uncertain you are****, given what you know.

## Where the numbers come from[#](#where-the-numbers-come-from "Link to this heading")

Three standard justifications are offered for assigning a probability:

* ****Symmetry**** — if \(n\) outcomes are indistinguishable in every relevant respect, each gets
  \(1/n\) (a fair die, a shuffled deck).
* ****Frequency**** — the long-run proportion in a sequence of similar trials (the rate of a disease).
* ****Subjective assessment**** — a considered degree of belief, when neither symmetry nor a reference
  sequence is available.

Look closely and all three lean on ****judgement****. Symmetry requires deciding **which** respects are
relevant; frequency requires choosing **which** trials count as “similar”. The choice of a ****reference
set**** is unavoidably a modelling decision, so even “objective” probabilities are conditional on
context.

## Conditional on what you know[#](#conditional-on-what-you-know "Link to this heading")

This is why Bayesian probabilities are always written with a ****conditioning bar****: they are
\(p(\theta \mid \text{information})\). The probability that the patient carries the gene changes —
legitimately, not fickly — when a son is born unaffected. Probability is not a property of the
parameter; it is a property of your ****state of knowledge**** about it.

## Subjective, but disciplined[#](#subjective-but-disciplined "Link to this heading")

The obvious objection is that subjective probabilities are arbitrary. Two disciplines answer it.
****Coherence****: degrees of belief must obey the probability axioms, or you can be led into a set of bets
you are certain to lose (the Dutch-book argument). And ****calibration****: of all the events to which you
assign probability 0.7, about 70% should actually occur — an empirically checkable standard, and the
subject of the next two lessons. Bayesian analysis does not demand that priors match anyone’s inner
convictions; it demands that assumptions be ****stated clearly**** and their implications ****checked****.

> **Hint**
> ****Related lessons:**** [Bayesian Inference](003-bayesian-inference.html) · [Example — Probabilities from Football Point Spreads](006-example-probabilities-from-football-point-spreads.html) · [Example — Calibration for Record Linkage](007-example-calibration-for-record-linkage.html) · [Noninformative Prior Distributions](018-noninformative-prior-distributions.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/08/probability-as-a-measure-of-uncertainty/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)