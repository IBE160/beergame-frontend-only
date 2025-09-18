---
title: "Interactions: Landing Page & Game Introduction"
description: "Defines the interaction patterns and animations for the landing page."
feature: "Landing Page & Game Introduction"
last-updated: 2025-09-18
version: 1.0
related-files:
  - ./README.md
status: draft
---

# Interactions: Landing Page & Game Introduction

## Overview
This document specifies the micro-interactions and animations for the landing page to create a responsive and engaging user experience.

## CTA Button ("Start Game")
- **Hover**: The button lifts slightly with a subtle shadow increase. Background color lightens by 10%.
- **Active/Click**: The button scales down to 95% of its original size.
- **Transition**: `200ms ease-out`

## "How to Play" Cards
- **Hover**: Cards lift and a subtle glow appears around the border.
- **Transition**: `250ms ease-out`

## Scroll Animations
- **Fade-in**: As the user scrolls down, sections and elements fade in and slide up slightly.
- **Trigger**: When the element is 75% visible in the viewport.
- **Animation**: `transform: translateY(20px); opacity: 0;` to `transform: translateY(0); opacity: 1;`
- **Duration**: `400ms ease-out`

## Navigation
- **Mobile Menu**: The hamburger icon animates to a close icon. The menu slides in from the right.
- **Transition**: `300ms ease-in-out`
