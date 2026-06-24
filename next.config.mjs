/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export 100% statique → dossier `out/` déployable sur Cloudflare Workers
  // (assets), Pages, ou tout hébergeur statique.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
