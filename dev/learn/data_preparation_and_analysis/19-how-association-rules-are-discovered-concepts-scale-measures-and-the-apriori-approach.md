# How Association Rules Are Discovered: Concepts, Scale, Measures, and the Apriori Approach[#](#how-association-rules-are-discovered-concepts-scale-measures-and-the-apriori-approach "Link to this heading")

****Stage 3 · 🛒 Market Basket & Association Rules**** · Lesson 19 of 56 · **intermediate**

[◀ Previous · What Can Association Rules Tell Us?](18-what-can-association-rules-tell-us.html) · Next · Apriori: Frequent Itemsets via the Apriori Algorithm <20-apriori-frequent-itemsets-via-the-apriori-algorithm> ▶

## Three measures of a rule[#](#three-measures-of-a-rule "Link to this heading")

A rule like \(X \rightarrow Y\) is only worth keeping if it is both ****common**** and ****reliable****.
Three numbers, all computed from how often itemsets appear in the transactions, make “worth keeping”
precise: ****support****, ****confidence**** and ****lift****.

## Support, confidence, lift[#](#support-confidence-lift "Link to this heading")

Each captures a different facet:

* ****Support**** — how ****common**** the combination is, the fraction of all transactions containing the whole itemset:

  \[\operatorname{support}(X \rightarrow Y) =
  \frac{\text{transactions containing } X \cup Y}{\text{all transactions}}.\]
* ****Confidence**** — how ****reliable**** the rule is, the share of \(X\)-baskets that also contain \(Y\), estimating \(P(Y \mid X)\):

  \[\operatorname{confidence}(X \rightarrow Y) =
  \frac{\operatorname{support}(X \cup Y)}{\operatorname{support}(X)}.\]
* ****Lift**** — how ****surprising**** it is, confidence compared with \(Y\)’s baseline frequency:

  \[\operatorname{lift}(X \rightarrow Y) =
  \frac{\operatorname{confidence}(X \rightarrow Y)}{\operatorname{support}(Y)}.\]

  Lift \(> 1\) means \(X\) and \(Y\) occur together ****more**** than chance (positive
  association); \(= 1\) means independent; \(< 1\) means they repel.

## The scale problem[#](#the-scale-problem "Link to this heading")

Why not simply score every possible rule? Because there are ****too many****. With \(d\) distinct
items there are \(2^d\) possible itemsets and more possible rules still — for a supermarket with
thousands of products, an astronomically large number. Counting the support of every candidate by
brute force is hopeless.

## The Apriori idea[#](#the-apriori-idea "Link to this heading")

The escape is one simple observation, the ****Apriori principle**** (also called ****downward closure****):
**if an itemset is frequent, all of its subsets must be frequent too** — and, turned around, **if an
itemset is infrequent, every superset of it is infrequent as well**. That lets an algorithm ****prune****
vast regions of the search: once the pair ****{milk, caviar}**** is rare, nothing containing it can be
common, so none of its extensions need be checked. The next lesson builds an algorithm around exactly
this.

> **See also**
> ****Related lessons:**** [What Can Association Rules Tell Us?](18-what-can-association-rules-tell-us.html) · [Apriori: Frequent Itemsets via the Apriori Algorithm](20-apriori-frequent-itemsets-via-the-apriori-algorithm.html) · [association\_rules: Generating Association Rules from Frequent Itemsets (mlxtend)](21-association-rules-generating-association-rules-from-frequent-itemsets-mlxtend.html) · [Cross-Selling](22-cross-selling.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/14/how-association-rules-are-discovered-concepts-scale-measures-and-the-apriori-approach/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)