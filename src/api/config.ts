const env:string = process.env.NEXT_PUBLIC_ENV || 'dev'
const HOST_DOMAIN = process.env.HOST_DOMAIN

const config: any = {
  dev: {
    // hostDomain: 'http://localhost:3000',
  },
  test: {
    // hostDomain: 'http://http://www.emojivip.com/'
  },
  production: {
    // hostDomain: 'http://http://www.emojivip.com/'
  }
}[env]

config.hostDomain = HOST_DOMAIN

export default config