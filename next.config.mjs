/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',  // Use 'https' for secure domains
        hostname: 'rukminim2.flixcart.com',  // Correct hostname for Flixcart
      },
      {
        protocol: 'https',  // Use 'https' for secure domains
        hostname: 'www.91-img.com',  // Correct hostname for 91-img
      },
      {
        protocol: 'https',  // Use 'https' for secure domains
        hostname: 'storage.googleapis.com',  // Correct hostname for 91-img
      },
      {
        protocol: 'https',  // Use 'https' for secure domains
        hostname: 'img.freepik.com',  // Correct hostname for 91-img
      },
    ],
  },
};

export default nextConfig;
