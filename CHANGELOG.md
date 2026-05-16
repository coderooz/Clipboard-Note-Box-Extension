# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project repository structure
- GitHub Actions workflows (CI, release, stale, welcome, codeql)
- Issue and PR templates
- Code of Conduct and Contributing guidelines

## [1.0.0] - 2026-05-16

### Added
- Chrome Extension (Manifest V3) scaffold
- Clipboard content viewer and editor in popup
- Note writing area with multi-format export
- Export support for `.txt`, `.pdf`, and `.doc` formats
- One-click copy to clipboard functionality
- Service worker with install listener
- Extension icons (16x16, 48x48, 128x128)
- Permissions: `clipboardRead`, `clipboardWrite`, `storage`

### Known Issues
- PDF export requires jsPDF library (not yet bundled)
- No auto-capture on clipboard copy event
- No note persistence (notes lost on popup close)
