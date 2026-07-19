# Modifying Lists in Python[#](#modifying-lists-in-python "Link to this heading")

🐍 Data Analysis Using Python 📚 Strings & Data Structures Lesson 020

◀ [Previous](019-data-types-vs-data-structures-and-introduction-to-lists.html) · [Next](021-tuples-in-python.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Changing lists in place[#](#changing-lists-in-place "Link to this heading")

Unlike strings, lists are ****mutable**** — they can be **changed in place** after creation:
items added, removed, or updated. This mutability makes lists the flexible, dynamic
structure they are, and this lesson covers the operations that modify them — the everyday
tools for building and updating collections.

## Adding elements[#](#adding-elements "Link to this heading")

Several methods add to a list:

```
sales = [100, 250]
sales.append(300)         # add one item to the end: [100, 250, 300]
sales.insert(0, 50)       # insert at a position: [50, 100, 250, 300]
sales.extend([400, 500])  # add multiple items: [50, 100, 250, 300, 400, 500]

```

`append` adds a single item to the end (the most common); `insert` places an item at a
given index; `extend` appends all items of another list. These grow a list as data
arrives — the accumulate pattern from the for-loop lesson often uses `append`.

## Removing elements[#](#removing-elements "Link to this heading")

Methods remove items:

```
sales.remove(50)          # remove the first matching value
popped = sales.pop()      # remove and return the last item
popped = sales.pop(0)     # remove and return the item at an index
del sales[0]              # delete the item at an index

```

`remove` deletes by **value** (the first match); `pop` deletes by **position** and returns
the removed item; `del` deletes by position. These shrink a list as items are consumed
or filtered.

## Updating and other operations[#](#updating-and-other-operations "Link to this heading")

Items are updated by assigning to an index, and lists have further useful methods:

```
sales[0] = 999            # update the item at index 0
sales.sort()              # sort the list in place (ascending)
sales.reverse()           # reverse the order in place
count = sales.count(250)  # count occurrences of a value

```

Assigning to `sales[0]` changes that element; `sort` and `reverse` reorder the list
**in place** (modifying the original, not returning a new list). These operations make lists
dynamic — reorderable, updatable collections.

## Mutability: the key property[#](#mutability-the-key-property "Link to this heading")

The defining feature is that these operations change the list **in place** — unlike string
methods, which return new strings. `sales.append(300)` modifies `sales` directly (no
reassignment needed); `sales.sort()` reorders `sales` itself. This in-place mutability
is what makes lists efficient for building and updating collections, and it is the direct
contrast to strings’ immutability from the earlier lesson — a distinction worth holding
clearly, because it changes how you use each.

## The caveat[#](#the-caveat "Link to this heading")

Mutability is powerful and **hazardous**, in ways that catch even experienced programmers.
Because a list is changed in place, if two variables refer to the **same** list (`b = a`
makes `b` another name for `a`’s list, not a copy), modifying one changes the other —
the “shared reference” surprise, a classic source of baffling bugs. To get an independent
copy, you must explicitly copy the list (`b = a.copy()`). Also, in-place methods like
`sort()` return `None`, not the sorted list, so `sales = sales.sort()` mistakenly sets
`sales` to `None` — the opposite mistake to strings (where you **must** reassign). The
disciplines: copy a list when you need an independent one, and remember in-place methods
modify rather than return. The next lessons cover tuples and further structures.

> **Hint**
> * [Data Types vs Data Structures & Introduction to Lists](019-data-types-vs-data-structures-and-introduction-to-lists.html)
* [Advanced Use of Loops, Lists, Tuples & List Comprehension](022-advanced-use-of-loops-lists-tuples-and-list-comprehension.html)
* [Tuples in Python](021-tuples-in-python.html)
* [Strings in Python](016-strings-in-python.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/modifying-lists-in-python/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: structures](../../../_tags/topic-structures.html)