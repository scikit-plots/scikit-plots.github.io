🧷  ****Stratified Shuffle Split****

# Stratified Shuffle Split[#](#stratified-shuffle-split "Link to this heading")

**Repeated random splits that preserve class proportions in each split.**

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****Stratified Shuffle Split**** repeatedly carves a dataset into ****random train/test splits
while preserving the class distribution****. Unlike k-fold, it does ****not**** partition into fixed
folds — it ****reshuffles and resamples**** as many times as you ask, each split a fresh random
draw with the original class ratios intact.

## How it works[#](#how-it-works "Link to this heading")

Set ****n\_splits**** (how many reshuffles) and a ****train/test size****; for each split, shuffle,
partition keeping the class proportions, and evaluate — then average across splits. Because
test sets can overlap between splits (they are independent draws), it is not a partition the
way k-fold is.

## Example[#](#example "Link to this heading")

For 1,000 samples at ****80% class A, 20% class B**** with `test_size=0.2` over 5 splits, each
split yields train = 800 (A=640, B=160) and test = 200 (A=160, B=40) — the ****80/20**** ratio
holds every time.

## In scikit-learn[#](#in-scikit-learn "Link to this heading")

```
from sklearn.model_selection import StratifiedShuffleSplit

sss = StratifiedShuffleSplit(n_splits=5, test_size=0.2, random_state=42)
for train_idx, test_idx in sss.split(X, y):
    ...

```

It shines on ****imbalanced or small**** data where you want ****many randomized splits**** rather
than a fixed fold structure — the stratified counterpart to a plain shuffle split, which
randomizes but does **not** preserve class balance.

---

**Theme:** [Validation & Cross-Validation](index.html#term-theme-validation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Class Weighting](002-class-weighting.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html)

---

> **Hint**
> ****More in Validation & Cross-Validation****

[Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Data Leakage](131-data-leakage.html) · [Evaluation Set](355-evaluation-set.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [k-fold Stratified Cross-Validation (Stratified CV)](382-k-fold-stratified-cross-validation-stratified-cv.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Stratified Shuffle Split](https://insightful-data-lab.com/2025/08/24/stratified-shuffle-split/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)