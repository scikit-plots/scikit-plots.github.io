📈  ****LSTM — Long Short-Term Memory Networks****

# LSTM — Long Short-Term Memory Networks[#](#lstm-long-short-term-memory-networks "Link to this heading")

**A recurrent network with gating that captures long-range dependencies in sequences.**

## What it is[#](#what-it-is "Link to this heading")

An ****LSTM (Long Short-Term Memory network)**** is a special ****recurrent neural network**** for sequential
data that overcomes the ****vanishing- and exploding-gradient**** problem of vanilla RNNs. It adds a
****gated memory**** structure that learns what to ****keep, update and forget**** across long sequences.

## The gated cell[#](#the-gated-cell "Link to this heading")

A ****cell state**** runs through the sequence like a conveyor belt, and three ****gates**** — sigmoids in
\([0, 1]\) that decide **how much** to let through — govern it: a ****forget gate****
\(f\_t = \sigma(W\_f \cdot [h\_{t-1}, x\_t] + b\_f)\), an ****input gate**** \(i\_t\) with candidate
values \(\tilde{C}\_t = \tanh(\cdot)\), and an ****output gate**** \(o\_t\). The updates are

\[C\_t = f\_t \odot C\_{t-1} + i\_t \odot \tilde{C}\_t, \qquad h\_t = o\_t \odot \tanh(C\_t),\]

with \(C\_t\) the long-term cell state and \(h\_t\) the short-term hidden state.

## Variants[#](#variants "Link to this heading")

Common variants include the ****bidirectional LSTM**** (reads a sequence forwards and backwards), the
****stacked LSTM**** (several layers for depth), the ****peephole LSTM**** (gates can see the cell state), and
the ****GRU****, a simpler cousin that merges the forget and input gates.

## Uses, strengths, weaknesses[#](#uses-strengths-weaknesses "Link to this heading")

LSTMs power ****NLP**** (text generation, translation, sentiment), ****speech recognition****, ****time-series
forecasting**** (demand, stock prices, anomalies) and ****control systems****. They capture dependencies
across ****50-100+ steps****, but they are ****computationally heavy****, slower than GRUs, and now often
****outperformed by Transformers**** on very long sequences.

---

****Mind map — connected ideas****

> [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Autoencoder](171-autoencoder.html) · [Embedding](173-embedding.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Time Series](010-time-series.html)

---

****More in Signal Processing & Time Series****

> [ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html) · [Simple Baseline Methods](248-simple-baseline-methods.html)

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [LSTM — Long Short-Term Memory Networks](https://insightful-data-lab.com/2025/08/23/lstm-long-short-term-memory-networks/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)