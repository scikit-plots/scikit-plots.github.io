# scikitplot.cython[#](#module-scikitplot.cython "Link to this heading")

## scikitplot.cython[#](#id1 "Link to this heading")

A lightweight runtime Cython development kit with caching, pinning,
garbage collection, and templating support.

[`scikitplot.cython`](#module-scikitplot.cython "scikitplot.cython") enables real-time, in-place (in-situ) generation of
low-level Cython packages and modules for immediate use and testing.

> **See also**
> * <https://github.com/cython/cython>
* <https://cython.readthedocs.io/en/latest/index.html>
* <https://doc.sagemath.org/html/en/reference/misc/sage/misc/cython.html>

****User guide.**** See the [PKG/MOD Realtime-Inplace Generation](../user_guide/cython/index.html#cython-index) section for further details.

## PKG/MOD Builder[#](#pkg-mod-builder "Link to this heading")

|  |  |
| --- | --- |
| [`DEFAULT_COMPILER_DIRECTIVES`](../modules/generated/scikitplot.cython.DEFAULT_COMPILER_DIRECTIVES.html#scikitplot.cython.DEFAULT_COMPILER_DIRECTIVES "scikitplot.cython.DEFAULT_COMPILER_DIRECTIVES") |  |
| [`build_extension_module`](../modules/generated/scikitplot.cython.build_extension_module.html#scikitplot.cython.build_extension_module "scikitplot.cython.build_extension_module") | Compile and import an extension module (module-only convenience wrapper). |
| [`build_extension_module_result`](../modules/generated/scikitplot.cython.build_extension_module_result.html#scikitplot.cython.build_extension_module_result "scikitplot.cython.build_extension_module_result") | Compile and import an extension module, with deterministic caching. |
| [`build_extension_package_from_code_result`](../modules/generated/scikitplot.cython.build_extension_package_from_code_result.html#scikitplot.cython.build_extension_package_from_code_result "scikitplot.cython.build_extension_package_from_code_result") | Compile a **package** of multiple extension modules from in-memory code strings. |
| [`build_extension_package_from_paths_result`](../modules/generated/scikitplot.cython.build_extension_package_from_paths_result.html#scikitplot.cython.build_extension_package_from_paths_result "scikitplot.cython.build_extension_package_from_paths_result") | Compile a **package** of multiple extension modules from existing `.pyx` files. |

## Cache Management[#](#cache-management "Link to this heading")

|  |  |
| --- | --- |
| [`CacheEntry`](../modules/generated/scikitplot.cython.CacheEntry.html#scikitplot.cython.CacheEntry "scikitplot.cython.CacheEntry") | A compiled **module** cache entry. |
| [`PackageCacheEntry`](../modules/generated/scikitplot.cython.PackageCacheEntry.html#scikitplot.cython.PackageCacheEntry "scikitplot.cython.PackageCacheEntry") | A compiled **package** cache entry (multi-module build). |
| [`find_entries_by_name`](../modules/generated/scikitplot.cython.find_entries_by_name.html#scikitplot.cython.find_entries_by_name "scikitplot.cython.find_entries_by_name") | Find module cache entries matching an exact module name. |
| [`find_entry_by_key`](../modules/generated/scikitplot.cython.find_entry_by_key.html#scikitplot.cython.find_entry_by_key "scikitplot.cython.find_entry_by_key") | Find a single **module** cache entry by key. |
| [`find_package_entry_by_key`](../modules/generated/scikitplot.cython.find_package_entry_by_key.html#scikitplot.cython.find_package_entry_by_key "scikitplot.cython.find_package_entry_by_key") | Find a single **package** cache entry by key. |
| [`is_valid_key`](../modules/generated/scikitplot.cython.is_valid_key.html#scikitplot.cython.is_valid_key "scikitplot.cython.is_valid_key") | Return True if `key` is a valid cache key. |
| [`iter_all_entry_dirs`](../modules/generated/scikitplot.cython.iter_all_entry_dirs.html#scikitplot.cython.iter_all_entry_dirs "scikitplot.cython.iter_all_entry_dirs") | Return all cache entry directories whose name is a valid cache key. |
| [`iter_cache_entries`](../modules/generated/scikitplot.cython.iter_cache_entries.html#scikitplot.cython.iter_cache_entries "scikitplot.cython.iter_cache_entries") | List **module** cache entries found under the cache directory. |
| [`iter_package_entries`](../modules/generated/scikitplot.cython.iter_package_entries.html#scikitplot.cython.iter_package_entries "scikitplot.cython.iter_package_entries") | List **package** cache entries found under the cache directory. |
| [`make_cache_key`](../modules/generated/scikitplot.cython.make_cache_key.html#scikitplot.cython.make_cache_key "scikitplot.cython.make_cache_key") | Create a deterministic cache key from a JSON-serializable mapping. |
| [`peek_cache_dir`](../modules/generated/scikitplot.cython.peek_cache_dir.html#scikitplot.cython.peek_cache_dir "scikitplot.cython.peek_cache_dir") | Resolve the cache directory path without creating it. |
| [`read_meta`](../modules/generated/scikitplot.cython.read_meta.html#scikitplot.cython.read_meta "scikitplot.cython.read_meta") | Read `meta.json` from a build directory. |
| [`register_artifact_path`](../modules/generated/scikitplot.cython.register_artifact_path.html#scikitplot.cython.register_artifact_path "scikitplot.cython.register_artifact_path") | Register an existing compiled extension artifact into the cache registry. |
| [`resolve_cache_dir`](../modules/generated/scikitplot.cython.resolve_cache_dir.html#scikitplot.cython.resolve_cache_dir "scikitplot.cython.resolve_cache_dir") | Resolve and create the cache directory. |
| [`runtime_fingerprint`](../modules/generated/scikitplot.cython.runtime_fingerprint.html#scikitplot.cython.runtime_fingerprint "scikitplot.cython.runtime_fingerprint") | Compute a runtime fingerprint for caching correctness. |
| [`source_digest`](../modules/generated/scikitplot.cython.source_digest.html#scikitplot.cython.source_digest "scikitplot.cython.source_digest") | SHA-256 digest of source bytes. |
| [`write_meta`](../modules/generated/scikitplot.cython.write_meta.html#scikitplot.cython.write_meta "scikitplot.cython.write_meta") | Write `meta.json` in the build directory atomically. |

## Custom Compiler Protocol[#](#custom-compiler-protocol "Link to this heading")

|  |  |
| --- | --- |
| [`CustomCompilerProtocol`](../modules/generated/scikitplot.cython.CustomCompilerProtocol.html#scikitplot.cython.CustomCompilerProtocol "scikitplot.cython.CustomCompilerProtocol") | Structural protocol for custom compiler callables. |
| [`CompilerRegistry`](../modules/generated/scikitplot.cython.CompilerRegistry.html#scikitplot.cython.CompilerRegistry "scikitplot.cython.CompilerRegistry") | Thread-unsafe module-level registry of custom compiler callables. |
| [`register_compiler`](../modules/generated/scikitplot.cython.register_compiler.html#scikitplot.cython.register_compiler "scikitplot.cython.register_compiler") | Register a custom compiler in the module-level registry. |
| [`get_compiler`](../modules/generated/scikitplot.cython.get_compiler.html#scikitplot.cython.get_compiler "scikitplot.cython.get_compiler") | Retrieve a registered custom compiler by name. |
| [`list_compilers`](../modules/generated/scikitplot.cython.list_compilers.html#scikitplot.cython.list_compilers "scikitplot.cython.list_compilers") | Return sorted list of registered custom compiler names. |
| [`pure_python_prereqs`](../modules/generated/scikitplot.cython.pure_python_prereqs.html#scikitplot.cython.pure_python_prereqs "scikitplot.cython.pure_python_prereqs") | Check prerequisites pure Python, setuptools only. |
| [`cython_cpp_prereqs`](../modules/generated/scikitplot.cython.cython_cpp_prereqs.html#scikitplot.cython.cython_cpp_prereqs "scikitplot.cython.cython_cpp_prereqs") | Check prerequisites compile C++ via Cython. |
| [`full_stack_prereqs`](../modules/generated/scikitplot.cython.full_stack_prereqs.html#scikitplot.cython.full_stack_prereqs "scikitplot.cython.full_stack_prereqs") | Check prerequisites full stack setuptools, Cython, pybind11, and NumPy. |
| [`pybind11_only_prereqs`](../modules/generated/scikitplot.cython.pybind11_only_prereqs.html#scikitplot.cython.pybind11_only_prereqs "scikitplot.cython.pybind11_only_prereqs") | Check prerequisites pybind11 only. |
| [`c_api_prereqs`](../modules/generated/scikitplot.cython.c_api_prereqs.html#scikitplot.cython.c_api_prereqs "scikitplot.cython.c_api_prereqs") | Check prerequisites own custom C-API. |
| [`pybind11_include`](../modules/generated/scikitplot.cython.pybind11_include.html#scikitplot.cython.pybind11_include "scikitplot.cython.pybind11_include") | Return the pybind11 include directory, or `None` if not installed. |
| [`numpy_include`](../modules/generated/scikitplot.cython.numpy_include.html#scikitplot.cython.numpy_include "scikitplot.cython.numpy_include") | Return the NumPy C-API include directory, or `None` if not installed. |
| [`collect_c_api_sources`](../modules/generated/scikitplot.cython.collect_c_api_sources.html#scikitplot.cython.collect_c_api_sources "scikitplot.cython.collect_c_api_sources") | Collect C/C++ source files from one or more files, directories, or globs. |
| [`collect_header_dirs`](../modules/generated/scikitplot.cython.collect_header_dirs.html#scikitplot.cython.collect_header_dirs "scikitplot.cython.collect_header_dirs") | Collect unique directories that contain C/C++ header files. |
| [`PybindCompiler`](../modules/generated/scikitplot.cython.PybindCompiler.html#scikitplot.cython.PybindCompiler "scikitplot.cython.PybindCompiler") | Built-in custom compiler: pybind11-only projects. |
| [`CApiCompiler`](../modules/generated/scikitplot.cython.CApiCompiler.html#scikitplot.cython.CApiCompiler "scikitplot.cython.CApiCompiler") | Built-in custom compiler: NumPy C-API projects. |

## Cache Management Utilities[#](#cache-management-utilities "Link to this heading")

|  |  |
| --- | --- |
| [`cache_stats`](../modules/generated/scikitplot.cython.cache_stats.html#scikitplot.cython.cache_stats "scikitplot.cython.cache_stats") | Compute cache statistics. |
| [`gc_cache`](../modules/generated/scikitplot.cython.gc_cache.html#scikitplot.cython.gc_cache "scikitplot.cython.gc_cache") | Deterministically garbage-collect cached build entries. |

## Extension Module Loader[#](#extension-module-loader "Link to this heading")

|  |  |
| --- | --- |
| [`import_extension`](../modules/generated/scikitplot.cython.import_extension.html#scikitplot.cython.import_extension "scikitplot.cython.import_extension") | Import an extension module from an explicit artifact path. |
| [`import_extension_from_bytes`](../modules/generated/scikitplot.cython.import_extension_from_bytes.html#scikitplot.cython.import_extension_from_bytes "scikitplot.cython.import_extension_from_bytes") | Import an extension module from raw artifact bytes. |
| [`import_extension_from_path`](../modules/generated/scikitplot.cython.import_extension_from_path.html#scikitplot.cython.import_extension_from_path "scikitplot.cython.import_extension_from_path") | Import an extension module from a filesystem path. |

## Cross-platform Build Lock[#](#cross-platform-build-lock "Link to this heading")

|  |  |
| --- | --- |
| [`build_lock`](../modules/generated/scikitplot.cython.build_lock.html#scikitplot.cython.build_lock "scikitplot.cython.build_lock") | Acquire an exclusive build lock via atomic directory creation. |

## Pins/Aliases Registry[#](#pins-aliases-registry "Link to this heading")

|  |  |
| --- | --- |
| [`list_pins`](../modules/generated/scikitplot.cython.list_pins.html#scikitplot.cython.list_pins "scikitplot.cython.list_pins") | List the current alias→key mappings. |
| [`pin`](../modules/generated/scikitplot.cython.pin.html#scikitplot.cython.pin "scikitplot.cython.pin") | Pin a cache key under a human-friendly alias. |
| [`resolve_pinned_key`](../modules/generated/scikitplot.cython.resolve_pinned_key.html#scikitplot.cython.resolve_pinned_key "scikitplot.cython.resolve_pinned_key") | Resolve an alias to a cache key. |
| [`unpin`](../modules/generated/scikitplot.cython.unpin.html#scikitplot.cython.unpin "scikitplot.cython.unpin") | Remove an alias pin. |

## Build Profile Presets[#](#build-profile-presets "Link to this heading")

|  |  |
| --- | --- |
| [`ProfileDefaults`](../modules/generated/scikitplot.cython.ProfileDefaults.html#scikitplot.cython.ProfileDefaults "scikitplot.cython.ProfileDefaults") | Normalized defaults produced by applying a profile. |
| [`apply_profile`](../modules/generated/scikitplot.cython.apply_profile.html#scikitplot.cython.apply_profile "scikitplot.cython.apply_profile") | Apply a profile with strict precedence rules. |
| [`is_windows`](../modules/generated/scikitplot.cython.is_windows.html#scikitplot.cython.is_windows "scikitplot.cython.is_windows") | Return True if running on Windows. |
| [`resolve_profile`](../modules/generated/scikitplot.cython.resolve_profile.html#scikitplot.cython.resolve_profile "scikitplot.cython.resolve_profile") | Resolve a profile name to deterministic defaults. |

## Public API[#](#public-api "Link to this heading")

|  |  |
| --- | --- |
| [`build_package_from_code`](../modules/generated/scikitplot.cython.build_package_from_code.html#scikitplot.cython.build_package_from_code "scikitplot.cython.build_package_from_code") | Build and import a multi-module extension package and return loaded modules. |
| [`build_package_from_code_result`](../modules/generated/scikitplot.cython.build_package_from_code_result.html#scikitplot.cython.build_package_from_code_result "scikitplot.cython.build_package_from_code_result") | Build and import a multi-module extension package from code strings. |
| [`build_package_from_paths`](../modules/generated/scikitplot.cython.build_package_from_paths.html#scikitplot.cython.build_package_from_paths "scikitplot.cython.build_package_from_paths") | Build and import a multi-module extension package and return loaded modules. |
| [`build_package_from_paths_result`](../modules/generated/scikitplot.cython.build_package_from_paths_result.html#scikitplot.cython.build_package_from_paths_result "scikitplot.cython.build_package_from_paths_result") | Build and import a multi-module extension package from `.pyx` file paths. |
| [`check_build_prereqs`](../modules/generated/scikitplot.cython.check_build_prereqs.html#scikitplot.cython.check_build_prereqs "scikitplot.cython.check_build_prereqs") | Check whether build prerequisites are importable. |
| [`compile_and_load`](../modules/generated/scikitplot.cython.compile_and_load.html#scikitplot.cython.compile_and_load "scikitplot.cython.compile_and_load") | Compile and import a Cython extension module and return the loaded module. |
| [`compile_and_load_result`](../modules/generated/scikitplot.cython.compile_and_load_result.html#scikitplot.cython.compile_and_load_result "scikitplot.cython.compile_and_load_result") | Compile and import a Cython extension module from source text. |
| [`cython_import`](../modules/generated/scikitplot.cython.cython_import.html#scikitplot.cython.cython_import "scikitplot.cython.cython_import") | Compile/import a Cython module from a `.pyx` file and return the loaded module. |
| [`cython_import_all`](../modules/generated/scikitplot.cython.cython_import_all.html#scikitplot.cython.cython_import_all "scikitplot.cython.cython_import_all") | Compile and import all `.pyx` files in a directory. |
| [`cython_import_result`](../modules/generated/scikitplot.cython.cython_import_result.html#scikitplot.cython.cython_import_result "scikitplot.cython.cython_import_result") | Compile/import a Cython module from a `.pyx` file. |
| [`export_cached`](../modules/generated/scikitplot.cython.export_cached.html#scikitplot.cython.export_cached "scikitplot.cython.export_cached") | Export a cache entry directory to a destination folder. |
| [`get_cache_dir`](../modules/generated/scikitplot.cython.get_cache_dir.html#scikitplot.cython.get_cache_dir "scikitplot.cython.get_cache_dir") | Resolve (and create) the cache root directory. |
| [`import_artifact_bytes`](../modules/generated/scikitplot.cython.import_artifact_bytes.html#scikitplot.cython.import_artifact_bytes "scikitplot.cython.import_artifact_bytes") | Import a compiled extension artifact from raw bytes. |
| [`import_artifact_path`](../modules/generated/scikitplot.cython.import_artifact_path.html#scikitplot.cython.import_artifact_path "scikitplot.cython.import_artifact_path") | Import a compiled extension artifact from a path. |
| [`import_cached`](../modules/generated/scikitplot.cython.import_cached.html#scikitplot.cython.import_cached "scikitplot.cython.import_cached") | Import a cached **module** entry and return the loaded module. |
| [`import_cached_by_name`](../modules/generated/scikitplot.cython.import_cached_by_name.html#scikitplot.cython.import_cached_by_name "scikitplot.cython.import_cached_by_name") | Import the newest cached module entry matching `module_name`. |
| [`import_cached_package`](../modules/generated/scikitplot.cython.import_cached_package.html#scikitplot.cython.import_cached_package "scikitplot.cython.import_cached_package") | Import a cached package and return the loaded modules. |
| [`import_cached_package_result`](../modules/generated/scikitplot.cython.import_cached_package_result.html#scikitplot.cython.import_cached_package_result "scikitplot.cython.import_cached_package_result") | Import a cached **package** entry by cache key. |
| [`import_cached_result`](../modules/generated/scikitplot.cython.import_cached_result.html#scikitplot.cython.import_cached_result "scikitplot.cython.import_cached_result") | Import a cached **module** entry by cache key. |
| [`import_pinned`](../modules/generated/scikitplot.cython.import_pinned.html#scikitplot.cython.import_pinned "scikitplot.cython.import_pinned") | Import a pinned alias and return the loaded module(s). |
| [`import_pinned_result`](../modules/generated/scikitplot.cython.import_pinned_result.html#scikitplot.cython.import_pinned_result "scikitplot.cython.import_pinned_result") | Import a pinned alias. |
| [`list_cached`](../modules/generated/scikitplot.cython.list_cached.html#scikitplot.cython.list_cached "scikitplot.cython.list_cached") | List cached **module** entries. |
| [`list_cached_packages`](../modules/generated/scikitplot.cython.list_cached_packages.html#scikitplot.cython.list_cached_packages "scikitplot.cython.list_cached_packages") | List cached **package** entries. |
| [`purge_cache`](../modules/generated/scikitplot.cython.purge_cache.html#scikitplot.cython.purge_cache "scikitplot.cython.purge_cache") | Delete the entire cache directory. |
| [`register_cached_artifact_bytes`](../modules/generated/scikitplot.cython.register_cached_artifact_bytes.html#scikitplot.cython.register_cached_artifact_bytes "scikitplot.cython.register_cached_artifact_bytes") | Register a compiled extension artifact from bytes and import it. |
| [`register_cached_artifact_path`](../modules/generated/scikitplot.cython.register_cached_artifact_path.html#scikitplot.cython.register_cached_artifact_path "scikitplot.cython.register_cached_artifact_path") | Register an existing compiled extension artifact on disk, then import it. |

## Result types[#](#result-types "Link to this heading")

|  |  |
| --- | --- |
| [`BuildResult`](../modules/generated/scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython.BuildResult") | Result of compiling/importing a single Cython extension module. |
| [`CacheGCResult`](../modules/generated/scikitplot.cython.CacheGCResult.html#scikitplot.cython.CacheGCResult "scikitplot.cython.CacheGCResult") | Result of a cache garbage-collection operation. |
| [`CacheStats`](../modules/generated/scikitplot.cython.CacheStats.html#scikitplot.cython.CacheStats "scikitplot.cython.CacheStats") | Cache statistics for the compiled-artifact cache root. |
| [`PackageBuildResult`](../modules/generated/scikitplot.cython.PackageBuildResult.html#scikitplot.cython.PackageBuildResult "scikitplot.cython.PackageBuildResult") | Result of compiling/importing a **package** of extension modules. |

## Security Guards[#](#security-guards "Link to this heading")

|  |  |
| --- | --- |
| [`DEFAULT_SECURITY_POLICY`](../modules/generated/scikitplot.cython.DEFAULT_SECURITY_POLICY.html#scikitplot.cython.DEFAULT_SECURITY_POLICY "scikitplot.cython.DEFAULT_SECURITY_POLICY") | Immutable security policy applied to build inputs before compilation. |
| [`RELAXED_SECURITY_POLICY`](../modules/generated/scikitplot.cython.RELAXED_SECURITY_POLICY.html#scikitplot.cython.RELAXED_SECURITY_POLICY "scikitplot.cython.RELAXED_SECURITY_POLICY") | Immutable security policy applied to build inputs before compilation. |
| [`SecurityError`](../modules/generated/scikitplot.cython.SecurityError.html#scikitplot.cython.SecurityError "scikitplot.cython.SecurityError") | Raised when a build input violates the active [`SecurityPolicy`](../modules/generated/scikitplot.cython.SecurityPolicy.html#scikitplot.cython.SecurityPolicy "scikitplot.cython.SecurityPolicy"). |
| [`SecurityPolicy`](../modules/generated/scikitplot.cython.SecurityPolicy.html#scikitplot.cython.SecurityPolicy "scikitplot.cython.SecurityPolicy") | Immutable security policy applied to build inputs before compilation. |
| [`is_safe_compiler_arg`](../modules/generated/scikitplot.cython.is_safe_compiler_arg.html#scikitplot.cython.is_safe_compiler_arg "scikitplot.cython.is_safe_compiler_arg") | Return `True` when a compiler argument string is safe to pass. |
| [`is_safe_macro_name`](../modules/generated/scikitplot.cython.is_safe_macro_name.html#scikitplot.cython.is_safe_macro_name "scikitplot.cython.is_safe_macro_name") | Return `True` when a C preprocessor macro name is safe to define. |
| [`is_safe_path`](../modules/generated/scikitplot.cython.is_safe_path.html#scikitplot.cython.is_safe_path "scikitplot.cython.is_safe_path") | Return `True` when a filesystem path does not contain traversal sequences. |
| [`validate_build_inputs`](../modules/generated/scikitplot.cython.validate_build_inputs.html#scikitplot.cython.validate_build_inputs "scikitplot.cython.validate_build_inputs") | Validate build inputs against a [`SecurityPolicy`](../modules/generated/scikitplot.cython.SecurityPolicy.html#scikitplot.cython.SecurityPolicy "scikitplot.cython.SecurityPolicy"). |

## Template and workflow assets[#](#template-and-workflow-assets "Link to this heading")

|  |  |
| --- | --- |
| [`TemplateInfo`](../modules/generated/scikitplot.cython.TemplateInfo.html#scikitplot.cython.TemplateInfo "scikitplot.cython.TemplateInfo") | Structured metadata for a template. |
| [`build_package_example`](../modules/generated/scikitplot.cython.build_package_example.html#scikitplot.cython.build_package_example "scikitplot.cython.build_package_example") | Build and import a multi-module package example and return loaded modules. |
| [`build_package_example_result`](../modules/generated/scikitplot.cython.build_package_example_result.html#scikitplot.cython.build_package_example_result "scikitplot.cython.build_package_example_result") | Build and import a multi-module **package example** and return a structured result. |
| [`compile_template`](../modules/generated/scikitplot.cython.compile_template.html#scikitplot.cython.compile_template "scikitplot.cython.compile_template") | Compile and import a Cython template and return the loaded module. |
| [`compile_template_result`](../modules/generated/scikitplot.cython.compile_template_result.html#scikitplot.cython.compile_template_result "scikitplot.cython.compile_template_result") | Compile and import a Cython template and return a structured result. |
| [`copy_workflow`](../modules/generated/scikitplot.cython.copy_workflow.html#scikitplot.cython.copy_workflow "scikitplot.cython.copy_workflow") | Copy a workflow template folder to a destination directory. |
| [`generate_sphinx_template_docs`](../modules/generated/scikitplot.cython.generate_sphinx_template_docs.html#scikitplot.cython.generate_sphinx_template_docs "scikitplot.cython.generate_sphinx_template_docs") | Generate Sphinx `.rst` pages listing templates and their usage. |
| [`get_package_example_path`](../modules/generated/scikitplot.cython.get_package_example_path.html#scikitplot.cython.get_package_example_path "scikitplot.cython.get_package_example_path") | Resolve a package example name to its on-disk folder path. |
| [`get_template_path`](../modules/generated/scikitplot.cython.get_template_path.html#scikitplot.cython.get_template_path "scikitplot.cython.get_template_path") | Resolve a template ID to an on-disk path. |
| [`get_workflow_path`](../modules/generated/scikitplot.cython.get_workflow_path.html#scikitplot.cython.get_workflow_path "scikitplot.cython.get_workflow_path") | Resolve a workflow name to its on-disk folder path. |
| [`list_package_examples`](../modules/generated/scikitplot.cython.list_package_examples.html#scikitplot.cython.list_package_examples "scikitplot.cython.list_package_examples") | List available multi-module package examples. |
| [`list_templates`](../modules/generated/scikitplot.cython.list_templates.html#scikitplot.cython.list_templates "scikitplot.cython.list_templates") | List available templates. |
| [`list_workflows`](../modules/generated/scikitplot.cython.list_workflows.html#scikitplot.cython.list_workflows "scikitplot.cython.list_workflows") | List available workflow template folders. |
| [`load_package_example_metadata`](../modules/generated/scikitplot.cython.load_package_example_metadata.html#scikitplot.cython.load_package_example_metadata "scikitplot.cython.load_package_example_metadata") | Load package example metadata from `package.meta.json`. |
| [`load_template_metadata`](../modules/generated/scikitplot.cython.load_template_metadata.html#scikitplot.cython.load_template_metadata "scikitplot.cython.load_template_metadata") | Load template metadata from an adjacent `*.meta.json` file. |
| [`read_template`](../modules/generated/scikitplot.cython.read_template.html#scikitplot.cython.read_template "scikitplot.cython.read_template") | Read template source text. |
| [`read_template_info`](../modules/generated/scikitplot.cython.read_template_info.html#scikitplot.cython.read_template_info "scikitplot.cython.read_template_info") | Read metadata for a template and return a [`TemplateInfo`](../modules/generated/scikitplot.cython.TemplateInfo.html#scikitplot.cython.TemplateInfo "scikitplot.cython.TemplateInfo"). |
| [`template_root`](../modules/generated/scikitplot.cython.template_root.html#scikitplot.cython.template_root "scikitplot.cython.template_root") | Return the on-disk template root directory. |
| [`workflow_cli_template_path`](../modules/generated/scikitplot.cython.workflow_cli_template_path.html#scikitplot.cython.workflow_cli_template_path "scikitplot.cython.workflow_cli_template_path") | Return the workflow CLI template path. |

## Small utilities[#](#small-utilities "Link to this heading")

|  |  |
| --- | --- |
| [`sanitize`](../modules/generated/scikitplot.cython.sanitize.html#scikitplot.cython.sanitize "scikitplot.cython.sanitize") | Convert an arbitrary string into a valid Python module name. |