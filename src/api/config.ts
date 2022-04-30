const env:string = process.env.NEXT_PUBLIC_ENV || 'dev'

const config = {
  dev: {
    hostDomain: 'http://localhost:3000'
  },
  test: {
    hostDomain: 'http://1.14.77.152'
  }
}[env]

export default config