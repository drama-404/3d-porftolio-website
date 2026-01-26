import React, { CSSProperties } from 'react';
import { interpolate } from 'remotion';

type Animation = 'fadeSlideUp' | 'fadeSlideDown' | 'typewriter' | 'fadeIn' | 'scaleIn';

interface AnimatedTextProps {
  text: string;
  animation: Animation;
  frame: number;
  startFrame: number;
  durationFrames: number;
  style?: CSSProperties;
}

/**
 * Animated text component with multiple animation presets
 * All animations are frame-driven (no CSS transitions)
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  animation,
  frame,
  startFrame,
  durationFrames,
  style,
}) => {
  // Calculate animation progress (0 to 1)
  const progress = interpolate(
    frame,
    [startFrame, startFrame + durationFrames],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const animationStyles = getAnimationStyles(animation, progress);

  // For typewriter, slice the text based on progress
  const displayText =
    animation === 'typewriter'
      ? text.slice(0, Math.floor(text.length * progress))
      : text;

  return <div style={{ ...style, ...animationStyles }}>{displayText}</div>;
};

/**
 * Get CSS styles for a given animation type and progress
 */
function getAnimationStyles(
  animation: Animation,
  progress: number
): CSSProperties {
  switch (animation) {
    case 'fadeSlideUp':
      return {
        opacity: progress,
        transform: `translateY(${interpolate(progress, [0, 1], [20, 0])}px)`,
      };
    case 'fadeSlideDown':
      return {
        opacity: progress,
        transform: `translateY(${interpolate(progress, [0, 1], [-20, 0])}px)`,
      };
    case 'fadeIn':
      return { opacity: progress };
    case 'scaleIn':
      return {
        opacity: progress,
        transform: `scale(${interpolate(progress, [0, 1], [0.8, 1])})`,
      };
    case 'typewriter':
      return { opacity: 1 };
    default:
      return {};
  }
}

export default AnimatedText;
