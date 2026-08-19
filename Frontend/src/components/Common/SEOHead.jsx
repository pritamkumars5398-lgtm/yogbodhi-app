import React, { useEffect } from 'react';

const SEOHead = ({ title, description, canonicalUrl, ogImage }) => {
  const defaultTitle = "Yogbodhi Global Institute | Learning for Life. Leadership for the Future.";
  const defaultDescription = "Official web platform of Yogbodhi Global Institute featuring CEP, ALS, and CLS principal learning systems, six schools, research, publications, and institutional programs.";

  useEffect(() => {
    // Update Page Title
    const pageTitle = title ? `${title} | Yogbodhi Global Institute` : defaultTitle;
    document.title = pageTitle;

    // Helper function to update or create meta tag
    const updateMetaTag = (selector, attribute, attributeValue, contentValue) => {
      let element = document.querySelector(`meta[${selector}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue || defaultDescription);
    };

    // Meta Description
    updateMetaTag('name', 'name', 'description', description || defaultDescription);

    // OpenGraph Tags
    updateMetaTag('property', 'property', 'og:title', pageTitle);
    updateMetaTag('property', 'property', 'og:description', description || defaultDescription);
    updateMetaTag('property', 'property', 'og:type', 'website');
    updateMetaTag('property', 'property', 'og:url', canonicalUrl || window.location.href);
    if (ogImage) {
      updateMetaTag('property', 'property', 'og:image', ogImage);
    }

    // Twitter Card Tags
    updateMetaTag('name', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'name', 'twitter:title', pageTitle);
    updateMetaTag('name', 'name', 'twitter:description', description || defaultDescription);

    // Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl || window.location.href);

  }, [title, description, canonicalUrl, ogImage]);

  return null;
};

export default SEOHead;
