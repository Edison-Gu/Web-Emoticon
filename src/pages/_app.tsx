/*
 * @Author: EdisonGu
 * @Date: 2022-07-02 23:48:12
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 16:42:13
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
import Breadcrumb from '@/components/Breadcrumb'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { Content } = Layout
  const { id = '', pId = '', keyword = '', htmlTitle = '' } = pageProps
  const { pathname = '/', asPath = '' } = router
  console.log('---当前props', pageProps)
  const pageParams = {
    id,
    pId,
    keyword,
    htmlTitle,
    pathname,
    asPath
  }
  message.config({
    top: 100,
    maxCount: 5
  })
  return (
      <ConfigProvider locale={zhCN} >
        <HtmlHead  htmlTitle={htmlTitle} />
        <Layout>
          <PageHead pageParams={pageParams} />
          <Content style={{ marginTop: 74 }}>
            <Breadcrumb pageParams={pageParams} />
            <Component {...pageProps} />
          </Content>
          <PageFooter />
        </Layout>
      </ConfigProvider>
  )
}

export default MyApp
