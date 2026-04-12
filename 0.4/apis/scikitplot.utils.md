# scikitplot.utils[#](#module-scikitplot.utils "Link to this heading")

Various utilities to help with development.

****Developer guide.**** See the [Contributing Guidelines to scikit-plots](../devel/index.html#developers-guide-index) section for further details.

## Time Utilities[#](#module-scikitplot.utils._time "Link to this heading")

Lightweight timing context manager with [`logger`](../modules/generated/scikitplot.logger.html#module-scikitplot.logger "scikitplot.logger") support.

|  |  |
| --- | --- |
| [`_time.Timer`](../modules/generated/scikitplot.utils._time.Timer.html#scikitplot.utils._time.Timer "scikitplot.utils._time.Timer") | Lightweight ⏱ timing context manager with [`logger`](../modules/generated/scikitplot.logger.html#module-scikitplot.logger "scikitplot.logger") support. |

## File/Folder Utilities[#](#module-scikitplot.utils._path "Link to this heading")

Path and filename utilities.

This module provides small, robust helpers for generating portable and
collision-resistant file and folder names. The default format is designed to be:

* lexicographically sortable by timestamp (UTC)
* safe across Windows/macOS/Linux filesystems
* collision-resistant across threads/processes/machines

The core building block is `PathNamer`, plus a zero-argument convenience wrapper
`make_path`.

Filename format:

* `[ {prefix}- ]{YYYYMMDDTHHMMSSmmmZ}-{counter:06d}-{uuid4hex}[ -{secret} ][ -{suffix} ][ .{ext} ]`

|  |  |
| --- | --- |
| [`_path.PathNamer`](../modules/generated/scikitplot.utils._path.PathNamer.html#scikitplot.utils._path.PathNamer "scikitplot.utils._path.PathNamer") | Generate portable, collision-resistant filenames and paths. |
| [`_path.make_path`](../modules/generated/scikitplot.utils._path.make_path.html#scikitplot.utils._path.make_path "scikitplot.utils._path.make_path") | Make Convenience wrapper to build a unique path (callable with zero args). |