# What is a Neural Network?[#](#what-is-a-neural-network "Link to this heading")

****Stage 1 · 🧠 Introduction to Deep Learning**** · Lesson 01 of 17 · **beginner**

[Next · Supervised Learning and Neural Networks ▶](02-supervised-learning-and-neural-networks.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## A single neuron[#](#a-single-neuron "Link to this heading")

The atom of a neural network is the ****neuron****. It takes inputs, forms a ****weighted sum**** plus a
****bias****, and passes the result through a ****nonlinear activation****:

\[z = w\_1 x\_1 + \dots + w\_n x\_n + b = \mathbf{w}^{\!\top}\mathbf{x} + b, \qquad a = g(z).\]

Andrew Ng’s opening example fits ****house size → price**** with one neuron whose activation is a
****ReLU**** (**rectified linear unit**), \(g(z) = \max(0, z)\) — flat at zero for negative inputs,
rising linearly after. That single unit is already a tiny predictor.

## Stacking into a network[#](#stacking-into-a-network "Link to this heading")

Real problems have many inputs. Stack neurons side by side into a ****layer****, feed one layer’s
outputs into the next, and you have a ****network**** — Ng’s Lego-brick analogy. With features like
****size, number of bedrooms, zip code, wealth**** feeding a ****hidden layer**** that feeds a ****price****
output, the middle units can come to represent intermediate ideas such as ****family size****,
****walkability**** or ****school quality****. Every input connects to every hidden unit
(****fully connected****, or ****dense****).

## Learning the features[#](#learning-the-features "Link to this heading")

The crucial point: ****you never specify those intermediate concepts****. You supply only input–output
pairs \((x, y)\) — sizes and prices — and ****gradient descent**** discovers whatever hidden-unit
features best predict the target. Given enough units, a network can approximate very complex
mappings; the rest of this course builds that learning machinery from a single neuron up.

## Not really a brain[#](#not-really-a-brain "Link to this heading")

The “a neural network is like the brain” line is a ****loose analogy**** — handy for a first mental
picture, but easily ****oversold****. An artificial neuron is a small piece of arithmetic (a weighted
sum and a nonlinearity), not a biological cell. It is more honest to picture a network as a
****flexible, trainable function approximator****.

> **Hint**
> ****Related lessons:**** [Supervised Learning and Neural Networks](02-supervised-learning-and-neural-networks.html) · [Logistic Regression (Binary Classification Model)](06-logistic-regression-binary-classification-model.html) · [Why Deep Learning is Taking Off](03-why-deep-learning-is-taking-off.html) · [Computation Graph](11-computation-graph.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/04/07/what-is-a-neural-network/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: beginner](../../_tags/level-beginner.html)