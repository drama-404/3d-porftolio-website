import React from 'react';
import { interpolate, spring, useVideoConfig } from 'remotion';
import { videoTheme } from '../../core/config/theme';

interface WorkflowNodeProps {
  x: number;
  y: number;
  icon: string;
  label: string;
  frame: number;
  delay: number;
  isActive?: boolean;
}

/**
 * Individual workflow node with icon and label
 */
export const WorkflowNode: React.FC<WorkflowNodeProps> = ({
  x,
  y,
  icon,
  label,
  frame,
  delay,
  isActive = false,
}) => {
  const { fps } = useVideoConfig();
  const { colors, fonts } = videoTheme;

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const progress = frame >= delay ? entrance : 0;

  // Pulse effect for active node
  const pulse = isActive ? 0.8 + Math.sin(frame * 0.15) * 0.2 : 1;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${interpolate(progress, [0, 1], [0.5, 1])})`,
        opacity: progress,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
      }}
    >
      {/* Node circle */}
      <div
        style={{
          width: 70,
          height: 70,
          borderRadius: '50%',
          background: isActive
            ? `${colors.accent.magenta}20`
            : `${colors.background.light}60`,
          border: `2px solid ${isActive ? colors.accent.magenta : colors.text.muted}50`,
          boxShadow: isActive
            ? `0 0 20px ${colors.accent.magenta}40`
            : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          transform: `scale(${pulse})`,
          transition: 'transform 0.1s',
        }}
      >
        {icon}
      </div>

      {/* Label */}
      <span
        style={{
          fontFamily: fonts.mono,
          fontSize: 12,
          color: isActive ? colors.accent.magenta : colors.text.muted,
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default WorkflowNode;
