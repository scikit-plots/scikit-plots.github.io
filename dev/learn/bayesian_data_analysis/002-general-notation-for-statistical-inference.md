# General Notation for Statistical Inference[#](#general-notation-for-statistical-inference "Link to this heading")

****Part 1 · Stage 1 · 🎲 The Bayesian Idea**** · Lesson 002 of 144 · **beginner**

[◀ Previous · The three steps of Bayesian data analysis](001-the-three-steps-of-bayesian-data-analysis.html) · [Next · Bayesian Inference ▶](003-bayesian-inference.html) · [↑ Section](index.html)

## The three symbols[#](#the-three-symbols "Link to this heading")

Bayesian writing is remarkably compact once its notation is fixed. Three symbols carry most of the
weight:

* \(\theta\) — the ****unobservable**** quantities: parameters, or anything else you want to learn.
* \(y\) — the ****observed**** data.
* \(\tilde{y}\) — ****potentially observable**** data: future or replicated observations you have not
  yet seen. (Predictors, when present, are written \(x\).)

## The joint model[#](#the-joint-model "Link to this heading")

A full probability model is a ****joint distribution**** over the unknowns and the observables, which
always factors into prior times likelihood:

\[p(\theta, y) = p(\theta)\, p(y \mid \theta).\]

Everything else follows by conditioning and marginalising. Inference about parameters is
\(p(\theta \mid y)\); prediction of new data is the ****posterior predictive****
\(p(\tilde{y} \mid y)\), obtained by averaging the likelihood over the posterior.

## Exchangeability[#](#exchangeability "Link to this heading")

Why is it ever legitimate to model observations as ****identically distributed****? The Bayesian answer is
****exchangeability****: if the labels on the observations carry no information — if any reordering of
\(y\_1, \dots, y\_n\) is equally plausible — then their joint distribution can be written as
independent draws given some parameter, mixed over a distribution for that parameter. Exchangeability,
not an assumption of “random sampling”, is what licenses the usual iid likelihood, and it becomes the
foundation of hierarchical models later in this course.

## Read the conditioning bar[#](#read-the-conditioning-bar "Link to this heading")

One habit repays itself constantly: read every vertical bar as “****given****”, and check what is on its
right. \(p(y \mid \theta)\) and \(p(\theta \mid y)\) are built from the same joint model but
answer opposite questions. Bayesian and frequentist methods differ mainly in ****what they condition on****
— the Bayesian conditions on the data actually observed and treats \(\theta\) as random; the
frequentist conditions on \(\theta\) and treats the data as random.

> **Hint**
> ****Related lessons:**** [The three steps of Bayesian data analysis](001-the-three-steps-of-bayesian-data-analysis.html) · [Bayesian Inference](003-bayesian-inference.html) · [Some Useful Results from Probability Theory](008-some-useful-results-from-probability-theory.html) · [Exchangeability and hierarchical models](034-exchangeability-and-hierarchical-models.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/08/general-notation-for-statistical-inference/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)