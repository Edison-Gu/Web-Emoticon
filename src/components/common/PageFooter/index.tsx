/*
 * @Descripttion: 公用页脚
 * @Author: EdisonGu
 * @Date: 2022-04-29 11:41:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-04-29 11:43:46
 */

import React, { Component } from 'react'
import Styles from '@/styles/Home.module.scss'
import { Layout } from 'antd';


class PageFooter extends Component {
  render() {
    const {  Footer } = Layout;
    return (
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    )
  }
}

export default PageFooter