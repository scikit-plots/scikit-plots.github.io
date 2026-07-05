🧷  ****k-fold Stratified Cross-Validation (Stratified CV)****

# k-fold Stratified Cross-Validation (Stratified CV)[#](#k-fold-stratified-cross-validation-stratified-cv "Link to this heading")

**K-fold CV that preserves class proportions in every fold.**

## What it is[#](#what-it-is "Link to this heading")

****Stratified k-fold cross-validation**** splits the data into ****k folds**** while ****preserving each class’s
proportion**** in every fold — so a fold of a 5%-positive dataset stays about ****5% positive****. It combines the
stability of k-fold CV with balanced folds.

## Why stratify[#](#why-stratify "Link to this heading")

Plain ****k-fold**** can, by chance, build folds with ****too few or missing**** minority-class examples, giving
****biased**** or unstable metrics — especially on ****imbalanced**** data. Stratification makes each fold ****mirror****
the overall distribution, so the k scores are ****reliable**** and comparable.

## How it’s used[#](#how-it-s-used "Link to this heading")

It is the ****default**** for classification (often ****repeated stratified 10-fold****); scikit-learn provides
`StratifiedKFold`. Two cautions carry over from any CV: fit preprocessing on the ****training folds only**** to
avoid ****leakage****, and don’t use it on ****time-series**** data, where ****time-based**** splits are required instead.

---

****Mind map — connected ideas****

> [Cross-Validation (CV)](136-cross-validation-cv.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Evaluation Set](355-evaluation-set.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html) · [Model Stability](187-model-stability.html) · [Data Drift](331-data-drift.html)

---

****More in Validation & Cross-Validation****

> [Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Data Leakage](131-data-leakage.html) · [Evaluation Set](355-evaluation-set.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html)

---

**Theme:** Validation & Cross-Validation  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [k-fold Stratified Cross-Validation (Stratified CV)](https://insightful-data-lab.com/2025/08/19/stratified-cross-validation-stratified-cv/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)