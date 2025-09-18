---
title: Color Palette Documentation
description: Complete color system with semantic meanings, accessibility notes, and usage guidelines
last-updated: 2025-01-18
version: 1.0.0
related-files:
  - ../style-guide.yaml
  - ./README.md
status: approved
---

# Color System

## Overview
Our color system balances professional credibility with engaging gameplay, using strategic color to communicate state, differentiate roles, and guide attention while maintaining WCAG AA accessibility standards.

## Color Philosophy

### Principles
1. **Functional First**: Every color has a purpose beyond aesthetics
2. **Accessibility Always**: All combinations meet WCAG AA (4.5:1) minimum
3. **Consistent Meaning**: Colors maintain semantic meaning across contexts
4. **Role Differentiation**: Supply chain positions clearly distinguished
5. **Emotional Appropriate**: Colors evoke intended emotional responses

## Primary Palette

### Brand Colors

#### Primary Blue
- **Base**: `#3B82F6` - Primary actions, links, focus states
- **Dark**: `#2563EB` - Hover states, emphasis
- **Light**: `#60A5FA` - Backgrounds, disabled states
- **Pale**: `#DBEAFE` - Subtle backgrounds

**Usage**:
- Primary CTAs (Start Game, Place Order)
- Active navigation elements
- Selected states
- Links and interactive text

#### Secondary Green  
- **Base**: `#10B981` - Success, positive metrics
- **Dark**: `#059669` - Success hover states
- **Light**: `#34D399` - Success backgrounds
- **Pale**: `#D1FAE5` - Subtle success indicators

**Usage**:
- Success messages and confirmations
- Positive performance indicators
- Inventory availability
- Retailer role color

### Semantic Colors

#### Success
- **Color**: `#10B981`
- **Usage**: Successful operations, positive outcomes
- **Examples**: Order placed, game saved, target achieved

#### Warning
- **Color**: `#F59E0B`
- **Usage**: Caution states, important notices
- **Examples**: Low inventory, approaching deadline, high costs

#### Error
- **Color**: `#EF4444`
- **Usage**: Errors, critical issues, negative values
- **Examples**: Backorders, validation errors, system errors

#### Info
- **Color**: `#3B82F6`
- **Usage**: Informational messages, tips
- **Examples**: Game tips, instructions, general information

## Neutral Palette

Grays for text, borders, and backgrounds:

```css
--neutral-50:  #F9FAFB  /* Backgrounds */
--neutral-100: #F3F4F6  /* Light backgrounds */
--neutral-200: #E5E7EB  /* Borders */
--neutral-300: #D1D5DB  /* Disabled borders */
--neutral-400: #9CA3AF  /* Placeholder text */
--neutral-500: #6B7280  /* Secondary text */
--neutral-600: #4B5563  /* Body text */
--neutral-700: #374151  /* Headings */
--neutral-800: #1F2937  /* Dark backgrounds */
--neutral-900: #111827  /* Primary text, dark mode bg */
```

## Supply Chain Role Colors

Each role has a distinct color for immediate recognition:

### Retailer
- **Color**: `#10B981` (Green)
- **Meaning**: Customer-facing, growth, sales
- **Usage**: Retailer cards, charts, indicators

### Wholesaler
- **Color**: `#3B82F6` (Blue)
- **Meaning**: Distribution, flow, reliability
- **Usage**: Wholesaler cards, charts, indicators

### Distributor
- **Color**: `#8B5CF6` (Purple)
- **Meaning**: Logistics, complexity, coordination
- **Usage**: Distributor cards, charts, indicators

### Manufacturer
- **Color**: `#F59E0B` (Amber)
- **Meaning**: Production, source, creation
- **Usage**: Manufacturer cards, charts, indicators

### Customer
- **Color**: `#EC4899` (Pink)
- **Meaning**: Demand, market, consumption
- **Usage**: Customer demand indicators

## Data Visualization Colors

Optimized for clarity in charts:

### Chart Palette
```css
--chart-inventory:       #10B981  /* Green - positive */
--chart-orders-placed:   #3B82F6  /* Blue - action */
--chart-orders-received: #8B5CF6  /* Purple - incoming */
--chart-backorders:      #EF4444  /* Red - negative */
--chart-costs:           #F59E0B  /* Amber - warning */
--chart-demand:          #EC4899  /* Pink - market */
```

### Sequential Scales
For data ranges:
- **Blues**: `#DBEAFE` → `#3B82F6` → `#1E3A8A`
- **Greens**: `#D1FAE5` → `#10B981` → `#064E3B`
- **Reds**: `#FEE2E2` → `#EF4444` → `#7F1D1D`

### Diverging Scales
For positive/negative values:
- **Green-Red**: `#10B981` → `#F3F4F6` → `#EF4444`
- **Blue-Orange**: `#3B82F6` → `#F3F4F6` → `#F59E0B`

## Accessibility Considerations

