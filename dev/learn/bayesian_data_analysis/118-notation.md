# Notation[#](#notation "Link to this heading")

****Part 4 · Stage 14 · 🛡️ Robustness & Missing Data**** · Lesson 118 of 144 · **advanced**

[◀ Previous · Robust regression using t-distributed errors](117-robust-regression-using-t-distributed-errors.html) · [Next · Multiple imputation ▶](119-multiple-imputation.html) · [↑ Section](index.html)

## A language for missingness[#](#a-language-for-missingness "Link to this heading")

Missing data need notation before they need methods, because the ****right analysis depends entirely on
why**** the data are missing. This lesson sets up the framework — due to Rubin — that makes “why” a precise,
model-able quantity rather than a vague worry.

## The pieces[#](#the-pieces "Link to this heading")

Split the complete data into what you see and what you do not, and add an indicator for which is which:

\[\begin{split}y = (y\_{\text{obs}}, y\_{\text{mis}}), \qquad
R\_{ij} = \begin{cases} 1 & y\_{ij} \text{ observed} \\ 0 & y\_{ij} \text{ missing.} \end{cases}\end{split}\]

The ****missingness indicator**** \(R\) is itself data — a matrix you fully observe — and the object that
makes the theory work is its distribution \(p(R \mid y, \phi)\), the ****missingness mechanism****. The
question is how \(R\) depends on the values \(y\), including the ones you cannot see.

## Three mechanisms[#](#three-mechanisms "Link to this heading")

Rubin’s taxonomy, in decreasing order of convenience:

* ****MCAR — missing completely at random.**** \(p(R \mid y) = p(R)\): missingness is independent of all
  data, observed and missing alike. Dropped records are then a random subsample, so complete-case
  analysis is unbiased (if wasteful). Rarely true.
* ****MAR — missing at random.**** \(p(R \mid y) = p(R \mid y\_{\text{obs}})\): missingness depends only
  on ****observed**** values. Income missing more often for the young is MAR **if age is recorded**. This is
  the workhorse assumption.
* ****MNAR — missing not at random.**** Missingness depends on the ****unobserved**** values themselves — income
  missing because it is high. Here the mechanism cannot be ignored and must be modelled explicitly.

## Ignorability[#](#ignorability "Link to this heading")

The payoff is a precise condition. When data are ****MAR**** and the missingness parameters \(\phi\) are
distinct from the model parameters \(\theta\), the mechanism is ****ignorable****: the term
\(p(R \mid y\_{\text{obs}}, \phi)\) factors out of the likelihood for \(\theta\), so you may model
the data and simply ****ignore**** \(R\). This is the **same** ignorability condition met in Stage 7 for
data collection — MAR plus parameter distinctness — now applied to missing values. Under it, Bayesian
inference proceeds by treating \(y\_{\text{mis}}\) as ****unknown parameters**** and integrating them out,
which is exactly what imputation does.

## The catch[#](#the-catch "Link to this heading")

MAR versus MNAR ****cannot be tested from the data**** — distinguishing them needs the very values that are
missing. The assumption rests on subject knowledge (why **would** these be missing?) and, where it is
doubtful, on a ****sensitivity analysis**** across plausible MNAR mechanisms. The notation’s value is exactly
this: it turns an untestable worry into an explicit assumption you can state, defend, and vary.

> **Hint**
> ****Related lessons:**** [Data-collection models and ignorability](051-data-collection-models-and-ignorability.html) · [Multiple imputation](119-multiple-imputation.html) · [Missing data in the multivariate normal and t models](120-missing-data-in-the-multivariate-normal-and-t-models.html) · [Sample surveys](052-sample-surveys.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/07/notation/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)