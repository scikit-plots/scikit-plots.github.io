🧷  ****Stratified Group K-Fold****

# Stratified Group K-Fold[#](#stratified-group-k-fold "Link to this heading")

**K-fold CV preserving class balance while keeping groups intact across folds.**

## What it is[#](#what-it-is "Link to this heading")

****Stratified Group K-Fold**** is a cross-validation scheme that fuses ****three requirements**** at
once: ****k-fold**** splitting, ****stratification**** (preserve the class balance in every fold), and
****grouping**** (keep every group — same patient, user, session — entirely on one side of each
split). It is the right tool for ****grouped \*and\* imbalanced**** classification.

## Why it’s needed[#](#why-it-s-needed "Link to this heading")

Each simpler scheme covers only part of the problem. ****Stratified k-fold**** balances classes
but can let one group’s rows fall into both train and validation, ****leaking**** information.
****Group k-fold**** prevents that overlap but can wreck the class balance. ****Stratified group
k-fold**** does both — class proportions held **and** group boundaries respected.

## How it works and an example[#](#how-it-works-and-an-example "Link to this heading")

Identify the group key, then build folds that are simultaneously class-balanced and
group-clean. For 1,000 samples from ****100 patients**** with a 20/80 disease split and `k = 5`,
each fold holds about 20 patients, preserves the ~20/80 ratio, and shares ****no patient****
between train and validation.

## In scikit-learn[#](#in-scikit-learn "Link to this heading")

```
from sklearn.model_selection import StratifiedGroupKFold

cv = StratifiedGroupKFold(n_splits=5)
for train_idx, test_idx in cv.split(X, y, groups):  # groups = patient IDs
    ...

```

The comparison is clean: plain ****k-fold**** is neither stratified nor group-aware, ****stratified
k-fold**** adds class balance, ****group k-fold**** adds group safety, and ****stratified group
k-fold**** is the only one with both.

---

****Mind map — connected ideas****

> [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Data Leakage](131-data-leakage.html) · [Class Weighting](002-class-weighting.html)

---

****More in Validation & Cross-Validation****

> [Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Data Leakage](131-data-leakage.html) · [Evaluation Set](355-evaluation-set.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [k-fold Stratified Cross-Validation (Stratified CV)](382-k-fold-stratified-cross-validation-stratified-cv.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html)

---

**Theme:** Validation & Cross-Validation  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Stratified Group K-Fold](https://insightful-data-lab.com/2025/08/24/stratified-group-k-fold/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)