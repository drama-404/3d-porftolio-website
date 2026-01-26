import React from 'react';
import { Composition } from 'remotion';
import { HeroDemoDesktop, HeroDemoMobile } from './compositions';
import {
  DESKTOP_CONFIG,
  MOBILE_CONFIG,
} from './core/config/responsive';
import { TOTAL_DURATION_FRAMES, FPS } from './core/config/timing';

/**
 * Remotion Root - Registers all video compositions
 *
 * This file defines the available video outputs:
 * - HeroDemoDesktop: 16:9 landscape for desktop displays
 * - HeroDemoMobile: 9:16 portrait for mobile devices
 *
 * Both compositions share the same content but adapt layout
 * based on the target device form factor.
 */
export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Desktop composition - 1920x1080 (16:9) */}
      <Composition
        id="HeroDemoDesktop"
        component={HeroDemoDesktop}
        durationInFrames={TOTAL_DURATION_FRAMES}
        fps={FPS}
        width={DESKTOP_CONFIG.width}
        height={DESKTOP_CONFIG.height}
        defaultProps={{}}
      />

      {/* Mobile composition - 1080x1920 (9:16) */}
      <Composition
        id="HeroDemoMobile"
        component={HeroDemoMobile}
        durationInFrames={TOTAL_DURATION_FRAMES}
        fps={FPS}
        width={MOBILE_CONFIG.width}
        height={MOBILE_CONFIG.height}
        defaultProps={{}}
      />
    </>
  );
};

export default RemotionRoot;
