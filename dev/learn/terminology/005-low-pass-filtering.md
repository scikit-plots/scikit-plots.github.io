📈  ****Low-pass Filtering****

# Low-pass Filtering[#](#low-pass-filtering "Link to this heading")

**A filter that keeps low-frequency content and attenuates high-frequency noise in a signal.**

## What it is[#](#what-it-is "Link to this heading")

A ****low-pass filter (LPF)**** lets **low-frequency** content through while attenuating
**high-frequency** content. In practice that means smoothing a signal and removing
high-frequency noise while keeping the slow-moving structure.

## Frequency-domain view[#](#frequency-domain-view "Link to this heading")

An ideal low-pass filter keeps everything below a ****cutoff frequency**** \(f\_c\)
and removes everything above it:

\[\begin{split}H(f) = \begin{cases} 1 & |f| \le f\_c \\ 0 & |f| > f\_c \end{cases}\end{split}\]

Real filters approximate this brick wall with a smoother roll-off.

## Time-domain view[#](#time-domain-view "Link to this heading")

Equivalently, low-pass filtering is ****convolution with a smoothing kernel**** — a
moving average or a Gaussian window — which is exactly the smoothing used in
time-series analysis.

## Common filter types[#](#common-filter-types "Link to this heading")

* ****Ideal**** — perfect sharp cutoff (theoretical only).
* ****Butterworth**** — flat passband, smooth roll-off.
* ****Chebyshev**** — sharper cutoff at the cost of passband ripple.
* ****Digital FIR / IIR**** — the workhorses of practical DSP.
* ****Moving average**** — the simplest crude low-pass filter.

## Where it’s used[#](#where-it-s-used "Link to this heading")

Removing hiss from audio, blurring images, extracting long-term trends from noisy
time series, isolating frequency bands in communications, and cleaning ECG/EEG
signals in biomedicine.

## Example[#](#example "Link to this heading")

Daily stock prices wobble with short-term noise; a low-pass filter strips the
wobble and leaves the longer-term trend visible.

```
import numpy as np
from scipy.signal import butter, filtfilt

t = np.linspace(0, 1, 500)
signal = np.sin(2*np.pi*5*t) + 0.5*np.sin(2*np.pi*50*t)   # 5 Hz + 50 Hz
noisy = signal + 0.3*np.random.randn(len(t))

b, a = butter(N=4, Wn=0.1)        # cutoff at 0.1 x Nyquist
clean = filtfilt(b, a, noisy)     # zero-phase filtering

```

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Subsampling](001-subsampling.html) · [Downsampling](368-downsampling.html) · [Signal Processing](009-signal-processing.html) · [Time Series](010-time-series.html)

---

> **Hint**
> ****More in Signal Processing & Time Series****

[ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html) · [Simple Baseline Methods](248-simple-baseline-methods.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Low-pass Filtering](https://insightful-data-lab.com/2025/08/30/low-pass-filtering/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)