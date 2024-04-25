/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const path = require('path');

const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Вказуємо webpack, де розгортати аліаси
        config.resolve.alias['@'] = path.join(__dirname);
        return config;
    },
    basePath: isProd ? '/upup.site-v2.0.github.io' : '',
    assetPrefix: isProd ? '/upup.site-v2.0.github.io' : '',
};

export default nextConfig;
