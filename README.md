# Clipboard & Note Box

> A lightweight Chrome extension for quick clipboard management and note-taking. Copy, edit, and export your notes in multiple formats — all from your browser toolbar.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Chrome Web Store](https://img.shields.io/badge/Manifest-V3-blue.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](CHANGELOG.md)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

## Features

- **Clipboard Capture** — View and edit clipboard content directly in the popup
- **Quick Copy** — One-click copy to clipboard from the extension popup
- **Multi-Format Export** — Save notes as `.txt`, `.pdf`, or `.doc` files
- **Lightweight** — No external dependencies, fast load time
- **Privacy-First** — All data stays local; no cloud sync or telemetry

## Installation

### From Source

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked** and select the extension directory
5. The extension icon will appear in your toolbar

### From Chrome Web Store

> Coming soon — pending review and publication.

## Usage

1. Click the **Clipboard & Note Box** icon in your browser toolbar
2. **Clipboard Section**: View copied text, edit it, and click "Copy to Clipboard"
3. **Notes Section**: Write your notes and export in your preferred format:
   - **Save as TXT** — Plain text file
   - **Save as PDF** — PDF document (requires jsPDF)
   - **Save as DOC** — Microsoft Word compatible file

## Project Structure

```
clipboard-note-box/
├── background.js          # Service worker (install listener)
├── popup.html             # Extension popup UI
├── popup.js               # Popup logic and event handlers
├── style.css              # Popup styles
├── manifest.json          # Extension manifest (MV3)
├── icons/                 # Extension icons (16, 48, 128)
├── .github/               # GitHub templates and workflows
├── LICENSE                # MIT License
├── CHANGELOG.md           # Version history
├── CODE_OF_CONDUCT.md     # Community guidelines
├── CONTRIBUTING.md        # Contribution guidelines
└── README.md              # This file
```

## Development

### Prerequisites

- Chrome 88+ or any Chromium-based browser
- A code editor (VS Code recommended)

### Local Development

```bash
# Load the extension in Chrome
# 1. Navigate to chrome://extensions/
# 2. Enable Developer mode
# 3. Click "Load unpacked" → select project directory
# 4. Click the extension icon to open the popup
```

### Testing

1. Open the popup and verify clipboard content appears after copying text
2. Test all export buttons (TXT, PDF, DOC)
3. Verify downloaded files contain expected content

## Roadmap

- [ ] Auto-capture clipboard on copy event
- [ ] Note history with local storage persistence
- [ ] Markdown preview support
- [ ] Cloud sync option (opt-in)
- [ ] Dark mode theme
- [ ] Keyboard shortcuts
- [ ] Firefox compatibility

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before getting started.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Author

**Ranit Saha** (Coderooz)

- Website: [https://coderooz.in](https://coderooz.in)
- GitHub: [@coderooz](https://github.com/coderooz)
- Contact: [coderooz.in/contact](https://coderooz.in/contact)

## Support

- Report bugs: [GitHub Issues](https://github.com/coderooz/clipboard-note-box/issues)
- Feature requests: [GitHub Discussions](https://github.com/coderooz/clipboard-note-box/discussions)
- Direct contact: [https://coderooz.in/contact](https://coderooz.in/contact)
