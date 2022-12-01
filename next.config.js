/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REVERSIFY_FUNCTION_HOST: "REVERSIFY_FUNCTION_HOST"
  }
}

module.exports = nextConfig
