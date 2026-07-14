# Dictionaries in Python[#](#dictionaries-in-python "Link to this heading")

🐍 Data Analysis Using Python 📚 Strings & Data Structures Lesson 023

◀ [Previous](022-advanced-use-of-loops-lists-tuples-and-list-comprehension.html) · [Next](024-advanced-dictionary-usage-in-python.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Looking values up by key[#](#looking-values-up-by-key "Link to this heading")

Lists and tuples hold values in **order**, accessed by position. But often you want to look a
value up by a **meaningful key** — a customer’s name, a product code, a field label — rather
than a numeric position. The ****dictionary**** is Python’s key-value structure, and it is one
of the most important for data work. This lesson covers dictionaries.

## What a dictionary is[#](#what-a-dictionary-is "Link to this heading")

A ****dictionary**** stores ****key-value pairs**** — each value is associated with a key that
identifies it, written with curly braces:

```
customer = {
    "name": "Jane Smith",
    "region": "North",
    "sales": 1000,
}

```

Values are looked up **by key**, not position:

```
customer["name"]          # "Jane Smith"
customer["sales"]         # 1000

```

Where a list answers “what is at position 2?”, a dictionary answers “what is the value for
‘name’?” — access by meaningful key rather than numeric index. This makes dictionaries ideal
for representing **records** with named fields.

## Modifying dictionaries[#](#modifying-dictionaries "Link to this heading")

Dictionaries are mutable — pairs can be added, changed, and removed:

```
customer["email"] = "jane@example.com"    # add a new key-value pair
customer["sales"] = 1200                    # update an existing value
del customer["region"]                      # remove a pair

```

Assigning to a key either adds it (if new) or updates it (if it exists); `del` removes a
pair. Dictionaries grow and change like lists, but keyed rather than ordered.

## Why dictionaries matter[#](#why-dictionaries-matter "Link to this heading")

Dictionaries are fundamental to data work for several reasons. They represent **records**
naturally — a row of data as field-name-to-value pairs (`{"name": ..., "sales": ...}`),
which is exactly how structured data is often held. They enable **fast lookup** by key (far
faster than searching a list). And they are the structure behind much of Python’s data
ecosystem — JSON data is dictionaries, pandas DataFrames can be built from them, and
configuration and mappings are dictionaries. Understanding key-value access is understanding
a core pattern of representing and retrieving structured data.

## The caveat[#](#the-caveat "Link to this heading")

Dictionaries have specific rules and pitfalls. ****Keys must be unique**** — assigning to an
existing key **overwrites** its value rather than adding a second, so duplicate keys silently
lose data. ****Keys must be immutable**** — strings, numbers, and tuples can be keys, but lists
cannot (their mutability would break the dictionary’s lookup), which is one reason tuples
exist. And the classic error: ****accessing a key that does not exist**** (`customer["phone"]`
when there is no phone) raises a `KeyError` and stops the program — a frequent bug when
data may be missing a field. The next lesson covers handling this and other advanced
dictionary usage safely. Keys unique and immutable, and access defensively.

> **Hint**
> * [Advanced Dictionary Usage in Python](024-advanced-dictionary-usage-in-python.html)
* [Data Types vs Data Structures & Introduction to Lists](019-data-types-vs-data-structures-and-introduction-to-lists.html)
* [Tuples in Python](021-tuples-in-python.html)
* [Sets in Python](025-sets-in-python.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/dictionaries-in-python/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: structures](../../../_tags/topic-structures.html)