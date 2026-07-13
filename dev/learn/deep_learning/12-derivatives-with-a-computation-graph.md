# Derivatives with a Computation Graph[#](#derivatives-with-a-computation-graph "Link to this heading")

****Stage 3 · 📉 Derivatives & the Computation Graph**** · Lesson 12 of 17 · **intermediate**

[◀ Previous · Computation Graph](11-computation-graph.html) · [Next · Logistic Regression Gradient Descent ▶](13-logistic-regression-gradient-descent.html) · [↑ Section](index.html)

## Walking backward[#](#walking-backward "Link to this heading")

With the forward pass done, the ****backward pass**** computes derivatives by moving ****right to left****
through the same graph, applying the ****chain rule**** at each node. This right-to-left sweep is exactly
what ****backpropagation**** does.

## One step at a time[#](#one-step-at-a-time "Link to this heading")

Start at the output. Since \(J = 3v\), nudging \(v\) moves \(J\) three times as much, so
\(\partial J / \partial v = 3\). Step back through \(v = a + u\):

\[\frac{\partial J}{\partial a} = \frac{\partial J}{\partial v}\frac{\partial v}{\partial a}
= 3 \cdot 1 = 3, \qquad
\frac{\partial J}{\partial u} = \frac{\partial J}{\partial v}\frac{\partial v}{\partial u}
= 3 \cdot 1 = 3.\]

Then back through \(u = bc\):

\[\frac{\partial J}{\partial b} = \frac{\partial J}{\partial u}\frac{\partial u}{\partial b}
= 3c = 6, \qquad
\frac{\partial J}{\partial c} = \frac{\partial J}{\partial u}\frac{\partial u}{\partial c}
= 3b = 9,\]

using \(a = 5, b = 3, c = 2\).

## The dvar convention[#](#the-dvar-convention "Link to this heading")

A coding shorthand runs through the whole course: the variable named ****``dvar``**** always means “the
derivative of the ****final output**** \(J\) with respect to \(\text{var}\)”. So `dv` is
\(\partial J / \partial v\), `da` is \(\partial J / \partial a\), `du` is
\(\partial J / \partial u\), and so on — every `d`-something is a gradient of the same target,
which keeps the code readable.

## Reuse is the point[#](#reuse-is-the-point "Link to this heading")

Notice that \(\partial J / \partial v\) was computed ****once**** and then ****reused**** for both
\(\partial J / \partial a\) and \(\partial J / \partial u\), and \(\partial J / \partial u\)
was reused for \(b\) and \(c\). That reuse is why the backward pass is ****efficient****: each
node’s derivative follows from the one just downstream, so the whole gradient costs about as much as
the forward pass. Applying this to the logistic-regression neuron is the next lesson.

> **Hint**
> ****Related lessons:**** [Computation Graph](11-computation-graph.html) · [More Derivative Examples](10-more-derivative-examples.html) · [Logistic Regression Gradient Descent](13-logistic-regression-gradient-descent.html) · [Gradient Descent on m Training Examples](14-gradient-descent-on-m-training-examples.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/04/07/derivatives-with-a-computation-graph/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: intermediate](../../_tags/level-intermediate.html)