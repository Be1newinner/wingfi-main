/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',   // Match the request to any API path
                destination: 'https://wingfi-admin.vercel.app/api/:path*', // Proxy to the external API
            },
        ];
    },
};

export default nextConfig;
