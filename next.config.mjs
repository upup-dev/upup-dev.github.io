/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: process.env.NODE_ENV === 'production' ? '/upup.site-v2.0.github.io' : '',
};

export default nextConfig;
