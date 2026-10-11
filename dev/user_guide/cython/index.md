# Runtime Cython compilation[#](#runtime-cython-compilation "Link to this heading")

`scikitplot.cython` is a runtime native-code build service: it validates
caller-supplied Cython source, resolves a toolchain, builds in a bounded staging
area, publishes deterministic cache entries, and imports the resulting
extension.

> **Important**
> Compiling caller-supplied Cython means compiling executable native code. The
security policy reduces accidental or disallowed build inputs; it is not a
sandbox for hostile source code. Only compile code you are willing to execute
with the current process privileges.
Getting started

Compile and load one small Cython module through the public runtime service.

[Getting started](getting_started.html#cython-getting-started)Trust and security

Understand executable-code trust, validation policy, and build budgets.

[Trust and security](trust_and_security.html#cython-trust-and-security)Build, cache, and import

Follow keys, locks, staging, atomic publication, and transactional import.

[Build, cache, and import](build_cache_import.html#cython-build-cache-import)Profiles and toolchains

Inspect compiler/runtime capability before selecting a profile.

[Profiles and toolchains](profiles_and_toolchains.html#cython-profiles-and-toolchains)Packages and templates

Build multi-module packages and use validated template/workflow assets.

[Packages, templates, and workflows](packages_templates_workflows.html#cython-packages-templates-workflows)Cache, pins, and GC

Operate executable cache artifacts without violating coordination rules.

[Cache, pins, and garbage collection](cache_pins_gc.html#cython-cache-pins-gc)Python API

Use stability tiers and structured result objects.

[Python API](python_api.html#cython-python-api)Troubleshooting

Diagnose compiler, security, timeout, cache, and platform failures.

[Troubleshooting](troubleshooting.html#cython-troubleshooting)

## Template reference[#](#template-reference "Link to this heading")

See [Cython templates](_templates/templates_index.html) for the existing shipped template reference.

## Examples[#](#examples "Link to this heading")

See [Cython](../../auto_examples/cython/index.html#cython-examples) for executable examples that accompany this guide.