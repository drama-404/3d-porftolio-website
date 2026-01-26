import React from 'react';
import { HeroDemo } from './HeroDemo';

/**
 * HeroDemoDesktop - Desktop-optimized composition (16:9 landscape)
 * Wraps HeroDemo with desktop mode for larger screens
 */
export const HeroDemoDesktop: React.FC = () => {
  return <HeroDemo mode="desktop" />;
};

export default HeroDemoDesktop;
