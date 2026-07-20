# Creating Segments of Observations for Business Reasons (RFM)[#](#creating-segments-of-observations-for-business-reasons-rfm "Link to this heading")

****Stage 4 · 🧩 Sampling, Partitioning & Segmentation**** · Lesson 30 of 56 · **intermediate**

[◀ Previous · RFM Analysis](29-rfm-analysis.html) · [Next · Least Squares Regression ▶](31-least-squares-regression.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## From codes to segments[#](#from-codes-to-segments "Link to this heading")

125 RFM codes are too many to act on. The final step is to group them into a handful of ****named
segments**** — typically ****six to ten**** — each describing a recognisable kind of customer and, crucially,
each calling for a ****different business response****. This is where scores become ****decisions****.

## A common taxonomy[#](#a-common-taxonomy "Link to this heading")

A widely used starting taxonomy names segments by their RFM profile:

* ****Champions**** — high on all three (555, 554): the best customers.
* ****Loyal Customers**** — buy consistently and often.
* ****Potential Loyalists**** — recent buyers with growing frequency.
* ****New Customers**** — recent, but few purchases so far.
* ****At Risk**** — once frequent and high-spending, but ****lapsing**** (low recency).
* ****Can’t Lose Them**** — high past value, gone quiet.
* ****Hibernating / Lost**** — low on everything, long inactive.

## Each segment, an action[#](#each-segment-an-action "Link to this heading")

The point of naming segments is the ****“so what”****. ****Champions**** get rewards, early access and
referral asks — ****not**** blanket discounts that erode margin. ****At Risk**** and ****Can’t Lose Them**** get
****win-back**** campaigns and personal outreach, ideally **before** they fully churn. ****Hibernating / Lost****
get a re-permission push or are ****suppressed**** to save budget. One message for a new buyer and a
ten-year loyalist would waste both; segmentation lets each be treated for ****who they are****.

## Segments as clusters[#](#segments-as-clusters "Link to this heading")

Notice this is the ****clustering**** idea from earlier in the stage, made concrete: customers are grouped
by similarity — here, similarity in RFM space — so that each group can be understood and served
differently. Whether the groups come from a rule-based RFM taxonomy or from an algorithm like k-means,
the goal is the one this stage began with: turn a mass of observations into ****meaningful segments**** a
business can act on. With customers understood, the course turns next to ****predicting**** outcomes —
starting with regression.

> **Hint**
> ****Related lessons:**** [Recency, Frequency, and Monetary Value (RFM)](28-recency-frequency-and-monetary-value-rfm.html) · [RFM Analysis](29-rfm-analysis.html) · [Clustering](27-clustering.html) · [Cluster Profiling Using Decision Trees](48-cluster-profiling-using-decision-trees.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/14/creating-segments-of-observations-for-business-reasons-rfm/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)