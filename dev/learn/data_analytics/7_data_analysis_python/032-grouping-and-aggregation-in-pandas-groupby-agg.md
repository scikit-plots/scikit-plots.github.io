# Grouping and Aggregation in Pandas (groupby, agg)[#](#grouping-and-aggregation-in-pandas-groupby-agg "Link to this heading")

🐍 Data Analysis Using Python 🐼 NumPy & pandas Lesson 032

◀ [Previous](031-boolean-masking-in-pandas.html) · [Next](033-combining-data-in-pandas-concat-and-merge.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Grouping and summarising[#](#grouping-and-summarising "Link to this heading")

The analytical workhorse — grouping rows by a category and computing an aggregate per group —
pandas does with ****groupby**** and aggregation. This is the direct equivalent of SQL’s
`GROUP BY` and the spreadsheet’s pivot table, and it is where pandas becomes a serious
analytical tool. This lesson covers grouping and aggregation.

## The groupby operation[#](#the-groupby-operation "Link to this heading")

`groupby` splits a DataFrame into groups by a column, then an aggregate is computed for each
group:

```
import pandas as pd
df = pd.DataFrame({
    "region": ["N", "S", "N", "S", "E"],
    "sales":  [100, 200, 150, 250, 300],
})

df.groupby("region")["sales"].sum()
# region
# E    300
# N    250
# S    450

```

`df.groupby("region")["sales"].sum()` groups rows by region, then sums sales within each
group — producing the per-region total. This is exactly SQL’s
`SELECT region, SUM(sales) FROM df GROUP BY region` and a pivot table of sales by region, in
pandas.

## Aggregation functions and agg[#](#aggregation-functions-and-agg "Link to this heading")

Any aggregate can be applied per group, and `agg` computes several at once:

```
df.groupby("region")["sales"].mean()     # average per region
df.groupby("region")["sales"].count()    # count per region

df.groupby("region")["sales"].agg(["sum", "mean", "count"])
# multiple aggregates per group, as a table

df.groupby("region").agg(
    total_sales=("sales", "sum"),
    avg_sales=("sales", "mean"),
)                                          # named aggregates

```

The aggregate functions are the familiar ones (`sum`, `mean`, `count`, `min`, `max`,
`std`); `agg` applies several, optionally with names — the pandas way to build a
multi-metric summary per group, like a richer pivot table or a `GROUP BY` with several
aggregates.

## Grouping versus the earlier tools[#](#grouping-versus-the-earlier-tools "Link to this heading")

Groupby is the **grouped aggregation** from every prior section, in pandas. It is SQL’s
`GROUP BY` with aggregate functions (Section 5), the spreadsheet’s pivot table (Section 5),
and the conditional-aggregation ideas — all expressed as `df.groupby(col).agg(...)`. The
“split-apply-combine” it performs (split into groups, apply an aggregate, combine into a
result) is the same operation, and recognising it as the familiar pivot/GROUP BY makes it
immediately meaningful. It is the analytical core of pandas, as GROUP BY was of SQL.

## The caveat[#](#the-caveat "Link to this heading")

Groupby is powerful and carries the aggregation subtleties seen throughout, plus pandas
specifics. Aggregates handle **missing values** by skipping them (`mean` ignores NaN, changing
the denominator — the null-in-aggregate theme); grouping on a column with inconsistent values
fragments groups (the “NY” versus “New York” problem, so **clean before grouping**, exactly as in
SQL); and the **result** of a groupby has the grouping column as its index, which sometimes
surprises (`reset_index()` turns it back into a column). As always, the operation computes
precisely what you specify — verify the groups are what you intend and the aggregates handle
missing data as you want. This nearly completes the section; the final lesson covers combining
DataFrames — the pandas equivalent of the JOIN.

> **Hint**
> * [Boolean Masking in Pandas](031-boolean-masking-in-pandas.html)
* [Using GROUP BY and ORDER BY for Aggregated Calculations in SQL](../5_analyze_data/027-using-group-by-and-order-by-for-aggregated-calculations-in-sql.html)
* [Combining Data in Pandas (concat and merge)](033-combining-data-in-pandas-concat-and-merge.html)
* [Pandas DataFrame & Series](030-pandas-dataframe-and-series.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/grouping-and-aggregation-in-pandas-groupby-agg/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: libraries](../../../_tags/topic-libraries.html)