# Averaging Over Nuisance Parameters[#](#averaging-over-nuisance-parameters "Link to this heading")

****Part 1 · Stage 3 · 🧮 Multiparameter Models**** · Lesson 020 of 144 · **beginner**

[◀ Previous · Weakly Informative Prior Distributions](019-weakly-informative-prior-distributions.html) · [Next · Normal Data with a Noninformative Prior Distribution ▶](021-normal-data-with-a-noninformative-prior-distribution.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The parameters you don’t want[#](#the-parameters-you-don-t-want "Link to this heading")

Real models have more parameters than questions. Estimating a mean \(\mu\) usually drags along an
unknown variance \(\sigma^2\); a regression coefficient of interest comes with a dozen others. The
unwanted ones are ****nuisance parameters**** — necessary for the model to be honest, irrelevant to the
conclusion.

## Integrate, don’t fix[#](#integrate-don-t-fix "Link to this heading")

The Bayesian treatment is uniform and unremarkable: obtain the ****joint**** posterior, then ****marginalise****
the nuisance away. To learn about \(\theta\_1\) in the presence of nuisance \(\theta\_2\),

\[p(\theta\_1 \mid y) = \int p(\theta\_1, \theta\_2 \mid y) \; d\theta\_2
= \int \underbrace{p(\theta\_1 \mid \theta\_2, y)}\_{\text{conditional}}
\; \underbrace{p(\theta\_2 \mid y)}\_{\text{weight}} \; d\theta\_2 .\]

That second form is the useful one: the marginal posterior of \(\theta\_1\) is a ****mixture**** of its
conditional posteriors, weighted by how plausible each value of the nuisance is. Uncertainty about
\(\sigma^2\) is not discarded — it is ****averaged in****.

## Why plugging in is wrong[#](#why-plugging-in-is-wrong "Link to this heading")

The tempting shortcut is to fix the nuisance at an estimate, \(p(\theta\_1 \mid \hat{\theta}\_2, y)\).
This ****understates uncertainty****, and the variance decomposition says exactly by how much:

\[\mathrm{var}(\theta\_1 \mid y) = \mathrm{E}\bigl[\mathrm{var}(\theta\_1 \mid \theta\_2, y)\bigr]
+ \mathrm{var}\bigl(\mathrm{E}[\theta\_1 \mid \theta\_2, y]\bigr) .\]

Plugging in keeps only the first term and throws away the second — the variation induced by not
knowing \(\theta\_2\). This is why a normal mean with ****unknown**** variance has a heavier-tailed
\(t\) posterior rather than a normal one: the extra width is the price of honesty about
\(\sigma^2\).

## Marginalising with draws[#](#marginalising-with-draws "Link to this heading")

In simulation the operation is invisible: draw from the joint posterior, then ****ignore the columns you
do not need****.

```
# draws[:, 0] = mu, draws[:, 1] = sigma  (joint posterior draws)
mu = draws[:, 0]                 # already the marginal posterior of mu
mu.mean(), np.percentile(mu, [2.5, 97.5])

```

Dropping a column **is** integration over that parameter. It is one of the quiet reasons the
simulation-based workflow scales to models where the integrals could never be done in closed form —
starting with the normal model of the next lesson.

> **Hint**
> ****Related lessons:**** [Some Useful Results from Probability Theory](008-some-useful-results-from-probability-theory.html) · [Normal Data with a Noninformative Prior Distribution](021-normal-data-with-a-noninformative-prior-distribution.html) · [Normal Data with a Conjugate Prior Distribution](022-normal-data-with-a-conjugate-prior-distribution.html) · [Conditional and marginal posterior approximations](085-conditional-and-marginal-posterior-approximations.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/averaging-over-nuisance-parameters/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)