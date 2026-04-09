# scikitplot.experimental[#](#module-scikitplot.experimental "Link to this heading")

Experimental submodules for Scikit-Plots.

This package contains optional or in-development modules that extend
Scikit-Plots functionality in areas such as customer lifetime analytics,
LLM-based components, and UI tooling. These modules are provided on an
experimental basis and may change or be removed in future releases.

****User guide.**** See the [Experimental (experimental)](../user_guide/experimental/index.html#experimental-index) section for further details.

Experimental submodules for Scikit-Plots.

This package contains optional or in-development modules that extend
Scikit-Plots functionality in areas such as customer lifetime analytics,
LLM-based components, and UI tooling. These modules are provided on an
experimental basis and may change or be removed in future releases.

|  |  |
| --- | --- |
| [`enable_ann_imputer`](../modules/generated/scikitplot.experimental.enable_ann_imputer.html#module-scikitplot.experimental.enable_ann_imputer "scikitplot.experimental.enable_ann_imputer") | Enables ANNImputer |

## sklearn’s pipeline.[#](#module-scikitplot.experimental.pipeline "Link to this heading")

pipeline.

****User guide.**** See the [Pipeline](../user_guide/experimental/pipeline/index.html#pipeline-index) section for further details.

|  |  |
| --- | --- |
| [`pipeline.pipeline`](../modules/generated/scikitplot.experimental.pipeline.pipeline.html#module-scikitplot.experimental.pipeline.pipeline "scikitplot.experimental.pipeline.pipeline") | pipeline.py. |

## Musical note handling, synthesis, and notation.[#](#module-scikitplot.experimental._doremi "Link to this heading")

### Doremi[#](#doremi "Link to this heading")

A modular Python toolkit for musical note processing, sound synthesis, and
notation handling. Supports Western and solfège notation, tone generation,
frequency mapping, waveform synthesis, and more.

See [[1]](#ra8daf91a3bab-1), [[2]](#ra8daf91a3bab-2), and [[3]](#ra8daf91a3bab-3) for model details.

Examples

```
>>> from scikitplot.experimental import _doremi as doremi
>>> doremi.compose_as_waveform()

```

References

[[1](#id1)]

[Smith, J. (2021).
\*Sound Synthesis for Musicians\*.
Audio Tech Publishing. https://example.com/sound-synthesis-guide.pdf](https://example.com/sound-synthesis-guide.pdf)

[[2](#id2)]

[3Blue1Brown. (2017).
\*Fourier Series\*.
YouTube. https://www.youtube.com/watch?v=spUNpyF58BY](https://www.youtube.com/watch?v=spUNpyF58BY)

[[3](#id3)]

[Çelik, M. (2022, May 9).
“How to generate 440 Hz A(LA) Note Sin wave with 44.1”
Medium. https://celik-muhammed.medium.com/how-to-generate-440-hz-a-la-note-sin-wave-with-44-1-1e41f6ed9653](https://celik-muhammed.medium.com/how-to-generate-440-hz-a-la-note-sin-wave-with-44-1-1e41f6ed9653)

****User guide.**** See the [Do-Re-Mi](../user_guide/experimental/_doremi/index.html#doremi-index) section for further details.

|  |  |
| --- | --- |
| [`_doremi.ENVELOPES`](../modules/generated/scikitplot.experimental._doremi.ENVELOPES.html#scikitplot.experimental._doremi.ENVELOPES "scikitplot.experimental._doremi.ENVELOPES") | Mapping of envelope types to amplitude-modulation functions. |
| [`_doremi.compose_as_waveform`](../modules/generated/scikitplot.experimental._doremi.compose_as_waveform.html#scikitplot.experimental._doremi.compose_as_waveform "scikitplot.experimental._doremi.compose_as_waveform") | Generate a concatenated waveform from a musical composition input. |
| [`_doremi.play_waveform`](../modules/generated/scikitplot.experimental._doremi.play_waveform.html#scikitplot.experimental._doremi.play_waveform "scikitplot.experimental._doremi.play_waveform") | Play audio from a NumPy array using either IPython (for Jupyter) or sounddevice. |
| [`_doremi.plot_waveform`](../modules/generated/scikitplot.experimental._doremi.plot_waveform.html#scikitplot.experimental._doremi.plot_waveform "scikitplot.experimental._doremi.plot_waveform") | Plot the waveform of mono or multi-channel audio data. |
| [`_doremi.save_waveform`](../modules/generated/scikitplot.experimental._doremi.save_waveform.html#scikitplot.experimental._doremi.save_waveform "scikitplot.experimental._doremi.save_waveform") | Save waveform to an audio file using specified or auto-selected backend. |
| [`_doremi.save_waveform_as_mp3`](../modules/generated/scikitplot.experimental._doremi.save_waveform_as_mp3.html#scikitplot.experimental._doremi.save_waveform_as_mp3 "scikitplot.experimental._doremi.save_waveform_as_mp3") | Save waveform as an MP3 file using pydub and ffmpeg, with support for mono or stereo. |
| [`_doremi.sheet_to_note`](../modules/generated/scikitplot.experimental._doremi.sheet_to_note.html#scikitplot.experimental._doremi.sheet_to_note "scikitplot.experimental._doremi.sheet_to_note") | Convert input sheet (str/list/dict) to a list of (note, octave, duration). |
| [`_doremi.sheet_converter`](../modules/generated/scikitplot.experimental._doremi.sheet_converter.html#scikitplot.experimental._doremi.sheet_converter "scikitplot.experimental._doremi.sheet_converter") | Display parsed notes or note frequencies from a musical sheet. |
| [`_doremi.serialize_sheet`](../modules/generated/scikitplot.experimental._doremi.serialize_sheet.html#scikitplot.experimental._doremi.serialize_sheet "scikitplot.experimental._doremi.serialize_sheet") | Serialize sheet notes to JSON or YAML string. |
| [`_doremi.export_sheet`](../modules/generated/scikitplot.experimental._doremi.export_sheet.html#scikitplot.experimental._doremi.export_sheet "scikitplot.experimental._doremi.export_sheet") | Enable serialization of compositions or note sheets. |