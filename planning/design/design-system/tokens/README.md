---
title: Design Tokens Overview
description: Core design values that form the foundation of the Beer Game design system
last-updated: 2025-01-18
version: 1.0.0
related-files:
  - ./colors.md
  - ./typography.md
  - ./spacing.md
  - ./animations.md
  - ../style-guide.yaml
status: approved
---

# Design Tokens

## Overview
Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to maintain a scalable and consistent visual system.

## Table of Contents
- [Colors](./colors.md) - Complete color palette and usage
- [Typography](./typography.md) - Type scale and font specifications
- [Spacing](./spacing.md) - Spacing scale and layout units
- [Animations](./animations.md) - Motion tokens and transitions

## Token Categories

### 1. Base Tokens
Foundation-level tokens that define raw values:
```css
--base-color-blue-500: #3B82F6;
--base-font-size-16: 1rem;
--base-spacing-8: 8px;
```

### 2. Semantic Tokens
Purpose-driven tokens that reference base tokens:
```css
--color-primary: var(--base-color-blue-500);
--font-size-body: var(--base-font-size-16);
--spacing-md: var(--base-spacing-8);
```

### 3. Component Tokens
Component-specific tokens for consistency:
```css
--button-padding: var(--spacing-md) var(--spacing-lg);
--card-border-radius: 12px;
--chart-height-mobile: 200px;
```

## Token Naming Convention

### Structure
`--[category]-[property]-[variant]-[state]`

Examples:
- `--color-primary-dark` (category: color, property: primary, variant: dark)
- `--spacing-lg` (category: spacing, property: lg)
- `--font-size-h1` (category: font, property: size, variant: h1)

### Categories
- **color**: All color values
- **font**: Typography-related tokens
- **spacing**: Spacing and size units
- **shadow**: Box shadow definitions
- **border**: Border specifications
- **animation**: Motion and timing values
- **breakpoint**: Responsive breakpoints
- **z**: Z-index layering

## Implementation Strategy

### CSS Custom Properties
Primary implementation using CSS variables:
```css
:root {
  /* Base tokens */
  --base-unit: 8px;

  /* Semantic tokens */
  --spacing-xs: calc(var(--base-unit) * 0.5);
  --spacing-sm: var(--base-unit);
  --spacing-md: calc(var(--base-unit) * 2);
  --spacing-lg: calc(var(--base-unit) * 3);
  --spacing-xl: calc(var(--base-unit) * 4);
}
```

### JavaScript/TypeScript Objects
For use in JS/TS applications:
```typescript
export const tokens = {
  colors: {
    primary: '#3B82F6',
    primaryDark: '#2563EB',
    primaryLight: '#60A5FA',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
};
```

### Tailwind Configuration
Integration with Tailwind CSS:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
      },
    },
  },
};
```

## Token Usage Guidelines

### Do's ✅
- Always use tokens instead of hard-coded values
- Create semantic tokens for specific use cases
- Document any new tokens thoroughly
- Follow naming conventions consistently
- Test tokens across all themes (light/dark)

### Don'ts ❌
- Don't create duplicate tokens
- Don't use color names in semantic tokens
- Don't hard-code values that should be tokens
- Don't create overly specific tokens
- Don't modify base tokens without approval

## Responsive Tokens

Some tokens adapt based on viewport:
```css
:root {
  --container-padding: 16px;
  --chart-height: 200px;
}

@media (min-width: 768px) {
  :root {
    --container-padding: 32px;
    --chart-height: 300px;
  }
}

@media (min-width: 1024px) {
  :root {
    --container-padding: 64px;
    --chart-height: 400px;
  }
}
```

## Theme Tokens

Support for light and dark themes:
```css
/* Light theme (default) */
:root {
  --color-background: #ffffff;
  --color-text: #111827;
  --color-border: #e5e7eb;
}

/* Dark theme */
[data-theme="dark"] {
  --color-background: #111827;
  --color-text: #f9fafb;
  --color-border: #374151;
}
```

## Platform-Specific Tokens

### iOS
```css
.ios {
  --safe-area-inset-top: env(safe-area-inset-top);
  --safe-area-inset-bottom: env(safe-area-inset-bottom);
  --nav-bar-height: 44px;
  --tab-bar-height: 49px;
}
```

### Android
```css
.android {
  --status-bar-height: 24px;
  --nav-bar-height: 56px;
  --fab-size: 56px;
  --touch-target-min: 48px;
}
```

## Token Maintenance

### Adding New Tokens
1. Check if similar token exists
2. Follow naming convention
3. Add to appropriate category file
4. Update TypeScript definitions
5. Document usage and purpose
6. Test across themes and platforms

### Deprecating Tokens
1. Mark as deprecated in documentation
2. Provide migration path
3. Support for one major version
4. Remove in next major release

### Token Audit Checklist
- [ ] No duplicate tokens
- [ ] Consistent naming
- [ ] All tokens documented
- [ ] TypeScript definitions updated
- [ ] Themes properly supported
- [ ] Responsive values appropriate
- [ ] Platform tokens complete

## Quick Reference

### Most Used Tokens
```css
/* Colors */
--color-primary: #3B82F6;
--color-success: #10B981;
--color-error: #EF4444;
--color-warning: #F59E0B;

/* Spacing */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;

/* Typography */
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-xl: 20px;

/* Borders */
--border-radius-sm: 4px;
--border-radius-md: 8px;
--border-radius-lg: 12px;

/* Shadows */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 25px rgba(0,0,0,0.15);

/* Animation */
--duration-fast: 200ms;
--duration-normal: 400ms;
--duration-slow: 600ms;
--easing-standard: cubic-bezier(0.4, 0, 0.6, 1);
```

## Migration Guide

### From Hard-coded Values
```css
/* Before */
.button {
  padding: 10px 20px;
  background: #3B82F6;
  border-radius: 8px;
}

/* After */
.button {
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-primary);
  border-radius: var(--border-radius-md);
}
```

### From Old Token Names
```css
/* Old */
--blue-500: #3B82F6;
--space-2: 8px;

/* New */
--color-primary: #3B82F6;
--spacing-sm: 8px;
```

## Tools & Resources

### Token Generation
- Style Dictionary for multi-platform token generation
- Theo for design token documentation
- Figma Tokens plugin for design-development sync

### Token Validation
- CSS Lint rules for token usage
- TypeScript strict typing
- Automated visual regression testing

## Related Documentation
- [Colors Documentation](./colors.md)
- [Typography System](./typography.md)
- [Spacing Scale](./spacing.md)
- [Animation Guidelines](./animations.md)
- [Component Tokens](../components/README.md)

## Support
For token-related questions:
- Check category-specific documentation
- Review naming conventions
- Consult implementation examples
- Create issue for new token requests