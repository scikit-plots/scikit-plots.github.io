# Example — Probabilities from Football Point Spreads[#](#example-probabilities-from-football-point-spreads "Link to this heading")

****Part 1 · Stage 1 · 🎲 The Bayesian Idea**** · Lesson 006 of 144 · **beginner**

[◀ Previous · Probability as a Measure of Uncertainty](005-probability-as-a-measure-of-uncertainty.html) · [Next · Example — Calibration for Record Linkage ▶](007-example-calibration-for-record-linkage.html) · [↑ Section](index.html)

## Assignment, not inference[#](#assignment-not-inference "Link to this heading")

This example illustrates ****probability assignment**** — how to arrive at a number — rather than Bayesian
inference itself. Its subject is the American-football ****point spread****: the bookmakers’ published
prediction of the margin by which the favourite will win. Given a spread, what is the probability the
favourite actually covers it, or simply wins?

## Three routes to a number[#](#three-routes-to-a-number "Link to this heading")

The same question is approached three ways, matching the three justifications of the previous lesson:

* ****Subjective**** — an informed fan states a probability directly.
* ****Empirical**** — count outcomes in a database of games. Across ****672**** professional games, one can
  simply tabulate how often favourites at a given spread won.
* ****Parametric**** — build a probability ****model**** for the outcome and read the probability off it.

## The parametric model[#](#the-parametric-model "Link to this heading")

The empirical route runs out of data at any particular spread, so the model earns its keep. Plotting
\(d = (\text{actual outcome}) - (\text{point spread})\) against the spread shows the differences
are roughly ****centred at zero**** with a spread of about ****14 points****, and largely ****independent of the
spread itself****. That suggests

\[d \sim \mathrm{N}(0,\; 14^2),\]

so the favourite (spread \(s\)) wins when the actual margin exceeds 0, i.e. when \(d > -s\):

```
from scipy.stats import norm
s = 3.5                                  # point spread
p_win = 1 - norm.cdf(-s, loc=0, scale=14)   # P(favourite wins)  ≈ 0.60
p_cover = 1 - norm.cdf(0, loc=0, scale=14)  # P(covers spread)   = 0.50

```

## The lessons[#](#the-lessons "Link to this heading")

Two. First, the ****model smooths and extrapolates****: it gives a probability at spreads where few games
were ever played, which raw counts cannot. Second, the model is ****checked against data**** — the
zero-centred, constant-variance normal is adopted **because** the scatterplot supports it, not because it
is convenient. Probability assignment, done honestly, already involves the third of the three steps.

> **Hint**
> ****Related lessons:**** [Probability as a Measure of Uncertainty](005-probability-as-a-measure-of-uncertainty.html) · [Example — Calibration for Record Linkage](007-example-calibration-for-record-linkage.html) · [Some Useful Results from Probability Theory](008-some-useful-results-from-probability-theory.html) · [Normal Distribution with Known Variance](015-normal-distribution-with-known-variance.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/08/example-probabilities-from-football-point-spreads/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)