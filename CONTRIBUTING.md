# Contributing to Clipboard & Note Box

Thank you for your interest in contributing to Clipboard & Note Box! We welcome contributions of all kinds — bug reports, feature requests, documentation improvements, and code changes.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Code Contributions](#code-contributions)
- [Development Workflow](#development-workflow)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [contact@coderooz.in](mailto:contact@coderooz.in).

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
   ```bash
   git clone https://github.com/YOUR_USERNAME/clipboard-note-box.git
   cd clipboard-note-box
   ```
3. Add the upstream repository as a remote
   ```bash
   git remote add upstream https://github.com/coderooz/clipboard-note-box.git
   ```
4. Load the extension in Chrome (see [README.md](README.md#installation))

## How to Contribute

### Reporting Bugs

Before creating a bug report:

1. Check the [existing issues](https://github.com/coderooz/clipboard-note-box/issues) to avoid duplicates
2. Gather information: steps to reproduce, expected behavior, actual behavior, browser version

When submitting a bug report, please use the [Bug Report template](https://github.com/coderooz/clipboard-note-box/issues/new?template=bug_report.md) and include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots if applicable
- Browser and OS version

### Suggesting Features

Feature requests are welcome! Please use the [Feature Request template](https://github.com/coderooz/clipboard-note-box/issues/new?template=feature_request.md) and describe:

- The problem your feature would solve
- How you envision the feature working
- Any alternative solutions you've considered

### Code Contributions

1. **Find an issue** to work on or create one describing your planned changes
2. **Comment on the issue** to let others know you're working on it
3. **Create a branch** from `main` with a descriptive name:
   ```bash
   git checkout -b feature/add-dark-mode
   git checkout -b fix/clipboard-not-capturing
   ```
4. **Make your changes** following the coding standards below
5. **Test your changes** by loading the extension in Chrome
6. **Commit** with a clear, conventional message
7. **Push** and open a Pull Request

## Development Workflow

```bash
# Keep your fork in sync with upstream
git fetch upstream
git checkout main
git merge upstream/main

# Create a feature branch
git checkout -b feature/your-feature-name

# After making changes, test in Chrome
# 1. Go to chrome://extensions/
# 2. Click "Reload" on the extension card
# 3. Open the popup and verify functionality

# Commit and push
git add .
git commit -m "feat: add dark mode support"
git push origin feature/your-feature-name
```

## Pull Request Guidelines

- **Title**: Use conventional commit format (e.g., `feat: add dark mode`)
- **Description**: Explain what changed and why
- **Link issues**: Reference related issues with `Closes #123` or `Fixes #123`
- **Keep it focused**: One feature or fix per PR
- **Stay updated**: Rebase on `main` before requesting review
- **Be responsive**: Address review comments promptly

### PR Checklist

- [ ] Changes are tested in Chrome
- [ ] No console errors in the popup
- [ ] Manifest version is updated if needed
- [ ] CHANGELOG.md is updated (for user-facing changes)
- [ ] Documentation is updated if needed

## Coding Standards

### JavaScript

- Use `const` and `let` — avoid `var`
- Use arrow functions for callbacks
- Use template literals for string interpolation
- Add comments for non-obvious logic
- Keep functions small and focused
- Use meaningful variable and function names

### HTML

- Use semantic HTML elements
- Include `alt` attributes for images
- Maintain proper indentation (2 spaces)

### CSS

- Use descriptive class names
- Follow BEM naming convention where practical
- Keep styles modular and reusable
- Use CSS variables for theming

## Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `feat`     | A new feature                            |
| `fix`      | A bug fix                                |
| `docs`     | Documentation only changes               |
| `style`    | Code style changes (formatting, etc.)    |
| `refactor` | Code change that neither fixes nor adds  |
| `perf`     | Performance improvement                  |
| `test`     | Adding or updating tests                 |
| `chore`    | Maintenance tasks, dependencies, config  |

### Examples

```
feat: add auto-capture on clipboard copy
fix: resolve PDF export error when note is empty
docs: update installation instructions
chore: update manifest version to 1.1.0
```

## Questions?

Feel free to reach out:

- Open a [discussion](https://github.com/coderooz/clipboard-note-box/discussions)
- Contact via [coderooz.in/contact](https://coderooz.in/contact)
- Email: [contact@coderooz.in](mailto:contact@coderooz.in)

Thank you for contributing!
