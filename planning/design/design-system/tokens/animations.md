---
title: Motion and Animation System
description: Complete motion design specifications including timing, easing, and animation patterns
last-updated: 2025-01-18
version: 1.0.0
related-files:
  - ../style-guide.yaml
  - ./README.md
status: approved
---

# Motion & Animation System

## Overview
Our motion system brings the interface to life through purposeful, performant animations that guide attention, provide feedback, and create seamless transitions. Every animation serves a functional purpose while maintaining 60fps performance.

## Motion Philosophy

### Core Principles
1. **Purposeful**: Every animation has a clear functional goal
2. **Performant**: 60fps minimum, GPU-accelerated when possible
3. **Predictable**: Consistent timing and easing across similar actions
4. **Accessible**: Respects prefers-reduced-motion preferences
5. **Delightful**: Subtle personality without distraction

## Timing System

### Duration Scale
```css
/* Animation Durations */
--duration-instant: 0ms;       /* No animation */
--duration-micro: 100ms;       /* Micro-interactions */
--duration-fast: 200ms;        /* Quick transitions */
--duration-normal: 400ms;      /* Standard animations */
--duration-slow: 600ms;        /* Deliberate transitions */
--duration-slower: 800ms;      /* Major transitions */
--duration-slowest: 1000ms;    /* Loading animations */
```

### Duration Usage Guide

| Duration | Use Cases | Examples |
|----------|-----------|----------|
| **100ms** | Immediate feedback | Hover states, active states |
| **200ms** | Quick changes | Button clicks, toggle switches |
| **400ms** | Content transitions | Tab changes, accordions |
| **600ms** | Major transitions | Page slides, modal opens |
| **800ms** | Dramatic reveals | Hero animations, onboarding |
| **1000ms+** | Continuous | Loading spinners, progress bars |

## Easing Functions

### Core Easings
```css
/* Easing Functions */
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Easing Application

#### Ease Out (Most Common)
- **Use**: 80% of animations
- **Feel**: Natural deceleration
- **Examples**: Expanding panels, sliding menus, fade-ins

#### Ease In-Out
- **Use**: Continuous transitions
- **Feel**: Smooth acceleration and deceleration  
- **Examples**: Page transitions, carousel slides

#### Spring
- **Use**: Playful feedback
- **Feel**: Slight overshoot and settle
- **Examples**: Success animations, game celebrations

#### Linear
- **Use**: Continuous animations
- **Feel**: Mechanical, consistent
- **Examples**: Loading bars, rotating spinners

## Common Animation Patterns

### Fade Transitions
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Fade Out */
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* Usage */
.fade-in {
  animation: fadeIn var(--duration-fast) var(--ease-out);
}
```

### Slide Transitions
```css
/* Slide Up */
@keyframes slideUp {
  from { 
    transform: translateY(20px);
    opacity: 0;
  }
  to { 
    transform: translateY(0);
    opacity: 1;
  }
}

/* Slide In From Right */
@keyframes slideInRight {
  from { 
    transform: translateX(100%);
  }
  to { 
    transform: translateX(0);
  }
}
```

### Scale Transitions
```css
/* Scale In */
@keyframes scaleIn {
  from { 
    transform: scale(0.9);
    opacity: 0;
  }
  to { 
    transform: scale(1);
    opacity: 1;
  }
}

/* Pulse */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

### Rotation Animations
```css
/* Continuous Spin */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Loading Spinner */
.spinner {
  animation: spin var(--duration-slowest) var(--ease-linear) infinite;
}
```

## Component-Specific Animations

### Buttons
```css
.button {
  transition: all var(--duration-micro) var(--ease-out);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  &:active {
    transform: scale(0.98);
    transition-duration: var(--duration-instant);
  }
}
```

### Cards
```css
.card {
  transition: transform var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  }
}
```

### Modals
```css
/* Backdrop fade */
.modal-backdrop {
  animation: fadeIn var(--duration-fast) var(--ease-out);
}

/* Modal slide and scale */
.modal-content {
  animation: scaleIn var(--duration-normal) var(--ease-spring);
}
```

### Navigation
```css
/* Mobile menu slide */
.mobile-menu {
  transform: translateX(-100%);
  transition: transform var(--duration-normal) var(--ease-out);
  
  &.open {
    transform: translateX(0);
  }
}

