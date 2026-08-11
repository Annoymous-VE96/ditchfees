# HOMEPAGE TEMPLATE — High-Converting Local Service Business
### CLAUDE.md / build spec — follow this layout EXACTLY, in EXACT order

Reverse-engineered from: leed-agency.com (canonical reference), perksplastering.com.au, levrbuyersagents (LEVR), phocis-therapy.com.au, 247carconnect.com.au. All five share one conversion architecture with different visual "skins". This document is the single source of truth. Do not invent new sections, do not reorder, do not skip.

---

## 0. NON-NEGOTIABLE RULES

1. **Section order is fixed.** Build the 13 sections below in the exact order given.
2. **The lead-capture form appears TWICE**: inside the hero (above the fold, right side on desktop) and again in the Final CTA section. Identical fields both times.
3. **The phone number appears at minimum 5 times**: nav, hero, "Why us" section, mid-page CTA band, final CTA. Always a `tel:` link.
4. **Social proof appears within the first viewport**: a Google rating badge (`5.0 · 44 reviews`) sits directly above the H1, linked to the business's Google reviews. include the @images/Google.svg icon in this badge.
5. **Every section opens with an "eyebrow" label**: small muted text preceded by a small dot SVG icon (e.g. `• Our services`), letter-spaced. Never a dash character.
6. **Every H1/H2 uses the keyword-highlight technique**: a gradient text fill + type shift on 2–3 key words (see §2.3).
7. **Copy is plain-spoken, specific and short.** No corporate filler. See §4.
8. **Real numbers everywhere**: years in business, projects completed, review count, response time. Never vague ("many happy clients" ❌ → "86+ happy clients" ✅).
9. **One page, one goal**: get a quote request or a call. Every section funnels toward it.
10. **Light theme base, dark accent sections.** The site is light-dominant: white/off-white is the default background for most sections. Rhythm comes from 2–3 deliberately DARK accent sections (choose from: Why Us + Stats, Process, Final CTA; Footer is always dark) plus the photo hero. Never more than two dark sections adjacent, and never a dark-dominant page.
11. **Icons only, NEVER emojis.** Every symbol on the page (phone, stars, checkmarks, arrows, play buttons, plus/minus) is an inline SVG icon (Lucide/Heroicons style, 1.5px stroke). No emoji characters anywhere in markup or copy.
12. **No em dashes anywhere in website copy.** Rewrite with commas, periods, or colons. Eyebrow labels use a small dot icon, not a dash (see §2.6). Checklist markers are thin SVG line/check icons, not dash characters.
13. **Full-bleed background images are LIGHT images.** Choose bright, well-lit photography, then lay a SUBTLE dark gradient on top for text contrast. Never bake darkness into the image or use a heavy flat overlay (see §2.7).
14. **All cards, buttons, chips and form fields on image/dark backgrounds use the glass system**: low-opacity white gradient + backdrop blur (see §2.7). This is the signature surface treatment.

---

## 1. PAGE ARCHITECTURE (EXACT SECTION ORDER)

| # | Section | Background | Purpose |
|---|---------|-----------|---------|
| 1 | Sticky Navbar | Transparent over hero → solid light on scroll | Orientation + instant CTA |
| 2 | Hero + Lead Form | Light full-bleed photo + subtle dark gradient (§2.7) | Value prop + capture above fold |
| 3 | Logo Marquee | White/light | Borrowed trust |
| 4 | Services Grid | White/light | What we do (numbered image cards) |
| 5 | Why Us + Stats | DARK ACCENT: light photo + gradient overlay | Differentiation + proof numbers |
| 6 | Process Steps | White/off-white (mid-CTA band inside it = dark strip) | Remove uncertainty (4 steps) |
| 7 | Recent Work | White/light | Visual proof (carousel/grid) |
| 8 | Google Reviews | Off-white, centered | Deep social proof |
| 9 | FAQ Accordion | White/light | Objection handling |
| 10 | Social Feed | White/light | Recency/"alive" signal |
| 11 | Final CTA + Form (repeat) | DARK ACCENT | Last-chance capture |
| 12 | Social Banner | Merges into 11/13 dark zone | Follow links |
| 13 | Footer | Dark | Sitemap + trust badges |

