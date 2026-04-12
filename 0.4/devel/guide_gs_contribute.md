# Getting Started Contributing Guidelines[#](#getting-started-contributing-guidelines "Link to this heading")

> **Template**
> Template for further usage, template belong to matplotlib.

You’ve discovered a bug or something else you want to change
in scikit-plots — excellent!

You’ve worked out a way to fix it — even better!

You want to tell us about it — best of all!

Below, you can find a number of ways to contribute, and how to connect with the
scikit-plots community.

## Ways to contribute[#](#ways-to-contribute "Link to this heading")

Do I really have something to contribute to scikit-plots?[#](#do-i-really-have-something-to-contribute-to-scikit-plots? "Link to this dropdown")

100% yes! There are so many ways to contribute to our community. Take a look
at the following sections to learn more.

There are a few typical new contributor profiles:

* ****You are a scikit-plots user, and you see a bug, a potential improvement, or
  something that annoys you, and you can fix it.****

  You can search our issue tracker for an existing issue that describes your problem or
  open a new issue to inform us of the problem you observed and discuss the best approach
  to fix it. If your contributions would not be captured on GitHub (social media,
  communication, educational content), you can also reach out to us on [gitter](https://gitter.im/matplotlib/matplotlib),
  [Discourse](https://discourse.scikit-plots.org/) or attend any of our [community
  meetings](https://scientific-python.org/calendars).
* ****You are not a regular scikit-plots user but a domain expert: you know about
  visualization, 3D plotting, design, technical writing, statistics, or some
  other field where scikit-plots could be improved.****

  Awesome — you have a focus on a specific application and domain and can
  start there. In this case, maintainers can help you figure out the best
  implementation; open an issue or pull request with a starting point, and we’ll
  be happy to discuss technical approaches.

  If you prefer, you can use the [GitHub functionality for “draft” pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft)
  and request early feedback on whatever you are working on, but you should be
  aware that maintainers may not review your contribution unless it has the
  “Ready to review” state on GitHub.
* ****You are new to scikit-plots, both as a user and contributor, and want to start
  contributing but have yet to develop a particular interest.****

  Having some previous experience or relationship with the library can be very
  helpful when making open-source contributions. It helps you understand why
  things are the way they are and how they **should** be. Having first-hand
  experience and context is valuable both for what you can bring to the
  conversation (and given the breadth of scikit-plots’s usage, there is a good
  chance it is a unique context in any given conversation) and make it easier to
  understand where other people are coming from.

  Understanding the entire codebase is a long-term project, and nobody expects
  you to do this right away. If you are determined to get started with
  scikit-plots and want to learn, going through the basic functionality,
  choosing something to focus on (3d, testing, documentation, animations, etc.)
  and gaining context on this area by reading the issues and pull requests
  touching these subjects is a reasonable approach.

### Code[#](#code "Link to this heading")

You want to implement a feature or fix a bug or help with maintenance - much
appreciated! Our library source code is found in:

* Python library code: `lib/`
* C-extension code: `src/`
* Tests: `lib/matplotlib/tests/`

Because many people use and work on Matplotlib, we have guidelines for keeping
our code consistent and mitigating the impact of changes.

* [Code Style and Writing Guidelines](guide_code_style_write.html#coding-guidelines)
* [API guidelines](https://matplotlib.org/devdocs/devel/api_changes.html#api-changes "(in Matplotlib v3.11.0.dev2286+ge6cab33bb)")
* [Pull Request Guidelines](guide_pr.html#pr-guidelines)

Code is contributed through pull requests, so we recommend that you start at
[Start a pull request](#how-to-pull-request) If you get stuck, please reach out on the
[Contributor incubator](#contributor-incubator)

### Documentation[#](#documentation "Link to this heading")

You, as an end-user of Matplotlib can make a valuable contribution because you can
more clearly see the potential for improvement than a core developer. For example,
you can:

* Fix a typo
* Clarify a docstring
* Write or update an [example plot](https://matplotlib.org/devdocs/gallery/index.html#gallery "(in Matplotlib v3.11.0.dev2286+ge6cab33bb)")
* Write or update a comprehensive [tutorial](https://matplotlib.org/devdocs/tutorials/index.html#tutorials "(in Matplotlib v3.11.0.dev2286+ge6cab33bb)")

Our code is documented inline in the source code files in `matplotlib/lib`.
Our website structure mirrors our folder structure, meaning that a narrative
document’s URL roughly corresponds to its location in our folder structure:

using the library

* `galleries/plot_types/`
* `users/getting_started/`
* `galleries/user_explain/`
* `galleries/tutorials/`
* `galleries/examples/`
* `doc/api/`

information about the library

* `./install/`
* `./project/`
* `./devel/`
* `./project/index.rst`
* `./project/faq.rst`

Other documentation is generated from the following external sources:

* matplotlib.org homepage: <https://github.com/matplotlib/mpl-brochure-site>
* cheat sheets: <https://github.com/matplotlib/cheatsheets>
* third party packages: <https://github.com/matplotlib/mpl-third-party>

Instructions and guidelines for contributing documentation are found in:

* [Documentation Writing Guide](guide_document_write.html)
* [Documentation Styling Guide](guide_document_style.html)
* [Documentation Tagging Guide](guide_document_tag.html)

Documentation is contributed through pull requests, so we recommend that you start
at [Start a pull request](#how-to-pull-request). If that feels intimidating, we encourage you to
[open an issue](https://github.com/matplotlib/matplotlib/issues/new?assignees=&labels=Documentation&projects=&template=documentation.yml&title=%5BDoc%5D%3A+) describing what improvements you would make. If you get stuck,
please reach out on the [Contributor incubator](#contributor-incubator)

### Triage[#](#triage "Link to this heading")

We appreciate your help keeping the [issue tracker](https://github.com/matplotlib/matplotlib/issues)
organized because it is our centralized location for feature requests,
bug reports, tracking major projects, and discussing priorities. Some examples of what
we mean by triage are:

* labeling issues and pull requests
* verifying bug reports
* debugging and resolving issues
* linking to related issues, discussion, and external work

Our triage process is discussed in detail in [Bug Triaging and Issue Curation Guidelines](guide_triage.html#bug-triaging).

If you have any questions about the process, please reach out on the
[Contributor incubator](#contributor-incubator)

### Community[#](#community "Link to this heading")

Matplotlib’s community is built by its members, if you would like to help out
see our [Community management guide](https://matplotlib.org/devdocs/devel/communication_guide.html#communications-guidelines "(in Matplotlib v3.11.0.dev2286+ge6cab33bb)").

It helps us if you spread the word: reference the project from your blog
and articles or link to it from your website!

If Matplotlib contributes to a project that leads to a scientific publication,
please cite us following the [Citing scikit-plots Guidelines](../project/citing.html) guidelines.

If you have developed an extension to Matplotlib, please consider adding it to our
[third party package](https://github.com/matplotlib/mpl-third-party) list.

## Restrictions on Generative AI Usage[#](#restrictions-on-generative-ai-usage "Link to this heading")

We expect authentic engagement in our community. Be wary of posting output
from Large Language Models or similar generative AI as comments on GitHub or
our discourse server, as such comments tend to be formulaic and low content.
If you use generative AI tools as an aid in developing code or documentation
changes, ensure that you fully understand the proposed changes and can explain
why they are the correct approach and an improvement to the current state.

## New contributors[#](#new-contributors "Link to this heading")

Everyone comes to the project from a different place — in terms of experience
and interest — so there is no one-size-fits-all path to getting involved. We
recommend looking at existing issue or pull request discussions, and following
the conversations during pull request reviews to get context. Or you can
deep-dive into a subset of the code-base to understand what is going on.

### New contributors meeting[#](#new-contributors-meeting "Link to this heading")

Once a month, we host a meeting to discuss topics that interest new
contributors. Anyone can attend, present, or sit in and listen to the call.
Among our attendees are fellow new contributors, as well as maintainers, and
veteran contributors, who are keen to support onboarding of new folks and
share their experience. You can find our community calendar link at the
[Scientific Python website](https://scientific-python.org/calendars/), and
you can browse previous meeting notes on [GitHub](https://github.com/matplotlib/ProjectManagement/tree/master/new_contributor_meeting).
We recommend joining the meeting to clarify any doubts, or lingering
questions you might have, and to get to know a few of the people behind the
GitHub handles 😉. You can reach out to us on [gitter](https://gitter.im/matplotlib/matplotlib) for any clarifications or
suggestions. We ❤ feedback!

### Contributor incubator[#](#contributor-incubator "Link to this heading")

The incubator is our non-public communication channel for new contributors. It
is a private [gitter](https://gitter.im/matplotlib/matplotlib) (chat) room moderated by core Matplotlib developers where
you can get guidance and support for your first few PRs. It’s a place where you
can ask questions about anything: how to use git, GitHub, how our PR review
process works, technical questions about the code, what makes for good
documentation or a blog post, how to get involved in community work, or get a
“pre-review” on your PR.

To join, please go to our public [community](https://gitter.im/matplotlib/community) channel, and ask to be added to
`#incubator`. One of our core developers will see your message and will add you.

### Good first issues[#](#good-first-issues "Link to this heading")

While any contributions are welcome, we have marked some issues as
particularly suited for new contributors by the label [good first issue](https://github.com/matplotlib/matplotlib/labels/good%20first%20issue). These
are well documented issues, that do not require a deep understanding of the
internals of Matplotlib. The issues may additionally be tagged with a
difficulty. `Difficulty: Easy` is suited for people with little Python
experience. `Difficulty: Medium` and `Difficulty: Hard` require more
programming experience. This could be for a variety of reasons, among them,
though not necessarily all at the same time:

* The issue is in areas of the code base which have more interdependencies,
  or legacy code.
* It has less clearly defined tasks, which require some independent
  exploration, making suggestions, or follow-up discussions to clarify a good
  path to resolve the issue.
* It involves Python features such as decorators and context managers, which
  have subtleties due to our implementation decisions.

### First contributions[#](#first-contributions "Link to this heading")

If this is your first open source contribution, or your first time contributing to Matplotlib,
and you need help or guidance finding a good first issue, look no further. This section will
guide you through each step:

1. Navigate to the [issues page](https://github.com/matplotlib/matplotlib/issues/).
2. Filter labels with [“Difficulty: Easy”](https://github.com/matplotlib/matplotlib/labels/Difficulty%3A%20Easy)
   & [“Good first Issue”](https://github.com/matplotlib/matplotlib/labels/good%20first%20issue) (optional).
3. Click on an issue you would like to work on, and check to see if the issue has a pull request opened to resolve it.

   * A good way to judge if you chose a suitable issue is by asking yourself, “Can I independently submit a PR in 1-2 weeks?”
4. Check existing pull requests (e.g., [PR #28476](https://github.com/scikit-plots/scikit-plots/pull/28476/)) and filter by the issue number to make sure the issue is not in progress:

   * If the issue has a pull request (is in progress), tag the user working on the issue, and ask to collaborate (optional).
   * If a pull request does not exist, create a [draft pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests) and follow the [pull request guidelines](https://matplotlib.org/devdocs/devel/pr_guide.html).
5. Please familiarize yourself with the pull request template (see below),
   and ensure you understand/are able to complete the template when you open your pull request.
   Additional information can be found in the [pull request guidelines](https://matplotlib.org/devdocs/devel/pr_guide.html).

[Pull request template](https://github.com/scikit-plots/scikit-plots/blob/main/.github/PULL_REQUEST_TEMPLATE.md)[#](#pull-request-template "Link to this dropdown")
```
<!-- These comments are hidden when you submit the pull request,
so you do not need to remove them!

Thank you so much for your PR! To help us review your contribution,

Please be sure to check out our code of conduct,
https://scikit-plots.github.io/dev/project/code_of_conduct.html

If you are new or need to be re-acquainted with scikit-plots
contributing workflow, please see
https://scikit-plots.github.io/dev/devel/index.html

Please just have a quick search on GitHub to see if a similar
pull request has already been posted.
We have old closed pull requests that might provide useful code or ideas
that directly tie in with your pull request.

We have several automatic features that run when a pull request is open.
They can appear daunting but do not worry because maintainers will help
you navigate them, if necessary. -->

## PR summary
<!-- Please provide at least 1-2 sentences describing the pull request
in detail (Why is this change required?/What problem does it solve?)
and link to relevant issues and PRs.
Also please summarize the changes in the title, for example
"Raise ValueError on non-numeric input to set_xlim" and avoid non-descriptive titles such as " Addresses issue #8576".
-->
Why is this change required?/What problem does it solve?
- ?:


## Contributor's Pull Request Submission Checklist
<!--
#<Issue Number> : define issue number if exist
[ ]   default checkbox is unchecked
[x]   If a checkbox applies to this PR, leave it checked.
[N/A] If any checkbox does not apply, mark it as [N/A].
-->

- [ ] Include "closes #<Issue Number>" in the PR description to [link the related issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).
- [ ] Ensure new or modified code is [tested](https://scikit-plots.github.io/dev/devel/testing.html).
- [ ] If your PR includes *plotting-related* features, demonstrate them in an [example](https://scikit-plots.github.io/dev/devel/document.html#write-examples-and-tutorials).
- [ ] For any *New Features* and *API Changes* are noted with a [directive and release note](https://scikit-plots.github.io/dev/devel/api_changes.html#announce-changes-deprecations-and-new-features).
- [ ] Make sure the documentation follows our [general guidelines](https://scikit-plots.github.io/dev/devel/document.html#write-rest-pages) and [docstring conventions](https://scikit-plots.github.io/dev/devel/document.html#write-docstrings).

<!--We understand that PRs can sometimes be overwhelming,
especially as the reviews start coming in. Please let us know
if the reviews are unclear or the recommended next step
seems overly demanding, if you would like help in addressing
a reviewer's comments, or if you have been waiting too long
to hear back on your PR.-->

```

## Get connected[#](#get-connected "Link to this heading")

When in doubt, we recommend going together! Get connected with our community of
active contributors, many of whom felt just like you when they started out and
are happy to welcome you and support you as you get to know how we work, and
where things are. You can reach out on any of our [Official project platforms](https://matplotlib.org/devdocs/devel/communication_guide.html#communication-channels "(in Matplotlib v3.11.0.dev2286+ge6cab33bb)").
For development questions we recommend reaching out on our development [gitter](https://gitter.im/matplotlib/matplotlib)
chat room and for community questions reach out at [community](https://gitter.im/matplotlib/community).

## Choose an issue[#](#choose-an-issue "Link to this heading")

In general, the Matplotlib project does not assign issues. Issues are
“assigned” or “claimed” by opening a PR; there is no other assignment
mechanism. If you have opened such a PR, please comment on the issue thread to
avoid duplication of work. Please check if there is an existing PR for the
issue you are addressing. If there is, try to work with the author by
submitting reviews of their code or commenting on the PR rather than opening
a new PR; duplicate PRs are subject to being closed. However, if the existing
PR is an outline, unlikely to work, or stalled, and the original author is
unresponsive, feel free to open a new PR referencing the old one.

## Start a pull request[#](#start-a-pull-request "Link to this heading")

The preferred way to contribute to Matplotlib is to fork the [main
repository](https://github.com/matplotlib/matplotlib/) on GitHub,
then submit a “pull request” (PR). To work on a a pull request:

1. ****First**** set up a development environment, either by cloning a copy of the
   Matplotlib repository to your own computer or by using Github codespaces, by
   following the instructions in [Development Setup Guidelines](guide_devel_setup.html#installing-for-devs)
2. ****Then**** start solving the issue, following the guidance in
   [development workflow](guide_devel_workflow.html#development-workflow)
3. ****As part of verifying your changes**** check that your contribution meets
   the [pull request guidelines](guide_pr.html#pr-author-guidelines)
   and then [open a pull request](guide_devel_workflow.html#open-pull-request).
4. ****Finally**** follow up with maintainers on the PR if waiting more than a few days for
   feedback. [Update the pull request](guide_devel_workflow.html#update-pull-request) as needed.

If you have questions of any sort, reach out on the [Contributor incubator](#contributor-incubator) and join
the [New contributors meeting](#new-contributors-meeting).