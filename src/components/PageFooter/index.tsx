/*
 * @Descripttion: 公用页脚
 * @Author: EdisonGu
 * @Date: 2022-04-29 11:41:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-23 16:50:39
 */

import React, { Component } from 'react'
import Styles from './index.module.scss'
import { Layout } from 'antd';
import { WEB_NO } from '@/constants'

interface Istate {
}
interface Iprops{
  
}
class PageFooter extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
  }
  componentDidMount() {
    const hostname = window.location.hostname
    const webKey = hostname.indexOf('vip') > -1 ? 'vip' : 'duck'
  }
  render() {
    const { Footer } = Layout
    return (
      <Footer className={Styles.footer}>
        <div className={Styles['footer-content']}>
          <div className={Styles['footer-item']}>
            <div>
              <h4>关于表情鸭:</h4>
              <p>表情鸭(emojiduck.com)，有趣的表情包网站。</p>
              <p>聊天斗图/有趣表情包/表情DIY/来「表情鸭」就够了。</p>
            </div>
            <div>
              <h4>版权申明:</h4>
              <p>本站资源均来源于互联网，版权归原作者所有。</p>
              <p>如侵犯您的权益，请及时联系我们处理。</p>
            </div>
          </div>
          <div className={Styles['footer-item']}>
            <div>
              <h4>联系方式:</h4>
              <span>edc.woker@gmail.com</span>
            </div>
            <div>
              <a
                className={Styles['a-ba']}
                href="https://beian.miit.gov.cn"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/assets/img/icon/icon-ba.png" alt="" />
                <span>{WEB_NO}</span>
              </a>
            </div>
          </div>
        </div>
      </Footer>
    )
  }
}

export default PageFooter