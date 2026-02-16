# SEO Implementation Guide - Yieldge

## Overview
This document outlines the comprehensive SEO improvements implemented across the Yieldge Next.js website.

## Key Improvements

### 1. Meta Tags Enhancement

#### Main Layout (`src/app/[locale]/layout.tsx`)
- **Title Tags**: Dynamic titles with templates for all pages
- **Meta Descriptions**: Localized, compelling descriptions (150-160 characters)
- **Keywords**: Relevant, targeted keywords for each locale
- **Canonical URLs**: Proper canonical tags to avoid duplicate content
- **Language Alternates**: hreflang tags for ES/EN versions

#### Page-Specific Metadata
All major pages now have optimized metadata:
- `/solutions` - Technology solutions page
- `/company` - About us page
- `/cr/*` - Costa Rica specific pages (local SEO optimized)

### 2. Open Graph & Social Media

#### Open Graph Tags
- `og:title` - Optimized for social sharing
- `og:description` - Engaging descriptions
- `og:image` - 1200x630px featured images
- `og:type` - Set to "website"
- `og:locale` - Proper locale codes (es_ES, en_US, es_CR)
- `og:url` - Canonical URLs
- `og:site_name` - Consistent branding

#### Twitter Cards
- `twitter:card` - summary_large_image for better engagement
- `twitter:title` - Optimized titles
- `twitter:description` - Compelling descriptions
- `twitter:image` - High-quality images
- `twitter:creator` - @yieldge handle

### 3. Structured Data (JSON-LD)

#### Main Layout Schemas
- **Organization Schema**: Company information, contact details, social profiles
- **Website Schema**: Site-wide information with search action
- **Service Schema**: Complete catalog of services offered

#### CR Layout Schemas (Local SEO)
- **ProfessionalService Schema**: Costa Rica specific business information
  - Business name and description
  - Address and geo-coordinates for San José, Costa Rica
  - Phone and email contact
  - Service area (Costa Rica)
  - Aggregate ratings
  - Social media profiles
- **Service Schema**: CR-specific services catalog
- **Breadcrumb Schema**: Navigation hierarchy

#### Reusable Schema Components
Created in `src/components/seo/`:
- **FAQSchema**: For FAQ sections to appear in rich snippets
- **ArticleSchema**: For blog posts and articles
- **BreadcrumbSchema**: For navigation breadcrumbs

### 4. Sitemap Enhancement

**File**: `src/app/sitemap.ts`

Comprehensive sitemap including:
- Main pages (ES & EN versions)
- Costa Rica specific pages (high priority for local SEO)
- All vertical industry pages (real-estate, beauty, construction, etc.)
- Legal pages (privacy policy, terms)
- Proper priorities (1.0 for homepage, decreasing for sub-pages)
- Change frequencies (weekly, monthly, yearly)
- Language alternates for bilingual content

### 5. Robots.txt Configuration

**File**: `src/app/robots.ts`

Dynamic robots.txt with:
- Allow all crawlers with specific rules
- Disallow API routes, Next.js internals, admin areas
- Sitemap reference
- Host specification
- Crawler-specific rules (Googlebot, Bingbot)

### 6. Technical SEO

#### Icons & Favicons
- Light and dark mode favicons
- Apple touch icons
- Proper MIME types
- Multiple sizes for different devices

#### PWA Manifest
- `public/manifest.json` for Progressive Web App support
- Improves mobile SEO and user experience
- Proper categorization

#### Performance
- Image optimization settings in `next.config.ts`
- AVIF and WebP formats enabled
- Proper caching headers
- Compression enabled

### 7. Local SEO (Costa Rica)

Special optimizations for `/cr` routes:
- **Locale**: Set to `es_CR` (Costa Rica Spanish)
- **Geo-targeting**: Coordinates for San José
- **Local Keywords**: "diseño web Costa Rica", "PYMEs Costa Rica", etc.
- **Price Range**: Local currency (₡) in descriptions
- **Area Served**: Explicitly set to Costa Rica
- **Contact Info**: Costa Rica phone format

### 8. Multilingual SEO

- **Language Tags**: Proper hreflang implementation
- **Alternate URLs**: ES (default) and EN versions
- **x-default**: Spanish set as default
- **Canonical URLs**: Language-specific canonicals
- **Localized Content**: Metadata pulled from locale files