Body of the page reads light; the dark accent sections (5, 11, footer) punctuate it. If the brand calls for a third dark moment, make Process (6) dark instead of light, but then Recent Work (7) and Reviews (8) must stay light.

---

## 2. DESIGN SYSTEM

### 2.1 Choose ONE skin (same layout, different tokens)
All skins are LIGHT-dominant (see §0 rule 10): `--bg-light` is the page default, `--bg-dark` is reserved for the 2–3 accent sections and footer.

**Skin A — "Studio Mono"** (Leed Agency — default, use unless brand dictates otherwise)
```
--bg-dark:      #0a0a0a;
--bg-light:     #ffffff;
--bg-off:       #f6f6f4;
--text-dark:    #0a0a0a;
--text-light:   #fafafa;
--text-muted:   #737373;      /* gray-500 */
--accent:       #0a0a0a;      /* mono — accent is black on light, white on dark */
--border:       rgba(0,0,0,0.08);
```
Feel: black & white editorial studio. Color comes only from photography and client logos.

**Skin B — "Coastal Warm"** (LEVR / Phocis)
```
--bg-dark:      #1c2a2e;      /* deep slate-teal, used sparingly */
--bg-light:     #faf6f0;      /* warm cream — PRIMARY background */
--bg-off:       #f1eae0;
--text-dark:    #22303a;
--accent:       #3f7670;      /* muted teal/sage */
```
Feel: calm, premium, editorial serif-accent. Hero uses bright landscape photography (beach/water) with the subtle gradient; body sections cream.

**Skin C — "Bold Trade"** (Perks Plastering)
```
--bg-dark:      #120a1e;      /* near-black purple */
--bg-light:     #ffffff;
--accent:       #a855f7;      /* vivid gradient: #d946ef → #7c3aed */
--accent-grad:  linear-gradient(90deg,#e879f9,#8b5cf6);
```
Feel: energetic tradie brand. Accent used on 1–2 italic words per headline and on primary buttons (gradient fill, 8–12px radius).

**Skin D — "Prestige Gold"** (24-7 Car Connect, re-based to light)
```
--bg-light:     #faf9f6;      /* warm ivory — page default */
--bg-off:       #f2efe8;
--bg-dark:      #0d0d0d;      /* accent sections + footer only */
--accent:       #c9a227;      /* muted gold */
--border:       rgba(201,162,39,0.25);
```
Feel: luxury. Ivory-light page with hairline gold details; the dark accent sections carry the premium black-and-gold moment.

### 2.2 Typography
- **Font**: one modern grotesk for everything — General Sans, Space Grotesk, Hanken Grotesk, or Inter (tight). Skin B may pair a serif or italic display for accent words.
- **H1 (hero)**: `clamp(2.5rem, 6vw, 4.5rem)`, weight 600–700, `letter-spacing: -0.03em`, `line-height: 1.05`.
- **H2 (sections)**: `clamp(2rem, 4vw, 3rem)`, weight 600, tracking-tight.
- **Eyebrow**: 0.75–0.85rem, weight 500, muted. Format: small filled dot icon (4–6px circle SVG) + gap + label, e.g. `• Why Leed Agency`. The dot is an SVG element, never a text dash or bullet character.
- **Body**: 1–1.125rem, `line-height: 1.6`, muted color, max-width ~60ch.
- **Sentence case headlines ending in a period.** ("We keep it simple. No fluff." / "Walls worth showing off.")

### 2.3 Keyword-highlight headline technique (MANDATORY on H1 + all H2s)
Every headline emphasizes a small run of key words with a visually distinct treatment.

**How many words:** 2–3 highlighted words is the healthy default. 4–5 is the absolute maximum. Never highlight a whole line or more than one run per headline.

**Where:** anywhere natural in the sentence. Mid-title (`Hervey Bay's specialists in [domestic & commercial] plastering.`) and end-of-title (`We make it [simple].`) both work; pick the words carrying the meaning (the service, the outcome, the differentiator), not filler words.

