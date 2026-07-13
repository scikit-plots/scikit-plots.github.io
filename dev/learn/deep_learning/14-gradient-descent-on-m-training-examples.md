# Gradient Descent on m Training Examples[#](#gradient-descent-on-m-training-examples "Link to this heading")

****Stage 4 · ⚙️ Backprop & Vectorization**** · Lesson 14 of 17 · **intermediate**

[◀ Previous · Logistic Regression Gradient Descent](13-logistic-regression-gradient-descent.html) · [Next · Vectorization in Logistic Regression ▶](15-vectorization-in-logistic-regression.html) · [↑ Section](index.html)

## Averaging the gradient[#](#averaging-the-gradient "Link to this heading")

A single example gives a noisy gradient; training uses the ****whole set****. The cost is the average
loss, so — because differentiation is linear — ****its gradient is the average of the per-example
gradients****:

\[J(\mathbf{w}, b) = \frac{1}{m}\sum\_{i=1}^{m} \mathcal{L}(a^{(i)}, y^{(i)}), \qquad
\frac{\partial J}{\partial w\_j} = \frac{1}{m}\sum\_{i=1}^{m} x\_j^{(i)}\,\mathrm{d}z^{(i)}, \qquad
\frac{\partial J}{\partial b} = \frac{1}{m}\sum\_{i=1}^{m} \mathrm{d}z^{(i)}.\]

## The explicit algorithm[#](#the-explicit-algorithm "Link to this heading")

Written out naively, one gradient-descent step ****accumulates**** over the examples, then divides by
\(m\):

```
J = 0; dw1 = 0; dw2 = 0; db = 0
for i in range(m):                     # loop over the m examples
    z = w1 * x1[i] + w2 * x2[i] + b
    a = sigmoid(z)
    J += -(y[i] * log(a) + (1 - y[i]) * log(1 - a))
    dz = a - y[i]
    dw1 += x1[i] * dz                  # one line per feature ...
    dw2 += x2[i] * dz
    db += dz
J /= m; dw1 /= m; dw2 /= m; db /= m
w1 -= alpha * dw1; w2 -= alpha * dw2; b -= alpha * db

```

## Two loops, and slow[#](#two-loops-and-slow "Link to this heading")

Look closely and there are ****two**** nested loops: the visible one over the \(m\) examples, and a
hidden one over the \(n\) ****features**** — with \(n\) weights you would need
\(\mathrm{d}w\_1, \mathrm{d}w\_2, \dots, \mathrm{d}w\_n\). Explicit Python loops like these are
****badly suited to parallel hardware**** and crawl on large datasets. Removing them — ****vectorization**** —
is the subject of the next lesson.

> **Hint**
> ****Related lessons:**** [Logistic Regression Gradient Descent](13-logistic-regression-gradient-descent.html) · [Vectorization in Logistic Regression](15-vectorization-in-logistic-regression.html) · [Gradient Descent in Logistic Regression](08-gradient-descent-in-logistic-regression.html) · [Vectorizing Logistic Regression](17-vectorizing-logistic-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/04/07/gradient-descent-on-m-training-examples/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: intermediate](../../_tags/level-intermediate.html)