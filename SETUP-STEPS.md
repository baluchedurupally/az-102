# Setup steps for iPhone

## Fastest setup

### Netlify
1. Download and unzip `ai102-iphone-pwa-v3.zip`
2. Go to Netlify Drop in your browser
3. Drag the unzipped folder there
4. Open the generated URL in Safari on iPhone
5. Tap **Share**
6. Tap **Add to Home Screen**

### GitHub Pages
1. Create a new GitHub repository
2. Upload all files from the unzipped folder to the repo root
3. Open **Settings → Pages**
4. Under source choose **Deploy from a branch**
5. Select `main` and `/root`
6. Save
7. Open the Pages URL in Safari on iPhone
8. Tap **Share → Add to Home Screen**

### Local from your laptop
1. Open Terminal inside the project folder
2. Run:

```bash
cd ai102-iphone-pwa-v3
python3 -m http.server 8080 --bind 0.0.0.0
```

3. Find your laptop IP address
4. On the iPhone, open Safari and go to:

```text
http://YOUR_LAPTOP_IP:8080
```

5. Tap **Share → Add to Home Screen**

## Optional next step
Use Capacitor if you later want to turn this into a true native iOS app with Xcode.
