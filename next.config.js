/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "",
        pathname: "/1200x600&w=3840&q=75"
      },
      { 
        protocol: "https",
        hostname: "media.tenor.com",
        port: "",
        pathname: "/DMpbzFxAxRYAAAAd/snorlax.gif"
      },
      {
        protocol: "https",
        hostname: "media.tenor.com",
        port: "",
        pathname: "/splChnZkobQAAAAC/hi-nikky.gif"
      }
    ],
  },
}

module.exports = nextConfig
