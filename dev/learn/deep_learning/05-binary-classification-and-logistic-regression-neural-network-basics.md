# Binary Classification and Logistic Regression (Neural Network Basics)[#](#binary-classification-and-logistic-regression-neural-network-basics "Link to this heading")

****Stage 2 · 🔵 Logistic Regression as a Neuron**** · Lesson 05 of 17 · **beginner**

[◀ Previous · Geoffrey Hinton Interview](04-geoffrey-hinton-interview.html) · [Next · Logistic Regression (Binary Classification Model) ▶](06-logistic-regression-binary-classification-model.html) · [↑ Section](index.html)

## The task[#](#the-task "Link to this heading")

****Binary classification**** asks a yes/no question: given an input, output a label
\(y \in \{0, 1\}\). The running example is a ****cat classifier**** — an image goes in, and the model
should output ****1**** for “cat” and ****0**** for “not cat”. Logistic regression, the subject of this
stage, is the simplest model for this — and, read the right way, a ****single neuron****.

## One example, as a vector[#](#one-example-as-a-vector "Link to this heading")

A model needs numbers, so an image is ****unrolled into a feature vector****. A 64×64 colour image has
three channels (red, green, blue), giving \(n\_x = 64 \times 64 \times 3 = 12{,}288\) values
stacked into one column \(x \in \mathbb{R}^{n\_x}\). A single labelled example is the pair
\((x, y)\) with \(x \in \mathbb{R}^{n\_x}\) and \(y \in \{0, 1\}\).

## Stacking the whole set[#](#stacking-the-whole-set "Link to this heading")

With \(m\) training examples \((x^{(1)}, y^{(1)}), \dots, (x^{(m)}, y^{(m)})\), Ng stacks
them into matrices. Each example becomes a ****column****, so the data form

\[X \in \mathbb{R}^{n\_x \times m}, \qquad Y \in \mathbb{R}^{1 \times m},\]

with \(X\) holding one example per column and \(Y\) the matching row of labels.

## Why columns[#](#why-columns "Link to this heading")

Putting examples in ****columns**** rather than rows is a deliberate convention: it makes the
****vectorised**** forward and backward passes later in this stage line up as clean matrix products, with
no transposes to track. A small choice now, much tidier code from Lesson 15 onward. In `numpy` the
shapes are `X.shape == (n_x, m)` and `Y.shape == (1, m)`.

> **Hint**
> ****Related lessons:**** [Logistic Regression (Binary Classification Model)](06-logistic-regression-binary-classification-model.html) · [Logistic Regression – Loss Function and Cost Function](07-logistic-regression-loss-function-and-cost-function.html) · [What is a Neural Network?](01-what-is-a-neural-network.html) · [Vectorizing Logistic Regression](17-vectorizing-logistic-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/04/07/binary-classification-and-logistic-regression-neural-network-basics/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: beginner](../../_tags/level-beginner.html)