# validate\_labels[#](#validate-labels "Link to this heading")

scikitplot.api.\_utils.validate\_labels(**known\_classes**, **passed\_labels**, **argument\_name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/api/_utils/_helpers.py#L22)[#](#scikitplot.api._utils.validate_labels "Link to this definition")
:   Validates the labels passed into arguments such as `true_labels` or `pred_labels`
    in functions like `plot_confusion_matrix`.

    This function checks for any duplicate labels and ensures that all passed labels
    are within the set of known classes. It raises a `ValueError` if any issues are found.

    Parameters:
    :   ****known\_classes****array-like
        :   The set of classes that are known to appear in the data.

        ****passed\_labels****array-like
        :   The labels that were passed in through the argument to be validated.

        ****argument\_name****str
        :   The name of the argument being validated. Used for error messages.

    Raises:
    :   ValueError
        :   If there are duplicate labels in `passed_labels` or if any labels
            in `passed_labels` are not found in `known_classes`.

    Examples

    ```
    >>> known_classes = ['A', 'B', 'C']
    >>> passed_labels = ['A', 'B']
    >>> import scikitplot as sp
    >>> sp.api._utils.validate_labels(known_classes, passed_labels, 'true_labels')

    ```