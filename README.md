# Next.js 15 Starter – Better Auth · Drizzle · Tailwind CSS

[![CI](https://github.com/DasPocky/next-better-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/DasPocky/next-better-starter/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **Ein modernes Boiler‑Plate für blitzschnelle Full‑Stack‑Apps** – mit dem neuen **Next.js 15 App Router**, **Better‑Auth** für sichere Auth‑Flows, **Drizzle ORM** als Typescript‑SQL‑Layer und **Tailwind CSS v4** samt **shadcn/ui‑Komponenten**.

---

## 📑 Inhaltsverzeichnis

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🔧 Scripts](#-scripts)
- [🗄️ Environment Variables](#️-environment-variables)
- [🤖 Continuous Integration](#-continuous-integration)
- [📦 Deployment](#-deployment)
- [📚 Weiterführende Links](#-weiterführende-links)
- [📝 Lizenz](#-lizenz)

---

## ✨ Features

| Stack | Beschreibung |
| :--- | :--- |
| **Next.js 15** | App Router, React 19 Server Actions, typed Routes |
| **Better‑Auth** | E‑Mail + Passwort‑Flows, Sessions, Drizzle‑Adapter |
| **Drizzle ORM** | Typsichere SQL‑Queries, Migrationen, CLI‑Tools |
| **Tailwind CSS 4** | Utility‑First CSS, CSS‑Variablen, Dark Mode |
| **shadcn/ui** | Zugängliche, themable UI‑Primitives |
| **React Hook Form + Zod** | Schnelle Formulare & Validation |
| **pnpm** | Blitzschnelles Paket‑Management |

---

## 🚀 Quick Start

```bash
# 1. Repo klonen
pnpm dlx degit DasPocky/next-better-starter my-app
cd my-app

# 2. Abhängigkeiten installieren
pnpm install

# 3. Umgebungs‑Variablen kopieren & bearbeiten
cp .env.example .env
$EDITOR .env

# 4. Datenbank‑Migrationen anwenden (lokale Postgres)
pnpm db:push

# 5. Entwicklungs‑Server starten
pnpm dev
```

> **Tipp:** Keine lokale Postgres? Starte schnell eine Instanz per Docker:
>
> ```bash
docker run --name pg -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:16
> ```

---

## 🔧 Scripts

| Befehl | Zweck |
| :--- | :--- |
| `pnpm dev` | Lokale Entwicklung mit Hot Reload |
| `pnpm build` / `pnpm start` | Produktions‑Build & Server |
| `pnpm lint` | ESLint (Next Core Web Vitals Rules) |
| `pnpm db:gen` | SQL‑Migrationen aus dem TS‑Schema erzeugen |
| `pnpm db:push` | Migrationen in die DB deployen |

---

## 🗄️ Environment Variables

| Schlüssel | Beschreibung |
| :--- | :--- |
| `DATABASE_URL` | PostgreSQL‑DSN |
| `BETTER_AUTH_SECRET` | Zufälliger 32‑Byte‑String (JWT‑Signaturen) |
| `BETTER_AUTH_URL` | Basis‑URL der App (z. B. `http://localhost:3000`) |
| `APP_NAME` | Anzeigename der Anwendung (optional) |

Alle Variablen wandern in **`.env`** (per `.gitignore` ausgeschlossen). Ein Beispiel findest du in `.env.example`.

---

## 🤖 Continuous Integration

GitHub Actions führt bei jedem Push oder Pull‑Request **Linting**, **Tests** und den **Build** aus. Sensible Daten wie `DATABASE_URL` oder `BETTER_AUTH_SECRET` gehören in die **Repository‑Settings → Secrets → Actions**.

---

## 📦 Deployment

| Plattform | Status | Hinweise |
| :--- | :--- | :--- |
| **Vercel** | ✅ | 1‑Click Import, Next.js‑optimiert |
| **Docker** | ✅ | Beispiel‑`Dockerfile` im Repo |
| **Fly.io / Railway** | ✅ | Getestet mit Postgres‑Add‑on |

---

## 📚 Weiterführende Links

- **Next.js Docs:** <https://nextjs.org/docs>
- **Better‑Auth:** <https://better-auth.dev>
- **Drizzle ORM:** <https://orm.drizzle.team>
- **Tailwind CSS v4:** <https://tailwindcss.com>
- **shadcn/ui:** <https://ui.shadcn.com>

---

## 📝 Lizenz

Dieses Boiler‑Plate steht unter der **MIT‑Lizenz** – siehe [LICENSE](LICENSE).

