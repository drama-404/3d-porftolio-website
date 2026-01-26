/**
 * Remotion theme configuration
 * Imports from the centralized color system to maintain consistency
 */
import { basePalette, gradients } from '../../../config/colors';

export const videoTheme = {
  colors: {
    background: {
      primary: basePalette.darker,    // #0a0a0f
      secondary: basePalette.dark,    // #12121a
      surface: basePalette.base,      // #1a1a24
      light: basePalette.light,       // #525268
    },
    accent: {
      cyan: basePalette.cyan,         // #00f5d4
      magenta: basePalette.magenta,   // #f72585
      violet: basePalette.violet,     // #7b2cbf
    },
    text: {
      primary: basePalette.textPrimary,   // #f8f9fa
      secondary: basePalette.textSecondary, // #adb5bd
      muted: basePalette.textMuted,       // #6c757d
    },
    // macOS window chrome traffic light colors
    trafficLights: {
      red: '#ff5f57',
      yellow: '#ffbd2e',
      green: '#28c840',
    },
  },
  fonts: {
    display: 'Syne, sans-serif',
    body: 'DM Sans, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  gradientCSS: gradients.neon,
} as const;

// Scene-specific accent mapping
export const sceneAccents = {
  chat: 'cyan',
  document: 'violet',
  automation: 'magenta',
} as const;

export type SceneAccent = keyof typeof sceneAccents;
export type AccentColor = 'cyan' | 'violet' | 'magenta';
