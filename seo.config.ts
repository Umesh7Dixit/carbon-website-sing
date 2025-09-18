// const SEO = {
//   title: "RePut - Supply Chain Sustainability Platform",
//   description:
//     "RePut is a unified platform offering Digital Product Passports, ERP integrations, and supply chain visibility for fashion and textile industries.",
//   canonical: "https://reput.ai",
//   openGraph: {
//     type: "website",
//     url: "https://reput.ai",
//     title: "RePut - Supply Chain Sustainability Platform",
//     description:
//       "Track, verify, and sustain your entire supply chain with RePut's innovative tools and blockchain-backed product passports.",
//     images: [
//       {
//         url: "https://reput.ai/og-image.jpg", // update to your social preview image
//         width: 1200,
//         height: 630,
//         alt: "RePut Dashboard",
//       },
//     ],
//     site_name: "RePut",
//   },
//   twitter: {
//     handle: "@reputai", // if available
//     site: "@reputai",
//     cardType: "summary_large_image",
//   },
// };

// export default SEO;







export const siteConfig = {
  // Basic site information
  name: "RePut", // Your site name
  description: "RePut - Technology and regulation platform for businesses", // Update with your site's purpose
  url: "https://reput.com", // Your domain (replace with actual domain)
  ogImage: "/og-image.jpg", // Open Graph image path

  // Default metadata
  defaultTitle: "RePut - Technology & Regulation Platform",
  titleTemplate: "%s | RePut",
  
  // Organization information (for Schema.org)
  organization: {
    name: "RePut",
    logo: "/logo.png", // Path to your logo
    sameAs: [
      "https://twitter.com/reput", // Replace with actual links
      "https://linkedin.com/company/reput",
      // Other social links
    ]
  },
  
  // Optional: Advanced settings
  twitter: {
    handle: "@reput", // Twitter handle
    cardType: "summary_large_image" // Twitter card type
  }
};

export type SiteConfig = typeof siteConfig;