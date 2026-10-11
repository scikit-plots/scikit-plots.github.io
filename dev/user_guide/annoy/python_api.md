# Python API[#](#python-api "Link to this heading")

## Primary classes and helpers[#](#primary-classes-and-helpers "Link to this heading")



`Index` is the normal starting point. The mixins are public for advanced
users constructing compatible wrappers around the same backend, but composing a
custom wrapper also makes you responsible for preserving the backend and
lifecycle assumptions those mixins expect.

## Pickle controls[#](#pickle-controls "Link to this heading")

`PickleMode` and `CompressMode` make persistence policy explicit. Prefer
native Annoy persistence when cross-version Python-object compatibility is not
required.