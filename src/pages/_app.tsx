import '../styles/globals.scss'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
// import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import HtmlHead from '@/components/common/HtmlHead'
import PageHead from '@/components/common/PageHead/index'
import PageFooter from '@/components/common/PageFooter/index'
import Router from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('---当前props', pageProps)
  // const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      console.log(`----路由 ${url}`)
    }

    Router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  // Router.events.on('routeChangeStart',(...args)=>{
  //   console.log('1.routeChangeStart->路由开始变化，参数为：',...args)
  // })
  return (
    <div>
      <HtmlHead />
      <PageHead />
      <Component {...pageProps} />
      <PageFooter />
    </div>
  )
}

export default MyApp
