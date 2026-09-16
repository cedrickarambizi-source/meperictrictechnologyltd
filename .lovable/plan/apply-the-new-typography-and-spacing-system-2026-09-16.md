# Apply the new typography and spacing system

## Goal
Rework the full site around the supplied compact editorial system while preserving all existing pages, content, imagery, and functionality. Keep the homepage imagery dark and legible.

## Visual system
- Use NB International Pro when available, with Inter Tight, General Sans, and Switzer fallbacks; use a bundled Inter Tight fallback so the result is consistent without relying on a licensed font file.
- Establish the 15px base and full 12-step responsive type scale, topping out at 66px.
- Set display headlines to weight 400, line-height 1, and tight tracking that relaxes from `-0.025em` at display size to `-0.005em` for small text.
- Reserve weight 700 for buttons, labels, and compact emphasis—not large display headlines.
- Add a restrained mono style for metadata and technical labels, using available monospace fallbacks.

## Layout and shape
- Standardize content width at 1200px, section spacing near 75px, card padding at 19px, and common element gaps at 11px.
- Replace oversized corner radii with the specified 5px, 7.5px, and 15px system; keep all buttons and navigation actions fully pill-shaped.
- Remove heavy shadows and retain only subtle hairline separation where needed.

## Color and hierarchy
- Introduce semantic Sunrise Coral, white, mist gray, zinc gray, and carbon-black roles.
- Use coral only for filled primary actions and the brand mark; remove coral from body text, icons, lines, and decorative backgrounds.
- Preserve dark imagery with a sufficient scrim and use the neutral surface sequence: white → mist gray → carbon black.
- Do not add the membership-card gradient because the site has no membership card.

## Shared interface
- Convert the desktop navigation into a floating dark capsule over the page imagery, with a compact mobile equivalent.
- Keep existing navigation destinations and the external MEP Calculator behavior unchanged.
- Update shared buttons to filled pill primary actions and neutral secondary treatments.
- Do not add new quote buttons where the current project rules prohibit them; retain only existing actions unless removal is required by those rules.

## Page rollout
- Apply the new type, spacing, radius, surface, and elevation rules to shared layout, homepage sections, cards, and all page headings.
- Replace isolated hardcoded visual values with semantic design tokens while leaving wording, data, links, project entries, and team details untouched.
- Ensure text remains readable and layouts remain stable on mobile and desktop.

## Validation
- Check the homepage and representative inner pages at desktop and mobile sizes.
- Verify the floating navigation, dark hero contrast, type hierarchy, card geometry, and all existing links and controls.
- Run the relevant automated tests and inspect the browser for visual overlap or runtime errors.