## Implementation Checklist

### Required Actions

1. **Add Google Search Console Verification**
   - File: `src/app/[locale]/layout.tsx`
   - Replace: `"google-site-verification": "your-google-verification-code"`

2. **Add Bing Webmaster Tools Verification**
   - File: `src/app/[locale]/layout.tsx`
   - Replace: `"msvalidate.01": "your-bing-verification-code"`

3. **Add Costa Rica Phone Number**
   - File: `src/app/[locale]/cr/layout.tsx`
   - Replace: `telephone: '+506-XXXX-XXXX'`

4. **Update Social Media Links**
   - Verify Facebook profile URL exists
   - Confirm Twitter handle @yieldge
   - Verify LinkedIn company page

5. **Verify Featured Images**
   - Ensure `/assets/featured.jpg` exists
   - Image should be 1200x630px
   - Optimize image size (< 200KB)

6. **Update Favicon Paths**
   - Verify `/brand/favicon-light.png` exists
   - Verify `/brand/favicon-dark.png` exists
   - Verify `/brand/logo-main.png` exists

## Usage Examples

### Adding FAQ Schema to a Page

```tsx
import { FAQSchema } from '@/components/seo';

const faqs = [
  {
    question: "¿Cuánto cuesta un sitio web?",
    answer: "Nuestros sitios web profesionales inician desde ₡350,000..."
  },
  // ... more FAQs
];

// In your component
<FAQSchema faqs={faqs} />
```

### Adding Article Schema to a Blog Post

```tsx
import { ArticleSchema } from '@/components/seo';

<ArticleSchema
  title="How to Improve Your Website SEO"
  description="Complete guide to SEO best practices..."
  author="Yieldge Team"
  datePublished="2024-01-15"
  dateModified="2024-02-16"
  image="/assets/blog/seo-guide.jpg"
  url="/blog/improve-website-seo"
/>
```

### Adding Breadcrumbs

```tsx
import { BreadcrumbSchema } from '@/components/seo';

<BreadcrumbSchema
  items={[
    { name: 'Inicio', url: '/' },
    { name: 'Soluciones', url: '/solutions' },
    { name: 'Desarrollo Web', url: '/solutions/web-development' }
  ]}
/>
```

## Testing & Validation

### Tools to Use

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test structured data implementation

2. **Google Search Console**
   - Monitor indexing status
   - Check for crawl errors
   - Submit sitemap

3. **Schema Markup Validator**
   - URL: https://validator.schema.org/
   - Validate JSON-LD markup

4. **PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Test Core Web Vitals

5. **Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly
   - Ensure mobile optimization

6. **Social Media Debuggers**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

## Monitoring & Maintenance

### Monthly Tasks
- Review Google Search Console for errors
- Check sitemap submission status
- Monitor keyword rankings
- Analyze organic traffic trends

### Quarterly Tasks
- Update meta descriptions for better CTR
- Refresh structured data with new services
- Review and update keywords
- Check for broken links

### Annual Tasks
- Comprehensive SEO audit
- Update copyright dates
- Refresh social media images
- Review and update all metadata

## Best Practices Applied

1. **Title Tags**
   - 50-60 characters
   - Include primary keyword
   - Brand name at the end
   - Unique for each page

2. **Meta Descriptions**
   - 150-160 characters
   - Include call-to-action
   - Natural keyword inclusion
   - Compelling and unique

3. **Heading Hierarchy**
   - One H1 per page
   - Logical H2, H3 structure
   - Include keywords naturally

4. **Image Optimization**
   - Descriptive alt text
   - Proper file names
   - Optimized file sizes
   - Responsive images

5. **Internal Linking**
   - Descriptive anchor text
   - Logical site structure
   - Breadcrumb navigation

6. **Mobile Optimization**
   - Responsive design
   - Fast load times
   - Touch-friendly elements
   - Proper viewport settings

## Performance Metrics

### Target Goals
- **Core Web Vitals**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

- **Page Speed**
  - Mobile: > 90
  - Desktop: > 95

- **SEO Score**
  - Lighthouse SEO: 100

## Resources

- [Next.js SEO Documentation](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Guide](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

## Support

For SEO-related questions or issues, refer to:
- Google Search Console reports
- Next.js documentation
- Schema.org validator
- Internal SEO component documentation in `src/components/seo/`
