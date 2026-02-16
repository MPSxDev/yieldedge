# Quick Start - SEO Setup for Yieldge

## 5-Minute Setup Guide

### Step 1: Add Verification Codes (2 minutes)

#### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://yieldge.com`
3. Choose "HTML tag" method
4. Copy the verification code (the part between `content="..."`)
5. Open `src/app/[locale]/layout.tsx`
6. Line 107: Replace `"your-google-verification-code"` with your code
7. Also update `src/app/[locale]/cr/layout.tsx` line 50

#### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site: `https://yieldge.com`
3. Choose "HTML tag" method
4. Copy the verification code
5. Open `src/app/[locale]/layout.tsx`
6. Line 108: Replace `"your-bing-verification-code"` with your code

### Step 2: Add Contact Information (1 minute)

1. Open `src/app/[locale]/cr/layout.tsx`
2. Line 66: Replace `'+506-XXXX-XXXX'` with your Costa Rica phone number
3. Format example: `'+506-2222-3333'`

### Step 3: Deploy and Submit (2 minutes)

1. Build and deploy your site
   ```bash
   npm run build
   npm run start
   ```

2. After deployment, submit sitemap to Google:
   - Go to Google Search Console
   - Navigate to "Sitemaps"
   - Add: `https://yieldge.com/sitemap.xml`
   - Click "Submit"

3. Submit to Bing:
   - Go to Bing Webmaster Tools
   - Navigate to "Sitemaps"
   - Add: `https://yieldge.com/sitemap.xml`
   - Click "Submit"

## Testing (5 minutes)

### Test Your SEO Implementation

1. **Rich Results Test**
   - Go to: https://search.google.com/test/rich-results
   - Enter: `https://yieldge.com`
   - Check for errors
   - Repeat for: `/cr`, `/solutions`, `/company`

2. **Social Media Cards**
   - **Twitter**: https://cards-dev.twitter.com/validator
   - **Facebook**: https://developers.facebook.com/tools/debug/
   - **LinkedIn**: https://www.linkedin.com/post-inspector/
   - Enter your URLs and verify previews look good

3. **Mobile-Friendly**
   - Go to: https://search.google.com/test/mobile-friendly
   - Test homepage and key pages

4. **PageSpeed Insights**
   - Go to: https://pagespeed.web.dev/
   - Test homepage
   - Target: Mobile > 90, Desktop > 95

## What You Get

### Immediate Benefits
✓ Search engines can crawl your site properly
✓ Your pages appear in Google/Bing search results
✓ Rich snippets in search (ratings, breadcrumbs, etc.)
✓ Beautiful social media previews when shared
✓ Local SEO optimized for Costa Rica market
✓ Proper multilingual support (ES/EN)

### Within 1-2 Weeks
✓ Pages indexed by Google/Bing
✓ Sitemap processed
✓ Rich results appearing
✓ Better mobile rankings
✓ Improved Core Web Vitals scores

### Within 1-3 Months
✓ Increased organic traffic
✓ Better keyword rankings
✓ Higher click-through rates
✓ Featured snippets opportunities
✓ Authority building

## Files Modified

### Main Changes
```
src/app/[locale]/layout.tsx           (Enhanced metadata & schema)
src/app/[locale]/cr/layout.tsx        (Local SEO for Costa Rica)
src/app/[locale]/solutions/page.tsx   (Page metadata)
src/app/[locale]/company/page.tsx     (Page metadata)
src/app/sitemap.ts                    (Comprehensive sitemap)
next.config.ts                        (SEO headers)
```

### New Files
```
src/app/robots.ts                     (Dynamic robots.txt)
src/components/seo/FAQSchema.tsx      (FAQ rich snippets)
src/components/seo/ArticleSchema.tsx  (Article schema)
src/components/seo/BreadcrumbSchema.tsx (Breadcrumbs)
public/manifest.json                  (PWA manifest)
```

## Using the SEO Components

### Add FAQ Rich Snippets

