import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { SceneProps } from '../types';
import { videoTheme } from '../../core/config/theme';
import { getLayout } from '../../core/config/responsive';
import { MockupFrame } from '../../core/primitives/MockupFrame';
import { Badge } from '../../core/primitives/Badge';
import { DocumentStack } from './DocumentStack';
import { JsonOutput } from './JsonOutput';

// Capability badges
const BADGES = ['PDF → Data', 'Albanian Formats', 'Auto-Export'];

/**
 * Document Scene - Shows invoice/document processing capability
 */
export const DocumentScene: React.FC<SceneProps> = ({ opacity, mode }) => {
  const frame = useCurrentFrame(); // Local frame within the Sequence
  const layout = getLayout(mode);
  const { colors } = videoTheme;

  // Debug logging (only log every 30 frames to reduce spam)
  if (frame % 30 === 0) {
    console.log('📄 DocumentScene rendering:', {
      mode,
      frame,
      mockupSize: `${layout.mockup.width}x${layout.mockup.height}`,
      position: `${layout.mockup.x}, ${layout.mockup.y}`,
      opacity
    });
  }

  // Processing indicator animation
  const processingRotation = frame * 6; // Continuous rotation
  const processingOpacity = interpolate(
    frame,
    [20, 30, 70, 80],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Arrow animation
  const arrowProgress = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Badge entrance
  const badgeOpacity = interpolate(frame, [90, 105], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        opacity,
        backgroundColor: colors.background.primary,
      }}
    >
      <MockupFrame
        x={layout.mockup.x}
        y={layout.mockup.y}
        width={layout.mockup.width}
        height={layout.mockup.height}
        glowColor={colors.accent.violet}
        title="Document Processor"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '100%',
            flexDirection: mode === 'mobile' ? 'column' : 'row',
            gap: mode === 'mobile' ? 40 : 0,
          }}
        >
          {/* Document stack */}
          <DocumentStack frame={frame} />

          {/* Processing arrow */}
          <div
            style={{
              display: 'flex',
              flexDirection: mode === 'mobile' ? 'column' : 'row',
              alignItems: 'center',
              gap: 12,
              opacity: arrowProgress,
            }}
          >
            {/* Spinning processing indicator */}
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                border: `3px solid ${colors.accent.violet}30`,
                borderTopColor: colors.accent.violet,
                transform: `rotate(${processingRotation}deg)`,
                opacity: processingOpacity,
              }}
            />

            {/* Arrow */}
            <svg
              width={mode === 'mobile' ? 40 : 80}
              height={mode === 'mobile' ? 80 : 40}
              viewBox={mode === 'mobile' ? '0 0 40 80' : '0 0 80 40'}
              style={{
                transform: `scale(${arrowProgress})`,
              }}
            >
              {mode === 'mobile' ? (
                // Vertical arrow for mobile
                <>
                  <line
                    x1="20"
                    y1="10"
                    x2="20"
                    y2="60"
                    stroke={colors.accent.violet}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="10,50 20,65 30,50"
                    fill="none"
                    stroke={colors.accent.violet}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              ) : (
                // Horizontal arrow for desktop
                <>
                  <line
                    x1="10"
                    y1="20"
                    x2="60"
                    y2="20"
                    stroke={colors.accent.violet}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="50,10 65,20 50,30"
                    fill="none"
                    stroke={colors.accent.violet}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              )}
            </svg>
          </div>

          {/* JSON output */}
          <JsonOutput frame={frame} startFrame={55} />
        </div>
      </MockupFrame>

      {/* Capability badges */}
      <div
        style={{
          position: 'absolute',
          bottom: layout.badges.y,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: layout.badges.gap,
          opacity: badgeOpacity,
        }}
      >
        {BADGES.map((text) => (
          <Badge key={text} text={text} color="violet" size={mode === 'desktop' ? 'md' : 'sm'} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

export default DocumentScene;
