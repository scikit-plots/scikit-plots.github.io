# Release procedure for the astropy core package[#](#release-procedure-for-the-astropy-core-package "Link to this heading")

This page describes the release process for the core astropy package. For the average
coordinated or affiliated package, you can instead check
[these](astropy-package-template.html#simple-release-docs) instructions which will be a lot simpler.

The core package has adopted the following release plan:

* Major releases every year (or longer). These are releases that can introduce breaking API changes, and should be numbered as x.0.0 (e.g., 6.0.0).
* Minor releases every six months in between. These releases should minimize any API changes and focus on adding new features.
* Bugfix releases as needed between minor releases.

In terms of release procedure, there is no difference between major and minor
releases - the main aspect that distinguishes these is the actual set of
changes, which should contain no/little API changes in minor releases. In the
rest of this document we will refer to the lifetime of a major/minor release as
the **feature release** cycle (which lasts six months).

The lifetime of a feature release cycle of the core package is as follows:

* Feature freeze, which consists of creating a release branch
* Release candidates followed by a final release for the first version of the feature release
* Bugfix releases, which can be done multiple times until the next feature release

The instructions on this page follow the lifetime of a feature release cycle
chronologically.

> **Note**
> You may need to replace `upstream` on this page with `astropy` or
whatever remote name you use for the [astropy](https://github.com/astropy/astropy).

## Start of a new release cycle - feature freeze and branching[#](#start-of-a-new-release-cycle-feature-freeze-and-branching "Link to this heading")

As outlined in
[APE2](https://github.com/astropy/astropy-APEs/blob/main/APE2.rst), astropy
core package feature releases occur at regular intervals. The first step in a feature release
cycle is to perform a **feature freeze** which means that we create a new release
branch based on the (at the time) latest developer version, and we then subsequently
no longer add any features to this release branch - only bug fixes, documentation
updates, and so on. New features can then continue to be added in parallel to the `main` branch.

The procedure for the feature freeze is as follows:

1. On the GitHub issue tracker, add a new milestone for the next major version
   and for the next bugfix version, and also create a `backport-v<version>.x`
   label which can be used to label pull requests that should be backported
   to the new release branch. You can then start to move any issues and pull
   requests that you know will not be included in the release to the next milestones.
2. Well in advance of the feature freeze date, advertise to developers when the
   feature freeze will happen and encourage developers to re-milestone pull
   requests to the next version (not the one you are releasing now) if they
   will not be ready in time.
3. Once you are ready to make the release branch, update your local `main` branch to the latest version from GitHub:

   ```
   $ git fetch upstream --tags --prune
   $ git checkout -B main upstream/main

   ```
4. Create a new branch from `main` at the point you want the feature freeze to
   occur:

   ```
   $ git branch v<version>.x

   ```

   Note that you do not yet need to switch to this branch yet - the following steps
   should still be done on `main`.
5. Update the “What’s new?” section of the documentation to include a section for the
   next major version (for example if you are in the process of releasing 6.0.0, you
   would need to create a page for the 6.1.0 release). For instance you can start by copying the latest existing one:

   ```
   $ cp docs/whatsnew/<current_version>.rst docs/whatsnew/<next_version>.rst

   ```

   Note that for these pages we leave out the trailing .0 from the version number
   in the filenames (e.g., `6.1.rst`) since the What’s New applies in principle
   to the whole release cycle.
   You’ll then need to edit `docs/whatsnew/<next_version>.rst`, removing all
   the content but leaving the basic structure. You may also need to
   replace the “by the numbers” numbers with “xxx” as a reminder to update them
   before the next release. Then add the new version to the top of
   `docs/whatsnew/index.rst`, update the reference in `docs/index.rst` and `docs/index_getting_started.rst` to
   point to the that version.
6. Update the “What’s new?” section of the current version you are doing the release for,
   `docs/whatsnew/<current_version>.rst`, and remove all content, replacing it
   with:

   ```
   :orphan:

   `What's New in Astropy <current_version>?
   <https://docs.astropy.org/en/v<current_version.0>/whatsnew/<current_version>.html>`__

   ```

   This is because we want to make sure that links in the previous “What’s new?” pages continue
   to work and reference the original link they referenced at the time of writing.
   Note the trailing .0 in the URL, which is needed because the URL will be
   determined by the git tag.
7. Commit these changes:

   ```
   $ git add docs/whatsnew/<current_version>.rst
   $ git add docs/whatsnew/<next_version>.rst
   $ git add docs/whatsnew/index.rst
   $ git add docs/index.rst
   $ git add docs/index_getting_started.rst
   $ git commit -m "Added <next_version> what's new page and redirect <current_version> what's new page"

   ```
8. Tag this commit using the next major version followed by `.dev`. For example,
   if you have just branched `v6.0.x`, create the `v6.1.0.dev` tag:

   ```
   $ git tag -s "v<next_version>.dev" -m "Back to development: v<next_version>"

   ```
9. Push all of these changes up to GitHub:

   ```
   $ git push upstream v<version>.x:v<version>.x
   $ git push upstream main:main
   $ git push upstream v<next_version>.dev:v<next_version>.dev

   ```
10. Go into the branch protection rules page in the repo settings.
    Add a rule for the new release branch you have just pushed out that only applies to that branch.
    Check the “Require status checks to pass before merging” box.
    Add the name of CI jobs that are required; these should be the same jobs that
    required on `main` before the branching. Click “Save changes” at the bottom when done.
11. Update the “Actual date” column of
    <https://github.com/astropy/astropy/wiki/Release-Calendar> with the current
    date for this version’s feature freeze.
12. Go to [RTD’s Settings](https://readthedocs.org/projects/astropy/versions/)
    and check “Activate” and “Hidden” for the new release branch, which should be
    activated automatically.
13. Inform the Astropy developer community that the branching has occurred.
14. Once the feature freeze has happened, you should go through the PRs labeled
    with `backport-v<prev_version>.x` to see if they must also be labeled with
    the new version backport label.

## Releasing the first feature release candidate[#](#releasing-the-first-feature-release-candidate "Link to this heading")

### Restricting changes to the release branch[#](#restricting-changes-to-the-release-branch "Link to this heading")

This step is optional and could also be done at a later stage in the release process,
but you may want to temporarily restrict who can push/merge pull requests to the
release branch so that someone does not inadvertently push changes to the release
branch while you are in the middle of following release steps. If you wish to do this,
you can go to the core package repository settings, and under ‘Branches’ and ‘Branch
protection rules’ you can then add a rule which restricts who can push to the branch.

### Updating the What’s new and contributors[#](#updating-the-what-s-new-and-contributors "Link to this heading")

Make sure to update the “What’s new”
section with the stats on the number of issues, PRs, and contributors.
Since the What’s New for the feature release is now only present in the release
branch, you should switch to it to, e.g.:

```
$ git checkout v6.0.x

```

To find the statistics and contributors, use the [generate\_releaserst.xsh](https://raw.githubusercontent.com/sunpy/sunpy/main/tools/generate_releaserst.xsh)
script. This requires [xonsh](https://xon.sh/) and [docopt](http://docopt.org/) which you can install with:

```
python -m pip install xonsh docopt requests

```

You should then run the script in the root of the astropy repository as follows:

```
xonsh generate_releaserst.xsh 5.3 v6.0.0.dev \
                              --project-name=astropy \
                              --pretty-project-name=astropy \
                              --pat=<a GitHub personal access token>

```

The first argument should be the last major version (before any bug fix releases
and ignoring the .0 part of the version number, while the second argument should
be the `.dev` tag that was just after the branching of the last major version.
Finally, you will need a GitHub personal access token with default permissions
(no scopes selected).

The output will look similar to:

```
This release of astropy contains 2573 commits in 163 merged pull requests
closing 104 issues from 98 people, 50 of which are first-time contributors
to astropy.

* 2573 commits have been added since 5.3
* 104 issues have been closed since 5.3
* 163 pull requests have been merged since 5.3
* 98 people have contributed since 5.3
* 50 of which are new contributors

The people who have contributed to the code for this release are:

- Name 1 *
- Name 2 *
- Name 3

```

At this point, you will likely need to update the Astropy `.mailmap` file,
which maps contributor emails to names, as there are often contributors who
are not careful about using the same e-mail address for every commit, meaning
that they appear multiple times in the contributor list above, sometimes with
different spelling, and sometimes you may also just see their GitHub username
with no full name.

The easiest way to get a full list of contributors and email addresses is
to do:

```
git shortlog -n -s -e

```

Edit the `.mailmap` file to add entries for new email addresses for already
known contributors (matched to the appropriate canonical name/email address).
You can also try and investigate users with no name to see if you can determine
their full name from other sources - if you do, add a new entry for them in
the `.mailmap` file. Once you have done this, you can re-run the
`generate_releaserst.xsh` script (you will likely need to iterate a few times).
Once you are happy with the output, copy it into the ‘What’s new’ page for
the current release and commit this. E.g.,

```
$ git add docs/whatsnew/6.0.rst
$ git commit -m "Added contributor statistics and names"

```

Push the release branch back to GitHub, e.g.:

```
$ git push upstream v6.0.x

```

Switch to a new branch that tracks the `main` branch and update the
`docs/credits.rst` file to include any new contributors from the above step,
and commit this and the `.mailmap` changes:

```
$ git checkout -b v6.0.0-mailmap-credits upstream/main
$ git add .mailmap
$ git add docs/credits.rst
$ git commit -m "Updated list of contributors and .mailmap file"

```

Open a pull request to merge this into `main` and mark it as requiring backporting to
the release branch.

### Ensure continuous integration and intensive tests pass[#](#ensure-continuous-integration-and-intensive-tests-pass "Link to this heading")

Make sure that the continuous integration services (e.g., GitHub Actions or CircleCI) are passing
for the [astropy](https://github.com/astropy/astropy) branch you are going to release.
Also make sure that the ReadTheDocs build is passing for the release branch.

One of the continuous integration tasks that should be run periodically is the updates to the
IERS tables in `astropy.utils.iers`, so check that the last run from this has been
successfully run and that related pull requests have been merged (and backported if needed).
You can also manually trigger it using its workflow dispatch option.

You may also want to locally run the tests (with remote data on to ensure all
of the tests actually run), using tox to do a thorough test in an isolated
environment:

```
python -m pip install tox --upgrade
tox -e test-alldeps -- --remote-data=any --run-slow --run-hugemem

```

### Additional notes[#](#additional-notes "Link to this heading")

Do not render the changelog with towncrier at this point. This should only be done just before the final
release. However, it is up to the discretion of the release manager whether to
open ‘practice’ pull requests to do this as part of the beta/release candidate
process (but they should not be merged in) - if so the process for rendering the changelog is described
in [Rendering the changelog](#release-procedure-render-changelog).

### Tagging the first release candidate[#](#tagging-the-first-release-candidate "Link to this heading")

Assuming all the CI passes, you should now be ready to do a first release
candidate! Ensure you have a GPG key pair available for when git needs to sign
the tag you create for the release (see e.g.,
[GitHub’s documentation](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
for how to generate a key pair).

Make sure your local release branch is up-to-date with the upstream release
branch, then tag the latest commit with the `-s` option, including an `rc1`
suffix, e.g.:

```
$ git tag -s v6.0.0rc1 -m "Tagging v6.0.0rc1"

```

Push up the tag to the [astropy](https://github.com/astropy/astropy), e.g.:

```
$ git push upstream v6.0.0rc1

```
> **Warning**
> It might be tempting to use the `--tags` argument to `git push`,
but this should **not** be done, as it might push up some unintended tags.

At this point if all goes well, the wheels and sdist will be build
in the release workflow and uploaded to PyPI!

In the event there are any issues with the wheel building for the tag
(which shouldn’t really happen if it was passing for the release branch),
you’ll have to fix whatever the problem is. Make sure you delete the
tag:

```
git tag -d v<version>

```

Make any fixes by adding commits to the release branch (no need to remove
previous commits) e.g. via pull requests to the release branch, backports,
or direct commits on the release branch, as appropriate. Once you are
ready to try and release again, create the tag, then force push the tag
to GitHub to overwrite the previous one.

Once the sdist and wheels are uploaded, the first release candidate is done!

At this point create a new Wiki page under
[Astropy Project Wiki](https://github.com/astropy/astropy/wiki) with the
title “vX.Y RC testing” (replace “X.Y” with the release number) using the
[wiki of a previous RC](https://github.com/astropy/astropy/wiki/v3.2-RC-testing)
as a template. You can now email the user and developer community advertising
the release candidate and including a link to the wiki page to report any
successes and failures.

Additionally, you should update the release calendar by going to
<https://github.com/astropy/astropy/wiki/Release-Calendar> and updating the
“Actual date” column of this version’s release candidate with the current date.

## Releasing subsequent release candidates[#](#releasing-subsequent-release-candidates "Link to this heading")

It is very likely that some issues will be reported with the first release
candidate. Any issues should be fixed via pull requests to the `main` branch
and marked for backporting to the release branch. The process for backporting
fixes is described in [Backporting fixes from main](#release-procedure-bug-fix-backport).

Once you have backported any required fixes, repeat the following steps
you did for the first release candidate:

* [Updating the What’s new and contributors](#release-procedure-update-whatsnew) (this should only involve updating the numbers of issues and so on, as well as potentially adding a few new contributors)
* [Ensure continuous integration and intensive tests pass](#release-procedure-check-ci)

You can then proceed with tagging the second release candidate, as done in
\* [Tagging the first release candidate](#release-procedure-tagging) and replacing `rc1` with `rc2`.

You can potentially repeat this section for a third or even fourth release candidate if needed. Once no major issues
come up with a release candidate, you are ready to proceed to the next section.

## Releasing the final version of the feature release[#](#releasing-the-final-version-of-the-feature-release "Link to this heading")

### Rendering the changelog[#](#rendering-the-changelog "Link to this heading")

We now need to render the changelog with towncrier (21.9.0 or later). Since it
is a good idea to review the changelog and fix any line wrap and other issues,
we do this on a separate branch and open a pull request into the release branch
to allow for easy review. First, create and switch to a new branch based off the
release branch, e.g.:

```
$ git checkout -b v6.0.0-changelog

```

Next, run towncrier and confirm that the fragments can be deleted:

```
towncrier build --version 6.0.0

```

Check the `CHANGES.rst` file and remove any empty sections from the new
changelog section.

Then add and commit those changes with:

```
$ git add CHANGES.rst
$ git commit -m "Finalizing changelog for v<version>"

```

Push to GitHub and open a pull request for merging this into the release branch,
e.g. v6.0.x.

> **Note**
> We render the changelog on the latest release branch and forward-port it
rather than rendering on `main` and backporting, since the latter would
render all news fragments into the changelog rather than only the ones
intended for the e.g. v6.0.x release branch.

### Checking the changelog[#](#checking-the-changelog "Link to this heading")

Scripts are provided at <https://github.com/astropy/astropy-tools/tree/main/pr_consistency>
to check for consistency between milestones, labels, the presence of pull requests
in release branches, and the changelog. Follow the instructions in that repository
to make sure everything is correct for the present release.

### Tagging the final release[#](#tagging-the-final-release "Link to this heading")

Once the changelog pull request is merged, update your release branch to
match the upstream version, then (on the release branch), tag the merge
commit for the changelog changes with `v<version>` - as described in
[Tagging the first release candidate](#release-procedure-tagging) but leaving out the `rc1` suffix, then
push the tag to GitHub and wait for the wheels and sdist to be uploaded to
PyPI.

Congratulations! You have completed the release! Now there are just a few
clean-up tasks to finalize the process.

### Post-Release procedures[#](#post-release-procedures "Link to this heading")

1. Make sure that ReadTheDocs is building the documentation for the version you
   just released. Also verify that the `stable` ReadTheDocs version builds
   correctly for the new version (both should trigger automatically).
2. When releasing a patch release, also set the previous RTD version in the
   release history to “Hidden”. For example when releasing v6.0.2, set
   v6.0.1 to “Hidden”. This prevents the previous releases from
   cluttering the list of versions that users see in the version dropdown
   (the previous versions are still accessible by their URL though).
3. If you have updated the list of contributors during the release, update the
   equivalent list on the Astropy web site at
   <https://github.com/astropy/astropy.github.com>.
4. Cherry-pick the commit rendering the changelog and deleting the fragments and
   open a PR to the astropy **main** branch. Also make sure you cherry-pick the
   commit updating the `.mailmap` and `docs/credits.rst` files to the **main**
   branch in a separate PR.
5. Turn off any branch protection you might have enabled in
   [Restricting changes to the release branch](#release-procedure-restrict-branch).
6. `conda-forge` has a bot that automatically opens
   a PR from a new PyPI (stable) release, which you need to follow up on and
   merge. When the `conda-forge` package is ready, email the Anaconda
   maintainers about the release(s) so they can update the versions in the
   default channels. Typically, you should wait to make sure `conda-forge` and
   possibly `conda` works before sending out the public announcement (so that
   users who want to try out the new version can do so with `conda`).
7. Upload the release to Zenodo by creating a GitHub Release off the GitHub tag.
   Click on the tag in <https://github.com/astropy/astropy/tags> and then click on
   “Create release from tag” on the upper right. The release title is the same as the
   tag. In the description, you can copy and paste a description from the previous
   release, as it should be a one-liner that points to `CHANGES.rst`. When you
   are ready, click “Publish release” (the green button on bottom left).
   A webhook to Zenodo will be activated and the release will appear under
   <https://doi.org/10.5281/zenodo.4670728> . If you encounter problems during this
   step, please contact the Astropy Coordination Committee.
8. Once the release(s) are available on the default `conda` channels, prepare
   the public announcement. For a new feature release, copy the [latest
   announcement](https://github.com/astropy/astropy.github.com/tree/main/announcements) and
   edit it to update the version number and links. Once it is merged, you can
   proceed to send out an email to the `astropy-dev` and Astropy mailing
   lists. For a bugfix release, use the previous announcement as a template.
   You should also coordinate with the rest of the Astropy release team and the
   community engagement coordinators.
9. If this is a feature release, update the release calendar by going to
   <https://github.com/astropy/astropy/wiki/Release-Calendar> and updating the
   “Actual date” column of this version’s release with the date you performed
   the release (probably the date of the tag and PyPI upload).
10. In the main branch, update the [SECURITY.md file in the astropy repo](https://github.com/astropy/astropy/blob/main/SECURITY.md) to include the
    newly released version, and as needed mark older versions as not supported.

## Maintaining Bug Fix Releases[#](#maintaining-bug-fix-releases "Link to this heading")

Astropy releases, as recommended for most Python projects, follows a
<major>.<minor>.<micro> version scheme, where the “micro” version is also
known as a “bug fix” release. Bug fix releases should not change any
user-visible interfaces. They should only fix bugs on the previous major/minor
release and may also refactor internal APIs or include omissions from previous
releases–that is, features that were documented to exist but were accidentally
left out of the previous release. They may also include changes to docstrings
that enhance clarity but do not describe new features (e.g., more examples,
typo fixes, etc).

Bug fix releases are typically managed by maintaining one or more bug fix
branches separate from the main branch (the release procedure below discusses
creating these branches). Typically, whenever an issue is fixed on the Astropy
main branch a decision must be made whether this is a fix that should be
included in the Astropy bug fix release. Usually the answer to this question
is “yes”, though there are some issues that may not apply to the bug fix
branch. For example, it is not necessary to backport a fix to a new feature
that did not exist when the bug fix branch was first created. New features
are never merged into the bug fix branch–only bug fixes; hence the name.

In rare cases a bug fix may be made directly into the bug fix branch without
going into the main branch first. This may occur if a fix is made to a
feature that has been removed or rewritten in the development version and no
longer has the issue being fixed. However, depending on how critical the bug
is it may be worth including in a bug fix release, as some users can be slow to
upgrade to new major/micro versions due to API changes.

Issues are assigned to an Astropy release by way of the Milestone feature in
the GitHub issue tracker. At any given time there are at least two versions
under development: The next major/minor version, and the next bug fix release, for example:
v6.1.0 and v6.0.1. In this case, v6.0.1 is the next bug fix release and all
issues that should include fixes in that release should be assigned that
milestone. Any issues that implement new features would go into the v6.1.0
milestone–this is any work that goes in the main branch that should not
be backported. For a more detailed set of guidelines on using milestones, see
[Using Milestones and Labels](maintainer_workflow.html#milestones-and-labels).

Before going ahead with the release, you should check that all merged pull
requests milestoned for the upcoming release have been correctly backported.
You can find more information on backporting fixes to release branches
in [Backporting fixes from main](#release-procedure-bug-fix-backport).

Once you have backported any required fixes, go through the following steps
in a similar way to the initial feature release:

* [Ensure continuous integration and intensive tests pass](#release-procedure-check-ci)
* [Rendering the changelog](#release-procedure-render-changelog)
* [Checking the changelog](#release-procedure-checking-changelog)

You can then proceed with tagging the bugfix release. Make sure your local
release branch is up-to-date with the upstream release branch, then tag the
latest commit with the `-s` option, e.g:

```
$ git tag -s v6.0.1 -m "Tagging v6.0.1"

```

Push up the tag to the [astropy](https://github.com/astropy/astropy), e.g.:

```
$ git push upstream v6.0.1

```
> **Note**
> It might be tempting to use the `--tags` argument to `git push`,
but this should **not** be done, as it might push up some unintended tags.

At this point if all goes well, the wheels and sdist will be build
in the release workflow and uploaded to PyPI!

In the event there are any issues with the wheel building for the tag
(which shouldn’t really happen if it was passing for the release branch),
you’ll have to fix whatever the problem is. Make sure you delete the
tag locally, e.g.:

```
git tag -d v6.0.1

```

and on GitHub:

```
git push upstream :refs/tags/v6.0.1

```

Make any fixes by adding commits to the release branch (no need to remove
previous commits) e.g. via pull requests to the release branch, backports,
or direct commits on the release branch, as appropriate. Once you are
ready to try and release again, create the tag, then force push the tag
to GitHub to overwrite the previous one.

Once the release is done, follow the [Post-Release procedures](#post-release-procedure).

## Common procedures[#](#common-procedures "Link to this heading")

### Backporting fixes from main[#](#backporting-fixes-from-main "Link to this heading")

> **Note**
> The changelog script in [astropy-tools](https://github.com/astropy/astropy-tools/)
(`pr_consistency` scripts in particular) does not know about minor releases, thus please be careful.
For example, let’s say we have two branches (`main` and `v6.0.x`).
Both 6.0.0 and 6.0.1 releases will come out of the same v6.0.x branch.
If a PR for 6.0.1 is merged into `main` before 6.0.0 is released,
it should not be backported into v6.0.x branch until after 6.0.0 is
released, despite complaining from the aforementioned script.
This situation only arises in a very narrow time frame after 6.0.0
freeze but before its release.

Most pull requests will be backported automatically by a backport bot, which
opens pull requests with the backports against the release branch. Make sure
that any such pull requests are merged in before starting the release process
for a new bugfix release.

In some cases, some pull requests or in some cases direct commits to `main`
will need to be backported manually. This is done using the `git cherry-pick`
command, which applies the diff from a single commit like a patch. For the sake
of example, say the current bug fix branch is ‘v6.0.x’, and that a bug was fixed
in main in a commit `abcd1234`. In order to backport the fix, checkout the
v6.0.x branch (it’s also good to make sure it’s in sync with the [astropy](https://github.com/astropy/astropy))
and cherry-pick the appropriate commit:

```
$ git checkout v6.0.x
$ git pull upstream v6.0.x
$ git cherry-pick abcd1234

```

Sometimes a cherry-pick does not apply cleanly, since the bug fix branch
represents a different line of development. This can be resolved like any
other merge conflict: Edit the conflicted files by hand, and then run
`git commit` and accept the default commit message. If the fix being
cherry-picked has an associated changelog entry in a separate commit make
sure to backport that as well.

What if the issue required more than one commit to fix? There are a few
possibilities for this. The easiest is if the fix came in the form of a
pull request that was merged into the main branch. Whenever GitHub merges
a pull request it generates a merge commit in the main branch. This merge
commit represents the **full** difference of all the commits in the pull request
combined. What this means is that it is only necessary to cherry-pick the
merge commit (this requires adding the `-m 1` option to the cherry-pick
command). For example, if `5678abcd` is a merge commit:

```
$ git checkout v6.0.x
$ git pull upstream v6.0.x
$ git cherry-pick -m 1 5678abcd

```

In fact, because Astropy emphasizes a pull request-based workflow, this is the
**most** common scenario for backporting bug fixes, and the one requiring the
least thought. However, if you’re not dealing with backporting a fix that was
not brought in as a pull request, read on.

> **See also**
> [Merge commits and cherry picks](../guide_git_resources.html#merge-commits-and-cherry-picks) for further explanation of the
cherry-pick command and how it works with merge commits.

If not cherry-picking a merge commit there are still other options for dealing
with multiple commits. The simplest, though potentially tedious, is to
run the cherry-pick command once for each commit in the correct order.
However, as of Git 1.7.2 it is possible to merge a range of commits like so:

```
$ git cherry-pick 1234abcd..56789def

```

This works fine so long as the commits you want to pick are actually congruous
with each other. In most cases this will be the case, though some bug fixes
will involve followup commits that need to back backported as well. Most bug
fixes will have an issues associated with it in the issue tracker, so make sure
to reference all commits related to that issue in the commit message. That way
it’s harder for commits that need to be backported from getting lost.