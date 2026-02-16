# SEO Quick Checklist - Yieldge

## Immediate Actions Required

### 1. Verification Codes
- [ ] Add Google Search Console verification code
  - Location: `src/app/[locale]/layout.tsx` line 107
  - Replace: `"google-site-verification": "your-google-verification-code"`
  - Get code from: [Google Search Console](https://search.google.com/search-console)

- [ ] Add Bing Webmaster Tools verification code
  - Location: `src/app/[locale]/layout.tsx` line 108
  - Replace: `"msvalidate.01": "your-bing-verification-code"`
  - Get code from: [Bing Webmaster Tools](https://www.bing.com/webmasters)

- [ ] Add Google Search Console verification for CR section
  - Location: `src/app/[locale]/cr/layout.tsx` line 50
  - Replace: `google: 'your-google-verification-code'`

### 2. Contact Information
- [ ] Add Costa Rica phone number
  - Location: `src/app/[locale]/cr/layout.tsx` line 66
  - Replace: `telephone: '+506-XXXX-XXXX'`
  - Format: +506-XXXX-XXXX (Costa Rica format)

### 3. Image Assets
- [ ] Verify featured image exists
  - Path: `/public/assets/featured.jpg`
  - Dimensions: 1200x630px
  - Size: < 200KB
  - Format: JPEG or PNG

- [ ] Verify favicons exist
  - Light mode: `/public/brand/favicon-light.png`
  - Dark mode: `/public/brand/favicon-dark.png`
  - Logo: `/public/brand/logo-main.png`

### 4. Social Media Verification
- [ ] Verify Twitter handle @yieldge exists
- [ ] Verify LinkedIn company page URL is correct
- [ ] Verify Facebook page exists (if applicable)
- [ ] Update social media links in schema

## Post-Deployment Tasks

### Within 24 Hours
- [ ] Submit sitemap to Google Search Console
  - URL: `https://yieldge.com/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test all pages with Google Rich Results Test
- [ ] Verify robots.txt is accessible
  - URL: `https://yieldge.com/robots.txt`

### Within 1 Week
- [ ] Monitor Google Search Console for crawl errors
- [ ] Check indexing status of key pages
- [ ] Verify structured data appears correctly
- [ ] Test social media cards (Twitter, Facebook, LinkedIn)
- [ ] Run PageSpeed Insights on all main pages
- [ ] Verify mobile-friendliness

### Ongoing Monitoring
- [ ] Weekly: Check Google Search Console for issues
- [ ] Monthly: Review organic traffic analytics
- [ ] Monthly: Update any outdated content
- [ ] Quarterly: Full SEO audit
- [ ] Annually: Refresh all meta descriptions

## Testing URLs

### Validation Tools
1. **Google Rich Results Test**
   ```
   https://search.google.com/test/rich-results
   ```
   Test pages:
   - [ ] Homepage (ES): `https://yieldge.com`
   - [ ] Homepage (EN): `https://yieldge.com/en`
   - [ ] CR Page: `https://yieldge.com/cr`
   - [ ] Solutions: `https://yieldge.com/solutions`
   - [ ] Company: `https://yieldge.com/company`

2. **Schema Validator**
   ```
   https://validator.schema.org/
   ```
   Test all pages with structured data

3. **Social Media Debuggers**
   - Facebook: `https://developers.facebook.com/tools/debug/`
   - Twitter: `https://cards-dev.twitter.com/validator`
   - LinkedIn: `https://www.linkedin.com/post-inspector/`

4. **Mobile-Friendly Test**
   ```
   https://search.google.com/test/mobile-friendly
   ```

5. **PageSpeed Insights**
   ```
   https://pagespeed.web.dev/
   ```
   Target scores:
   - [ ] Mobile: > 90
   - [ ] Desktop: > 95

## Key Pages to Monitor

### High Priority (Check Weekly)
- [ ] `/` (Homepage ES)
- [ ] `/en` (Homepage EN)
- [ ] `/cr` (Costa Rica landing)
- [ ] `/solutions`
- [ ] `/company`

### Medium Priority (Check Monthly)
- [ ] `/cr/solutions`
- [ ] `/cr/company`
- [ ] `/careers`
- [ ] `/get-in-touch`

### Industry Verticals (Check Quarterly)
- [ ] `/real-estate`
- [ ] `/beauty`
- [ ] `/construction`
- [ ] `/professional-services`
- [ ] `/viberescue`

## Performance Targets

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

### Lighthouse Scores
- [ ] Performance: > 90
- [ ] Accessibility: > 95
- [ ] Best Practices: > 95
- [ ] SEO: 100

## Common Issues to Watch For

### Technical
- [ ] 404 errors in Search Console
- [ ] Broken internal links
- [ ] Missing alt text on images
- [ ] Duplicate title tags
- [ ] Duplicate meta descriptions
- [ ] Slow page load times
- [ ] Mobile usability issues

### Content
- [ ] Thin content (< 300 words)
- [ ] Missing H1 tags
- [ ] Multiple H1 tags per page
- [ ] Broken heading hierarchy
- [ ] Missing meta descriptions
- [ ] Title tags too long (> 60 chars)
- [ ] Meta descriptions too long (> 160 chars)

### Structured Data
- [ ] Invalid JSON-LD syntax
- [ ] Missing required properties
- [ ] Incorrect schema types
- [ ] Broken image URLs in schema

## Quick Wins

### Easy Improvements
1. Add more internal links between related pages
2. Optimize image alt texts with descriptive keywords
3. Ensure all pages have unique meta descriptions
4. Add more long-tail keywords to content
5. Create FAQ sections for common questions
6. Add breadcrumb navigation to all pages
7. Optimize URL structure (short, descriptive)
8. Ensure fast server response time (< 200ms)

### Content Enhancements
1. Add case studies with detailed success metrics
2. Create location-specific landing pages
3. Add customer testimonials with schema markup
4. Create comparison pages (vs competitors)
5. Add pricing information where applicable
6. Create industry-specific resource pages
7. Add video content (optimized for SEO)

## Notes
- All improvements have been implemented in the codebase
- Dynamic metadata generation based on locale
- Comprehensive structured data for rich snippets
- Mobile-first responsive design
- Optimized for Core Web Vitals
- Proper canonical URLs and hreflang tags
- Full sitemap with all routes
- SEO-friendly URL structure

## Support Resources
- See `SEO_IMPLEMENTATION.md` for detailed documentation
- SEO components in `src/components/seo/`
- Schema examples in layout files
- Sitemap configuration in `src/app/sitemap.ts`
- Robots configuration in `src/app/robots.ts`
