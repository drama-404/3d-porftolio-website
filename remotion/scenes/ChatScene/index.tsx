import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { SceneProps } from '../types';
import { videoTheme } from '../../core/config/theme';
import { getLayout } from '../../core/config/responsive';
import { MockupFrame } from '../../core/primitives/MockupFrame';
import { Badge } from '../../core/primitives/Badge';
import { ChatBubble } from './ChatBubble';
import { TypingIndicator } from './TypingIndicator';

// Chat messages to display
const MESSAGES = [
  { role: 'user' as const, text: 'Do you have rooms available for this weekend?', delay: 15 },
  { role: 'ai' as const, text: 'Checking availability for Saturday-Sunday...', delay: 50 },
  { role: 'ai' as const, text: 'Yes! 2 standard rooms available. Would you like to book?', delay: 80 },
];

// Capability badges
const BADGES = ['WhatsApp', '5 Languages', '24/7'];

/**
 * Chat Scene - Shows multilingual AI assistant capability
 */
export const ChatScene: React.FC<SceneProps> = ({ opacity, mode }) => {
  const frame = useCurrentFrame(); // Local frame within the Sequence
  const layout = getLayout(mode);
  const { colors, fonts } = videoTheme;

  // Debug logging (only log every 30 frames to reduce spam)
  if (frame % 30 === 0) {
    console.log('💬 ChatScene rendering:', {
      mode,
      frame,
      mockupSize: `${layout.mockup.width}x${layout.mockup.height}`,
      position: `${layout.mockup.x}, ${layout.mockup.y}`,
      opacity
    });
  }

  // Badge entrance animation
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
      {/* Mockup device frame */}
      <MockupFrame
        x={layout.mockup.x}
        y={layout.mockup.y}
        width={layout.mockup.width}
        height={layout.mockup.height}
        glowColor={colors.accent.cyan}
        title="AI Assistant"
      >
        {/* Language indicator */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            marginBottom: 20,
            opacity: interpolate(frame, [5, 15], [0, 1], { extrapolateRight: 'clamp' }),
          }}
        >
          {['🇦🇱', '🇬🇧', '🇮🇹', '🇩🇪'].map((flag, i) => (
            <span
              key={flag}
              style={{
                fontSize: mode === 'desktop' ? 24 : 20,
                opacity: i === 1 ? 1 : 0.4, // Highlight English
              }}
            >
              {flag}
            </span>
          ))}
        </div>

        {/* Chat messages */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {MESSAGES.map((msg, i) => (
            <ChatBubble
              key={i}
              role={msg.role}
              text={msg.text}
              frame={frame}
              startFrame={msg.delay}
              index={i}
            />
          ))}

          {/* Typing indicator (shown between messages) */}
          <TypingIndicator frame={frame} visible={frame > 35 && frame < 75} />
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
          <Badge key={text} text={text} color="cyan" size={mode === 'desktop' ? 'md' : 'sm'} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

export default ChatScene;
