/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias['@'] = path.join(__dirname, '.'); // Якщо ваші аліаси вказують на корінь проекту
        return config;
    },
    basePath: isProd ? '/upup.site-v2.0.github.io' : '',
    assetPrefix: isProd ? '/upup.site-v2.0.github.io' : '',
};

export default nextConfig;

