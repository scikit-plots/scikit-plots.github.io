# Roadmap[#](#roadmap "Link to this heading")

## Purpose of this document[#](#purpose-of-this-document "Link to this heading")

This document list general directions that core contributors are interested
to see developed in scikit-plots. The fact that an item is listed here is in
no way a promise that it will happen, as resources are limited. Rather, it
is an indication that help is welcomed on this topic.

## Statement of purpose: Scikit-plots in 2024[#](#statement-of-purpose-scikit-plots-in-2024 "Link to this heading")

Since 2017 after the inception of Scikit-plot now Scikit-plots,
much has changed in the world of machine learning.

## Architectural / general goals[#](#architectural-general-goals "Link to this heading")

The list is numbered not as an indication of the order of priority, but to
make referring to specific points easier. Please add new entries only at the
bottom. Note that the crossed out entries are already done, and we try to keep
the document up to date as we work on these issues.

1. Improved handling of Pandas DataFrames

   * document current handling
2. Improved handling of categorical features

   * Handling mixtures of categorical and continuous variables
3. More didactic documentation

   * More and more options have been added to scikit-plots. As a result, the
     documentation is crowded which makes it hard for beginners to get the big
     picture. Some work could be done in prioritizing the information.
4. Passing around information that is not (X, y): Feature properties

   * Per-feature handling (e.g. “is this a nominal / ordinal / English language
     text?”)
5. Passing around information that is not (X, y): Target information

   * We have no way to handle a mixture of categorical and continuous targets.
6. Make it easier for external users to write Scikit-plots-compatible
   components

   * More self-sufficient running of scikit-plots-contrib or a similar resource