/* Tab indicator */
.tab-indicator {
  transition: transform var(--duration-fast) var(--ease-out);
}
```

## Game-Specific Animations

### Order Flow
```css
@keyframes orderFlow {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.order-animation {
  animation: orderFlow var(--duration-slow) var(--ease-in-out);
}
```

### Inventory Update
```css
@keyframes inventoryPulse {
  0% { background-color: transparent; }
  50% { background-color: var(--color-success-light); }
  100% { background-color: transparent; }
}

.inventory-update {
  animation: inventoryPulse var(--duration-slow) var(--ease-out);
}
```

### Cost Increase
```css
@keyframes costShake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

.cost-warning {
  animation: costShake var(--duration-fast) var(--ease-out);
  color: var(--color-error);
}
```

## Orchestrated Animations

### Stagger Pattern
```css
/* Staggered list items */
.list-item {
  animation: slideUp var(--duration-fast) var(--ease-out) both;
  animation-delay: calc(var(--index) * 50ms);
}

/* Implementation */
.list-item:nth-child(1) { --index: 0; }
.list-item:nth-child(2) { --index: 1; }
.list-item:nth-child(3) { --index: 2; }
```

### Sequential Animations
```css
/* Chain animations */
.sequence {
  animation: 
    fadeIn var(--duration-fast) var(--ease-out),
    slideUp var(--duration-normal) var(--ease-out) var(--duration-fast);
}
```

### Parallel Animations
```css
/* Multiple properties */
.parallel {
  transition: 
    transform var(--duration-normal) var(--ease-out),
    opacity var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-slow) var(--ease-out);
}
```

## Performance Optimization

### GPU-Accelerated Properties
```css
/* Prefer these properties */
.performant {
  transform: translateX(0);  /* Position */
  opacity: 1;                /* Visibility */
  will-change: transform;    /* Optimization hint */
}

/* Avoid animating these */
.expensive {
  width: auto;      /* Layout recalculation */
  height: auto;     /* Layout recalculation */
  top/left: 0;      /* Layout recalculation */
  box-shadow: none; /* Paint operation */
}
```

### Animation Performance Tips
```css
/* Use transform instead of position */
/* Bad */
.slide { left: 0px; }

/* Good */
.slide { transform: translateX(0); }

/* Contain animations */
.animated-container {
  contain: layout style paint;
}

/* Remove will-change after animation */
.element {
  will-change: auto;
}
```

## Accessibility

### Reduced Motion Support
```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Alternative for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animated {
    /* Instant transitions */
    transition: none;
  }
}
```

### Focus Animations
```css
/* Visible focus with animation */
.focusable:focus {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
  transition: outline-offset var(--duration-micro) var(--ease-out);
}

.focusable:focus:not(:focus-visible) {
  outline: none; /* Remove for mouse users */
}
```

## Loading States

### Skeleton Screens
```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-200) 25%,
    var(--neutral-100) 50%,
    var(--neutral-200) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

### Progress Indicators
```css
/* Determinate progress */
.progress-bar {
  transform: scaleX(var(--progress, 0));
  transform-origin: left;
  transition: transform var(--duration-normal) var(--ease-out);
}

/* Indeterminate progress */
@keyframes indeterminate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}
```

## Implementation Guidelines

### CSS Implementation
```css
/* Use CSS custom properties */
.element {
  transition: transform var(--duration-normal) var(--ease-out);
}

/* Combine multiple transitions */
.multi {
  transition: 
    transform var(--duration-normal) var(--ease-out),
    opacity var(--duration-fast) var(--ease-out);
}
```

### JavaScript Control
```javascript
// Trigger animations via class
element.classList.add('animate-in');

// Wait for animation end
element.addEventListener('animationend', () => {
  element.classList.remove('animate-in');
});

// Respect reduced motion
const prefersReducedMotion = 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  element.classList.add('animated');
}
```

## Testing Checklist

- [ ] All animations run at 60fps
- [ ] GPU acceleration used where possible
- [ ] Reduced motion preference respected
- [ ] No animation jank or flicker
- [ ] Appropriate timing for context
- [ ] Focus states clearly animated
- [ ] Loading states provide feedback
- [ ] Animations enhance, not distract

## Animation Don'ts ❌

- Don't animate `width`, `height`, or `top/left`
- Don't use animations longer than 1s for UI
- Don't animate multiple properties unnecessarily
- Don't forget `will-change` for complex animations
- Don't ignore accessibility preferences
- Don't create nauseating movements
- Don't animate during critical interactions

## Related Resources
- [Web Animation Performance](https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance)
- [Material Motion](https://material.io/design/motion/)
- [CSS Triggers](https://csstriggers.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Support
For animation questions:
- Check performance in DevTools
- Test with reduced motion enabled
- Verify 60fps achievement
- Consider accessibility impact