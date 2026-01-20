/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * DRAMA PORTFOLIO - CENTRALIZED COLOR CONFIGURATION
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * This file contains ALL color definitions used throughout the project.
 * To change any color in the site, modify the values here.
 *
 * HOW TO USE:
 * - Import specific colors: import { colors } from '@/config/colors'
 * - Import categories: import { cubeColors, heroColors } from '@/config/colors'
 * - Use in components: color={colors.accent.cyan}
 *
 * NOTE: After changing colors here, you may also need to update:
 * - index.html (Tailwind config) - for Tailwind utility classes
 * - The CSS variables in index.html <style> section - for gradients/glows
 */

// ═══════════════════════════════════════════════════════════════════════════════
// BASE PALETTE - Core colors used throughout the site
// ═══════════════════════════════════════════════════════════════════════════════

export const basePalette = {
  // Background colors (darkest to lightest)
  darker: '#0a0a0f',      // Deep obsidian - main page background
  dark: '#12121a',        // Secondary background - cards, navigation
  base: '#1a1a24',        // Elevated surfaces - glass cards
  light: '#525268',       // Lighter surface - borders, subtle elements

  // Accent colors (neon theme)
  cyan: '#00f5d4',        // Primary accent - CTAs, highlights, links
  magenta: '#f72585',     // Secondary accent - emphasis, warnings
  violet: '#7b2cbf',      // Tertiary accent - gradients, depth

  // Text colors
  textPrimary: '#f8f9fa', // Main text - headings, important content
  textSecondary: '#adb5bd', // Secondary text - descriptions, labels
  textMuted: '#6c757d',   // Muted text - placeholders, hints

  // Utility colors
  white: '#ffffff',
  black: '#000000',
} as const;


// ═══════════════════════════════════════════════════════════════════════════════
// 3D SCENE COLORS - Rubik's Cube & Three.js Elements
// ═══════════════════════════════════════════════════════════════════════════════

export const sceneColors = {
  // Canvas background
  canvasBackground: basePalette.darker,

  // Lighting colors
  lights: {
    directionalAccent: basePalette.cyan,    // Cyan-tinted directional light
    spotlightAccent: basePalette.magenta,   // Magenta spotlight
  },

  // Wireframe decorative shapes
  wireframe: {
    color: basePalette.cyan,
    opacity: 0.15,
  },
} as const;

export const cubeColors = {
  // Rubik's Cube face colors (randomly assigned)
  // These are the colors that appear on individual cube faces
  faces: [
    basePalette.cyan,      // Neon cyan
    basePalette.magenta,   // Neon magenta
    basePalette.violet,    // Neon violet
    basePalette.base,      // Dark surface
    basePalette.light,     // Lighter surface
    basePalette.textPrimary, // White/light
  ] as const,

  // Floating cubes in hero section (small decorative cubes)
  floating: {
    cube1: basePalette.cyan,    // Top-right floating cube
    cube2: basePalette.violet,  // Far-left floating cube (with link icon)
    cube3: basePalette.magenta, // Bottom-left floating cube (with wifi icon)
  },

  // Icon colors on cube faces
  icons: {
    onLightBg: '#1A1A1A',  // Dark icons on light cube faces
    onDarkBg: '#FFFFFF',   // Light icons on dark cube faces
  },
} as const;


// ═══════════════════════════════════════════════════════════════════════════════
// HERO SECTION COLORS
// ═══════════════════════════════════════════════════════════════════════════════

export const heroColors = {
  // Main title "ARCHITECTING"
  title: {
    gradient: {
      start: basePalette.cyan,
      middle: basePalette.violet,
      end: basePalette.magenta,
    },
  },

  // Subtitle "intelligence"
  subtitle: basePalette.textPrimary,

  // Tagline "→ AI • Full-Stack • Enterprise"
  tagline: {
    arrow: basePalette.magenta,
    text: basePalette.magenta,
  },

  // Description paragraph
  description: basePalette.textSecondary,

  // Decorative SVG elements (circles, lines)
  decorative: {
    circle1: basePalette.cyan,      // Large circle (75%, 45%)
    circle2: basePalette.magenta,   // Small circle (45%, 85%)
    lineGradient: {
      start: basePalette.cyan,
      middle: basePalette.violet,
      end: basePalette.magenta,
    },
    arcGradient: {
      start: basePalette.cyan,
      end: basePalette.violet,
    },
  },

  // "Explore Services" button brackets
  exploreBrackets: basePalette.cyan,

  // CTA button gradient
  ctaButton: {
    gradientStart: basePalette.cyan,
    gradientEnd: basePalette.violet,
    text: basePalette.darker,
    iconBg: basePalette.darker,
    icon: basePalette.cyan,
  },
} as const;


// ═══════════════════════════════════════════════════════════════════════════════
// CARD COLORS - Services, Portfolio, AI Lab
// ═══════════════════════════════════════════════════════════════════════════════

