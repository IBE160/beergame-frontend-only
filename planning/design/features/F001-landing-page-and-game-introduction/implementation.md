---
title: 'Implementation: Landing Page & Game Introduction'
description: 'Developer handoff and implementation notes for the landing page.'
feature: 'Landing Page & Game Introduction'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Implementation Notes: Landing Page

## State Management

- **Primary State**: The page is mostly static. The only dynamic state is detecting whether a saved game exists in `localStorage`.
- **Action**: On page load, check for a specific key (e.g., `beer-game-save-data`).
- **Result**: If the key exists, render the "Resume Game" and "Start New Game" buttons. Otherwise, render the single "Play Now" button.

## Asset Requirements

- **Background Image/Graphic**: A high-quality, optimized background image or vector graphic for the hero section. It should be compressed to ensure fast loading.
- **Diagrams**: Any diagrams in the "How to Play" section should be SVGs for scalability and performance.

## Performance Targets

- **Lighthouse Score**: Aim for a Performance score of 90+.
- **Core Web Vitals**:
    - **LCP (Largest Contentful Paint)**: < 2.5 seconds.
    - **FID (First Input Delay)**: < 100ms.
    - **CLS (Cumulative Layout Shift)**: < 0.1.
- **Optimization**: Use Next.js image optimization (`<Image>`) for all images. Statically generate this page (`getStaticProps`) as its content is not dynamic.

## API Integration Points

- None. This page is fully client-side or statically generated.
