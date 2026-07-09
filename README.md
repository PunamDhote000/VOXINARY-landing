# Voxinary Media Ventures LLP — Landing Page

Responsive React landing page built with Vite, matching the official
navy (#0B1F3D) / orange (#F4801F) Voxinary brand identity.

## IMPORTANT — how to extract this zip
Right-click the zip → "Extract All..." and pick a destination folder
(don't create an extra folder with the same name first). After extracting
you should see `package.json` directly inside `voxinary-landing/`.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:5173

## Build for production
```
npm run build
```
Output goes to `dist/`. Deploy that folder to Vercel/Netlify for a public link.

## Structure
```
src/
  components/
    Nav.jsx / Nav.css              (logo, nav links, mobile menu)
    Hero.jsx / Hero.css            (navy hero, Learn/Create/Impact card)
    LogoStrip.jsx / LogoStrip.css  (service pillars strip)
    Services.jsx / Services.css    (Strategic Comm. / Public Affairs / Media)
    Positions.jsx / Positions.css  (5 internship roles + benefits + eligibility)
    Process.jsx / Process.css      (Register -> Assignment -> Selection)
    Testimonial.jsx / Testimonial.css (brand statement)
    CTA.jsx / CTA.css              (contact form)
    Footer.jsx / Footer.css
  App.jsx
  index.css   (design tokens: navy/orange colors, fonts, spacing)
  main.jsx
index.html
```
