# Drama Website - AI Engineer Portfolio

## Project Overview

This is a production-grade portfolio website for an AI Engineer and Full-Stack Developer. The site features a stunning scroll-animated Rubik's Cube as the hero element, glassmorphism design aesthetic, and 3D visualizations throughout.

**Brand Identity:**
- Intelligent, mathematical, sleek, high-tech
- Feminine and approachable (not cold/corporate)
- Key differentiator: Architecting intelligence, not just building websites
---

## Design System

### Color Palette

```css
--base-darker: #0a0a0f      /* Deep obsidian background */
--base-dark: #12121a        /* Secondary background */
--base: #1a1a24             /* Elevated surfaces */

--accent-cyan: #00f5d4      /* Primary accent */
--accent-magenta: #f72585   /* Secondary accent */
--accent-violet: #7b2cbf    /* Tertiary accent */

--text-primary: #f8f9fa     /* Main text */
--text-secondary: #adb5bd   /* Secondary text */
--text-muted: #6c757d       /* Muted text */
```

### Typography

- **Display Font:** "Syne" (Google Fonts) - for headings, geometric and technical
- **Body Font:** "DM Sans" (Google Fonts) - clean and readable
- **Monospace:** "JetBrains Mono" (Google Fonts) - for code elements

### Visual Language

- **Glassmorphism:** Frosted glass effect with backdrop blur
- **Neon Gradients:** Cyan → Violet → Magenta (135deg)
- **Glow Effects:** Subtle neon glows on hover
- **Mathematical Precision:** Exact spacing, alignment, geometric shapes

---

## Key Features

### 1. Hero Section - Scroll-Animated Rubik's Cube
- Background already implemented (cloned).

### 2. Services Section - 3D Animated Cards

Three glass cards with 3D visualizations:
- **AI & Intelligence Services** - Neural network animation (cyan)
- **Full-Stack Engineering** - Code editor visual (violet)
- **Enterprise Systems** - Blueprint wireframe (magenta)

Each card has hover effects (lift + glow) and the animation should move/rotate when hovering on the card.

### 3. AI Lab Section - Animated Demos

Three animated visualizations (extensible for future interactive demos):
- **Chatbot Demo** - Animated conversation flow
- **Data Extraction Demo** - Document → JSON transformation
- **Automation Workflow** - Decision tree with particles

Architecture supports future interactive demos without refactoring.

### 4. Portfolio Section

Project showcase with:
- Filter by category (All, AI, Full-Stack, Enterprise)
- Elegant gradient placeholders (to be replaced with real images)
- Tech stack badges
- Hover effects with image zoom

### 5. Contact Section

Fully functional contact form with:
- Zod validation
- Resend email integration
- Direct links: Email, LinkedIn, Calendly
- Success/error feedback

---

## Available Skills and Agents

### Skills to Use

When implementing this project, **ALWAYS use these skills** to ensure best practices:

1. **`frontend-design` or `frontend-design:frontend-design`**
   - Use for creating the UI components and sections
   - Ensures distinctive, production-grade design
   - Helps avoid generic AI aesthetics

2. **`react-best-practices`**
   - Use when writing React/Next.js components
   - Ensures optimal performance patterns
   - Critical for 3D rendering performance

### Agents to Use

The `.claude/agents` directory contains specialized agents:

1. **`code-architect`**
   - Use for architectural decisions
   - Planning component structure
   - Design pattern selection

2. **`code-reviewer`**
   - Use after writing significant code sections
   - Review for bugs, security, quality
   - Ensure production-grade standards

3. **`code-simplifier`**
   - Use when complexity grows
   - Reduce over-engineering
   - Improve readability

---
