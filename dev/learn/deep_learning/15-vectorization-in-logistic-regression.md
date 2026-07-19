# Vectorization in Logistic Regression[#](#vectorization-in-logistic-regression "Link to this heading")

****Stage 4 · ⚙️ Backprop & Vectorization**** · Lesson 15 of 17 · **intermediate**

[◀ Previous · Gradient Descent on m Training Examples](14-gradient-descent-on-m-training-examples.html) · [Next · More Vectorization Examples ▶](16-more-vectorization-examples.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What vectorization is[#](#what-vectorization-is "Link to this heading")

****Vectorization**** is, in Andrew Ng’s words, “the art of getting rid of explicit for-loops in your
code”. Instead of looping element by element, you express the computation as ****whole-array
operations**** — matrix and vector products — and let an optimised numerical library do the looping in
fast compiled code.

## The forward pass, vectorized[#](#the-forward-pass-vectorized "Link to this heading")

Recall the per-example forward step \(z^{(i)} = \mathbf{w}^{\!\top} x^{(i)} + b\). Stacking all
\(m\) examples as ****columns**** of \(X\) (the convention from Lesson 5) collapses the whole
loop into one line:

\[Z = \mathbf{w}^{\!\top} X + b, \qquad A = \sigma(Z),\]

where \(Z\) and \(A\) are \(1 \times m\). In `numpy` this is literally
`Z = np.dot(w.T, X) + b` followed by `A = sigmoid(Z)` — the scalar `b` is ****broadcast**** across
all columns automatically.

## Why it’s faster[#](#why-it-s-faster "Link to this heading")

`np.dot` hands the arithmetic to routines that use the CPU’s (or GPU’s) ****parallel**** vector
instructions, processing many numbers at once. Ng’s demonstration times the same dot product both
ways, and the vectorised version runs ****hundreds of times faster**** than the Python loop. On large
datasets that is the difference between minutes and hours.

## The habit[#](#the-habit "Link to this heading")

The rule to carry forward is Ng’s programming guideline: ****“whenever possible, avoid explicit
for-loops.”**** The remaining lessons apply it relentlessly — vectorising the ****gradients**** too, until
an entire step of logistic regression over all \(m\) examples runs without a single Python loop
over the data.

> **Hint**
> ****Related lessons:**** [Gradient Descent on m Training Examples](14-gradient-descent-on-m-training-examples.html) · [More Vectorization Examples](16-more-vectorization-examples.html) · [Vectorizing Logistic Regression](17-vectorizing-logistic-regression.html) · [Binary Classification and Logistic Regression (Neural Network Basics)](05-binary-classification-and-logistic-regression-neural-network-basics.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/04/07/vectorization-in-logistic-regression/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: intermediate](../../_tags/level-intermediate.html)