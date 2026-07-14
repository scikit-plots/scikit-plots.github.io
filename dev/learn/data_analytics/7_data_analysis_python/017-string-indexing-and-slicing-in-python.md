# String Indexing and Slicing in Python[#](#string-indexing-and-slicing-in-python "Link to this heading")

🐍 Data Analysis Using Python 📚 Strings & Data Structures Lesson 017

◀ [Previous](016-strings-in-python.html) · [Next](018-string-formatting-with-format-in-python.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Reaching into strings by position[#](#reaching-into-strings-by-position "Link to this heading")

A string is a **sequence** of characters, and Python lets you reach into it by position —
****indexing**** to get a single character, ****slicing**** to get a substring. These are the
Python counterparts of the spreadsheet’s `LEFT`/`RIGHT`/`MID` and SQL’s `SUBSTR`,
and they are essential for parsing and extracting from text. This lesson covers indexing
and slicing.

## Indexing: single characters[#](#indexing-single-characters "Link to this heading")

Each character in a string has an ****index**** — its position, counting from ****zero****:

```
text = "North"
#       01234
text[0]           # "N" — first character (index 0)
text[1]           # "o" — second character
text[-1]          # "h" — last character (negative counts from the end)
text[-2]          # "t" — second to last

```

The first character is at index `0` (not 1) — ****zero-based indexing****, a fundamental and
frequently-tripped-over convention. Negative indices count from the end (`-1` is the
last), a convenient Python feature for reaching the end without knowing the length.

## Slicing: substrings[#](#slicing-substrings "Link to this heading")

****Slicing**** extracts a range of characters with `[start:stop]`:

```
text = "North Region"
text[0:5]         # "North" — characters 0 through 4
text[6:]          # "Region" — from index 6 to the end
text[:5]          # "North" — from the start to index 4
text[-6:]         # "Region" — the last six characters

```

The slice `[start:stop]` includes `start` but **excludes** `stop` — `text[0:5]` is
characters 0,1,2,3,4, not 5 — the same exclusive-upper-bound convention as `range()`.
Omitting `start` means “from the beginning”; omitting `stop` means “to the end.” Slicing
is how you extract a substring by position — the flexible text-extraction tool.

## Indexing/slicing versus the earlier tools[#](#indexing-slicing-versus-the-earlier-tools "Link to this heading")

These operations mirror the string extraction from earlier sections exactly: `text[0:5]`
is the spreadsheet’s `LEFT(text, 5)` and SQL’s `SUBSTR(text, 1, 5)`; `text[-3:]` is
`RIGHT(text, 3)`. The concept — extract characters by position — is identical; Python’s
`[start:stop]` syntax is simply another expression of it, and one that generalises to all
sequences (lists too, as the list lessons show).

## The caveat[#](#the-caveat "Link to this heading")

Two traps recur. ****Zero-based indexing**** — the first character is index 0 — means positions
are always one less than the “counting” number, a persistent source of off-by-one errors;
and the ****exclusive stop**** in slicing (`[0:5]` stops at 4) compounds this. Getting an
index or slice boundary wrong extracts the wrong characters, often silently. The other trap
is indexing **past the end** of a string (`text[100]` on a short string), which raises an
error — though slicing past the end is forgiving (it just stops at the end). As with all
position-based extraction, the discipline is care with the boundaries and awareness that
positions count from zero. The next lesson covers building strings from values.

> **Hint**
> * [Strings in Python](016-strings-in-python.html)
* [String Formatting with .format() in Python](018-string-formatting-with-format-in-python.html)
* [Working with Strings in Spreadsheets (LEN, LEFT, RIGHT, FIND)](../5_analyze_data/010-working-with-strings-in-spreadsheets-len-left-right-find.html)
* [Data Types vs Data Structures & Introduction to Lists](019-data-types-vs-data-structures-and-introduction-to-lists.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/string-indexing-and-slicing-in-python/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: structures](../../../_tags/topic-structures.html)