# Derivatives[#](#derivatives "Link to this heading")

****Stage 3 · 📉 Derivatives & the Computation Graph**** · Lesson 09 of 17 · **intermediate**

[◀ Previous · Gradient Descent in Logistic Regression](08-gradient-descent-in-logistic-regression.html) · [Next · More Derivative Examples ▶](10-more-derivative-examples.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Derivative means slope[#](#derivative-means-slope "Link to this heading")

Gradient descent runs on ****derivatives****, so this lesson pins down what a derivative actually is: a
****slope****. The derivative of \(f\) at a point measures ****how much**** \(f\) ****changes when its
input changes by a tiny amount**** — the steepness of the function right there.

## A worked nudge[#](#a-worked-nudge "Link to this heading")

Take the straight line \(f(a) = 3a\). At \(a = 2\), \(f = 6\). Nudge the input a hair, to
\(a = 2.001\); then \(f = 6.003\). The output moved by \(0.003\) when the input moved by
\(0.001\) — ****three times as much****. That ratio **is** the derivative: \(\frac{df}{da} = 3\).

## Slope of a straight line[#](#slope-of-a-straight-line "Link to this heading")

Geometrically the derivative is ****rise over run**** — the height of a tiny triangle divided by its
width. For a ****straight line**** the slope is the ****same everywhere****: \(f(a) = 3a\) has derivative
\(3\) at every point, whether \(a\) is 2, 5 or \(-10\). (Curved functions have a slope
that **changes** from point to point — the subject of the next lesson.)

## Why it matters here[#](#why-it-matters-here "Link to this heading")

Every gradient in this course is built from derivatives like this one. Knowing that the derivative is
just “****how fast the output moves when you wiggle the input****” is enough to follow the ****chain rule****
and ****backpropagation**** ahead — the machinery that computes \(\partial J / \partial \mathbf{w}\)
and \(\partial J / \partial b\) for a whole network.

> **Hint**
> ****Related lessons:**** [More Derivative Examples](10-more-derivative-examples.html) · [Computation Graph](11-computation-graph.html) · [Gradient Descent in Logistic Regression](08-gradient-descent-in-logistic-regression.html) · [Derivatives with a Computation Graph](12-derivatives-with-a-computation-graph.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/04/07/derivatives/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: intermediate](../../_tags/level-intermediate.html)