# Getting Started Guide[#](#getting-started-guide "Link to this heading")

## Overview[#](#overview "Link to this heading")

Scikit-plots provides an easy and effective way to visualize machine learning results. Visualization is a critical aspect of data science, making complex data more understandable and presentation-ready. Scikit-plots helps you generate a variety of plots with minimal effort, turning raw numbers into insightful graphics.

## Why Use Scikit-plots?[#](#why-use-scikit-plots "Link to this heading")

Visualizations can make data analysis more intuitive and impactful. Instead of relying on raw numbers, Scikit-plots enables you to create:

* ****Confusion Matrices****: For assessing classification performance.
* ****Precision-Recall Curves****: To evaluate the trade-off between precision and recall.
* ****ROC Curves****: For visualizing the trade-off between true positive rate and false positive rate.

Scikit-plots is designed to simplify the process of creating these and other plots, helping you focus on interpreting your results rather than getting bogged down in the intricacies of plot customization.

## Key Features[#](#key-features "Link to this heading")

* ****Ease of Use****: Quickly generate high-quality plots with minimal code.
* ****Versatility****: Create a wide range of visualizations for different types of model evaluations.
* ****Integration****: Seamlessly integrates with popular machine learning libraries like Scikit-learn and TensorFlow.

## Getting Started with Scikit-plots[#](#getting-started-with-scikit-plots "Link to this heading")

To start using Scikit-plots, you’ll need to have it installed along with its dependencies. See the [Installation](https://skops.readthedocs.io/en/stable/installation.html#installation "(in skops)") for more details.

Here’s a brief overview of the installation and setup process:

1. ****Install Scikit-plots****:
   - Use pip to install Scikit-plots:

   ```
   >>> pip install scikit-plots

   ```
2. ****Dependencies****:
   - Ensure you have the required libraries installed, including [`matplotlib`](https://matplotlib.org/devdocs/index.html#module-matplotlib "(in Matplotlib v3.12.0.dev283+g91f9a9d16)"), [`numpy`](https://numpy.org/devdocs/reference/index.html#module-numpy "(in NumPy v2.6.dev0)"), [`sklearn`](https://scikit-learn.org/dev/api/sklearn.html#module-sklearn "(in scikit-learn v1.10)"), and [`torch`](https://docs.pytorch.org/docs/stable/torch.html#module-torch "(in PyTorch v2.12)") or [`tf.keras`](https://www.tensorflow.org/api_docs/python/tf/keras "(in TensorFlow v2.8)") (if using TensorFlow models). You can install these using pip as well:

   ```
   >>> pip install matplotlib numpy scikit-learn tensorflow

   ```
3. ****Basic Usage****:
   - After installation, you can start using Scikit-plots to generate plots for your machine learning models. Check out the [Quick Start](quick_start.html#quick-start) page for detailed examples and code snippets to help you get started.

## Critical Notes and Suggestions[#](#critical-notes-and-suggestions "Link to this heading")

* ****Version Compatibility****: Ensure that the versions of Scikit-plots and its dependencies are compatible with each other. Refer to the documentation for compatibility information.
* ****Environment Management****: It is recommended to use a virtual environment (e.g., `venv` or `conda`) to manage dependencies and avoid conflicts with other packages.
* ****Plot Customization****: While Scikit-plots provides default settings for plots, you can further customize the appearance of the plots using Matplotlib’s functionalities.
* ****Performance Considerations****: For large datasets or complex models, be mindful of performance issues. Visualizing very large datasets might require additional optimization or sampling.

## Further Reading[#](#further-reading "Link to this heading")

## Community and Support[#](#community-and-support "Link to this heading")

## Conclusion[#](#conclusion "Link to this heading")

Scikit-plots is an invaluable tool for anyone involved in data science and machine learning. By simplifying the process of creating informative and visually appealing plots, it helps you present your results more effectively and gain deeper insights from your data.

Happy plotting!