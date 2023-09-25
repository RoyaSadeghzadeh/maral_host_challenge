/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add Babel loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};

module.exports = nextConfig;
