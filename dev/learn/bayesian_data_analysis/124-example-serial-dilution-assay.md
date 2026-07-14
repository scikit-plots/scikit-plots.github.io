# Example: serial dilution assay[#](#example-serial-dilution-assay "Link to this heading")

****Part 5 · Stage 15 · 🌊 Basis Functions & Gaussian Processes**** · Lesson 124 of 144 · **advanced**

[◀ Previous · Example: an opinion poll in Slovenia](123-example-an-opinion-poll-in-slovenia.html) · [Next · Example: population toxicokinetics ▶](125-example-population-toxicokinetics.html) · [↑ Section](index.html)

## Nonlinear calibration, done properly[#](#nonlinear-calibration-done-properly "Link to this heading")

A serial dilution assay measures the concentration of a compound — an allergen, an antibody, a
pollutant — by reading an instrument at several ****dilutions**** of a sample and comparing against a
calibration curve. Gelman, Chew and Shnaidman used it to open the nonlinear-models stage because it
exposes, in one applied problem, why linear-normal thinking fails and what replaces it.

## Why the standard approach wastes data[#](#why-the-standard-approach-wastes-data "Link to this heading")

The relation between concentration and instrument reading is ****nonlinear and heteroscedastic****: it
saturates at high concentrations and its measurement noise grows with the signal. The common practice
copes badly — it ****discards**** every reading that falls above or below the instrument’s detection limits,
throwing away a large fraction of the data, and weights the survivors equally despite their unequal
precision. Estimates are noisy, and a sample whose readings all lie below the limit yields ****no estimate
at all****.

## The Bayesian model[#](#the-bayesian-model "Link to this heading")

Model the full nonlinear calibration curve and the unknown concentrations ****jointly****, with a variance
that grows with the mean. A standard form maps concentration \(x\) to expected reading through a
four-parameter curve:

\[\mathrm{E}[y \mid x] = \beta\_1 + \frac{\beta\_2}{1 + (x/\beta\_3)^{-\beta\_4}}, \qquad
\mathrm{sd}(y \mid x) \propto \bigl(\mathrm{E}[y \mid x]\bigr)^{\alpha},\]

the second equation encoding heteroscedasticity — noise scaling with signal — so measurements are
weighted by their actual precision rather than equally.

```
import pymc as pm
with pm.Model():
    b = pm.Normal("b", 0, 5, shape=4)                    # calibration-curve parameters
    alpha = pm.HalfNormal("alpha", 1)                    # variance-scaling exponent
    conc = pm.HalfNormal("conc", 10, shape=n_unknown)    # unknown concentrations (parameters)
    mu = b[0] + b[1] / (1 + (x / b[2]) ** (-b[3]))       # nonlinear curve
    sigma = pm.Deterministic("sigma", (mu ** alpha))     # signal-dependent noise
    pm.Normal("y", mu, sigma, observed=readings)         # ALL readings, none discarded
    idata = pm.sample()

```

## Why it wins[#](#why-it-wins "Link to this heading")

Using ****all**** the data — including the below-detection readings, which are informative even when
imprecise — the joint model achieves ****much lower standard errors**** than the discard-and-average
standard, and returns an estimate even when every measurement is off-scale, where the classical method
simply fails. Three general lessons open the stage. Real relationships are often ****nonlinear****, and
forcing linearity discards structure. Measurement noise is often ****not constant****, and modelling its
dependence on the signal is what makes the weighting correct. And a ****joint**** model — curve and
concentrations together, with uncertainty flowing between them — beats a two-step fit that treats the
calibration as fixed. Part V builds on all three, moving from this parametric nonlinearity toward
splines, Gaussian processes and models with no fixed functional form at all.

> **Hint**
> ****Related lessons:**** [Splines and weighted sums of basis functions](126-splines-and-weighted-sums-of-basis-functions.html) · [Example: population toxicokinetics](125-example-population-toxicokinetics.html) · [Bayesian analysis of classical regression](092-bayesian-analysis-of-classical-regression.html) · [Unequal variances and correlations](097-unequal-variances-and-correlations.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/09/example-serial-dilution-assay/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)