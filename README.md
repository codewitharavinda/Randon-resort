# Randon Resort — Beautiful Hotel Booking Demo ✨🏨

> A minimal, elegant hotel booking UI demo built with plain HTML, CSS and JavaScript.

---

## 🚀 Quick Overview

- **What**: A single-page prototype showcasing a searchable list of hotels, booking modal, and smooth UI interactions.
- **Tech**: Vanilla HTML, CSS, and JavaScript (no build tools required).
- **Files**:
  - `index.html` — markup and app shell
  - `style.css` — extracted styles (beautiful gradients & responsive layout)
  - `app.js` — interactive behavior (hotel list, booking modal)

## 🌟 Features

- Responsive hero section with animated headings
- Search form (destination, check-in/out, guests)
- Grid of featured hotels with ratings and prices
- Booking modal with a simple confirmation flow
- Accessible-friendly markup and keyboard-safe interactions

## 💻 Run locally

No dependencies — just open the page or serve from a local static server.

Option 1 — Open directly (quick):

1. Double-click `index.html` in your file explorer.
2. The page will open in your default browser.

Option 2 — Serve with Python (recommended for smoother behavior):

```powershell
cd 'C:\Users\Hp\Desktop\Randon'
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

Option 3 — Serve with Node (if you have `http-server`):

```powershell
cd 'C:\Users\Hp\Desktop\Randon'
npx http-server -c-1 . 8080
# Open http://localhost:8080
```

## 🧩 Customize

- Replace hotel data in `app.js` to add or change hotels.
- Swap the SVG hero background in `style.css` for your own image or gradient.
- Add form validation or connect to a backend API to persist bookings.

## ✅ Testing Checklist

- [ ] Search form scrolls to hotels
- [ ] Booking modal opens when a hotel is selected
- [ ] Booking confirmation message appears and modal closes after a delay
- [ ] Date inputs enforce sensible min dates

## 📸 Want screenshots?
Add images to the repo (e.g., `screenshots/`) and include them here with Markdown image tags.

## 📦 Next steps (suggestions)

- Hook up a simple backend (Express/Flask) to accept bookings
- Add persistence (localStorage or a lightweight DB)
- Improve accessibility (aria attributes, focus management)
- Add unit tests (Jest / Playwright visual regression)

---

Made with ❤️ — enjoy building on it! If you want, I can:

- Add a gitignore and make an initial commit
- Add screenshots and a demo GIF
- Add a simple Express server to accept bookings

Tell me which one you'd like next. ✨
