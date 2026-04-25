> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-annoy-plot-precision-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Precision annoy.AnnoyIndex with examples[#](#precision-annoy-annoyindex-with-examples "Link to this heading")

An example showing the [`AnnoyIndex`](../../modules/generated/scikitplot.annoy.AnnoyIndex.html#scikitplot.annoy.AnnoyIndex "scikitplot.annoy.AnnoyIndex") class.

```
from __future__ import print_function

import random; random.seed(0)
import time

# from annoy import AnnoyIndex
# from scikitplot.annoy import AnnoyIndex
from scikitplot.annoy import Index as AnnoyIndex

try:
    from tqdm.auto import tqdm, trange
except ImportError:
    # Fallback: dummy versions that ignore all args/kwargs
    tqdm = lambda iterable, *args, **kwargs: iterable
    trange = lambda n, *args, **kwargs: range(n)

```

n, f = 1\_000\_000, 100 # 100~2.5GB

```
n, f = 100_000, 100  # 100~0.25GB 256~0.6GB


idx = AnnoyIndex(
    f=f,
    metric='angular',
)
idx.set_seed(0)
for i in trange(n):
    if(i % (n//10) == 0): print(f"{i} / {n} = {1.0 * i / n}")
    # v = []
    # for z in range(f):
    #     v.append(random.gauss(0, 1))
    v = [random.gauss(0, 1) for _ in range(f)]
    idx.add_item(i, v)

idx.build(2 * f)
idx.save('test.annoy')
idx.info()

```
```
/home/circleci/repo/galleries/examples/annoy/plot_precision_script.py:37: UserWarning: seed=0 resets to Annoy's default seed
  idx.set_seed(0)

  0%|          | 0/100000 [00:00<?, ?it/s]0 / 100000 = 0.0

  2%|▏         | 1638/100000 [00:00<00:06, 16370.18it/s]
  3%|▎         | 3317/100000 [00:00<00:05, 16612.19it/s]
  5%|▌         | 5031/100000 [00:00<00:05, 16852.24it/s]
  7%|▋         | 6717/100000 [00:00<00:05, 16769.52it/s]
  8%|▊         | 8416/100000 [00:00<00:05, 16845.24it/s]10000 / 100000 = 0.1

 10%|█         | 10101/100000 [00:00<00:05, 16696.53it/s]
 12%|█▏        | 11771/100000 [00:00<00:05, 16425.46it/s]
 13%|█▎        | 13415/100000 [00:00<00:05, 15651.32it/s]
 15%|█▌        | 15113/100000 [00:00<00:05, 16046.00it/s]
 17%|█▋        | 16799/100000 [00:01<00:05, 16288.99it/s]
 18%|█▊        | 18451/100000 [00:01<00:04, 16356.94it/s]20000 / 100000 = 0.2

 20%|██        | 20091/100000 [00:01<00:04, 16324.56it/s]
 22%|██▏       | 21768/100000 [00:01<00:04, 16456.79it/s]
 23%|██▎       | 23473/100000 [00:01<00:04, 16632.15it/s]
 25%|██▌       | 25179/100000 [00:01<00:04, 16759.34it/s]
 27%|██▋       | 26857/100000 [00:01<00:04, 16331.81it/s]
 29%|██▊       | 28502/100000 [00:01<00:04, 16365.39it/s]30000 / 100000 = 0.3

 30%|███       | 30141/100000 [00:01<00:04, 16254.91it/s]
 32%|███▏      | 31851/100000 [00:01<00:04, 16504.50it/s]
 34%|███▎      | 33523/100000 [00:02<00:04, 16567.35it/s]
 35%|███▌      | 35181/100000 [00:02<00:03, 16499.24it/s]
 37%|███▋      | 36840/100000 [00:02<00:03, 16524.13it/s]
 38%|███▊      | 38493/100000 [00:02<00:03, 16050.91it/s]40000 / 100000 = 0.4

 40%|████      | 40102/100000 [00:02<00:03, 15574.53it/s]
 42%|████▏     | 41664/100000 [00:02<00:03, 15582.90it/s]
 43%|████▎     | 43336/100000 [00:02<00:03, 15914.08it/s]
 45%|████▍     | 44931/100000 [00:02<00:03, 15447.75it/s]
 47%|████▋     | 46575/100000 [00:02<00:03, 15731.18it/s]
 48%|████▊     | 48250/100000 [00:02<00:03, 16029.02it/s]
 50%|████▉     | 49857/100000 [00:03<00:03, 15379.80it/s]50000 / 100000 = 0.5

 51%|█████▏    | 51403/100000 [00:03<00:03, 14323.69it/s]
 53%|█████▎    | 52853/100000 [00:03<00:03, 13944.45it/s]
 54%|█████▍    | 54259/100000 [00:03<00:03, 13960.94it/s]
 56%|█████▌    | 55732/100000 [00:03<00:03, 14178.66it/s]
 57%|█████▋    | 57432/100000 [00:03<00:02, 14990.55it/s]
 59%|█████▉    | 59038/100000 [00:03<00:02, 15300.71it/s]60000 / 100000 = 0.6

 61%|██████    | 60575/100000 [00:03<00:02, 14905.83it/s]
 62%|██████▏   | 62072/100000 [00:03<00:02, 14005.13it/s]
 64%|██████▍   | 63802/100000 [00:04<00:02, 14926.42it/s]
 65%|██████▌   | 65490/100000 [00:04<00:02, 15483.67it/s]
 67%|██████▋   | 67149/100000 [00:04<00:02, 15802.37it/s]
 69%|██████▊   | 68741/100000 [00:04<00:02, 14514.06it/s]70000 / 100000 = 0.7

 70%|███████   | 70220/100000 [00:04<00:02, 14314.35it/s]
 72%|███████▏  | 71861/100000 [00:04<00:01, 14897.41it/s]
 73%|███████▎  | 73368/100000 [00:04<00:01, 14801.43it/s]
 75%|███████▌  | 75091/100000 [00:04<00:01, 15499.70it/s]
 77%|███████▋  | 76689/100000 [00:04<00:01, 15638.27it/s]
 78%|███████▊  | 78341/100000 [00:04<00:01, 15896.88it/s]
 80%|███████▉  | 79937/100000 [00:05<00:01, 14799.45it/s]80000 / 100000 = 0.8

 81%|████████▏ | 81436/100000 [00:05<00:01, 14179.24it/s]
 83%|████████▎ | 82921/100000 [00:05<00:01, 14363.50it/s]
 85%|████████▍ | 84648/100000 [00:05<00:01, 15187.92it/s]
 86%|████████▋ | 86345/100000 [00:05<00:00, 15700.31it/s]
 88%|████████▊ | 88017/100000 [00:05<00:00, 15996.51it/s]
 90%|████████▉ | 89738/100000 [00:05<00:00, 16353.51it/s]90000 / 100000 = 0.9

 91%|█████████▏| 91452/100000 [00:05<00:00, 16584.47it/s]
 93%|█████████▎| 93163/100000 [00:05<00:00, 16738.27it/s]
 95%|█████████▍| 94872/100000 [00:06<00:00, 16842.65it/s]
 97%|█████████▋| 96559/100000 [00:06<00:00, 14956.30it/s]
 98%|█████████▊| 98267/100000 [00:06<00:00, 15539.32it/s]
100%|█████████▉| 99855/100000 [00:06<00:00, 15075.62it/s]
100%|██████████| 100000/100000 [00:06<00:00, 15601.54it/s]

{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'test.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 100000, 'n_trees': 200, 'memory_usage_byte': 500030768, 'memory_usage_mib': 476.8665008544922}

```
```
def plot(idx, y=None, **kwargs):
    import numpy as np
    import matplotlib.pyplot as plt
    import scikitplot.cexternals._annoy._plotting as utils

    single = np.zeros(idx.get_n_items(), dtype=int)
    if y is None:
        double = np.random.uniform(0, 1, idx.get_n_items()).round()

    # single vs double
    fig, ax = plt.subplots(ncols=2, figsize=(12, 5))
    alpha = kwargs.pop("alpha", 0.8)
    y2 = utils.plot_annoy_index(
        idx,
        dims = list(range(idx.f)),
        plot_kwargs={"draw_legend": False},
        ax=ax[0],
    )[0]
    utils.plot_annoy_knn_edges(
        idx,
        y2,
        k=1,
        line_kwargs={"alpha": alpha},
        ax=ax[1],
    )

# idx.unbuild()
# idx.build(10)
plot(idx)

```
![plot precision script](../../_images/sphx_glr_plot_precision_script_001.png)
```
def precision(q):
  limits = [10, 100, 1_000, 10_000]
  k = 10
  prec_n = 10
  prec_sum = {}
  time_sum = {}

  for i in trange(prec_n):
      j = random.randrange(0, n)
      closest = set(q.get_nns_by_item(j, k, n))
      for limit in limits:
          t0 = time.time()
          toplist = q.get_nns_by_item(j, k, limit)
          T = time.time() - t0

          found = len(closest.intersection(toplist))
          hitrate = 1.0 * found / k
          prec_sum[limit] = prec_sum.get(limit, 0.0) + hitrate
          time_sum[limit] = time_sum.get(limit, 0.0) + T

  for limit in limits:
      print('limit: %-9d precision: %6.2f%% avg time: %.6fs'
      % (limit, 100.0 * prec_sum[limit] / (i + 1), time_sum[limit] / (i + 1)))

```
```
q = AnnoyIndex(f, 'angular')
q.set_seed(0)
q.load('test.annoy')
precision(q)

```
```
/home/circleci/repo/galleries/examples/annoy/plot_precision_script.py:111: UserWarning: seed=0 resets to Annoy's default seed
  q.set_seed(0)

  0%|          | 0/10 [00:00<?, ?it/s]
 40%|████      | 4/10 [00:00<00:00, 35.35it/s]
 80%|████████  | 8/10 [00:00<00:00, 35.96it/s]
100%|██████████| 10/10 [00:00<00:00, 34.91it/s]
limit: 10        precision:  11.00% avg time: 0.000248s
limit: 100       precision:  19.00% avg time: 0.000257s
limit: 1000      precision:  37.00% avg time: 0.000811s
limit: 10000     precision:  80.00% avg time: 0.004510s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (3 minutes 51.908 seconds)

[![Launch binder](../../_images/binder_badge_logo.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/annoy/plot_precision_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo.svg)](../../lite/lab/index.html?path=auto_examples/annoy/plot_precision_script.ipynb)

[`Download Jupyter notebook: plot_precision_script.ipynb`](../../_downloads/07d5582f4876eb3715769a9aead8056c/plot_precision_script.ipynb)

[`Download Python source code: plot_precision_script.py`](../../_downloads/c2d2f0a185e42e4309a9e8e17501ce87/plot_precision_script.py)

[`Download zipped: plot_precision_script.zip`](../../_downloads/c67622e005a2e5af616892c9bff66bbd/plot_precision_script.zip)

Related examples

![](../../_images/sphx_glr_plot_simple_script_thumb.png)

[Simple annoy.AnnoyIndex with examples](plot_simple_script.html)

Simple annoy.AnnoyIndex with examples![](../../_images/sphx_glr_plot_annoy_to_NPY_CSV_thumb.png)

[annoy.Index to NPY or CSV with examples](plot_annoy_to_NPY_CSV.html)

annoy.Index to NPY or CSV with examples![](../../_images/sphx_glr_plot_mmap_script_thumb.png)

[Mmap annoy.AnnoyIndex with examples](plot_mmap_script.html)

Mmap annoy.AnnoyIndex with examples![](../../_images/sphx_glr_plot_Annoy_legacy_c_api_thumb.png)

[annoy.Annoy legacy c-api with examples](plot_Annoy_legacy_c_api.html)

annoy.Annoy legacy c-api with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)