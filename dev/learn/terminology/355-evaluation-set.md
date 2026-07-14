🧷  ****Evaluation Set****

# Evaluation Set[#](#evaluation-set "Link to this heading")

**Held-out data used to measure model performance.**

## What it is[#](#what-it-is "Link to this heading")

An ****evaluation set**** is data ****held out**** from training so a model can be scored on examples it has ****never
seen**** — the only honest way to estimate how it will ****generalize****. In practice it splits into two roles.

## Validation vs test[#](#validation-vs-test "Link to this heading")

The ****validation set**** is used ****repeatedly**** during development — tuning hyperparameters, early stopping,
choosing between models; the ****test set**** is touched ****once****, at the very end, for a final ****unbiased****
estimate. Any peek at the test set during development ****contaminates**** it and inflates the reported score.

## The cardinal rule[#](#the-cardinal-rule "Link to this heading")

****Split first****, then fit every preprocessing step (scaling, encoding) on the ****training data only**** and
apply it to the held-out sets. Fitting on all the data before splitting leaks information from the evaluation
set into training — the classic ****data leakage**** that makes scores look better than reality.

---

**Theme:** [Validation & Cross-Validation](index.html#term-theme-validation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[k-fold Stratified Cross-Validation (Stratified CV)](382-k-fold-stratified-cross-validation-stratified-cv.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Model Score](364-model-score.html) · [Model Stability](187-model-stability.html) · [Data Drift](331-data-drift.html)

---

> **Hint**
> ****More in Validation & Cross-Validation****

[Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Data Leakage](131-data-leakage.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [k-fold Stratified Cross-Validation (Stratified CV)](382-k-fold-stratified-cross-validation-stratified-cv.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Evaluation Set](https://insightful-data-lab.com/2025/08/20/evaluation-set/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)