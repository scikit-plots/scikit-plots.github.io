# More Vectorization Examples[#](#more-vectorization-examples "Link to this heading")

****Stage 4 · ⚙️ Backprop & Vectorization**** · Lesson 16 of 17 · **intermediate**

[◀ Previous · Vectorization in Logistic Regression](15-vectorization-in-logistic-regression.html) · [Next · Vectorizing Logistic Regression ▶](17-vectorizing-logistic-regression.html) · [↑ Section](index.html)

## Element-wise functions[#](#element-wise-functions "Link to this heading")

Loops are not only for sums. Any operation applied ****to every element**** of an array has a vectorised
form. Instead of writing a loop to exponentiate each entry of a vector \(v\), call `np.exp(v)`;
the same holds for `np.log`, `np.abs`, `np.maximum(0, v)` (a ReLU), powers like `v ** 2`, and
reciprocals `1 / v`. Each runs the loop internally in compiled code, over the whole array at once.

## Broadcasting[#](#broadcasting "Link to this heading")

Vectorised code often combines arrays of ****different shapes****, and `numpy` reconciles them by
****broadcasting****: the smaller array is ****stretched**** to match the larger. Add a scalar to a vector and
the scalar is applied to every element; add a \(1 \times n\) row to an \(m \times n\) matrix
and the row is ****copied down**** all \(m\) rows. It is the mechanism that let the bias `b` add
cleanly across every column in the last lesson.

## A worked example[#](#a-worked-example "Link to this heading")

Ng’s example computes each food’s macronutrient split as a percentage of its calories. With a matrix
\(A\) of nutrient values, the totals and percentages take ****two lines, no loop****:

```
cal = A.sum(axis=0)                 # column sums -> total calories per food
percentage = 100 * A / cal.reshape(1, 4)

```

The division ****broadcasts**** the \(1 \times 4\) totals across every row of \(A\). (Here
`axis=0` sums down columns; `axis=1` would sum across rows.)

## The guideline[#](#the-guideline "Link to this heading")

All of this serves one rule — Ng’s programming guideline, ****“whenever possible, avoid explicit
for-loops.”**** Reach first for a whole-array operation or a broadcast; fall back to a Python loop only
when no vectorised form exists. With these tools the entire logistic-regression step vectorises, which
the final lesson assembles.

> **Hint**
> ****Related lessons:**** [Vectorization in Logistic Regression](15-vectorization-in-logistic-regression.html) · [Vectorizing Logistic Regression](17-vectorizing-logistic-regression.html) · [Gradient Descent on m Training Examples](14-gradient-descent-on-m-training-examples.html) · [Logistic Regression Gradient Descent](13-logistic-regression-gradient-descent.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/04/07/more-vectorization-examples/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: intermediate](../../_tags/level-intermediate.html)