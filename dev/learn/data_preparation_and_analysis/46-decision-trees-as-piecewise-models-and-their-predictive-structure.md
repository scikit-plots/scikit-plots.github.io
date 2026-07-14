# Decision Trees as Piecewise Models and Their Predictive Structure[#](#decision-trees-as-piecewise-models-and-their-predictive-structure "Link to this heading")

****Stage 7 · 🌳 Decision Trees**** · Lesson 46 of 56 · **advanced**

[◀ Previous · The CART Algorithm](45-the-cart-algorithm.html) · [Next · How CART Decision Trees Model Interactions ▶](47-how-cart-decision-trees-model-interactions.html) · [↑ Section](index.html)

## Boxes in feature space[#](#boxes-in-feature-space "Link to this heading")

A decision tree has a clean ****geometric**** meaning. Every split is a test on ****one**** feature against a
threshold (“distance ≤ 3?”), so each split is a straight cut ****parallel to an axis**** of the feature
space. A sequence of such cuts carves the space into ****rectangular regions**** — boxes (or, in higher
dimensions, hyper-rectangles). Crucially, ****each leaf of the tree corresponds to exactly one
region****: the set of points whose feature values follow that root-to-leaf path.

## A constant in each box[#](#a-constant-in-each-box "Link to this heading")

Inside each region, the tree makes a ****single, constant prediction****. For a ****regression**** tree it is
the ****mean**** of the training outcomes that fell in that box; for a ****classification**** tree, the
****majority class****. So predicting for a new point is just: find which box it lands in, and return that
box’s constant. The tree is, in effect, a ****lookup table**** over a partition of the feature space.

## A step-function model[#](#a-step-function-model "Link to this heading")

This makes a tree a ****piecewise-constant**** model. A regression tree’s prediction surface is not a
smooth line or plane but a series of ****flat steps**** — constant within each box, jumping at the
boundaries. Algebraically it is a sum over regions,
\(T(x) = \sum\_{j} \gamma\_j \, \mathbb{I}(x \in R\_j)\), where each \(R\_j\) is a box and
\(\gamma\_j\) its constant prediction. This is a sharp contrast to linear regression’s single
continuous slope.

## Flexible despite steps[#](#flexible-despite-steps "Link to this heading")

A staircase might seem ****too crude**** to model a smooth relationship — but with enough boxes, a
piecewise-constant function can ****approximate any shape****, including the ****non-linear**** and
****non-monotone**** forms that linear or additive models cannot represent. That flexibility is the tree’s
power, and also its peril: enough boxes to fit any curve is also enough to fit the ****noise****, which is
why the depth controls and pruning of the last lesson matter. The next lesson shows a subtler
consequence of this box structure: ****interactions****.

> **Hint**
> ****Related lessons:**** [The CART Algorithm](45-the-cart-algorithm.html) · [How CART Decision Trees Model Interactions](47-how-cart-decision-trees-model-interactions.html) · [Motivation of Decision Trees: An Incremental Model of Decision-Making](44-motivation-of-decision-trees-an-incremental-model-of-decision-making.html) · [Multiple Linear Regression](32-multiple-linear-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/16/interactions-in-cart-decision-trees/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: advanced](../../_tags/level-advanced.html)