/**
 * ArticleSchema Component
 * Generates structured data (JSON-LD) for articles/blog posts to improve SEO
 *
 * @example
 * <ArticleSchema
 *   title="How to Improve Your Website SEO"
 *   description="Learn the best practices..."
 *   author="John Doe"
 *   datePublished="2024-01-15"
 *   dateModified="2024-02-16"
 *   image="/assets/article-image.jpg"
 * />
 */

interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url?: string;
}

export default function ArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: ArticleSchemaProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';
  const fullUrl = url || siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: fullImageUrl,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Yieldge',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/brand/logo-main.png`,
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
