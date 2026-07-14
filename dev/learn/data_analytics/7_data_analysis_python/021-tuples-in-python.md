# Tuples in Python[#](#tuples-in-python "Link to this heading")

🐍 Data Analysis Using Python 📚 Strings & Data Structures Lesson 021

◀ [Previous](020-modifying-lists-in-python.html) · [Next](022-advanced-use-of-loops-lists-tuples-and-list-comprehension.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Ordered and unchangeable[#](#ordered-and-unchangeable "Link to this heading")

A ****tuple**** is like a list — an ordered collection of values — but with one crucial
difference: it is ****immutable****, unchangeable after creation. Tuples serve where a
collection should be fixed, and understanding them (and why immutability is sometimes
wanted) rounds out the sequence structures. This lesson covers tuples.

## Creating and using tuples[#](#creating-and-using-tuples "Link to this heading")

A tuple is written with parentheses (or just commas):

```
point = (3, 5)
rgb = (255, 128, 0)
record = ("North", 1000, 2024)     # a mixed tuple

```

Tuples are accessed exactly like lists — by index, with slicing:

```
point[0]          # 3
record[1]         # 1000
record[-1]        # 2024
len(record)       # 3

```

Everything about **reading** a tuple mirrors a list; the difference is entirely in
**changing** it.

## Immutability[#](#immutability "Link to this heading")

A tuple **cannot be changed** after creation — no adding, removing, or updating elements:

```
point = (3, 5)
point[0] = 10     # ERROR — tuples do not support item assignment

```

This immutability is the tuple’s defining property, and it is the same immutability strings
have. Where a list is a **changeable** ordered collection, a tuple is a **fixed** one — the two
are otherwise similar.

## Why use a tuple[#](#why-use-a-tuple "Link to this heading")

If tuples are just unchangeable lists, why use them? Immutability is a **feature** in the
right situations:

* ****Fixed data that should not change**** — coordinates, RGB colours, a fixed record — where
  accidental modification would be a bug. The immutability **protects** the data.
* ****Meaning and intent**** — using a tuple signals “this collection is fixed,” documenting
  intent to readers.
* ****Dictionary keys**** — tuples can serve as dictionary keys (the next lessons) where lists
  cannot, precisely because they are immutable and stable.
* ****Multiple return values**** — functions often return several values as a tuple
  (`return x, y`), a common Python idiom.

The choice between list and tuple is the choice between **changeable** and **fixed**: use a
list when the collection will change, a tuple when it should not.

## The caveat[#](#the-caveat "Link to this heading")

The tuple-versus-list choice is easy to get wrong in either direction: using a tuple for
data that **does** need to change forces awkward workarounds (you cannot modify it), while
using a list for data that should be **fixed** forgoes the protection immutability gives. The
guidance is intent-based — will this collection change during its life? Changeable → list;
fixed → tuple. And a subtle trap: a tuple’s **immutability is shallow** — a tuple cannot be
reassigned, but if it **contains** a mutable object (a list inside a tuple), that inner object
can still change. For the flat collections of typical data work this rarely bites, but it is
worth knowing that immutability applies to the tuple’s own structure, not necessarily to
everything within it. The next lesson combines the structures with loops and introduces list
comprehension.

> **Hint**
> * [Modifying Lists in Python](020-modifying-lists-in-python.html)
* [Data Types vs Data Structures & Introduction to Lists](019-data-types-vs-data-structures-and-introduction-to-lists.html)
* [Advanced Use of Loops, Lists, Tuples & List Comprehension](022-advanced-use-of-loops-lists-tuples-and-list-comprehension.html)
* [Strings in Python](016-strings-in-python.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/tuples-in-python/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: structures](../../../_tags/topic-structures.html)