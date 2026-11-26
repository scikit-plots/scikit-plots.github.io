# get\_path[#](#get-path "Link to this heading")

scikitplot.utils.\_path.get\_path(**\***, **filename=None**, **ext=None**, **file\_path=None**, **subfolder=None**, **add\_timestamp=False**, **return\_parts=False**, **overwrite=True**, **verbose=False**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/utils/_path.py#L818)[#](#scikitplot.utils._path.get_path "Link to this definition")
:   Generate a full file path for saving result images, ensuring the target directory exists.

    Parameters:
    :   ****filename****str, optional
        :   Base name of the image file. Defaults to ‘plot\_image’.

        ****ext****str, optional, default=None
        :   File extension (e.g., ‘.png’, ‘.jpg’).
            Defaults to try to find `filename` if not fallback to ‘.png’.

        ****file\_path****str, optional
        :   Directory path to save the image.
            Defaults to the current working directory.

        ****subfolder****str, optional
        :   Optional subdirectory inside the main path.

        ****add\_timestamp****bool, optional, default=False
        :   Whether to append a timestamp to the filename.
            Default is False.

        ****overwrite****bool, optional, default=True
        :   If False and a file exists, auto-increments the filename to avoid overwriting.

        ****return\_parts****bool, optional
        :   If True, returns (full\_path, file\_path, filename) instead of just the full path.

        ****verbose****bool, optional
        :   If True, prints the final save path.

    Returns:
    :   str or tuple
        :   The full file path, or a tuple (full\_path, file\_path, filename) if return\_parts=True.

    Raises:
    :   ValueError
        :   If the provided file extension is not supported.