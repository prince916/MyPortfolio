# Portfolio Codebase Context

## 1. Project Overview

This repository is a single-page personal portfolio website built with React (Create React App) and styled primarily with Tailwind CSS utility classes.

Core goals of the app:
- Present personal introduction and skills.
- Showcase projects.
- Show resume-like sections (education, skills, experience, achievements).
- Provide a contact form integrated with EmailJS.

Rendering model:
- Client-side rendered SPA.
- Section-based scrolling navigation via `react-scroll`.
- No backend API or server-side rendering.

---

## 2. Tech Stack

Runtime/framework:
- `react` 18.2
- `react-dom` 18.2
- `react-scripts` 5.0.1 (CRA build/runtime tooling)

UI/styling:
- `tailwindcss` 3.3.2
- `framer-motion` (section/tab animations)
- `react-icons` (icons throughout)
- Google Fonts imported in `src/index.css`

UX helpers:
- `react-scroll` (navbar smooth scrolling)
- `react-simple-typewriter` (hero typing text effect)

Form/communication:
- `@emailjs/browser` and `emailjs-com` (EmailJS sending; only one is used in code)

Testing dependencies are present from CRA template:
- `@testing-library/*`, `web-vitals`

---

## 3. Top-Level Structure

Important directories/files:
- `src/`: application source code.
- `public/`: static host files and SPA redirect config (`_redirects`).
- `build/`: production output (already generated and committed in current workspace view).
- `package.json`: scripts and dependency manifest.
- `tailwind.config.js`: Tailwind theme customization.

Main NPM scripts:
- `npm start`: development server.
- `npm run build`: production build.
- `npm test`: CRA test runner.

---

## 4. App Composition and Navigation

Entry point:
- `src/index.js` mounts `<App />` in `React.StrictMode`.

Main page composition (`src/App.js`):
1. Navbar
2. Banner
3. Features
4. Projects
5. Resume
6. Contact
7. Footer
8. FooterBottom

Navigation anchors:
- `home`
- `features`
- `projects`
- `resume`
- `contacts`

`src/constants/index.js` contains the nav model (`navLinksdata`) consumed by `Navbar`.

---

## 5. Component Inventory and Responsibilities

### 5.1 Navbar (`src/components/navbar/Navbar.js`)
- Sticky header with profile image and nav links.
- Desktop: inline section links using `react-scroll`.
- Mobile: slide-in full-height menu controlled by `showMenu` state.
- Includes social links in mobile panel.

### 5.2 Banner (`src/components/banner/Banner.js`)
- Container section for hero area.
- Composes left and right hero panes.

### 5.3 LeftBanner (`src/components/banner/LeftBanner.js`)
- Intro/headline text.
- Typewriter effect cycling role labels.
- Social icons/links.
- “Best Skills on” icon grid.

### 5.4 RightBanner (`src/components/banner/RightBanner.js`)
- Hero image (`withoutBG`) and decorative gradient block.

### 5.5 Features (`src/components/features/Features.js`)
- Renders six feature cards via reusable `Card` component.

### 5.6 Card (`src/components/Card.js`)
- Generic feature card with icon, title, description, and hover reveal animation.

### 5.7 Projects (`src/components/projects/Projects.js`)
- Project showcase section.
- Uses `ProjectsCard` instances with title/description/image props.

### 5.8 ProjectsCard (`src/components/projects/ProjectsCard.js`)
- Visual project tile with image zoom hover effect.
- Includes GitHub and globe icons linking to the same profile URL.

### 5.9 Resume (`src/components/resume/Resume.jsx`)
- Tab-like section selector with local state:
  - Education
  - Skills
  - Experience
  - Achievements
- Conditionally renders one subcomponent at a time.

### 5.10 Education / Experience / Achievements (`src/components/resume/*.jsx`)
- Timeline-like resume cards.
- Animated opacity transitions using `framer-motion`.
- Content currently includes repeated placeholder-like descriptions.

### 5.11 Skills (`src/components/resume/Skills.jsx`)
- Animated skill bars using `framer-motion` with hardcoded percentages.

### 5.12 ResumeCard (`src/components/resume/ResumeCard.jsx`)
- Reusable card for timeline blocks with title/subtitle/result/description.

### 5.13 Contact (`src/components/contact/Contact.js`)
- Contact form with controlled state fields.
- Local validation logic and success/error messaging.
- Email send through `emailjs.sendForm(...)` with hardcoded service/template/public key IDs.
- Uses `ContactLeft` for profile/summary card.

