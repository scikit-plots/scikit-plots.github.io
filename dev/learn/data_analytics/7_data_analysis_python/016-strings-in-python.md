# Strings in Python[#](#strings-in-python "Link to this heading")

🐍 Data Analysis Using Python 📚 Strings & Data Structures Lesson 016

◀ [Previous](015-range-function-and-loop-control-in-python.html) · [Next](017-string-indexing-and-slicing-in-python.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Working with text[#](#working-with-text "Link to this heading")

Data is full of text — names, categories, codes, addresses — and Python’s ****string**** type
is how text is represented and manipulated. Opening the data-structures stage, this lesson
covers strings in Python: creating them, their operations, and the crucial property of
immutability. It extends the string work from the spreadsheet and SQL sections into
Python.

## Creating and combining strings[#](#creating-and-combining-strings "Link to this heading")

A ****string**** is text, written in single or double quotes:

```
name = "North Region"
code = 'NR-001'

```

Strings combine and repeat with operators:

```
greeting = "Hello, " + name       # concatenation: "Hello, North Region"
line = "-" * 20                    # repetition: 20 dashes

```

The `+` concatenates strings (as in the spreadsheet’s `&` and SQL’s `CONCAT`), and
`*` repeats a string — the basic ways to build text.

## String methods[#](#string-methods "Link to this heading")

Strings are objects (the OOP lesson) with many useful methods, mirroring the string
functions from earlier sections:

```
text = "  North Region  "
text.strip()              # "North Region" — remove surrounding whitespace (like TRIM)
text.upper()              # "  NORTH REGION  " — uppercase
text.lower()              # lowercase
text.replace("North", "South")   # substitute (like SUBSTITUTE / REPLACE)
"NR-001".split("-")       # ["NR", "001"] — split on a delimiter
len("North")              # 5 — length (like LEN)

```

These are the same cleaning and manipulation operations from the spreadsheet (`TRIM`,
`UPPER`, `SUBSTITUTE`) and SQL (`TRIM`, `UPPER`, `REPLACE`, `SUBSTR`) — now as
Python string methods, called with dot notation on the string object.

## String immutability[#](#string-immutability "Link to this heading")

A crucial property: strings in Python are ****immutable**** — once created, a string cannot be
changed in place. String methods do not modify the original; they **return a new string**:

```
text = "north"
text.upper()              # returns "NORTH", but...
print(text)               # still "north" — unchanged!
text = text.upper()       # to keep the result, reassign
print(text)               # now "NORTH"

```

This catches many beginners: calling `text.upper()` does not change `text`; you must
**assign** the result back. Immutability means string operations produce new strings, and
using the result requires capturing it — a fundamental and frequently-forgotten point.

## Why strings matter[#](#why-strings-matter "Link to this heading")

Text manipulation is constant in data work — cleaning categories, parsing codes, extracting
parts, formatting output — and Python’s string methods are the tools for all of it, more
flexible than their spreadsheet and SQL counterparts. Because so much real data is text
(or arrives as text needing conversion, the type lesson), fluency with strings is
essential to Python data analysis. The following lessons go deeper into indexing,
slicing, and formatting strings.

## The caveat[#](#the-caveat "Link to this heading")

String immutability is the pitfall to internalise: the single commonest string mistake is
calling a method and expecting the original to change — `text.strip()` on its own does
nothing lasting; you must write `text = text.strip()`. Every string “modification” is
really “create a new string and (usually) reassign.” Beyond that, strings carry the
encoding and special-character subtleties of all text (the Unicode considerations), and
splitting or extracting assumes a structure that real text may not consistently have (the
defensive-extraction point from the spreadsheet strings lesson applies). Capture method
results, and handle text’s irregularity. The next lesson covers reaching into strings by
position: indexing and slicing.

> **Hint**
> * [String Indexing and Slicing in Python](017-string-indexing-and-slicing-in-python.html)
* [String Formatting with .format() in Python](018-string-formatting-with-format-in-python.html)
* [Data Types and Type Conversion in Python](007-data-types-and-type-conversion-in-python.html)
* [Working with Strings in Spreadsheets (LEN, LEFT, RIGHT, FIND)](../5_analyze_data/010-working-with-strings-in-spreadsheets-len-left-right-find.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/strings-in-python/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: structures](../../../_tags/topic-structures.html)