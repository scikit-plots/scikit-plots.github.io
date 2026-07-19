# Getting Started with R[#](#getting-started-with-r "Link to this heading")

****Stage 1 · 🧭 Orientation**** · Lesson 02 of 18 · **beginner**

[◀ Previous · What Are Time Series, and How Are They Used?](01-what-are-time-series-and-how-are-they-used.html) · [Next · A Gentle Introduction to Stationarity ▶](03-a-gentle-introduction-to-stationarity.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The toolkit[#](#the-toolkit "Link to this heading")

The source course is taught in ****R****, the classic Box–Jenkins environment. This reference
reframes the same ideas in ****Python****, using the standard scientific stack: ****NumPy**** for arrays,
****pandas**** for time-indexed data, ****statsmodels**** for the models (AR / ARMA / ARIMA / SARIMAX,
the ACF / PACF, and the ADF / KPSS stationarity tests), and ****Matplotlib**** for plots. The
mathematics is identical in either language; only the syntax differs.

## Loading a series[#](#loading-a-series "Link to this heading")

In Python a time series is a `pandas.Series` (or a DataFrame column) carrying a
****DatetimeIndex****, so pandas knows the spacing and can resample, align and difference for you:

```
import pandas as pd

s = pd.read_csv("sales.csv", parse_dates=["date"], index_col="date")["value"]
s = s.asfreq("MS")          # pin an explicit monthly-start frequency
s.plot(title="Monthly sales")

```

Setting an explicit frequency (`asfreq`) matters: many models need to know the season length.

## From R to Python[#](#from-r-to-python "Link to this heading")

The classic R verbs map cleanly onto the Python stack:

* `ts()` → a `pandas.Series` with a `DatetimeIndex`;
* `acf()` / `pacf()` → `statsmodels.graphics.tsaplots.plot_acf` / `plot_pacf`;
* `arima()` / `Arima()` → `statsmodels.tsa.arima.model.ARIMA`;
* `forecast()` → `results.get_forecast(steps=...)`;
* `auto.arima()` → `pmdarima.auto_arima`.

Reach for whichever environment you like; this course uses the Python calls throughout.

> **Hint**
> ****Related lessons:**** [What Are Time Series, and How Are They Used?](01-what-are-time-series-and-how-are-they-used.html) · [A Gentle Introduction to Stationarity](03-a-gentle-introduction-to-stationarity.html) · [Sample ACF and Sample PACF](10-sample-acf-and-sample-pacf.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/17/getting-started-with-r/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: beginner](../../_tags/level-beginner.html)