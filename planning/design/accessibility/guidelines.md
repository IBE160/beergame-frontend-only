---
title: Accessibility Guidelines
description: Comprehensive accessibility standards and implementation guidelines for the Beer Game simulation
last-updated: 2025-01-18
version: 1.0.0
related-files:
  - ./README.md
  - ./testing.md
  - ./compliance.md
status: approved
---

# Accessibility Guidelines

## Overview
Our commitment to accessibility ensures that everyone, regardless of ability, can fully experience and learn from the Beer Game simulation. We follow WCAG 2.1 AA standards as our baseline, with AAA compliance where achievable.

## Table of Contents
- [Core Principles](#core-principles)
- [WCAG Compliance](#wcag-compliance)
- [Visual Accessibility](#visual-accessibility)
- [Motor Accessibility](#motor-accessibility)
- [Cognitive Accessibility](#cognitive-accessibility)
- [Auditory Accessibility](#auditory-accessibility)
- [Assistive Technology Support](#assistive-technology-support)
- [Implementation Guidelines](#implementation-guidelines)
- [Testing Requirements](#testing-requirements)

## Core Principles

### 1. Perceivable
Information and UI components must be presentable in ways users can perceive.
- Text alternatives for non-text content
- Captions and transcripts for media
- Sufficient color contrast
- Content adaptable to different presentations

### 2. Operable
Interface components must be operable by all users.
- Keyboard accessible functionality
- No keyboard traps
- Sufficient time limits
- No seizure-inducing content

### 3. Understandable
Information and UI operation must be understandable.
- Readable text content
- Predictable functionality
- Input assistance and error prevention
- Clear navigation and structure

### 4. Robust
Content must be robust enough for interpretation by assistive technologies.
- Valid, semantic HTML
- ARIA labels and roles
- Compatible with screen readers
- Progressive enhancement

## WCAG Compliance

### Level AA Requirements (Minimum)

#### Visual
- **Color Contrast**: 4.5:1 for normal text, 3:1 for large text
- **Focus Indicators**: Visible keyboard focus for all interactive elements
- **Color Independence**: Information not conveyed by color alone
- **Resize Text**: Text scalable to 200% without horizontal scrolling

#### Navigation
- **Keyboard Access**: All functionality available via keyboard
- **Skip Links**: Skip to main content option
- **Focus Order**: Logical tab order matching visual layout
- **Consistent Navigation**: Same navigation structure throughout

#### Content
- **Page Titles**: Descriptive, unique titles for each page
- **Headings**: Proper heading hierarchy (h1-h6)
- **Labels**: All form inputs clearly labeled
- **Error Messages**: Clear error identification and suggestions

### Level AAA Goals (Where Applicable)

#### Enhanced Contrast
- 7:1 for normal text
- 4.5:1 for large text
- Used for critical interface elements

#### Cognitive Support
- Simple language and clear instructions
- Context-sensitive help available
- Consistent and predictable interactions

## Visual Accessibility

### Color and Contrast

#### Contrast Requirements
```css
/* Minimum contrast ratios */
.text-normal {
  /* 4.5:1 against background */
  color: var(--color-text-primary);
}

.text-large {
  /* 3:1 against background (18px+ or 14px+ bold) */
  color: var(--color-text-secondary);
}

.text-critical {
  /* 7:1 for important information */
  color: var(--color-text-high-contrast);
}
```

#### Color Blind Safe Palette
- Never rely on color alone for meaning
- Use patterns, icons, or text labels as supplements
- Test with color blindness simulators
- Provide high contrast mode option

### Typography

#### Readable Fonts
- Minimum 16px for body text
- Sans-serif for UI elements
- Clear distinction between characters (I, l, 1)
- Adequate line height (1.5x minimum)

#### Text Spacing
```css
.accessible-text {
  line-height: 1.5;
  paragraph-spacing: 2em;
  letter-spacing: 0.12em;
  word-spacing: 0.16em;
}
```

### Focus Management

#### Visible Focus Indicators
```css
.focusable:focus {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .focusable:focus {
    outline-width: 4px;
    outline-color: currentColor;
  }
}
```

#### Focus Trap Prevention
- Modal dialogs contain focus
- ESC key closes modals
- Focus returns to trigger element
- No infinite focus loops

## Motor Accessibility

### Keyboard Navigation

#### Full Keyboard Support
- **Tab**: Navigate forward through interactive elements
- **Shift+Tab**: Navigate backward
- **Enter/Space**: Activate buttons and links
- **Arrow Keys**: Navigate within components
- **Escape**: Cancel operations, close modals

#### Keyboard Shortcuts
```javascript
// Game-specific shortcuts
const shortcuts = {
  'n': 'New game',
  'o': 'Place order',
  'h': 'Show help',
  'c': 'View charts',
  's': 'Save game',
};
```

### Touch Targets

#### Minimum Sizes
- **44×44px**: iOS minimum touch target
- **48×48px**: Android minimum touch target
- **8px spacing**: Between adjacent targets

```css
.touch-target {
  min-width: 44px;
  min-height: 44px;
  margin: 4px;
}
```

### Gesture Alternatives
- All gesture-based actions have button alternatives
- Pinch-to-zoom has zoom controls
- Swipe navigation has arrow buttons
- Drag-and-drop has keyboard support

## Cognitive Accessibility

### Clear Language

#### Writing Guidelines
- Use simple, clear sentences
- Define technical terms on first use
- Provide context for abbreviations
- Avoid jargon when possible

#### Instructions
```html
<!-- Clear, step-by-step instructions -->
<div class="instructions">
  <h2>How to Place an Order</h2>
  <ol>
    <li>Look at your current inventory level</li>
    <li>Check incoming customer orders</li>
    <li>Enter the quantity you want to order</li>
    <li>Click "Place Order" to submit</li>
  </ol>
</div>
```

### Consistent Patterns

#### Predictable Behavior
- Same actions produce same results
- Navigation remains consistent
- Buttons in standard locations
- Familiar icons and metaphors

#### Error Prevention
```html
<!-- Confirmation for destructive actions -->
<dialog role="alertdialog" aria-labelledby="confirm-title">
  <h2 id="confirm-title">Start New Game?</h2>
  <p>This will end your current game. Are you sure?</p>
  <button>Cancel</button>
  <button>Start New Game</button>
</dialog>
```

### Time Limits

#### Flexible Timing
- No time limits on decisions
- Pause functionality for animations
- Save progress at any point
- Resume games after interruption

## Auditory Accessibility

### Visual Alternatives

#### For Sound Effects
- Visual feedback for all audio cues
- Screen flash for alerts
- Text notifications for events
- Vibration patterns on mobile

#### Implementation
```javascript
// Provide visual feedback alongside audio
function playSound(soundName) {
  if (userPreferences.soundEnabled) {
    audio.play(soundName);
  }

  // Always show visual feedback
  showVisualFeedback(soundName);
}
```

## Assistive Technology Support

### Screen Reader Compatibility

#### Semantic HTML
```html
<!-- Use semantic elements -->
<nav role="navigation" aria-label="Main">
  <ul>
    <li><a href="#game">Play Game</a></li>
    <li><a href="#instructions">Instructions</a></li>
  </ul>
</nav>

<main role="main">
  <h1>Beer Game Supply Chain Simulation</h1>
  <!-- Content -->
</main>
```

#### ARIA Labels
```html
<!-- Descriptive ARIA labels -->
<button aria-label="Place order for 10 units">
  Order
</button>

<div role="status" aria-live="polite">
  Order placed successfully
</div>

<input
  type="number"
  aria-label="Order quantity"
  aria-describedby="order-help"
  aria-invalid="false"
/>
<span id="order-help">Enter quantity between 0 and 999</span>
```

#### Live Regions
```html
<!-- Announce dynamic updates -->
<div aria-live="polite" aria-atomic="true">
  <p>Week <span id="current-week">5</span> of 52</p>
</div>

<div role="alert" aria-live="assertive">
  <p>Warning: High backorder costs!</p>
</div>
```

### Voice Control Support

#### Voice Commands
- Label all interactive elements clearly
- Support standard voice commands
- Provide voice feedback options
- Test with voice control software

## Implementation Guidelines

### Development Checklist

#### HTML Structure
- [ ] Semantic HTML5 elements used
- [ ] Proper heading hierarchy (h1-h6)
- [ ] Lang attribute on html element
- [ ] Unique page titles
- [ ] Landmark roles defined

#### Forms
- [ ] All inputs have labels
- [ ] Required fields marked
- [ ] Error messages associated with fields
- [ ] Instructions provided where needed
- [ ] Fieldsets group related inputs

#### Images and Media
- [ ] Alt text for informative images
- [ ] Empty alt for decorative images
- [ ] Captions for complex graphics
- [ ] Text alternatives for charts

#### Interactive Elements
- [ ] Keyboard accessible
- [ ] Focus indicators visible
- [ ] ARIA labels where needed
- [ ] Role attributes appropriate
- [ ] States communicated

### CSS Accessibility

```css
/* Utility classes for accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus-visible:focus {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

@media (prefers-contrast: high) {
  :root {
    --color-contrast-boost: 1.5;
  }
}
```

### JavaScript Accessibility

```javascript
// Manage focus programmatically
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const previousFocus = document.activeElement;

  modal.showModal();
  modal.querySelector('.modal-close').focus();

  modal.addEventListener('close', () => {
    previousFocus.focus();
  });
}

// Announce dynamic content
function announceUpdate(message) {
  const liveRegion = document.getElementById('live-region');
  liveRegion.textContent = message;
}

// Handle keyboard navigation
element.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'Enter':
    case ' ':
      activateElement();
      break;
    case 'Escape':
      closeElement();
      break;
    case 'ArrowDown':
      focusNext();
      break;
    case 'ArrowUp':
      focusPrevious();
      break;
  }
});
```

## Testing Requirements

### Automated Testing
- axe-core integration in CI/CD
- Lighthouse accessibility audits
- WAVE tool validation
- Color contrast analyzers

### Manual Testing
- Keyboard-only navigation
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Browser zoom to 200%
- High contrast mode
- Reduced motion settings

### User Testing
- Include users with disabilities
- Test with actual assistive technologies
- Gather feedback on pain points
- Iterate based on findings

## Accessibility Statement

### Our Commitment
We are committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.

### Standards Compliance
- WCAG 2.1 Level AA
- Section 508
- ADA compliance
- EN 301 549

### Known Issues
- Document any temporary accessibility barriers
- Provide timelines for fixes
- Offer alternative access methods

### Feedback
- Provide contact method for accessibility issues
- Response time commitment
- Process for handling requests

## Resources

### Guidelines and Standards
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
- [Section 508](https://www.section508.gov/)

### Testing Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [NVDA Screen Reader](https://www.nvaccess.org/)

### Learning Resources
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [Inclusive Components](https://inclusive-components.design/)
- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/)

## Support
For accessibility questions:
- Review WCAG guidelines
- Test with automated tools
- Validate with screen readers
- Consult accessibility experts