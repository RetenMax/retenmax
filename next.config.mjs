/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['retenmax.com.br'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.retenmax.com.br",
            }
        ],
    }
};

export default nextConfig;
