# 🧠 AI‑Health: Interactive Health Chatbot

AI‑Health is a prototype health assistant web app built using **Next.js**, **Tailwind CSS**, and static HTML/CSS. It includes interactive chatbot experiences such as a dietitian and fitness assistant, and combines modern React-based pages with legacy HTML interfaces.

---

## 📦 Tech Stack

- **Next.js** – React framework for SSR and API routing
- **Tailwind CSS** – Utility-first CSS framework
- **HTML5/CSS3** – Legacy chatbot pages
- **Node.js + npm** – Package manager and dev environment

---

## 🚀 Getting Started

Follow these steps to install and run the project locally:

```bash
# Clone the repository
git clone https://github.com/brianntangg/AI-Health.git
cd AI-Health

# Install dependencies
npm install

# Run the development server
npm run dev
```

Visit http://localhost:3000 to view the app.

---

## 🗂️ Project Structure

```
AI-Health/
├── app/                  # Next.js app directory
│   ├── api/chat          # API route for chatbot logic (placeholder)
│   ├── layout.js         # Shared layout for pages
│   └── page.js           # Main chatbot interface
├── public/               # Static files (images, SVGs, favicon)
│   ├── next.svg
│   ├── vercel.svg
│   └── favicon.ico
├── .vscode/              # VSCode workspace config
├── DietRecs.html         # Standalone diet chatbot (HTML)
├── GymChatbot.html       # Standalone gym chatbot (HTML)
├── homepage.HTML         # Legacy homepage with tabs
├── homepage.CSS          # Styles for legacy pages
├── backgroundImage.jpg   # Visual background asset
├── fitnessApple.jpg      # Visual asset
├── heartHealth.png       # Visual asset
├── jsconfig.json         # JS path config for imports
├── next.config.js        # Next.js configuration
├── package.json          # Project metadata and scripts
├── package-lock.json     # Dependency lockfile
├── postcss.config.js     # PostCSS for Tailwind
├── tailwind.config.js    # Tailwind config
└── README.md             # Project documentation
```

---

## 💬 Available Pages

| Path               | Description                              |
|--------------------|------------------------------------------|
| `/`                | Main Next.js chatbot UI                  |
| `/DietRecs.html`   | HTML dietitian chatbot                   |
| `/GymChatbot.html` | HTML fitness chatbot                     |
| `/homepage.HTML`   | Legacy static homepage with tab UI       |

---

## 🛠 How to Customize

- Modify `app/page.js` to update the main chatbot interface
- Add new chatbot logic under `app/api/chat/`
- Convert `.html` pages to Next.js pages as needed
- Tailwind is preconfigured — just use utility classes

---

## ✅ Scripts

```bash
npm run dev        # Start local dev server
npm run build      # Build production version
npm run start      # Start production server
```
