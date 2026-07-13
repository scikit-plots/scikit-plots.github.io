# Logistic Regression: Modeling Binary Outcomes via Odds and Log-Odds[#](#logistic-regression-modeling-binary-outcomes-via-odds-and-log-odds "Link to this heading")

****Stage 6 · 🎯 Classification & Logistic Regression**** · Lesson 38 of 56 · **advanced**

[◀ Previous · How Shapley Values Work](37-how-shapley-values-work.html) · [Next · Maximum Likelihood (MLE): Fitting a Distribution to Observed Data ▶](39-maximum-likelihood-mle-fitting-a-distribution-to-observed-data.html) · [↑ Section](index.html)

## When the outcome is yes or no[#](#when-the-outcome-is-yes-or-no "Link to this heading")

Regression so far has predicted a ****number**** — a fare, a price. But many outcomes are ****binary****: will
a customer ****churn**** or not? will a student ****return**** next year? Ordinary linear regression fails
here, because a straight line runs off to \(\pm\infty\) and would predict “probabilities” ****below
0 or above 1****. ****Logistic regression**** is the standard model for a ****yes/no**** outcome, and it works by
predicting a ****probability**** instead.

## Odds and log-odds[#](#odds-and-log-odds "Link to this heading")

The trick is to transform the probability so a linear model fits. Start with the ****odds**** — the ratio
of the probability of the event to its complement, \(p / (1 - p)\) — which stretches \([0, 1]\)
out to \([0, \infty)\). Then take the logarithm, giving the ****log-odds**** or ****logit****, which spans
****all**** real numbers. Logistic regression makes **this** linear in the features:

\[\ln\!\left(\frac{p}{1 - p}\right) = \beta\_0 + \beta\_1 x\_1 + \dots + \beta\_p x\_p.\]

The model is an ordinary linear equation — just on the ****log-odds scale**** rather than the probability
scale.

## The logistic curve[#](#the-logistic-curve "Link to this heading")

To get a probability back, invert the transform. Solving for \(p\) gives the ****logistic****
(sigmoid) function:

\[p = \frac{1}{1 + e^{-z}}, \qquad z = \beta\_0 + \beta\_1 x\_1 + \dots + \beta\_p x\_p.\]

This S-shaped curve takes the linear combination \(z\) — any real number — and squashes it
smoothly into a valid probability between 0 and 1. Large positive \(z\) gives \(p\) near 1,
large negative near 0, and \(z = 0\) gives \(p = 0.5\).

## Reading coefficients[#](#reading-coefficients "Link to this heading")

The coefficients read on the ****odds**** scale. A one-unit rise in \(x\_j\) adds \(\beta\_j\) to the
log-odds, which ****multiplies**** the odds by \(e^{\beta\_j}\) — the ****odds ratio****. So
\(e^{\beta\_j} > 1\) means the feature raises the odds of the event, \(< 1\) lowers them. In
Python it is `LogisticRegression` in scikit-learn, or `Logit` in statsmodels for the full
coefficient table. Unlike least squares, its coefficients have ****no closed form**** — they are found by
****maximum likelihood****, the subject of the next lesson.

> **Hint**
> ****Related lessons:**** [Maximum Likelihood (MLE): Fitting a Distribution to Observed Data](39-maximum-likelihood-mle-fitting-a-distribution-to-observed-data.html) · [Assessing Model Fit in Logistic Regression](40-assessing-model-fit-in-logistic-regression.html) · [Binary Classification Models – Conceptual Framework and Evaluation Metrics](51-binary-classification-models-conceptual-framework-and-evaluation-metrics.html) · [Complete and Quasi-Complete Separation in Logistic Regression](41-complete-and-quasi-complete-separation-in-logistic-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/16/logistic-regression-modeling-binary-outcomes-via-odds-and-log-odds/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: advanced](../../_tags/level-advanced.html)