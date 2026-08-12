# Task: Redesign homepage — Ditchfees (ditchfees.com.au)

Build in four turns. Do not run ahead to the next turn.

## Setup
- `template.md` is the spec. Section order, tokens, shape language,
  motion set and copy voice are non-negotiable. Do not invent sections,
  reorder, or skip.
- Stack: plain HTML, CSS and vanilla JS only. No frameworks, no build
  step, no npm, no Tailwind, no CDN libraries. It must open by
  double-clicking index.html.
- Output: `index.html` + `index.css` + `script.js`, homepage only,
  single-page build per template §6.

## Facts
Try to read the live site at ditchfees.com.au and their Google Business
listing for services, tone, star rating, review count and verbatim
reviews.

If a fetch is blocked or returns nothing, say so plainly and list
exactly what you could not retrieve. Do not invent business facts,
numbers, review text, reviewer names or dates to fill the gap. Where
the template requires a real number you do not have, leave a clearly
marked placeholder like `[NEEDS: review count]` and add it to a gaps
list at the end of each turn.

## Turn 1 — Direction (no code)
1. Read `template.md` in full.
2. Read the current `index.html` and list, briefly, what it does well
   and where it fails the template.
3. State which skin (A/B/C/D) you're using and why, in one line.
   Ditchfees is a money-recovery service: weigh trust and premium
   signalling over editorial-studio minimalism.
4. State which optional inserts apply (Founder Bio, Pain-Point
   Empathy Block, Blog Teaser) and why.
5. Draft the H1, subhead, and the three trust chips.
Then stop and wait for my approval.

## Turn 2 — Build sections 1 to 7
Navbar, Hero + form, Logo marquee, Services grid, Why us + stats,
Process steps, Recent work. Full markup, styles and behaviour.
Then stop.

## Turn 3 — Build sections 8 to 13
Reviews, FAQ, Social feed, Final CTA + form, Social banner, Footer.
Plus meta tags and LocalBusiness + FAQPage JSON-LD.
Then stop.

## Turn 4 — Verify
Run every item in `template.md` §5 and report pass/fail per line.
Then grep the build and report raw counts:
- emoji codepoints (must be 0)
- `—` and `–` characters in rendered copy (must be 0)
- `border-radius: 9999px` on buttons (must be 0)
- `tel:` links (must be >= 5)
Fix any failures, then re-run the checks. Finish with the full gaps
list of every placeholder still in the build.

## Images
You cannot generate images. Do not attempt to, and do not use external
stock URLs.
- Use only files already present in `Images/`.
- Use `Images/Google.svg` for the Google rating badge (§0 rule 4).
- For any image the template requires that does not exist, insert a
  placeholder div at the correct aspect ratio with an HTML comment
  naming the asset.
- At the end of Turn 3, output an asset manifest: filename, pixel
  dimensions, aspect ratio, and one line describing the shot. Per §2.7
  every full-bleed photo must be a bright, naturally lit source image,
  so say so in the description.

## Copy
Rewrite all copy from scratch against `template.md` §4. Australian
plain-speak, contractions, short sentences, no em dashes, no emojis,
none of the banned words in §4.2.