# Logo API[#](#logo-api "Link to this heading")

Scikit-plots includes a small brand helper that generates the official
logo using ****pure Matplotlib primitives****.
The default output is deterministic and requires ****no image assets****.

This makes the logo easy to:

* ship inside the library,
* regenerate at any size,
* theme for dark/light docs,
* export as SVG/PNG without external dependencies.

> **Note**
> The public interface is exposed as `_logo`.
The internal implementation may live in `_logo`.

If you are developing inside the repository you may see examples using
`sp._logo`; user code should prefer `sp._logo` when available.

Examples

```
import scikitplot as sp

# Show primary icon
sp._logo.show()

# Save a single icon
sp._logo.save("scikit-plots.svg")

# Save multiple variants using a template
sp._logo.save(
    "assets/scikit-plots-{variant}.svg",
    variants=sp._logo.list_variants()
)

```

## Variants[#](#variants "Link to this heading")

Scikit-plots provides several icon variants tuned for different contexts:

* ****primary****: full brand mark for docs, README, websites.
* ****small****: simplified icon for tiny sizes.
* ****metrics****: highlights classic ML evaluation concepts.
* ****knn****: subtle nod to Annoy/KNN features.

```
sp._logo.list_variants()
# ('primary', 'small', 'metrics', 'knn')

# Save all variants with auto suffix
sp._logo.save("assets/scikit-plots.svg", variants=sp._logo.list_variants())

```

## Themes & Monochrome[#](#themes-monochrome "Link to this heading")

Use themes for dark backgrounds and monochrome for badges or watermarks.

```
# Dark theme for docs landing pages
sp._logo.save("assets/scikit-plots-dark.svg", theme="dark")

# Monochrome for badges
sp._logo.save("assets/scikit-plots-mono.svg", mono=True)

```

## Decorative Dots[#](#decorative-dots "Link to this heading")

The primary mark supports a small dot field.
For brand-stable output, keep `dots="fixed"` (the default).

```
# Brand-stable default
sp._logo.save("assets/scikit-plots-primary.svg", dots="fixed")

# Turn off dots for extra minimal output
sp._logo.save("assets/scikit-plots-clean.svg", dots="none")

# Experimental random layout (not recommended for official assets)
sp._logo.save("assets/scikit-plots-random.svg", dots="random", seed=42)

```

## Presets[#](#presets "Link to this heading")

Presets provide convenient defaults for common contexts such as favicons,
avatars, and documentation hero images.

```
sp._logo.list_size_presets()
# ('favicon', 'avatar', 'docs-hero')

# A crisp small icon for browser/app use
sp._logo.save("assets/favicon.png", preset="favicon")

# A balanced default for social/GitHub avatars
sp._logo.save("assets/avatar.svg", preset="avatar")

# A large icon for docs landing pages
sp._logo.save("assets/hero.svg", preset="docs-hero")

```

## Wordmark[#](#wordmark "Link to this heading")

The wordmark combines the icon with a text lockup.
This is useful for website headers, slides, and banners.

```
# Show wordmark
sp._logo.wordmark.show()

# Save wordmark lockup
sp._logo.wordmark.save("assets/scikit-plots-lockup.svg")

```

## Saving Behavior[#](#saving-behavior "Link to this heading")

The save API follows Matplotlib-style conventions:

* Format is inferred from filename suffix.
* Override inference with `ext=` or `format=`.
* Extra keyword arguments are forwarded to `Figure.savefig`.

```
# Infer format from suffix
sp._logo.save("assets/scikit-plots.png", dpi=300)

# Force SVG even without suffix
sp._logo.save("assets/scikit-plots", format="svg")

# Save multiple variants using a template
sp._logo.save(
    "assets/scikit-plots-{variant}.png",
    variants=["primary", "small"],
    dpi=300
)

```

## Command Line[#](#command-line "Link to this heading")

A lightweight CLI is available for batch generation.

```
# Export all icon variants
python -m scikitplot._logo --all --out assets

# Generate a favicon preset
python -m scikitplot._logo --all --preset favicon --out assets --format png
python -m scikitplot._logo --preset favicon --out assets --format png

# Generate the wordmark lockup
python -m scikitplot._logo --wordmark --out assets --format svg
python -m scikitplot._logo --wordmark --out assets --format png

```

## Developing & Testing Logos[#](#developing-testing-logos "Link to this heading")

When extending or adjusting the brand system:

* Prefer testing ****artist-level determinism**** rather than raw SVG bytes.
* Keep `dots="fixed"` for official outputs.
* Add new variants by composing existing primitives (bars, wedges, lines).

If you need a backend-stability check for SVG serialization,
compare ****normalized**** SVG output rather than byte-for-byte equality.

> **See also**
> * [`matplotlib.figure.Figure.savefig`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.figure.Figure.savefig.html#matplotlib.figure.Figure.savefig "(in Matplotlib v3.12.0.dev56+g93e7277ae)")
* `scikitplot._logo.create`
* `scikitplot._logo.save`
* `scikitplot._logo.list_variants`