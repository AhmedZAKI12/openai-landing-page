# GPT-3 Landing Page — React + Tailwind CSS

Responsive landing page inspired by the Figma screenshots.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
gpt3-landing-react/
├── index.html
├── public/
│   └── images/
│       ├── feature-image.png
│       └── illustration.png
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

## Notes
- Built with React, JavaScript, Tailwind CSS, and Lucide icons.
- Responsive layouts for mobile, tablet, and desktop.
- The email form validates the email and shows a local success state. It is not connected to a mailing-list backend.
- The two supplied design images are stored locally in public/images. Blog thumbnails and small avatar images still load from Unsplash, so those need an internet connection.
- Replace the placeholder copy, links, contact information, and images with your project’s final content before submission.
