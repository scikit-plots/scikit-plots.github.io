# For Loops in Python[#](#for-loops-in-python "Link to this heading")

🐍 Data Analysis Using Python 🔀 Control Flow Lesson 014

◀ [Previous](013-while-loops-and-iteration-in-python.html) · [Next](015-range-function-and-loop-control-in-python.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Repeating over a collection[#](#repeating-over-a-collection "Link to this heading")

When you need to do something **for each item** in a collection, the ****for loop**** is the
natural tool — it iterates over the items of a sequence, running its block once per item.
This is the loop analysts use most, because data work is largely “do this to every row,
value, or record.” This lesson covers the for loop, the workhorse of iteration.

## The for loop[#](#the-for-loop "Link to this heading")

A `for` loop iterates over the items of a collection, binding each to a variable in
turn:

```
regions = ["North", "South", "East", "West"]
for region in regions:
    print(region)

```

Python takes each item of `regions` in order, assigns it to `region`, and runs the
block — printing all four region names. The loop variable (`region`) holds the current
item on each pass. Unlike the while loop, the for loop **automatically** stops when the
collection is exhausted — no manual progress-tracking, and no risk of an infinite loop
over a finite collection.

## Iterating and accumulating[#](#iterating-and-accumulating "Link to this heading")

A common pattern combines a for loop with a variable that **accumulates** a result across
iterations:

```
sales = [100, 250, 175, 300]
total = 0
for amount in sales:
    total += amount        # accumulate
print(total)               # 825

```

The `total` starts at zero and grows by each amount as the loop visits it — computing a
sum by iteration. This accumulate-across-a-loop pattern (summing, counting, collecting,
building) is one of the most useful in programming, and it is how manual aggregation is
expressed in code (though pandas, later, does it far more concisely).

## For loops over different collections[#](#for-loops-over-different-collections "Link to this heading")

For loops iterate any **iterable** — lists, strings (character by character), dictionaries
(the structures stage), and more:

```
for char in "data":        # iterates characters: d, a, t, a
    print(char)

```

This generality makes the for loop the standard way to process collections of any kind —
whatever the data, “for each item, do something” is a for loop.

## The caveat[#](#the-caveat "Link to this heading")

For loops are safer than while loops (they cannot loop infinitely over a finite
collection), but they have their own pitfalls. Modifying a collection **while** iterating
over it causes subtle bugs (the collection changes underfoot) and should be avoided —
build a new collection instead. And a deeper point looms for data work: explicit Python
for loops over large datasets are **slow** compared to the vectorised operations of
`numpy` and `pandas` (the libraries stage), which do the same work far faster without
an explicit loop. Loops are essential to understand and correct for general programming,
but for large-scale data the idiom shifts to vectorised operations — a for loop over a
million-row dataset is usually the wrong tool. Learn loops thoroughly, and later learn
when **not** to loop. The next lesson covers generating sequences and controlling loops.

> **Hint**
> * [While Loops and Iteration in Python](013-while-loops-and-iteration-in-python.html)
* [range() Function and Loop Control in Python](015-range-function-and-loop-control-in-python.html)
* [Data Types vs Data Structures & Introduction to Lists](019-data-types-vs-data-structures-and-introduction-to-lists.html)
* [Branching and Conditional Statements in Python](012-branching-and-conditional-statements-in-python.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/for-loops-in-python/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: control](../../../_tags/topic-control.html)