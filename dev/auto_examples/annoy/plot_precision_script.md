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

  2%|▏         | 1745/100000 [00:00<00:05, 17445.86it/s]
  3%|▎         | 3494/100000 [00:00<00:05, 17471.10it/s]
  5%|▌         | 5245/100000 [00:00<00:05, 17486.54it/s]
  7%|▋         | 6994/100000 [00:00<00:05, 17353.89it/s]
  9%|▊         | 8730/100000 [00:00<00:05, 16032.66it/s]10000 / 100000 = 0.1

 10%|█         | 10487/100000 [00:00<00:05, 16524.64it/s]
 12%|█▏        | 12153/100000 [00:00<00:05, 16449.73it/s]
 14%|█▍        | 13892/100000 [00:00<00:05, 16738.66it/s]
 16%|█▌        | 15624/100000 [00:00<00:04, 16916.17it/s]
 17%|█▋        | 17358/100000 [00:01<00:04, 17042.84it/s]
 19%|█▉        | 19124/100000 [00:01<00:04, 17227.04it/s]20000 / 100000 = 0.2

 21%|██        | 20879/100000 [00:01<00:04, 17323.39it/s]
 23%|██▎       | 22633/100000 [00:01<00:04, 17386.79it/s]
 24%|██▍       | 24374/100000 [00:01<00:04, 17284.73it/s]
 26%|██▌       | 26104/100000 [00:01<00:04, 14842.92it/s]
 28%|██▊       | 27825/100000 [00:01<00:04, 15476.92it/s]
 30%|██▉       | 29528/100000 [00:01<00:04, 15906.44it/s]30000 / 100000 = 0.3

 31%|███       | 31219/100000 [00:01<00:04, 16188.74it/s]
 33%|███▎      | 32951/100000 [00:01<00:04, 16512.14it/s]
 35%|███▍      | 34637/100000 [00:02<00:03, 16613.44it/s]
 36%|███▋      | 36384/100000 [00:02<00:03, 16864.26it/s]
 38%|███▊      | 38135/100000 [00:02<00:03, 17054.02it/s]
 40%|███▉      | 39893/100000 [00:02<00:03, 17208.10it/s]40000 / 100000 = 0.4

 42%|████▏     | 41637/100000 [00:02<00:03, 17276.65it/s]
 43%|████▎     | 43400/100000 [00:02<00:03, 17379.76it/s]
 45%|████▌     | 45152/100000 [00:02<00:03, 17419.44it/s]
 47%|████▋     | 46897/100000 [00:02<00:03, 17377.61it/s]
 49%|████▊     | 48637/100000 [00:02<00:03, 15987.35it/s]50000 / 100000 = 0.5

 50%|█████     | 50380/100000 [00:03<00:03, 16392.33it/s]
 52%|█████▏    | 52142/100000 [00:03<00:02, 16744.44it/s]
 54%|█████▍    | 53898/100000 [00:03<00:02, 16981.22it/s]
 56%|█████▌    | 55607/100000 [00:03<00:02, 16892.16it/s]
 57%|█████▋    | 57353/100000 [00:03<00:02, 17057.79it/s]
 59%|█████▉    | 59079/100000 [00:03<00:02, 17116.44it/s]60000 / 100000 = 0.6

 61%|██████    | 60826/100000 [00:03<00:02, 17219.10it/s]
 63%|██████▎   | 62576/100000 [00:03<00:02, 17300.00it/s]
 64%|██████▍   | 64333/100000 [00:03<00:02, 17379.03it/s]
 66%|██████▌   | 66094/100000 [00:03<00:01, 17446.23it/s]
 68%|██████▊   | 67849/100000 [00:04<00:01, 17474.46it/s]
 70%|██████▉   | 69615/100000 [00:04<00:01, 17527.55it/s]70000 / 100000 = 0.7

 71%|███████▏  | 71369/100000 [00:04<00:01, 16988.12it/s]
 73%|███████▎  | 73137/100000 [00:04<00:01, 17188.59it/s]
 75%|███████▍  | 74892/100000 [00:04<00:01, 17293.38it/s]
 77%|███████▋  | 76627/100000 [00:04<00:01, 17308.65it/s]
 78%|███████▊  | 78360/100000 [00:04<00:01, 17287.94it/s]80000 / 100000 = 0.8

 80%|████████  | 80116/100000 [00:04<00:01, 17366.32it/s]
 82%|████████▏ | 81877/100000 [00:04<00:01, 17436.97it/s]
 84%|████████▎ | 83622/100000 [00:04<00:00, 17404.65it/s]
 85%|████████▌ | 85381/100000 [00:05<00:00, 17459.49it/s]
 87%|████████▋ | 87142/100000 [00:05<00:00, 17503.95it/s]
 89%|████████▉ | 88900/100000 [00:05<00:00, 17524.65it/s]90000 / 100000 = 0.9

 91%|█████████ | 90653/100000 [00:05<00:00, 15095.79it/s]
 92%|█████████▏| 92418/100000 [00:05<00:00, 15783.36it/s]
 94%|█████████▍| 94185/100000 [00:05<00:00, 16306.44it/s]
 96%|█████████▌| 95953/100000 [00:05<00:00, 16693.96it/s]
 98%|█████████▊| 97705/100000 [00:05<00:00, 16930.23it/s]
 99%|█████████▉| 99442/100000 [00:05<00:00, 17056.22it/s]
100%|██████████| 100000/100000 [00:05<00:00, 16903.41it/s]

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
 60%|██████    | 6/10 [00:00<00:00, 57.03it/s]
100%|██████████| 10/10 [00:00<00:00, 57.43it/s]
limit: 10        precision:  10.00% avg time: 0.000148s
limit: 100       precision:  16.00% avg time: 0.000132s
limit: 1000      precision:  33.00% avg time: 0.000386s
limit: 10000     precision:  86.00% avg time: 0.002158s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 14.688 seconds)

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