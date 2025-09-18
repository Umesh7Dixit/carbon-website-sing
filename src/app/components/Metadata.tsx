// components/Metadata.tsx
import Head from 'next/head';
import { siteConfig } from '../../../seo.config';

interface MetadataProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function Metadata({
  title,
  description = siteConfig.description,
  canonical,
  ogImage = siteConfig.ogImage,
  noIndex = false,
}: MetadataProps) {
  const pageTitle = title 
    ? title + ' | ' + siteConfig.name 
    : siteConfig.defaultTitle;
  
  const pageUrl = canonical || siteConfig.url;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={siteConfig.twitter.cardType} />
      <meta name="twitter:site" content={siteConfig.twitter.handle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* No index if specified */}
      {noIndex && (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </Head>
  );
}