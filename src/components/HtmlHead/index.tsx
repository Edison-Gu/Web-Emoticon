/*
 * @Descripttion: html头部组件
 * @Author: EdisonGu
 * @Date: 2022-04-29 11:31:20
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-17 14:53:11
 */
import React, { Component } from 'react'
import { withRouter, NextRouter, Router } from 'next/router'
import { HTML_TITLE, HTML_DES, HTML_KEY, BD_TAG } from '@/constants/index'
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
    this.state = {
      webKey: 'duck'
    }
  }
  componentDidMount() {
    const hostname = window.location.hostname
    const webKey = hostname.indexOf('vip') > -1 ? 'vip' : 'duck'
    this.setState({ webKey })
    Router.events.on('routeChangeComplete', (url) => {
      try{
        window._hmt.push(['_trackPageview', url]);
      } catch (e){}
    })
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
    return (
      <Head>
        <title>{htmlTitle ? htmlTitle : HTML_TITLE} - 表情鸭 - emojiduck.com</title>
        <meta property="og:title" content={htmlTitle} />
        <meta property="site_name" content="表情鸭_表情包_斗图表情_emojiduck.com" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={this.getPageUrl()} />
        <meta property="og:description" content={ htmlTitle ? `${htmlTitle}_斗图表情包，${HTML_DES}` : HTML_DES} />
        {/* <meta property="og:image" content={ htmlTitle ? `${htmlTitle}_斗图表情包${HTML_DES}` : HTML_DES} /> */}
        <meta name="Keywords" key="Keywords" content={ htmlTitle ? `${htmlTitle}_斗图表情包，${HTML_KEY}` : HTML_KEY} />
        <meta name="description" key="description" content={ htmlTitle ? `${htmlTitle}_斗图表情包，${HTML_DES}` : HTML_DES} />
        <meta name="360-site-verification" content="272fe5f5aee3e1dc4e2ba25e6fe22748" />
        <meta name="baidu-site-verification" content="code-J5lc6gXrMs" />
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={BD_TAG(this.state.webKey)}/>
      </Head>
    )
  }
}

// export default HtmlHead

export default withRouter(HtmlHead)