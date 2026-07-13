# Apriori: Frequent Itemsets via the Apriori Algorithm[#](#apriori-frequent-itemsets-via-the-apriori-algorithm "Link to this heading")

****Stage 3 · 🛒 Market Basket & Association Rules**** · Lesson 20 of 56 · **intermediate**

[◀ Previous · How Association Rules Are Discovered: Concepts, Scale, Measures, and the Apriori Approach](19-how-association-rules-are-discovered-concepts-scale-measures-and-the-apriori-approach.html) · [Next · association\_rules: Generating Association Rules from Frequent Itemsets (mlxtend) ▶](21-association-rules-generating-association-rules-from-frequent-itemsets-mlxtend.html) · [↑ Section](index.html)

## Prior knowledge[#](#prior-knowledge "Link to this heading")

The ****Apriori algorithm****, introduced by Agrawal and Srikant in ****1994****, is the classic method for
finding all ****frequent itemsets**** — the groups of items whose support clears a chosen ****minimum****. Its
name comes from the **a priori** (prior) knowledge it exploits: it uses the frequent itemsets already
found at one size to decide what is worth checking at the next.

## The level-wise search[#](#the-level-wise-search "Link to this heading")

The algorithm walks the itemsets ****level by level****, from small to large, applying downward closure at
every step. The key move is ****candidate generation****: a \(k\)-item candidate is formed only if
****all**** of its \((k{-}1)\)-item subsets are already known to be frequent. Any candidate with an
infrequent subset is discarded ****before**** its support is ever counted — that is where the saving comes
from.

## One level at a time[#](#one-level-at-a-time "Link to this heading")

Concretely, each level repeats three steps:

1. ****Generate**** candidate \(k\)-itemsets by combining frequent \((k{-}1)\)-itemsets, then ****prune**** those with any infrequent subset;
2. ****Count**** each surviving candidate’s support with a single ****scan**** of the transaction database;
3. ****Keep**** those meeting minimum support as the frequent \(k\)-itemsets.

Start with frequent single items (\(k = 1\)) and repeat, increasing \(k\), until no new
candidates survive. The cost is that dense data can still spawn many candidates and repeated database
scans — Apriori is simple and correct, not always the fastest.

## Then the rules[#](#then-the-rules "Link to this heading")

Apriori delivers frequent ****itemsets****; turning them into ****rules**** is the easy second half. For each
frequent itemset, split it into an antecedent and consequent every way possible and keep the splits
whose ****confidence**** (or ****lift****) clears a threshold. Because both sides come from a frequent itemset,
the rule’s support is already known — which is exactly what the next lesson automates in Python.

> **Hint**
> ****Related lessons:**** [How Association Rules Are Discovered: Concepts, Scale, Measures, and the Apriori Approach](19-how-association-rules-are-discovered-concepts-scale-measures-and-the-apriori-approach.html) · [association\_rules: Generating Association Rules from Frequent Itemsets (mlxtend)](21-association-rules-generating-association-rules-from-frequent-itemsets-mlxtend.html) · [Understanding Market Baskets and Ideal Customers](17-understanding-market-baskets-and-ideal-customers.html) · [Cross-Selling](22-cross-selling.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/14/apriori-frequent-itemsets-via-the-apriori-algorithm/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)