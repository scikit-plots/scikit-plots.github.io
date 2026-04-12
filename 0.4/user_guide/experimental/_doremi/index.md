# Do-Re-Mi[#](#do-re-mi "Link to this heading")

****doremi**** is a modular Python library for musical note handling, sound synthesis, and notation processing.
It bridges music theory and audio programming by offering tools for pitch representation, waveform generation, solfège conversion, and more.

🎵 From notes to sound — all in Python.

## Overview[#](#overview "Link to this heading")

`doremi` supports both Western and solfège notation systems, and provides clean APIs for:

* Converting note names to frequencies and vice versa
* Generating and playing synthesized tones (e.g., sine waves)
* Composing melodies from note sequences
* Working with musical concepts like octaves, scales, and envelopes

## Motivation[#](#motivation "Link to this heading")

Most audio libraries focus on low-level signal processing. `doremi` provides an abstraction layer
that allows musicians, researchers, and developers to interact with ****musical structure**** rather than raw audio buffers.

Whether you’re building an educational tool, music theory analyzer, or procedural sound system, `doremi` gives you the musical building blocks.

## Quick Example[#](#quick-example "Link to this heading")

```
>>> from scikitplot.experimental import _doremi as doremi
>>> sheet = doremi.SHEET
>>> waveform = doremi.doremi.compose_as_waveform()
>>> file_path = doremi.save_waveform(waveform, "melody.wav")
>>> doremi.plot_waveform(waveform, "melody.wav")

```

## Modules[#](#modules "Link to this heading")

* `doremi.notes` - Note parsing, normalization, and frequency mapping
* `doremi.synthesis` - Waveform generation, envelopes, and tone synthesis
* `doremi.composer` - High-level composition and playback tools

## References[#](#references "Link to this heading")