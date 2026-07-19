# Correlation Coefficients in Python (Pearson, Spearman, Kendall)[#](#correlation-coefficients-in-python-pearson-spearman-kendall "Link to this heading")

****Stage 2 · 🔗 Associations & Correlation**** · Lesson 12 of 56 · **beginner**

[◀ Previous · Measuring Associations Between Two Continuous Variables](11-measuring-associations-between-two-continuous-variables.html) · [Next · Karl Pearson ▶](13-karl-pearson.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Three coefficients[#](#three-coefficients "Link to this heading")

Pearson is one of ****three**** standard correlation coefficients, and the other two fix its blind spots.
All three run from \(-1\) to \(+1\) and share the same sign convention, but they measure
****different notions**** of “moving together”.

## Pearson, Spearman, Kendall[#](#pearson-spearman-kendall "Link to this heading")

The trio:

* ****Pearson**** \(r\) — the ****linear**** coefficient from the last lesson; assumes a straight-line relationship and is sensitive to outliers.
* ****Spearman**** \(\rho\) — Pearson applied to the ****ranks**** of the data. It captures any ****monotonic**** relationship (always rising or always falling, even if curved), and, working on ranks, it is ****robust to outliers**** and fine for ****ordinal**** data:

  \[\rho = 1 - \frac{6 \sum d\_i^2}{n(n^2 - 1)}, \qquad d\_i = \operatorname{rank}(x\_i) - \operatorname{rank}(y\_i).\]
* ****Kendall**** \(\tau\) — based on counting ****concordant**** versus ****discordant**** pairs:

  \[\tau = \frac{n\_c - n\_d}{\tfrac{1}{2}\,n(n-1)},\]

  also a monotonic measure, often preferred for ****small samples**** and data with many ****ties****.

## Which to use[#](#which-to-use "Link to this heading")

A rule of thumb: reach for ****Pearson**** when the relationship looks ****linear**** and the data are
well-behaved; switch to ****Spearman**** or ****Kendall**** when it is ****monotonic but curved****, when there
are ****outliers****, or when a variable is ****ordinal**** rather than numeric. Spearman and Kendall usually
agree; Kendall is the more conservative on small or tie-heavy data.

## In Python[#](#in-python "Link to this heading")

All three are one call away. A whole correlation matrix comes from `df.corr(method="pearson")` (or
`"spearman"` / `"kendall"`); for a single pair with a ****p-value****, use `scipy.stats.pearsonr`,
`spearmanr` or `kendalltau`. On the taxi data, fare against distance shows a strong positive
correlation by any of the three.

> **Hint**
> ****Related lessons:**** [Measuring Associations Between Two Continuous Variables](11-measuring-associations-between-two-continuous-variables.html) · [Measuring Associations in Data](10-measuring-associations-in-data.html) · [Karl Pearson](13-karl-pearson.html) · [Feature Importance in Linear Regression](33-feature-importance-in-linear-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/14/correlation-coefficients-in-python-pearson-spearman-kendall/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: beginner](../../_tags/level-beginner.html)