🔎  ****Probabilistic Interleaving****

# Probabilistic Interleaving[#](#probabilistic-interleaving "Link to this heading")

**An online method that probabilistically mixes two rankers’ results to compare them.**

## What it is[#](#what-it-is "Link to this heading")

****Probabilistic interleaving**** is an ****online method for comparing ranking algorithms**** by
blending their results into one list shown to users. Unlike ****balanced interleaving****
(strict alternation) or ****team-draft interleaving**** (a draft pick), it builds the combined
list ****probabilistically**** — each algorithm defines a distribution over its ranking (higher
positions get more weight, e.g. a softmax over rank), and items are ****sampled**** from those
distributions.

## Why use it[#](#why-use-it "Link to this heading")

Full ****A/B testing**** of rankers needs huge traffic and spends users on the worse variant;
balanced interleaving can be biased when lists overlap; team-draft works only for two
algorithms. Probabilistic interleaving is ****flexible, scalable to many algorithms, and
statistically principled****.

## How it works[#](#how-it-works "Link to this heading")

Build a rank-based probability distribution for each algorithm, ****sample**** items to form the
interleaved list, show it, and then ****attribute clicks probabilistically**** — rather than a
click belonging deterministically to one algorithm, the credit is ****shared in proportion****
to how strongly each ranked the clicked item. Comparing ****expected credit**** across
algorithms reveals the winner.

## Example[#](#example "Link to this heading")

With A = [A1, A2, A3] and B = [B1, A2, B3], a sampled interleaving might be
[A1, B1, A2, B3, A3]. If the user clicks ****A2**** — ranked highly by **both** — team-draft
would hand the whole click to one side, but probabilistic interleaving ****splits the credit****
between A and B.

## Strengths and costs[#](#strengths-and-costs "Link to this heading")

It handles ****more than two**** algorithms, stays ****fair when rankings overlap**** (shared items
share credit), reduces bias, and is often ****more sensitive**** (detecting differences with
fewer clicks). The price is ****complexity****: probabilistic attribution is harder to explain,
and the probability function (e.g. softmax temperature) needs careful design.

---

**Theme:** [Ranking & Interleaving](index.html#term-theme-ranking)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Team Draft Interleaving (TDI)](110-team-draft-interleaving-tdi.html) · [Balanced Interleaving](111-balanced-interleaving.html) · [Ranking Algorithms](108-ranking-algorithms.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [A/B Testing](380-a-b-testing.html) · [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html)

---

> **Hint**
> ****More in Ranking & Interleaving****

[Balanced Interleaving](111-balanced-interleaving.html) · [DCG (Discounted Cumulative Gain)](272-dcg-discounted-cumulative-gain.html) · [Interleaving Tests](379-interleaving-tests.html) · [Mean Average Precision (MAP)](414-mean-average-precision-map.html) · [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html) · [Ranking Algorithms](108-ranking-algorithms.html) · [Team Draft Interleaving (TDI)](110-team-draft-interleaving-tdi.html) · [TREC (Text REtrieval Conference)](274-trec-text-retrieval-conference.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Probabilistic Interleaving](https://insightful-data-lab.com/2025/08/24/probabilistic-interleaving/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)