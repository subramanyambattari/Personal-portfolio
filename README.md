# Subramanyam Battari - Personal Portfolio

<p align="center">
  <img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/line-neon.gif" width="100%" alt="neon line divider" />
</p>

<p align="center">
  <a href="https://www.subramanyam.live/">Live Site</a> |
  <a href="https://github.com/subramanyambattari/Personal-portfolio">GitHub Repo</a> |
  <a href="https://github.com/subramanyambattari">GitHub Profile</a>
</p>

<p align="center">
  Modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS. It showcases projects, skills, certificates, achievements, experience, writing, resume access, and a polished contact flow.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=000" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=fff" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=fff" alt="Tailwind CSS 4" />
</p>

## Overview

This portfolio is designed to feel current, fast, and recruiter-friendly. It uses the modern Next.js App Router stack with strong SEO, smooth UI motion, markdown-based content, and an accessible contact experience.

## Live Features

- Hero section with a strong intro and personal branding
- Projects section with real-world work and live links
- Skills section powered by a modern stack
- Certificates and achievements sections
- Experience timeline
- Blog system with markdown posts, tags, and featured content
- Resume page with downloadable CV
- Contact form with validation and email delivery
- Theme toggle and command palette navigation
- SEO metadata, Open Graph image, sitemap, and robots support
- Vercel Analytics for lightweight traffic tracking

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16, React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Motion | Framer Motion |
| UI Primitives | Radix UI, cmdk, lucide-react, react-icons |
| Theme | next-themes |
| Forms and Validation | Zod |
| Email | Resend |
| Content | gray-matter, marked, marked-highlight, rehype-highlight, shiki |
| Analytics | @vercel/analytics |
| Deployment | Vercel |

## Sections In The Site

- Home
- Projects
- Skills
- Certificates
- Achievements
- Background
- Blog
- Resume
- Contact

## Content Highlights

- GitHub profile: `subramanyambattari`
- Portfolio website: `https://www.subramanyam.live/`
- Blog content focused on web3, smart contracts, and technical writing
- Certifications and milestones shown directly in the site UI

## Local Setup

```bash
git clone https://github.com/subramanyambattari/Personal-portfolio.git
cd Personal-portfolio
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run start` - run the production server
- `npm run lint` - run ESLint

## Environment Variables

Create a `.env.local` file for local development:

```bash
RESEND_API_KEY=your_resend_api_key
```

The contact form uses this key to send messages through Resend.

## Project Structure

- `app/` - App Router pages, layouts, actions, and route metadata
- `app/components/` - portfolio sections and shared UI
- `components/ui/` - reusable UI primitives
- `lib/` - data, blog helpers, types, and utilities
- `posts/` - markdown blog posts
- `public/` - images, resume assets, certificates, and OG metadata

## SEO And Performance

- Metadata is configured at the layout level
- Open Graph and Twitter card support are included
- Sitemap and robots routes are present
- Images use Next.js optimization where possible
- Framer Motion and scroll animations enhance the experience without overwhelming the page

## Deployment

The site is ready to deploy on Vercel.

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Add `RESEND_API_KEY` in the Vercel project environment variables.
4. Deploy.

## Contact

- GitHub: [subramanyambattari](https://github.com/subramanyambattari)
- LinkedIn: [subramanyam battari](https://www.linkedin.com/in/subramanyam-battari/)
- Email: `subramanyambattari@gmail.com`
- Live portfolio: [subramanyam.live](https://www.subramanyam.live/)

<p align="center">
  <img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/line-neon.gif" width="100%" alt="neon line divider" />
</p>
