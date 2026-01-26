import React, { ReactNode, CSSProperties } from 'react';
import { videoTheme, AccentColor } from '../config/theme';

interface GlowBoxProps {
  color: AccentColor;
  children: ReactNode;
  style?: CSSProperties;
  borderRadius?: number;
  padding?: number | string;
  intensity?: 'low' | 'medium' | 'high';
}

/**
 * Container with neon glow effect
 * Matches the glassmorphism aesthetic of the main site
 */
export const GlowBox: React.FC<GlowBoxProps> = ({
  color,
  children,
  style,
  borderRadius = 12,
  padding = 16,
  intensity = 'medium',
}) => {
  const { colors } = videoTheme;
  const accentColor = colors.accent[color];

  const glowIntensity = {
    low: {
      boxShadow: `0 0 20px ${accentColor}15`,
      border: `1px solid ${accentColor}20`,
    },
    medium: {
      boxShadow: `0 0 30px ${accentColor}25, 0 0 60px ${accentColor}10`,
      border: `1px solid ${accentColor}30`,
    },
    high: {
      boxShadow: `0 0 40px ${accentColor}35, 0 0 80px ${accentColor}20`,
      border: `1px solid ${accentColor}50`,
    },
  };

  return (
    <div
      style={{
        background: `${colors.background.surface}80`,
        borderRadius,
        padding,
        ...glowIntensity[intensity],
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default GlowBox;
