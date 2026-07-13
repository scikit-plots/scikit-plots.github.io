# Cluster Profiling Using Decision Trees[#](#cluster-profiling-using-decision-trees "Link to this heading")

****Stage 7 · 🌳 Decision Trees**** · Lesson 48 of 56 · **advanced**

[◀ Previous · How CART Decision Trees Model Interactions](47-how-cart-decision-trees-model-interactions.html) · [Next · Using Decision Trees to Explain Clustering Results ▶](49-using-decision-trees-to-explain-clustering-results.html) · [↑ Section](index.html)

## Clusters without descriptions[#](#clusters-without-descriptions "Link to this heading")

Clustering (Stage 4) hands you ****groups****, but not their ****meaning****. k-means labels each customer with
a cluster number, yet those numbers are ****opaque**** — cluster 3 is just “cluster 3”. Before you can act
on segments, you need to ****describe**** them: what actually distinguishes cluster 3’s members from
everyone else? This is ****cluster profiling****, and decision trees are an elegant way to do it.

## Turn labels into a target[#](#turn-labels-into-a-target "Link to this heading")

The trick is to ****turn the unsupervised result into a supervised problem****. Take the ****cluster label****
each point received and treat it as the ****target**** to predict, using the original features as inputs.
Then ****fit a decision tree**** to predict cluster membership. The clustering supplied the “answers”; the
tree’s job is to find the ****rules**** that reproduce them.

## Rules that define a cluster[#](#rules-that-define-a-cluster "Link to this heading")

Because a tree is a chain of if-then splits (this stage’s opening lessons), the fitted tree ****reads as
a description**** of the clusters. The path to a leaf dominated by cluster 3 might say: **recency < 30
days** ****and**** **frequency > 10** — a plain-language ****profile**** of that segment. Each cluster gets a
compact set of defining conditions, turning anonymous group numbers into ****interpretable****
characterisations a business can name and target — “recent frequent buyers”, say.

## Why it works[#](#why-it-works "Link to this heading")

This works because trees bring exactly the right strengths: they are ****interpretable**** (the whole point
here), they handle ****mixed**** feature types and interactions without fuss, and they naturally identify
****which**** features separate the groups — a built-in importance ranking. It is a recurring pattern in
machine learning: use a ****transparent**** model to ****explain**** the output of an opaque one. The final
lesson of this stage takes the idea one step further — using a tree as a ****surrogate**** to explain
clustering results in general.

> **Hint**
> ****Related lessons:**** [Using Decision Trees to Explain Clustering Results](49-using-decision-trees-to-explain-clustering-results.html) · [Clustering](27-clustering.html) · [Creating Segments of Observations for Business Reasons (RFM)](30-creating-segments-of-observations-for-business-reasons-rfm.html) · [The CART Algorithm](45-the-cart-algorithm.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/16/cluster-profiling-using-decision-trees/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: advanced](../../_tags/level-advanced.html)