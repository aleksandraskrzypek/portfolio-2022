/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/aleksandraskrzypek.github.io/' : '',
  publicPath: "/",
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  }
}