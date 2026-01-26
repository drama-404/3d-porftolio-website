import React, { CSSProperties, ReactNode } from 'react';
import { videoTheme } from '../config/theme';

interface MockupFrameProps {
  x?: number;
  y?: number;
  width: number;
  height: number;
  glowColor: string;
  title?: string;
  children: ReactNode;
  style?: CSSProperties;
}

/**
 * Mockup device/window frame component
 * Creates a realistic app window with title bar and glow effect
 *
 * If x and y are not provided, the frame will be centered
 */
export const MockupFrame: React.FC<MockupFrameProps> = ({
  x,
  y,
  width,
  height,
  glowColor,
  title,
  children,
  style = {},
}) => {
  const { colors } = videoTheme;

  // Determine positioning: absolute with x/y, or centered
  const positionStyle: CSSProperties = x !== undefined && y !== undefined
    ? { position: 'absolute', left: x, top: y }
    : { position: 'relative', margin: 'auto' };

  return (
    <div
      style={{
        ...positionStyle,
        width,
        height,
        borderRadius: 16,
        background: colors.background.secondary,
        border: `1px solid ${glowColor}30`,
        boxShadow: `
          0 0 60px ${glowColor}20,
          0 0 120px ${glowColor}10,
          0 25px 50px rgba(0, 0, 0, 0.5),
          inset 0 1px 0 rgba(255,255,255,0.05)
        `,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      {/* Window chrome (title bar with dots) */}
      <div
        style={{
          height: 40,
          minHeight: 40,
          background: colors.background.surface,
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: 8,
        }}
      >
        {/* Traffic light dots */}
        {[
          colors.trafficLights.red,
          colors.trafficLights.yellow,
          colors.trafficLights.green,
        ].map((color, i) => (
          <div
            key={i}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: color,
              opacity: 0.9,
            }}
          />
        ))}
        {/* Title */}
        {title && (
          <span
            style={{
              marginLeft: 12,
              color: colors.text.muted,
              fontSize: 13,
              fontFamily: videoTheme.fonts.mono,
              letterSpacing: 0.5,
            }}
          >
            {title}
          </span>
        )}
      </div>

      {/* Content area */}
      <div
        style={{
          flex: 1,
          padding: 24,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MockupFrame;
