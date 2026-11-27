# coverage\_matrix[#](#coverage-matrix "Link to this heading")

scikitplot.cleanprompt.coverage\_matrix(**policy=None**, **catalog=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_diagnostics.py#L820)[#](#scikitplot.cleanprompt.coverage_matrix "Link to this definition")
:   Return one row per detection kind, derived from the live registries.

    Parameters:
    :   ****policy****RedactionPolicy, optional
        :   Decides each kind’s action. Defaults to
            `DEFAULT_POLICY`.

        ****catalog****Catalog, optional
        :   Supplies the packs. Defaults to the built-in catalog.

    Returns:
    :   tuple of CoverageRow
        :   Sorted by kind.

    Parameters:
    :   * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy") **|** **None**)
        * ****catalog**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") **|** **None**)

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**CoverageRow**](scikitplot.cleanprompt.CoverageRow.html#scikitplot.cleanprompt.CoverageRow "scikitplot.cleanprompt._diagnostics.CoverageRow"), …]

    Notes

    ****User notes.**** `kinds --matrix` prints this, and the user guide’s
    coverage table is generated from it, so neither can drift from what the
    library really does. It says which surfaces **can** find a kind; whether
    they run depends on the packs, kinds and engines a plan selects.

    ****Developer notes (``CP-116``).**** Every column is read from a registry:
    `PATTERNS`, the catalog’s packs,
    `CANONICAL_LABELS` and
    `DEFAULT_ENTITY_LABELS`, the plan’s runtime kinds,
    `SURROGATE_KINDS` and the policy’s actions. No
    optional engine is imported. Columns the registries do not record (a
    locale per kind, a semantic risk) are not invented here.