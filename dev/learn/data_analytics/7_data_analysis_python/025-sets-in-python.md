# Sets in Python[#](#sets-in-python "Link to this heading")

🐍 Data Analysis Using Python 📚 Strings & Data Structures Lesson 025

◀ [Previous](024-advanced-dictionary-usage-in-python.html) · [Next](026-libraries-packages-and-modules-in-python.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Unordered collections of unique values[#](#unordered-collections-of-unique-values "Link to this heading")

The last core data structure is the ****set**** — an unordered collection of **unique** values.
Sets excel at membership testing, removing duplicates, and set operations (union,
intersection), and understanding them completes Python’s built-in structures. This lesson
covers sets, closing the structures stage.

## What a set is[#](#what-a-set-is "Link to this heading")

A ****set**** is a collection with two defining properties: its values are ****unique**** (no
duplicates) and ****unordered**** (no positional index). Written with curly braces (like a
dictionary, but values not pairs):

```
regions = {"North", "South", "East", "North"}   # duplicate ignored
print(regions)            # {"North", "South", "East"} — 3 unique values

```

Adding a duplicate has no effect (the value is already present), and there is no
`set[0]` — sets are not indexed. Their purpose is **membership** and **uniqueness**, not
order.

## Set operations[#](#set-operations "Link to this heading")

Sets support fast membership testing and mathematical set operations:

```
"North" in regions       # True — fast membership test

a = {1, 2, 3}
b = {2, 3, 4}
a | b                     # {1, 2, 3, 4} — union (in either)
a & b                     # {2, 3} — intersection (in both)
a - b                     # {1} — difference (in a but not b)

```

Membership testing (`in`) is **very fast** on a set — faster than searching a list — and the
operations (union `|`, intersection `&`, difference `-`) answer “in either / both /
one but not the other” directly. These are exactly the set operations of mathematics, and of
SQL’s `UNION`/`INTERSECT`/`EXCEPT`.

## Why sets matter[#](#why-sets-matter "Link to this heading")

Sets serve specific, common needs:

* ****Removing duplicates**** — converting a list to a set drops duplicates instantly
  (`set(my_list)`), the fastest deduplication in Python.
* ****Fast membership testing**** — checking whether a value is in a large collection is far
  faster with a set than a list, which matters at scale.
* ****Comparing collections**** — the set operations answer “what is common / different between
  these two collections?” directly (which customers are in both lists? which are only in
  one?).

For these tasks — uniqueness, membership, comparison — the set is the right tool, cleaner and
faster than working around a list.

## The caveat[#](#the-caveat "Link to this heading")

Sets’ properties are also their limitations. Being **unordered**, a set cannot be indexed or
sliced, and does not preserve insertion order — if order matters, a set is the wrong
structure (use a list). Being **unique**, a set cannot hold duplicates — which is the point
for deduplication, but means a set cannot represent data where repetition is meaningful (a
set of sales figures would collapse identical amounts into one, losing information). And set
elements must be **immutable** (like dictionary keys), so a set cannot contain lists. Use a set
precisely when uniqueness and membership are what you want, and a list when order or
repetition matters. This completes Python’s core data structures; the next lessons open the
final stage — the libraries that make Python a data-analysis powerhouse.

> **Hint**
> * [Dictionaries in Python](023-dictionaries-in-python.html)
* [Data Types vs Data Structures & Introduction to Lists](019-data-types-vs-data-structures-and-introduction-to-lists.html)
* [Advanced Use of Loops, Lists, Tuples & List Comprehension](022-advanced-use-of-loops-lists-tuples-and-list-comprehension.html)
* [Libraries, Packages, and Modules in Python](026-libraries-packages-and-modules-in-python.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/sets-in-python/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: structures](../../../_tags/topic-structures.html)