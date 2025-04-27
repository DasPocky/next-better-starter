README.md
=========

# Next.js 15 Starter – Auth + Drizzle + Tailwind

Ein **vollwertiges Next.js‑Boiler‑plate** (App Router) mit Better‑Auth, Drizzle ORM, Tailwind CSS v4 und shadcn/ui‑Komponenten. Klone das Repo, fülle deine `.env` aus und starte in wenigen Minuten deine eigene Anwendung.

---

## ✨ Funktionen

| Stack | Beschreibung |
| ----- | ------------ |
| **Next.js 15** | App‑Router, React 19 Server Actions, typed Routes |
| **Better‑Auth** | E‑Mail + Passwort‑Flows, Sessions, Drizzle‑Adapter |
| **Drizzle ORM** | Typsichere Queries, Migrationen, CLI‑Tools |
| **Tailwind CSS 4** | Utility‑First CSS, Variablen, Dark‑Mode |
| **shadcn/ui** | Zugängliche, themable UI‑Primitives |
| **React Hook Form + Zod** | Schnelle Formulare & Validierung |
| **pnpm** | Schnelles, platzsparendes Paket‑Management |

---

## 🚀 Schnellstart

Hier folgt Schnellstart

---

## 🔧 Konfiguration & Skripte

| Script | Zweck |
| ------ | ----- |
| `pnpm dev` | Lokale Entwicklung mit Hot‑Reload |
| `pnpm build` / `pnpm start` | Produktions‑Build & Server |
| `pnpm lint` | ESLint (Next Core Web Vitals) |
| `pnpm db:gen` | SQL‑Migrationen aus TypeScript‑Schema erzeugen |
| `pnpm db:push` | Migrationen in die Datenbank deployen |

---

## 🗄️ Environment‑Variablen

| Schlüssel | Beschreibung |
| --------- | ------------ |
| `DATABASE_URL` | PostgreSQL‑DSN |
| `BETTER_AUTH_SECRET` | Zufälliger 32‑Byte‑String für JWT‑Signaturen |
| `BETTER_AUTH_URL` | Basis‑URL der App (z. B. `http://localhost:3000`) |
| `APP_NAME` | Anzeigename der Anwendung (optional) |

Alle Variablen kommen in **`.env`** (ist per `.gitignore` ausgeschlossen). Siehe `.env.example` als Vorlage.

---

## 🛠️ Continuous Integration

Eine minimale **GitHub Action** (`.github/workflows/ci.yml`) führt Linting und Produktions‑Build durch. Füge Tests oder Deployment‑Steps nach Bedarf hinzu.

---

## 📦 Deployment

- **Vercel** (empfohlen, Next.js‑nativ)
- **Docker** – Beispiel‑`Dockerfile` folgt
- **Railway / Fly.io** – mit Postgres‑Add‑on getestet

---

## 📝 Lizenz

Veröffentlicht unter der [MIT‑Lizenz](LICENSE). Bitte lies deren Wortlaut im nächsten Abschnitt.

---

LICENSE
=======

MIT License

Copyright (c) 2025 Björn End

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.