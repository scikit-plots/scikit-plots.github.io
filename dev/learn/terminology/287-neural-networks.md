💡  ****Neural Networks****

# Neural Networks[#](#neural-networks "Link to this heading")

**Layered models of interconnected units that learn complex functions from data.**

## What it is[#](#what-it-is "Link to this heading")

A ****neural network**** is a model of interconnected ****neurons**** arranged in ****layers**** — an ****input****
layer, one or more ****hidden**** layers, and an ****output**** layer. Each neuron computes a ****weighted sum**** of
its inputs, adds a ****bias****, and passes the result through a ****non-linear activation function****, letting
the network model complex relationships.

## Weights, biases, activations[#](#weights-biases-activations "Link to this heading")

****Weights**** set the strength of each connection and ****biases**** shift the activation; the ****non-linearity****
is what lets stacked layers represent functions a linear model cannot. Common activations are ****ReLU****,
****sigmoid**** and ****tanh****. A single unit computes

\[a = \phi\!\left( \sum\_i w\_i x\_i + b \right),\]

where \(\phi\) is the activation function.

## Forward pass and backpropagation[#](#forward-pass-and-backpropagation "Link to this heading")

In the ****forward pass****, inputs flow layer by layer to an output, and a ****loss function**** (MSE for
regression, cross-entropy for classification) measures the error. ****Backpropagation**** then applies the
****chain rule**** to compute the gradient of that loss with respect to every weight, propagating the error
****backward**** from output to input; ****gradient descent**** updates the weights, with the ****learning rate****
\(\eta\) setting the step size:

\[w \leftarrow w - \eta \, \frac{\partial \mathcal{L}}{\partial w}.\]

## In practice[#](#in-practice "Link to this heading")

Depth and width are chosen for the task, ****validation**** data guards against overfitting, and frameworks
like ****PyTorch****, ****TensorFlow**** and ****Keras**** implement backpropagation automatically.

```
from sklearn.neural_network import MLPClassifier

clf = MLPClassifier(hidden_layer_sizes=(64, 32), activation="relu", max_iter=500)
clf.fit(X_train, y_train)

```

---

**Theme:** [AI & ML Concepts](index.html#term-theme-concepts)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Support Vector Machines (SVMs)](282-support-vector-machines-svms.html) · [Logistic Regression](292-logistic-regression.html) · [Decision Trees](340-decision-trees.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [Deep Ensembles](335-deep-ensembles.html) · [Autoencoder](171-autoencoder.html)

---

> **Hint**
> ****More in AI & ML Concepts****

[AI (Artificial Intelligence)](143-ai-artificial-intelligence.html) · [Classification Models](294-classification-models.html) · [Computer Vision (CV)](321-computer-vision-cv.html) · [Decision Trees](340-decision-trees.html) · [Linear Models](341-linear-models.html) · [LLMs (Large Language Models)](158-llms-large-language-models.html) · [Logistic Regression](292-logistic-regression.html) · [Machine Learning (ML)](144-machine-learning-ml.html) · [Medical AI](145-medical-ai.html) · [Natural Language Processing (NLP)](322-natural-language-processing-nlp.html) · [Regression Models](309-regression-models.html) · [Support Vector Machines (SVMs)](282-support-vector-machines-svms.html) · [Target Variable](236-target-variable.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Neural Networks](https://insightful-data-lab.com/2025/08/21/neural-networks/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)