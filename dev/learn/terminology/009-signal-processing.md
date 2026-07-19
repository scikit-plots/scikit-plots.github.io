📈  ****Signal Processing****

# Signal Processing[#](#signal-processing "Link to this heading")

**Analysing and transforming signals (audio, sensor, time series) to extract or clean information.**

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

****Signal processing**** is the discipline of representing, transforming and pulling
information out of **signals** — any quantity that carries information about a
phenomenon, usually as a function of time or space. A signal can be
****continuous-time****, written \(x(t)\), or ****discrete-time**** (sampled), written
\(x[n]\). Almost any sequential or spatial measurement is a signal: audio
waveforms, image pixel grids (2-D signals), biomedical traces (ECG, EEG, EMG),
radio / Wi-Fi / 5G transmissions, and sensor streams (accelerometer, gyroscope,
temperature).

## What you do with a signal[#](#what-you-do-with-a-signal "Link to this heading")

The recurring goals are:

* ****Filtering**** — remove noise or isolate a band of interest.
* ****Transformation**** — move the signal to a domain where the task is easier (most
  often the frequency domain).
* ****Feature extraction**** — derive compact descriptors (e.g. spectral features for
  speech recognition).
* ****Compression**** — shrink the data while preserving what matters (MP3, JPEG).
* ****Restoration**** — undo degradation (denoising, deblurring).

## Three ways to look at a signal[#](#three-ways-to-look-at-a-signal "Link to this heading")

### time domain[#](#time-domain "Link to this heading")

Work directly on the samples in order — smoothing with a moving average, detecting
peaks, computing energy. Intuitive, but it hides periodic structure.

### frequency domain[#](#frequency-domain "Link to this heading")

Decompose the signal into the sinusoids that compose it using the ****Fourier
transform****. For sampled data this is the ****Discrete Fourier Transform****, computed
efficiently by the ****FFT****:

\[X[k] = \sum\_{n=0}^{N-1} x[n]\, e^{-j 2\pi k n / N}.\]

This is where “mostly 5 Hz with a little 50 Hz noise” becomes visible and you can
filter accordingly.

### time-frequency domain[#](#time-frequency-domain "Link to this heading")

When the frequency content **changes over time** (speech, music), one global
spectrum is not enough. The ****Short-Time Fourier Transform (STFT)**** and the
****wavelet transform**** produce a spectrogram — frequency content as a function of
time.

Other standard tools: the ****Laplace transform**** (continuous-time systems), the
****Z-transform**** (discrete-time systems), and ****FIR / IIR digital filters****.

## The digital pipeline (DSP)[#](#the-digital-pipeline-dsp "Link to this heading")

Modern signal processing is mostly digital, in four stages:

1. ****Sampling**** — analog to discrete samples. The ****Nyquist-Shannon**** theorem
   requires the sampling rate to exceed twice the highest frequency,
   \(f\_s > 2 f\_{\max}\), or information is lost.
2. ****Quantization**** — round continuous amplitudes to discrete levels (adding small
   quantization noise).
3. ****Processing**** — filter, transform, compress, analyse.
4. ****Reconstruction**** — convert back to continuous form if needed.

## Pitfalls and edge cases[#](#pitfalls-and-edge-cases "Link to this heading")

* ****Aliasing**** — sampling too slowly makes high frequencies masquerade as low
  ones; always low-pass filter **before** downsampling.
* ****Spectral leakage**** — the FFT assumes the segment repeats exactly, so a
  non-integer number of cycles smears energy across bins. Apply a ****window****
  (Hann, Hamming) to reduce it.
* ****Edge effects**** — filters need warm-up samples; the very start and end of a
  filtered signal are unreliable (use zero-phase `filtfilt` or drop the
  transient).
* ****Non-stationarity**** — a single global spectrum misleads when the statistics
  drift; prefer time-frequency methods.

## Worked example — find the dominant frequency[#](#worked-example-find-the-dominant-frequency "Link to this heading")

```
import numpy as np

fs = 500                                   # sampling rate (Hz)
t = np.arange(0, 2, 1 / fs)
x = np.sin(2 * np.pi * 5 * t) + 0.3 * np.random.randn(t.size)

spectrum = np.fft.rfft(x)                  # FFT of a real signal
freqs = np.fft.rfftfreq(t.size, d=1 / fs)
dominant = freqs[np.argmax(np.abs(spectrum))]
print(f"dominant frequency ~ {dominant:.1f} Hz")   # ~5.0 Hz

```

## Connection to data science and ML[#](#connection-to-data-science-and-ml "Link to this heading")

Signal processing is the front end of many ML pipelines: speech becomes ****MFCC****
features, images are filtered by ****convolutions**** (a CNN layer **is** a learned bank
of filters), and ECG / EEG become time-frequency features for classification.
Seen this way, CNNs, RNNs and Transformers are advanced, **learned**
signal-processing pipelines.

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Low-pass Filtering](005-low-pass-filtering.html) · [Subsampling](001-subsampling.html) · [Downsampling](368-downsampling.html) · [Time Series](010-time-series.html) · [Time Series Forecasting](256-time-series-forecasting.html)

---

> **Hint**
> ****More in Signal Processing & Time Series****

[ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Simple Baseline Methods](248-simple-baseline-methods.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Signal Processing](https://insightful-data-lab.com/2025/08/30/signal-processing/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)