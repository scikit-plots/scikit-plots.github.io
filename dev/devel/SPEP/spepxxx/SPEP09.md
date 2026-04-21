# SEP9: Global interaction manager[#](#sep9-global-interaction-manager "Link to this heading")

> **Template**
> Template for further usage, template belong to matplotlib MEPs.

Add a global manager for all user interactivity with artists; make any
artist resizeable, moveable, highlightable, and selectable as desired
by the user.

## [Status](#id1)[#](#status "Link to this heading")

****Discussion****

## [Branches and Pull requests](#id2)[#](#branches-and-pull-requests "Link to this heading")

[dhyams/matplotlib](https://github.com/dhyams/matplotlib/tree/MEP9)

## [Abstract](#id3)[#](#abstract "Link to this heading")

The goal is to be able to interact with matplotlib artists in a very
similar way as drawing programs do. When appropriate, the user should
be able to move, resize, or select an artist that is already on the
canvas. Of course, the script writer is ultimately in control of
whether an artist is able to be interacted with, or whether it is
static.

This code to do this has already been privately implemented and
tested, and would need to be migrated from its current “mixin”
implementation, to a bona-fide part of matplotlib.

The end result would be to have four new keywords available to
matplotlib.artist.Artist: \_moveable\_, \_resizeable\_, \_selectable\_, and
\_highlightable\_. Setting any one of these keywords to True would
activate interactivity for that artist.

In effect, this MEP is a logical extension of event handling in
matplotlib; matplotlib already supports “low level” interactions like
left mouse presses, a key press, or similar. The MEP extends the
support to the logical level, where callbacks are performed on the
artists when certain interactive gestures from the user are detected.

## [Detailed description](#id4)[#](#detailed-description "Link to this heading")

This new functionality would be used to allow the end-user to better
interact with the graph. Many times, a graph is almost what the user
wants, but a small repositioning and/or resizing of components is
necessary. Rather than force the user to go back to the script to
trial-and-error the location, and simple drag and drop would be
appropriate.

Also, this would better support applications that use matplotlib;
here, the end-user has no reasonable access or desire to edit the
underlying source in order to fine-tune a plot. Here, if matplotlib
offered the capability, one could move or resize artists on the canvas
to suit their needs. Also, the user should be able to highlight (with
a mouse over) an artist, and select it with a double-click, if the
application supports that sort of thing. In this MEP, we also want to
support the highlighting and selection natively; it is up to
application to handle what happens when the artist is selected. A
typical handling would be to display a dialog to edit the properties
of the artist.

In the future, as well (this is not part of this MEP), matplotlib
could offer backend-specific property dialogs for each artist, which
are raised on artist selection. This MEP would be a necessary
stepping stone for that sort of capability.

There are currently a few interactive capabilities in matplotlib
(e.g. legend.draggable()), but they tend to be scattered and are not
available for all artists. This MEP seeks to unify the interactive
interface and make it work for all artists.

The current MEP also includes grab handles for resizing artists, and
appropriate boxes drawn when artists are moved or resized.

## [Implementation](#id5)[#](#implementation "Link to this heading")

* Add appropriate methods to the “tree” of artists so that the
  interactivity manager has a consistent interface for the
  interactivity manager to deal with. The proposed methods to add to
  the artists, if they are to support interactivity, are:

  * get\_pixel\_position\_ll(self): get the pixel position of the lower
    left corner of the artist’s bounding box
  * get\_pixel\_size(self): get the size of the artist’s bounding box,
    in pixels
  * set\_pixel\_position\_and\_size(self,x,y,dx,dy): set the new size of
    the artist, such that it fits within the specified bounding box.
* add capability to the backends to 1) provide cursors, since these
  are needed for visual indication of moving/resizing, and 2) provide
  a function that gets the current mouse position
