/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    swcMinify: true,
    compress: true,
    compiler: {
        styledComponents: true,
    },
    poweredByHeader: false,
}

module.exports = nextConfig