**Treatment = gradient + type change (combine both):**
1. **Gradient text fill** on the highlighted run:
   ```css
   .hl {
     background: var(--accent-grad); /* per-skin gradient below */
     -webkit-background-clip: text;
     background-clip: text;
     color: transparent;
   }
   ```
   Per-skin gradients:
   - Skin A (Studio Mono): subtle tonal gradient, `linear-gradient(100deg, #ffffff, #9ca3af)` on dark / `#0a0a0a → #6b7280` on light. Reads as a soft silver sheen, not a color pop.
   - Skin B (Coastal Warm): `linear-gradient(100deg, #3f7670, #7fae9e)`.
   - Skin C (Bold Trade): `linear-gradient(90deg, #e879f9, #8b5cf6)`.
   - Skin D (Prestige Dark): `linear-gradient(100deg, #e6c65a, #c9a227)`.
2. **Plus a type shift** on the same run, pick ONE per site and use it consistently:
   - *Italic serif/display face* (e.g. an italic of a serif like Fraunces/Instrument Serif) while the rest stays grotesk. Best for Skins B and D.
   - *Weight drop* (e.g. 700 → 400/300 at the same size). The Leed signature; best for Skin A.
   - *Italic of the same grotesk* with slight weight change. Best for Skin C.

**Rules:**
- The un-highlighted remainder stays in the base heading color and weight.
- One consistent highlight treatment sitewide; do not mix serif-italic on one H2 and weight-drop on another.
- Gradient direction consistent sitewide (~90–100deg).
- The highlighted words must still pass contrast: keep the gradient's darkest/lightest stop readable on that section's background.
- Examples: `We are the [Google Ads] & Web Design experts.` / `Plastering done [properly].` / `Buy [Smarter] in the Shire.` / `Rated [5.0 on Google] by 44+ clients.`

### 2.4 Shape language
- **Buttons**: slightly rounded rectangles, `border-radius: 8–12px`. NO pill buttons (`border-radius: 9999px` is banned on buttons). 14–16px vertical, 24–32px horizontal padding. On light backgrounds: Primary = solid (accent or dark fill), Secondary = 1px outline. On image/dark backgrounds: both use the glass surface (§2.7), Primary distinguished by a solid white/accent fill. Primary CTA ends with a trailing arrow SVG icon (never the `→` text character).
- **Chips/badges** (rating badge, trust chips, stat labels): same 8–12px radius family as buttons for consistency. Small informational chips may go up to `radius: 10px`; nothing fully pill-shaped.
- **Cards**: `border-radius: 16–24px`, 1px subtle border, NO heavy shadows. Light sections: `box-shadow: 0 1px 2px rgba(0,0,0,.05)` max. Image/dark sections: glass surface (§2.7).
- **Images**: radius 16–24px, always `object-fit: cover`.
- **Section padding**: `py-20` to `py-28` desktop (80–112px), `py-14` mobile. Max content width 1200–1280px.

### 2.6 Iconography (icons only, zero emojis)
- One icon set sitewide: Lucide or Heroicons outline, 1.5px stroke, 16–20px, `currentColor`.
- Required icon usage: phone handset (all phone CTAs), star (ratings, filled gold in review contexts), check or thin horizontal line (checklist markers), arrow-right (all "Get a quote", "Explore service", "View all" links), plus/x (FAQ accordion), play circle (social reel cards), map pin (coverage), clock (hours).
- Google "G", partner and platform logos are inline SVG logo marks, never emoji or unicode substitutes.
- Grep-check the final build for emoji codepoints and for `—`/`–` characters in rendered copy: both must return zero.

### 2.7 Image treatment + glass surface system (signature aesthetic)
**Full-bleed background images:**
- The source image itself is LIGHT: bright, naturally lit, airy photography (white interiors, daylight coastal shots, pale walls). Never a dark or pre-darkened image.
- Contrast comes from a SUBTLE dark gradient layered on top, e.g. `linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.60) 100%)`. The photo must remain clearly visible and readable behind it; if the image looks "dark" the overlay is too heavy.
- Optionally add a soft radial or side vignette behind the text column only (`radial-gradient` up to rgba(0,0,0,0.35)) instead of darkening the whole frame.

