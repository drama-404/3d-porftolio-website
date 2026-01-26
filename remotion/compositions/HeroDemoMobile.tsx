import React from 'react';
import { HeroDemo } from './HeroDemo';

/**
 * HeroDemoMobile - Mobile-optimized composition (9:16 portrait)
 * Wraps HeroDemo with mobile mode for smaller screens
 */
export const HeroDemoMobile: React.FC = () => {
  return <HeroDemo mode="mobile" />;
};

export default HeroDemoMobile;
