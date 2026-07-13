🧷  ****Cross-Validation (CV)****

# Cross-Validation (CV)[#](#cross-validation-cv "Link to this heading")

**Estimating generalisation by repeatedly training and testing on different splits.**

## What it is[#](#what-it-is "Link to this heading")

****Cross-validation (CV)**** is the umbrella ****model-evaluation technique****: split the data into
multiple subsets, rotate which subset is held out for testing, and ****average**** the results so
the performance estimate does not hinge on a single lucky or unlucky split. Its goal is to
gauge how well a model ****generalises to unseen data****, and it underpins ****model selection,
hyperparameter tuning and overfitting prevention****.

## How it works[#](#how-it-works "Link to this heading")

Partition into ****k folds****; for each, train on the rest and test on the held-out fold; repeat
so every fold serves as test once; average across folds for the final estimate.

## The main flavours[#](#the-main-flavours "Link to this heading")

****k-fold**** is the balanced default; ****stratified k-fold**** holds class proportions steady for
imbalanced classification; ****leave-one-out (LOOCV)**** uses one sample per fold — accurate but
costly; ****time-series CV**** (rolling or expanding windows) respects time order for sequential
data; and ****nested CV**** wraps an inner tuning loop inside an outer evaluation loop so that
****hyperparameter selection does not leak**** into the performance estimate.

## Why it matters, and the costs[#](#why-it-matters-and-the-costs "Link to this heading")

CV gives a ****robust, lower-variance**** read on generalisation and is the standard harness for
****grid, random and Bayesian**** hyperparameter search. The price is ****compute**** (the model is
trained many times) and the need to ****match the fold type to the data**** — most importantly,
never shuffling a time series.

---

**Theme:** [Validation & Cross-Validation](index.html#term-theme-validation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[k-fold cross-validation](135-k-fold-cross-validation.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [Data Leakage](131-data-leakage.html)

---

> **Hint**
> ****More in Validation & Cross-Validation****

[Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Data Leakage](131-data-leakage.html) · [Evaluation Set](355-evaluation-set.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [k-fold Stratified Cross-Validation (Stratified CV)](382-k-fold-stratified-cross-validation-stratified-cv.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Cross-Validation (CV)](https://insightful-data-lab.com/2025/08/24/cross-validation-cv/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)