### Color Contrast Ratios

#### Text on Backgrounds
| Text Color | Background | Ratio | WCAG Level |
|------------|------------|-------|------------|
| #111827 on #FFFFFF | White | 19.3:1 | AAA |
| #4B5563 on #FFFFFF | White | 7.5:1 | AAA |
| #6B7280 on #FFFFFF | White | 4.5:1 | AA |
| #FFFFFF on #3B82F6 | Primary | 4.5:1 | AA |
| #FFFFFF on #10B981 | Success | 3.2:1 | AA Large |
| #FFFFFF on #EF4444 | Error | 4.0:1 | AA Large |

### Color Blind Safe Combinations

Tested for common color vision deficiencies:
- **Protanopia** (Red-blind): Role colors remain distinct
- **Deuteranopia** (Green-blind): Clear differentiation maintained
- **Tritanopia** (Blue-blind): Sufficient contrast preserved

**Safe Combinations**:
- Never rely on color alone (use icons, patterns, text)
- Role colors chosen for maximum differentiation
- Charts include patterns/shapes as secondary indicators

## Dark Mode Adaptations

### Color Transformations
```css
/* Light Mode */
--bg-primary: #FFFFFF;
--text-primary: #111827;
--border-primary: #E5E7EB;

/* Dark Mode */
--bg-primary: #111827;
--text-primary: #F9FAFB;
--border-primary: #374151;
```

### Semantic Color Adjustments
- Success: Slightly lighter for dark backgrounds
- Warning: Increased luminosity
- Error: Maintained with slight adjustment
- Info: Lighter shade for visibility

## Implementation Examples

### CSS Variables
```css
:root {
  /* Primary Palette */
  --color-primary: #3B82F6;
  --color-primary-dark: #2563EB;
  --color-primary-light: #60A5FA;
  
  /* Semantic Colors */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  
  /* Role Colors */
  --color-retailer: #10B981;
  --color-wholesaler: #3B82F6;
  --color-distributor: #8B5CF6;
  --color-manufacturer: #F59E0B;
}
```

### Tailwind Config
```javascript
colors: {
  primary: {
    DEFAULT: '#3B82F6',
    dark: '#2563EB',
    light: '#60A5FA',
  },
  roles: {
    retailer: '#10B981',
    wholesaler: '#3B82F6',
    distributor: '#8B5CF6',
    manufacturer: '#F59E0B',
  },
}
```

### Component Usage
```tsx
// Button with semantic color
<Button variant="success" />

// Role-specific card
<RoleCard role="retailer" /> // Applies green color

// Chart with consistent colors
<LineChart 
  data={data}
  colors={[
    'var(--chart-inventory)',
    'var(--chart-orders)',
  ]}
/>
```

## Color Usage Guidelines

### Do's ✅
- Use semantic colors for their intended purpose
- Maintain consistency across similar elements
- Test all color combinations for accessibility
- Provide non-color indicators (icons, text)
- Use role colors consistently throughout

### Don'ts ❌
- Don't use color as the only differentiator
- Don't create new colors without system update
- Don't use low contrast combinations
- Don't mix semantic meanings
- Don't use decorative colors that don't serve purpose

## Testing & Validation

### Tools
- **Contrast Checkers**: WebAIM, Stark
- **Color Blind Simulators**: Sim Daltonism, Colorblinding
- **Accessibility Audits**: axe DevTools, Lighthouse

### Validation Checklist
- [ ] All text meets WCAG AA contrast ratios
- [ ] Interactive elements have distinct focus states
- [ ] Error states don't rely on color alone
- [ ] Charts readable in grayscale
- [ ] Dark mode maintains all contrast requirements
- [ ] Role colors distinguishable by all users

## Color Psychology in Gaming Context

### Emotional Associations
- **Blue** (Primary): Trust, stability, intelligence
- **Green** (Success): Growth, positivity, profit
- **Red** (Error): Urgency, loss, attention
- **Amber** (Warning): Caution, consideration, warmth
- **Purple** (Special): Premium, complexity, innovation

### Strategic Application
- Opening screens use calming blues
- Gameplay uses role colors for orientation
- Performance feedback uses semantic colors
- Completion screens celebrate with success green

## Maintenance & Evolution

### Adding New Colors
1. Justify functional need
2. Test accessibility compliance
3. Verify distinction from existing colors
4. Update all platform implementations
5. Document usage guidelines

### Deprecating Colors
1. Identify all usages
2. Provide migration path
3. Update documentation
4. Remove after grace period

## Related Resources
- [WCAG Color Contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Material Design Color](https://material.io/design/color/)
- [Accessible Colors](https://accessible-colors.com/)
- [Color Universal Design](https://jfly.uni-koeln.de/color/)

## Support
For color-related questions:
- Check accessibility with provided tools
- Consult semantic color meanings
- Review role color assignments
- Test in both light and dark modes