```tsx
import { FAQSchema } from '@/components/seo';

const faqs = [
  {
    question: "¿Cuánto cuesta un sitio web?",
    answer: "Nuestros sitios web profesionales inician desde ₡350,000 e incluyen diseño responsive, SEO básico y hosting por 1 año."
  },
  {
    question: "¿Cuánto tarda el desarrollo?",
    answer: "Un sitio web básico toma 2-3 semanas, mientras proyectos más complejos pueden tomar 4-8 semanas."
  }
];

export default function MyPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      {/* Your page content */}
    </>
  );
}
```

### Add Article Schema (for blog posts)

```tsx
import { ArticleSchema } from '@/components/seo';

export default function BlogPost() {
  return (
    <>
      <ArticleSchema
        title="10 Tips to Improve Your Website SEO"
        description="Learn the essential SEO strategies..."
        author="Yieldge Team"
        datePublished="2026-02-16"
        image="/assets/blog/seo-tips.jpg"
      />
      {/* Your article content */}
    </>
  );
}
```

### Add Breadcrumbs

```tsx
import { BreadcrumbSchema } from '@/components/seo';

export default function ProductPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Soluciones', url: '/solutions' },
          { name: 'Desarrollo Web', url: '/solutions/web-development' }
        ]}
      />
      {/* Your page content */}
    </>
  );
}
```

## Common Questions

### Q: How long until I see results?
**A:** Indexing starts in 1-2 weeks, meaningful traffic growth in 1-3 months.

### Q: Do I need to do anything else?
**A:** Just complete the 5-minute setup above. Everything else is automated.

### Q: What about alt text for images?
**A:** Add descriptive alt text to all images using the Next.js Image component:
```tsx
<Image
  src="/my-image.jpg"
  alt="Descriptive text about the image"
  width={800}
  height={600}
/>
```

### Q: How do I check if it's working?
**A:** Use the testing tools above. Google Search Console is your main dashboard.

### Q: What if I find errors?
**A:** Check `SEO_IMPLEMENTATION.md` for detailed troubleshooting.

## Monitoring Dashboard

### Google Search Console (Primary)
- Weekly: Check for crawl errors
- Monitor indexing status
- Review search performance
- Check mobile usability

### Bing Webmaster Tools (Secondary)
- Monthly check for issues
- Review indexing status

### Analytics
- Track organic traffic growth
- Monitor keyword rankings
- Analyze user behavior
- Measure conversions

## Quick Reference

### Priority Scores (Sitemap)
- 1.0 = Homepage, CR landing
- 0.9 = Solutions, Contact
- 0.8 = Company, Careers
- 0.7 = Industry pages
- 0.5-0.6 = Sub-pages
- 0.3 = Legal pages

### Meta Tag Limits
- Title: 50-60 characters
- Description: 150-160 characters
- Keywords: 10-15 keywords max

### Image Specs
- OG Image: 1200x630px
- Twitter Card: 1200x628px
- Favicon: 180x180px
- Logo: Scalable SVG or 512x512px PNG

## Getting Help

1. **Detailed Docs**: Read `SEO_IMPLEMENTATION.md`
2. **Checklist**: Follow `SEO_CHECKLIST.md`
3. **Components**: Check `src/components/seo/`
4. **Google Support**: https://support.google.com/webmasters
5. **Next.js SEO**: https://nextjs.org/learn/seo

## Success Metrics

### Week 1
- [ ] All pages indexed
- [ ] Sitemap processed
- [ ] No crawl errors
- [ ] Rich results appearing

### Month 1
- [ ] 10+ keywords ranking
- [ ] Organic traffic increasing
- [ ] Mobile score > 90
- [ ] SEO score = 100

### Month 3
- [ ] 50+ keywords ranking
- [ ] Top 10 for primary keywords
- [ ] Featured snippets achieved
- [ ] Organic traffic 2x

## That's It!

Your SEO is now fully optimized. Just complete the 5-minute setup above and let the search engines do their magic.

Need help? Check the other documentation files or Google Search Console.

---

**Last Updated**: February 16, 2026
**Next Review**: March 16, 2026 (1 month)
