# Measuring Associations Between Two Continuous Variables[#](#measuring-associations-between-two-continuous-variables "Link to this heading")

****Stage 2 · 🔗 Associations & Correlation**** · Lesson 11 of 56 · **beginner**

[◀ Previous · Measuring Associations in Data](10-measuring-associations-in-data.html) · [Next · Correlation Coefficients in Python (Pearson, Spearman, Kendall) ▶](12-correlation-coefficients-in-python-pearson-spearman-kendall.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Covariance: direction[#](#covariance-direction "Link to this heading")

The starting point for two continuous variables is ****covariance****, which measures whether they vary
in the ****same direction****:

\[\operatorname{cov}(X, Y) = \frac{1}{n-1}\sum\_{i=1}^{n} (x\_i - \bar{x})(y\_i - \bar{y}).\]

When above-average \(x\) tends to pair with above-average \(y\), the products are positive and
covariance is ****positive****; when high \(x\) pairs with low \(y\), it is ****negative****; near
zero means no linear tendency.

## The problem with covariance[#](#the-problem-with-covariance "Link to this heading")

Covariance has a flaw as a ****strength**** measure: its size depends on the variables’ ****units****.
Covariance of fare and distance changes if you switch miles to kilometres, so its magnitude is ****not
comparable**** across variable pairs — it ranges without bound. You can read its ****sign****, but not judge
“how strong” from its value.

## Pearson correlation[#](#pearson-correlation "Link to this heading")

The fix is to ****standardise**** covariance by the two standard deviations, giving the ****Pearson
correlation coefficient****:

\[r = \frac{\operatorname{cov}(X, Y)}{\sigma\_X \, \sigma\_Y}
= \frac{\sum\_{i=1}^{n} (x\_i - \bar{x})(y\_i - \bar{y})}
{\sqrt{\sum (x\_i - \bar{x})^2}\,\sqrt{\sum (y\_i - \bar{y})^2}}.\]

Dividing out the units confines \(r\) to the range \([-1, 1]\), making it ****comparable****
everywhere.

## Reading r[#](#reading-r "Link to this heading")

On that scale, \(r = +1\) is a ****perfect positive**** linear relationship, \(r = -1\) a
****perfect negative**** one, and \(r = 0\) ****no linear**** relationship. The crucial caveat: Pearson
measures ****linear**** association only. A strong curved relationship can still give \(r \approx 0\),
and \(r\) is ****sensitive to outliers**** — reasons the next lesson reaches for rank-based
alternatives.

> **Hint**
> ****Related lessons:**** [Measuring Associations in Data](10-measuring-associations-in-data.html) · [Correlation Coefficients in Python (Pearson, Spearman, Kendall)](12-correlation-coefficients-in-python-pearson-spearman-kendall.html) · [Karl Pearson](13-karl-pearson.html) · [Least Squares Regression](31-least-squares-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/14/measuring-associations-between-two-continuous-variables/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: beginner](../../_tags/level-beginner.html)