🧷  ****Sliding Window (Rolling Window) Cross-Validation****

# Sliding Window (Rolling Window) Cross-Validation[#](#sliding-window-rolling-window-cross-validation "Link to this heading")

**Time-series CV using a fixed-size window that moves forward through time.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****Sliding-window**** (or ****rolling-window****) cross-validation is a time-series validation
scheme where the training set has a ****fixed size**** and ****slides forward**** through time: as
new data enters the window, the ****oldest data drops out****. Like all time-series CV, it
****respects time order**** — past trains, future tests.

## How it works[#](#how-it-works "Link to this heading")

Fix a ****window size****, train on that window, validate on the next step, then ****slide forward
and repeat****. Each fold uses a same-length training block ending just before its test block.

## Example[#](#example "Link to this heading")

With a 2-year window over ****2020–2024****: train ****2020–2021**** → test ****2022****; train
****2021–2022**** → test ****2023****; train ****2022–2023**** → test ****2024****. Notice 2020 is
****dropped**** once the window moves past it.

## vs the expanding window[#](#vs-the-expanding-window "Link to this heading")

The contrast is what happens to old data. An ****expanding window keeps all history****, suiting
cases where old data stays relevant (macroeconomics, cumulative learning). A ****sliding window
discards it****, suiting ****non-stationary**** settings where recent data is more predictive —
financial markets, demand forecasting, IoT sensor streams.

## Benefits and the size trade-off[#](#benefits-and-the-size-trade-off "Link to this heading")

It keeps the model ****focused on recent patterns**** and ****bounds compute**** (the training set
never grows without limit). The cost: it can ****forget useful long-run history****, and the
****window size is a critical knob**** — too short is noisy, too long is unresponsive.

---

**Theme:** [Validation & Cross-Validation](index.html#term-theme-validation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Temporal autocorrelation (Serial Correlation)](127-temporal-autocorrelation-serial-correlation.html) · [Time Series](010-time-series.html) · [Data Leakage](131-data-leakage.html)

---

> **Hint**
> ****More in Validation & Cross-Validation****

[Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Data Leakage](131-data-leakage.html) · [Evaluation Set](355-evaluation-set.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [k-fold Stratified Cross-Validation (Stratified CV)](382-k-fold-stratified-cross-validation-stratified-cv.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Sliding Window (Rolling Window) Cross-Validation](https://insightful-data-lab.com/2025/08/24/sliding-window-rolling-window-cross-validation/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)