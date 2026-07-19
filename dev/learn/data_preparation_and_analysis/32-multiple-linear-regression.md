# Multiple Linear Regression[#](#multiple-linear-regression "Link to this heading")

****Stage 5 · 📈 Regression**** · Lesson 32 of 56 · **intermediate**

[◀ Previous · Least Squares Regression](31-least-squares-regression.html) · [Next · Feature Importance in Linear Regression ▶](33-feature-importance-in-linear-regression.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## More than one predictor[#](#more-than-one-predictor "Link to this heading")

Real outcomes rarely depend on a single cause. A taxi fare responds to ****distance and duration****; a
house price to ****size, location and age****. ****Multiple linear regression**** extends the line to several
features at once:

\[\hat{y} = \beta\_0 + \beta\_1 x\_1 + \beta\_2 x\_2 + \dots + \beta\_p x\_p.\]

Geometrically this is no longer a line but a ****hyperplane****, yet the fitting principle is unchanged:
choose the coefficients that minimise the ****sum of squared residuals****.

## Holding others constant[#](#holding-others-constant "Link to this heading")

The coefficients gain a subtle, powerful meaning. Each \(\beta\_j\) is the change in \(y\) for
a one-unit increase in \(x\_j\) ****while holding all other features fixed****. That “holding constant”
is what lets regression ****disentangle**** overlapping influences — estimating the effect of duration on
fare **after accounting for** distance, rather than confounding the two. It is why multiple regression
is a workhorse for ****interpretation****, not just prediction.

## The matrix solution[#](#the-matrix-solution "Link to this heading")

With many features, the tidy way to write and solve the problem is ****matrix algebra****. Stacking the
data into a matrix \(X\) (with a column of ones for the intercept) and outcomes into a vector
\(y\), least squares has the closed-form solution

\[\hat{\beta} = (X^{\top} X)^{-1} X^{\top} y.\]

This single expression delivers all the coefficients at once. It rests on assumptions worth
remembering — a genuinely linear relationship, independent errors of constant variance — which the
evaluation stage checks with residual plots.

## Fitting it in Python[#](#fitting-it-in-python "Link to this heading")

In practice you never invert the matrix by hand. ****scikit-learn**** fits the model in three lines —
`LinearRegression().fit(X, y)` — exposing `.coef_` and `.intercept_`; ****statsmodels**** `OLS`
adds a full statistical summary with standard errors and p-values for each coefficient. The next
lesson uses those coefficients to ask which features matter ****most****.

> **Hint**
> ****Related lessons:**** [Least Squares Regression](31-least-squares-regression.html) · [Feature Importance in Linear Regression](33-feature-importance-in-linear-regression.html) · [Forward Selection and Model Interpretation in Linear Regression](35-forward-selection-and-model-interpretation-in-linear-regression.html) · [Assessing the Quality of Prediction Models](50-assessing-the-quality-of-prediction-models.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/16/multiple-linear-regression/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)