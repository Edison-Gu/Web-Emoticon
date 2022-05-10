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
import { Layout, BackTop, message } from 'antd';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('---当前props', pageProps)
  const { htmlTitle = '' } = pageProps
  const { Content } = Layout;
  message.config({
    top: 100,
    maxCount: 3
  })
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      console.log(`----路由监听---- ${url}`)
    }
    Router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  return (
    <>
      <HtmlHead  htmlTitle={htmlTitle} />
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
