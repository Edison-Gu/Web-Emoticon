import '../styles/globals.scss'
import 'antd/dist/antd.css'
import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import HtmlHead from '@/components/common/HtmlHead'
import PageHead from '@/components/common/PageHead'
import PageFooter from '@/components/common/PageFooter'
import Breadcrumb from '@/components/common/Breadcrumb'
// import Router from 'next/router'
import { Layout, BackTop, message, ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

function MyApp({ Component, pageProps }: AppProps) {
  // console.log('---当前props', pageProps)
  const router = useRouter()
  const { htmlTitle = '' } = pageProps
  const { Content } = Layout
  message.config({
    top: 100,
    maxCount: 5
  })
  // useEffect(() => {
  //   const handleRouteChange = (url: any) => {
  //     console.log(`----路由监听---- ${url}`)
  //   }
  //   Router.events.on('routeChangeStart', handleRouteChange)
  //   return () => {
  //     Router.events.off('routeChangeStart', handleRouteChange)
  //   }
  // }, [])
  return (
    <ConfigProvider locale={zhCN} >
      <HtmlHead  htmlTitle={htmlTitle} />
      <Layout>
        <PageHead router={router} />
        <Content style={{ marginTop: 74 }}>
          <Breadcrumb />
          <Component {...pageProps} />
        </Content>
        <PageFooter />
      </Layout>
    </ConfigProvider>
  )
}

export default MyApp
