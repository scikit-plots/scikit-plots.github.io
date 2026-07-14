🧷  ****Multiclass stratified CV****

# Multiclass stratified CV[#](#multiclass-stratified-cv "Link to this heading")

**Stratified cross-validation maintaining each class’s proportion across folds.**

## What it is[#](#what-it-is "Link to this heading")

****Multiclass stratified CV**** is stratified k-fold extended ****beyond two classes****: every fold
keeps approximately the ****same distribution across all classes**** as the full dataset. It is
the natural generalisation of binary stratification to ****three or more**** labels.

## How it works[#](#how-it-works "Link to this heading")

Measure the overall class mix — say ****A = 60%, B = 30%, C = 10%**** — and build each fold to
mirror it, so every fold carries A, B and C in roughly those proportions. Both training and
validation sets then ****represent all classes****.

## Example[#](#example "Link to this heading")

For 1,000 samples split ****A = 600, B = 300, C = 100**** with `k = 5`, a ****regular k-fold****
might leave some folds with almost no class-C examples. ****Multiclass stratified k-fold**** gives
each fold about ****A = 120, B = 60, C = 20**** — the original shape, fold after fold.

## Why it matters[#](#why-it-matters "Link to this heading")

In ****imbalanced multiclass**** problems, plain k-fold can starve a minority class in some folds,
producing ****unstable, misleading metrics**** (a fold with no class-C samples cannot measure
class-C performance). Stratification makes the evaluation ****fair and stable****. It applies to
****classification only**** — there is nothing to stratify in a regression target.

---

**Theme:** [Validation & Cross-Validation](index.html#term-theme-validation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Class Weighting](002-class-weighting.html) · [Multiclass AUROC](022-multiclass-auroc.html)

---

> **Hint**
> ****More in Validation & Cross-Validation****

[Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Data Leakage](131-data-leakage.html) · [Evaluation Set](355-evaluation-set.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [k-fold Stratified Cross-Validation (Stratified CV)](382-k-fold-stratified-cross-validation-stratified-cv.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Multiclass stratified CV](https://insightful-data-lab.com/2025/08/24/multiclass-stratified-cv/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)