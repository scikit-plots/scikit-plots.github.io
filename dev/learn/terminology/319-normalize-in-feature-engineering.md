🧮  ****Normalize (in Feature Engineering)****

# Normalize (in Feature Engineering)[#](#normalize-in-feature-engineering "Link to this heading")

**Rescaling features to a common range or distribution.**

## What it is[#](#what-it-is "Link to this heading")

****Normalizing**** (feature scaling) rescales numeric features to a ****comparable range**** so that features with
large magnitudes don’t ****dominate**** the ones with small magnitudes. It changes a feature’s ****range****, not its
data type.

## The two workhorses[#](#the-two-workhorses "Link to this heading")

****Min-max scaling**** maps values to ****[0, 1]****; ****standardization (Z-score)**** centers to ****mean 0, standard
deviation 1****:

\[x' = \frac{x - \min(x)}{\max(x) - \min(x)} \quad\text{(min-max)}, \qquad x' = \frac{x - \mu}{\sigma} \quad\text{(Z-score)}.\]

Min-max suits bounded data; Z-score suits Gaussian-ish data and methods like ****PCA****. Min-max is
****outlier-sensitive****, so ****robust scaling**** (median and ****IQR****) is used when outliers are present.

## When and when not[#](#when-and-when-not "Link to this heading")

Normalize for ****scale-sensitive**** models (KNN, SVM, neural nets); it ****speeds convergence**** and prevents
large-value bias. Don’t normalize ****one-hot**** or categorical columns (they’re already 0/1 and it destroys
their meaning), and fit the scaler on the ****training set only**** to avoid leakage.

---

****Mind map — connected ideas****

> [Encode (in Feature Engineering)](318-encode-in-feature-engineering.html) · [Sensitivity in Feature Engineering](317-sensitivity-in-feature-engineering.html) · [Outlier](307-outlier.html) · [Z-Score](097-z-score.html) · [Normal Distribution](238-normal-distribution.html) · [Neural Networks](287-neural-networks.html)

---

****More in Data Preparation & Features****

> [Advanced Sorting in Spreadsheets](431-advanced-sorting-in-spreadsheets.html) · [Encode (in Feature Engineering)](318-encode-in-feature-engineering.html) · [Sensitivity in Feature Engineering](317-sensitivity-in-feature-engineering.html)

---

**Theme:** [Data Preparation & Features](index.html#term-theme-features)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Normalize (in Feature Engineering)](https://insightful-data-lab.com/2025/08/20/normalize-in-feature-engineering/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)