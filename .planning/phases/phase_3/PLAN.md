# Plan: Phase 3 - Polish & "Award-Winning" Effects

## Goal
Add the final layers of technical "Wow" factor through animations, decorative elements, and visual refinements.

## Tasks
- [x] **Advanced Animations**
    - [x] Create `useReveal` hook or utility for scroll-trigger animations
    - [x] Add button hover effects (glitch/scanline)
- [x] **HUD Decorative Elements**
    - [x] Create `HudDecor.tsx` for decorative SVG elements
    - [x] Inject tech-HUD details into sections
- [x] **Visual Audit**
    - [x] Refine spacing and mobile responsiveness
    - [x] Final check of starfield performance

## Proposed Changes

### Hooks/Utilities
#### [NEW] [useReveal.ts](file:///c:/Users/nathanael.secundo/Documents/Projetos%20CS/15Miles/src/hooks/useReveal.ts)
- Custom hook using Intersection Observer to trigger `.visible` class on `.reveal` elements.

### Components
#### [NEW] [HudDecor.tsx](file:///c:/Users/nathanael.secundo/Documents/Projetos%20CS/15Miles/src/components/HudDecor.tsx)
- Reusable SVG decorative elements (brackets, scanlines).

## Verification Plan
### Manual Verification
- Check that elements reveal smoothly on scroll across all devices.
- Verify glitch effects are subtle but effective.
