# ProTraffic Landing Page

This repository contains the source code for the official ProTraffic landing page, built using HTML5, CSS3 (BEM Methodology), and JavaScript.

## Project Structure

The project uses a BEM (Block Element Modifier) folder structure for maintainability.

- `/index.html`: The main Russian landing page file.
- `/index-en.html`: The English version of the landing page.
- `/styles/`: Contains all BEM-specific CSS files (`blocks`, `page`, etc.).
- `/images/`: Contains all project assets (logos, photos, icons).
- `/js/`: Contains main JavaScript logic (`index.js`).
- `/data/`: Contains JSON files for dynamic content translation (`ru.json`, `en.json`).

## Features

- **Responsive Design:** Optimized for Desktop, Tablet, and Mobile views.
- **Bilingual:** Supports both Russian and English languages via dynamic switching.
- **Interactive Elements:** Anchor links for smooth scrolling, functional links within tables.
- **Reusable Components:** Uses HTML templates and CSS modifiers for easy expansion.

## Getting Started (For Developers)

To run this project locally:

1.  Clone the repository to your local machine.
2.  Open the `index.html` file in your preferred web browser.

## Handover Details (For Client Use)

- **HTML Structure:** The site relies on a simple two-file approach. To add more sections or cards, simply add more HTML following the existing BEM structure.
- **Dynamic Content:** The Banner section uses data stored in `/data/ru.json` and `/data/en.json` and is managed by `/js/index.js`.
- **Styling:** All styling uses BEM CSS methodology for consistency.
