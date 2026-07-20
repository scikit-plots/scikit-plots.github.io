# Objective Selection of the Bin Width for a Time Histogram[#](#objective-selection-of-the-bin-width-for-a-time-histogram "Link to this heading")

****Stage 2 · 🔗 Associations & Correlation**** · Lesson 09 of 56 · **beginner**

[◀ Previous · Taxi Trips – 2022 dataset from the City of Chicago open data portal](08-taxi-trips-2022-dataset-from-the-city-of-chicago-open-data-portal.html) · [Next · Measuring Associations in Data ▶](10-measuring-associations-in-data.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The bin-width problem[#](#the-bin-width-problem "Link to this heading")

A ****histogram**** summarises a distribution by counting values into ****bins****, but the picture depends
entirely on the ****bin width**** you choose. Too ****wide**** and you smooth away real structure; too
****narrow**** and random noise looks like signal. For a ****time histogram**** — counting events (like taxi
pickups) into time intervals — the width sets whether you see a genuine daily rhythm or a jagged mess.
Choosing it should not be guesswork.

## Rules of thumb[#](#rules-of-thumb "Link to this heading")

Several ****rules**** pick a width from the data automatically. ****Sturges’ rule**** sets the **number** of
bins from \(\lceil \log\_2 n \rceil + 1\), assuming roughly normal data. ****Scott’s rule**** chooses
width \(h = 3.49\,\hat{\sigma}\,n^{-1/3}\), and the ****Freedman–Diaconis**** rule
\(h = 2\,\mathrm{IQR}\,n^{-1/3}\), which uses the interquartile range and so resists outliers.
Each aims to balance detail against noise.

## An objective criterion[#](#an-objective-criterion "Link to this heading")

For a ****time histogram**** specifically, the ****Shimazaki–Shinomoto**** method turns the choice into an
****optimisation****. It picks the width \(\Delta\) that minimises a cost estimating the error between
the histogram and the true underlying rate:

\[C(\Delta) = \frac{2\bar{k} - v}{\Delta^2},\]

where \(\bar{k}\) is the mean and \(v\) the variance of the bin counts. Sweeping
\(\Delta\) and taking the minimum gives a width ****derived from the data****, not chosen by eye.

## Why it matters[#](#why-it-matters "Link to this heading")

The theme is ****objectivity****. A histogram is one of the first plots an analyst makes, and an arbitrary
bin width can quietly manufacture or hide patterns. A principled rule makes the picture
****reproducible**** — the same data yields the same histogram for everyone — which is exactly the standard
the rest of this course holds its methods to.

> **Hint**
> ****Related lessons:**** [Taxi Trips – 2022 dataset from the City of Chicago open data portal](08-taxi-trips-2022-dataset-from-the-city-of-chicago-open-data-portal.html) · [The First Step in Knowing Your Data](05-the-first-step-in-knowing-your-data.html) · [Measuring Associations in Data](10-measuring-associations-in-data.html) · [Discovering Associations Through Data: From Everyday Patterns to Chicago Taxi Trips (September 2022)](07-discovering-associations-through-data-from-everyday-patterns-to-chicago-taxi-trips-september-2022.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/14/objective-selection-of-the-bin-width-for-a-time-histogram/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: beginner](../../_tags/level-beginner.html)