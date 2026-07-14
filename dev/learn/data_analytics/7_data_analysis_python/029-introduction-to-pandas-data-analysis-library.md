# Introduction to Pandas (Data Analysis Library)[#](#introduction-to-pandas-data-analysis-library "Link to this heading")

🐍 Data Analysis Using Python 🐼 NumPy & pandas Lesson 029

◀ [Previous](028-numpy-arrays-ndarray-and-core-concepts.html) · [Next](030-pandas-dataframe-and-series.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Tables in Python[#](#tables-in-python "Link to this heading")

If NumPy is the foundation, ****pandas**** is the tool an analyst uses most — the library that
brings **tabular data** to Python, with the row-and-column tables familiar from spreadsheets
and SQL. Built on NumPy, pandas is the primary Python tool for data analysis, and this lesson
introduces it: what it is, and why it ties the whole course together.

## What pandas provides[#](#what-pandas-provides "Link to this heading")

Pandas provides labelled, tabular data structures and a vast toolkit for working with them.
Imported conventionally as `pd`:

```
import pandas as pd

df = pd.DataFrame({
    "region": ["North", "South", "East"],
    "sales":  [1000, 800, 1200],
})

```

This creates a ****DataFrame**** — a table with named columns and indexed rows, exactly the
tabular structure the whole course has worked with. Pandas can read data from files
(`pd.read_csv("data.csv")`), databases, and more, turning external data into a DataFrame to
analyse.

## Pandas as the culmination[#](#pandas-as-the-culmination "Link to this heading")

Pandas is where the course’s threads converge, because it does **in Python** what the earlier
tools did separately:

* ****The tabular structure**** from the data-preparation section — rows and columns, tidy data —
  is the DataFrame.
* ****The cleaning**** from Section 4 — handling duplicates, missing values, types — pandas does
  with methods (`drop_duplicates()`, `fillna()`, `astype()`).
* ****The analysis**** from Section 5 — sorting, filtering, grouping, aggregating, joining —
  pandas does with methods (`sort_values()`, boolean masks, `groupby()`, `merge()`).
* ****The visualization**** from Section 6 — pandas integrates with plotting libraries to chart
  directly.

Everything done in spreadsheets and SQL, pandas can do in Python — automated, reproducible,
and at scale. It is the single tool that spans the whole analytical workflow.

## Why pandas matters[#](#why-pandas-matters "Link to this heading")

Pandas matters because it unifies the analyst’s work in one powerful, programmable tool. The
spreadsheet’s visibility and the SQL query’s power, combined with Python’s automation and
scale, come together in the DataFrame — clean it, transform it, analyse it, and visualize it,
all in reproducible code. For serious Python data analysis, pandas is **the** tool, which is why
this section builds toward it, and why the concepts from every prior section reappear here in
DataFrame form.

## The caveat[#](#the-caveat "Link to this heading")

Pandas is powerful and correspondingly large, with a steep learning curve and many ways to do
each thing — some efficient, some not. Two cautions matter early. First, pandas rewards the
**vectorized** thinking from NumPy: iterating over a DataFrame’s rows with a Python loop is slow
and un-idiomatic, where a vectorized operation or built-in method does the same far faster —
the “don’t loop” lesson applies doubly to DataFrames. Second, pandas’ size means there is
usually a clean built-in method for what you want, so reaching for a convoluted manual
approach often means missing the tool that does it in one call. Learn the idiomatic,
vectorized pandas — the methods and masks — rather than writing loops against it. The next
lessons cover its structures and operations. The whole course’s analytical vocabulary is
about to reappear, in Python.

> **Hint**
> * [NumPy Arrays (ndarray) and Core Concepts](028-numpy-arrays-ndarray-and-core-concepts.html)
* [Pandas DataFrame & Series](030-pandas-dataframe-and-series.html)
* [Libraries, Packages, and Modules in Python](026-libraries-packages-and-modules-in-python.html)
* [Introduction to NumPy and Vectorization](027-introduction-to-numpy-and-vectorization.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/introduction-to-pandas-data-analysis-library/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: libraries](../../../_tags/topic-libraries.html)