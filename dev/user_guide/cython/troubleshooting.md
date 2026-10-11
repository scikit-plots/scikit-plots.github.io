# Troubleshooting[#](#troubleshooting "Link to this heading")

## Compiler or header missing[#](#compiler-or-header-missing "Link to this heading")

Start with capability/prerequisite inspection. Installing Cython alone is not
enough to guarantee a native compiler and compatible Python headers.

## Security rejection[#](#security-rejection "Link to this heading")

Treat a `SecurityError` as a policy decision. Do not switch globally to
the relaxed policy simply to make one build pass; narrow the requested build or
isolate it appropriately.

## Timeout or excessive compiler output[#](#timeout-or-excessive-compiler-output "Link to this heading")

Adjust `BuildBudget` only after checking whether the build is genuinely
large or stuck. The bounded diagnostic tail is intentionally not the full log.

## Repository snapshot notes[#](#repository-snapshot-notes "Link to this heading")

The maintenance snapshot records open release-evidence issues involving a
checked-in `__pycache__` and order-dependent setuptools/distutils test
pollution. Those are maintenance/release facts, not a reason for applications
to bypass the cache or security model.