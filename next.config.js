/*
 * @Author: EdisonGu
 * @Date: 2022-07-03 23:44:00
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-17 14:36:09
 * @Descripttion: 
 */
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
    baseDomain: 'http://www.emojiduck.com/api',
    hostDomain: 'http://www.emojiduck.com'
  },
  production: {
    baseDomain: 'https://www.emojiduck.com/api',
    hostDomain: 'https://www.emojiduck.com'
  }
}[env]
const nextConfig = {
  reactStrictMode: false, //  严格模式
  images: {
    domains: ['tva1.sinaimg.cn','tva2.sinaimg.cn', 'tva3.sinaimg.cn', 'wx1.sinaimg.cn', 'wx2.sinaimg.cn', 'wx3.sinaimg.cn', 'wx4.sinaimg.cn', 'upload.chongnengjihua.com' ]
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
