import { useEffect } from "react";
import { SEO_CONFIG } from "../data/seoConfig";

export const useSEO = ({
  title = SEO_CONFIG.pages.home.title,
  description = SEO_CONFIG.pages.home.description,
  imageUrl = SEO_CONFIG.pages.home.ogImage,
  url = SEO_CONFIG.pages.home.canonical,
  type = "business.business",
  keywords = SEO_CONFIG.pages.home.keywords,
} = {}) => {
  useEffect(() => {
    // Actualizar title
    document.title = title;

    // Actualizar meta description
    updateMetaTag("description", description);

    // Keywords
    updateMetaTag("keywords", keywords);

    // Open Graph tags
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag("og:url", url, "property");
    updateMetaTag("og:image", imageUrl, "property");
    updateMetaTag("og:locale", SEO_CONFIG.locale, "property");
    updateMetaTag("og:site_name", SEO_CONFIG.siteName, "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", imageUrl);
    updateMetaTag("twitter:creator", SEO_CONFIG.twitterHandle);

    // Canonical URL
    updateCanonicalTag(url);

    // JSON-LD Schema
    updateJSONLD();

  }, [title, description, imageUrl, url, type, keywords]);
};

const updateMetaTag = (name, content, attribute = "name") => {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const updateCanonicalTag = (url) => {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
};

const updateJSONLD = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SEO_CONFIG.organization.name,
    image: SEO_CONFIG.organization.logo,
    description: SEO_CONFIG.pages.home.description,
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.organization.phone,
    email: SEO_CONFIG.organization.email,
    foundingDate: SEO_CONFIG.organization.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO_CONFIG.organization.address.streetAddress,
      addressLocality: SEO_CONFIG.organization.address.addressLocality,
      addressRegion: SEO_CONFIG.organization.address.addressRegion,
      postalCode: SEO_CONFIG.organization.address.postalCode,
      addressCountry: SEO_CONFIG.organization.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO_CONFIG.localBusiness.geo.latitude,
      longitude: SEO_CONFIG.localBusiness.geo.longitude,
    },
    sameAs: SEO_CONFIG.organization.sameAs,
    areaServed: SEO_CONFIG.localBusiness.serviceAreas,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  let script = document.querySelector('script[type="application/ld+json"]');

  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};
