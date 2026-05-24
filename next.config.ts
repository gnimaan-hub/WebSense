/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Pour les SVG, sinon on peut laisser par défaut
  },
}

module.exports = nextConfig