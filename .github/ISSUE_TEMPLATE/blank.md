name: Blank Issue
description: Open a blank issue for custom requests
body:
  - type: markdown
    attributes:
      value: |
        Please provide a clear and descriptive title for your issue.
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
      label: Description
      description: Describe your issue, question, or request.
    validations:
      required: true
