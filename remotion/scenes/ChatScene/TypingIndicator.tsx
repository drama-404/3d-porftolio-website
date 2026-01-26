import React from 'react';
import { interpolate } from 'remotion';
import { videoTheme } from '../../core/config/theme';

interface TypingIndicatorProps {
  frame: number;
  visible: boolean;
}

/**
 * Animated typing indicator (three bouncing dots)
 */
export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  frame,
  visible,
}) => {
  const { colors } = videoTheme;

  if (!visible) return null;

  return (
    <div
      style={{
        display: 'flex',
        gap: 6,
        padding: '14px 20px',
        background: `${colors.background.light}40`,
        borderRadius: 16,
        borderBottomLeftRadius: 4,
        width: 'fit-content',
      }}
    >
      {[0, 1, 2].map((i) => {
        // Create bouncing animation offset by index
        const bounce = Math.sin((frame * 0.3 + i * 1.5) % (Math.PI * 2));
        const translateY = interpolate(bounce, [-1, 1], [3, -3]);

        return (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: colors.accent.cyan,
              opacity: 0.8,
              transform: `translateY(${translateY}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default TypingIndicator;
