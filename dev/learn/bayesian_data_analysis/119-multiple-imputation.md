# Multiple imputation[#](#multiple-imputation "Link to this heading")

****Part 4 · Stage 14 · 🛡️ Robustness & Missing Data**** · Lesson 119 of 144 · **advanced**

[◀ Previous · Notation](118-notation.html) · [Next · Missing data in the multivariate normal and t models ▶](120-missing-data-in-the-multivariate-normal-and-t-models.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Fill in the blanks, honestly[#](#fill-in-the-blanks-honestly "Link to this heading")

The obvious fix for a missing value — plug in a single best guess (the mean, a regression prediction) —
is quietly wrong: it treats an ****estimate as if it were known****, so every downstream standard error comes
out too small. ****Multiple imputation**** repairs this by filling the gaps not once but ****many**** times,
carrying the uncertainty about the missing values all the way through to the final answer.

## The three steps[#](#the-three-steps "Link to this heading")

1. ****Impute.**** Draw \(m\) complete datasets, each with the missing entries replaced by values sampled
   from their ****posterior predictive distribution**** given the observed data — genuine draws, not point
   estimates, so the imputations differ from one another.
2. ****Analyse.**** Run the intended analysis on each completed dataset separately, giving \(m\)
   estimates \(\hat{Q}\_k\) and their variances \(U\_k\).
3. ****Pool.**** Combine them with ****Rubin’s rules****.

\[\bar{Q} = \frac{1}{m}\sum\_k \hat{Q}\_k, \qquad
\bar{U} = \frac{1}{m}\sum\_k U\_k, \qquad
B = \frac{1}{m-1}\sum\_k (\hat{Q}\_k - \bar{Q})^2,\]\[T = \bar{U} + \Bigl(1 + \tfrac{1}{m}\Bigr) B .\]

The total variance \(T\) is the heart of it. \(\bar{U}\) is the ordinary within-imputation
uncertainty; \(B\), the ****between-imputation**** variance, measures how much the answer wobbles as the
imputations change — and that term is ****exactly the extra uncertainty due to missingness**** that single
imputation throws away.

```
import numpy as np
Qk = np.array([analyze(dataset) for dataset in imputed_datasets])   # m estimates
Uk = np.array([variance(dataset) for dataset in imputed_datasets])  # m variances
Q_bar = Qk.mean()
U_bar = Uk.mean()
B = Qk.var(ddof=1)                                                  # between-imputation
T = U_bar + (1 + 1/len(Qk)) * B                                     # total variance
se = np.sqrt(T)

```

## The Bayesian reading[#](#the-bayesian-reading "Link to this heading")

Multiple imputation **is** a Bayesian computation in disguise: the missing values are ****unknown
parameters****, and the \(m\) completed datasets are ****draws from their posterior****. In a fully
Bayesian model you get this for free — sample \(y\_{\text{mis}}\) jointly with \(\theta\) in one
MCMC run, and the posterior already integrates over the missing values with no separate pooling step.
Rubin’s rules are what you use when the analysis model and the imputation model are ****separate programs****;
a joint Bayesian model makes them one.

## Practicalities[#](#practicalities "Link to this heading")

A few settled points. Classic advice said \(m = 5\); modern practice prefers ****twenty or more****,
since it is cheap and stabilises \(B\). The ****imputation model must be at least as rich as the
analysis model**** — if you will study an interaction, the imputation must include it, or the imputations
will erase it. And it all rests on ****MAR****: multiple imputation handles ignorable missingness, and MNAR
still demands an explicit model. Within those limits it is the standard, principled way to keep
incomplete data from silently understating what you do not know.

> **Hint**
> ****Related lessons:**** [Notation](118-notation.html) · [Missing data in the multivariate normal and t models](120-missing-data-in-the-multivariate-normal-and-t-models.html) · [Example: multiple imputation for a series of polls](121-example-multiple-imputation-for-a-series-of-polls.html) · [Missing values with counted data](122-missing-values-with-counted-data.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/07/multiple-imputation/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)