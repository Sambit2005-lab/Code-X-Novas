import React, { useEffect } from 'react'
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
    title = 'Codexnovas — Next-Gen Tech Company',
    description = 'Codexnovas is a next-generation technology company building high-performance web applications, cross-platform mobile software, custom artificial intelligence solutions, and scalable enterprise systems.',
    url = 'https://codexnovas.in/',
    image = 'https://codexnovas.in/og-image.png',
    author = 'Codexnovas',
}) {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]);

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Codexnovas',
        legalName: 'Codexnovas',
        alternateName: ['Codexnovas'],
        description: 'Codexnovas is a next-generation technology company building high-performance web applications, cross-platform mobile software, custom artificial intelligence solutions, and scalable enterprise systems.',
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
