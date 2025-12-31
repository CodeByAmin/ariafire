export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ariafire",
    "url": "https://ariafire.ir",
    "logo": "https://ariafire.ir/logo.png",
    "description": "تخصصی‌ترین سیستم‌های اعلام و اطفاء حریق",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IR",
      "addressLocality": "Tehran"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+98-21-XXXXXXX",
      "contactType": "customer service"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}