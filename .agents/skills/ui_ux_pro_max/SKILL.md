---
name: ui_ux_pro_max
description: Visual polish and UX judgment for high-converting pages — micro-interactions, spacing rhythm, color/contrast, hierarchy, accessibility. Use alongside frontend_design (structure/HTML) when a build spec (e.g. template.md) is present; this skill fills in judgment calls the spec leaves open.
---

# UI/UX Pro Max Skill

Applies only where the active build spec doesn't already dictate the answer. If a template/spec file specifies layout, section order, or copy rules, those take priority — use this skill for the visual/UX decisions the spec leaves open.

## Visual polish
- Spacing follows a consistent scale (e.g. 4/8px base unit); no arbitrary one-off margins.
- Vertical rhythm: consistent section padding; related elements sit closer together than unrelated ones.
- Color/contrast: text meets WCAG AA contrast minimum (4.5:1 body, 3:1 large text) against its background, including on image/gradient overlays.
- Micro-interactions: hover/focus states on all interactive elements (buttons, links, inputs, accordions); transitions 150–250ms, ease-out.
- Imagery: crop/frame for the actual container aspect ratio, don't stretch or letterbox.

## UX judgment
- Hierarchy: one clear primary action per view; secondary actions visually subordinate (outline/ghost style).
- Scannability: break up dense text with subheads, short paragraphs, or bullets — but don't override the spec's copy formulas.
- Forms: label every field, inline validation, obvious error states, disabled state on submit while processing.
- Accessibility: keyboard-navigable, visible focus rings, alt text on all images, proper heading order (no skipped levels).
- Mobile: verify tap targets ≥44px, no hover-only interactions, no horizontal scroll.

## When this skill runs alongside a build spec
Do not re-decide anything the spec already fixes (section order, colors/tokens, copy rules, image treatment). Only apply the above to fill gaps or polish execution.