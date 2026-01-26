/**
 * Responsive video configuration
 * Two compositions for optimal quality on each device
 */

export const DESKTOP_CONFIG = {
  width: 1920,
  height: 1080,
  aspectRatio: '16:9' as const,
  id: 'hero-demo-desktop',
} as const;

export const MOBILE_CONFIG = {
  width: 1080,
  height: 1920,
  aspectRatio: '9:16' as const,
  id: 'hero-demo-mobile',
} as const;

export type VideoMode = 'desktop' | 'mobile';

/**
 * Layout presets for scene elements
 * Positions and sizes adapt based on video mode
 */
export const layoutPresets = {
  desktop: {
    mockup: {
      width: 1200,
      height: 700,
      x: 360, // Centered horizontally
      y: 190,
    },
    sceneTitle: {
      fontSize: 32,
      y: 80,
    },
    badges: {
      fontSize: 14,
      y: 950,
      gap: 16,
    },
  },
  mobile: {
    mockup: {
      width: 920,
      height: 1100,
      x: 80,
      y: 410,
    },
    sceneTitle: {
      fontSize: 28,
      y: 180,
    },
    badges: {
      fontSize: 12,
      y: 1750,
      gap: 12,
    },
  },
} as const;

/**
 * Get layout preset for a given video mode
 */
export const getLayout = (mode: VideoMode) => layoutPresets[mode];

/**
 * Get video dimensions for a given mode
 */
export const getDimensions = (mode: VideoMode) =>
  mode === 'desktop' ? DESKTOP_CONFIG : MOBILE_CONFIG;
