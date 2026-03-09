# AI-102 iPhone Study App (v3)

This package updates the earlier iPhone study app with a more complete module breakdown based on the highly liked GitHub repo by Kenneth Leung:

- Repo: https://github.com/kennethleungty/Azure-AI-Engineer-Associate-Notes
- Official study guide: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-102

## What's new

- Added the repo's visible learning-path/module structure across 6 major paths
- Added a 7th overlay path for newer AI-102 exam areas such as Foundry-first planning and agentic solutions
- Improved mobile-first UI
- Added flashcards and quiz mode
- Added offline PWA support

## Quick start

### Option A: Open locally on laptop

```bash
cd ai102-iphone-pwa-v3
python3 -m http.server 8080 --bind 0.0.0.0
```

Then visit `http://YOUR_LAPTOP_IP:8080` from your iPhone on the same Wi‑Fi.

### Option B: Netlify Drop

1. Unzip the folder
2. Drag the folder into Netlify Drop
3. Open the generated URL in Safari on iPhone
4. Tap Share → Add to Home Screen

### Option C: GitHub Pages

1. Create a new repository
2. Upload all files to the repo root
3. Settings → Pages → Deploy from a branch → main / root
4. Open the Pages URL in Safari on iPhone
5. Tap Share → Add to Home Screen

## Notes

- This app summarizes and reorganizes the learning material; it does not embed the repo's PDFs.
- Progress is saved in browser local storage on the device.
