# Kavindu Kavisara — Portfolio Website

A student portfolio built with **Next.js 14**, **Tailwind CSS**, **GSAP**, **Framer Motion**, and **Lenis smooth scroll**.

No public deployment is currently listed.

---

## Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Framework    | Next.js 14 (App Router)           |
| Styling      | Tailwind CSS                      |
| Animations   | GSAP + ScrollTrigger              |
| UI Motion    | Framer Motion                     |
| Smooth Scroll| Lenis                             |
| Fonts        | Syne (headings), DM Sans (body)   |
| Deployment   | Not configured                    |
| Language     | JavaScript (no TypeScript)        |

---

## Folder Structure

```
my-portfolio/
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
└── src/
    ├── app/
    │   ├── globals.css          ← Base styles, CSS variables
    │   ├── layout.jsx           ← Root layout (fonts, metadata, Navbar, SmoothScroll)
    │   ├── page.jsx             ← Homepage
    │   ├── about/
    │   │   └── page.jsx         ← About page
    │   └── work/
    │       ├── page.jsx         ← Work listing page
    │       └── [slug]/
    │           └── page.jsx     ← Dynamic project detail page
    ├── components/
    │   ├── Navbar.jsx           ← Top navigation bar
    │   ├── MobileMenu.jsx       ← Full-screen mobile overlay menu
    │   ├── SmoothScroll.jsx     ← Lenis smooth scroll wrapper
    │   ├── Hero.jsx             ← Homepage hero section
    │   ├── Services.jsx         ← Services section
    │   ├── SelectedWork.jsx     ← Featured projects on homepage
    │   ├── ProjectCard.jsx      ← Reusable project card component
    │   ├── Skills.jsx           ← Skills & tools section
    │   ├── AboutPreview.jsx     ← About teaser on homepage
    │   ├── CTA.jsx              ← Reusable contact call-to-action
    │   ├── Footer.jsx           ← Site footer
    │   ├── AnimatedText.jsx     ← Word-by-word animated text
    │   ├── Reveal.jsx           ← GSAP ScrollTrigger reveal wrapper
    │   └── ProjectVisual.jsx    ← CSS gradient project visual placeholder
    ├── data/
    │   ├── projects.js          ← All project data (edit this to add projects)
    │   ├── services.js          ← Services list
    │   └── skills.js            ← Skills categories and tech tags
    └── lib/
        └── animations.js        ← Shared GSAP & Framer Motion configs
```

---

## Prerequisites

Make sure these are installed on your machine:

