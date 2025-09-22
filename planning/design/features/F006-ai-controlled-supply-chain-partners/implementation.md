---
title: 'Implementation: AI-Controlled Supply Chain Partners'
description: 'Implementation notes for the AI partners feature.'
feature: 'AI-Controlled Supply Chain Partners'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Implementation Notes: AI Partners

- **Logic**: The AI logic is a core part of the game engine. It will be a function that takes the AI's current state (inventory, backlog, etc.) and returns an order quantity.
- **Algorithm**: A common approach is the "base-stock" policy. The AI tries to maintain a certain level of inventory and orders enough to get back to that level, plus expected demand.
- **Difficulty**: The difficulty settings will adjust the parameters of the AI's ordering logic (e.g., how much it overreacts to demand changes).
