# Informative Prior Distribution for Cancer Rates[#](#informative-prior-distribution-for-cancer-rates "Link to this heading")

****Part 1 · Stage 2 · 📍 Single-Parameter Models & Priors**** · Lesson 017 of 144 · **beginner**

[◀ Previous · Other Standard Single-Parameter Models](016-other-standard-single-parameter-models.html) · [Next · Noninformative Prior Distributions ▶](018-noninformative-prior-distributions.html) · [↑ Section](index.html)

## The map that lies[#](#the-map-that-lies "Link to this heading")

Colour a map of US counties by ****kidney-cancer rate**** and something strange appears: the highest-rate
counties are mostly ****small, rural**** ones. Colour it by the ****lowest**** rates and — the same counties
appear again. No environmental story explains both. The pattern is a ****statistical artifact****, and it
is the classic argument for informative priors.

## Small denominators, wild rates[#](#small-denominators-wild-rates "Link to this heading")

Kidney cancer is rare. A county of 60,000 people might record ****4**** cases (about 6.6 per 100,000); a
county of 17,000 might record ****7**** (about 41 per 100,000). One case fewer in the small county would
drop its rate by roughly a sixth. The raw rate \(y\_j / n\_j\) is an ****unbiased but hopelessly noisy****
estimate when \(n\_j\) is tiny, so the extremes of the ranking are populated not by the most
dangerous places, but by the ****smallest**** ones.

## The Poisson–Gamma remedy[#](#the-poissongamma-remedy "Link to this heading")

Model the counts as \(y\_j \sim \mathrm{Poisson}(\theta\_j n\_j)\) with a
\(\mathrm{Gamma}(\alpha, \beta)\) prior on the county rate, and the conjugate posterior mean is a
weighted average of the county’s own rate and the prior (national) rate:

\[\mathrm{E}[\theta\_j \mid y\_j] = \frac{\alpha + y\_j}{\beta + n\_j}
= \frac{\beta}{\beta + n\_j} \cdot \underbrace{\frac{\alpha}{\beta}}\_{\text{prior rate}}
\;+\; \frac{n\_j}{\beta + n\_j} \cdot \underbrace{\frac{y\_j}{n\_j}}\_{\text{raw rate}} .\]

Small counties (\(n\_j \ll \beta\)) are pulled hard toward the national rate; large counties keep
their own. The prior does not distort — it ****stabilises****.

```
from scipy import stats
alpha, beta = 20, 1_000_000        # prior: ~20 cases per million person-years
for y, n in [(7, 17_000), (4, 60_000), (250, 1_200_000)]:
    raw = 1e5 * y / n
    shrunk = 1e5 * (alpha + y) / (beta + n)
    print(f"raw {raw:6.1f}   shrunk {shrunk:6.1f}   (n={n:,})")
# small counties move a lot; the large county barely moves

```

## Shrinkage, honestly[#](#shrinkage-honestly "Link to this heading")

The estimates are ****shrunk**** toward a common centre by an amount governed by how much data each county
supplies. This buys enormous stability at the price of a small bias toward the mean — an excellent
trade when the alternative is ranking noise. And note what this analysis is quietly reaching for: the
prior rate \(\alpha/\beta\) should really be ****estimated from the counties themselves****. That is a
****hierarchical model****, and it arrives in Stage 5.

> **Hint**
> ****Related lessons:**** [Informative Prior Distributions](014-informative-prior-distributions.html) · [Other Standard Single-Parameter Models](016-other-standard-single-parameter-models.html) · [Exchangeability and hierarchical models](034-exchangeability-and-hierarchical-models.html) · [Posterior as a Compromise Between Data and Prior Information](012-posterior-as-a-compromise-between-data-and-prior-information.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/informative-prior-distribution-for-cancer-rates/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)