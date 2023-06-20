/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')(['@nivo/colors']);

module.exports = withTM();

module.exports = nextConfig
