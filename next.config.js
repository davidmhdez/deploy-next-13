/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    swcMinify: true,
    compress: true,
    compiler: {
        styledComponents: true,
    },
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "frame-ancestors 'none';"
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
