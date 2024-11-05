/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.retenmax.com.br",
                pathname: "/**", // permite todas as rotas de imagens do domínio
            }
        ],
    }
};

export default nextConfig;
