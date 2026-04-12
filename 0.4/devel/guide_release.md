# Release Guidelines[#](#release-guidelines "Link to this heading")

> **Template**
> Template for further usage, template belong to matplotlib.
> **This document is only relevant for Matplotlib release managers.**
> A guide for developers who are doing a Matplotlib release.

## Versioning Scheme[#](#versioning-scheme "Link to this heading")

Matplotlib follows the [Intended Effort Versioning (EffVer)](https://jacobtomlinson.dev/effver/)
versioning scheme: **macro.meso.micro**.

**macro**
:   A release that we expect a large effort from our users to upgrade to. The v1 to v2 transition
    included a complete overhaul of the default styles and the v2 to v3 transition involved
    dropping support for Python 2.

    Future macro versions would include changes of a comparable scale that can not be done
    incrementally in meso releases.

**meso**
:   A release that we expect some effort from our users to upgrade to. We target a
    **Meso** release every 6 months. These release are primarily intended to release
    new features to our users, however they also contain intentional feature deprecations and
    removals per [our policy](guide_code_api_ver_change.html#deprecation-guidelines).

**micro**
:   A release that we expect users to require little to no effort to upgrade to. Per
    our [Backport strategy](guide_pr.html#backport-strategy) we only backport bug fixes to the maintenance branch.
    We expect minimal impact on users other than possibly breaking work arounds to a
    fixed bug or [bugs being used as features](https://xkcd.com/1172/).

    These are released as-needed, but typically every 1-2 months between meso releases.

## Making the release branch[#](#making-the-release-branch "Link to this heading")

> **Note**
> This assumes that a read-only remote for the canonical repository is
`remote` and a read/write remote is `DANGER`

When a new meso release (vX.Y.0) is approaching, a new release branch must be made.
When precisely this should happen is up to the release manager, but this point is where
most new features intended for the meso release are merged and you are entering a
feature freeze (i.e. newly implemented features will be going into vX.Y+1).
This does not necessarily mean that no further changes will be made prior to release,
just that those changes will be made using the backport system.

For an upcoming `v3.7.0` release, first create the branch:

```
git switch main
git pull
git switch -c v3.7.x
git push DANGER v3.7.x

```

Update the `v3.7.0` milestone so that the description reads:

```
New features and API changes

on-merge: backport to v3.7.x

```

Micro versions should instead read:

```
Bugfixes and docstring changes

on-merge: backport to v3.7.x

```

Check all active milestones for consistency. Older milestones should also backport
to higher meso versions (e.g. `v3.6.3` and `v3.6-doc` should backport to both
`v3.6.x` and `v3.7.x` once the `v3.7.x` branch exists and while PR backports are
still targeting `v3.6.x`)

Create the milestone for the next-next meso release (i.e. `v3.9.0`, as `v3.8.0`
should already exist). While most active items should go in the next meso release,
this milestone can help with longer term planning, especially around deprecation
cycles.

## Testing[#](#testing "Link to this heading")

We use [GitHub Actions](https://github.com/matplotlib/matplotlib/actions)
for continuous integration. When preparing for a release, the final tagged
commit should be tested locally before it is uploaded:

```
pytest -n 8 .

```

In addition the following test should be run and manually inspected:

```
python tools/memleak.py agg 1000 agg.pdf

```

Run the User Acceptance Tests for the NBAgg and ipympl backends:

```
jupyter notebook lib/matplotlib/backends/web_backend/nbagg_uat.ipynb

```

For ipympl, restart the kernel, add a cell for `%matplotlib widget` and do
not run the cell with `matplotlib.use('nbagg')`. Tests which check
`connection_info`, use `reshow`, or test the OO interface are not expected
to work for `ipympl`.

## GitHub statistics[#](#github-statistics "Link to this heading")

We automatically extract GitHub issue, PRs, and authors from GitHub via the API. To
prepare this list:

1. Archive the existing GitHub statistics page.

   1. Copy the current `doc/users/github_stats.rst` to
      `doc/users/prev_whats_new/github_stats_X.Y.Z.rst`.
   2. Change the link target at the top of the file.
   3. Remove the “Previous GitHub Stats” section at the end.

   For example, when updating from v3.7.0 to v3.7.1:

   ```
   cp doc/users/github_stats.rst doc/users/prev_whats_new/github_stats_3.7.0.rst
   $EDITOR doc/users/prev_whats_new/github_stats_3.7.0.rst
   # Change contents as noted above.
   git add doc/users/prev_whats_new/github_stats_3.7.0.rst

   ```
2. Re-generate the updated stats:

   ```
   python tools/github_stats.py --since-tag v3.7.0 --milestone=v3.7.1 \
       --project 'matplotlib/matplotlib' --links > doc/users/github_stats.rst

   ```
3. Review and commit changes. Some issue/PR titles may not be valid reST (the most
   common issue is `*` which is interpreted as unclosed markup). Also confirm that
   `codespell` does not find any issues.

> **Note**
> Make sure you authenticate against the GitHub API. If you do not, you will get
blocked by GitHub for going over the API rate limits. You can authenticate in one of
two ways:

* using the `keyring` package; `pip install keyring` and then when
  running the stats script, you will be prompted for user name and password,
  that will be stored in your system keyring, or,
* using a personal access token; generate a new token [on this GitHub page](https://github.com/settings/tokens) with the `repo:public_repo`
  scope and place the token in `~/.ghoauth`.

## Update and validate the docs[#](#update-and-validate-the-docs "Link to this heading")

### Merge `*-doc` branch[#](#merge-doc-branch "Link to this heading")

Merge the most recent ‘doc’ branch (e.g., `v3.7.0-doc`) into the branch you
are going to tag on and delete the doc branch on GitHub.

### Update supported versions in Security Policy[#](#update-supported-versions-in-security-policy "Link to this heading")

When making macro or meso releases, update the supported versions in the Security
Policy in `SECURITY.md`.

For meso version release update the table in `SECURITY.md` to specify that the
two most recent meso releases in the current macro version series are supported.

For a macro version release update the table in `SECURITY.md` to specify that the
last meso version in the previous macro version series is still supported. Dropping
support for the last version of a macro version series will be handled on an ad-hoc
basis.

### Update release notes[#](#update-release-notes "Link to this heading")

#### What’s new[#](#what-s-new "Link to this heading")

**Only needed for macro and meso releases. Bugfix releases should not have new
features.**

Merge the contents of all the files in `doc/users/next_whats_new/` into a single
file `doc/users/prev_whats_new/whats_new_X.Y.0.rst` and delete the individual
files.

#### API changes[#](#api-changes "Link to this heading")

**Primarily needed for macro and meso releases. We may sometimes have API
changes in micro releases.**

Merge the contents of all the files in `doc/api/next_api_changes/` into a single
file `doc/api/prev_api_changes/api_changes_X.Y.Z.rst` and delete the
individual files.

#### Release notes TOC[#](#release-notes-toc "Link to this heading")

Update `doc/users/release_notes.rst`:

* For macro and meso releases add a new section

  ```
  X.Y
  ===
  .. toctree::
      :maxdepth: 1

      prev_whats_new/whats_new_X.Y.0.rst
      ../api/prev_api_changes/api_changes_X.Y.0.rst
      prev_whats_new/github_stats_X.Y.0.rst

  ```
* For micro releases add the GitHub stats and (if present) the API changes to
  the existing X.Y section

  ```
  ../api/prev_api_changes/api_changes_X.Y.Z.rst
  prev_whats_new/github_stats_X.Y.Z.rst

  ```

#### Update version switcher[#](#update-version-switcher "Link to this heading")

Update `doc/_static/switcher.json`:

* If a micro release, `X.Y.Z`, no changes are needed.
* If a meso release, `X.Y.0`, change the name of `name: X.Y+1 (dev)`
  and `name: X.Y (stable)` as well as adding a new version for the previous
  stable (`name: X.Y-1`).

### Verify that docs build[#](#verify-that-docs-build "Link to this heading")

Finally, make sure that the docs build cleanly:

```
make -Cdoc O=-j$(nproc) html latexpdf

```

After the docs are built, check that all of the links, internal and external, are still
valid. We use `linkchecker` for this:

```
pip install linkchecker
pushd doc/build/html
linkchecker index.html --check-extern
popd

```

Address any issues which may arise. The internal links are checked on Circle CI, so this
should only flag failed external links.

## Create release commit and tag[#](#create-release-commit-and-tag "Link to this heading")

To create the tag, first create an empty commit with a very terse set of the release
notes in the commit message:

```
git commit --allow-empty

```

and then create a signed, annotated tag with the same text in the body message:

```
git tag -a -s v3.7.0

```

which will prompt you for your GPG key password and an annotation. For pre-releases it
is important to follow [****PEP 440****](https://peps.python.org/pep-0440/) so that the build artifacts will sort correctly in
PyPI.

To prevent issues with any down-stream builders which download the tarball from GitHub
it is important to move all branches away from the commit with the tag [[1]](#id2):

```
git commit --allow-empty

```

Finally, push the tag to GitHub:

```
git push DANGER v3.7.x v3.7.0

```

Congratulations, the scariest part is done!
This assumes the release branch has already been made.
Usually this is done at the time of feature freeze for a meso release (which often
coincides with the last micro release of the previous meso version)

[[1](#id1)]

The tarball that is provided by GitHub is produced using [git archive](https://git-scm.com/docs/git-archive).
We use [setuptools\_scm](https://github.com/pypa/setuptools_scm) which uses a format string in
`lib/matplotlib/_version.py` to have `git` insert a
list of references to exported commit (see
`.gitattributes` for the configuration). This string is
then used by `setuptools_scm` to produce the correct version,
based on the git tag, when users install from the tarball.
However, if there is a branch pointed at the tagged commit,
then the branch name will also be included in the tarball.
When the branch eventually moves, anyone who checked the hash
of the tarball before the branch moved will have an incorrect
hash.

To generate the file that GitHub does use:

```
git archive v3.7.0 -o matplotlib-3.7.0.tar.gz --prefix=matplotlib-3.7.0/

```

If this is a final release, also create a ‘doc’ branch (this is not
done for pre-releases):

```
git branch v3.7.0-doc
git push DANGER v3.7.0-doc

```

Update (or create) the `v3.7-doc` milestone.
The description should include the instruction for meeseeksmachine to backport changes
with the `v3.7-doc` milestone to both the `v3.7.x` branch and the `v3.7.0-doc` branch:

```
Documentation changes (.rst files and examples)

on-merge: backport to v3.7.x
on-merge: backport to v3.7.0-doc

```

Check all active milestones for consistency. Older doc milestones should also backport to
higher meso versions (e.g. `v3.6-doc` should backport to both `v3.6.x` and `v3.7.x`
if the `v3.7.x` branch exists)

## Release management / DOI[#](#release-management-doi "Link to this heading")

Via the [GitHub UI](https://github.com/matplotlib/matplotlib/releases), turn the
newly pushed tag into a release. If this is a pre-release remember to mark it as such.

For final releases, also get the DOI from [Zenodo](https://zenodo.org/) (which will
automatically produce one once the tag is pushed). Add the DOI post-fix and version to
the dictionary in `tools/cache_zenodo_svg.py` and run the script.

This will download the new SVG to `doc/_static/zenodo_cache/postfix.svg` and
edit `doc/project/citing.rst`. Commit the new SVG, the change to
`tools/cache_zenodo_svg.py`, and the changes to `doc/project/citing.rst`
to the VER-doc branch and push to GitHub.

```
git checkout v3.7.0-doc
$EDITOR tools/cache_zenodo_svg.py
python tools/cache_zenodo_svg.py
git commit -a
git push DANGER v3.7.0-doc:v3.7.0-doc

```

## Building binaries[#](#building-binaries "Link to this heading")

We distribute macOS, Windows, and many Linux wheels as well as a source tarball via
PyPI. Most builders should trigger automatically once the tag is pushed to GitHub:

* Windows, macOS and manylinux wheels are built on GitHub Actions. Builds are triggered
  by the GitHub Action defined in `.github/workflows/cibuildwheel.yml`, and wheels
  will be available as artifacts of the build. Both a source tarball and the wheels will
  be automatically uploaded to PyPI once all of them have been built.
* The auto-tick bot should open a pull request into the [conda-forge feedstock](https://github.com/conda-forge/matplotlib-feedstock). Review and merge (if you
  have the power to).

> **Warning**
> Because this is automated, it is extremely important to bump all branches away from
the tag as discussed in [Create release commit and tag](#release-tag).

## Manually uploading to PyPI[#](#manually-uploading-to-pypi "Link to this heading")

> **Note**
> As noted above, the GitHub Actions workflow should build and upload source tarballs
and wheels automatically. If for some reason, you need to upload these artifacts
manually, then follow the instructions in this section.

Once you have collected all of the wheels (expect this to take a few hours), generate
the tarball:

```
git checkout v3.7.0
git clean -xfd
python -m build --sdist

```

and copy all of the wheels into `dist` directory. First, check that the dist files
are OK:

```
twine check dist/*

```

and then use `twine` to upload all of the files to PyPI

```
twine upload -s dist/matplotlib*tar.gz
twine upload dist/*whl

```

Congratulations, you have now done the second scariest part!

## Build and deploy documentation[#](#build-and-deploy-documentation "Link to this heading")

To build the documentation you must have the tagged version installed, but
build the docs from the `ver-doc` branch. An easy way to arrange this is:

```
pip install matplotlib
pip install -r requirements/doc/doc-requirements.txt
git checkout v3.7.0-doc
git clean -xfd
make -Cdoc O="-t release -j$(nproc)" html latexpdf LATEXMKOPTS="-silent -f"

```

which will build both the HTML and PDF version of the documentation.

The built documentation exists in the [matplotlib.github.com](https://github.com/matplotlib/matplotlib.github.com/) repository.
Pushing changes to main automatically updates the website.

The documentation is organized in subdirectories by version. The latest stable release
is symlinked from the `stable` directory. The documentation for current main is
built on Circle CI and pushed to the [devdocs](https://github.com/matplotlib/devdocs/) repository. These are available at
[matplotlib.org/devdocs](https://matplotlib.org/devdocs/).

Assuming you have this repository checked out in the same directory as
matplotlib

```
cd ../matplotlib.github.com
cp -a ../matplotlib/doc/build/html 3.7.0
rm 3.7.0/.buildinfo
cp ../matplotlib/doc/build/latex/Matplotlib.pdf 3.7.0

```

which will copy the built docs over. If this is a final release, link the
`stable` subdirectory to the newest version:

```
rm stable
ln -s 3.7.0 stable

```

You will also need to edit `sitemap.xml` and `versions.html` to include
the newly released version. Now commit and push everything to GitHub

```
git add *
git commit -a -m 'Updating docs for v3.7.0'
git push DANGER main

```

Congratulations you have now done the third scariest part!

If you have access, clear the CloudFlare caches.

It typically takes about 5-10 minutes for the website to process the push and update the
live web page (remember to clear your browser cache).

## Merge up changes to main[#](#merge-up-changes-to-main "Link to this heading")

After a release is done, the changes from the release branch should be merged into the
`main` branch. This is primarily done so that the released tag is on the main branch
so `git describe` (and thus `setuptools-scm`) has the most current tag.
Secondarily, changes made during release (including removing individualized release
notes, fixing broken links, and updating the version switcher) are bubbled up to
`main`.

Git conflicts are very likely to arise, though aside from changes made directly to the
release branch (mostly as part of the release), they should be relatively-easily resolved
by using the version from `main`. This is not a universal rule, and care should be
taken to ensure correctness:

```
git switch main
git pull
git switch -c merge_up_v3.7.0
git merge v3.7.x
# resolve conflicts
git merge --continue

```

Due to branch protections for the `main` branch, this is merged via a standard pull
request, though the PR cleanliness status check is expected to fail. The PR should not
be squashed because the intent is to merge the branch histories.

## Publicize this release[#](#publicize-this-release "Link to this heading")

After the release is published to PyPI and conda, it should be announced
through our communication channels:

* Send a short version of the release notes and acknowledgments to all the [Mailing lists](https://matplotlib.org/devdocs/devel/communication_guide.html#mailing-lists "(in Matplotlib v3.11.0.dev2286+ge6cab33bb)")
* Post highlights and link to [What’s new](https://matplotlib.org/devdocs/release/release_notes.html#release-notes "(in Matplotlib v3.11.0.dev2286+ge6cab33bb)") on the
  active [social media accounts](https://matplotlib.org/devdocs/devel/communication_guide.html#social-media "(in Matplotlib v3.11.0.dev2286+ge6cab33bb)")
* Add a release announcement to the “News” section of
  [matplotlib.org](https://github.com/matplotlib/mpl-brochure-site) by editing
  `docs/body.html`. Link to the auto-generated announcement discourse post,
  which is in [Announcements > matplotlib-announcements](https://discourse.matplotlib.org/c/announce/matplotlib-announce/10).

## Conda packages[#](#conda-packages "Link to this heading")

The Matplotlib project itself does not release conda packages. In particular,
the Matplotlib release manager is not responsible for conda packaging.

For information on the packaging of Matplotlib for conda-forge see
<https://github.com/conda-forge/matplotlib-feedstock>.