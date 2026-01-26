import React from 'react';
import { interpolate, spring, useVideoConfig } from 'remotion';
import { videoTheme } from '../../core/config/theme';

interface DocumentStackProps {
  frame: number;
}

/**
 * Animated stack of documents being processed
 */
export const DocumentStack: React.FC<DocumentStackProps> = ({ frame }) => {
  const { fps } = useVideoConfig();
  const { colors } = videoTheme;

  // Documents slide in one by one
  const docs = [0, 1, 2];

  return (
    <div style={{ position: 'relative', width: 140, height: 180 }}>
      {docs.map((i) => {
        const delay = i * 8;
        const entrance = spring({
          frame: frame - delay,
          fps,
          config: { damping: 20 },
        });
        const progress = frame >= delay ? entrance : 0;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: 120,
              height: 160,
              background: colors.background.light,
              borderRadius: 8,
              border: `1px solid ${colors.text.muted}30`,
              padding: 12,
              transform: `
                translate(${i * 8}px, ${i * 8}px)
                rotate(${i * 2}deg)
                scale(${interpolate(progress, [0, 1], [0.8, 1])})
              `,
              opacity: progress,
              zIndex: 3 - i,
            }}
          >
            {/* Document lines */}
            <div
              style={{
                width: '70%',
                height: 6,
                background: colors.text.muted,
                opacity: 0.3,
                borderRadius: 3,
                marginBottom: 8,
              }}
            />
            <div
              style={{
                width: '90%',
                height: 6,
                background: colors.text.muted,
                opacity: 0.2,
                borderRadius: 3,
                marginBottom: 8,
              }}
            />
            <div
              style={{
                width: '60%',
                height: 6,
                background: colors.text.muted,
                opacity: 0.2,
                borderRadius: 3,
                marginBottom: 8,
              }}
            />
            <div
              style={{
                width: '80%',
                height: 6,
                background: colors.text.muted,
                opacity: 0.2,
                borderRadius: 3,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DocumentStack;
