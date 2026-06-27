# Changelog

## v0.1.0 — 2026-06-26
Initial scaffold.
- Mobile-first PWA shell with installable manifest + service worker
- Weather widget: compact card → expandable 7-day forecast + RainViewer radar (Open-Meteo, no key)
- Calendar widget: month view, event preview, local events with notification hooks
- Quick Notes: create / edit / delete, Firestore sync when signed in
- Alarms / Timers / Reminders: local-first, custom sound picker (Web Audio)
- Shortcuts grid: pinned URLs + emoji icons
- Firebase Auth (anonymous default, Google sign-in optional)
- Firestore wiring for notes / events / shortcuts
- GitHub Actions auto-deploy to Firebase Hosting (`ospulseport`)
