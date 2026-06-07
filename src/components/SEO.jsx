import React from 'react'
import { Helmet } from 'react-helmet'

/**
 * SEO component wraps react-helmet and provides common meta tags.
 * Props:
 * - title (string)
 * - description (string)
 * - url (string)
 * - image (string)
 * - author (string)
 */
export default function SEO({
    title = 'Code X Novas — Digital Product Studio',
    description = 'Code X Novas builds beautiful, performant websites and digital experiences that convert. We specialize in web apps, design systems and brand-aware engineering.',
    url = 'https://codexnovas.in/',
    image = 'https://codexnovas.in/og-image.png',
    author = 'Code X Novas',
}) {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Code X Novas',
        url,
        logo: image,
    }

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Misc */}
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow" />

            {/* Structured data */}
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
    )
}
