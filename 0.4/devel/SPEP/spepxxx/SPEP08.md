# SEP8: PEP8[#](#sep8-pep8 "Link to this heading")

## [Status](#id1)[#](#status "Link to this heading")

****Superseded****

Current guidelines for style, including usage of pep8 are maintained
in [our pull request guidelines](https://scikit-plots.github.io/dev/devel/coding_guide.html).

We are currently enforcing a sub-set of pep8 on new code contributions.

## [Branches and Pull requests](#id2)[#](#branches-and-pull-requests "Link to this heading")

None so far.

## [Abstract](#id3)[#](#abstract "Link to this heading")

The scikit-plots codebase predates PEP8, and therefore is less than
consistent style-wise in some areas. Bringing the codebase into
compliance with PEP8 would go a long way to improving its legibility.

## [Detailed description](#id4)[#](#detailed-description "Link to this heading")

Some files use four space indentation, some use three. Some use
different levels in the same file.

For the most part, class/function/variable naming follows PEP8, but it
wouldn’t hurt to fix where necessary.

## [Implementation](#id5)[#](#implementation "Link to this heading")

The implementation should be fairly mechanical: running the pep8 tool
over the code and fixing where appropriate.

This should be merged in after the 2.0 release, since the changes will
likely make merging any pending pull requests more difficult.

Additionally, and optionally, PEP8 compliance could be tracked by an
automated build system.

## [Backward compatibility](#id6)[#](#backward-compatibility "Link to this heading")

Public names of classes and functions that require change (there
shouldn’t be many of these) should first be deprecated and then
removed in the next release cycle.

## [Alternatives](#id7)[#](#alternatives "Link to this heading")

PEP8 is a popular standard for Python code style, blessed by the
Python core developers, making any alternatives less desirable.