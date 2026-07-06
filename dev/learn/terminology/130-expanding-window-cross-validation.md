🧷  ****Expanding Window Cross-Validation****

# Expanding Window Cross-Validation[#](#expanding-window-cross-validation "Link to this heading")

**Time-series CV that grows the training window as it walks forward.**

## What it is[#](#what-it-is "Link to this heading")

****Expanding-window**** cross-validation is a time-series scheme where the ****training set grows****
over time while the test set always takes the ****next**** period. The rule is the usual one —
****train on the past, predict the future**** — and crucially, ****once data enters training it
stays**** in every later fold.

## How it works[#](#how-it-works "Link to this heading")

Order the data chronologically, start from an initial training period, and validate on the
next. Then ****expand**** the training window to absorb more past data and validate on the
following period, repeating to the end of the series.

## Example[#](#example "Link to this heading")

Over ****2020–2024****: train ****2020**** → test ****2021****; train ****2020–2021**** → test ****2022****;
train ****2020–2022**** → test ****2023****; train ****2020–2023**** → test ****2024****. The training block
****keeps growing****; the test always sits just after it.

## vs the rolling window[#](#vs-the-rolling-window "Link to this heading")

Both respect time order; they differ on memory. ****Expanding**** accumulates ****all**** history,
which helps when ****older data is still relevant**** (finance, macroeconomic forecasting). The
****rolling/sliding**** window holds a ****fixed**** size and drops the oldest data, which helps when
****recent data dominates**** (stock trading, demand forecasting). The choice is really a
question of whether the process is stationary.

---

****Mind map — connected ideas****

> [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Temporal autocorrelation (Serial Correlation)](127-temporal-autocorrelation-serial-correlation.html) · [Time Series](010-time-series.html) · [Data Leakage](131-data-leakage.html)

---

****More in Validation & Cross-Validation****

> [Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Data Leakage](131-data-leakage.html) · [Evaluation Set](355-evaluation-set.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [k-fold Stratified Cross-Validation (Stratified CV)](382-k-fold-stratified-cross-validation-stratified-cv.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html)

---

**Theme:** [Validation & Cross-Validation](index.html#term-theme-validation)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Expanding Window Cross-Validation](https://insightful-data-lab.com/2025/08/24/expanding-window-cross-validation/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)