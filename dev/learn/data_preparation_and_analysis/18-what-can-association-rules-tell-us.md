# What Can Association Rules Tell Us?[#](#what-can-association-rules-tell-us "Link to this heading")

****Stage 3 · 🛒 Market Basket & Association Rules**** · Lesson 18 of 56 · **intermediate**

[◀ Previous · Understanding Market Baskets and Ideal Customers](17-understanding-market-baskets-and-ideal-customers.html) · [Next · How Association Rules Are Discovered: Concepts, Scale, Measures, and the Apriori Approach ▶](19-how-association-rules-are-discovered-concepts-scale-measures-and-the-apriori-approach.html) · [↑ Section](index.html)

## If this, then that[#](#if-this-then-that "Link to this heading")

An ****association rule**** is an “if-then” statement about items in a basket: ****if**** a customer buys some
set of items, ****then**** they are likely to buy another. Written
\(\{\text{bread}, \text{butter}\} \rightarrow \{\text{milk}\}\), it reads “baskets with bread and
butter tend also to contain milk”. The left side is the ****antecedent****, the right the ****consequent****.

## What a rule says[#](#what-a-rule-says "Link to this heading")

A rule captures a ****regularity**** in the data — a combination that shows up together more than you
might expect. On its own the arrow is just a candidate pattern; its ****usefulness**** depends on how often
it holds and how reliable it is, which the next lesson measures with ****support****, ****confidence**** and
****lift****. For now, the point is the **shape** of the knowledge: compact, readable statements about what
accompanies what.

## What they’re good for[#](#what-they-re-good-for "Link to this heading")

Rules turn into ****decisions****. “Customers who buy X also buy Y” suggests ****recommendations**** (“you
might also like…”), ****bundles****, ****store layout****, and ****targeted promotions****. This is the engine
behind ****cross-selling**** (Stage 3’s closing lesson): using a known purchase to suggest a complementary
one, lifting basket size and revenue.

## A familiar caution[#](#a-familiar-caution "Link to this heading")

The caution from the start of this stage returns: a rule reports ****association, not causation****. That
bread and butter travel with milk does not mean one ****causes**** the other — both may simply reflect a
weekly grocery run. Rules are superb at spotting ****what**** goes together and useful for acting on it,
but they do not, by themselves, explain ****why****.

> **Hint**
> ****Related lessons:**** [Understanding Market Baskets and Ideal Customers](17-understanding-market-baskets-and-ideal-customers.html) · [How Association Rules Are Discovered: Concepts, Scale, Measures, and the Apriori Approach](19-how-association-rules-are-discovered-concepts-scale-measures-and-the-apriori-approach.html) · [Apriori: Frequent Itemsets via the Apriori Algorithm](20-apriori-frequent-itemsets-via-the-apriori-algorithm.html) · [Cross-Selling](22-cross-selling.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/14/what-can-association-rules-tell-us/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)