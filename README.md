# Clipboard & Note Box Extension

![Logo Image](./icons/icon.png)

This is a Chrome extension that enhances your clipboard experience with two key features:
1. **Clipboard History**: Keep track of all previously copied text.
2. **Note-taking Editor**: Write, edit, and save notes in multiple formats (`.txt`, `.pdf`, `.doc`).

## Features

- **Clipboard History**: Automatically save and view a history of previously copied items directly in the extension popup.
- **Note-taking Editor**: A rich-text area to write and edit notes or copied text, allowing you to save the contents.
- **Save as Multiple Formats**: Save notes or clipboard content as `.txt` (default), `.pdf`, or `.doc` using the built-in dropdown selector.
  

## How It Works

- **Clipboard History**: When you copy text in your browser, the extension captures and displays it in the clipboard history section, where you can review and select any previous item.
  
- **Note-Taking Section**: Use the text area to write or edit notes and clipboard content. Once you're done, you can choose the file format you want to save the note in: `.txt`, `.pdf`, or `.doc`.

## Installation

### Step 1: Download the Extension
1. Download the project files from this repository or clone the project:
   ```bash
   git clone https://github.com/coderooz/Clipboard-Note-Box-Extension.git
   ```

### Step 2: Load Unpacked Extension
1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer Mode** in the top-right corner.
3. Click **Load unpacked** and select the folder where the extension is stored.
4. The Clipboard & Note Box Extension will now be added to your Chrome toolbar.

## Usage

1. **View Clipboard History**:
   - When you copy any text in the browser, it will automatically appear in the "Clipboard History" section of the extension.
   
2. **Edit and Save Notes**:
   - Use the text area to edit the copied content or write new notes.
   - Click **Save** to download your note, and select the desired file format from the dropdown (`.txt`, `.pdf`, `.doc`).

## File Structure

```plaintext
clipboard-note-box-extension/
│
├── assets/               # Folder containing extension icon and screenshots
├── popup.html            # Extension popup UI
├── popup.js              # JavaScript functionality for clipboard and note handling
├── style.css             # Styles for the extension popup
├── manifest.json         # Extension configuration and metadata
└── README.md             # This file
```

## Supported File Formats

- **Text File (`.txt`)**: The default format.
- **PDF File (`.pdf`)**: Converts your note into a PDF document.
- **Word Document (`.doc`)**: Converts your note into a Microsoft Word document.

## Future Enhancements

- Sync clipboard history across multiple devices using Chrome Sync.
- Additional text formatting options for the note editor.
- Auto-save feature for notes.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
