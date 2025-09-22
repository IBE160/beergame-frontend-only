---
title: 'Implementation: Performance Achievements'
description: 'Implementation notes for the achievements feature.'
feature: 'Performance Achievements'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Implementation Notes: Achievements

- **Logic**: An achievements engine will be a set of rules that are checked after each game is completed. The engine will compare the game's results against the criteria for each achievement.
- **State**: The unlocked achievements will be stored in `localStorage` as an array of achievement IDs.
- **Content**: The achievements themselves (title, description, icon, criteria) will be stored in a separate content file.
