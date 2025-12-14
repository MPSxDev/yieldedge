'use client';

import { useEffect } from 'react';

export default function FaviconSwitcher() {
  useEffect(() => {
    const updateFavicon = () => {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Remove all existing favicon links
      const existingIcons = document.querySelectorAll("link[rel*='icon']");
      existingIcons.forEach(icon => icon.remove());
      
      // Create new favicon link
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      link.href = isDarkMode 
        ? '/brand/favicon-dark.png' 
        : '/brand/favicon-light.png';
      document.head.appendChild(link);
      
      // Also update shortcut icon (for older browsers)
      const shortcut = document.createElement('link');
      shortcut.rel = 'shortcut icon';
      shortcut.type = 'image/png';
      shortcut.href = isDarkMode 
        ? '/brand/favicon-dark.png' 
        : '/brand/favicon-light.png';
      document.head.appendChild(shortcut);
    };

    // Set initial favicon
    updateFavicon();

    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateFavicon);

    return () => {
      mediaQuery.removeEventListener('change', updateFavicon);
    };
  }, []);

  return null;
}

