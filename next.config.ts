/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Pour les SVG, sinon on peut laisser par défaut
  },

  // Démo web Amiin (build Flutter statique dans public/demo-amiin/).
  // Accessible uniquement par lien direct : aucun lien depuis le site.
  async rewrites() {
    return [
      { source: '/demo-amiin', destination: '/demo-amiin/index.html' },
      { source: '/demo-amiin/', destination: '/demo-amiin/index.html' },
    ]
  },
  async headers() {
    return [
      {
        source: '/demo-amiin/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
}

module.exports = nextConfig
