/*
 * @Author: EdisonGu
 * @Date: 2022-07-02 23:48:12
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-17 15:24:02
 * @Descripttion: 
 */
import '../styles/globals.scss'
import 'antd/dist/antd.css'
import React from 'react'
import type { AppProps } from 'next/app'
import zhCN from 'antd/lib/locale/zh_CN'
import { useRouter } from 'next/router'
import { Layout, BackTop, message, ConfigProvider } from 'antd'
import HtmlHead from '@/components/HtmlHead'
import PageHead from '@/components/PageHead'
import PageFooter from '@/components/PageFooter'
// import Breadcrumb from '@/components/common/Breadcrumb'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('---当前props', pageProps)
  const router = useRouter()
  const { htmlTitle = '' } = pageProps
  const { Content } = Layout
  message.config({
    top: 100,
    maxCount: 5
  })
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
