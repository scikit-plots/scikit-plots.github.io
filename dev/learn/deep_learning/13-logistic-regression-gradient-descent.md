# Logistic Regression Gradient Descent[#](#logistic-regression-gradient-descent "Link to this heading")

****Stage 4 · ⚙️ Backprop & Vectorization**** · Lesson 13 of 17 · **intermediate**

[◀ Previous · Derivatives with a Computation Graph](12-derivatives-with-a-computation-graph.html) · [Next · Gradient Descent on m Training Examples ▶](14-gradient-descent-on-m-training-examples.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The neuron’s graph[#](#the-neuron-s-graph "Link to this heading")

The computation-graph machinery now applies to the neuron itself. For a two-feature example the
forward graph is

\[z = w\_1 x\_1 + w\_2 x\_2 + b, \qquad a = \sigma(z) = \hat{y}, \qquad
\mathcal{L}(a, y) = -\big(y \log a + (1 - y)\log(1 - a)\big).\]

Gradient descent needs \(\partial \mathcal{L}/\partial w\_1\), \(\partial \mathcal{L}/\partial w\_2\)
and \(\partial \mathcal{L}/\partial b\) — found by walking this graph backward.

## Backprop, step by step[#](#backprop-step-by-step "Link to this heading")

Start at the loss and step back. The derivative of the loss with respect to the activation is

\[\mathrm{d}a = \frac{\partial \mathcal{L}}{\partial a} = -\frac{y}{a} + \frac{1 - y}{1 - a}.\]

The sigmoid contributes \(\partial a / \partial z = a(1 - a)\), so by the chain rule
\(\mathrm{d}z = \mathrm{d}a \cdot a(1 - a)\).

## The clean result[#](#the-clean-result "Link to this heading")

Those two pieces multiply out to something remarkably simple:

\[\mathrm{d}z = \frac{\partial \mathcal{L}}{\partial z} = a - y.\]

The gradient of the loss with respect to the pre-activation is just ****prediction minus truth****. From
there the parameter gradients fall out immediately:

\[\mathrm{d}w\_1 = x\_1\,\mathrm{d}z, \qquad \mathrm{d}w\_2 = x\_2\,\mathrm{d}z, \qquad
\mathrm{d}b = \mathrm{d}z.\]

## Then the update[#](#then-the-update "Link to this heading")

With the gradients in hand, one gradient-descent step nudges each parameter downhill:

\[w\_1 := w\_1 - \alpha\,\mathrm{d}w\_1, \qquad w\_2 := w\_2 - \alpha\,\mathrm{d}w\_2, \qquad
b := b - \alpha\,\mathrm{d}b.\]

That is a full learning step — for a ****single**** example. Real training averages over many, which is
the next lesson.

> **Hint**
> ****Related lessons:**** [Derivatives with a Computation Graph](12-derivatives-with-a-computation-graph.html) · [Logistic Regression – Loss Function and Cost Function](07-logistic-regression-loss-function-and-cost-function.html) · [Gradient Descent on m Training Examples](14-gradient-descent-on-m-training-examples.html) · [Computation Graph](11-computation-graph.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/04/07/logistic-regression-gradient-descent/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: intermediate](../../_tags/level-intermediate.html)