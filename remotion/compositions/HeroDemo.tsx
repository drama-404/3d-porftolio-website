import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from 'remotion';
import { videoTheme } from '../core/config/theme';
import { sceneTiming, SCENE_DURATION_FRAMES } from '../core/config/timing';
import { ChatScene, DocumentScene, AutomationScene } from '../scenes';

interface HeroDemoProps {
  mode: 'desktop' | 'mobile';
}

/**
 * HeroDemo - Main composition that orchestrates all scenes
 * Uses Sequence components to transition between AI capability demonstrations
 */
export const HeroDemo: React.FC<HeroDemoProps> = ({ mode }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const { colors } = videoTheme;

  // Cross-fade duration in frames
  const crossFadeDuration = 15;

  // Calculate scene boundaries
  const scene1Start = 0;
  const scene1End = sceneTiming.scene1.end;
  const scene2Start = sceneTiming.scene2.start;
  const scene2End = sceneTiming.scene2.end;
  const scene3Start = sceneTiming.scene3.start;
  const scene3End = durationInFrames;

  // Calculate opacity for each scene (with cross-fade)
  const scene1Opacity = interpolate(
    frame,
    [scene1End - crossFadeDuration, scene1End],
    [1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const scene2Opacity = interpolate(
    frame,
    [
      scene2Start,
      scene2Start + crossFadeDuration,
      scene2End - crossFadeDuration,
      scene2End,
    ],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const scene3Opacity = interpolate(
    frame,
    [scene3Start, scene3Start + crossFadeDuration],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at center, ${colors.background.secondary} 0%, ${colors.background.primary} 100%)`,
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${colors.background.light}20 1px, transparent 1px),
            linear-gradient(90deg, ${colors.background.light}20 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.3,
        }}
      />

      {/* Scene 1: Multilingual Chat */}
      <Sequence
        from={scene1Start}
        durationInFrames={SCENE_DURATION_FRAMES}
        premountFor={fps}
        layout="none"
      >
        <ChatScene
          opacity={scene1Opacity}
          mode={mode}
        />
      </Sequence>

      {/* Scene 2: Document Processing */}
      <Sequence
        from={scene2Start}
        durationInFrames={SCENE_DURATION_FRAMES}
        premountFor={fps}
        layout="none"
      >
        <DocumentScene
          opacity={scene2Opacity}
          mode={mode}
        />
      </Sequence>

      {/* Scene 3: Automation Workflow */}
      <Sequence
        from={scene3Start}
        durationInFrames={SCENE_DURATION_FRAMES}
        premountFor={fps}
        layout="none"
      >
        <AutomationScene
          opacity={scene3Opacity}
          mode={mode}
        />
      </Sequence>
    </AbsoluteFill>
  );
};

export default HeroDemo;
