# Capacitor path for a true iPhone app

## Prerequisites
- Mac
- Xcode
- Node.js

## Steps
1. Create a Vite/React project or reuse this folder as web assets.
2. Install Capacitor:

```bash
npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init
```

3. Build or point Capacitor at the web directory.
4. Add iOS platform:

```bash
npx cap add ios
```

5. Copy web assets:

```bash
npx cap copy ios
```

6. Open in Xcode:

```bash
npx cap open ios
```

7. Run on your iPhone.
