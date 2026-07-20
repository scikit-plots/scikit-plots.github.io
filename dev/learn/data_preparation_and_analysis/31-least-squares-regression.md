# Least Squares Regression[#](#least-squares-regression "Link to this heading")

****Stage 5 · 📈 Regression**** · Lesson 31 of 56 · **intermediate**

[◀ Previous · Creating Segments of Observations for Business Reasons (RFM)](30-creating-segments-of-observations-for-business-reasons-rfm.html) · [Next · Multiple Linear Regression ▶](32-multiple-linear-regression.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Fitting a line[#](#fitting-a-line "Link to this heading")

The simplest predictive model draws a ****straight line**** through a cloud of points — predicting an
outcome \(y\) from a feature \(x\) as

\[\hat{y} = \beta\_0 + \beta\_1 x,\]

where \(\beta\_0\) is the intercept and \(\beta\_1\) the slope. On the taxi data, this is the
line predicting ****fare**** from ****distance****. The question is: of all possible lines, which one ****fits
best****?

## Residuals[#](#residuals "Link to this heading")

“Best” is defined through ****residuals**** — the vertical gaps between each observed point and the line’s
prediction:

\[e\_i = y\_i - \hat{y}\_i.\]

A residual is how wrong the model is for one point: positive when the point sits above the line,
negative below. A good line makes these gaps ****small**** overall. But small how? Summing them directly
is useless — positive and negative residuals cancel.

## Least squares[#](#least-squares "Link to this heading")

The answer is to ****square**** each residual before adding, and choose the line that makes the total as
small as possible. This is the ****least squares**** criterion, minimising the ****residual sum of squares****:

\[\text{minimise} \quad \sum\_{i=1}^{n} (y\_i - \hat{y}\_i)^2.\]

Squaring removes the sign, so gaps cannot cancel, and the line that minimises this sum is the ****line
of best fit****. For a linear model it has a neat ****closed-form**** solution — exact formulas for
\(\beta\_0\) and \(\beta\_1\), no searching required.

## Why squared?[#](#why-squared "Link to this heading")

Why squares rather than, say, absolute values? Squaring ****penalises large errors far more**** than small
ones — a residual of 4 counts sixteen times as much as a residual of 1 — so the fitted line works hard
to avoid big misses. This also makes the objective smooth and gives that unique closed-form solution,
and it coincides with ****maximum likelihood**** when the errors are normally distributed. The trade-off
is ****sensitivity to outliers****: one extreme point can pull the line noticeably — a theme the
evaluation stage revisits with residual diagnostics.

> **Hint**
> ****Related lessons:**** [Multiple Linear Regression](32-multiple-linear-regression.html) · [Feature Importance in Linear Regression](33-feature-importance-in-linear-regression.html) · [Measuring Associations Between Two Continuous Variables](11-measuring-associations-between-two-continuous-variables.html) · [Identifying Outliers Using Residuals and Studentized Residuals](54-identifying-outliers-using-residuals-and-studentized-residuals.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/16/least-squares-regression/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)