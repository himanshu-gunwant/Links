# Himanshu Gunwant — Links Hub

This repository contains the source code for my personal links page at [links.himanshugunwant.com](https://links.himanshugunwant.com).

I built this to serve as a fast, single hub for my online presence — linking to my social profiles, projects, writing, and contact channels. It shares the same dark aesthetic, typography, and motion design as my main portfolio at [himanshugunwant.com](https://himanshugunwant.com).

---

## ✦ Features

- **Unified Design**: Dark-first aesthetic matching my primary website (`#0f0f0f` background, `#f5f5f5` text, Geist Sans & Mono fonts, hairline borders).
- **Lightweight Motion**: Pure CSS `fadeInUp` entrance animations with staggered delays. Respects `prefers-reduced-motion`.
- **Single-File Configuration**: All links, social handles, and profile metadata are centralized in [`config/links.ts`](./config/links.ts).
- **SEO & Social Sharing**: Dynamic OpenGraph and Twitter card image generation (`app/opengraph-image.tsx`), dynamic `sitemap.ts`, `robots.ts`, and Schema.org JSON-LD structured data (`ProfilePage` and `ItemList`).
- **Accessible**: Semantic HTML, high-contrast text, clear focus rings, and proper link attributes (`rel="noopener noreferrer"`).
- **Fast Build & Load**: Next.js 16 App Router with React 19 and Tailwind CSS v4. No heavy runtime animation or styling libraries.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: [Geist](https://vercel.com/font) (Sans & Mono)
- **Language**: TypeScript
- **Deployment**: [Vercel](https://vercel.com)

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css            # Tailwind CSS v4 theme tokens & animations
│   ├── layout.tsx             # Root layout, fonts & metadata
│   ├── opengraph-image.tsx    # Dynamic OpenGraph card generation
│   ├── page.tsx               # Main page, structured data & card list
│   ├── robots.ts              # Dynamic robots.txt
│   ├── sitemap.ts             # Dynamic sitemap.xml
│   └── twitter-image.tsx      # Twitter summary card export
├── components/
│   ├── Footer.tsx             # Minimal footer with copyright & links
│   ├── Header.tsx             # Avatar, name, tagline & quick social links
│   ├── Icons.tsx              # Lightweight inline SVG icon set
│   ├── JsonLd.tsx             # Schema.org structured data component
│   └── LinkCard.tsx           # Individual link item card with stagger delay
├── config/
│   └── links.ts               # Central configuration for all links & profile data
└── public/                    # Favicon, icons, avatar, and static text files
```

---

## 🚀 Running Locally

### 1. Prerequisites
- Node.js 20+ (or Node.js 18.18+)
- npm (or pnpm / yarn)

### 2. Clone the repository
```bash
git clone git@github.com:himanshu-gunwant/Links.git
cd links
```

### 3. Install dependencies
```bash
npm install
```

### 4. Configure environment variables (optional)
Copy `.env.example` to `.env.local` if you need custom URL overrides:
```bash
cp .env.example .env.local
```

### 5. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

- `npm run dev` — Starts the local Next.js development server with Turbopack.
- `npm run build` — Generates an optimized production build.
- `npm run start` — Starts the production server locally after building.
- `npm run lint` — Runs ESLint to verify code quality.

---

## ⚙️ Customization

If you want to use this codebase for your own links page:

### 1. Update Profile & Links
Open [`config/links.ts`](./config/links.ts):
- Update `header` with your name, tagline, avatar path, and website URL.
- Edit `quickSocials` to set the icons displayed directly under your bio.
- Modify or add entries in the `links` array:

```ts
{
  id: "my-project",
  label: "Project Name",
  href: "https://example.com",
  description: "Short description of what this is.",
  tag: "example.com",
  icon: "website",
  highlight: false,
}
```

### 2. Icons
Available icon names in `components/Icons.tsx`:
`website`, `github`, `linkedin`, `instagram`, `x`, `youtube`, `email`, `medium`, `devto`, `hashnode`, `discord`, `aboutme`, `gravatar`, `soloto`.

To add a new platform icon, add its SVG case to [`components/Icons.tsx`](./components/Icons.tsx) and update `IconName` in [`config/links.ts`](./config/links.ts).

### 3. Avatar & Static Assets
Replace `public/profile.jpg` with your own photo, or update the `avatar` path in `config/links.ts`. Update `public/favicon.ico`, `public/icon.png`, and `public/apple-icon.png` with your branding.

---

## 🌐 Deployment

This site is deployed on [Vercel](https://vercel.com) and mapped to the subdomain `links.himanshugunwant.com`.

### Deploying to Vercel
1. Import the repository in your Vercel dashboard.
2. The framework preset will automatically detect Next.js with standard build settings:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
3. Under **Project Settings → Domains**, add your custom domain or subdomain (e.g., `links.yourdomain.com`).
4. Set a DNS `CNAME` record with your DNS provider:
   - **Host / Name**: `links`
   - **Target / Value**: `cname.vercel-dns.com`

---

## 📬 Connect With Me

- **Website**: [himanshugunwant.com](https://himanshugunwant.com)
- **GitHub**: [@himanshu-gunwant](https://github.com/himanshu-gunwant)
- **X / Twitter**: [@himanshugg_](https://x.com/himanshugg_)
- **LinkedIn**: [himanshugunwant](https://www.linkedin.com/in/himanshugunwant/)
- **YouTube**: [@Himanshu-Gunwant](https://www.youtube.com/@Himanshu-Gunwant)
- **Instagram**: [@himanshugunwant_](https://www.instagram.com/himanshugunwant_)
- **Email**: [hello@himanshugunwant.com](mailto:hello@himanshugunwant.com)
