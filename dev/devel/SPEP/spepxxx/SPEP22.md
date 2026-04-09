# SEP22: Toolbar rewrite[#](#sep22-toolbar-rewrite "Link to this heading")

> **Template**
> Template for further usage, template belong to matplotlib MEPs.

## [Status](#id3)[#](#status "Link to this heading")

****Progress****

## [Branches and Pull requests](#id4)[#](#branches-and-pull-requests "Link to this heading")

Previous work:

* <https://github.com/matplotlib/matplotlib/pull/1849>
* <https://github.com/matplotlib/matplotlib/pull/2557>
* <https://github.com/matplotlib/matplotlib/pull/2465>

Pull Requests:

* Removing the NavigationToolbar classes
  <https://github.com/matplotlib/matplotlib/pull/2740> ****CLOSED****
* Keeping the NavigationToolbar classes <https://github.com/matplotlib/matplotlib/pull/2759> ****CLOSED****
* Navigation by events: <https://github.com/matplotlib/matplotlib/pull/3652>

## [Abstract](#id5)[#](#abstract "Link to this heading")

The main goal of this MEP is to make it easier to modify (add, change,
remove) the way the user interacts with the figures.

The user interaction with the figure is deeply integrated within the
Canvas and Toolbar. Making extremely difficult to do any modification.

This MEP proposes the separation of this interaction into Toolbar,
Navigation and Tools to provide independent access and
reconfiguration.

This approach will make easier to create and share tools among
users. In the far future, we can even foresee a kind of Marketplace
for `Tool`s where the most popular can be added into the main
distribution.

## [Detailed description](#id6)[#](#detailed-description "Link to this heading")

The reconfiguration of the Toolbar is complex, most of the time it
requires a custom backend.

The creation of custom Tools sometimes interferes with the Toolbar, as
example see <https://github.com/matplotlib/matplotlib/issues/2694> also
the shortcuts are hardcoded and again not easily modifiable
<https://github.com/matplotlib/matplotlib/issues/2699>

The proposed solution is to take the actions out of the `Toolbar` and the
shortcuts out of the `Canvas`. The actions and shortcuts will be in the form
of `Tool`s.

A new class `Navigation` will be the bridge between the events from the
`Canvas` and `Toolbar` and redirect them to the appropriate `Tool`.

At the end the user interaction will be divided into three classes:

* NavigationBase: This class is instantiated for each FigureManager
  and connect the all user interactions with the Tools
* ToolbarBase: This existing class is relegated only as a GUI access
  to Tools.
* ToolBase: Is the basic definition of Tools.

## [Implementation](#id7)[#](#implementation "Link to this heading")

### [ToolBase(object)](#id8)[#](#toolbase-object "Link to this heading")

Tools can have a graphical representation as the `SubplotTool` or not even be
present in the Toolbar as `Quit`.

The `.ToolBase` has the following class attributes for configuration at definition time

* keymap = None: Key(s) to be used to trigger the tool
* description = ‘’: Small description of the tool
* image = None: Image that is used in the toolbar

The following instance attributes are set at instantiation:

* name
* navigation

#### [Methods](#id9)[#](#methods "Link to this heading")

* `trigger(self, event)`: This is the main method of the Tool, it is called
  when the Tool is triggered by:

  * Toolbar button click
  * keypress associated with the Tool Keymap
  * Call to navigation.trigger\_tool(name)
* `set_figure(self, figure)`: Set the figure and navigation attributes
* `destroy(self, *args)`: Destroy the `Tool` graphical interface (if
  exists)

#### [Available Tools](#id10)[#](#available-tools "Link to this heading")

* ToolQuit
* ToolEnableAllNavigation
* ToolEnableNavigation
* ToolToggleGrid
* ToolToggleFullScreen
* ToolToggleYScale
* ToolToggleXScale
* ToolHome
* ToolBack
* ToolForward
* SaveFigureBase
* ConfigureSubplotsBase

### [ToolToggleBase(ToolBase)](#id11)[#](#tooltogglebase-toolbase "Link to this heading")

The `.ToolToggleBase` has the following class attributes for
configuration at definition time

* radio\_group = None: Attribute to group ‘radio’ like tools (mutually
  exclusive)
* cursor = None: Cursor to use when the tool is active

The ****Toggleable**** Tools, can capture keypress, mouse moves, and mouse
button press

#### [Methods](#id12)[#](#id1 "Link to this heading")

* `enable(self, event)`: Called by `.ToolToggleBase.trigger` method
* `disable(self, event)`: Called when the tool is untoggled
* `toggled`: ****Property**** True or False

#### [Available Tools](#id13)[#](#id2 "Link to this heading")

* ToolZoom
* ToolPan

### [NavigationBase](#id14)[#](#navigationbase "Link to this heading")

Defines the following attributes:

* canvas:
* keypresslock: Lock to know if the `canvas` `key_press_event` is
  available and process it
* messagelock: Lock to know if the message is available to write

#### [Methods (intended for the end user)](#id15)[#](#methods-intended-for-the-end-user "Link to this heading")

* `nav_connect(self, s, func)`: Connect to navigation for events
* `nav_disconnect(self, cid)`: Disconnect from navigation event
* `message_event(self, message, sender=None)`: Emit a
  tool\_message\_event event
* `active_toggle(self)`: ****Property**** The currently toggled tools or
  None
* `get_tool_keymap(self, name)`: Return a list of keys that are
  associated with the tool
* `set_tool_keymap(self, name, ``*keys`)``: Set the keys for the given tool
* `remove_tool(self, name)`: Removes tool from the navigation control.
* `add_tools(self, tools)`: Add multiple tools to `Navigation`
* `add_tool(self, name, tool, group=None, position=None)`: Add a tool
  to the `Navigation`
* `tool_trigger_event(self, name, sender=None, canvasevent=None,
  data=None)`: Trigger a tool and fire the event
* `tools`: ****Property**** A dict with available tools with
  corresponding keymaps, descriptions and objects
* `get_tool(self, name)`: Return the tool object

### [ToolbarBase](#id16)[#](#toolbarbase "Link to this heading")

#### [Methods (for backend implementation)](#id17)[#](#methods-for-backend-implementation "Link to this heading")

* `add_toolitem(self, name, group, position, image, description, toggle)`:
  Add a toolitem to the toolbar. This method is a callback from
  `tool_added_event` (emitted by navigation)
* `set_message(self, s)`: Display a message on toolbar or in status bar
* `toggle_toolitem(self, name)`: Toggle the toolitem without firing event.
* `remove_toolitem(self, name)`: Remove a toolitem from the `Toolbar`

## [Backward compatibility](#id18)[#](#backward-compatibility "Link to this heading")

For backward compatibility added ‘navigation’ to the list of values
supported by `rcParams[“toolbar”]` (default: `'toolbar2'`), that is used for `Navigation` classes
instantiation instead of the NavigationToolbar classes

With this parameter, it makes it transparent to anyone using the
existing backends.

[@pelson comment: This also gives us an opportunity to avoid needing
to implement all of this in the same PR - some backends can
potentially exist without the new functionality for a short while (but
it must be done at some point).]