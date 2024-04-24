/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['upup-dev.github.io'],
    },
    output: "export",
    assetPrefix: process.env.NODE_ENV === 'production' ? '/upup.site-v2.0.github.io/' : '',
};

export default nextConfig;
