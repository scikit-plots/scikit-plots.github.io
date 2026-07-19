🧷  ****Blocked Splits (Single Holdout)****

# Blocked Splits (Single Holdout)[#](#blocked-splits-single-holdout "Link to this heading")

**Splitting time-ordered data into contiguous train/test blocks to avoid leakage.**

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

A ****blocked split**** (or ****single holdout**** for time series) is the simplest time-series
validation: cut the data into ****one contiguous training block**** and ****one later contiguous
test block****. Unlike a random split, it ****respects temporal order**** — train on the past, test
on the future — which is mandatory when observations are autocorrelated.

## How it works[#](#how-it-works "Link to this heading")

Order the data chronologically, take an ****early block to train**** and the ****later block to
test****, fit on the first and evaluate on the second. For data spanning ****2018–2022****, train
on ****2018–2020**** and test on ****2021–2022**** — a single cut, one split.

## Why and when[#](#why-and-when "Link to this heading")

It is ****simple, fast****, and the natural ****first baseline**** for a time-series model — a good
fit when retraining is infrequent or the series is stable.

## The limitation[#](#the-limitation "Link to this heading")

There is ****only one split****, so the estimate is ****sensitive to where you cut**** and gives a
less robust read on generalisation than rolling schemes. An unusual test window (a pandemic
spike, say) can misrepresent the model. The more robust alternatives keep the time order but
add splits: an ****expanding window**** grows the train set forward over many folds, and a
****sliding window**** rolls a fixed-size train set forward — trading simplicity for a steadier
estimate.

---

**Theme:** [Validation & Cross-Validation](index.html#term-theme-validation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Temporal autocorrelation (Serial Correlation)](127-temporal-autocorrelation-serial-correlation.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Time Series](010-time-series.html)

---

> **Hint**
> ****More in Validation & Cross-Validation****

[Cross-Validation (CV)](136-cross-validation-cv.html) · [Data Leakage](131-data-leakage.html) · [Evaluation Set](355-evaluation-set.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [k-fold Stratified Cross-Validation (Stratified CV)](382-k-fold-stratified-cross-validation-stratified-cv.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Blocked Splits (Single Holdout)](https://insightful-data-lab.com/2025/08/24/blocked-splits-single-holdout/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)