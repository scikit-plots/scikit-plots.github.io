# Structured Data and Data Models[#](#structured-data-and-data-models "Link to this heading")

📦 Data Preparation 🧬 Data Types & Structure Lesson 004

◀ [Previous](003-understanding-data-types-and-data-formats.html) · [Next](005-data-types-in-spreadsheets.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## How organised is the data?[#](#how-organised-is-the-data "Link to this heading")

Beyond individual value types, data has an overall ****degree of structure**** —
how regularly it is organised — and this determines which tools can work with
it and how much preparation it needs before analysis. The standard three-way
split is one of the most useful classifications in the field.

## Structured, semi-structured, unstructured[#](#structured-semi-structured-unstructured "Link to this heading")

* ****Structured data**** is organised into a defined model — rows and columns,
  with a fixed schema saying what each field is. A database table or a tidy
  spreadsheet is structured: every record has the same fields, each of a known
  type. Structured data is the easiest to query, aggregate, and analyse, and
  it is where most of this course operates.
* ****Semi-structured data**** has organisational markers but no rigid table
  schema — tags or keys that give it shape while allowing records to vary.
  JSON and XML are the classic examples: hierarchical, self-describing, but not
  a fixed grid. Common from web APIs, it usually needs reshaping into
  structured form before tabular analysis.
* ****Unstructured data**** has no predefined model: free text, images, audio,
  video. It is the most abundant kind of data in the world and the richest, but
  also the hardest to analyse — extracting structure from it (turning reviews
  into themes, images into labels) is often a project in itself.

The progression structured → semi-structured → unstructured runs from
**easiest to analyse, least abundant** toward **hardest to analyse, most
abundant** — which is much of why data work is challenging.

## What a data model is[#](#what-a-data-model-is "Link to this heading")

A ****data model**** is the description of how data is organised: what entities
exist, what attributes each has, and how they relate. Structured data has an
explicit model (a table’s columns and types, a database’s schema); giving
unstructured data a model is precisely the act of structuring it. Models are
usually described at three levels of detail — a high-level ****conceptual**** view
of the main entities, a ****logical**** view specifying attributes and
relationships, and a concrete ****physical**** view of how it is actually stored —
moving from **what the business cares about** down to **how the database holds
it**.

## Why structure and models matter for preparation[#](#why-structure-and-models-matter-for-preparation "Link to this heading")

The degree of structure sets the preparation workload. Structured data is close
to analysis-ready and needs mainly cleaning. Semi-structured data needs
**reshaping** into tables first. Unstructured data needs **structuring** — often
the largest task of all. Recognising which kind you face, early in the Prepare
phase, tells you how much work stands between the raw data and a valid
analysis — and whether the question is even answerable with the effort
available.

## The caveat[#](#the-caveat "Link to this heading")

The categories are a spectrum, not sharp bins: a spreadsheet full of
free-text notes is nominally structured but practically holds unstructured
content in its cells, and “structured” guarantees a shape, not quality —
perfectly structured data can still be riddled with errors, which is exactly
why cleaning is its own section. Structure tells you how the data is
**organised**, never whether it is **right**. The following lessons move from these
broad kinds down to the concrete shapes data takes in spreadsheets and tables.

> **Hint**
> * [Understanding Data Types and Data Formats](003-understanding-data-types-and-data-formats.html)
* [Databases and Relational Database Concepts](016-databases-and-relational-database-concepts.html)
* [Data Tables (Tabular Data)](006-data-tables-tabular-data.html)
* [Wide Data vs. Long Data](007-wide-data-vs-long-data.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/09/04/structured-data-and-data-models/> (insightful-data-lab.com).

Tags: [data-analytics](../../../_tags/data-analytics.html) [prep](../../../_tags/prep.html) [types](../../../_tags/types.html)