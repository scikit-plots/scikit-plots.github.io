# Advanced Dictionary Usage in Python[#](#advanced-dictionary-usage-in-python "Link to this heading")

🐍 Data Analysis Using Python 📚 Strings & Data Structures Lesson 024

◀ [Previous](023-dictionaries-in-python.html) · [Next](025-sets-in-python.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Dictionaries for real data[#](#dictionaries-for-real-data "Link to this heading")

Basic dictionaries store and retrieve by key; **real** data work needs more — iterating over a
dictionary’s contents, handling missing keys safely, and nesting dictionaries for structured
data. This lesson covers advanced dictionary usage, the techniques that make dictionaries
practical for actual data, closing the core structures.

## Iterating dictionaries[#](#iterating-dictionaries "Link to this heading")

Dictionaries are iterated by keys, values, or both:

```
customer = {"name": "Jane", "region": "North", "sales": 1000}

for key in customer:                 # iterate keys
    print(key)

for key, value in customer.items():  # iterate key-value pairs
    print(key, value)

customer.keys()          # the keys
customer.values()        # the values
customer.items()         # the key-value pairs

```

`.items()` is the common way to loop over a dictionary’s contents — each iteration
unpacking a key and its value (tuple unpacking again). This is how you process every field of
a record, or every entry of a mapping.

## Safe access with .get()[#](#safe-access-with-get "Link to this heading")

The `KeyError` from accessing a missing key is avoided with `.get()`, which returns a
default instead of erroring:

```
customer["phone"]              # KeyError if 'phone' is missing — stops the program
customer.get("phone")          # returns None if missing — safe
customer.get("phone", "N/A")   # returns "N/A" if missing — safe with a default

```

`.get(key, default)` is the **safe** way to read a dictionary when a key might be absent —
exactly the missing-data handling that `COALESCE` provided in SQL, in dictionary form.
Using `.get()` where fields may be missing prevents the crash that direct access would
cause.

## Nested dictionaries[#](#nested-dictionaries "Link to this heading")

Dictionaries can contain dictionaries (and lists), representing **structured**, hierarchical
data:

```
data = {
    "north": {"sales": 1000, "customers": 50},
    "south": {"sales": 800,  "customers": 40},
}
data["north"]["sales"]         # 1000 — access nested by chaining keys

```

Nesting represents data with structure — regions each holding their own metrics — and is
exactly the shape of JSON and much real-world data. Accessing nested data chains the keys
(`data["north"]["sales"]`), reaching down through the levels.

## Why advanced usage matters[#](#why-advanced-usage-matters "Link to this heading")

These techniques are what make dictionaries usable for **real** data rather than toy examples.
Iterating processes records field by field; `.get()` handles the missing fields real data
always has; nesting represents the hierarchical structure real data often takes (especially
data from web APIs and JSON). Together they turn the dictionary from a simple lookup into a
practical tool for structured data — a bridge toward the DataFrames of pandas, which
generalise these key-value, record-oriented ideas to full tables.

## The caveat[#](#the-caveat "Link to this heading")

Advanced dictionary use concentrates the earlier pitfalls plus new ones. Nested access
**multiplies** the `KeyError` risk — `data["west"]["sales"]` fails if **either** “west” or
“sales” is missing, so deep access into possibly-incomplete data needs `.get()` at each
level (or careful checking), lest a single missing key crash the program. Deeply nested
dictionaries also grow **hard to navigate** — many levels of keys become as tangled as deeply
nested anything, and at that point a more structured representation (or a DataFrame) is often
better. Use `.get()` for anything that might be missing, keep nesting to what the data
genuinely requires, and reach for pandas when dictionary-of-dictionaries starts to strain.
The next lesson covers the last core structure, the set.

> **Hint**
> * [Dictionaries in Python](023-dictionaries-in-python.html)
* [Sets in Python](025-sets-in-python.html)
* [Libraries, Packages, and Modules in Python](026-libraries-packages-and-modules-in-python.html)
* [For Loops in Python](014-for-loops-in-python.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/advanced-dictionary-usage-in-python/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: structures](../../../_tags/topic-structures.html)