---
title: Spacing Scale Documentation
description: Comprehensive spacing system including grid, layout units, and responsive spacing strategies
last-updated: 2025-01-18
version: 1.0.0
related-files:
  - ../style-guide.yaml
  - ./README.md
status: approved
---

# Spacing System

## Overview
Our spacing system creates visual rhythm and hierarchy through consistent, predictable intervals. Based on an 8px grid, it ensures alignment, maintains proportions, and provides breathing room for content across all screen sizes.

## Spacing Philosophy

### Core Principles
1. **8px Base Grid**: All spacing divisible by 8 (with 4px for micro-adjustments)
2. **Purposeful Proximity**: Related items closer, unrelated items farther
3. **Generous Whitespace**: Strategic negative space for cognitive comfort
4. **Responsive Scaling**: Spacing adapts proportionally to viewport
5. **Consistent Rhythm**: Predictable spatial relationships throughout

## Base Unit System

### Foundation
```css
--spacing-base: 8px;  /* Core unit */
--spacing-half: 4px;  /* Micro adjustments only */
```

### Scale
```css
/* Spacing Scale (8px base) */
--spacing-0:   0;      /* No spacing */
--spacing-xs:  4px;    /* 0.5 × base - Micro spacing */
--spacing-sm:  8px;    /* 1 × base - Tight spacing */
--spacing-md:  16px;   /* 2 × base - Default spacing */
--spacing-lg:  24px;   /* 3 × base - Comfortable spacing */
--spacing-xl:  32px;   /* 4 × base - Section spacing */
--spacing-2xl: 48px;   /* 6 × base - Large sections */
--spacing-3xl: 64px;   /* 8 × base - Major sections */
--spacing-4xl: 96px;   /* 12 × base - Page sections */
--spacing-5xl: 128px;  /* 16 × base - Hero sections */
```

## Grid System

### Column Grid

#### Desktop (1024px+)
```css
.grid-desktop {
  --columns: 12;
  --column-width: 1fr;
  --gutter: 32px;
  --margin: 64px;
  --max-width: 1280px;
}
```

#### Tablet (768px - 1023px)
```css
.grid-tablet {
  --columns: 8;
  --column-width: 1fr;
  --gutter: 24px;
  --margin: 32px;
  --max-width: 768px;
}
```

#### Mobile (320px - 767px)
```css
.grid-mobile {
  --columns: 4;
  --column-width: 1fr;
  --gutter: 16px;
  --margin: 16px;
  --max-width: 100%;
}
```

### Grid Implementation
```css
.container {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: var(--gutter);
  padding: 0 var(--margin);
  max-width: var(--max-width);
  margin: 0 auto;
}
```

## Component Spacing

### Button Padding
```css
.button {
  /* Size: padding-y padding-x */
  --button-padding-sm:  6px 12px;   /* Small */
  --button-padding-md:  10px 20px;  /* Medium */
  --button-padding-lg:  14px 28px;  /* Large */
  --button-padding-xl:  18px 36px;  /* Extra Large */
}
```

### Card Spacing
```css
.card {
  --card-padding: 24px;        /* Internal padding */
  --card-gap: 16px;            /* Between elements */
  --card-margin: 24px;         /* Between cards */
  --card-section-gap: 32px;    /* Between sections */
}
```

### Form Elements
```css
.form {
  --input-padding: 10px 12px;  /* Input internal */
  --label-margin: 8px;          /* Label to input */
  --field-margin: 24px;         /* Between fields */
  --group-margin: 32px;         /* Between groups */
  --error-margin: 4px;          /* Error message */
}
```

### Navigation
```css
.nav {
  --nav-height: 64px;           /* Header height */
  --nav-padding: 16px;          /* Internal padding */
  --nav-item-gap: 24px;         /* Between items */
  --mobile-nav-height: 56px;    /* Mobile header */
}
```

## Layout Spacing

### Section Spacing
```css
.section {
  /* Vertical spacing between major sections */
  --section-spacing-sm:  48px;   /* Tight sections */
  --section-spacing-md:  64px;   /* Default sections */
  --section-spacing-lg:  96px;   /* Major sections */
  --section-spacing-xl:  128px;  /* Hero sections */
}
```

### Content Spacing
```css
.content {
  /* Spacing within content areas */
  --paragraph-spacing: 16px;     /* Between paragraphs */
  --heading-spacing: 24px;       /* After headings */
  --list-spacing: 8px;           /* Between list items */
  --quote-spacing: 32px;         /* Around quotes */
}
```

### Dashboard Layout
```css
.dashboard {
  --panel-gap: 24px;            /* Between panels */
  --widget-gap: 16px;           /* Between widgets */
  --stat-gap: 32px;             /* Between stats */
  --chart-margin: 32px;         /* Around charts */
}
```

## Responsive Spacing

### Scaling Strategy

#### Fluid Spacing
```css
/* Spacing that scales with viewport */
.responsive-spacing {
  padding: clamp(16px, 4vw, 64px);
  margin: clamp(24px, 6vw, 96px);
  gap: clamp(8px, 2vw, 32px);
}
```

#### Breakpoint Adjustments
```scss
.element {
  // Mobile first
  padding: var(--spacing-md);  // 16px
  
  @media (min-width: 768px) {
    padding: var(--spacing-lg);  // 24px
  }
  
  @media (min-width: 1024px) {
    padding: var(--spacing-xl);  // 32px
  }
}
```

