import React from 'react';
import { interpolate } from 'remotion';
import { videoTheme } from '../../core/config/theme';

interface FlowPathProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  frame: number;
  delay: number;
}

/**
 * Animated connection path between workflow nodes
 */
export const FlowPath: React.FC<FlowPathProps> = ({
  startX,
  startY,
  endX,
  endY,
  frame,
  delay,
}) => {
  const { colors } = videoTheme;

  // Path drawing animation
  const pathProgress = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Calculate control point for curved path
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;
  const controlOffset = 30;

  // Create curved path
  const path = `M ${startX} ${startY} Q ${midX} ${midY - controlOffset} ${endX} ${endY}`;

  // Calculate path length for dash animation
  const pathLength = Math.sqrt(
    Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
  ) * 1.2; // Approximate curved length

  // Animated particle position along path
  const particleProgress = interpolate(
    (frame - delay - 20) % 40,
    [0, 40],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const showParticle = frame > delay + 20 && pathProgress === 1;

  // Calculate particle position on quadratic bezier
  const t = particleProgress;
  const particleX =
    Math.pow(1 - t, 2) * startX +
    2 * (1 - t) * t * midX +
    Math.pow(t, 2) * endX;
  const particleY =
    Math.pow(1 - t, 2) * startY +
    2 * (1 - t) * t * (midY - controlOffset) +
    Math.pow(t, 2) * endY;

  return (
    <svg
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      {/* Path line */}
      <path
        d={path}
        fill="none"
        stroke={colors.accent.magenta}
        strokeWidth={2}
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength * (1 - pathProgress)}
        opacity={0.5}
      />

      {/* Animated particle */}
      {showParticle && (
        <circle
          cx={particleX}
          cy={particleY}
          r={6}
          fill={colors.accent.magenta}
          style={{
            filter: `drop-shadow(0 0 8px ${colors.accent.magenta})`,
          }}
        />
      )}
    </svg>
  );
};

export default FlowPath;
