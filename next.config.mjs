/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    assetPrefix: '/',
    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/portfolio-44cf3.appspot.com/**',
          },
        ],
      },
};

export default nextConfig;
