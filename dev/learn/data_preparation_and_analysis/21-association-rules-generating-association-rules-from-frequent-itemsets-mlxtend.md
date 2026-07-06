# association\_rules: Generating Association Rules from Frequent Itemsets (mlxtend)[#](#association-rules-generating-association-rules-from-frequent-itemsets-mlxtend "Link to this heading")

****Stage 3 · 🛒 Market Basket & Association Rules**** · Lesson 21 of 56 · **intermediate**

[◀ Previous · Apriori: Frequent Itemsets via the Apriori Algorithm](20-apriori-frequent-itemsets-via-the-apriori-algorithm.html) · Next · Cross-Selling <22-cross-selling> ▶

## From itemsets to rules in code[#](#from-itemsets-to-rules-in-code "Link to this heading")

The Python library ****mlxtend**** implements the whole pipeline of the last two lessons in a few lines:
encode the transactions, mine frequent itemsets with ****apriori****, then turn them into ranked rules with
****association\_rules****. It is the standard tool for market-basket analysis in the scientific-Python
stack.

## One-hot transactions[#](#one-hot-transactions "Link to this heading")

The algorithms expect a ****one-hot encoded**** table — one row per transaction, one boolean column per
item, `True` where the item is in the basket. mlxtend’s ****TransactionEncoder**** builds it from raw
lists of items:

```
from mlxtend.preprocessing import TransactionEncoder
import pandas as pd

transactions = [["bread", "milk", "eggs"], ["bread", "butter"], ["milk", "butter"]]
te = TransactionEncoder()
df = pd.DataFrame(te.fit_transform(transactions), columns=te.columns_)

```

## Two functions[#](#two-functions "Link to this heading")

With the table ready, two calls do the work:

```
from mlxtend.frequent_patterns import apriori, association_rules

items = apriori(df, min_support=0.5, use_colnames=True)
rules = association_rules(items, metric="confidence", min_threshold=0.6)

```

****apriori**** returns the frequent itemsets and their support; ****association\_rules**** expands them into
rules and filters by the metric you choose (`"confidence"`, `"lift"`, and others).

## Reading the output[#](#reading-the-output "Link to this heading")

The result is a tidy `DataFrame`: each row a rule, with columns for ****antecedents****, ****consequents****,
****support****, ****confidence**** and ****lift**** (plus leverage and conviction). Sorting by ****lift**** surfaces
the most surprising, actionable pairings — the rules a shop would actually act on. The final lesson of
this stage puts them to use: ****cross-selling****.

> **See also**
> ****Related lessons:**** [Apriori: Frequent Itemsets via the Apriori Algorithm](20-apriori-frequent-itemsets-via-the-apriori-algorithm.html) · [How Association Rules Are Discovered: Concepts, Scale, Measures, and the Apriori Approach](19-how-association-rules-are-discovered-concepts-scale-measures-and-the-apriori-approach.html) · [What Can Association Rules Tell Us?](18-what-can-association-rules-tell-us.html) · [Cross-Selling](22-cross-selling.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/14/association_rules-generating-association-rules-from-frequent-itemsets-mlxtend/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)