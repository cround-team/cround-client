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
  images: {
    deviceSizes: [360, 700, 1200], // 원하는 기기 사이즈 설정
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
        source: "/auth/kakao/login",
        destination: `${process.env.NEXT_PUBLIC_TEST_URL}/auth/kakao/login`,
      },
    ];
  },
};

module.exports = nextConfig;