export const cardColors = {
  // Glass card backgrounds
  glass: {
    background: 'rgba(26, 26, 36, 0.4)',
    backgroundHover: basePalette.darker,
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(255, 255, 255, 0.15)',
  },

  // Service card accent colors (glow & theme)
  services: {
    ai: basePalette.cyan,         // AI & Intelligence Services
    fullstack: basePalette.violet, // Full-Stack Engineering
    enterprise: basePalette.magenta, // Enterprise Systems
  },

  // Card text colors
  text: {
    title: basePalette.textPrimary,
    description: basePalette.textSecondary,
    muted: basePalette.textMuted,
  },

  // Badge/tag colors
  badges: {
    cyan: basePalette.cyan,
    violet: basePalette.violet,
    magenta: basePalette.magenta,
  },

  // Glow effects (box-shadow colors)
  glow: {
    cyan: 'rgba(0, 245, 212, 0.3)',
    magenta: 'rgba(247, 37, 133, 0.3)',
    violet: 'rgba(123, 44, 191, 0.3)',
  },
} as const;


// ═══════════════════════════════════════════════════════════════════════════════
// AI LAB SECTION COLORS
// ═══════════════════════════════════════════════════════════════════════════════

export const aiLabColors = {
  // Workflow/automation animation
  workflow: basePalette.magenta,

  // Demo cards
  chatbot: basePalette.cyan,
  extraction: basePalette.violet,
  automation: basePalette.magenta,
} as const;


// ═══════════════════════════════════════════════════════════════════════════════
// NAVIGATION COLORS
// ═══════════════════════════════════════════════════════════════════════════════

export const navigationColors = {
  // Logo
  logo: {
    gradientStart: basePalette.cyan,
    gradientEnd: basePalette.violet,
    dot: basePalette.darker,
    text: basePalette.textPrimary,
  },

  // Nav links
  links: {
    default: basePalette.textMuted,
    hover: basePalette.cyan,
  },

  // Glass effect when scrolled
  glass: {
    background: 'rgba(18, 18, 26, 0.6)',
    border: 'rgba(255, 255, 255, 0.1)',
  },

  // CTA button
  cta: {
    gradientStart: basePalette.cyan,
    gradientEnd: basePalette.violet,
    text: basePalette.darker,
  },
} as const;


// ═══════════════════════════════════════════════════════════════════════════════
// UI UTILITY COLORS - Scrollbar, Selection, etc.
// ═══════════════════════════════════════════════════════════════════════════════

export const uiColors = {
  // Text selection
  selection: {
    background: basePalette.cyan,
    text: basePalette.darker,
  },

  // Scrollbar
  scrollbar: {
    track: basePalette.dark,
    thumb: {
      gradientStart: basePalette.cyan,
      gradientEnd: basePalette.violet,
    },
    thumbHover: {
      gradientStart: basePalette.cyan,
      gradientEnd: basePalette.magenta,
    },
  },
} as const;


// ═══════════════════════════════════════════════════════════════════════════════
// GRADIENT DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════════

export const gradients = {
  // Main neon gradient (used for text, buttons, accents)
  neon: `linear-gradient(135deg, ${basePalette.cyan} 0%, ${basePalette.violet} 50%, ${basePalette.magenta} 100%)`,

  // Dark gradient (backgrounds)
  dark: `linear-gradient(180deg, ${basePalette.darker} 0%, ${basePalette.dark} 100%)`,

  // Scrollbar gradient
  scrollbar: `linear-gradient(180deg, ${basePalette.cyan}, ${basePalette.violet})`,
  scrollbarHover: `linear-gradient(180deg, ${basePalette.cyan}, ${basePalette.magenta})`,

  // Button gradient
  button: `linear-gradient(to right, ${basePalette.cyan}, ${basePalette.violet})`,
} as const;


// ═══════════════════════════════════════════════════════════════════════════════
// COMBINED EXPORT - All colors in one object
// ═══════════════════════════════════════════════════════════════════════════════

export const colors = {
  base: basePalette,
  scene: sceneColors,
  cube: cubeColors,
  hero: heroColors,
  card: cardColors,
  aiLab: aiLabColors,
  navigation: navigationColors,
  ui: uiColors,
  gradients,
} as const;


// ═══════════════════════════════════════════════════════════════════════════════
// TAILWIND-COMPATIBLE EXPORT
// ═══════════════════════════════════════════════════════════════════════════════
// Use this in index.html Tailwind config

export const tailwindColors = {
  'base-darker': basePalette.darker,
  'base-dark': basePalette.dark,
  'base': basePalette.base,
  'base-light': basePalette.light,
  'accent-cyan': basePalette.cyan,
  'accent-magenta': basePalette.magenta,
  'accent-violet': basePalette.violet,
  'text-primary': basePalette.textPrimary,
  'text-secondary': basePalette.textSecondary,
  'text-muted': basePalette.textMuted,
} as const;

export default colors;
