// components/StructuredData.tsx
import { siteConfig } from '../../../seo.config';

export function WebsiteStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.organization.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.organization.logo}`,
    sameAs: siteConfig.organization.sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Add more structured data components as needed (e.g., for articles, products)