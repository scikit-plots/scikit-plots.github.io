# Why Deep Learning is Taking Off[#](#why-deep-learning-is-taking-off "Link to this heading")

****Stage 1 · 🧠 Introduction to Deep Learning**** · Lesson 03 of 17 · **beginner**

[◀ Previous · Supervised Learning and Neural Networks](02-supervised-learning-and-neural-networks.html) · [Next · Geoffrey Hinton Interview ▶](04-geoffrey-hinton-interview.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## An old idea, newly working[#](#an-old-idea-newly-working "Link to this heading")

The mathematics of neural networks is ****decades old****, so why the recent explosion? Not one
breakthrough but a ****convergence**** — the raw ingredients finally reached the scale where deep
networks ****decisively outperform**** the alternatives.

## Scale drives performance[#](#scale-drives-performance "Link to this heading")

Ng summarises it with a single picture: plot ****performance**** against the ****amount of labelled
data****. Traditional methods (logistic regression, SVMs) improve for a while, then ****plateau****.
Neural networks keep climbing, and ****bigger networks climb higher**** — small < medium < large. The
pattern has two regimes: with ****little**** data, careful feature engineering and skill can matter more
than model size, so the ordering blurs; with ****lots**** of data, a ****large network**** wins clearly.

## The three drivers[#](#the-three-drivers "Link to this heading")

Three forces made that scale reachable. ****Data**** — a digitised world (phones, sensors, the web)
produces the huge labelled datasets networks feed on. ****Computation**** — GPUs, faster hardware and
distributed training make large models trainable in reasonable time. ****Algorithms**** — better design
speeds learning; the switch from the ****sigmoid**** to the ****ReLU**** activation is the classic example,
easing the ****vanishing-gradient**** problem so gradient descent converges much faster.

## The virtuous cycle[#](#the-virtuous-cycle "Link to this heading")

These drivers reinforce each other. Faster hardware and better algorithms shorten the
****idea → code → experiment**** loop, so researchers iterate more quickly; better models attract more
****users****, who generate more ****data****, which trains still-better models. That feedback loop is much
of why progress has felt so ****fast**** — and why the fundamentals in this course sit beneath so many
modern systems.

> **Hint**
> ****Related lessons:**** [What is a Neural Network?](01-what-is-a-neural-network.html) · [Supervised Learning and Neural Networks](02-supervised-learning-and-neural-networks.html) · [Geoffrey Hinton Interview](04-geoffrey-hinton-interview.html) · [Vectorizing Logistic Regression](17-vectorizing-logistic-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/04/07/why-deep-learning-is-taking-off/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: beginner](../../_tags/level-beginner.html)