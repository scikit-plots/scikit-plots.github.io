# Getting started[#](#getting-started "Link to this heading")

For direct arrays, the KDS functions are the shortest path:

```
from scikitplot.decile.kds import decile_table

table = decile_table(y_true, y_score, change_deciles=10)

```

For model/dataset workflows, `ModelPlotPy` prepares comparable plot
input and the top-level `plot_*` functions render response, gain, lift, profit
and ROI views.

The score passed to a binary decile analysis should represent the probability or
ranking score for the class you intend to treat as positive. A perfectly drawn
plot with the wrong class column is still wrong analysis.