import React from 'react';
import { interpolate, spring, useVideoConfig } from 'remotion';
import { videoTheme } from '../../core/config/theme';

interface JsonOutputProps {
  frame: number;
  startFrame: number;
}

// JSON data to display
const JSON_LINES = [
  { key: 'vendor', value: '"Vodafone Albania"', color: 'cyan' },
  { key: 'date', value: '"2024-01-15"', color: 'text' },
  { key: 'total', value: '"€1,250.00"', color: 'green' },
  { key: 'status', value: '"verified"', color: 'cyan' },
];

/**
 * Animated JSON output showing extracted data
 */
export const JsonOutput: React.FC<JsonOutputProps> = ({ frame, startFrame }) => {
  const { fps } = useVideoConfig();
  const { colors, fonts } = videoTheme;

  const entrance = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 15 },
  });
  const progress = frame >= startFrame ? entrance : 0;

  return (
    <div
      style={{
        background: colors.background.primary,
        borderRadius: 12,
        padding: 20,
        border: `1px solid ${colors.accent.violet}40`,
        boxShadow: `0 0 30px ${colors.accent.violet}15`,
        fontFamily: fonts.mono,
        fontSize: 15,
        opacity: progress,
        transform: `translateX(${interpolate(progress, [0, 1], [30, 0])}px)`,
      }}
    >
      {/* Opening brace */}
      <div style={{ color: colors.text.muted }}>{'{'}</div>

      {/* JSON lines */}
      {JSON_LINES.map((line, i) => {
        const lineDelay = startFrame + 10 + i * 8;
        const lineProgress = interpolate(
          frame,
          [lineDelay, lineDelay + 10],
          [0, 1],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        const valueColor =
          line.color === 'cyan'
            ? colors.accent.cyan
            : line.color === 'green'
            ? '#4ade80'
            : colors.text.secondary;

        return (
          <div
            key={line.key}
            style={{
              paddingLeft: 24,
              opacity: lineProgress,
              transform: `translateX(${interpolate(lineProgress, [0, 1], [10, 0])}px)`,
            }}
          >
            <span style={{ color: colors.accent.violet }}>"{line.key}"</span>
            <span style={{ color: colors.text.muted }}>: </span>
            <span style={{ color: valueColor }}>{line.value}</span>
            {i < JSON_LINES.length - 1 && (
              <span style={{ color: colors.text.muted }}>,</span>
            )}
          </div>
        );
      })}

      {/* Closing brace */}
      <div style={{ color: colors.text.muted }}>{'}'}</div>
    </div>
  );
};

export default JsonOutput;
