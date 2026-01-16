'use client';

import { useState, useEffect } from 'react';
import { HeroVariant } from '@/lib/content';

const VALID_VARIANTS: HeroVariant[] = ['default', 'fomo', 'spanish-latam', 'social-proof', 'problem-agitation'];

function isValidVariant(value: string): value is HeroVariant {
  return VALID_VARIANTS.includes(value as HeroVariant);
}

export function useHeroVariant(defaultVariant: HeroVariant = 'default') {
  const [variant, setVariant] = useState<HeroVariant>(defaultVariant);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check URL params for variant override
    const urlParams = new URLSearchParams(window.location.search);
    const urlVariant = urlParams.get('variant');

    if (urlVariant && isValidVariant(urlVariant)) {
      setVariant(urlVariant);
    }

    setIsLoading(false);
  }, []);

  return {
    variant,
    setVariant,
    isLoading,
    validVariants: VALID_VARIANTS,
  };
}
