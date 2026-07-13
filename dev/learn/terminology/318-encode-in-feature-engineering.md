🧮  ****Encode (in Feature Engineering)****

# Encode (in Feature Engineering)[#](#encode-in-feature-engineering "Link to this heading")

**Converting categorical or text data into numeric form for models.**

## What it is[#](#what-it-is "Link to this heading")

****Encoding**** converts ****categorical**** (non-numeric) data into a ****numerical**** form, because most ML
algorithms operate only on numbers. The trick is to add the numbers ****without inventing meaning**** that isn’t
there.

## The methods[#](#the-methods "Link to this heading")

****One-hot encoding**** turns a category into several ****binary**** columns (exactly one 1) — right for ****nominal****
categories with ****low cardinality****, since it implies no order. ****Ordinal / label**** encoding assigns
integers, valid only when categories are genuinely ****ordered****. For ****high-cardinality**** features,
****frequency****, ****target****, or learned ****embedding**** encodings avoid the column explosion of one-hot.

## Getting it wrong[#](#getting-it-wrong "Link to this heading")

Label-encoding a ****nominal**** variable (red = 1, blue = 2, green = 3) falsely tells the model green > blue — a
fake ordering that distance- and gradient-based models will believe. Match the encoding to whether the
category is ****ordered****, and to its ****cardinality****.

---

**Theme:** [Data Preparation & Features](index.html#term-theme-features)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Normalize (in Feature Engineering)](319-normalize-in-feature-engineering.html) · [Sensitivity in Feature Engineering](317-sensitivity-in-feature-engineering.html) · [Embedding](173-embedding.html) · [Feature Values](188-feature-values.html) · [Outlier](307-outlier.html) · [Neural Networks](287-neural-networks.html)

---

> **Hint**
> ****More in Data Preparation & Features****

[Advanced Sorting in Spreadsheets](431-advanced-sorting-in-spreadsheets.html) · [Normalize (in Feature Engineering)](319-normalize-in-feature-engineering.html) · [Sensitivity in Feature Engineering](317-sensitivity-in-feature-engineering.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Encode (in Feature Engineering)](https://insightful-data-lab.com/2025/08/20/encode-in-feature-engineering/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)