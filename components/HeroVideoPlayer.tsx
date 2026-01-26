import React, { useEffect, useState } from 'react';
import { Player } from '@remotion/player';
import { HeroDemoDesktop, HeroDemoMobile } from '../remotion/compositions';
import {
  DESKTOP_CONFIG,
  MOBILE_CONFIG,
} from '../remotion/core/config/responsive';
import { VIDEO_CONFIG } from '../remotion/core/config/timing';

interface HeroVideoPlayerProps {
  className?: string;
}

/**
 * HeroVideoPlayer - Displays Remotion demo videos using the Player component
 *
 * Automatically selects desktop or mobile composition based on viewport.
 * Renders in real-time using Remotion Player - no pre-rendering needed!
 *
 * For production, you can pre-render videos using:
 *   npm run remotion:render:desktop
 *   npm run remotion:render:mobile
 */
const HeroVideoPlayer: React.FC<HeroVideoPlayerProps> = ({ className = '' }) => {
  // Always use mobile (portrait) composition for better visibility
  // Portrait format (9:16) uses more vertical space and is easier to read
  const composition = HeroDemoMobile;
  const config = MOBILE_CONFIG;

  return (
    <>
      {/* Styles to make Remotion Player fill container completely */}
      <style>{`
        .remotion-player-container {
          width: 100% !important;
          height: 100% !important;
        }
        .remotion-player-container > div {
          width: 100% !important;
          height: 100% !important;
        }
        .remotion-player-container canvas {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
      `}</style>

      <div
        className={`relative overflow-hidden rounded-2xl ${className}`}
        style={{
          width: '100%',
          height: '70vh',
          maxHeight: '900px',
        }}
      >

      {/* Remotion Player */}
      <Player
        component={composition}
        durationInFrames={VIDEO_CONFIG.totalFrames}
        fps={VIDEO_CONFIG.fps}
        compositionWidth={config.width}
        compositionHeight={config.height}
        style={{
          width: '100%',
          height: '100%',
        }}
        controls={false}
        loop
        autoPlay
        muted
        clickToPlay={false}
        className="remotion-player-container"
      />
      </div>
    </>
  );
};

export default HeroVideoPlayer;
