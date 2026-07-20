# Identifying Outliers Using Residuals and Studentized Residuals[#](#dpa-identifying-outliers-using-residuals-and-studentized-residuals "Link to this heading")

****Stage 8 · 📊 Model Evaluation**** · Lesson 54 of 56 · **advanced**

[◀ Previous · Binary Classification Model Evaluation and Threshold Optimization](53-binary-classification-model-evaluation-and-threshold-optimization.html) · [Next · AUC–ROC Curve: Evaluating Classification Model Performance ▶](55-auc-roc-curve-evaluating-classification-model-performance.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Evaluating regression fits[#](#evaluating-regression-fits "Link to this heading")

For regression models, evaluation is not only an average error — it is also asking whether ****individual
points**** are being fit sensibly. The tool is the ****residual****, \(e\_i = y\_i - \hat{y}\_i\), familiar
from least squares. A point whose residual is ****far larger**** than the rest is an ****outlier**** in the
response — a case the model badly mispredicts — and finding these is a core diagnostic, one that
scikit-plots visualises with residual plots.

## Raw residuals mislead[#](#raw-residuals-mislead "Link to this heading")

Raw residuals are an awkward yardstick, for two reasons. Their size depends on the ****units**** of
\(y\), so “large” has no absolute meaning. Worse, they do ****not share a common variance****: the
variance of \(e\_i\) is \(\sigma^2 (1 - h\_{ii})\), where \(h\_{ii}\) is the point’s
****leverage**** — how unusual its feature values are. A ****high-leverage**** point **pulls the fitted line
toward itself**, artificially ****shrinking**** its own residual. The very points most able to distort the
fit are the ones whose raw residuals look most innocent.

## Standardising[#](#standardising "Link to this heading")

The first fix is the ****standardized**** (internally studentized) residual — the raw residual divided by
its own estimated standard deviation:

\[r\_i = \frac{e\_i}{\hat{\sigma}\,\sqrt{1 - h\_{ii}}}.\]

Now every point is on a ****common scale**** of standard-deviation units, comparable across observations
and datasets, with \(|r\_i| > 3\) a common flag for an outlier.

## Studentized residuals[#](#studentized-residuals "Link to this heading")

One subtlety remains: a truly extreme point ****inflates**** \(\hat{\sigma}\) itself, partially
****masking**** its own residual. The ****studentized**** (externally studentized, or **deleted**) residual
removes the circularity by estimating the error scale ****without**** observation \(i\) — refit the
model leaving the point out, and scale by that \(\hat{\sigma}\_{(i)}\):

\[t\_i = \frac{e\_i}{\hat{\sigma}\_{(i)}\,\sqrt{1 - h\_{ii}}}.\]

Under the usual assumptions \(t\_i\) follows a ****t-distribution****, so the flag becomes a genuine
****statistical test****. In practice, \(|t\_i| > 2\) marks a point worth examining and
\(|t\_i| > 3\) a strong outlier — first check for a ****data error****; if the value is real, consider a
robust fit or report it as a notable exception. And when ****many**** points flag at once, the message is
usually not “bad data” but a ****misspecified model**** — a missing curve or interaction. Residual
diagnostics evaluate the **model** as much as the points.

> **Hint**
> ****Related lessons:**** [Least Squares Regression](31-least-squares-regression.html) · [Multiple Linear Regression](32-multiple-linear-regression.html) · [Assessing the Quality of Prediction Models](50-assessing-the-quality-of-prediction-models.html) · [The First Step in Knowing Your Data](05-the-first-step-in-knowing-your-data.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/16/identifying-outliers-using-residuals-and-studentized-residuals/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: advanced](../../_tags/level-advanced.html)