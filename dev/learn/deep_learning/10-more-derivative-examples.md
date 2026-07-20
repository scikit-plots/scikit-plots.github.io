# More Derivative Examples[#](#more-derivative-examples "Link to this heading")

****Stage 3 · 📉 Derivatives & the Computation Graph**** · Lesson 10 of 17 · **intermediate**

[◀ Previous · Derivatives](09-derivatives.html) · [Next · Computation Graph ▶](11-computation-graph.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## When the slope changes[#](#when-the-slope-changes "Link to this heading")

The line \(f(a) = 3a\) had the ****same slope everywhere****. Most functions do not — their
****derivative changes from point to point****. This lesson makes that concrete, because a neuron’s
sigmoid is exactly such a curve.

## A curved example[#](#a-curved-example "Link to this heading")

Take \(f(a) = a^2\). At \(a = 2\), \(f = 4\); nudge to \(a = 2.001\) and
\(f \approx 4.004\) — a slope of about ****4****. But at \(a = 5\), \(f = 25\); nudge to
\(5.001\) and \(f \approx 25.010\) — a slope of about ****10****. The slope is ****twice the
input****, which is exactly the rule

\[f(a) = a^2 \;\Rightarrow\; \frac{df}{da} = 2a.\]

The derivative is now a ****function of**** \(a\), not a constant.

## A few more[#](#a-few-more "Link to this heading")

The same pattern holds across the standard functions — \(f(a) = a^3\) has derivative
\(3a^2\), and \(f(a) = \ln a\) has derivative \(1/a\). You need not re-derive these from
nudges each time; they are tabulated in any calculus reference. What matters is reading them the same
way: **how fast does the output move as I wiggle the input, right here?**

## The takeaway[#](#the-takeaway "Link to this heading")

For a ****curve****, “the derivative” always means the slope ****at a particular point****. That single idea
— a slope that varies — is all the calculus the rest of the course needs. Next we organise a
multi-step computation so these per-point slopes can be combined ****mechanically****, through a
****computation graph****.

> **Hint**
> ****Related lessons:**** [Derivatives](09-derivatives.html) · [Computation Graph](11-computation-graph.html) · [Derivatives with a Computation Graph](12-derivatives-with-a-computation-graph.html) · [Logistic Regression Gradient Descent](13-logistic-regression-gradient-descent.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/04/07/more-derivative-examples/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: intermediate](../../_tags/level-intermediate.html)