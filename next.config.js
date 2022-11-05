/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});



const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'wixmp.com', 'romapy'],
  },
  /* 
    swcMinify: true,
  env: {
    customKey: 'customValue',
    },
  basePath: '/dist',
  compress: true, */
/*   async redirects() {
    return [
      {
      source: '/hola',
      destination: 'https://gndx.dev',
      permanent: true,
      }
    ]
  } */ //esto se usa para las PWA
  
}

module.exports = withPWA(nextConfig);
