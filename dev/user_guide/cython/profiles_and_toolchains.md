# Profiles and toolchains[#](#profiles-and-toolchains "Link to this heading")

Profiles are named build defaults; capabilities describe what the current
runtime can actually support. Keep those concepts separate.

Useful inspection functions include:

* `platform_capabilities`;
* `runtime_capabilities`;
* `resolved_toolchain`;
* `compiler_capabilities`;
* `list_compilers`; and
* `api_stability` / `list_api`.

An advertised profile does not guarantee that a compiler, Python headers,
Cython, NumPy headers, pybind11, or other optional prerequisites are installed.
Capability checks should drive error messages and CI skips; they should not
silently downgrade a requested native feature.