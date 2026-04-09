# Random[#](#random "Link to this heading")

Examples relevant to the [`random`](../../apis/scikitplot.random.html#module-scikitplot.random "scikitplot.random") module.

> **See also**
> * <https://www0.cs.ucl.ac.uk/staff/d.jones/GoodPracticeRNG.pdf>
* [`"Download GoodPracticeRNG.pdf"`](../../_downloads/fe7bdee729a723bd85b65cca0102a0e8/GoodPracticeRNG.pdf).

Examples

```
from scikitplot.random import default_rng, kiss_context
rng = default_rng(42)
data = rng.random(1000)

```

Context manager

```
with default_rng(42) as rng:
   data = rng.random(1000)

with kiss_context(42) as rng:
   data = rng.random(1000)

```

Serialization

```
import pickle
state = pickle.dumps(rng)
restored = pickle.loads(state)

```

JSON export

```
import json
json_str = json.dumps(rng.serialize())
restored = KissGenerator.deserialize(json.loads(json_str))

```