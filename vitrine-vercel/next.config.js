/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      // Redirection vers plateforme complète
      {
        source: '/dashboard',
        destination: 'https://app.cedbank.org/dashboard',
        permanent: true
      },
      {
        source: '/banking',
        destination: 'https://app.cedbank.org/banking',
        permanent: true
      },
      {
        source: '/ai',
        destination: 'https://app.cedbank.org/super-iarp-pro',
        permanent: true
      },
      {
        source: '/academy',
        destination: 'https://app.cedbank.org/institut-academy',
        permanent: true
      },
      {
        source: '/insurance',
        destination: 'https://app.cedbank.org/al-aman-takaful',
        permanent: true
      },
      {
        source: '/marketplace',
        destination: 'https://app.cedbank.org/techforall',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig