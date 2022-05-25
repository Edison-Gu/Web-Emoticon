/** @type {import('next').NextConfig} */
const path = require('path')
const env = process.env.NEXT_PUBLIC_ENV || 'dev'
console.log('----env', env)
const config = {
  dev: {
    baseDomain: 'http://127.0.0.1:7001',
    hostDomain: 'http://localhost:3000'
  },
  test: {
    baseDomain: 'http://www.emojivip.com/api',
    hostDomain: 'http://www.emojivip.com'
  },
  production: {
    baseDomain: 'https://www.emojivip.com/api',
    hostDomain: 'https://www.emojivip.com'
  }
}[env]
const nextConfig = {
  reactStrictMode: false, //  严格模式
  images: {
    domains: ['tva1.sinaimg.cn','tva2.sinaimg.cn', 'tva3.sinaimg.cn', 'wx1.sinaimg.cn', 'wx2.sinaimg.cn', 'wx3.sinaimg.cn', 'wx4.sinaimg.cn' ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import '@/styles/variables.module.scss';` // 引入全局scss变量
  },
  env: {
    BASE_DOMAIN: config.baseDomain,
    HOST_DOMAIN: config.hostDomain
  }
}

module.exports = nextConfig
