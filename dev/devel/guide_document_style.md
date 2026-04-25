# Documentation Styling Guidelines[#](#documentation-styling-guidelines "Link to this heading")

> **Template**
> Template for further usage, template belong to matplotlib.

This guide contains best practices for the language and formatting of Matplotlib
documentation.

> **See also**
> * For more information about contributing, see the [Write documentation](https://matplotlib.org/devdocs/devel/document.html#documenting-matplotlib "(in Matplotlib v3.11.0.dev2357+g05b91794a)") section.

## Expository language[#](#expository-language "Link to this heading")

For explanatory writing, the following guidelines are for clear and concise
language use.

### Terminology[#](#terminology "Link to this heading")

There are several key terms in Matplotlib that are standards for
reliability and consistency in documentation. They are not interchangeable.

| Term | Description | Correct | Incorrect |
| --- | --- | --- | --- |
| [`Figure`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure "(in Matplotlib v3.11.0.dev2357+g05b91794a)") | Matplotlib working space for programming. | * **For   Matplotlib   objects**:   Figure,   “The Figure   is the   working   space for   the visual. * **Referring   to class**:   [`Figure`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure "(in Matplotlib v3.11.0.dev2357+g05b91794a)"),   “Methods   within the   [`Figure`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure "(in Matplotlib v3.11.0.dev2357+g05b91794a)")   provide the   visuals.” * **General   language**:   figure,   “Michelle   Kwan is a   famous   figure   skater.” | * “The figure   is the   working   space for   visuals.” * “Methods in   the figure   provide the   visuals.” * “The   [`Figure`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure "(in Matplotlib v3.11.0.dev2357+g05b91794a)")   Four   leglock is   a wrestling   move.” |
| [`Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.11.0.dev2357+g05b91794a)") | Subplots within Figure. Contains plot elements and is responsible for plotting and configuring additional details. | * **For   Matplotlib   objects**:   Axes, “An   Axes is a   subplot   within the   Figure.” * **Referring   to class**:   [`Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.11.0.dev2357+g05b91794a)"),   “Each   [`Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.11.0.dev2357+g05b91794a)") is   specific to   one   Figure.” * **General   language**:   axes, “Both   loggers and   lumberjacks   use axes to   chop wood.”   OR “There   are no   standard   names for   the   coordinates   in the   three   axes.”   (Plural of   axis) | * “The axes   methods   transform   the data.” * “Each   [`Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.11.0.dev2357+g05b91794a)") is   specific to   a Figure.” * “The   musicians   on stage   call their   guitars   Axes.” * “The point   where the   Axes meet   is the   origin of   the   coordinate   system.” |
| [`Artist`](https://matplotlib.org/devdocs/api/artist_api.html#matplotlib.artist.Artist "(in Matplotlib v3.11.0.dev2357+g05b91794a)") | Broad variety of Matplotlib objects that display visuals. | * **For   Matplotlib   objects**:   Artist,   “Artists   display   visuals and   are the   visible   elements   when   rendering a   Figure.” * **Referring   to class**:   [`Artist`](https://matplotlib.org/devdocs/api/artist_api.html#matplotlib.artist.Artist "(in Matplotlib v3.11.0.dev2357+g05b91794a)") ,   “Each   [`Artist`](https://matplotlib.org/devdocs/api/artist_api.html#matplotlib.artist.Artist "(in Matplotlib v3.11.0.dev2357+g05b91794a)")   has   respective   methods and   functions.” * **General   language**:   artist,   “The   artist in   the museum   is from   France.” | * “Configure   the legend   artist with   its   respective   method.” * “There is   an   [`Artist`](https://matplotlib.org/devdocs/api/artist_api.html#matplotlib.artist.Artist "(in Matplotlib v3.11.0.dev2357+g05b91794a)")   for that   visual in   the graph.” * “Some   Artists   became   famous only   by   accident.” |
| [`Axis`](https://matplotlib.org/devdocs/api/axis_api.html#matplotlib.axis.Axis "(in Matplotlib v3.11.0.dev2357+g05b91794a)") | Human-readable single dimensional object of reference marks containing ticks, tick labels, spines, and edges. | * **For   Matplotlib   objects**:   Axis, “The   Axis for   the bar   chart is a   separate   Artist.”   (plural,   Axis   objects) * **Referring   to class**:   [`Axis`](https://matplotlib.org/devdocs/api/axis_api.html#matplotlib.axis.Axis "(in Matplotlib v3.11.0.dev2357+g05b91794a)"),   “The   [`Axis`](https://matplotlib.org/devdocs/api/axis_api.html#matplotlib.axis.Axis "(in Matplotlib v3.11.0.dev2357+g05b91794a)")   contains   respective   XAxis and   YAxis   objects.” * **General   language**:   axis,   “Rotation   around a   fixed axis   is a   special   case of   rotational   motion.” | * “Plot the   graph onto   the axis.” * “Each Axis   is usually   named after   the   coordinate   which is   measured   along it.” * “In some   computer   graphics   contexts,   the   ordinate   [`Axis`](https://matplotlib.org/devdocs/api/axis_api.html#matplotlib.axis.Axis "(in Matplotlib v3.11.0.dev2357+g05b91794a)") may   be oriented   downwards.” |
| Axes interface | Usage pattern in which one calls methods on Axes and Figure (and sometimes other Artist) objects to configure the plot. | * Axes   interface * call   methods on   the Axes /   Figure   object | * explicit   interface * object   oriented * OO-style * OOP |
| pyplot interface | Usage pattern in which one only calls `.pyplot` functions to configure the plot. | * `pyplot`   interface * call   `pyplot`   functions | * implicit   interface * MATLAB like * Pyplot |

### Grammar[#](#grammar "Link to this heading")

#### Subject[#](#subject "Link to this heading")

Use second-person imperative sentences for directed instructions specifying an
action. Second-person pronouns are for individual-specific contexts and
possessive reference.

| Correct | Incorrect |
| --- | --- |
| Install Matplotlib from the source directory using the Python `pip` installer program. Depending on your operating system, you may need additional support. | You can install Matplotlib from the source directory. You can find additional support if you are having trouble with your installation. |

#### Tense[#](#tense "Link to this heading")

Use present simple tense for explanations. Avoid future tense and other modal
or auxiliary verbs when possible.

| Correct | Incorrect |
| --- | --- |
| The fundamental ideas behind Matplotlib for visualization involve taking data and transforming it through functions and methods. | Matplotlib will take data and transform it through functions and methods. They can generate many kinds of visuals. These will be the fundamentals for using Matplotlib. |

#### Voice[#](#voice "Link to this heading")

Write in active sentences. Passive voice is best for situations or conditions
related to warning prompts.

| Correct | Incorrect |
| --- | --- |
| The function `plot` generates the graph. | The graph is generated by the `plot` function. |
| An error message is returned by the function if there are no arguments. | You will see an error message from the function if there are no arguments. |

#### Sentence structure[#](#sentence-structure "Link to this heading")

Write with short sentences using Subject-Verb-Object order regularly. Limit
coordinating conjunctions in sentences. Avoid pronoun references and
subordinating conjunctive phrases.

| Correct | Incorrect |
| --- | --- |
| The `pyplot` module in Matplotlib is a collection of functions. These functions create, manage, and manipulate the current Figure and plotting area. | The `pyplot` module in Matplotlib is a collection of functions which create, manage, and manipulate the current Figure and plotting area. |
| The `plot` function plots data to the respective Axes. The Axes corresponds to the respective Figure. | The `plot` function plots data within its respective Axes for its respective Figure. |
| The implicit approach is a convenient shortcut for generating simple plots. | Users that wish to have convenient shortcuts for generating plots use the implicit approach. |

## Formatting[#](#formatting "Link to this heading")

The following guidelines specify how to incorporate code and use appropriate
formatting for Matplotlib documentation.

### Code[#](#code "Link to this heading")

Matplotlib is a Python library and follows the same standards for
documentation.

#### Comments[#](#comments "Link to this heading")

Examples of Python code have comments before or on the same line.

| Correct | Incorrect |
| --- | --- |
| ``` # Data years = [2006, 2007, 2008]  ``` | ``` years = [2006, 2007, 2008] # Data  ``` |
| ``` years = [2006, 2007, 2008]  # Data  ``` |

#### Outputs[#](#outputs "Link to this heading")

When generating visuals with Matplotlib using `.py` files in examples,
display the visual with `matplotlib.pyplot.show` to display the visual.
Keep the documentation clear of Python output lines.

| Correct | Incorrect |
| --- | --- |
| ``` plt.plot([1, 2, 3], [1, 2, 3]) plt.show()  ``` | ``` plt.plot([1, 2, 3], [1, 2, 3])  ``` |
| ``` fig, ax = plt.subplots() ax.plot([1, 2, 3], [1, 2, 3]) fig.show()  ``` | ``` fig, ax = plt.subplots() ax.plot([1, 2, 3], [1, 2, 3])  ``` |

### reStructuredText[#](#restructuredtext "Link to this heading")

Matplotlib uses reStructuredText Markup for documentation. Sphinx helps to
transform these documents into appropriate formats for accessibility and
visibility.

* [reStructuredText Specifications](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html)
* [Quick Reference Document](https://docutils.sourceforge.io/docs/user/rst/quickref.html)

#### Lists[#](#lists "Link to this heading")

Bulleted lists are for items that do not require sequencing. Numbered lists are
exclusively for performing actions in a determined order.

| Correct | Incorrect |
| --- | --- |
| The example uses three graphs. | The example uses three graphs. |
| * Bar * Line * Pie | 1. Bar 2. Line 3. Pie |
| These four steps help to get started using Matplotlib. | The following steps are important to get started using Matplotlib. |
| 1. Import the Matplotlib library. 2. Import the necessary modules. 3. Set and assign data to work on. 4. Transform data with methods and    functions. | * Import the Matplotlib library. * Import the necessary modules. * Set and assign data to work on. * Transform data with methods and   functions. |

#### Tables[#](#tables "Link to this heading")

Use ASCII tables with reStructuredText standards in organizing content.
Markdown tables and the csv-table directive are not accepted.

| Correct | Incorrect |
| --- | --- |
| | Correct | Incorrect | | --- | --- | | OK | Not OK | | ``` | Correct | Incorrect | | ------- | --------- | | OK      | Not OK    |  ``` |
| ``` +----------+----------+ | Correct  | Incorrect| +==========+==========+ | OK       | Not OK   | +----------+----------+  ``` | ``` .. csv-table::    :header: "correct", "incorrect"    :widths: 10, 10     "OK   ", "Not OK"  ``` |
| ``` ===========  ===========   Correct     Incorrect ===========  =========== OK           Not OK ===========  ===========  ``` |

## Additional resources[#](#additional-resources "Link to this heading")

This style guide is not a comprehensive standard. For a more thorough
reference of how to contribute to documentation, see the links below. These
resources contain common best practices for writing documentation.

* [Python Developer’s Guide](https://devguide.python.org/documenting/#documenting-python)
* [Google Developer Style Guide](https://developers.google.com/style)
* [IBM Style Guide](https://www.oreilly.com/library/view/the-ibm-style/9780132118989/)
* [Red Hat Style Guide](https://stylepedia.net/style/#grammar)