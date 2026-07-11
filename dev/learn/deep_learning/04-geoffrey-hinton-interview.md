# Geoffrey Hinton Interview[#](#geoffrey-hinton-interview "Link to this heading")

****Stage 1 · 🧠 Introduction to Deep Learning**** · Lesson 04 of 17 · **beginner**

[◀ Previous · Why Deep Learning is Taking Off](03-why-deep-learning-is-taking-off.html) · [Next · Binary Classification and Logistic Regression (Neural Network Basics) ▶](05-binary-classification-and-logistic-regression-neural-network-basics.html)

## Heroes of Deep Learning[#](#heroes-of-deep-learning "Link to this heading")

This lesson is a short detour from the mathematics: a look at the ideas from Andrew Ng’s
****“Heroes of Deep Learning”**** conversation with ****Geoffrey Hinton****, one of the researchers most
responsible for the field existing at all. It is history and perspective rather than a technique —
but the history explains **why** the tools in this course look the way they do.

## Backpropagation and representations[#](#backpropagation-and-representations "Link to this heading")

Hinton is best known for the 1986 paper with ****Rumelhart and Williams****, **“Learning representations
by back-propagating errors”**, which ****popularised backpropagation**** for training multi-layer
networks. He is careful that they were ****not the first**** to the idea — versions were proposed years
earlier — and that the paper’s real contribution was showing backprop could learn useful
****internal (distributed) representations****: hidden units that come to stand for meaningful features,
exactly the “learned features” idea from Lesson 1.

## Through the winter[#](#through-the-winter "Link to this heading")

Backpropagation is just ****gradient descent plus the chain rule****, and in the 1990s it hit a wall: in
deep networks the gradients ****shrank**** as they propagated back through the layers (the
****vanishing-gradient**** problem), and interest drifted to other methods. Through that
“neural-network winter” Hinton kept the flame alive with ****Boltzmann machines**** (with Sejnowski) and
later ****restricted Boltzmann machines****. His 2006 work on ****deep belief networks**** — pre-training a
deep net one layer at a time, then fine-tuning with backprop — is widely credited with sparking the
modern ****deep-learning**** revival.

## Newer directions, and advice[#](#newer-directions-and-advice "Link to this heading")

Hinton never stopped pushing past the standard recipe — proposing ****dropout****, and ****capsule
networks**** aimed at capturing part–whole structure in images — and argued that ****unsupervised
learning**** would ultimately matter more than the supervised setting this course begins with. His
advice to newcomers is quietly encouraging: ****trust your intuitions****, read enough but not so much
that you only reproduce others’ thinking, ****replicate results**** to learn them deeply, and keep going
on the problems that feel right.

> **See also**
> ****Related lessons:**** [What is a Neural Network?](01-what-is-a-neural-network.html) · [Why Deep Learning is Taking Off](03-why-deep-learning-is-taking-off.html) · [Logistic Regression Gradient Descent](13-logistic-regression-gradient-descent.html) · [Computation Graph](11-computation-graph.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/04/07/geoffrey-hinton-interview/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: deep learning](../../_tags/topic-deep-learning.html) [level: beginner](../../_tags/level-beginner.html)