**Glass surface (cards, buttons, chips, form fields, stat tiles on image/dark backgrounds):**
```css
.glass {
  background: linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 100%);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 20px; /* cards; 8–12px for buttons and chips */
}
```
- The low-opacity WHITE gradient (lighter at top-left, fading toward bottom-right) is what gives the frosted depth; a flat rgba fill is not acceptable.
- Form inputs inside a glass card: transparent fill, bottom-border-only (`1px solid rgba(255,255,255,0.25)`), white text, placeholder at `rgba(255,255,255,0.45)`.
- Submit button inside glass form: solid white, 8–12px radius, dark text (highest contrast element in the card).
- Stat tiles (§ Section 5), hero rating chip, trust chips, mid-CTA band buttons on dark: all use `.glass`.
- Provide a fallback for browsers without `backdrop-filter`: `background: rgba(20,20,20,0.65)`.

### 2.5 Motion (tasteful and subtle, strictly limited)
Animation exists to make the page feel considered, never to perform. The complete allowed set:
- **Scroll-in reveal**: fade + 16–20px rise, triggers once, 0.5–0.6s ease-out, 60–90ms stagger between siblings (cards, steps, review tiles). Applied per section, not per word.
- **Logo marquee**: infinite linear scroll, ~30s loop, pause on hover.
- **Work carousel**: slow auto-scroll marquee (two rows scrolling opposite directions is the Leed signature), pause on hover.
- **Button hover**: background/brightness shift over 0.2s + trailing arrow icon nudges 4px right. Optional 1px lift (`translateY(-1px)`); no scale-ups beyond 1.02.
- **Card hover**: image inside scales to 1.03 over 0.4s, card border/shadow deepens slightly. No tilt, no glow.
- **FAQ accordion**: height + icon rotation, 0.25s ease.
- **Navbar**: background/border fade-in on scroll, 0.3s.
- **Hero (optional, one only)**: a single slow Ken Burns drift on the background photo (scale 1.0 → 1.05 over 20s+) OR a one-time staggered entrance of the hero elements. Not both.
Banned: parallax scrolling, scroll-jacking, text scramble/typewriter effects, continuous floating/pulsing elements, spinning icons, count-up numbers longer than 1s, animated gradients on large surfaces.
All motion wrapped in `@media (prefers-reduced-motion: no-preference)`; page must be fully usable with zero animation.

---

## 3. SECTION-BY-SECTION SPEC

### SECTION 1 — Sticky Navbar
Layout: `logo | centered links | socials · phone · CTA button`
- Logo left (SVG/PNG, max-height 36px).
- Center links, in this order: `Home  Services  About  Our Work/Projects  Blog  Contact`.
- Right cluster: 2–3 social icons (Instagram, Facebook, LinkedIn) · phone number as text link · **CTA button** (8–12px radius, "Get a quote" / "Free quote" / "Free Strategy Call").
- Transparent over hero, gains solid `--bg-dark` background + hairline bottom border after 40px scroll.
- Mobile: logo + phone icon + hamburger; CTA button stays visible.

### SECTION 2 — Hero + Lead Form  ⭐ most important section
**Layout (desktop)**: 2 columns. Left ~55–60%: content. Right ~40%: glass form card (§2.7). Full-bleed background photo: real business/founders/location shot, NOT stock-looking, and a LIGHT image (bright interior, daylight) with the subtle dark gradient from §2.7 layered over it. Min-height ~90vh.

