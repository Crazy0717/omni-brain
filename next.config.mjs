import nextPWA from "next-pwa"

/** @type {import('next').NextConfig} */
const nextConfig = {}

const withPWA = nextPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  disable: false,
})

export default withPWA(nextConfig)
