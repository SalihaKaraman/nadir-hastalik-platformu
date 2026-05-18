---
name: Clinical Empathy System
colors:
  surface: '#f9f9ff'
  surface-dim: '#cadbfc'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dfe8ff'
  surface-container-highest: '#d6e3ff'
  on-surface: '#091c35'
  on-surface-variant: '#434654'
  inverse-surface: '#20314b'
  inverse-on-surface: '#ecf0ff'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#90efef'
  on-secondary-container: '#006e6e'
  tertiary: '#3b4450'
  on-tertiary: '#ffffff'
  tertiary-container: '#525c68'
  on-tertiary-container: '#cad4e3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#93f2f2'
  secondary-fixed-dim: '#76d6d5'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#d9e3f2'
  tertiary-fixed-dim: '#bdc7d6'
  on-tertiary-fixed: '#131c27'
  on-tertiary-fixed-variant: '#3e4853'
  background: '#f9f9ff'
  on-background: '#091c35'
  surface-variant: '#d6e3ff'
typography:
  display-lg:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is anchored in the duality of "Expertise and Empathy." It targets a dual audience: researchers seeking clinical precision and patients/families seeking clarity and hope. The visual language is **Corporate Modern** with a lean toward **Minimalism**, prioritizing cognitive ease and accessibility above all else.

The UI should evoke a sense of calm authority. By utilizing generous whitespace and a disciplined color application, the design system minimizes the anxiety often associated with medical platforms. The aesthetic is "Clinical but not Cold," achieved through soft edges, legible type scales, and a systematic approach to data density.

## Colors
The palette is designed for high legibility and psychological comfort.
- **Primary (#0052CC):** A deep, reliable blue used for primary actions, branding, and active states. It signals stability and professional trust.
- **Secondary (#008080):** A supportive teal used for health-related accents, success states, and research-specific highlights.
- **Tertiary/Surface (#E6F0FF):** A soft medical blue used for large background areas and container fills to reduce the harshness of pure white while maintaining high contrast for text.
- **Neutral (#42526E):** A slate grey used for secondary text and icons, ensuring they are readable without the jarring contrast of pure black.

Backgrounds should primarily be white (#FFFFFF) or the Tertiary tint (#E6F0FF) to maintain a sterile, clean environment.

## Typography
The system uses **Public Sans** for headings to provide a sturdy, institutional feel that conveys authority and reliability. **Inter** is used for all body text and UI labels due to its exceptional legibility and systematic performance at small sizes, which is critical for dense medical data.

Hierarchy is strictly enforced through weight and color. Large displays are reserved for landing pages, while `headline-md` and `body-md` handle the majority of information density. Paragraphs should never exceed 70 characters in width to ensure optimal readability for users who may be under stress or have visual fatigue.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop to ensure content remains centered and readable, avoiding the "stretched" look of fluid grids on ultra-wide monitors. 

- **Grid:** A 12-column system is used for desktop (1280px max-width).
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Adaptation:** 
  - **Desktop:** 40px outer margins, 24px gutters.
  - **Tablet:** 32px outer margins, 16px gutters.
  - **Mobile:** 16px outer margins. Content reflows to a single column for research articles and search results.

Negative space is used intentionally to group related information (e.g., doctor contact info) and separate it from unrelated metadata (e.g., publication history).

## Elevation & Depth
Depth is communicated through **Tonal Layers** and extremely subtle **Ambient Shadows**. This avoids the "heavy" feel of traditional shadows, maintaining a lightweight and clean clinical aesthetic.

- **Level 0 (Base):** Pure white or `#E6F0FF` for the main background.
- **Level 1 (Cards/Sheets):** White surfaces with a 1px stroke in a light grey-blue or a very soft 4% opacity shadow (0px 2px 8px).
- **Level 2 (Modals/AI Assistant):** Slightly more pronounced shadows (8% opacity) to create focus and urgency.
- **Level 3 (Overlays):** Used exclusively for the AI Medical Assistant widget to ensure it feels like it "floats" above the static research data.

## Shapes
The design system utilizes **Soft** roundedness. This 4px (0.25rem) base radius provides a modern, approachable feel while maintaining the precision of a professional medical tool. 

- **Standard Elements:** 4px radius for buttons, input fields, and small cards.
- **Large Containers:** 8px (0.5rem) for main content cards and doctor profiles.
- **Interactive Pill:** Fully rounded (pill) shapes are reserved for **Tags** and **Status Badges** to distinguish them from actionable buttons.

## Components
### Search & Discovery
Search bars are prominent, featuring a white background and a subtle 1px border. Advanced filters should use horizontal scrolling chips for "Quick Filters" (e.g., "Specialty," "Insurance," "Distance") and a side-drawer for deep clinical criteria.

### Doctor Profile Cards
Profiles prioritize the doctor's headshot (circular), name, and specialty. Use secondary teal for "Accepting New Patients" status indicators. Contact buttons use the Primary Blue, while "View Research" uses an outlined ghost button style.

### Article Cards
Research papers and articles use a structured vertical layout. Tags (e.g., "Genetics," "Clinical Trial") are shown in pill-shaped badges at the top. Reading time is placed in the footer of the card next to the publication date in `label-sm`.

### AI Medical Assistant
This component is the "Expertise meets Empathy" focal point. It uses a **Glassmorphism** effect with a soft gradient background (Primary to Secondary) and a blur intensity of 12px. It should feature a unique, friendly icon and a "Typing" indicator that mimics human-like pacing to provide a supportive feel.

### Navigation & Footer
The header is sticky, slim, and pure white with a light bottom border. The footer is "Heavy Neutral," using a darker slate background with light grey text to provide a grounded, authoritative end to the page.