### Container Widths
```css
.container {
  --container-sm: 640px;   /* Small screens */
  --container-md: 768px;   /* Medium screens */
  --container-lg: 1024px;  /* Large screens */
  --container-xl: 1280px;  /* Extra large */
  --container-2xl: 1536px; /* Maximum width */
}
```

## Spacing Patterns

### Proximity Rules

#### Gestalt Grouping
```css
/* Related items: tight spacing */
.related-group {
  gap: var(--spacing-sm);  /* 8px */
}

/* Separate groups: wider spacing */
.separate-sections {
  gap: var(--spacing-xl);  /* 32px */
}
```

#### Visual Hierarchy
```css
/* Primary to secondary: medium space */
h1 + p { margin-top: var(--spacing-md); }

/* Section breaks: large space */
section + section { margin-top: var(--spacing-3xl); }

/* Inline elements: micro space */
span + span { margin-left: var(--spacing-xs); }
```

### Stack Spacing
```css
/* Vertical rhythm utilities */
.stack-xs > * + * { margin-top: 4px; }
.stack-sm > * + * { margin-top: 8px; }
.stack-md > * + * { margin-top: 16px; }
.stack-lg > * + * { margin-top: 24px; }
.stack-xl > * + * { margin-top: 32px; }
```

### Inline Spacing
```css
/* Horizontal rhythm utilities */
.inline-xs > * + * { margin-left: 4px; }
.inline-sm > * + * { margin-left: 8px; }
.inline-md > * + * { margin-left: 16px; }
.inline-lg > * + * { margin-left: 24px; }
.inline-xl > * + * { margin-left: 32px; }
```

## Special Cases

### Game Board Spacing
```css
.game-board {
  --cell-size: 48px;
  --cell-gap: 4px;
  --board-padding: 16px;
  --role-card-gap: 24px;
  --flow-line-spacing: 32px;
}
```

### Chart Spacing
```css
.chart {
  --axis-padding: 40px;
  --legend-gap: 16px;
  --tooltip-padding: 12px;
  --bar-gap: 8px;
  --line-point-size: 8px;
}
```

### Modal Spacing
```css
.modal {
  --modal-padding: 32px;
  --modal-header-height: 64px;
  --modal-footer-height: 80px;
  --modal-content-gap: 24px;
  --modal-margin: 16px; /* From viewport edge */
}
```

## Platform-Specific Spacing

### iOS Safe Areas
```css
.ios {
  /* Account for device UI */
  --safe-top: env(safe-area-inset-top);
  --safe-bottom: env(safe-area-inset-bottom);
  --safe-left: env(safe-area-inset-left);
  --safe-right: env(safe-area-inset-right);
  
  padding: var(--safe-top) var(--safe-right) 
           var(--safe-bottom) var(--safe-left);
}
```

### Android System UI
```css
.android {
  --status-bar: 24px;
  --navigation-bar: 48px;
  
  padding-top: var(--status-bar);
  padding-bottom: var(--navigation-bar);
}
```

## Implementation Examples

### Tailwind Configuration
```javascript
module.exports = {
  theme: {
    spacing: {
      '0': '0',
      'xs': '4px',
      'sm': '8px',
      'md': '16px',
      'lg': '24px',
      'xl': '32px',
      '2xl': '48px',
      '3xl': '64px',
      '4xl': '96px',
      '5xl': '128px',
    },
  },
};
```

### CSS Utilities
```css
/* Margin utilities */
.m-0 { margin: 0; }
.m-xs { margin: var(--spacing-xs); }
.m-sm { margin: var(--spacing-sm); }
.m-md { margin: var(--spacing-md); }
.m-lg { margin: var(--spacing-lg); }

/* Padding utilities */
.p-0 { padding: 0; }
.p-xs { padding: var(--spacing-xs); }
.p-sm { padding: var(--spacing-sm); }
.p-md { padding: var(--spacing-md); }
.p-lg { padding: var(--spacing-lg); }

/* Gap utilities */
.gap-xs { gap: var(--spacing-xs); }
.gap-sm { gap: var(--spacing-sm); }
.gap-md { gap: var(--spacing-md); }
.gap-lg { gap: var(--spacing-lg); }
```

## Spacing Guidelines

### Do's ✅
- Stick to the 8px grid system
- Use consistent spacing throughout
- Group related elements with proximity
- Scale spacing responsively
- Test spacing on actual devices

### Don'ts ❌
- Don't use arbitrary pixel values
- Don't mix spacing scales
- Don't forget touch target spacing
- Don't ignore safe areas on mobile
- Don't create cramped layouts

## Accessibility Considerations

### Touch Target Spacing
- Minimum 44×44px touch targets (iOS)
- Minimum 48×48px touch targets (Android)
- 8px minimum between targets

### Readability Spacing
- 1.5× line height for body text
- Adequate paragraph spacing
- Clear section separation

### Focus Indicator Spacing
- 2px offset from element
- Doesn't overlap other elements
- Clear visibility against backgrounds

## Testing Checklist

- [ ] All spacing uses defined scale
- [ ] Touch targets meet minimum size
- [ ] Content has breathing room
- [ ] Responsive spacing scales properly
- [ ] Safe areas respected on devices
- [ ] Grid alignment maintained
- [ ] Visual hierarchy clear
- [ ] No spacing conflicts

## Related Resources
- [8-Point Grid System](https://spec.fm/specifics/8-pt-grid)
- [Material Design Layout](https://material.io/design/layout/)
- [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Support
For spacing questions:
- Reference the spacing scale
- Check component specifications
- Review responsive patterns
- Test on actual devices