/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/cround/health",
        destination: `${process.env.NEXT_PUBLIC_TEST_URL}/cround/health`,
      },
      {
        source: "/cround/auth",
        destination: `${process.env.NEXT_PUBLIC_TEST_URL}/cround/auth`,
      },
      {
        source: "/oauth2/authorize/kakao",
        destination: `${process.env.NEXT_PUBLIC_TEST_URL}/oauth2/authorize/kakao`,
      },
    ];
  },
};

module.exports = nextConfig;
