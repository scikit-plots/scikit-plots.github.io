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

  1%|▏         | 1271/100000 [00:00<00:07, 12707.95it/s]
  3%|▎         | 2542/100000 [00:00<00:07, 12703.55it/s]
  4%|▍         | 3813/100000 [00:00<00:07, 12622.81it/s]
  5%|▌         | 5076/100000 [00:00<00:07, 12598.01it/s]
  6%|▋         | 6347/100000 [00:00<00:07, 12635.16it/s]
  8%|▊         | 7620/100000 [00:00<00:07, 12664.33it/s]
  9%|▉         | 8889/100000 [00:00<00:07, 12670.30it/s]10000 / 100000 = 0.1

 10%|█         | 10157/100000 [00:00<00:07, 12652.54it/s]
 11%|█▏        | 11425/100000 [00:00<00:06, 12659.84it/s]
 13%|█▎        | 12703/100000 [00:01<00:06, 12694.19it/s]
 14%|█▍        | 13973/100000 [00:01<00:06, 12695.44it/s]
 15%|█▌        | 15243/100000 [00:01<00:06, 12454.95it/s]
 16%|█▋        | 16490/100000 [00:01<00:06, 12373.97it/s]
 18%|█▊        | 17757/100000 [00:01<00:06, 12460.19it/s]
 19%|█▉        | 19024/100000 [00:01<00:06, 12522.37it/s]20000 / 100000 = 0.2

 20%|██        | 20277/100000 [00:01<00:06, 12460.50it/s]
 22%|██▏       | 21524/100000 [00:01<00:06, 12362.20it/s]
 23%|██▎       | 22761/100000 [00:01<00:06, 12060.30it/s]
 24%|██▍       | 23969/100000 [00:01<00:06, 11936.72it/s]
 25%|██▌       | 25164/100000 [00:02<00:06, 11700.28it/s]
 26%|██▋       | 26392/100000 [00:02<00:06, 11867.24it/s]
 28%|██▊       | 27581/100000 [00:02<00:06, 11853.32it/s]
 29%|██▉       | 28804/100000 [00:02<00:05, 11962.25it/s]30000 / 100000 = 0.3

 30%|███       | 30056/100000 [00:02<00:05, 12124.92it/s]
 31%|███▏      | 31296/100000 [00:02<00:05, 12204.79it/s]
 33%|███▎      | 32564/100000 [00:02<00:05, 12345.73it/s]
 34%|███▍      | 33832/100000 [00:02<00:05, 12444.67it/s]
 35%|███▌      | 35077/100000 [00:02<00:05, 12392.45it/s]
 36%|███▋      | 36344/100000 [00:02<00:05, 12474.38it/s]
 38%|███▊      | 37618/100000 [00:03<00:04, 12552.30it/s]
 39%|███▉      | 38874/100000 [00:03<00:04, 12446.22it/s]40000 / 100000 = 0.4

 40%|████      | 40153/100000 [00:03<00:04, 12548.17it/s]
 41%|████▏     | 41428/100000 [00:03<00:04, 12606.82it/s]
 43%|████▎     | 42704/100000 [00:03<00:04, 12650.68it/s]
 44%|████▍     | 43973/100000 [00:03<00:04, 12660.73it/s]
 45%|████▌     | 45240/100000 [00:03<00:04, 12641.83it/s]
 47%|████▋     | 46506/100000 [00:03<00:04, 12647.07it/s]
 48%|████▊     | 47780/100000 [00:03<00:04, 12673.26it/s]
 49%|████▉     | 49050/100000 [00:03<00:04, 12680.24it/s]50000 / 100000 = 0.5

 50%|█████     | 50325/100000 [00:04<00:03, 12700.63it/s]
 52%|█████▏    | 51596/100000 [00:04<00:03, 12691.28it/s]
 53%|█████▎    | 52866/100000 [00:04<00:03, 12687.30it/s]
 54%|█████▍    | 54135/100000 [00:04<00:03, 12682.05it/s]
 55%|█████▌    | 55414/100000 [00:04<00:03, 12713.90it/s]
 57%|█████▋    | 56686/100000 [00:04<00:03, 12707.29it/s]
 58%|█████▊    | 57957/100000 [00:04<00:03, 12700.04it/s]
 59%|█████▉    | 59228/100000 [00:04<00:03, 12648.97it/s]60000 / 100000 = 0.6

 60%|██████    | 60495/100000 [00:04<00:03, 12655.11it/s]
 62%|██████▏   | 61767/100000 [00:04<00:03, 12672.02it/s]
 63%|██████▎   | 63040/100000 [00:05<00:02, 12686.45it/s]
 64%|██████▍   | 64316/100000 [00:05<00:02, 12706.25it/s]
 66%|██████▌   | 65587/100000 [00:05<00:02, 12694.99it/s]
 67%|██████▋   | 66861/100000 [00:05<00:02, 12705.91it/s]
 68%|██████▊   | 68132/100000 [00:05<00:02, 12705.28it/s]
 69%|██████▉   | 69404/100000 [00:05<00:02, 12707.37it/s]70000 / 100000 = 0.7

 71%|███████   | 70678/100000 [00:05<00:02, 12715.72it/s]
 72%|███████▏  | 71950/100000 [00:05<00:02, 12709.66it/s]
 73%|███████▎  | 73221/100000 [00:05<00:02, 12704.89it/s]
 74%|███████▍  | 74498/100000 [00:05<00:02, 12722.83it/s]
 76%|███████▌  | 75775/100000 [00:06<00:01, 12736.19it/s]
 77%|███████▋  | 77049/100000 [00:06<00:01, 12657.88it/s]
 78%|███████▊  | 78315/100000 [00:06<00:01, 12655.14it/s]
 80%|███████▉  | 79581/100000 [00:06<00:01, 12653.47it/s]80000 / 100000 = 0.8

 81%|████████  | 80849/100000 [00:06<00:01, 12657.99it/s]
 82%|████████▏ | 82117/100000 [00:06<00:01, 12662.81it/s]
 83%|████████▎ | 83389/100000 [00:06<00:01, 12677.67it/s]
 85%|████████▍ | 84657/100000 [00:06<00:01, 12675.44it/s]
 86%|████████▌ | 85927/100000 [00:06<00:01, 12682.11it/s]
 87%|████████▋ | 87200/100000 [00:06<00:01, 12693.63it/s]
 88%|████████▊ | 88474/100000 [00:07<00:00, 12705.79it/s]
 90%|████████▉ | 89745/100000 [00:07<00:00, 12701.73it/s]90000 / 100000 = 0.9

 91%|█████████ | 91017/100000 [00:07<00:00, 12705.56it/s]
 92%|█████████▏| 92290/100000 [00:07<00:00, 12711.60it/s]
 94%|█████████▎| 93562/100000 [00:07<00:00, 12702.54it/s]
 95%|█████████▍| 94835/100000 [00:07<00:00, 12708.43it/s]
 96%|█████████▌| 96106/100000 [00:07<00:00, 12707.88it/s]
 97%|█████████▋| 97378/100000 [00:07<00:00, 12710.74it/s]
 99%|█████████▊| 98650/100000 [00:07<00:00, 12708.71it/s]
100%|█████████▉| 99921/100000 [00:07<00:00, 11386.42it/s]
100%|██████████| 100000/100000 [00:07<00:00, 12509.47it/s]

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
 70%|███████   | 7/10 [00:00<00:00, 61.56it/s]
100%|██████████| 10/10 [00:00<00:00, 62.43it/s]
limit: 10        precision:  10.00% avg time: 0.000126s
limit: 100       precision:  16.00% avg time: 0.000111s
limit: 1000      precision:  33.00% avg time: 0.000328s
limit: 10000     precision:  86.00% avg time: 0.001939s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 8.186 seconds)

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