🧬  ****Embedding****

# Embedding[#](#embedding "Link to this heading")

**A dense vector representation that places similar items near each other.**

## What it is[#](#what-it-is "Link to this heading")

An ****embedding**** represents a complex object — a word, a sentence, an image, a
user, a product — as a dense vector of numbers in a continuous space, chosen so
that **similar objects land near each other**. Instead of treating categories as
opaque, unrelated symbols, an embedding gives every object coordinates whose
geometry encodes meaning.

## Why it matters[#](#why-it-matters "Link to this heading")

Raw data is high-dimensional and awkward for models: a one-hot encoding of a
100,000-word vocabulary is a 100,000-long vector that is almost entirely zeros and
says nothing about how words relate. An embedding replaces that with a short dense
vector (commonly 50–1000 dimensions) that machine-learning models can compare,
cluster and retrieve over efficiently — and in which **distance carries semantic
meaning**.

## Geometry of meaning[#](#geometry-of-meaning "Link to this heading")

Because related objects sit close together, relationships often appear as simple
vector arithmetic. The classic word-embedding analogy is that the vector for
**king**, minus **man**, plus **woman**, lands very close to the vector for **queen**:

\[v(\text{king}) - v(\text{man}) + v(\text{woman}) \approx v(\text{queen}).\]

## How embeddings are learned[#](#how-embeddings-are-learned "Link to this heading")

* ****Supervised**** — train on a labelled task and read off an internal layer
  (for example, a fine-tuned transformer for sentiment).
* ****Self-supervised**** — learn structure from raw data with no labels
  (Word2Vec, GloVe, or an autoencoder’s latent code).
* ****Contrastive**** — pull matching pairs together and push mismatched pairs apart
  (SimCLR for images, CLIP for image–text pairs).

## Where it’s used[#](#where-it-s-used "Link to this heading")

* ****NLP**** — word, sentence and document vectors for search and classification.
* ****Computer vision**** — face recognition and image retrieval.
* ****Recommender systems**** — represent users and items, then recommend by
  nearest-neighbour lookup in the shared space.
* ****Clustering and visualisation**** — project embeddings to 2-D (t-SNE, UMAP) to
  reveal structure.
* ****Transfer learning**** — reuse pretrained embeddings as a strong starting point
  for new tasks.

---

**Theme:** [Representations & Embeddings](index.html#term-theme-repr)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Embedding Similarity](320-embedding-similarity.html) · [Autoencoder](171-autoencoder.html) · [Frozen Encoder](172-frozen-encoder.html)

---

> **Hint**
> ****More in Representations & Embeddings****

[Autoencoder](171-autoencoder.html) · [Embedding Similarity](320-embedding-similarity.html) · [Frozen Encoder](172-frozen-encoder.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Embedding](https://insightful-data-lab.com/2025/08/23/embedding/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)