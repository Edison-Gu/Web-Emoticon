import '../styles/globals.scss'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
// import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import HtmlHead from '@/components/common/HtmlHead'
import PageHead from '@/components/common/PageHead/index'
import PageFooter from '@/components/common/PageFooter/index'
import Breadcrumb from '@/components/common/Breadcrumb'
import Router from 'next/router'
import { Layout } from 'antd';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('---当前props', pageProps)
  const { Content } = Layout;
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
    <>
      <HtmlHead />
      <Layout>
        <PageHead />
        <Content style={{ marginTop: 74 }}>
          <Breadcrumb />
          <Component {...pageProps} />
        </Content>
        <PageFooter />
      </Layout>
    </>
  )
}

export default MyApp
