name: Documentation Improvement
description: Suggest improvements or report issues with documentation
title: "[Docs]: "
labels: ["documentation", "triage"]
assignees:
  - coderooz
body:
  - type: markdown
    attributes:
      value: |
        Help us improve our documentation!
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](../CODE_OF_CONDUCT.md)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
  - type: dropdown
    id: doc-type
    attributes:
      label: Documentation type
      options:
        - README.md
        - CONTRIBUTING.md
        - CHANGELOG.md
        - Inline code comments
        - Other
    validations:
      required: true
  - type: textarea
    id: description
    attributes:
      label: Describe the issue or improvement
      description: What is unclear, missing, or incorrect?
    validations:
      required: true
  - type: textarea
    id: suggestion
    attributes:
      label: Suggested changes
      description: How would you improve it?
  - type: textarea
    id: additional
    attributes:
      label: Additional context
      description: Add any other context here.
