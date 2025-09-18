/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 80, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qlwihtsfhluyqoftfmjt.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
