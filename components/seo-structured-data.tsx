export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TAPPS - The Water App",
    "description": "South Africa's leading water management app. Get real-time dam levels, weather forecasts, and water restrictions.",
    "url": "https://tapps-landing-page.vercel.app",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "ZAR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "author": {
      "@type": "Organization",
      "name": "TAPPS Team",
      "url": "https://tapps-landing-page.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TAPPS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapps%20Final%20Logo-01-b3jF1KmO0SvEQO4T6h52eqyfUhrM0e.png",
        "width": 512,
        "height": 512
      }
    },
    "featureList": [
      "Real-time dam level monitoring",
      "Weather forecasts",
      "Metro water restrictions",
      "Water conservation insights",
      "Proactive alerts",
      "South Africa coverage"
    ],
    "screenshot": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapps%20Final%20Logo-01-b3jF1KmO0SvEQO4T6h52eqyfUhrM0e.png",
    "softwareVersion": "1.0.0",
    "datePublished": "2024-01-01",
    "dateModified": "2024-03-19",
    "inLanguage": "en-ZA",
    "isAccessibleForFree": true,
    "downloadUrl": [
      "https://play.google.com/store/apps/details?id=com.tapps.water",
      "https://appgallery.huawei.com/app/C123456"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
