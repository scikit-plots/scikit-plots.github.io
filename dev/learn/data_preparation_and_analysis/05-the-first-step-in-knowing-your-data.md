# The First Step in Knowing Your Data[#](#the-first-step-in-knowing-your-data "Link to this heading")

****Stage 1 · 📋 Foundations**** · Lesson 05 of 56 · **beginner**

[◀ Previous · Big Data: Definition, Characteristics, Evolution, and Business Impact](04-big-data-definition-characteristics-evolution-and-business-impact.html) · Next · IEEE 754 Floating-Point Standard <06-ieee-754-floating-point-standard> ▶

## Look before you model[#](#look-before-you-model "Link to this heading")

Before fitting anything, ****look at the data****. This is CRISP-DM’s ****Data Understanding**** phase, and
skipping it is how projects quietly go wrong — a mis-typed column, a hidden pile of missing values, or
an outlier that wrecks a model. The first step is always ****profiling**** what you actually have.

## What to check[#](#what-to-check "Link to this heading")

A good first pass answers a handful of questions:

* ****Shape**** — how many rows and columns?
* ****Types**** — which columns are numeric, categorical, or dates?
* ****Ranges and distributions**** — the min, max, centre and spread of each numeric field;
* ****Missingness**** — how many values are absent, and where?
* ****Cardinality**** — how many distinct values do categorical fields take?
* ****Duplicates and oddities**** — repeated rows, impossible values, surprising codes.

## A first pass in pandas[#](#a-first-pass-in-pandas "Link to this heading")

In practice a few `pandas` calls cover most of it:

```
df.shape            # (rows, columns)
df.info()           # column names, dtypes, non-null counts
df.describe()       # count, mean, std, min, quartiles, max (numeric)
df.isnull().sum()   # missing values per column
df.nunique()        # distinct values per column

```

## Understanding, not just numbers[#](#understanding-not-just-numbers "Link to this heading")

Numbers alone are not understanding. The real goal is to know ****what each variable means**** — its
units, how it was collected, what a missing value signifies — so that later choices (which features to
use, how to handle gaps) are informed rather than mechanical. Every stage that follows, from
association measures to model evaluation, rests on this first honest look.

> **See also**
> ****Related lessons:**** [The Process of Data Analysis](02-the-process-of-data-analysis.html) · [CRISP-DM for Data Science](03-crisp-dm-for-data-science.html) · [Measuring Associations in Data](10-measuring-associations-in-data.html) · [IEEE 754 Floating-Point Standard](06-ieee-754-floating-point-standard.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/14/the-first-step-in-knowing-your-data/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: beginner](../../_tags/level-beginner.html)