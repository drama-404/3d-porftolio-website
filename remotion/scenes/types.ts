import React from 'react';
import { VideoMode } from '../core/config/responsive';
import { AccentColor } from '../core/config/theme';

/**
 * Props that all scene components receive
 */
export interface SceneProps {
  /** Opacity for fade transitions (0 to 1) */
  opacity: number;
  /** Video mode for responsive layouts */
  mode: VideoMode;
}

/**
 * Scene definition for the registry
 */
export interface SceneDefinition {
  id: string;
  accent: AccentColor;
  Component: React.FC<SceneProps>;
}
