# Musafir Café & Bakery — Luxury Artisan Hospitality Web Platform

A luxury editorial website built from scratch for **Musafir Café & Bakery**, an artisan bakery, specialty coffee house, and celebration cake atelier.

Inspired by boutique European patisseries, independent specialty coffee roasteries, and contemporary editorial food magazines.

---

## 1. Design System & Brand Identity

### Palette & Color Architecture
- **Porcelain** (`#FAF7F1`): Primary luminous canvas background.
- **Espresso** (`#29211E`): High-contrast typography, statement dark sections, and luxury footer.
- **Buttercream** (`#EDE2D0`): Warm alternating sections, quote backdrops, and card accents.
- **Cocoa** (`#715448`): Editorial secondary descriptions, subtitles, and metadata.
- **Terracotta** (`#B86E52`): Brand CTA highlights, active indicators, and attention points.
- **Sage** (`#8B9277`): Botanical notes and organic success indicators.

### Typography
- **Editorial Display**: `Cormorant Garamond` & `Playfair Display` for headlines, italic accents, and prices.
- **Body & Interface**: `DM Sans` for clean, modern readability across small screens and tables.

---

## 2. Page Architecture & Features

1. **Announcement Bar (`AnnouncementBar.tsx`)**
   - Slim top bar announcing morning batch timing, cake pre-orders, and quick link.
2. **Navigation Header (`Header.tsx`)**
   - Refined brand wordmark with "Café & Bakery" subtitle.
   - Desktop and fully accessible mobile navigation (dialog semantics, escape key listener, body scroll lock, focus preservation).
   - Direct telephone link and primary "Enquire" action button.
3. **Hero Section (`Hero.tsx`)**
   - Editorial headline *"A Little More Butter. A Lot More Soul."*
   - Asymmetric layout featuring genuine high-resolution bakery photography, floating baker's quote, and micro-value badges (72-hour lamination, 8-year sourdough mother, daily 7 AM batch drops).
4. **Signature Collection (`SignatureCollection.tsx`)**
   - Showcase of signature viennoiserie, cardamom brioche knots, saffron Basque torte, and single-origin pour-over.
   - Flavor note tags, price pills, and pre-order inquiry links that pre-fill the enquiry form.
5. **The Art of Baking (`ArtOfBaking.tsx`)**
   - Editorial storytelling covering stoneground grains, volcanic stone deck ovens, cultured Normandy butter, and direct-trade micro-lots.
6. **Curated Menu (`MenuPreview.tsx`)**
   - Interactive category tabs (Pastries, Cakes, Bread, Coffee, Seasonal Specials) with dynamic item counts.
   - Authentic culinary descriptions, dietary markers (Vegetarian, Vegan, Contains Nuts, Gluten-Friendly), and pre-order links.
7. **Bespoke Cakes & Celebrations (`CustomCakes.tsx`)**
   - High-contrast section covering custom cakes, serving sizes, lead times (72 hours), and design directions.
   - One-click trigger leading directly to the custom cake inquiry flow.
8. **Café Experience & Gallery (`CafeExperience.tsx` & `Gallery.tsx`)**
   - Asymmetric masonry grid featuring pastry lamination, morning light, espresso extraction, and bread scoring.
   - Category filtering (All, Viennoiserie, Specialty Coffee, Artisan Craft, The Café) with interactive modal lightbox viewer.
9. **Customer Enquiry Section (`EnquirySection.tsx` & `EnquiryForm.tsx`)**
   - Client-side validation: Full Name, Email (RFC regex), Phone, Enquiry Type, Desired Date, Message, and Privacy Consent.
   - Honest demo mode explanation: logged in console and local state, avoiding simulated delivery deception.
   - Clear failure/success states and reset controls.
10. **Visit The Atelier (`VisitUs.tsx`)**
    - Configurable address, opening hours, direct phone, email, Google Maps directions, and transit/parking tips.
11. **Footer (`Footer.tsx`)**
    - Refined dark espresso footer with brand statement, explore links, hours, verified social channels, and copyright.
12. **Back-to-Top Control (`BackToTop.tsx`)**
    - Smooth scroll button with auto-reveal threshold.

---

## 3. Technology Stack

- **React 19**
- **TypeScript (Strict mode & verbatimModuleSyntax)**
- **Vite 8**
- **Tailwind CSS 3.4**
- **Lucide React** (icons)

---

## 4. How to Run Locally

### Prerequisites
Node.js (v18+) and npm.

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 5. Connecting a Real Email / Form Endpoint

The enquiry form currently operates in **Honest Showcase Mode**, validating inputs and preserving state without making unwarranted third-party HTTP calls.

To connect this to a live email delivery service:

1. **Option A: Formspree / Basin / Formkeep (No-backend required)**
   In `src/components/EnquiryForm.tsx`, replace the simulated `setTimeout` inside `handleSubmit` with:
   ```ts
   const response = await fetch('https://formspree.io/f/{YOUR_FORM_ID}', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
     body: JSON.stringify(formData),
   });
   if (response.ok) {
     setStatus('success');
   } else {
     setStatus('simulated_error');
   }
   ```

2. **Option B: Resend / SendGrid / Postmark (via API Route or Serverless Function)**
   Create a serverless endpoint (e.g. Vercel `/api/enquire` or Cloudflare Worker) that verifies the payload and sends an email to `bonjour@musafircafe.com`:
   ```ts
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(req: Request) {
     const data = await req.json();
     await resend.emails.send({
       from: 'Musafir Web <orders@musafircafe.com>',
       to: 'bonjour@musafircafe.com',
       subject: `New ${data.enquiryType} Enquiry from ${data.name}`,
       text: data.message,
     });
     return Response.json({ success: true });
   }
   ```
