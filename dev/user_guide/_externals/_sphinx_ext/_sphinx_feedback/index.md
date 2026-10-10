# Sphinx Feedback[#](#sphinx-feedback "Link to this heading")

`_sphinx_feedback` provides privacy-minimal page feedback for Sphinx HTML
sites. The package separates a dependency-light request/event contract from
the Sphinx UI and optional standalone service.

Page feedback is disabled by default. Enabling the extension alone does not
make page-view requests.

## Enable page feedback[#](#enable-page-feedback "Link to this heading")

```
extensions += [
    "scikitplot._externals._sphinx_ext._sphinx_feedback",
]

feedback_page_enabled = True
feedback_site_id = "docs"
feedback_endpoint = "https://feedback.example.org/v1/feedback"

```

The endpoint may be left empty for a UI-only/static deployment, but a site must
provide an appropriate service endpoint before feedback can be submitted.

## Automatic placement and explicit mounts[#](#automatic-placement-and-explicit-mounts "Link to this heading")

The extension can place feedback through theme-aware page/sidebar positions, or
a page can request an explicit mount:

```
.. feedback::
   :layout: compact

```

`:layout:` accepts only `compact` or `full`. Explicit mounts still
require `feedback_page_enabled = True` because that switch owns the page
assets and controller.

## Core configuration[#](#core-configuration "Link to this heading")

| Setting | Default | Meaning |
| --- | --- | --- |
| `feedback_page_enabled` | `False` | Master page-feedback switch. |
| `feedback_position` | `"sidebar"` | Preferred automatic placement. |
| `feedback_page_main` | `True` | Permit the main-page placement surface. |
| `feedback_quick_enabled` | `True` | Show quick feedback actions. |
| `feedback_detailed_enabled` | `True` | Enable detailed rating UI. |
| `feedback_comment_enabled` | `True` | Enable the optional comment field. |
| `feedback_contributor_enabled` | `True` | Enable contributor-related UI supported by the contract. |
| `feedback_counter_enabled` | `True` | Allow reviewed aggregate counts to be shown. |
| `feedback_counter_source` | `"embedded"` | Counter source policy. |
| `feedback_endpoint` | `""` | Submission service endpoint. |
| `feedback_site_id` | `"docs"` | Logical site authority. |
| `feedback_include` / `feedback_exclude` | all / common utility pages excluded | Page-selection patterns. |

## Privacy and authority boundary[#](#privacy-and-authority-boundary "Link to this heading")

A feedback event represents a reaction to a page, not a durable person
identity. The extension does not need a page-view request in order to render
the feedback surface. Credentials for storage/repository providers belong in
the service deployment, not in public Sphinx configuration.

Do not turn missing aggregate data into a verified zero. The implementation
only treats an absent page row as zero when the aggregate snapshot explicitly
identifies itself as complete; sparse/unknown aggregate input keeps the counter
unknown.

## Standalone service[#](#standalone-service "Link to this heading")

The package also exposes service helpers for deployments that want to run the
feedback endpoint separately from Sphinx. Storage/review providers and trusted
proxy/origin configuration are server concerns. Keep browser configuration
bounded to the public endpoint and site/page contract.

## Relationship to AI Assistant feedback[#](#relationship-to-ai-assistant-feedback "Link to this heading")

This package owns generic page feedback. Assistant-answer ratings and reviewed
Q&A contribution are separate workflows owned by
[Sphinx AI Assistant](../_sphinx_ai_assistant/index.html); do not merge their consent or storage
semantics merely because both surfaces use feedback language.