/**
 * Centralized timing configuration for Remotion compositions
 * All durations in frames for precision
 */

export const VIDEO_CONFIG = {
  fps: 30,
  totalDurationSeconds: 12, // 12s loop (3 scenes x 4s each)
  get totalFrames() {
    return this.fps * this.totalDurationSeconds;
  },
} as const;

export const SCENE_TIMING = {
  count: 3,
  durationSeconds: 4,
  get durationFrames() {
    return VIDEO_CONFIG.fps * this.durationSeconds;
  },
  transitionFrames: 15, // 0.5s fade transition
} as const;

// Pre-defined easing functions for consistency
export const EASING = {
  smooth: (t: number) => t * t * (3 - 2 * t), // smoothstep
  easeOut: (t: number) => 1 - Math.pow(1 - t, 3), // ease-out cubic
  easeIn: (t: number) => t * t * t, // ease-in cubic
  easeInOut: (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
} as const;

/**
 * Get timing boundaries for a scene by index
 */
export const getSceneBoundaries = (sceneIndex: number) => ({
  start: sceneIndex * SCENE_TIMING.durationFrames,
  end: (sceneIndex + 1) * SCENE_TIMING.durationFrames,
  fadeIn: {
    start: sceneIndex * SCENE_TIMING.durationFrames,
    end: sceneIndex * SCENE_TIMING.durationFrames + SCENE_TIMING.transitionFrames,
  },
  fadeOut: {
    start:
      (sceneIndex + 1) * SCENE_TIMING.durationFrames -
      SCENE_TIMING.transitionFrames,
    end: (sceneIndex + 1) * SCENE_TIMING.durationFrames,
  },
});

/**
 * Convert seconds to frames at the configured FPS
 */
export const secondsToFrames = (seconds: number) =>
  Math.round(seconds * VIDEO_CONFIG.fps);

/**
 * Convert frames to seconds at the configured FPS
 */
export const framesToSeconds = (frames: number) => frames / VIDEO_CONFIG.fps;

/**
 * Scene duration in frames (commonly used constant)
 */
export const SCENE_DURATION_FRAMES = SCENE_TIMING.durationFrames;

/**
 * Pre-calculated scene boundaries for all three scenes
 */
export const sceneTiming = {
  scene1: getSceneBoundaries(0),
  scene2: getSceneBoundaries(1),
  scene3: getSceneBoundaries(2),
} as const;

/**
 * Commonly used constants (for Root component)
 */
export const FPS = VIDEO_CONFIG.fps;
export const TOTAL_DURATION_FRAMES = VIDEO_CONFIG.totalFrames;