- **Node.js** — v18 or newer → [nodejs.org](https://nodejs.org)
- **npm** — comes with Node.js (v9+)
- **Git** → [git-scm.com](https://git-scm.com)

Check your versions:
```bash
node --version    # Should be v18+
npm --version     # Should be v9+
git --version
```

---

## Installation & Running Locally

### Step 1 — Create the project folder

Create a folder called `my-portfolio` on your computer and paste all the files into it, maintaining the exact folder structure shown above.

### Step 2 — Open in IntelliJ IDEA

1. Open **IntelliJ IDEA**
2. Go to **File → Open**
3. Select the `my-portfolio` folder
4. Click **OK / Trust Project**

IntelliJ will detect this as a Node.js project. It may ask you to install Node.js support — say yes.

### Step 3 — Open the terminal inside IntelliJ

- Go to **View → Tool Windows → Terminal**
- Or press `Alt + F12` (Windows/Linux) / `Option + F12` (Mac)

Make sure you're inside the `my-portfolio` folder:
```bash
pwd
# Should show: .../my-portfolio
```

### Step 4 — Install dependencies

```bash
npm install
```

This installs everything listed in `package.json` into a `node_modules` folder.
It may take 1–2 minutes.

### Step 5 — Run the development server

```bash
npm run dev
```

You'll see output like:
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
- Environments: .env.local
```

Open your browser and go to: **http://localhost:3000**

Your portfolio is live locally! 🎉

---

## Editing Your Content

All personal content is stored in the `src/data/` files — you never need to dig through components just to change your name or add a project.

### Changing personal info (name, email, links)
- Email: `kavisaraksamarakoon@gmail.com`
- GitHub: `https://github.com/kavisara-samarakoon`
- LinkedIn: `https://www.linkedin.com/in/kavisara-samarakoon`

### Adding a new project
Open `src/data/projects.js` and add a new object to the `projects` array:
```js
{
  id: 5,                           // Next number in sequence
  slug: "my-new-project",          // URL-friendly name (used in /work/[slug])
  title: "My New Project",
  type: "Frontend Development",
  year: "2025",
  shortDescription: "Short one-liner for cards.",
  overview: "Full description...",
  challenge: "What was hard...",
  myRole: "What you did...",
  tech: ["React", "Tailwind CSS"],
  features: ["Feature one", "Feature two"],
  result: "What you learned...",
  featured: false,                 // true = shows on homepage
}
```

Then open `src/components/ProjectVisual.jsx` and add a matching entry in `visualConfigs`:
```js
"my-new-project": {
  gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
  accentColor: "#22c55e",
  lines: true,
  dots: false,
  label: "New",
},
```

### Changing the accent color
Open `src/app/globals.css` and change `--accent: #D8FF3E;` to any color you like.
Also update it in `tailwind.config.js` under `colors.accent`.

---

## Pushing to GitHub

### Step 1 — Create a new repo on GitHub

1. Go to [github.com](https://github.com) → **New repository**
2. Name it: `portfolio` or `kavindu-portfolio`
3. Set it to **Public**
4. Do **NOT** add a README, .gitignore, or license (we already have these)
5. Click **Create repository**

### Step 2 — Initialize Git locally

In your IntelliJ terminal:
```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
```

### Step 3 — Connect and push to GitHub

Copy the remote URL from your GitHub repo page, then run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual values.

### Step 4 — Verify

Go to your GitHub repo page — all files should be visible there.

### Pushing future changes

Every time you make changes:
```bash
git add .
git commit -m "describe what you changed"
git push
```

---

## Deploying on Vercel

Vercel is the easiest and fastest way to deploy a Next.js project. It's free.

### Step 1 — Create a Vercel account

Go to [vercel.com](https://vercel.com) → Sign up with your GitHub account.

### Step 2 — Import your GitHub repo

1. In Vercel dashboard → **Add New → Project**
2. Click **Import** next to your portfolio repo
3. Vercel will auto-detect it as a Next.js project

### Step 3 — Configure settings (mostly defaults are fine)

| Setting           | Value                       |
|-------------------|-----------------------------|
| Framework Preset  | Next.js (auto-detected)     |
| Root Directory    | `./` (default)              |
| Build Command     | `npm run build` (default)   |
| Output Directory  | `.next` (default)           |
| Install Command   | `npm install` (default)     |

You don't need to change anything — just click **Deploy**.

### Step 4 — Wait for build (~1–2 minutes)

Vercel will install packages, build the project, and deploy it.

### Step 5 — Your deployment URL

Only after a real deployment exists, use the exact URL supplied by the platform
in the site metadata and README. Do not add a placeholder or guessed URL.

### Automatic deployments

Every time you push to GitHub (`git push`), Vercel automatically rebuilds and redeploys. You never need to manually deploy again.

---

## Common Errors & Fixes

### ❌ "Module not found: Can't resolve 'lenis'"
**Cause:** Lenis wasn't installed properly.
**Fix:**
```bash
npm install lenis
```

### ❌ "Cannot use import statement outside a module"
**Cause:** A file that uses browser APIs isn't marked as a client component.
**Fix:** Add `"use client";` at the very top of the file.

### ❌ GSAP ScrollTrigger not working / animations not triggering
**Cause:** GSAP was used in a server component or without registering the plugin.
**Fix:** Make sure the component has `"use client";` at the top, and that you have:
```js
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

### ❌ Fonts not loading / showing fallback system font
**Cause:** Google Fonts failed to load (can happen in limited network environments).
**Fix:** This is just a dev environment issue. Fonts load fine in production on Vercel.
You can also test by connecting to a different network.

### ❌ "hydration mismatch" error in browser console
**Cause:** A component renders differently on the server vs the client (e.g., using `window` without checking).
**Fix:** Wrap the problematic code in:
```js
useEffect(() => {
  // code that uses window or browser APIs
}, []);
```

### ❌ Port 3000 already in use
**Cause:** Another app is using port 3000.
**Fix:** Either stop the other app, or run on a different port:
```bash
npm run dev -- --port 3001
```

### ❌ Build fails on Vercel but works locally
**Cause:** Usually a missing import or a server/client boundary issue.
**Fix:** Run `npm run build` locally first:
```bash
npm run build
```
This catches most build errors before you push. Fix any errors it shows, then push again.

---

## Customization Checklist

Before going live, go through this list:

- [x] Use the correct email, GitHub, and LinkedIn details
- [ ] Add a deployment URL only after a real public deployment exists
- [ ] Review and edit project descriptions in `src/data/projects.js`
- [ ] Check all text in `src/data/services.js` and `src/data/skills.js`

---

## Scripts Reference

| Command         | What it does                              |
|-----------------|-------------------------------------------|
| `npm run dev`   | Start local development server            |
| `npm run build` | Build the project for production          |
| `npm run start` | Run the production build locally          |
| `npm run lint`  | Check for linting/code quality issues     |

---

## Built With

- [Next.js](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS
- [GSAP](https://greensock.com/gsap/) — Professional animation library
- [Framer Motion](https://www.framer.com/motion/) — React animation library
- [Lenis](https://lenis.darkroom.engineering) — Smooth scroll
- [Vercel](https://vercel.com) — Deployment platform

---

*Made by Kavindu Kavisara — NSBM Green University, Sri Lanka*
