# Graphical posterior predictive checks[#](#graphical-posterior-predictive-checks "Link to this heading")

****Part 2 · Stage 6 · 🔍 Model Checking & Comparison**** · Lesson 043 of 144 · **intermediate**

[◀ Previous · Posterior predictive checking](042-posterior-predictive-checking.html) · [Next · Model checking for the educational testing example ▶](044-model-checking-for-the-educational-testing-example.html) · [↑ Section](index.html)

## Look before you compute[#](#look-before-you-compute "Link to this heading")

A \(p\)-value collapses a comparison to one number and answers only the question its test quantity
encodes. A ****plot**** shows the shape of the misfit — and often reveals a failure nobody thought to test
for. Graphical checks are therefore the first move, not the last.

## The three displays[#](#the-three-displays "Link to this heading")

* ****Density overlay.**** Draw the density of each of ~50 replicated datasets in light grey, the observed
  data in bold. Systematic offsets appear as the real curve sitting outside the grey band: skew the
  model cannot make, a peak at zero it cannot produce, tails too thin.
* ****Test-statistic histogram.**** Histogram \(T(y^{\text{rep}})\) over replications and mark
  \(T(y)\) with a line. This is the picture of which the Bayesian \(p\)-value is the caption.
* ****Predictive intervals versus observations.**** For structured data (time series, groups), plot each
  observation against its 50%/90% predictive interval. Roughly the right proportion should fall inside,
  and the misses should look ****random**** — a run of consecutive misses signals unmodelled structure.

```
import arviz as az
az.plot_ppc(idata, num_pp_samples=50)                 # density overlay
az.plot_bpv(idata, kind="t_stat", t_stat="std")       # test statistic vs replications
az.plot_loo_pit(idata, y="y")                         # calibration: should be uniform

```

## Calibration plots[#](#calibration-plots "Link to this heading")

A sharper display asks where each observation falls ****within**** its own predictive distribution — its
PIT value. If the model is calibrated, those values are ****uniform****; a U-shape means predictive
distributions are too narrow (overconfident), a hump in the middle means too wide. LOO-PIT does this
using ****leave-one-out**** predictions, avoiding the double-use of data that makes ordinary predictive
\(p\)-values conservative.

## Reading a failure[#](#reading-a-failure "Link to this heading")

The value of the visual grammar is that the **shape** of the discrepancy names the missing feature. Too
many zeros in the data and none in the replications: the likelihood needs a zero-inflation component.
Replicated tails too thin: swap normal errors for \(t\). Replications too smooth across groups: the
hierarchy is over-pooling. Each verdict points to a specific ****model expansion**** — which is the closing
theme of this stage. Choose the plot that would embarrass the model if the model deserved it.

> **Hint**
> ****Related lessons:**** [Posterior predictive checking](042-posterior-predictive-checking.html) · [Model checking for the educational testing example](044-model-checking-for-the-educational-testing-example.html) · [Continuous model expansion](048-continuous-model-expansion.html) · [Measures of predictive accuracy](045-measures-of-predictive-accuracy.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/10/graphical-posterior-predictive-checks/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)