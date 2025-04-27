# Next.js 15 Starter – Auth · Drizzle · Tailwind

[![CI](https://github.com/YOUR_GITHUB_USERNAME/nextjs-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_GITHUB_USERNAME/nextjs-starter/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Ein **vollwertiges Boiler‑plate** für moderne Web‑Apps mit dem Next.js 15 App Router, Better‑Auth, Drizzle ORM, Tailwind CSS v4 und shadcn/ui‑Komponenten. Klone das Repo, fülle deine `.env` aus und starte in wenigen Minuten deine eigene Anwendung.

---

## ✨ Features

| Stack | Beschreibung |
| ----- | ------------ |
| **Next.js 15** | App‑Router, React 19 Server Actions, typed Routes |
| **Better‑Auth** | E‑Mail + Passwort‑Flows, Sessions, Drizzle‑Adapter |
| **Drizzle ORM** | Typsichere Queries, Migrationen, CLI‑Tools |
| **Tailwind CSS 4** | Utility‑First CSS, Variablen, Dark‑Mode |
| **shadcn/ui** | Zugängliche, themable UI‑Primitives |
| **React Hook Form + Zod** | Schnelle Formulare & Validierung |
| **pnpm** | Schnelles, platzsparendes Paket‑Management |

---

## 🚀 Quick Start

```bash
git clone https://github.com/DasPocky/next-better-starter.git
cd nextjs-starter
pnpm install                 # Abhängigkeiten holen
cp .env.example .env         # Secrets eintragen
pnpm db:push                 # Migrationen ausführen
pnpm dev                     # Lokal starten
```

> **Hinweis:** Lokale Datenbank erforderlich – z. B. Docker‑Postgres (`docker compose up db`).  
> Für Produktiv‑Deployments empfiehlt sich Vercel, Fly.io oder Docker.

---

## 🔧 Scripts

| Befehl | Zweck |
| ------ | ----- |
| `pnpm dev` | Lokale Entwicklung mit Hot‑Reload |
| `pnpm build` / `pnpm start` | Produktions‑Build & Server |
| `pnpm lint` | ESLint (Next Core WebVitals) |
| `pnpm db:gen` | SQL‑Migrationen aus TS‑Schema erzeugen |
| `pnpm db:push` | Migrationen in DB deployen |

---

## 🗄️ Environment Variables

| Schlüssel | Beschreibung |
| --------- | ------------ |
| `DATABASE_URL` | PostgreSQL‑DSN |
| `BETTER_AUTH_SECRET` | Zufälliger 32‑Byte‑String für JWT‑Signaturen |
| `BETTER_AUTH_URL` | Basis‑URL der App (z. B. `http://localhost:3000`) |
| `APP_NAME` | Anzeigename der Anwendung (optional) |

Alle Variablen kommen in **`.env`** (per `.gitignore` ausgeschlossen). Siehe `.env.example`.

---

## 🤖 Continuous Integration

Dieses Repo enthält einen einfachen **GitHub‑Actions‑Workflow** (`.github/workflows/ci.yml`), der bei jedem Push Linting und Build ausführt.  
Secrets wie `DATABASE_URL` oder `BETTER_AUTH_SECRET` werden in den **Repository Settings → Secrets → Actions** hinterlegt.

---

## 👫 Contributing

1. Fork & Branch (`feat/my-feature`)  
2. `pnpm install`  
3. Tests & Linting (`pnpm lint`)  
4. Pull‑Request inklusive **Issue‑Referenz** eröffnen

Automatisierte Checks (CI) müssen grün sein, bevor der Merge möglich ist.

---

## 📦 Deployment

| Plattform | Status |
|-----------|--------|
| **Vercel** | 1‑Click‑Import, automatisch mit Next.js optimiert |
| **Docker** | Beispiel‑`Dockerfile` im Repo |
| **Fly.io / Railway** | Getestet mit Postgres‑Add‑on |

---

## 📝 License

Released under the [MIT License](LICENSE).