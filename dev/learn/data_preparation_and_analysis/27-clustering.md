# Clustering[#](#clustering "Link to this heading")

****Stage 4 · 🧩 Sampling, Partitioning & Segmentation**** · Lesson 27 of 56 · **intermediate**

[◀ Previous · Putting Similar Observations into Clusters](26-putting-similar-observations-into-clusters.html) · Next · Recency, Frequency, and Monetary Value (RFM) <28-recency-frequency-and-monetary-value-rfm> ▶

## Algorithms for groups[#](#algorithms-for-groups "Link to this heading")

Turning the idea of clustering into practice means choosing an ****algorithm**** — a procedure that
actually finds the groups. Many exist, differing in how they define a cluster and how they search. The
most widely used, and the natural starting point, is ****k-means****.

## k-means[#](#k-means "Link to this heading")

****k-means**** partitions the data into a pre-chosen number \(k\) of clusters, each summarised by its
****centroid**** (the mean of its members). It seeks to minimise the ****within-cluster sum of squares**** —
the total squared distance from points to their centroids — through a simple, repeating two-step loop:

1. ****Assign**** each observation to the ****nearest**** centroid;
2. ****Update**** each centroid to the mean of the points now assigned to it.

Repeat until assignments stop changing. In scikit-learn this is `KMeans(n_clusters=k)`. It is fast
and intuitive, though it assumes roughly round, similarly-sized clusters and needs \(k\) chosen in
advance.

## Choosing k[#](#choosing-k "Link to this heading")

Since \(k\) is an input, how many clusters should there be? Two common guides: the ****elbow
method**** plots the within-cluster sum of squares against \(k\) and looks for the “elbow” where
adding clusters stops helping much; the ****silhouette score**** measures how well each point sits in its
cluster versus the nearest other one, rewarding tight, well-separated groups. Neither is automatic —
the “right” \(k\) often depends on what is ****useful**** for the business.

## Other approaches[#](#other-approaches "Link to this heading")

k-means is not the only option. ****Hierarchical**** clustering builds a tree (dendrogram) of nested
groups, needing no \(k\) up front and revealing structure at every scale. ****Density-based****
methods like ****DBSCAN**** grow clusters from dense regions, handling odd shapes and marking outliers as
noise. Each embodies a different notion of what a cluster **is** — but all serve the same goal: similar
together, different apart.

> **See also**
> ****Related lessons:**** [Putting Similar Observations into Clusters](26-putting-similar-observations-into-clusters.html) · [Recency, Frequency, and Monetary Value (RFM)](28-recency-frequency-and-monetary-value-rfm.html) · [RFM Analysis](29-rfm-analysis.html) · [Using Decision Trees to Explain Clustering Results](49-using-decision-trees-to-explain-clustering-results.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/14/clustering/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)