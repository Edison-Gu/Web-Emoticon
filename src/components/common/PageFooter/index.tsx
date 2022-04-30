/*
 * @Descripttion: 公用页脚
 * @Author: EdisonGu
 * @Date: 2022-04-29 11:41:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-04-29 11:43:46
 */

import React, { Component } from 'react'
import Styles from '@/styles/Home.module.scss'

class PageFooter extends Component {
  render() {
    return (
      <footer className={Styles.footer}>
        <div className={Styles['footer-inner']}></div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    )
  }
}

export default PageFooter