/**
 * Navigation href utilities for route-aware section links and careers routing.
 * Centralizes all link-building logic for the Navbar component.
 */

/**
 * Vertical landing page root paths.
 * These are the industry-specific landing pages that have their own careers pages.
 */
export const VERTICAL_ROOTS = [
  '/cr',
] as const;

export type VerticalRoot = (typeof VERTICAL_ROOTS)[number];

/**
 * Section IDs used across landing pages.
 * Maps to the id attributes on section components.
 */
export const SECTION_IDS = {
  services: 'servicios',
  whyChooseUs: 'porque-elegirnos',
  process: 'how-it-works',
  caseStudies: 'case-studies',
  faq: 'faq',
} as const;

export type SectionKey = keyof typeof SECTION_IDS;

/**
 * Determines if a pathname belongs to a vertical landing page tree.
 * Returns the vertical root if found, null otherwise.
 *
 * @param pathname - The current URL pathname
 * @returns The matching vertical root or null
 *
 * @example
 * getVerticalRoot('/construction') // '/construction'
 * getVerticalRoot('/construction/careers') // '/construction'
 * getVerticalRoot('/company') // null
 */
export function getVerticalRoot(pathname: string): VerticalRoot | null {
  for (const root of VERTICAL_ROOTS) {
    if (pathname === root || pathname.startsWith(`${root}/`)) {
      return root;
    }
  }
  return null;
}

/**
 * Generates the correct href for a section link based on current pathname.
 *
 * Rules:
 * - If on the vertical landing page root → returns `#sectionId` (same-page anchor)
 * - If on a subpage under a vertical → returns `${verticalRoot}#sectionId`
 * - If outside any vertical → returns `/#sectionId` (homepage anchor)
 *
 * @param pathname - The current URL pathname
 * @param sectionId - The section ID to link to (e.g., 'servicios', 'faq')
 * @returns The computed href string
 *
 * @example
 * sectionHref('/construction', 'servicios') // '#servicios'
 * sectionHref('/construction/careers', 'servicios') // '/construction#servicios'
 * sectionHref('/company', 'servicios') // '/#servicios'
 */
export function sectionHref(pathname: string, sectionId: string): string {
  const verticalRoot = getVerticalRoot(pathname);

  if (!verticalRoot) {
    // Outside any vertical tree - link to homepage section
    return `/#${sectionId}`;
  }

  if (pathname === verticalRoot) {
    // On the vertical landing page - same-page anchor
    return `#${sectionId}`;
  }

  // On a subpage under the vertical - navigate to landing page with anchor
  return `${verticalRoot}#${sectionId}`;
}

/**
 * Generates the correct href for the Careers link based on current pathname.
 *
 * Rules:
 * - If inside a vertical tree (root or subpage) → returns `${verticalRoot}/careers`
 * - If outside any vertical → returns `/careers` (global careers page)
 *
 * @param pathname - The current URL pathname
 * @returns The computed careers href string
 *
 * @example
 * careersHref('/construction') // '/construction/careers'
 * careersHref('/construction/careers') // '/construction/careers'
 * careersHref('/company') // '/careers'
 * careersHref('/') // '/careers'
 */
export function careersHref(pathname: string): string {
  const verticalRoot = getVerticalRoot(pathname);

  if (verticalRoot) {
    return `${verticalRoot}/careers`;
  }

  return '/careers';
}

/**
 * Checks if the current page is already the careers page for the given pathname context.
 * Useful for determining if the Careers link should be highlighted as active.
 *
 * @param pathname - The current URL pathname
 * @returns True if on a careers page, false otherwise
 */
export function isOnCareersPage(pathname: string): boolean {
  return pathname === '/careers' || pathname.endsWith('/careers');
}

/**
 * Generates the correct href for the Solutions link based on current pathname.
 *
 * Rules:
 * - If inside a vertical tree (root or subpage) → returns `${verticalRoot}/solutions`
 * - If outside any vertical → returns `/solutions` (global solutions page)
 *
 * @param pathname - The current URL pathname
 * @returns The computed solutions href string
 *
 * @example
 * solutionsHref('/construction') // '/construction/solutions'
 * solutionsHref('/construction/careers') // '/construction/solutions'
 * solutionsHref('/company') // '/solutions'
 * solutionsHref('/') // '/solutions'
 */
export function solutionsHref(pathname: string): string {
  const verticalRoot = getVerticalRoot(pathname);

  if (verticalRoot) {
    return `${verticalRoot}/solutions`;
  }

  return '/solutions';
}

/**
 * Generates the correct href for the Company link based on current pathname.
 *
 * Rules:
 * - If inside a vertical tree (root or subpage) → returns `${verticalRoot}/company`
 * - If outside any vertical → returns `/company` (global company page)
 *
 * @param pathname - The current URL pathname
 * @returns The computed company href string
 *
 * @example
 * companyHref('/construction') // '/construction/company'
 * companyHref('/construction/careers') // '/construction/company'
 * companyHref('/company') // '/company'
 * companyHref('/') // '/company'
 */
export function companyHref(pathname: string): string {
  const verticalRoot = getVerticalRoot(pathname);

  if (verticalRoot) {
    return `${verticalRoot}/company`;
  }

  return '/company';
}

/**
 * Generates the correct href for the Logo based on current pathname.
 *
 * Rules:
 * - If inside a vertical tree (root or subpage) → returns the vertical root
 * - If outside any vertical → returns `/` (homepage)
 *
 * @param pathname - The current URL pathname
 * @returns The computed logo href string
 *
 * @example
 * logoHref('/construction') // '/construction'
 * logoHref('/construction/careers') // '/construction'
 * logoHref('/beauty/solutions') // '/beauty'
 * logoHref('/company') // '/'
 * logoHref('/') // '/'
 */
export function logoHref(pathname: string): string {
  const verticalRoot = getVerticalRoot(pathname);

  if (verticalRoot) {
    return verticalRoot;
  }

  return '/';
}
