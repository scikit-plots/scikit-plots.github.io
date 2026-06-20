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

  1%|▏         | 1349/100000 [00:00<00:07, 13483.71it/s]
  3%|▎         | 2698/100000 [00:00<00:07, 13472.83it/s]
  4%|▍         | 4046/100000 [00:00<00:07, 13427.33it/s]
  5%|▌         | 5391/100000 [00:00<00:07, 13431.94it/s]
  7%|▋         | 6739/100000 [00:00<00:06, 13448.39it/s]
  8%|▊         | 8084/100000 [00:00<00:06, 13441.52it/s]
  9%|▉         | 9429/100000 [00:00<00:06, 13443.09it/s]10000 / 100000 = 0.1

 11%|█         | 10774/100000 [00:00<00:06, 13443.82it/s]
 12%|█▏        | 12125/100000 [00:00<00:06, 13464.16it/s]
 13%|█▎        | 13472/100000 [00:01<00:06, 13429.09it/s]
 15%|█▍        | 14815/100000 [00:01<00:06, 13420.19it/s]
 16%|█▌        | 16158/100000 [00:01<00:06, 13419.12it/s]
 18%|█▊        | 17506/100000 [00:01<00:06, 13435.47it/s]
 19%|█▉        | 18850/100000 [00:01<00:06, 13433.79it/s]20000 / 100000 = 0.2

 20%|██        | 20197/100000 [00:01<00:05, 13442.09it/s]
 22%|██▏       | 21542/100000 [00:01<00:05, 13340.20it/s]
 23%|██▎       | 22889/100000 [00:01<00:05, 13377.83it/s]
 24%|██▍       | 24241/100000 [00:01<00:05, 13418.71it/s]
 26%|██▌       | 25594/100000 [00:01<00:05, 13449.80it/s]
 27%|██▋       | 26940/100000 [00:02<00:05, 13442.54it/s]
 28%|██▊       | 28285/100000 [00:02<00:05, 13376.42it/s]
 30%|██▉       | 29631/100000 [00:02<00:05, 13399.40it/s]30000 / 100000 = 0.3

 31%|███       | 30974/100000 [00:02<00:05, 13408.21it/s]
 32%|███▏      | 32316/100000 [00:02<00:05, 13410.11it/s]
 34%|███▎      | 33658/100000 [00:02<00:04, 13340.38it/s]
 35%|███▍      | 34993/100000 [00:02<00:04, 13304.57it/s]
 36%|███▋      | 36341/100000 [00:02<00:04, 13355.63it/s]
 38%|███▊      | 37694/100000 [00:02<00:04, 13404.96it/s]
 39%|███▉      | 39045/100000 [00:02<00:04, 13434.80it/s]40000 / 100000 = 0.4

 40%|████      | 40396/100000 [00:03<00:04, 13455.87it/s]
 42%|████▏     | 41742/100000 [00:03<00:04, 13434.47it/s]
 43%|████▎     | 43092/100000 [00:03<00:04, 13452.72it/s]
 44%|████▍     | 44440/100000 [00:03<00:04, 13458.90it/s]
 46%|████▌     | 45786/100000 [00:03<00:04, 13270.07it/s]
 47%|████▋     | 47127/100000 [00:03<00:03, 13309.66it/s]
 48%|████▊     | 48470/100000 [00:03<00:03, 13344.38it/s]
 50%|████▉     | 49822/100000 [00:03<00:03, 13395.26it/s]50000 / 100000 = 0.5

 51%|█████     | 51170/100000 [00:03<00:03, 13417.88it/s]
 53%|█████▎    | 52524/100000 [00:03<00:03, 13451.84it/s]
 54%|█████▍    | 53875/100000 [00:04<00:03, 13467.49it/s]
 55%|█████▌    | 55222/100000 [00:04<00:03, 13442.70it/s]
 57%|█████▋    | 56571/100000 [00:04<00:03, 13456.67it/s]
 58%|█████▊    | 57922/100000 [00:04<00:03, 13471.67it/s]
 59%|█████▉    | 59270/100000 [00:04<00:03, 13412.52it/s]60000 / 100000 = 0.6

 61%|██████    | 60616/100000 [00:04<00:02, 13423.94it/s]
 62%|██████▏   | 61959/100000 [00:04<00:02, 13419.99it/s]
 63%|██████▎   | 63304/100000 [00:04<00:02, 13428.87it/s]
 65%|██████▍   | 64649/100000 [00:04<00:02, 13434.37it/s]
 66%|██████▌   | 66001/100000 [00:04<00:02, 13457.45it/s]
 67%|██████▋   | 67347/100000 [00:05<00:02, 13429.57it/s]
 69%|██████▊   | 68690/100000 [00:05<00:02, 13429.56it/s]70000 / 100000 = 0.7

 70%|███████   | 70033/100000 [00:05<00:02, 13420.87it/s]
 71%|███████▏  | 71388/100000 [00:05<00:02, 13457.84it/s]
 73%|███████▎  | 72734/100000 [00:05<00:02, 13456.98it/s]
 74%|███████▍  | 74092/100000 [00:05<00:01, 13491.56it/s]
 75%|███████▌  | 75442/100000 [00:05<00:01, 13486.19it/s]
 77%|███████▋  | 76791/100000 [00:05<00:01, 13429.85it/s]
 78%|███████▊  | 78142/100000 [00:05<00:01, 13451.23it/s]
 79%|███████▉  | 79496/100000 [00:05<00:01, 13476.26it/s]80000 / 100000 = 0.8

 81%|████████  | 80844/100000 [00:06<00:01, 13463.66it/s]
 82%|████████▏ | 82191/100000 [00:06<00:01, 13452.92it/s]
 84%|████████▎ | 83537/100000 [00:06<00:01, 13446.51it/s]
 85%|████████▍ | 84885/100000 [00:06<00:01, 13456.20it/s]
 86%|████████▌ | 86232/100000 [00:06<00:01, 13459.43it/s]
 88%|████████▊ | 87583/100000 [00:06<00:00, 13472.84it/s]
 89%|████████▉ | 88931/100000 [00:06<00:00, 13452.47it/s]90000 / 100000 = 0.9

 90%|█████████ | 90277/100000 [00:06<00:00, 13453.97it/s]
 92%|█████████▏| 91629/100000 [00:06<00:00, 13471.89it/s]
 93%|█████████▎| 92981/100000 [00:06<00:00, 13485.87it/s]
 94%|█████████▍| 94335/100000 [00:07<00:00, 13500.90it/s]
 96%|█████████▌| 95686/100000 [00:07<00:00, 13473.46it/s]
 97%|█████████▋| 97034/100000 [00:07<00:00, 13468.58it/s]
 98%|█████████▊| 98386/100000 [00:07<00:00, 13483.71it/s]
100%|█████████▉| 99735/100000 [00:07<00:00, 12117.50it/s]
100%|██████████| 100000/100000 [00:07<00:00, 13365.79it/s]

{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'test.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 100000, 'n_trees': 200, 'memory_usage_byte': 499984128, 'memory_usage_mib': 476.822021484375}

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
 70%|███████   | 7/10 [00:00<00:00, 60.75it/s]
100%|██████████| 10/10 [00:00<00:00, 61.88it/s]
limit: 10        precision:  10.00% avg time: 0.000131s
limit: 100       precision:  16.00% avg time: 0.000111s
limit: 1000      precision:  33.00% avg time: 0.000332s
limit: 10000     precision:  86.00% avg time: 0.001985s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (1 minutes 59.875 seconds)

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