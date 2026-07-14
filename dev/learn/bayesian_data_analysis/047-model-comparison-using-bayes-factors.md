# Model comparison using Bayes factors[#](#model-comparison-using-bayes-factors "Link to this heading")

****Part 2 · Stage 6 · 🔍 Model Checking & Comparison**** · Lesson 047 of 144 · **intermediate**

[◀ Previous · Model comparison based on predictive performance](046-model-comparison-based-on-predictive-performance.html) · [Next · Continuous model expansion ▶](048-continuous-model-expansion.html) · [↑ Section](index.html)

## Betting on whole models[#](#betting-on-whole-models "Link to this heading")

If the candidate models are treated as hypotheses with prior probabilities, Bayes’ rule applies to
****them**** as well. The ****Bayes factor**** is the ratio of the two ****marginal likelihoods**** — the evidence
term that inference could ignore, now doing all the work:

\[\mathrm{BF}\_{12} = \frac{p(y \mid M\_1)}{p(y \mid M\_2)},
\qquad
p(y \mid M\_k) = \int p(y \mid \theta\_k, M\_k) \; p(\theta\_k \mid M\_k) \; d\theta\_k .\]

It multiplies the prior odds into posterior odds. Because the marginal likelihood ****averages**** the
likelihood over the prior, it automatically penalises models that spread their prior mass over regions
the data reject — an intrinsic Occam’s razor, with no explicit parameter count.

## Three difficulties[#](#three-difficulties "Link to this heading")

That elegance carries a heavy bill.

* ****Improper priors make it undefined.**** An improper prior has an arbitrary normalising constant, which
  does not cancel; the Bayes factor takes an arbitrary value.
* ****Vague proper priors favour the simpler model**** — the ****Jeffreys–Lindley (Bartlett) paradox****.
  Widening a prior dilutes the alternative’s marginal likelihood, so a diffuse prior on the alternative
  drives the Bayes factor toward the null ****no matter what the data say****, and the effect does not
  vanish as \(n\) grows.
* ****It is hard to compute.**** The marginal likelihood is exactly the normalising constant that MCMC is
  built to avoid, and naive estimators of it are notoriously bad.

## The sensitivity is the real objection[#](#the-sensitivity-is-the-real-objection "Link to this heading")

Notice what makes this different from ordinary prior sensitivity. Changing \(\mathrm{Beta}(1,1)\) to
\(\mathrm{Beta}(30,30)\) may barely move the ****posterior**** for \(\theta\) — but it can change the
Bayes factor substantially, because the evidence integrates the likelihood against the prior itself. A
quantity that is insensitive where inference is sensitive, and sensitive where inference is not, is a
poor guide.

```
# Bayes factors demand priors you would defend as *predictions*, not as regularisers.
# In practice, prefer:
import arviz as az
az.compare({"m1": idata1, "m2": idata2})   # predictive comparison, no marginal likelihood

```

## When to use it[#](#when-to-use-it "Link to this heading")

Bayes factors are appropriate when the model space is genuinely ****discrete and exhaustive**** — one of
these hypotheses is true — and the priors are honest, informative statements you would stake a
prediction on. That describes some scientific hypothesis tests and few applied models. Gelman’s
recommended route is to ****bypass the choice****: check models predictively, compare them by elpd, and,
where they disagree, ****expand**** rather than select — the subject of the next lesson.

> **Hint**
> ****Related lessons:**** [Measures of predictive accuracy](045-measures-of-predictive-accuracy.html) · [Model comparison based on predictive performance](046-model-comparison-based-on-predictive-performance.html) · [Noninformative Prior Distributions](018-noninformative-prior-distributions.html) · [Continuous model expansion](048-continuous-model-expansion.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/10/model-comparison-using-bayes-factors/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)