* Implement the manager. This has already been done privately (by
  dhyams) as a mixin, and has been tested quite a bit. The goal would
  be to move the functionality of the manager into the artists so that
  it is in matplotlib properly, and not as a “monkey patch” as I
  currently have it coded.

## [Current summary of the mixin](#id6)[#](#current-summary-of-the-mixin "Link to this heading")

(Note that this mixin is for now just private code, but can be added
to a branch obviously)

InteractiveArtistMixin:

Mixin class to make any generic object that is drawn on a matplotlib
canvas moveable and possibly resizeable. The Powerpoint model is
followed as closely as possible; not because I’m enamoured with
Powerpoint, but because that’s what most people understand. An artist
can also be selectable, which means that the artist will receive the
on\_activated() callback when double clicked. Finally, an artist can
be highlightable, which means that a highlight is drawn on the artist
whenever the mouse passes over. Typically, highlightable artists will
also be selectable, but that is left up to the user. So, basically
there are four attributes that can be set by the user on a per-artist
basis:

* highlightable
* selectable
* moveable
* resizeable

To be moveable (draggable) or resizeable, the object that is the
target of the mixin must support the following protocols:

* get\_pixel\_position\_ll(self)
* get\_pixel\_size(self)
* set\_pixel\_position\_and\_size(self,x,y,sx,sy)

Note that nonresizeable objects are free to ignore the sx and sy
parameters. To be highlightable, the object that is the target of the
mixin must also support the following protocol:

* get\_highlight(self)

Which returns a list of artists that will be used to draw the highlight.

If the object that is the target of the mixin is not an matplotlib
artist, the following protocols must also be implemented. Doing so is
usually fairly trivial, as there has to be an artist **somewhere** that
is being drawn. Typically your object would just route these calls to
that artist.

* get\_figure(self)
* get\_axes(self)
* contains(self,event)
* set\_animated(self,flag)
* draw(self,renderer)
* get\_visible(self)

The following notifications are called on the artist, and the artist
can optionally implement these.

* on\_select\_begin(self)
* on\_select\_end(self)
* on\_drag\_begin(self)
* on\_drag\_end(self)
* on\_activated(self)
* on\_highlight(self)
* on\_right\_click(self,event)
* on\_left\_click(self,event)
* on\_middle\_click(self,event)
* on\_context\_click(self,event)
* on\_key\_up(self,event)
* on\_key\_down(self,event)

The following notifications are called on the canvas, if no
interactive artist handles the event:

* on\_press(self,event)
* on\_left\_click(self,event)
* on\_middle\_click(self,event)
* on\_right\_click(self,event)
* on\_context\_click(self,event)
* on\_key\_up(self,event)
* on\_key\_down(self,event)

The following functions, if present, can be used to modify the
behavior of the interactive object:

* press\_filter(self,event) # determines if the object wants to have
  the press event routed to it
* handle\_unpicked\_cursor() # can be used by the object to set a cursor
  as the cursor passes over the object when it is unpicked.

Supports multiple canvases, maintaining a drag lock, motion notifier,
and a global “enabled” flag per canvas. Supports fixed aspect ratio
resizings by holding the shift key during the resize.

Known problems:

* Zorder is not obeyed during the selection/drag operations. Because
  of the blit technique used, I do not believe this can be fixed. The
  only way I can think of is to search for all artists that have a
  zorder greater then me, set them all to animated, and then redraw
  them all on top during each drag refresh. This might be very slow;
  need to try.
* the mixin only works for wx backends because of two things: 1) the
  cursors are hardcoded, and 2) there is a call to
  wx.GetMousePosition() Both of these shortcomings are reasonably
  fixed by having each backend supply these things.

## [Backward compatibility](#id7)[#](#backward-compatibility "Link to this heading")

No problems with backward compatibility, although once this is in
place, it would be appropriate to obsolete some of the existing
interactive functions (like legend.draggable())

## [Alternatives](#id8)[#](#alternatives "Link to this heading")

None that I know of.