/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')(['@nivo/colors']);

module.exports = withTM({
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
    };

    return config;
  },
});


module.exports = nextConfig
