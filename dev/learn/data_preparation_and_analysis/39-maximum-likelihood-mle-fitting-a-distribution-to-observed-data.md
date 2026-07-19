# Maximum Likelihood (MLE): Fitting a Distribution to Observed Data[#](#maximum-likelihood-mle-fitting-a-distribution-to-observed-data "Link to this heading")

****Stage 6 · 🎯 Classification & Logistic Regression**** · Lesson 39 of 56 · **advanced**

[◀ Previous · Logistic Regression: Modeling Binary Outcomes via Odds and Log-Odds](38-logistic-regression-modeling-binary-outcomes-via-odds-and-log-odds.html) · [Next · Assessing Model Fit in Logistic Regression ▶](40-assessing-model-fit-in-logistic-regression.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What parameters best explain the data?[#](#what-parameters-best-explain-the-data "Link to this heading")

How does logistic regression actually ****choose**** its coefficients, when there is no closed-form
formula? The answer is a principle general enough to fit almost any model: ****maximum likelihood
estimation**** (MLE). Its question is simple and intuitive — **of all possible parameter values, which
ones make the** ****data I actually observed**** **most probable?**

## The likelihood[#](#the-likelihood "Link to this heading")

The key object is the ****likelihood****. For a candidate set of parameters \(\theta\), the likelihood
\(L(\theta)\) is the probability of the observed data ****computed under those parameters**** — but
read as a function of \(\theta\), with the data held fixed. A parameter value under which the
observed data would be very ****improbable**** has low likelihood; one under which the data looks
****typical**** has high likelihood. Because independent observations multiply, the likelihood is a
****product**** of per-observation probabilities, and it is usually easier to work with its logarithm, the
****log-likelihood****, which turns the product into a sum without moving the maximum.

## Maximising it[#](#maximising-it "Link to this heading")

****Maximum likelihood**** simply picks the \(\theta\) that makes \(L(\theta)\) — or the
log-likelihood — as ****large as possible****. For simple cases this has a tidy answer: the MLE of a normal
distribution’s mean is just the ****sample mean****, and of a coin’s bias the ****observed proportion**** of
heads. For models like logistic regression there is ****no formula****, so the maximum is found
****numerically****, by iterative optimisation that climbs the log-likelihood to its peak.

## Why it matters here[#](#why-it-matters-here "Link to this heading")

MLE ties much of this course together. Logistic regression’s coefficients ****are**** the maximum-likelihood
estimates. Least squares is itself MLE in disguise — minimising squared errors is **exactly** maximising
likelihood when the errors are ****normally distributed****. And the precision of these estimates is
governed by the ****Cramér–Rao bound**** from Stage 2, which sets the best variance any unbiased estimator
can reach. The next lessons use likelihood again — to ****assess**** how well a fitted logistic model fits.

> **Hint**
> ****Related lessons:**** [Logistic Regression: Modeling Binary Outcomes via Odds and Log-Odds](38-logistic-regression-modeling-binary-outcomes-via-odds-and-log-odds.html) · [Least Squares Regression](31-least-squares-regression.html) · [Harald Cramér](14-harald-cramer.html) · [Assessing Model Fit in Logistic Regression](40-assessing-model-fit-in-logistic-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/16/maximum-likelihood-mle-fitting-a-distribution-to-observed-data/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: advanced](../../_tags/level-advanced.html)