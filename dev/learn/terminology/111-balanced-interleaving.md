🔎  ****Balanced Interleaving****

# Balanced Interleaving[#](#balanced-interleaving "Link to this heading")

**An early interleaving scheme that merges two ranked lists to attribute clicks.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****Balanced interleaving**** is the simplest ****online method for comparing two ranking
algorithms****: it mixes their results into one combined list shown to users, then reads off
which algorithm’s items draw more clicks. Both rankers get a ****fair, equal chance**** to place
items, so the comparison happens **within a single session** rather than across split traffic.

## Why use it[#](#why-use-it "Link to this heading")

Classic ****A/B testing**** sends half the users to A and half to B, which needs large samples
and time. Interleaving shows ****both at once****, making the comparison ****faster and more
sensitive**** — small quality gaps surface with far fewer interactions.

## How it works[#](#how-it-works "Link to this heading")

Take the top-k from A and B and build the list by ****strict alternation**** — first from A,
then B, then A, ensuring neither dominates by position. Show the combined list, ****credit
each click to the algorithm that contributed that item****, and the ranker with more credited
clicks wins.

## Example[#](#example "Link to this heading")

With A = [A1, A2, A3, A4] and B = [B1, B2, B3, B4], the interleaving is
[A1, B1, A2, B2, A3, B3, A4, B4]. If the user clicks A1, B2 and A3, then A scores ****2**** and
B scores ****1**** — A wins this impression.

## Strengths and limits[#](#strengths-and-limits "Link to this heading")

It is ****efficient, fair and sensitive****, but it compares ****only two**** algorithms, assumes
****clicks track relevance**** (which is noisy), and needs care so that ****position bias**** in the
alternation doesn’t quietly favour one side. ****Team-draft**** and ****probabilistic
interleaving**** were developed to address exactly these weaknesses.

---

**Theme:** [Ranking & Interleaving](index.html#term-theme-ranking)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Team Draft Interleaving (TDI)](110-team-draft-interleaving-tdi.html) · [Probabilistic Interleaving](109-probabilistic-interleaving.html) · [Ranking Algorithms](108-ranking-algorithms.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [A/B Testing](380-a-b-testing.html) · [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html)

---

> **Hint**
> ****More in Ranking & Interleaving****

[DCG (Discounted Cumulative Gain)](272-dcg-discounted-cumulative-gain.html) · [Interleaving Tests](379-interleaving-tests.html) · [Mean Average Precision (MAP)](414-mean-average-precision-map.html) · [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html) · [Probabilistic Interleaving](109-probabilistic-interleaving.html) · [Ranking Algorithms](108-ranking-algorithms.html) · [Team Draft Interleaving (TDI)](110-team-draft-interleaving-tdi.html) · [TREC (Text REtrieval Conference)](274-trec-text-retrieval-conference.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Balanced Interleaving](https://insightful-data-lab.com/2025/08/24/balanced-interleaving/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)