### 5.14 ContactLeft (`src/components/contact/ContactLeft.js`)
- Profile image, contact info, short description, social links.

### 5.15 Footer / FooterBottom (`src/components/footer/*.js`)
- Footer with social icons and static link groups.
- Copyright strip.

### 5.16 Layout Title (`src/components/layouts/Title.js`)
- Standardized section title/subtitle renderer.

---

## 6. Data and Asset Flow

Static data:
- `src/constants/index.js`: navbar links array.

Assets:
- `src/assets/index.js` centralizes image exports.
- Assets grouped by domain:
  - `images/projects`
  - `images/testimonial`
  - `images/contact`

Component -> data relationships:
- `Navbar` consumes `navLinksdata`.
- `Projects` consumes image exports from assets index.
- `ContactLeft`, `Navbar`, `RightBanner` consume personal/profile images.

No remote API data fetching is used.

---

## 7. Styling System

Primary styling approach:
- Tailwind utility classes applied directly in JSX.

Global CSS files:
- `src/index.css`: Tailwind directives + Google font import.
- `src/App.css`: mostly CRA default styles, largely unused by current component-driven styling.

Tailwind theme customizations in `tailwind.config.js` include:
- custom breakpoints (`xs`, `sml`, `mdl`, etc.)
- custom font families (`bodyFont`, `titleFont`)
- custom colors (`bodyColor`, `lightText`, `designColor`)
- custom shadow (`shadowOne`)

---

## 8. Deployment and Routing Context

- `public/_redirects` includes SPA fallback rule: `/* /index.html 200`
- This is typical for Netlify-style static hosting to support client-side routes.
- `build/` directory exists, indicating local production build artifacts are already generated.

---

## 9. Behavior Notes and Observed Risks

The app runs as a straightforward portfolio SPA, but several code quality/configuration issues are present:

1. Tailwind config format risk:
- `tailwind.config.js` uses `export const ...` style instead of the common `module.exports = { ... }` shape expected by many Tailwind/CRA setups.
- If Tailwind compilation works currently, tooling may still be tolerant, but this is fragile.

2. Invalid/typo utility classes:
- Multiple classes include malformed tokens (examples like `hover: --y-translate1`, `hover:-y-translate1`, `text-grey-200`, `rpunded-none`, `from-[#le2024]`).
- These classes do not map cleanly to Tailwind utilities, so intended styles/animations may not apply.

3. Contact form field `name` attributes are bound to state values instead of field identifiers:
- e.g., `name={username}` instead of `name="user_name"`.
- This can break EmailJS template field mapping.

4. Duplicate / inconsistent contact submit flows:
- Validation and success logic in `handleSend`.
- Email sending in `sendEmail`.
- Button uses `onClick={handleSend}` while form uses `onSubmit={sendEmail}`.
- This creates split responsibilities and possible mismatch between validation and actual send behavior.

5. Sensitive key handling:
- EmailJS IDs/public key are hardcoded in client source.
- For a public frontend this is common for EmailJS public key, but project should still move IDs to environment variables for maintainability.

6. Accessibility/security polish gaps:
- Several `target="_blank"` links do not include `rel="noreferrer noopener"`.
- Many clickable icons are wrapped in `span` instead of semantic buttons/anchors.

7. Placeholder and repeated text content:
- Multiple resume sections reuse similar text blocks; project descriptions contain lorem ipsum placeholders.

8. Unused/duplicate dependencies:
- Both `emailjs-com` and `@emailjs/browser` are installed, while code uses `@emailjs/browser` import path.
- Some imported assets in modules are not used.

---

## 10. Suggested Next Refactoring Priorities

1. Stabilize Tailwind config and fix invalid utility class names.
2. Refactor contact form to a single submit path:
- validate -> send -> success/failure handling.
3. Use stable `name` keys for EmailJS input mapping.
4. Add `rel="noreferrer noopener"` for external links and improve semantic accessibility.
5. Replace placeholder text with real content and per-project outbound links.
6. Remove unused dependencies/imports and run a lint pass.

---

## 11. Quick Mental Model

If you need to modify this codebase quickly:
- Add/remove sections in `src/App.js`.
- Edit menu items in `src/constants/index.js` and ensure section IDs match.
- Update portfolio images in `src/assets/images/*` and export them from `src/assets/index.js`.
- Most UI behavior is local component state, no global store.
- Contact form logic is the only interactive workflow touching an external service.

This repository is a good base for a personal portfolio, with most work now centered on cleanup, consistency, and production hardening rather than architecture changes.
