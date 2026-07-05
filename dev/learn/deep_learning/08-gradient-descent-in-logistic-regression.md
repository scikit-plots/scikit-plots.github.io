# Gradient Descent in Logistic Regression[#](#gradient-descent-in-logistic-regression "Link to this heading")

****Stage 3 · 📉 Derivatives & the Computation Graph**** · Lesson 08 of 17 · **intermediate**

[◀ Previous · Logistic Regression – Loss Function and Cost Function](07-logistic-regression-loss-function-and-cost-function.html) · Next · Derivatives <09-derivatives> ▶

## The optimization problem[#](#the-optimization-problem "Link to this heading")

With a cost \(J(\mathbf{w}, b)\) in hand, learning becomes a search: ****find the****
\(\mathbf{w}, b\) ****that make**** \(J\) ****smallest****. The cross-entropy cost for logistic
regression is ****convex**** — a single bowl-shaped surface with ****one global minimum**** and no misleading
local dips — which is what makes the search reliable.

## Rolling downhill[#](#rolling-downhill "Link to this heading")

****Gradient descent**** finds that minimum by repeatedly stepping ****downhill****. At the current point the
****gradient**** — the partial derivatives \(\partial J / \partial \mathbf{w}\) and
\(\partial J / \partial b\) — points in the direction of steepest ****increase****; moving the
****opposite**** way decreases the cost. Start anywhere (for a convex cost, even all-zeros works) and
repeat.

## The update rule[#](#the-update-rule "Link to this heading")

Each iteration nudges the parameters against the gradient:

\[\mathbf{w} := \mathbf{w} - \alpha\,\frac{\partial J}{\partial \mathbf{w}}, \qquad
b := b - \alpha\,\frac{\partial J}{\partial b}.\]

In code the derivatives are conventionally named `dw` and `db`, so the step reads
`w -= alpha * dw` and `b -= alpha * db`. Repeat until the cost stops decreasing.

## The learning rate[#](#the-learning-rate "Link to this heading")

The step size \(\alpha\) is the ****learning rate****. Too ****small**** and training crawls, needing
many iterations; too ****large**** and the steps overshoot the minimum and may ****diverge****. Choosing
\(\alpha\) well — and computing those derivatives efficiently — is what the rest of this stage is
about, starting with the calculus itself.

> **See also**
> ****Related lessons:**** [Logistic Regression – Loss Function and Cost Function](07-logistic-regression-loss-function-and-cost-function.html) · [Derivatives](09-derivatives.html) · [Logistic Regression Gradient Descent](13-logistic-regression-gradient-descent.html) · [Gradient Descent on m Training Examples](14-gradient-descent-on-m-training-examples.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/04/07/gradient-descent-in-logistic-regression/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: intermediate](../../_tags/level-intermediate.html)