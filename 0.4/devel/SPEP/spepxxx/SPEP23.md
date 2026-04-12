# SEP23: Multiple Figures per GUI window[#](#sep23-multiple-figures-per-gui-window "Link to this heading")

> **Template**
> Template for further usage, template belong to matplotlib MEPs.

## [Status](#id1)[#](#status "Link to this heading")

****Discussion****

## [Branches and Pull requests](#id2)[#](#branches-and-pull-requests "Link to this heading")

****Previous work****
- <https://github.com/matplotlib/matplotlib/pull/2465> ****To-delete****

## [Abstract](#id3)[#](#abstract "Link to this heading")

Add the possibility to have multiple figures grouped under the same
`~.backend_template.FigureManager`

## [Detailed description](#id4)[#](#detailed-description "Link to this heading")

Under the current structure, every canvas has its own window.

This is and may continue to be the desired method of operation for
most use cases.

Sometimes when there are too many figures open at the same time, it is
desirable to be able to group these under the same window. See [PR #2194](https://github.com/scikit-plots/scikit-plots/pull/2194/).

The proposed solution modifies `.FigureManagerBase` to contain and manage more
than one `Canvas`. The `backend.multifigure` rcParam controls when the
****MultiFigure**** behaviour is desired.

****Note****

It is important to note, that the proposed solution, assumes that the
[MEP22](https://github.com/matplotlib/matplotlib/wiki/Mep22). is
already in place. This is simply because the actual implementation of
the `Toolbar` makes it pretty hard to switch between canvases.

## [Implementation](#id5)[#](#implementation "Link to this heading")

The first implementation will be done in GTK3 using a Notebook as
canvas container.

### [`FigureManagerBase`](#id6)[#](#figuremanagerbase "Link to this heading")

will add the following new methods

* `add_canvas`: To add a canvas to an existing
  `~.backend_template.FigureManager` object
* `remove_canvas`: To remove a canvas from a
  `~.backend_template.FigureManager` object, if it is the last one, it will be
  destroyed
* `move_canvas`: To move a canvas from one `~.backend_template.FigureManager`
  to another.
* `set_canvas_title`: To change the title associated with a specific
  canvas container
* `get_canvas_title`: To get the title associated with a specific
  canvas container
* `get_active_canvas`: To get the canvas that is in the foreground and
  is subject to the gui events. There is no `set_active_canvas`
  because the active canvas, is defined when `show` is called on a
  `Canvas` object.

### [`new_figure_manager`](#id7)[#](#new-figure-manager "Link to this heading")

To control which `~.backend_template.FigureManager` will contain the new
figures, an extra optional parameter **figuremanager** will be added, this
parameter value will be passed to `new_figure_manager_given_figure`.

### [`new_figure_manager_given_figure`](#id8)[#](#new-figure-manager-given-figure "Link to this heading")

* If **figuremanager** parameter is given, this
  `~.backend_template.FigureManager` object will be used instead of creating a
  new one.
* If `rcParams['backend.multifigure']` is True: The last
  `~.backend_template.FigureManager` object will be used instead of creating a
  new one.

### [`NavigationBase`](#id9)[#](#navigationbase "Link to this heading")

Modifies the `NavigationBase` to keep a list of canvases, directing the
actions to the active one.

## [Backward compatibility](#id10)[#](#backward-compatibility "Link to this heading")

For the ****MultiFigure**** properties to be visible, the user has to
activate them directly setting `rcParams['backend.multifigure'] =
True`

It should be backwards compatible for backends that adhere to the
current `.FigureManagerBase` structure even if they have not
implemented the ****MultiFigure**** magic yet.

## [Alternatives](#id11)[#](#alternatives "Link to this heading")

Instead of modifying the `.FigureManagerBase` it could be possible to add
a parallel class, that handles the cases where
`rcParams['backend.multifigure'] = True`. This will warranty that
there won’t be any problems with custom made backends, but also makes
bigger the code, and more things to maintain.