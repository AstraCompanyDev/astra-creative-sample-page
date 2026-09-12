# Launch Page

## Goal
Create a separate `/launch-page` experience matching the supplied Launch OS reference page’s design, section order, public copy, and conversion flow. Add “Launch Page” to Astra Creative’s desktop and mobile menus while keeping the new page visually independent from the main site.

## Page build
- Recreate the dark black/red/gold visual direction, oversized headline treatment, compact badges, strong CTA buttons, full-width section rhythm, and mobile layouts.
- Build the full reference-page flow:
  1. Launch OS header, qualification badge, hero headline, supporting copy, featured video, primary CTA, and client-logo strip.
  2. Application/booking area titled “Let’s Talk Scale.”
  3. Results and testimonial cards with the visible names, roles, quotes, ratings, and imagery from the reference.
  4. Performance statistics band.
  5. “Our System to Scale Your Brand” section with Ads Engine and Growth OS tabs and all three phases for each.
  6. Trusted-partners strip, executive team, proof/results area, company manifesto, mission, core values, FAQs, final qualification CTA, disclaimer, and footer.
- Preserve the reference page’s public-facing text and use its publicly served imagery/video embeds where technically reusable.
- Make all CTA buttons scroll to the page’s application area. The application form will collect the visible contact/qualification details and show an on-page confirmation; no persistent submission service will be added in this task.

## Site integration
- Add a typed `/launch-page` route with unique title, description, Open Graph metadata, canonical URL, and structured page semantics.
- Add “Launch Page” to the existing shared desktop and mobile menu without restoring the other hidden site links.
- Keep the Launch page’s own branding/header/footer separate from Astra Creative’s normal page layout.
- Prevent the Astra exit popup from interrupting this dedicated funnel page.

## Technical details
- Create focused Launch-page components/data rather than one oversized route file.
- Add page-specific semantic color and shadow tokens to the global design system, while retaining Astra’s existing tokens elsewhere.
- Use the existing button/form components and accessible tabs, accordion controls, labels, focus states, and reduced-motion behavior.
- Store any downloaded public reference assets locally in the project rather than hotlinking them; retain embedded video players where downloading is not appropriate.
- Verify route generation, menu navigation, CTA scrolling, tabs, FAQ controls, form success state, and desktop/mobile rendering with the live preview.
