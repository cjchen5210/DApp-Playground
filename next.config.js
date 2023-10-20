/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["https://cdn.coinranking.com"],
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        return config;
    },
    env: {
        XRapidAPIKey: process.env.XRapidAPIKey,
        XRapidAPIHost: process.env.XRapidAPIHost
    }
}

module.exports = nextConfig
