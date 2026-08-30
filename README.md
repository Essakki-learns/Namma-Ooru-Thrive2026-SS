# 🌾 Namma Ooru - Our Village Digital Portal

**Namma Ooru** (*"Our Village"* in Kannada/Tamil) is a mobile-first digital portal built for the **Inclusive Tech** track, aimed at closing the last-mile digital gap for rural India. Instead of scattering essential services across a dozen confusing government sites, it puts weather, market prices, local governance, and emergency access behind one simple, low-bandwidth-friendly interface.

> **Live Demo**: [https://namma-ooru-thrive2026-ss.vercel.app/](https://namma-ooru-thrive2026-ss.vercel.app/)

---

## 🎯 Problem Statement

**PS1 — Inclusive Tech (Rural Areas)**: Rural citizens often lack a single, accessible entry point to essential civic, agricultural, and emergency services — especially those with low literacy or unreliable connectivity. Namma Ooru consolidates these into one place, designed around real constraints of the people who'd actually use it.

---

## 🚀 Key Features

| Module | Description |
| :--- | :--- |
| **🔐 Simple OTP Login** | Phone number + OTP login with area-based registration (Demo OTP: `1234` for testing). |
| **🌦️ Smart Weather** | Simplified Rain / No Rain style alerts instead of raw meteorological data — built for quick farming decisions, not weather-nerd dashboards. |
| **🚌 Bus Timings** | Local bus schedule directory (sample/static data for demo purposes). |
| **🛒 Dual-View Market** | Separate views for **Sellers** (see live-style crop prices) and **Buyers** (see listings, prices hidden) — mirrors how local markets actually negotiate. |
| **🏛️ Panchayat Portal** | Panchayat president & ward member contacts and roles, in one directory instead of buried in a PDF somewhere. |
| **📜 Govt Schemes & Funds** | Curated directory of ongoing government schemes and farmer fund updates. |
| **🏥 Local Services** | PHC (health center) directory and nearby job vacancy listings. |
| **🛠️ Infrastructure Reporting** | Report water/electricity issues directly, instead of chasing down the right office. |
| **🔗 Useful Links** | Quick access to Aadhaar, exam results, and other commonly-needed government portals. |
| **🗣️ Regional Language & Audio** | Language switching + audio notifications, built for users who may not read comfortably in the interface's default language. |
| **🚨 Emergency Access** | Emergency contact numbers surfaced prominently, not buried three menus deep. |

---

## 🧑‍💻 Tech Stack

- **Frontend**: React (Vite)
- **Deployment**: Vercel
- **Data**: Hardcoded JSON models for schemes, market, bus, PHC, and job data (demo/hackathon scope — see Known Issues)

---

## ⚙️ Setup (Local Development)

```bash
git clone <your-repo-url>
cd namma-ooru
npm install
npm run dev
```

---

## ⚠️ Known Issues / Limitations

- Data (schemes, market prices, bus timings, PHC, jobs) is **hardcoded/mock data**, not pulled from live APIs — built this way to hit the hackathon deadline.
- OTP login uses a static demo code (`1234`), not a real SMS gateway.
- Not yet tested at scale on actual 2G/3G rural networks — optimized for it in design, not field-verified.

---

## 👥 Team

Team ID: `26T060`
