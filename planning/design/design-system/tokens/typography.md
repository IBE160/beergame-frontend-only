---
title: Typography System
description: Complete typography specifications including type scale, font stacks, and usage guidelines
last-updated: 2025-01-18
version: 1.0.0
related-files:
  - ../style-guide.yaml
  - ./README.md
status: approved
---

# Typography System

## Overview
Our typography system creates clear information hierarchy while maintaining readability across devices. We use a modular scale with purposeful weight variations to guide users through complex data and gameplay mechanics.

## Type Scale Philosophy

### Principles
1. **Clarity Over Creativity**: Readability is paramount
2. **Systematic Scaling**: Predictable size relationships
3. **Purposeful Weights**: Each weight has specific function
4. **Responsive Fluidity**: Scales appropriately across devices
5. **Accessibility First**: Optimized for all reading abilities

## Font Stack

### Primary Font Family
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
                'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                'Droid Sans', 'Helvetica Neue', sans-serif;
```

**Inter** selected for:
- Excellent screen readability
- Wide character support
- Variable font capabilities
- Professional appearance
- Open source availability

### Monospace Font Family
```css
--font-mono: 'JetBrains Mono', 'Consolas', 'Monaco', 'Andale Mono',
             'Ubuntu Mono', 'Courier New', monospace;
```

**JetBrains Mono** selected for:
- Clear number distinction
- Aligned decimal points
- Code readability
- Consistent character width

## Type Scale

### Desktop Scale (Base: 16px)

| Level | Size/Line | Weight | Tracking | Usage |
|-------|-----------|--------|----------|-------|
| **Display** | 56px/64px | 700 | -0.02em | Hero headlines (desktop only) |
| **H1** | 48px/56px | 700 | -0.02em | Page titles |
| **H2** | 36px/44px | 600 | -0.01em | Section headers |
| **H3** | 28px/36px | 600 | 0 | Subsection headers |
| **H4** | 24px/32px | 600 | 0 | Card headers |
| **H5** | 20px/28px | 500 | 0 | Small headers |
| **Body Large** | 18px/28px | 400 | 0 | Intro text, emphasis |
| **Body** | 16px/24px | 400 | 0 | Default text |
| **Body Small** | 14px/20px | 400 | 0 | Secondary text |
| **Caption** | 12px/16px | 400 | 0 | Labels, hints |
| **Label** | 12px/16px | 600 | 0.05em | Form labels (uppercase) |
| **Code** | 14px/20px | 400 | 0 | Numbers, code |

### Mobile Scale (Base: 14px)

| Level | Size/Line | Adjustment |
|-------|-----------|------------|
| **H1** | 32px/40px | -33% |
| **H2** | 28px/36px | -22% |
| **H3** | 24px/32px | -14% |
| **H4** | 20px/28px | -17% |
| **H5** | 18px/24px | -10% |
| **Body Large** | 16px/24px | -11% |
| **Body** | 14px/20px | -13% |
| **Body Small** | 13px/18px | -7% |
| **Caption** | 11px/14px | -8% |

## Font Weights

### Weight Scale
```css
--font-weight-light: 300;    /* Not used in UI */
--font-weight-regular: 400;  /* Body text */
--font-weight-medium: 500;   /* Subtle emphasis */
--font-weight-semibold: 600; /* Headers, buttons */
--font-weight-bold: 700;     /* Primary headers */
```

### Weight Usage
- **700 Bold**: H1 only, maximum emphasis
- **600 Semibold**: H2-H4, buttons, labels
- **500 Medium**: H5, selected states
- **400 Regular**: All body text, default
- **300 Light**: Reserved for future use

## Line Height Strategy

### Ratios
- **Headings**: 1.15 - 1.25 (tighter)
- **Body Text**: 1.5 (optimal readability)
- **Small Text**: 1.4 (balanced)
- **Code**: 1.4 (aligned)

### Calculation
```css
/* Formula: line-height = font-size × ratio */
--line-height-tight: 1.15;
--line-height-snug: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

## Letter Spacing (Tracking)

### Values
```css
--letter-spacing-tighter: -0.02em;  /* Large headers */
--letter-spacing-tight: -0.01em;    /* Section headers */
--letter-spacing-normal: 0;         /* Body text */
--letter-spacing-wide: 0.05em;      /* Uppercase labels */
```

### Application
- **Negative tracking**: Larger headers (>28px)
- **Zero tracking**: Body text and small headers
- **Positive tracking**: Uppercase text only

