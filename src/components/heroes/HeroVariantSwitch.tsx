'use client';

import { HeroVariant, heroVariants, EnhancedHeroSlide } from '@/lib/content';
import { useHeroVariant } from '@/hooks/useHeroVariant';
import HeroFomo from './HeroFomo';
import HeroSocialProof from './HeroSocialProof';
import HeroProblemAgitation from './HeroProblemAgitation';
import HeroSpanish from './HeroSpanish';
import HeroDefault from './HeroDefault';

interface HeroVariantSwitchProps {
  defaultVariant?: HeroVariant;
  customSlide?: EnhancedHeroSlide;
}

export default function HeroVariantSwitch({
  defaultVariant = 'default',
  customSlide
}: HeroVariantSwitchProps) {
  const { variant, isLoading } = useHeroVariant(defaultVariant);

  // Use custom slide if provided, otherwise get from heroVariants
  const slide = customSlide || heroVariants[variant];

  // Show loading state briefly while checking URL params
  if (isLoading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-24">
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-4" />
          <div className="h-16 w-96 bg-gray-200 rounded mb-6" />
          <div className="h-4 w-72 bg-gray-200 rounded" />
        </div>
      </section>
    );
  }

  // Render the appropriate hero variant
  switch (variant) {
    case 'fomo':
      return <HeroFomo slide={slide} />;
    case 'social-proof':
      return <HeroSocialProof slide={slide} />;
    case 'problem-agitation':
      return <HeroProblemAgitation slide={slide} />;
    case 'spanish-latam':
      return <HeroSpanish slide={slide} />;
    default:
      return <HeroDefault slide={slide} />;
  }
}
