/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/upup.site-v2.0.github.io' : '',
    assetPrefix: isProd ? '/upup.site-v2.0.github.io' : '',
};

export default nextConfig;

