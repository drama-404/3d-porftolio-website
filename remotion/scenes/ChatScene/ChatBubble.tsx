import React from 'react';
import { interpolate, spring, useVideoConfig } from 'remotion';
import { videoTheme } from '../../core/config/theme';

interface ChatBubbleProps {
  role: 'user' | 'ai';
  text: string;
  frame: number;
  startFrame: number;
  index: number;
}

/**
 * Animated chat message bubble
 */
export const ChatBubble: React.FC<ChatBubbleProps> = ({
  role,
  text,
  frame,
  startFrame,
  index,
}) => {
  const { fps } = useVideoConfig();
  const { colors, fonts } = videoTheme;

  // Spring animation for entrance
  const entrance = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  // Clamp to 0 before start frame
  const progress = frame >= startFrame ? entrance : 0;

  const isUser = role === 'user';
  const bubbleColor = isUser ? colors.background.light : colors.accent.cyan;
  const textColor = isUser ? colors.text.primary : colors.background.primary;
  const bgOpacity = isUser ? 'cc' : '25';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: 16,
        opacity: progress,
        transform: `translateY(${interpolate(progress, [0, 1], [20, 0])}px)`,
      }}
    >
      <div
        style={{
          maxWidth: '75%',
          padding: '14px 20px',
          borderRadius: 16,
          borderBottomLeftRadius: isUser ? 16 : 4,
          borderBottomRightRadius: isUser ? 4 : 16,
          background: `${bubbleColor}${bgOpacity}`,
          border: `1px solid ${bubbleColor}40`,
          color: isUser ? colors.text.primary : colors.accent.cyan,
          fontFamily: fonts.body,
          fontSize: 18,
          lineHeight: 1.5,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatBubble;