**Left column, top to bottom (exact order):**
1. Google rating badge — glass chip (8–12px radius): Google "G" SVG mark + 5 gold star SVG icons + `5.0 · 44 reviews`, links to Google reviews. Small, subtle, sits above H1.
2. **H1** — identity + service + geography formula (see §4.1). 2–3 lines max.
3. Subhead — 1–2 sentences, 20–35 words: who you serve + what outcome + coverage area.
4. **Trust chip row** — 3 items, each an SVG logo/icon + label: certifications, partner badges, or key promises (`Google Partner · Shopify Partner · Webflow Partner` / `Domestic & Commercial · Insurance-Approved · Free On-Site Quotes`).
5. **Dual CTA row**: phone button (phone handset SVG icon + number, solid white with dark text) + `Get a quote` button (glass, trailing arrow SVG icon, scrolls to #contact or the hero form). Both 8–12px radius.

**Right column — the glass form card (§2.7 surface, bottom-border-only inputs):**
- Card title: `Request a quote` / `Request a free quote` / `Book your free strategy call`
- Subtitle microcopy: `Free strategy call · No obligation`
- Fields (exact, in order): **Name** · **Phone** · **Email** · **Service** (select dropdown listing the actual services + a "Not sure / something else" option) · **Message (optional)** textarea
- Submit button (full width, solid): `Request my quote`
- Under-button microcopy: `Same-business-day response · No obligation`
- Mobile: form card stacks BELOW hero content, full-width.

### SECTION 3 — Logo Marquee
- One-line label above, small & muted: `Trusted by some of the biggest name brands` / `Trade-grade materials we work with` / `Trusted to source every major brand`.
- 5–8 logos, grayscale or monochrome-treated, in an infinite horizontal marquee (duplicate the logo set 3–4× in DOM for seamless loop).
- No logos available? Use supplier/material/manufacturer logos (Perks pattern) or brand-name text badges.
- Height ~90px. Light background.

### SECTION 4 — Services Grid
- Eyebrow: `• Our services`
- **Split header row**: H2 left (`A focused set of services built to drive growth.` pattern), intro paragraph right-aligned in second column — 2–3 sentences with personality ("We don't just slap stuff on a wall and bolt…").
- **3–5 numbered cards, every card MUST include an image** (text-only service cards are not acceptable). Card anatomy, top to bottom:
  1. Image (screenshot/photo of that service in action; real work, not stock), radius-16, ~16:10, hover-scales per §2.5
  2. Number badge `01` (small, mono-spaced, in a bordered chip)
  3. Service title (H3)
  4. 1–2 sentence description — concrete, outcome-led
  5. Link: `Explore service →`
- Grid: 3-up desktop (5 services = 3 + 2 rows), 1-up mobile. Whole card clickable.

### SECTION 5 — Why Us + Stats
Section with a full-bleed background photo (location/landscape/team). Per §2.7: LIGHT source image (e.g. bright coastal shot) with the subtle dark gradient over it.
- Eyebrow: `• Why [Business Name]` (dot icon + label)
- H2: short manifesto — `We keep it simple. No fluff.` / `Plastering done properly.` / `Independent. Experienced. On your side.`
- Paragraph: 2–3 sentences of positioning.
- **Checklist**: exactly 6 items, 2-column grid, each marked with a thin horizontal line or check SVG icon (never a dash character). Items are concrete promises: `Fixed prices in writing · No lock-in contracts · Direct access to the strategist · Fully insured · Transparent reporting, always · We work to your schedule`.
- CTA row: `[About us]` (solid) + `[phone]` (glass button, phone icon).
- **Stats grid — 2×2, right side or below**: 4 tiles, each a `.glass` card (white gradient + blur, §2.7). Formula: big number + tiny label. Star in `5.0★` is a star SVG icon.
  - `97+ Successful projects` · `86+ Happy clients` · `5.0★ Google rating (44)` · `Certified Google & Shopify`
  - Perks: `10+ Years` · `100% Paint-ready` · `5.0★` · `Free quotes` — always exactly 4, always mixing longevity / volume / rating / guarantee.

### SECTION 6 — Process Steps (darkest section)
- Eyebrow: `• How we work`
- H2: `A proven process, start to finish.` / `How a job runs with us.` / `A seven-step path to the right property.`
- **4 steps** (LEVR uses 7 for high-consideration purchases; default 4), horizontal row on desktop connected by a thin line, stacked on mobile. Step anatomy: number `01` → step name (2–3 words) → 1–2 sentence description in plain speech.
  - Canonical 4: `Discovery → Strategy & scope → Execution → Optimise & scale` (agency) or `Get in touch → Free quote → We do the work → Handover` (trade).
- **Mid-CTA band** at bottom of this section (the "hook" bar): short question left (`Ready to scale?` / `Got a job in mind?`) + one-line reassurance (`Free 20-min strategy call. No pressure, no lock-ins.`) + `[Get a quote]` + `[phone]` right.

### SECTION 7 — Recent Work
- Eyebrow: `• Recent work`
- Split header: H2 (`Success stories worth showing off.` / `Walls worth showing off.`) + `View all work →` link right.
- **Format by volume of work:**
  - 8+ projects (agency): two-row auto-scrolling marquee of project cards, rows scroll opposite directions. Card = full-bleed screenshot/photo, hover overlay with project name + service tag, links out.
  - 3–6 projects (trade): static 3-up photo grid, followed by ONE large centered pull-quote testimonial: `"Showed up when they said, got stuck in, left it spotless."` + attribution `Verified Google review — Local Hervey Bay homeowner`.
  - Single flagship (24-7 pattern): one featured "case card" with image + outcome chips (`$9k under retail · Sourced in 6 days`) + `View All →`.
- Close section with the dual CTA pair again (`[Get a quote]` + `[phone]`).

### SECTION 8 — Google Reviews  ⭐ trust core
Centered, light/off-white background.
- Top badge: Google logo chip `Verified Google Reviews · 5.0`.
- H2 (centered): `Rated 5.0 on Google by 44+ clients` — the numbers MUST be real and match the badge in the hero.
- Subline: one sentence of anti-hype: `No incentives. No fake reviews. Just honest feedback from businesses we've helped grow.`
- **3 stat chips row**: `5.0★ Average rating` · `44 5-star reviews` · `100% Would recommend`.
- **6 review cards**, 3×2 grid (2×2 acceptable for fewer reviews; LEVR/24-7 use 4–6). Card anatomy: circular avatar with initial letter · reviewer full name · relative time (`a month ago`) · 5 gold stars · full review text (do NOT truncate to one line; 40–120 words reads as real). Use REAL review text verbatim.
- Bottom button: `Read all reviews on Google →` (links to Google listing).

### SECTION 9 — FAQ
- Eyebrow: `• Enquiries`
- Split layout: H2 left column (`Frequent questions.`), accordion right column (or full-width accordion).
- **5–6 questions**, first one expanded by default. Question set formula (adapt wording to trade):
  1. `Are quotes really free?` (price objection)
  2. `Where are you based / where do you work?` (geography)
  3. Scope question (`Do you do small jobs?` / `Do you only do X?`)
  4. Commitment objection (`Do you lock me into a contract?` / `Are you insured?`)
  5. Speed/results (`How fast will I see results?` / `How long will my job take?`)
- Answers: 2–3 sentences, conversational, each ends steering to contact where natural.
- Accordion affordance: `+` rotating to `×`.

### SECTION 10 — Social Feed
- Eyebrow: `• On the 'gram` / `• Follow along` / `• Insta feed`
- H2: `Fresh from the studio floor.` / `See what we're up to on the gram.` / `Shire buys, unfiltered.`
- One-line subhead + `[Follow @handle]` button in header row.
- **4–5 cards** in a row: reel/post thumbnails, play icon overlay, caption + `@handle`. Link out to Instagram. (Styled as embedded-post mockups in LEVR — either treatment is fine.)

### SECTION 11 — Final CTA + Form (repeat)  ⭐ second capture point
Dark section, mirrors hero structure: content left, form card right.
- Eyebrow: `• Let's go` / `• Get in touch`
- H2: forward-motion line: `Your new website starts here.` / `Ready for some decent walls?` / `Let's find your next property, together.`
- Paragraph: restate the offer + reduce risk: `Book a free 20-minute strategy call. We'll audit your current setup and tell you exactly where the fastest wins are.`
- Phone (large, tappable) + business hours line: `Mon–Fri 8:30am – 5:30pm AEST`.
- **Form card** (solid white/light on dark bg this time, not glass): title `Request a quote`, subtitle `We'll get back to you within one business day`, IDENTICAL fields to hero form, same button + microcopy.

### SECTION 12 — Social Banner (pre-footer strip)
- Eyebrow: `• Follow our work`
- H2 one-liner: `See what we're building right now.`
- One sentence + platform buttons: `[Instagram] [LinkedIn] [Facebook]`.
(May be merged into Section 11 on shorter builds — never delete both.)

### SECTION 13 — Footer
4-column grid on darkest background:
1. **Brand**: logo · 2-sentence blurb (service + tone line + location) · phone · email · social icons.
2. **Services**: every service page + `View all services →`.
3. **Company**: About, Our Work/Projects, Blog, Contact.
4. **Coverage**: service area line (`Australia-wide (based in Cronulla, NSW)` / `Hervey Bay & the Fraser Coast`) + business hours.
Bottom bar: `© {year} {Business}` · `Privacy Policy` · trust badges as text chips (`Certified Google Partner · Shopify Partner` / `Fully Insured · Site Safe Practices · Insurance Approved`).

### OPTIONAL INSERTS (only when the business type calls for them)
These appear across the reference set and slot into fixed positions — never elsewhere:

- **Founder Bio** (insert between §4 and §5) — for personal-brand services (buyer's agents, therapists, brokers: LEVR "15 years in the trenches", Phocis "Hi, I'm Michelle", 24-7 "Coen & James"). Layout: portrait photo left (radius-20), right: eyebrow `• Meet [Name]`, H2 with two-tone, 2–3 paragraph story (experience years, why they started, approach), 3–4 bullet credentials, CTA `[Book a free call →]`. First-person or warm third-person.
- **Pain-Point Empathy Block** (insert between §3 and §4) — for wellness/high-empathy services (Phocis "You're exhausted from thinking all the time."). H2 names the felt problem, short paragraph, 2-column checklist of 6–8 symptoms/frustrations the reader recognizes, closing reframe line: `You don't need more insight. You need interruption of the loop.` Then CTA.
- **Blog/Insights Teaser** (insert between §10 and §11) — for considered purchases (24-7 "Car Buying Tips & Insights"). 3 post cards (image, title, `Read more →`) + `See All Posts →`. Skip for trades.
- **Booking-calendar hero variant** (Phocis) — replace the hero form card with an embedded date-picker/booking widget titled `Start your journey today` when the CTA is a booked call rather than a quote. All other hero rules unchanged.

---

## 4. COPY SYSTEM (VOICE + FORMULAS)

### 4.1 H1 formulas (pick one)
- **Authority claim**: `We are the [service] experts.` (Leed)
- **Geo + specialist**: `[Area]'s specialists in [service A] & [service B].` (Perks)
- **Outcome promise**: `Buy Smarter in the [Area].` (LEVR) / `We Find Your Perfect Car` (24-7)
- **Aspirational (wellness/premium)**: emotional quote-style line. (Phocis)

### 4.2 Voice rules
- Australian plain-speak. Contractions always. Short sentences. Fragments allowed.
- Anti-hype as a positioning tool: `No fluff.` `No lock-in contracts.` `No surprises, no upsells, no "while we're here".`
- Concrete over abstract: name the materials, suburbs, platforms, dollar figures.
- Micro-humor in trade copy is on-brand: `dust sheets down, music low` / `door knobs through plaster`.
- Never: "solutions", "passionate", "cutting-edge", "elevate", "unlock", "seamless".
- **No em dashes (or en dashes as separators) in any rendered copy.** Where the reference sites used them (`New builds, renovations, insurance work and repairs — clean, level, paint-ready`), rewrite with a period, comma or colon: `New builds, renovations, insurance work and repairs. Clean, level, paint-ready.` Middots (`·`) between short chips/microcopy are allowed. Hyphens inside compound words are fine.
- **No emojis in any copy.** Ever. Visual accents come from SVG icons only.

### 4.3 Recurring microcopy (use verbatim patterns)
- Form reassurance: `Same-business-day response · No obligation`
- Form subtitle: `Free [strategy call / on-site assessment] · No obligation`
- CTA band: `Free 20-min strategy call. No pressure, no lock-ins.`
- Reviews subline: `No incentives. No fake reviews. Just honest feedback…`

### 4.4 Section eyebrow labels (canonical set, each rendered as dot icon + text)
`• Our services · • Why [Name] · • How we work · • Recent work · • Enquiries · • On the 'gram · • Let's go · • Follow our work`

---

## 5. CONVERSION CHECKLIST (verify before shipping)

- [ ] Lead form fully visible above the fold at 1440×900 and reachable in ≤1 scroll on mobile
- [ ] Google rating badge above H1, linked to real Google listing with the google icon
- [ ] Phone number appears ≥5× as tap-to-call links
- [ ] Form appears exactly twice with identical fields; service dropdown lists real services
- [ ] "Same-business-day response · No obligation" under both submit buttons
- [ ] Every service card includes a real image (§ Section 4)
- [ ] Exactly 4 stat tiles with real numbers (§ 5)
- [ ] 6 checkmark differentiators (§ 5)
- [ ] 4 process steps + mid-CTA band (§ 6)
- [ ] ≥4 real Google reviews quoted verbatim with names + timestamps
- [ ] Review numbers consistent across hero badge, reviews H2, and stat chips
- [ ] FAQ answers the 5 core objections (price, place, scope, commitment, speed)
- [ ] Every H1/H2 has one gradient + type-shift keyword highlight (2–3 words ideal, 5 max, one run per headline, same treatment sitewide); sentence case, ends with a period
- [ ] All eyebrow labels present as dot SVG icon + label (no dash characters)
- [ ] Alternating light/dark section rhythm, no two same-treatment neighbors
- [ ] All buttons slightly rounded (8–12px radius), zero pill buttons; primary CTA ends with trailing arrow SVG icon
- [ ] Light-dominant page: only 2–3 dark accent sections + footer; body sections light
- [ ] Motion limited to the §2.5 allowed set; nothing from the banned list; reduced-motion respected
- [ ] Zero emojis in markup/copy; every symbol is an inline SVG icon (grep for emoji codepoints)
- [ ] Zero em/en dashes in rendered copy (grep for `—` and `–`)
- [ ] All full-bleed background images are light/bright source photos with only a subtle dark gradient overlay (photo clearly visible behind text)
- [ ] All cards, pills, chips, stat tiles and form cards on image/dark backgrounds use the `.glass` white-gradient + blur surface, with backdrop-filter fallback
- [ ] Logo marquee loops seamlessly (set duplicated ≥3×)
- [ ] Real photography only (founders, jobs, location), no obvious stock
- [ ] Mobile: nav collapses but CTA button stays; hero form stacks below content
- [ ] Meta: title `[Service] [Area] | [Business]`, description ≤160 chars with location + CTA, og:image set, theme-color = `--bg-dark`

---

## 6. TECH NOTES

- Single-page build: semantic sections with ids `#services #why #process #work #reviews #faq #contact`; nav CTA and hero CTA anchor to `#contact` (or top form).
- Fonts via one variable font file/`font-display: swap`; preload hero image; lazy-load everything below Section 4.
- Marquees: pure CSS `@keyframes` translate, `prefers-reduced-motion` disables all motion.
- Forms: POST to backend/webhook; on success swap card content for `Thanks — we'll be in touch same business day.`; validate phone OR email required.
- Accordion: `<details>/<summary>` or ARIA-correct buttons.
- Schema.org: `LocalBusiness` JSON-LD with `aggregateRating` matching the displayed numbers, plus `FAQPage` markup on Section 9.
- Lighthouse targets: Performance ≥ 90 mobile, CLS < 0.05 (reserve space for marquee/images).