/** @type {import('next').NextConfig} */
const path = require('path')
const env = process.env.NEXT_PUBLIC_ENV || 'dev'
console.log('----env', env)
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tva1.sinaimg.cn']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import '@/styles/variables.module.scss';` // 引入全局scss变量
  }
}

module.exports = nextConfig
