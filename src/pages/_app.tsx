import '../styles/globals.scss'
import 'antd/dist/antd.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic"
import zhCN from 'antd/lib/locale/zh_CN'
import HtmlHead from '@/components/common/HtmlHead'
import PageHead from '@/components/common/PageHead'
import PageFooter from '@/components/common/PageFooter'
import Breadcrumb from '@/components/common/Breadcrumb'
import { Layout, BackTop, message, ConfigProvider } from 'antd'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('---当前props', pageProps)
  const router = useRouter()
  // let location = useLocation();
  const { htmlTitle = '' } = pageProps
  const { Content } = Layout
  console.log('----router', router)
  message.config({
    top: 100,
    maxCount: 5
  })
  // const ModalDemo = dynamic(()=>import('@/views/modalDemo'),{ ssr: false })
  return (
      <ConfigProvider locale={zhCN} >
        <HtmlHead  htmlTitle={htmlTitle} />
        <Layout>
          {/* <PageHead router={router} /> */}
          <Content style={{ marginTop: 74 }}>
            {/* <Breadcrumb router={router} htmlTitle={htmlTitle} /> */}
            <Component {...pageProps} />
          </Content>
          {/* <ModalDemo /> */}
          
          {/* <PageFooter /> */}
        </Layout>
      </ConfigProvider>
  )
}

export default MyApp
