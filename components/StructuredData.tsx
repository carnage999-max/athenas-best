'use client';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "ATHENA'S BEST®",
    url: 'https://athenasbest.com',
    logo: 'https://athenasbest.com/athena-logo.png',
    description: 'Carefully cooked dog food that preserves nutrients — without cutting corners or inflating prices.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'PO Box 52',
      addressLocality: 'Detroit',
      addressRegion: 'ME',
      postalCode: '04929',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-207-947-1999',
      email: 'info@athenasbest.com',
      contactType: 'Customer Service',
    },
    sameAs: [
      // Add social media links when available
      // 'https://facebook.com/athenasbest',
      // 'https://instagram.com/athenasbest',
      // 'https://twitter.com/athenasbest',
    ],
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: "ATHENA'S BEST® Premium Dog Food",
    description: 'High-protein dog food with omega fatty acids, carefully cooked to preserve nutrients without burning.',
    brand: {
      '@type': 'Brand',
      name: "ATHENA'S BEST®",
    },
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      url: 'https://athenasbest.com',
    },
    image: 'https://athenasbest.com/high-protein-omega.png',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "ATHENA'S BEST®",
    url: 'https://athenasbest.com',
    description: 'Premium dog food with real nutrition, not burnt. Carefully cooked to preserve nutrients.',
    publisher: {
      '@type': 'Organization',
      name: "ATHENA'S BEST®",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
