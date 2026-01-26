import React from 'react';
import { videoTheme, AccentColor } from '../config/theme';

interface BadgeProps {
  text: string;
  color: AccentColor;
  size?: 'sm' | 'md';
}

/**
 * Styled badge/tag component
 * Matches the Badge component from the main site
 */
export const Badge: React.FC<BadgeProps> = ({ text, color, size = 'md' }) => {
  const { colors, fonts } = videoTheme;
  const accentColor = colors.accent[color];

  const sizes = {
    sm: {
      padding: '4px 10px',
      fontSize: 11,
    },
    md: {
      padding: '6px 14px',
      fontSize: 13,
    },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        ...sizes[size],
        borderRadius: 20,
        fontFamily: fonts.mono,
        fontWeight: 500,
        letterSpacing: 0.5,
        background: `${accentColor}15`,
        border: `1px solid ${accentColor}40`,
        color: accentColor,
      }}
    >
      {text}
    </span>
  );
};

export default Badge;
