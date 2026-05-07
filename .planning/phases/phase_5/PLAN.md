# Plan: Phase 5 - Space Portal Refinement

## Goal
Elevate the "Space Portal" concept to an award-winning level with dynamic scaling, premium visuals, and smooth transitions.

## Tasks
- [/] **Premium Visual Identity**
    - [x] White & Raleway Design System (index.css)
    - [x] Core `Portal` component
    - [ ] Implement `Dynamic Portal Growth` (scroll-triggered scale-up)
- [ ] **Aesthetic Overhaul (The 'Wow' Factor)**
    - [ ] Add parallax depth to starfields
    - [ ] Implement smooth scroll behavior for portals
    - [ ] Refine typography hierarchy and spacing
- [ ] **Interactive Transitions**
    - [ ] Add 'Spaceship Door' opening effect for page transitions
    - [ ] Implement ultra-smooth hover states

## Proposed Changes

### Components
#### [MODIFY] [Portal.tsx](file:///c:/Users/nathanael.secundo/Documents/Projetos%20CS/15Miles/src/components/Portal.tsx)
- Add Intersection Observer to trigger a `full-screen` state when the portal is centered.

### Styling
#### [MODIFY] [Portal.css](file:///c:/Users/nathanael.secundo/Documents/Projetos%20CS/15Miles/src/components/Style/Portal.css)
- Implement smooth transitions for `width`, `height`, and `border-radius`.
- Add advanced gradients and depth.

## Verification Plan
### Manual Verification
- Scroll through the page and ensure the portal expands smoothly to 100% width/height.
- Verify that content inside the portal remains legible and centered during growth.
