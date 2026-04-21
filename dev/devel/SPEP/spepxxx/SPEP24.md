# SEP24: Negative radius in polar plots[#](#sep24-negative-radius-in-polar-plots "Link to this heading")

> **Template**
> Template for further usage, template belong to matplotlib MEPs.

## [Status](#id1)[#](#status "Link to this heading")

**Discussion**

## [Branches and Pull requests](#id2)[#](#branches-and-pull-requests "Link to this heading")

None

## [Abstract](#id3)[#](#abstract "Link to this heading")

It is clear that polar plots need to be able to gracefully handle
negative r values (not by clipping or reflection).

## [Detailed description](#id4)[#](#detailed-description "Link to this heading")

One obvious application that we should support is bB plots (see
[matplotlib/matplotlib#1730](https://github.com/matplotlib/matplotlib/issues/1730#issuecomment-40815837)),
but this seems more generally useful (for example growth rate as a
function of angle). The assumption in the current code (as I
understand it) is that the center of the graph is `r==0`, however it
would be good to be able to set the center to be at any `r` (with any
value less than the offset clipped).

## [Implementation](#id5)[#](#implementation "Link to this heading")

## [Related Issues](#id6)[#](#related-issues "Link to this heading")

#1730, #1603, #2203, #2133

## [Backward compatibility](#id7)[#](#backward-compatibility "Link to this heading")

## [Alternatives](#id8)[#](#alternatives "Link to this heading")