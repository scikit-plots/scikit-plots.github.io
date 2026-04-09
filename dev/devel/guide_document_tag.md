# Documentation Tagging Guidelines[#](#documentation-tagging-guidelines "Link to this heading")

> **Template**
> Template for further usage, template belong to matplotlib.

## Why do we need tags?[#](#why-do-we-need-tags "Link to this heading")

Tags serve multiple purposes.

Tags have a one-to-many organization (i.e. one example can have several tags), while
the gallery structure requires that examples are placed in only one location. This means
tags provide a secondary layer of organization and make the gallery of examples more
flexible and more user-friendly.

They allow for better discoverability, search, and browse functionality. They are
helpful for users struggling to write a search query for what they’re looking for.

Hidden tags provide additional functionality for maintainers and contributors.

## How to tag?[#](#how-to-tag "Link to this heading")

Place the tag directive at the bottom of each page and add the tags underneath, e.g.:

```
.. tags::
   topic: tagging, purpose: reference

```

## What gets a tag?[#](#what-gets-a-tag "Link to this heading")

Every gallery example should be tagged with:

* 1+ content tags
* structural, domain, or internal tag(s) if helpful

Tags can repeat existing forms of organization (e.g. an example is in the Animation
folder and also gets an `animation` tag).

Tags are helpful to denote particularly good “byproduct” examples. E.g. the explicit
purpose of a gallery example might be to demonstrate a colormap, but it’s also a good
demonstration of a legend. Tag `legend` to indicate that, rather than changing the
title or the scope of the example.

****Tag Categories****

* [Tag Glossary](guide_document_tag_glossary.html)
  * [API tags: what content from the API reference is in the example?](guide_document_tag_glossary.html#api-tags-what-content-from-the-api-reference-is-in-the-example)
  * [Structural tags: what format is the example? What context can we provide?](guide_document_tag_glossary.html#structural-tags-what-format-is-the-example-what-context-can-we-provide)
  * [Domain tags: what discipline(s) might seek this example consistently?](guide_document_tag_glossary.html#domain-tags-what-discipline-s-might-seek-this-example-consistently)
  * [Internal tags: what information is helpful for maintainers or contributors?](guide_document_tag_glossary.html#internal-tags-what-information-is-helpful-for-maintainers-or-contributors)

See [Tag Glossary](guide_document_tag_glossary.html) for a complete list

## Proposing new tags[#](#proposing-new-tags "Link to this heading")

1. Review existing tag list, looking out for similar entries (i.e. `axes` and `axis`).
2. If a relevant tag or subcategory does not yet exist, propose it. Each tag is two
   parts: `subcategory: tag`. Tags should be one or two words.
3. New tags should be be added when they are relevant to existing gallery entries too.
   Avoid tags that will link to only a single gallery entry.
4. Tags can recreate other forms of organization.

Tagging organization aims to work for 80-90% of cases. Some examples fall outside of the
tagging structure. Niche or specific examples shouldn’t be given standalone tags that
won’t apply to other examples.