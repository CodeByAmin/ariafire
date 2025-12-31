export async function GET() {
  const baseUrl = 'https://ariafire.ir'
  
  const urls = [
    { url: baseUrl, priority: '1.0' },
    { url: `${baseUrl}/product`, priority: '0.8' },
    { url: `${baseUrl}/monitoring`, priority: '0.8' },
    { url: `${baseUrl}/fire-suppression`, priority: '0.8' },
    { url: `${baseUrl}/contact`, priority: '0.8' },
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ url, priority }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${priority}</priority>
  </url>`).join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}