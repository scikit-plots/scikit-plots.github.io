# Putting Similar Observations into Clusters[#](#putting-similar-observations-into-clusters "Link to this heading")

****Stage 4 · 🧩 Sampling, Partitioning & Segmentation**** · Lesson 26 of 56 · **intermediate**

[◀ Previous · Partitioning Observations to Train Objective Models](25-partitioning-observations-to-train-objective-models.html) · Next · Clustering <27-clustering> ▶

## Grouping without labels[#](#grouping-without-labels "Link to this heading")

Sometimes there is no outcome to predict — just a pile of observations and a hunch that they fall into
****natural groups****. ****Clustering**** is the task of finding those groups: partitioning observations so
that each group gathers items that are ****alike****. It is ****unsupervised**** — unlike the classification
and regression of later stages, there are no labels to learn from, only the structure of the data
itself.

## Similar within, different between[#](#similar-within-different-between "Link to this heading")

A good clustering has a simple signature: ****high similarity within**** each cluster and ****low similarity
between**** clusters. Members of a group should resemble one another; members of different groups should
not. This dual goal — tight, well-separated clusters — is what every clustering algorithm chases, and
what quality measures like the silhouette score reward.

## Distance as similarity[#](#distance-as-similarity "Link to this heading")

To make “alike” computable, similarity is usually expressed as ****distance****: two observations are
similar if they are ****close**** in the feature space, typically by ****Euclidean**** distance. This is why
clustering is sensitive to ****scale**** — a feature measured in large units can dominate the distance —
so features are commonly ****standardised**** first. Close points cluster together; distant ones fall into
different groups.

## Why segment?[#](#why-segment "Link to this heading")

The payoff is ****segmentation****: dividing customers, products or observations into meaningful groups
that can be understood and treated differently. A business might discover a cluster of high-value
frequent buyers and another of occasional bargain-hunters, then tailor its approach to each. The next
lesson turns this idea into concrete algorithms; the RFM lessons that follow apply it to real customer
data.

> **See also**
> ****Related lessons:**** [Clustering](27-clustering.html) · [Creating Segments of Observations for Business Reasons (RFM)](30-creating-segments-of-observations-for-business-reasons-rfm.html) · [Cluster Profiling Using Decision Trees](48-cluster-profiling-using-decision-trees.html) · [Measuring Associations Between Two Continuous Variables](11-measuring-associations-between-two-continuous-variables.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/14/putting-similar-observations-into-clusters/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)