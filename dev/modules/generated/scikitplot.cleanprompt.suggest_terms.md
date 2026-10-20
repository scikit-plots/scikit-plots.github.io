# suggest\_terms[#](#suggest-terms "Link to this heading")

scikitplot.cleanprompt.suggest\_terms(**text**, **result=None**, **min\_tokens=1**, **max\_suggestions=40**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_diagnostics.py#L481)[#](#scikitplot.cleanprompt.suggest_terms "Link to this definition")
:   Offer candidate terms the active detectors did not claim.

    Parameters:
    :   ****text****str
        :   The original text.

        ****result****RedactionResult, optional
        :   A completed redaction. Anything already redacted is excluded, so the
            list only ever contains things still in the clear.

        ****min\_tokens****int, default=1
        :   Least number of capitalised words a candidate must have. `2` narrows
            to multi-word names such as `"Mustafa Kemal"`; `1` also offers
            single words such as `"Turkey"`.

        ****max\_suggestions****int, default=40
        :   Most candidates returned, ordered by frequency then first appearance.

    Returns:
    :   tuple of Suggestion
        :   Candidates for a human to accept or ignore. ****Nothing here is
            redacted.****

    Raises:
    :   TypeError
        :   If `text` is not a string.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****result**** (**RedactionResult** **|** **None**)
        * ****min\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_suggestions**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Suggestion](scikitplot.cleanprompt.Suggestion.html#scikitplot.cleanprompt.Suggestion "scikitplot.cleanprompt.Suggestion"), …]

    Notes

    ****User notes.**** Accepting a suggestion adds it as an exact term, so the
    redaction stays precise. This is how to handle names when the `ner` tier
    is not installed: look at the list, tick what matters, and those terms are
    then matched literally.

    ****Developer notes.**** Deliberately high-recall and deliberately advisory.
    Recall matters because a missed candidate is never shown to the user at all;
    precision matters less because every candidate is reviewed by a person
    before anything happens to it. Sentence-opening function words are dropped
    because offering “The” and “This” trains people to stop reading the list.

    Examples

    Try it in your browser!
    ```
    >>> [s.text for s in suggest_terms("Ada Lovelace met Charles Babbage.")]
    ['Ada Lovelace', 'Charles Babbage']

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases