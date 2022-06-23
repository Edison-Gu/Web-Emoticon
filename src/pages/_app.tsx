import '../styles/globals.scss'
import 'antd/dist/antd.css'
import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import zhCN from 'antd/lib/locale/zh_CN'
import { useRouter } from 'next/router'
import { Layout, BackTop, message, ConfigProvider } from 'antd'
import HtmlHead from '@/components/common/HtmlHead'
import PageHead from '@/components/common/PageHead'
import PageFooter from '@/components/common/PageFooter'
import Breadcrumb from '@/components/common/Breadcrumb'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('---当前props', pageProps)
  // const [showChild, setShowChild] = useState(false)
  const router = useRouter()
  console.log('----router', router)
  const { htmlTitle = '' } = pageProps
  const { Content } = Layout
  message.config({
    top: 100,
    maxCount: 5
  })
  // useEffect(() => {
  //   setShowChild(true)
  // }, [])
  // if (!showChild) {
  //   return null
  // }
  return (
      <ConfigProvider locale={zhCN} >
        <HtmlHead  htmlTitle={htmlTitle} />
        <Layout>
          <PageHead router={router} />
          <Content style={{ marginTop: 74 }}>
            {/* <Breadcrumb router={router} htmlTitle={htmlTitle} /> */}
            <Component {...pageProps} />
          </Content>
          <PageFooter />
        </Layout>
      </ConfigProvider>
  )
}

export default MyApp
