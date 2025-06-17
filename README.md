# Remove Google AI Overview

A lightweight Chrome extension that automatically removes AI Overview sections from Google search results.

## Features

- 🚀 **Automatic removal** - Works immediately when search pages load
- 🎯 **Smart targeting** - Removes AI Overview containers using multiple selectors
- 🔄 **Dynamic detection** - Handles dynamically loaded content
- ⚡ **Lightweight** - Minimal resource usage
- 🔧 **No configuration** - Works out of the box

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked" and select the extension folder
5. The extension is now active on Google search pages

## Files

```
├── manifest.json    # Extension configuration
└── content.js       # Main removal script
```

## How it works

The extension targets these elements commonly used for AI Overview:
- `[data-mcpr]` - Main AI Overview containers
- `.YzCcne` - AI Overview wrapper class
- `[data-async-type="folsrch"]` - Search result type indicator
- `[jscontroller="EYwa3d"]` - Google controller component
- `.q8sySb`, `.hdzaWe` - Additional AI Overview elements

## Technical Details

- **Manifest V3** compatible
- Runs on `document_start` for early execution
- Uses `MutationObserver` for dynamic content
- Periodic checks every 500ms for stubborn elements
- No external dependencies

## Browser Support

- Chrome (Manifest V3)
- Edge (Chromium-based)
- Other Chromium browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on Google search
5. Submit a pull request

## License

None, do what you want with this.

## Disclaimer

This extension modifies Google search results display. Google may update their structure, requiring extension updates.
