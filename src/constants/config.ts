/*
 * @Author: EdisonGu
 * @Date: 2022-05-03 11:59:56
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-17 16:52:50
 * @Descripttion: 
 */
const env:string = process.env.NEXT_PUBLIC_ENV || 'dev'
const HOST_DOMAIN = process.env.HOST_DOMAIN

const config: any = {
  dev: {
    // hostDomain: 'http://localhost:3000',
  },
  test: {
  },
  production: {
  }
}[env]

config.hostDomain = HOST_DOMAIN

export default config