# Databases and Relational Database Concepts[#](#databases-and-relational-database-concepts "Link to this heading")

📦 Data Preparation 🗄️ Databases & Data Sources Lesson 016

◀ [Previous](015-open-data-and-openness-in-data-ethics.html) · [Next](017-metadata-in-databases.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Where organisational data really lives[#](#where-organisational-data-really-lives "Link to this heading")

Spreadsheets are where analysts often **work**, but they are rarely where
organisational data **lives**. That home is the ****database**** — a structured
collection of data stored electronically and organised for efficient access,
management, and retrieval. Most business data of any scale sits in databases,
and the dominant kind is the ****relational database****, whose concepts every
analyst needs, because SQL — the language of the coming sections — is the
language of exactly these systems.

## The relational model[#](#the-relational-model "Link to this heading")

A ****relational database**** organises data into ****tables**** (rows and columns,
the tabular structure from earlier) and — crucially — defines ****relationships****
between those tables, so related information stored separately can be linked.
The core concepts:

* ****Tables**** hold one kind of entity each — a `customers` table, an
  `orders` table, a `products` table — rather than cramming everything into
  one giant sheet.
* ****Primary key**** — a column (or combination) whose value uniquely identifies
  each row in a table: a `customer_id` that is different for every customer.
  It is the table’s guarantee that each record is distinct and addressable.
* ****Foreign key**** — a column in one table that refers to the primary key of
  another, creating the link between them. An `orders` table’s
  `customer_id` column is a foreign key pointing at the `customers` table,
  recording **which customer** placed each order.
* ****Relationships**** — the connections foreign keys express (one customer has
  many orders; each order belongs to one customer), letting data be stored once
  and joined when needed.

## Why not just one big table?[#](#why-not-just-one-big-table "Link to this heading")

Relational structure exists to avoid ****redundancy**** and the errors it breeds.
Storing each order alongside a full copy of its customer’s details would repeat
that customer’s name and address on every order, waste space, and — worse —
create inconsistency the moment one copy is updated and another is not. Keeping
customers in one table and referring to them by key means each fact is stored
****once****, in one authoritative place. This principle (roughly, **normalisation**)
is why real databases are many small linked tables rather than one sprawling
sheet, and why joining them is a core analytical skill.

## Why analysts need this[#](#why-analysts-need-this "Link to this heading")

Three practical reasons. The data you will query is **shaped** this way, so
understanding tables and keys is understanding what you are querying. Answering
real questions usually means ****combining**** tables — customer data with order
data with product data — via their relationships, which is what SQL `JOIN`
(the analysis section’s topic) does. And the “stored once, in one place”
principle explains data you will meet: why an `orders` table has a bare
`customer_id` instead of full customer details, and where to go to look them
up.

## The caveat[#](#the-caveat "Link to this heading")

The relational model is dominant but not universal — other database kinds
(document, key-value, graph, and other “NoSQL” stores) organise data
differently for different needs, and very large or unstructured data often lives
outside neat relational tables. Relational concepts are the essential
foundation and the right starting point, but not the whole storage landscape.
The next lessons stay with this world, turning to the **metadata** that describes
what is in these databases and the governance that manages it.

> **Hint**
> * [Structured Data and Data Models](004-structured-data-and-data-models.html)
* [Metadata in Databases](017-metadata-in-databases.html)
* [Querying Data with SQL](023-querying-data-with-sql.html)
* [Accessing Data: Internal and External Sources](019-accessing-data-internal-and-external-sources.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/09/04/databases-and-relational-database-concepts/> (insightful-data-lab.com).

Tags: [data-analytics](../../../_tags/data-analytics.html) [prep](../../../_tags/prep.html) [sources](../../../_tags/sources.html)