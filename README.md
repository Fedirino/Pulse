# Pulse

Mobile-first home screen replacement / dashboard PWA.

**Live:** https://ospulseport.web.app
**Firebase project:** `ospulseport`

## Widgets
- ☀️ **Weather** — compact card, tap to expand 7-day forecast + radar (Open-Meteo + RainViewer, no API key)
- 📅 **Calendar** — month view, event preview, notification-ready
- 📝 **Quick Notes** — editable / deletable / Firestore-synced when signed in
- ⏰ **Alarms / Timers / Reminders** — local-first, custom sounds
- 📌 **Shortcuts** — pinned URLs / deep links

## Architecture
- Single-file SPA (`index.html`) — no build step, like Clarity
- Firebase: Auth (anonymous + Google), Firestore (sync), FCM (future push)
- Local-first: timers, alarms, and core interactions never need network
- PWA installable (manifest + service worker)

## Workflow (Clarity-style)
1. Edit `index.html` directly
2. Bump version in `index.html` (`APP_VERSION`) and `manifest.json`
3. Add entry to `CHANGELOG.md`
4. Commit + push via GitHub Desktop
5. GitHub Action auto-deploys to Firebase Hosting

## Secrets needed in GitHub repo settings
- `FIREBASE_SERVICE_ACCOUNT_OSPULSEPORT` — service account JSON for `ospulseport` project (Firebase Console → Project Settings → Service Accounts → Generate new private key)
