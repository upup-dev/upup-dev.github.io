/** @type {import('next').NextConfig} */
// const nextConfig = {};
//
// export default nextConfig;
const nextConfig = {
    output: "export",
    images: {
        loader: "akamai",
        path: "",
    },
    assetPrefix: "./",
};

export default nextConfig;