🧬  ****Autoencoder****

# Autoencoder[#](#autoencoder "Link to this heading")

**A neural network trained to reconstruct its input through a compressed latent code.**

## What it is[#](#what-it-is "Link to this heading")

An ****autoencoder**** is a neural network trained to copy its input to its output
through a deliberate **bottleneck**. Because the network must pass everything it
knows about an example through a representation that is too small to hold the raw
input, it is forced to discover and keep only the structure that actually matters
and to discard noise and redundancy. The small middle representation — the
****latent code**** — is the part we usually care about.

## How it works[#](#how-it-works "Link to this heading")

An autoencoder has three pieces:

* an ****encoder**** \(f\_\theta\) that maps an input \(x\) to a low-dimensional
  code \(z\);
* a ****bottleneck**** (the latent space) that holds \(z\), whose dimension is
  much smaller than the input;
* a ****decoder**** \(g\_\phi\) that reconstructs an approximation
  \(\hat{x}\) of the original from \(z\).

Encoder and decoder are trained **together** to minimise a reconstruction loss —
typically mean squared error for continuous data or cross-entropy for binary or
categorical data:

\[z = f\_\theta(x), \qquad \hat{x} = g\_\phi(z), \qquad
\min\_{\theta,\phi}\; L\big(x,\; g\_\phi(f\_\theta(x))\big).\]

Nothing about the target requires labels — the input **is** the target — so an
autoencoder learns in a fully self-supervised way.

## Common variants[#](#common-variants "Link to this heading")

* ****Denoising**** — corrupt the input and ask the network to reconstruct the clean
  version, which forces robust features.
* ****Sparse**** — penalise the code so that most latent units are inactive for any
  given input.
* ****Variational (VAE)**** — make the latent space **probabilistic**, which regularises
  it and turns the decoder into a generator of new samples.
* ****Convolutional**** — build encoder and decoder from convolutional layers, the
  natural choice for images.

## Where it’s used[#](#where-it-s-used "Link to this heading")

* ****Non-linear dimensionality reduction**** — a more flexible alternative to PCA.
* ****Denoising**** of images, audio or text.
* ****Anomaly detection**** — examples the model reconstructs badly (high error) are
  flagged as unusual, which is useful for fraud, intrusion and fault detection.
* ****Representation learning**** — the latent code becomes a feature vector for
  downstream models.

## Worked example[#](#worked-example "Link to this heading")

Feed a 28×28 handwritten-digit image (784 pixels) through an encoder that
compresses it to a 32-dimensional code, then a decoder that expands it back to
784 pixels. Trained well, the reconstruction looks almost identical to the
original, yet the 32-number code captures the **essence** of the digit — enough to
cluster, search or detect outliers in a fraction of the original space.

---

****Mind map — connected ideas****

> [Embedding](173-embedding.html) · [Embedding Similarity](320-embedding-similarity.html) · [Frozen Encoder](172-frozen-encoder.html)

---

****More in Representations & Embeddings****

> [Embedding](173-embedding.html) · [Embedding Similarity](320-embedding-similarity.html) · [Frozen Encoder](172-frozen-encoder.html)

---

**Theme:** [Representations & Embeddings](index.html#term-theme-repr)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Autoencoder](https://insightful-data-lab.com/2025/08/23/autoencoder/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)