# Logistic Regression (Binary Classification Model)[#](#logistic-regression-binary-classification-model "Link to this heading")

****Stage 2 · 🔵 Logistic Regression as a Neuron**** · Lesson 06 of 17 · **beginner**

[◀ Previous · Binary Classification and Logistic Regression (Neural Network Basics)](05-binary-classification-and-logistic-regression-neural-network-basics.html) · [Next · Logistic Regression – Loss Function and Cost Function ▶](07-logistic-regression-loss-function-and-cost-function.html)

## From score to probability[#](#from-score-to-probability "Link to this heading")

Given an input \(x\), logistic regression predicts \(\hat{y} = P(y = 1 \mid x)\) — the
****probability**** the label is 1. A plain linear score \(\mathbf{w}^{\!\top}\mathbf{x} + b\) can be
any real number, from large negative to large positive, so it ****cannot**** serve as a probability
directly. It has to be squashed into \([0, 1]\).

## The sigmoid[#](#the-sigmoid "Link to this heading")

The squashing function is the ****sigmoid**** (logistic) function:

\[\hat{y} = \sigma(\mathbf{w}^{\!\top}\mathbf{x} + b), \qquad \sigma(z) = \frac{1}{1 + e^{-z}},\]

with parameters \(\mathbf{w} \in \mathbb{R}^{n\_x}\) (a weight per feature) and a bias
\(b \in \mathbb{R}\).

## Reading it[#](#reading-it "Link to this heading")

The sigmoid is an ****S-curve**** between 0 and 1: as \(z \to +\infty\) it approaches ****1****, as
\(z \to -\infty\) it approaches ****0****, and at \(z = 0\) it is exactly ****0.5****. So a large
positive score means “confidently 1”, a large negative score “confidently 0”, and a score near zero
an undecided, halfway probability.

## One neuron[#](#one-neuron "Link to this heading")

Put together, logistic regression is precisely a ****single neuron****: a linear combination of the
inputs followed by a nonlinear activation — here the sigmoid. That is the exact template from
Lesson 1, and stacking many such units is all a neural network is. The next lesson gives this neuron
a ****loss****, so it can learn \(\mathbf{w}\) and \(b\) from data.

> **See also**
> ****Related lessons:**** [Binary Classification and Logistic Regression (Neural Network Basics)](05-binary-classification-and-logistic-regression-neural-network-basics.html) · [Logistic Regression – Loss Function and Cost Function](07-logistic-regression-loss-function-and-cost-function.html) · [What is a Neural Network?](01-what-is-a-neural-network.html) · [Gradient Descent in Logistic Regression](08-gradient-descent-in-logistic-regression.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/04/07/logistic-regression-binary-classification-model/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: beginner](../../_tags/level-beginner.html)