## Responsive Typography

### Fluid Scaling
```css
/* Clamp formula for fluid typography */
h1 {
  font-size: clamp(2rem, 5vw, 3rem);
}

body {
  font-size: clamp(0.875rem, 2vw, 1rem);
}
```

### Breakpoint Adjustments
```scss
// Mobile First
.heading-1 {
  font-size: 2rem; // 32px
  
  @media (min-width: 768px) {
    font-size: 2.5rem; // 40px
  }
  
  @media (min-width: 1024px) {
    font-size: 3rem; // 48px
  }
}
```

## Special Typography Patterns

### Numbers & Data
```css
.number-display {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  font-weight: 500;
}
```

### Game Statistics
```css
.stat-value {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### Error Messages
```css
.error-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-error);
}
```

## Text Styling Guidelines

### Emphasis Hierarchy
1. **Size**: Largest difference for primary hierarchy
2. **Weight**: Secondary differentiation
3. **Color**: Tertiary emphasis
4. **Case**: Only for labels and special elements

### Maximum Line Length
- **Body text**: 45-75 characters (optimal: 66)
- **Headers**: No limit (usually short)
- **Cards**: 35-45 characters
- **Mobile**: Naturally constrained

### Text Alignment
- **Left**: Default for all text (LTR languages)
- **Center**: Headers in cards, short messages
- **Right**: Numbers in tables, opposing actions
- **Justify**: Never (creates uneven spacing)

## Accessibility Considerations

### Minimum Sizes
- **Body text**: 16px minimum (desktop)
- **Small text**: 14px minimum
- **Touch targets**: Text within must be readable

### Line Spacing for Readability
- **Minimum**: 1.4× for body text
- **Dyslexia-friendly**: 1.5-1.75×
- **WCAG guideline**: Adjustable to 200% without overlap

### Font Weight Contrast
- Minimum 200 weight difference for emphasis
- Never rely solely on weight for meaning
- Combine with size or color changes

## Platform-Specific Adjustments

### iOS
```css
.ios {
  --font-primary: -apple-system, 'SF Pro Display';
  --font-mono: 'SF Mono', 'Monaco';
  /* Respect Dynamic Type settings */
  font: -apple-system-body;
}
```

### Android
```css
.android {
  --font-primary: 'Roboto', sans-serif;
  --font-mono: 'Roboto Mono', monospace;
}
```

### Web Optimization
```css
/* Font Loading Strategy */
@font-face {
  font-family: 'Inter';
  src: url('inter.woff2') format('woff2');
  font-display: swap; /* Prevent FOIT */
  font-weight: 300 700;
}
```

## Implementation Examples

### CSS Variables
```css
:root {
  /* Font Families */
  --font-primary: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.75rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Component Classes
```scss
.heading-1 {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.body-text {
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: 1.5;
  max-width: 66ch;
}

.game-stat {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}
```

## Typography Dos and Don'ts

### Do's ✅
- Use the established type scale
- Maintain consistent line heights
- Test readability at all sizes
- Use tabular numbers for data
- Respect platform conventions

### Don'ts ❌
- Don't create new font sizes arbitrarily
- Don't use more than 3 font weights
- Don't center-align body text
- Don't use all-caps for long text
- Don't reduce contrast below WCAG AA

## Performance Optimization

### Font Loading
```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/inter-var.woff2" 
      as="font" type="font/woff2" crossorigin>

<!-- Font-display: swap for better UX -->
<style>
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter-var.woff2') format('woff2');
    font-display: swap;
  }
</style>
```

### Subset Fonts
- Include only necessary character sets
- Separate fonts for different languages
- Use variable fonts where supported

## Testing Checklist

- [ ] All text meets minimum size requirements
- [ ] Line lengths within optimal range
- [ ] Hierarchy clear without color
- [ ] Numbers align in tables
- [ ] Text remains readable when scaled 200%
- [ ] Platform fonts fallback properly
- [ ] Variable fonts work where supported
- [ ] Font loading doesn't block rendering

## Related Resources
- [Web Typography Best Practices](https://betterwebtype.com/)
- [Variable Fonts Guide](https://web.dev/variable-fonts/)
- [WCAG Typography](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
- [Type Scale Calculator](https://type-scale.com/)

## Support
For typography questions:
- Check scale for appropriate size
- Review weight guidelines
- Test readability across devices
- Validate accessibility compliance