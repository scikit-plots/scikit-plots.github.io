🔎  ****Team Draft Interleaving (TDI)****

# Team Draft Interleaving (TDI)[#](#team-draft-interleaving-tdi "Link to this heading")

**Interleaving where rankers alternately draft items into one list for fair comparison.**

## What it is[#](#what-it-is "Link to this heading")

****Team-draft interleaving (TDI)**** is an ****online method for comparing two ranking
algorithms**** A and B. Like balanced interleaving it merges both into one list shown to
users, but it fills the list by a ****draft pick**** — exactly like two captains choosing
players for a team — deciding which algorithm contributes the next slot.

## Why use it[#](#why-use-it "Link to this heading")

****A/B testing**** splits traffic and needs large samples; ****balanced interleaving**** can favour
one ranker depending on overlap and order. TDI ****randomises the draft**** so each algorithm
gets an equal, unbiased chance to place its items.

## How it works[#](#how-it-works "Link to this heading")

Take the top-k from A and B; ****randomly pick who drafts first****; then ****alternate****: each
algorithm in turn adds its ****highest-ranked item not already in the list****, until the
interleaving is full. Show it, and ****attribute each click to whichever algorithm drafted
that item**** — attribution is ****deterministic and unambiguous****.

## Example[#](#example "Link to this heading")

With A = [A1, A2, A3, A4] and B = [B1, B2, B3, B4], a draft might yield
[A1, B1, A2, B2, A3, B3, A4, B4]. A click on ****B2**** credits ****algorithm B****, because B
drafted it.

## Strengths and limits[#](#strengths-and-limits "Link to this heading")

TDI is ****fair**** (randomised drafting removes systematic bias), ****efficient**** (fewer users
than A/B testing to detect a difference), gives ****clear click ownership****, and is
****sensitive**** to small gaps — which made it an industry standard. Its limits: it compares
****only two**** algorithms at once, still assumes ****clicks equal relevance**** (noisy), and needs
care with ****ties and overlapping**** results.

---

**Theme:** [Ranking & Interleaving](index.html#term-theme-ranking)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Balanced Interleaving](111-balanced-interleaving.html) · [Probabilistic Interleaving](109-probabilistic-interleaving.html) · [Ranking Algorithms](108-ranking-algorithms.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [A/B Testing](380-a-b-testing.html) · [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html)

---

> **Hint**
> ****More in Ranking & Interleaving****

[Balanced Interleaving](111-balanced-interleaving.html) · [DCG (Discounted Cumulative Gain)](272-dcg-discounted-cumulative-gain.html) · [Interleaving Tests](379-interleaving-tests.html) · [Mean Average Precision (MAP)](414-mean-average-precision-map.html) · [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html) · [Probabilistic Interleaving](109-probabilistic-interleaving.html) · [Ranking Algorithms](108-ranking-algorithms.html) · [TREC (Text REtrieval Conference)](274-trec-text-retrieval-conference.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Team Draft Interleaving (TDI)](https://insightful-data-lab.com/2025/08/24/team-draft-interleaving-tdi/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)