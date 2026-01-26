import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { SceneProps } from '../types';
import { videoTheme } from '../../core/config/theme';
import { getLayout } from '../../core/config/responsive';
import { MockupFrame } from '../../core/primitives';
import { WorkflowNode } from './WorkflowNode';
import { FlowPath } from './FlowPath';

// Workflow node configuration (scaled 2x for proper sizing)
const WORKFLOW_NODES = [
  { id: 'trigger', label: 'Trigger', icon: 'zap', x: 160, y: 240 },
  { id: 'process', label: 'Process', icon: 'cpu', x: 560, y: 160 },
  { id: 'decision', label: 'Decision', icon: 'git-branch', x: 560, y: 360 },
  { id: 'action1', label: 'Email', icon: 'mail', x: 960, y: 120 },
  { id: 'action2', label: 'Database', icon: 'database', x: 960, y: 360 },
];

// Connection paths between nodes (scaled 2x for proper sizing)
const CONNECTIONS = [
  { from: 'trigger', to: 'process', startX: 300, startY: 280, endX: 420, endY: 200 },
  { from: 'trigger', to: 'decision', startX: 300, startY: 280, endX: 420, endY: 400 },
  { from: 'process', to: 'action1', startX: 700, startY: 200, endX: 820, endY: 160 },
  { from: 'decision', to: 'action2', startX: 700, startY: 400, endX: 820, endY: 400 },
];

/**
 * AutomationScene - Showcases workflow automation capabilities
 * Displays an animated workflow diagram with nodes and flowing connections
 */
export const AutomationScene: React.FC<SceneProps> = ({ opacity, mode }) => {
  const frame = useCurrentFrame(); // Local frame within the Sequence
  const { fps } = useVideoConfig();
  const { colors, fonts } = videoTheme;
  const layout = getLayout(mode);

  // Debug logging (only log every 30 frames to reduce spam)
  if (frame % 30 === 0) {
    console.log('🤖 AutomationScene rendering:', {
      mode,
      frame,
      mockupSize: `${layout.mockup.width}x${layout.mockup.height}`,
      position: `${layout.mockup.x}, ${layout.mockup.y}`,
      opacity
    });
  }

  // Scene entrance animation
  const sceneProgress = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 80 },
  });

  // Title animation
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Status indicator animation
  const statusProgress = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Pulse animation for active status
  const pulse = interpolate(
    Math.sin((frame / fps) * Math.PI * 2),
    [-1, 1],
    [0.5, 1]
  );

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
        title="workflow-engine"
        width={layout.mockup.width}
        height={layout.mockup.height}
        glowColor={colors.accent.violet}
        style={{
          transform: `scale(${sceneProgress})`,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            background: `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '12px 16px',
              borderBottom: `1px solid ${colors.background.light}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              opacity: titleOpacity,
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                color: colors.text.secondary,
                letterSpacing: '0.05em',
              }}
            >
              AUTOMATION PIPELINE
            </div>

            {/* Status indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                opacity: statusProgress,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: colors.accent.cyan,
                  opacity: pulse,
                  boxShadow: `0 0 8px ${colors.accent.cyan}`,
                }}
              />
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  color: colors.accent.cyan,
                }}
              >
                RUNNING
              </span>
            </div>
          </div>

          {/* Workflow canvas */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 'calc(100% - 45px)',
            }}
          >
            {/* Connection paths */}
            {CONNECTIONS.map((conn, index) => (
              <FlowPath
                key={`${conn.from}-${conn.to}`}
                startX={conn.startX}
                startY={conn.startY}
                endX={conn.endX}
                endY={conn.endY}
                frame={frame}
                delay={20 + index * 15}
              />
            ))}

            {/* Workflow nodes */}
            {WORKFLOW_NODES.map((node, index) => (
              <WorkflowNode
                key={node.id}
                label={node.label}
                icon={node.icon}
                x={node.x}
                y={node.y}
                frame={frame}
                delay={5 + index * 10}
                isActive={frame > 60 + index * 10}
              />
            ))}
          </div>

          {/* Metrics footer */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '8px 16px',
              background: `linear-gradient(transparent, ${colors.background.primary})`,
              display: 'flex',
              justifyContent: 'space-around',
              opacity: interpolate(frame, [80, 100], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
            }}
          >
            {[
              { label: 'Tasks', value: '1,247' },
              { label: 'Success', value: '99.8%' },
              { label: 'Avg Time', value: '1.2s' },
            ].map((metric, i) => (
              <div
                key={metric.label}
                style={{
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 600,
                    color: colors.accent.violet,
                  }}
                >
                  {metric.value}
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 9,
                    color: colors.text.muted,
                    textTransform: 'uppercase',
                  }}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MockupFrame>
    </AbsoluteFill>
  );
};

export default AutomationScene;
