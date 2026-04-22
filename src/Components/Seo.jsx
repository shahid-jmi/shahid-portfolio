import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../app/site';

const absoluteUrl = (maybeBase, path) => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  if (!maybeBase) return path; // still useful locally
  return `${maybeBase.replace(/\/+$/, '')}/${String(path).replace(/^\/+/, '')}`;
};

export const Seo = ({ title, description, path = '/', imagePath }) => {
  const metaTitle = title ? `${title} — ${SITE.name}` : SITE.title;
  const metaDescription = description || SITE.description;

  const canonical = SITE.url ? absoluteUrl(SITE.url, path) : '';
  const ogImage = absoluteUrl(SITE.url, imagePath || SITE.ogImagePath);

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {SITE.twitterHandle && <meta name="twitter:site" content={SITE.twitterHandle} />}
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

