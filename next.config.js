/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REVERSIFY_FUNCTION_HOST: "https://func-htimsdrow.azurewebsites.net/"
  }
}

module.exports = nextConfig
