🧬  ****Frozen Encoder****

# Frozen Encoder[#](#frozen-encoder "Link to this heading")

**A pretrained encoder whose weights stay fixed while downstream layers train.**

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

A ****frozen encoder**** is a pretrained model — such as BERT, ResNet or a sentence
transformer — that you reuse purely as a **feature extractor**: its weights are held
fixed (“frozen”) and only the small new layers you stack on top (a classifier or
regression head) are trained on your task. The encoder turns inputs into
representations; your head learns to use them.

## Why freeze[#](#why-freeze "Link to this heading")

* ****Efficiency**** — far fewer trainable parameters means faster training and lower
  memory use.
* ****Small-data settings**** — freezing prevents a large model from overfitting a
  small labelled set while still borrowing the general knowledge baked into the
  pretrained weights.
* ****A staged transfer-learning strategy**** — freeze first and train only the head;
  later, optionally unfreeze some layers to adapt the representation more closely.

## The frozen-to-fine-tuned spectrum[#](#the-frozen-to-fine-tuned-spectrum "Link to this heading")

* ****Fully frozen**** — only the head trains.
* ****Partially frozen**** — unfreeze the top few layers (common with transformers),
  leaving lower, more general layers fixed.
* ****Fully fine-tuned**** — update every encoder weight on your data (most flexible,
  most data-hungry, easiest to overfit).

## Mental model[#](#mental-model "Link to this heading")

Treat a frozen encoder exactly like precomputed features. Using fixed Word2Vec or
GloVe vectors and training a small model on top is the same idea: you trust the
representation and spend your limited data learning only the task-specific part.

## Where it’s used[#](#where-it-s-used "Link to this heading")

* ****NLP**** — embed text with a frozen BERT, then train a logistic-regression head
  for sentiment.
* ****Computer vision**** — use a frozen ImageNet-pretrained ResNet50 and train a new
  head for, say, medical images.
* ****Recommender systems**** — keep large pretrained user/item embeddings fixed and
  train only a lightweight ranking layer on your own interactions.

---

**Theme:** [Representations & Embeddings](index.html#term-theme-repr)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Embedding](173-embedding.html) · [Autoencoder](171-autoencoder.html)

---

> **Hint**
> ****More in Representations & Embeddings****

[Autoencoder](171-autoencoder.html) · [Embedding](173-embedding.html) · [Embedding Similarity](320-embedding-similarity.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Frozen Encoder](https://insightful-data-lab.com/2025/08/23/frozen-encoder/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)