/** @type {import('next').NextConfig} */
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias['@'] = path.join(__dirname);
        return config;
    },
    basePath: isProd ? '/upup.site-v2.0.github.io' : '',
    assetPrefix: isProd ? '/upup.site-v2.0.github.io' : '',
};

export default nextConfig;
