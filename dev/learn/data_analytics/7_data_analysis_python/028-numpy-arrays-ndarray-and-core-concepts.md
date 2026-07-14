# NumPy Arrays (ndarray) and Core Concepts[#](#numpy-arrays-ndarray-and-core-concepts "Link to this heading")

🐍 Data Analysis Using Python 🐼 NumPy & pandas Lesson 028

◀ [Previous](027-introduction-to-numpy-and-vectorization.html) · [Next](029-introduction-to-pandas-data-analysis-library.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## The array in depth[#](#the-array-in-depth "Link to this heading")

NumPy’s central structure is the ****ndarray**** (n-dimensional array), and understanding it —
how it differs from a list, its key properties, and its core operations — is essential to
using NumPy and pandas well. This lesson covers the ndarray and NumPy’s core concepts,
deepening the array foundation.

## The ndarray versus a list[#](#the-ndarray-versus-a-list "Link to this heading")

A NumPy array (`ndarray`) looks list-like but differs crucially:

```
import numpy as np
arr = np.array([1, 2, 3, 4, 5])

```

* ****Homogeneous**** — all elements are the **same type** (all integers, all floats), unlike a
  list’s mixed types. This uniformity is what enables NumPy’s speed.
* ****Fixed size**** — an array has a set size; you do not append to it as you do a list (you
  create new arrays instead).
* ****Vectorized**** — operations apply to the whole array (the previous lesson), which lists do
  not support (`[1,2,3] * 2` repeats the list rather than doubling elements).
* ****Fast and compact**** — arrays store data efficiently and operate on it in optimised code,
  far outperforming lists for numeric work.

The array trades the list’s flexibility (mixed types, easy resizing) for **speed and
vectorization** on uniform numeric data — the right trade for numerical analysis.

## Core array properties and creation[#](#core-array-properties-and-creation "Link to this heading")

Arrays have properties describing their structure, and several creation functions:

```
arr = np.array([[1, 2, 3], [4, 5, 6]])   # a 2D array (from nested lists)
arr.shape                 # (2, 3) — 2 rows, 3 columns
arr.ndim                  # 2 — number of dimensions
arr.size                  # 6 — total elements
arr.dtype                 # the element data type (e.g. int64)

np.zeros(5)               # array of five 0.0s
np.arange(0, 10, 2)       # array([0, 2, 4, 6, 8]) — like range()
np.linspace(0, 1, 5)      # 5 evenly spaced values from 0 to 1

```

The ****shape**** (dimensions) is central — arrays can be 1D (a vector), 2D (a matrix, like a
table), or more, and the shape describes that structure. NumPy’s creation functions build
common arrays without manual listing.

## Indexing, slicing, and operations[#](#indexing-slicing-and-operations "Link to this heading")

Arrays are indexed and sliced like lists (zero-based, exclusive stop), extended to multiple
dimensions, and support rich vectorized operations:

```
arr = np.array([10, 20, 30, 40, 50])
arr[0]                    # 10
arr[1:3]                  # array([20, 30])
arr[arr > 25]             # array([30, 40, 50]) — boolean indexing!

arr.sum(); arr.mean(); arr.max(); arr.std()   # aggregate functions

```

The last — `arr[arr > 25]` — is ****boolean indexing****: selecting elements by a condition,
which returns only the matching elements. This is exactly the filtering idea from SQL
`WHERE` and spreadsheet filters, vectorized — and it is the foundation of the boolean
masking that pandas uses to filter data (an upcoming lesson).

## Why the ndarray matters[#](#why-the-ndarray-matters "Link to this heading")

The ndarray is the foundation of numerical Python — NumPy’s own operations, and **pandas**
(whose columns are essentially arrays), all rest on it. Understanding arrays — homogeneous,
vectorized, shaped, boolean-indexable — is understanding the substrate of all Python data
analysis. The concepts here (vectorization, boolean indexing, aggregation) reappear directly
in pandas, so the array is where the idioms of data analysis in Python are first and most
clearly learned.

## The caveat[#](#the-caveat "Link to this heading")

The ndarray’s constraints are real and occasionally surprising. Its ****homogeneity**** means
mixing types coerces them (putting a float in an int array converts, and mixing numbers and
strings makes everything strings), which can silently change data — the array assumes uniform
type. Its ****fixed size**** means “growing” an array actually creates a new one, so
list-style appending in a loop is both wrong-idiom and slow (build the data as a list then
convert, or use vectorized construction). And array operations require **compatible shapes** —
operating on mismatched shapes errors or triggers broadcasting rules that surprise the
unwary. For the flat, uniform numeric data of typical analysis these rarely bite, but the
array is a stricter, more structured thing than a list — which is exactly what makes it fast.
The next lessons build on the array to reach pandas, the analyst’s primary Python tool.

> **Hint**
> * [Introduction to NumPy and Vectorization](027-introduction-to-numpy-and-vectorization.html)
* [Introduction to Pandas (Data Analysis Library)](029-introduction-to-pandas-data-analysis-library.html)
* [Pandas DataFrame & Series](030-pandas-dataframe-and-series.html)
* [Libraries, Packages, and Modules in Python](026-libraries-packages-and-modules-in-python.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/numpy-arrays-ndarray-and-core-concepts/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: libraries](../../../_tags/topic-libraries.html)