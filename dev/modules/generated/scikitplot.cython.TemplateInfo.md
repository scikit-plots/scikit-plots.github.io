# TemplateInfo[#](#templateinfo "Link to this heading")

class scikitplot.cython.TemplateInfo(**template\_id=''**, **path=PosixPath('.')**, **meta\_path=None**, **category=''**, **language=''**, **level=''**, **summary=''**, **description=''**, **requires\_numpy=False**, **requires\_cpp=False**, **demo\_calls=()**, **support\_paths=()**, **extra\_sources=()**, **tags=()**, **schema\_version=1**, **meta=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/829d7a7/scikitplot/cython/_templates_api.py#L64)[#](#scikitplot.cython.TemplateInfo "Link to this definition")
:   Structured metadata for a template.

    All attributes have defaults to keep Sphinx tooling and linkcode resolvers
    robust, even when a template has no metadata file.

    Parameters:
    :   ****template\_id****str
        :   Template identifier (e.g., `"basic_cython/t01_square_int"`).

        ****path****pathlib.Path
        :   Path to the template source file.

        ****meta\_path****pathlib.Path or None
        :   Path to the metadata file if found.

        ****category****str
        :   Category folder (e.g., `"basic_cython"`), if any.

        ****language****str
        :   Template language (e.g., `"cython"` or `"python"`).

        ****level****str
        :   Difficulty or level tag, if present.

        ****summary****str
        :   Short, single-line summary.

        ****description****str
        :   Longer description, if present.

        ****requires\_numpy****bool
        :   Whether template requires NumPy.

        ****requires\_cpp****bool
        :   Whether template requires C++ mode.

        ****demo\_calls****tuple[dict[str, Any], …]
        :   Strictly declared demo calls. Each element should resemble:
            `{"func": "square", "args": [12], "kwargs": {}}`.

        ****support\_paths****tuple[str, …]
        :   Additional source paths to copy into the build directory.

        ****extra\_sources****tuple[str, …]
        :   Extra C/C++ sources to compile and link.

        ****tags****tuple[str, …]
        :   Optional tags for docs/search.

        ****schema\_version****int
        :   Metadata schema version.

        ****meta****Mapping[str, Any]
        :   Raw metadata mapping (full JSON), for advanced use.

    Parameters:
    :   * ****template\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****meta\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****category**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****level**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****summary**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****description**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****requires\_numpy**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****requires\_cpp**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****demo\_calls**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****,** **...****]**)
        * ****support\_paths**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **...****]**)
        * ****extra\_sources**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **...****]**)
        * ****tags**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **...****]**)
        * ****schema\_version**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****meta**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

    category: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.TemplateInfo.category "Link to this definition")
    :   !! processed by numpydoc !!

    demo\_calls: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")], ...][#](#scikitplot.cython.TemplateInfo.demo_calls "Link to this definition")
    :   !! processed by numpydoc !!

    description: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.TemplateInfo.description "Link to this definition")
    :   !! processed by numpydoc !!

    extra\_sources: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...][#](#scikitplot.cython.TemplateInfo.extra_sources "Link to this definition")
    :   !! processed by numpydoc !!

    language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.TemplateInfo.language "Link to this definition")
    :   !! processed by numpydoc !!

    level: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.TemplateInfo.level "Link to this definition")
    :   !! processed by numpydoc !!

    meta: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][#](#scikitplot.cython.TemplateInfo.meta "Link to this definition")
    :   !! processed by numpydoc !!

    meta\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.cython.TemplateInfo.meta_path "Link to this definition")
    :   !! processed by numpydoc !!

    path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[#](#scikitplot.cython.TemplateInfo.path "Link to this definition")
    :   !! processed by numpydoc !!

    requires\_cpp: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.cython.TemplateInfo.requires_cpp "Link to this definition")
    :   !! processed by numpydoc !!

    requires\_numpy: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.cython.TemplateInfo.requires_numpy "Link to this definition")
    :   !! processed by numpydoc !!

    schema\_version: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.cython.TemplateInfo.schema_version "Link to this definition")
    :   !! processed by numpydoc !!

    summary: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.TemplateInfo.summary "Link to this definition")
    :   !! processed by numpydoc !!

    support\_paths: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...][#](#scikitplot.cython.TemplateInfo.support_paths "Link to this definition")
    :   !! processed by numpydoc !!

    tags: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...][#](#scikitplot.cython.TemplateInfo.tags "Link to this definition")
    :   !! processed by numpydoc !!

    template\_id: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.TemplateInfo.template_id "Link to this definition")
    :   !! processed by numpydoc !!