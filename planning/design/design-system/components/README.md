---
title: Component Library Overview
description: Complete component specifications and usage guidelines for the Beer Game design system
last-updated: 2025-01-18
version: 1.0.0
related-files:
  - ./buttons.md
  - ./forms.md
  - ./cards.md
  - ./navigation.md
  - ./modals.md
status: approved
---

# Component Library

## Overview
Our component library provides reusable, accessible, and performant UI components that maintain consistency across the Beer Game simulation. Each component is designed with flexibility, responsiveness, and user experience at its core.

## Component Categories

### Core Components
Essential building blocks used throughout the application:
- **Buttons**: Primary actions and interactions
- **Forms**: Input collection and validation
- **Cards**: Content containers and grouping
- **Navigation**: Wayfinding and menu systems
- **Modals**: Overlays and dialogs

### Data Display
Components for presenting information:
- **Tables**: Structured data presentation
- **Charts**: Data visualization
- **Stats**: Metric displays
- **Badges**: Status indicators
- **Progress**: Completion indicators

### Feedback
User feedback and communication:
- **Alerts**: System messages
- **Toasts**: Temporary notifications
- **Tooltips**: Contextual help
- **Loading**: Progress indicators
- **Empty States**: No-data messaging

### Game-Specific
Custom components for gameplay:
- **Role Cards**: Supply chain position selection
- **Order Input**: Quantity entry interface
- **Inventory Display**: Stock level visualization
- **Cost Meter**: Running cost accumulator
- **Supply Chain Diagram**: Flow visualization

## Component Architecture

### Structure
```typescript
interface ComponentProps {
  // Visual variants
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg' | 'xl';

  // States
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;

  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
  role?: string;

  // Styling
  className?: string;
  style?: CSSProperties;

  // Content
  children?: ReactNode;

  // Events
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}
```

### Composition Pattern
```tsx
// Compound components for flexibility
<Card>
  <Card.Header>
    <Card.Title>Inventory Status</Card.Title>
    <Card.Actions>
      <Button size="sm">Refresh</Button>
    </Card.Actions>
  </Card.Header>
  <Card.Body>
    <InventoryDisplay value={12} />
  </Card.Body>
  <Card.Footer>
    <Text size="sm" color="muted">Last updated: 2 min ago</Text>
  </Card.Footer>
</Card>
```

## Design Tokens Integration

All components use design tokens for consistency:

```css
.button {
  /* Spacing tokens */
  padding: var(--spacing-sm) var(--spacing-md);

  /* Color tokens */
  background: var(--color-primary);
  color: var(--color-text-inverse);

  /* Typography tokens */
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);

  /* Border tokens */
  border-radius: var(--radius-md);

  /* Animation tokens */
  transition: all var(--duration-fast) var(--ease-out);
}
```

## Responsive Behavior

### Adaptive Sizing
Components adapt to viewport:
```scss
.component {
  // Mobile first
  padding: var(--spacing-sm);
  font-size: var(--font-size-sm);

  @media (min-width: 768px) {
    padding: var(--spacing-md);
    font-size: var(--font-size-base);
  }

  @media (min-width: 1024px) {
    padding: var(--spacing-lg);
    font-size: var(--font-size-lg);
  }
}
```

### Container Queries
Components respond to container size:
```css
@container (min-width: 400px) {
  .card {
    grid-template-columns: 1fr 1fr;
  }
}
```

## Accessibility Standards

### Keyboard Support
Every component supports keyboard interaction:
- **Tab**: Focus navigation
- **Enter/Space**: Activation
- **Arrow keys**: Selection within groups
- **Escape**: Cancel/close actions

### ARIA Implementation
```html
<!-- Proper ARIA attributes -->
<button
  role="button"
  aria-label="Place order for 10 units"
  aria-pressed="false"
  aria-disabled="false"
  tabindex="0"
>
  Place Order
</button>
```

### Focus Management
```css
.focusable:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}
```

## State Management

### Component States
Each component handles multiple states:

1. **Default**: Base appearance
2. **Hover**: User hovering
3. **Active**: Being clicked/touched
4. **Focus**: Keyboard focused
5. **Disabled**: Non-interactive
6. **Loading**: Async operation
7. **Error**: Invalid state
8. **Success**: Completed state

### State Styling
```css
/* State-based styling */
.button {
  /* Default */
  background: var(--color-primary);

  &:hover:not(:disabled) {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 3px solid var(--color-focus);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.loading {
    pointer-events: none;
    position: relative;

    &::after {
      /* Spinner overlay */
    }
  }
}
```

## Performance Optimization

### Rendering
- Memoization for expensive components
- Virtual scrolling for lists
- Lazy loading for below-fold
- Code splitting by route

### Animation Performance
```css
/* GPU-accelerated properties only */
.animated {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU */
}
```

## Testing Requirements

### Unit Tests
```typescript
describe('Button Component', () => {
  it('renders with correct variant', () => {});
  it('handles click events', () => {});
  it('disables when loading', () => {});
  it('shows loading spinner', () => {});
  it('applies aria attributes', () => {});
});
```

### Visual Regression
- Storybook snapshots
- Percy integration
- Chromatic testing

### Accessibility Testing
- axe-core integration
- Keyboard navigation tests
- Screen reader compatibility

## Component Documentation

Each component includes:

### Props Table
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | Visual style variant |
| size | string | 'md' | Component size |
| disabled | boolean | false | Disabled state |

### Usage Examples
```tsx
// Basic usage
<Button>Click me</Button>

// With props
<Button
  variant="secondary"
  size="lg"
  onClick={handleClick}
>
  Large Secondary Button
</Button>

// Loading state
<Button loading>
  Saving...
</Button>
```

### Do's and Don'ts
✅ **Do**: Use semantic variants
❌ **Don't**: Override with inline styles

✅ **Do**: Provide accessible labels
❌ **Don't**: Use color alone for meaning

### Figma Reference
Links to Figma component designs

## Version Management

### Semantic Versioning
- **Major**: Breaking changes
- **Minor**: New features
- **Patch**: Bug fixes

### Deprecation Process
1. Mark as deprecated with warning
2. Provide migration guide
3. Support for 2 minor versions
4. Remove in next major version

## Component Checklist

Before releasing a component:
- [ ] Responsive design tested
- [ ] Accessibility audit passed
- [ ] Performance benchmarked
- [ ] Documentation complete
- [ ] Unit tests written
- [ ] Visual regression tests added
- [ ] Storybook story created
- [ ] Design tokens used
- [ ] Dark mode supported
- [ ] RTL languages supported

## Support Resources
- Component Storybook: [URL]
- Design Figma File: [URL]
- GitHub Repository: [URL]
- Discord Channel: #design-system

## Last Updated
2025-01-18 - Initial component library documentation