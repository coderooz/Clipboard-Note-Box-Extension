name: Bug Report
description: File a bug report to help us improve
title: "[Bug]: "
labels: ["bug", "triage"]
assignees:
  - coderooz
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](../CODE_OF_CONDUCT.md)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
  - type: textarea
    id: description
    attributes:
      label: Describe the bug
      description: A clear and concise description of what the bug is.
      placeholder: Tell us what you see!
    validations:
      required: true
  - type: textarea
    id: reproduce
    attributes:
      label: Steps to reproduce
      description: Steps to reproduce the behavior
      placeholder: |
        1. Go to '...'
        2. Click on '....'
        3. Scroll down to '....'
        4. See error
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: Expected behavior
      description: What did you expect to happen?
    validations:
      required: true
  - type: textarea
    id: actual
    attributes:
      label: Actual behavior
      description: What actually happened?
    validations:
      required: true
  - type: dropdown
    id: browsers
    attributes:
      label: What browser are you seeing the problem on?
      multiple: true
      options:
        - Chrome
        - Microsoft Edge
        - Brave
        - Opera
        - Other Chromium-based browser
  - type: input
    id: browser-version
    attributes:
      label: Browser Version
      description: e.g., Chrome 120.0.6099.130
    validations:
      required: true
  - type: input
    id: extension-version
    attributes:
      label: Extension Version
      description: Found in chrome://extensions/ (e.g., 1.0.0)
    validations:
      required: true
  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots
      description: If applicable, add screenshots to help explain your problem.
  - type: textarea
    id: logs
    attributes:
      label: Relevant console output
      description: |
        Open the popup, right-click → Inspect, and check the Console tab for any errors.
      render: shell
  - type: textarea
    id: additional
    attributes:
      label: Additional context
      description: Add any other context about the problem here.
