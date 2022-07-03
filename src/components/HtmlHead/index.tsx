/*
 * @Descripttion: html头部组件
 * @Author: EdisonGu
 * @Date: 2022-04-29 11:31:20
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-04-29 11:38:58
 */
import React, { Component } from 'react'
import { withRouter, NextRouter } from 'next/router'
import { HTML_TITLE, HTML_DES, HTML_KEY } from '@/constants/index'
import config from '@/api/config'
import Head from 'next/head'
interface Props {
  htmlTitle?: string,
  router: NextRouter
}
class HtmlHead extends Component<Props, any> {
  static defaultProps = {
    htmlTitle: ''
  }
  constructor(props: Props) {
    super(props)
  }
  getPageUrl() {
    const { router: { pathname = '/', asPath = '' } } = this.props
    let url = config.hostDomain
    switch (pathname) {
      case '/emoticon/[_id]':
        url += asPath
        break;
      case '/emoji/[_id]':
        url += asPath
        break;
      default:
        break;
    }
    return url
  }
  render() {
    const { htmlTitle } = this.props
    // const router = withRouter()
    // const origin = window.location.origin
    // const pathname = window.location.pathname
    return (
      <Head>
        <title>{htmlTitle ? htmlTitle : HTML_TITLE} - 表情鸭 - emojivip.com</title>
        <meta property="og:title" content={htmlTitle} />
        <meta property="site_name" content="表情鸭_表情包_斗图表情_emojivip.com" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={this.getPageUrl()} />
        <meta property="og:description" content={ htmlTitle ? `${htmlTitle}_斗图表情包，${HTML_DES}` : HTML_DES} />
        {/* <meta property="og:image" content={ htmlTitle ? `${htmlTitle}_斗图表情包${HTML_DES}` : HTML_DES} /> */}
        <meta name="Keywords" key="Keywords" content={ htmlTitle ? `${htmlTitle}_斗图表情包，${HTML_KEY}` : HTML_KEY} />
        <meta name="description" key="description" content={ htmlTitle ? `${htmlTitle}_斗图表情包，${HTML_DES}` : HTML_DES} />
        <meta name="360-site-verification" content="272fe5f5aee3e1dc4e2ba25e6fe22748" />
        <meta name="baidu-site-verification" content="code-J5lc6gXrMs" />
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://hm.baidu.com/hm.js?844e01d1597829c5e56ce23eca53d8a5" />
      </Head>
    )
  }
}

// export default HtmlHead

export default withRouter(HtmlHead)