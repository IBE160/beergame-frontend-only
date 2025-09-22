---
title: 'Screen States: Landing Page & Game Introduction'
description: 'Screen states and specifications for the landing page.'
feature: 'Landing Page & Game Introduction'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Screen States: Landing Page

## Screen: Main Landing Page

**Purpose**: To introduce the Beer Game and convert visitors into players.

### State: Default

**Visual Design Specifications**:
- **Layout**: A series of full-width sections. The hero section takes up the initial viewport height.
- **Typography**: `h1` for the main headline, `body_large` for the sub-headline, and `body` for the main text content.
- **Color Application**: Primary colors for text and backgrounds, with the `accent_primary` color used for the main CTA button.
- **Interactive Elements**: "Play Now" button is visually distinct. Any in-page navigation links are clear.
- **Visual Hierarchy**: The headline and CTA are the most prominent elements.
- **Whitespace Usage**: Generous whitespace is used to create a "breathable" and focused experience.

**Interaction Design Specifications**:
- **Primary Actions**: The "Play Now" button has clear `default`, `hover`, `active`, and `focus` states.
- **Secondary Actions**: Scrolling is the main secondary interaction.

**Responsive Design Specifications**:
- **Mobile (320-767px)**: A single-column layout. Typography is scaled down slightly for readability. The hero section may be simplified.
- **Tablet (768-1023px)**: The layout remains single-column, but with more comfortable line lengths and spacing.
- **Desktop (1024px+)**: The full design with multi-column layouts for the "How to Play" section if using diagrams.

### State: Returning User (with saved game)

**Visual Design Specifications**:
- **Layout**: Same as the default state, but the hero section contains two buttons.
- **Interactive Elements**: 
    - "Resume Game" becomes the primary CTA (using `accent_primary` color).
    - "Start New Game" is a secondary button (using a less prominent style, e.g., an outline button).

**Interaction Design Specifications**:
- **Primary Actions**: Clicking "Resume Game" will load the saved game state. Clicking "Start New Game" will clear the old state (after a confirmation) and proceed to the configuration screen.
