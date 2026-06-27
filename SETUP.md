# Pulse setup

## 1. Firebase web config (one-time)
1. Go to [Firebase Console](https://console.firebase.google.com) → project **ospulseport**
2. Project Settings (gear icon) → **General** tab → scroll to "Your apps"
3. If no web app yet, click the `</>` icon and register one called "Pulse"
4. Copy the `firebaseConfig` object
5. Open `index.html`, find `const firebaseConfig = {` (around line 299) and replace the `REPLACE_ME_*` values
6. Until you do this, Pulse runs **fully local** (notes/alarms/etc. live in localStorage — nothing breaks, just no cloud sync)

## 2. Enable Firebase services
In the Firebase Console for `ospulseport`:
- **Authentication** → Sign-in method → enable **Anonymous** + **Google**
- **Firestore Database** → Create database → start in **production mode**, region near you
- **Cloud Messaging** (optional, for future push) → no setup needed yet

## 3. Firestore security rules (paste in Firestore → Rules tab)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/{collection}/{doc=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

## 4. GitHub Action secret
Repo Settings → Secrets and variables → Actions → **New repository secret**
- Name: `FIREBASE_SERVICE_ACCOUNT_OSPULSEPORT`
- Value: paste contents of a Firebase service-account JSON
  (Firebase Console → Project Settings → Service Accounts → Generate new private key)

## 5. Install on your phone (PWA)
- Open `https://ospulseport.web.app` in Chrome (Android) or Safari (iOS)
- Tap "Add to Home Screen"
- Pulse will launch fullscreen — closest a web app gets to replacing a home screen

## Release workflow
1. Edit `index.html`
2. Bump `APP_VERSION` (top of `<script>`) and `version` in `manifest.json`
3. Bump `CACHE = 'pulse-vX.Y.Z'` in `service-worker.js`
4. Add changelog entry to `CHANGELOG.md`
5. Commit + push via GitHub Desktop — Action auto-deploys to `ospulseport.web.app`
