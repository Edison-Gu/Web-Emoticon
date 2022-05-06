/*
 * @Descripttion: 表情详情底部组件
 * @Author: EdisonGu
 * @Date: 2022-05-03 11:56:39
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-05-03 11:56:39
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import { Button } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

interface Props {

}

interface State {
  btnSize: string
}
class EmojiFooter extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      btnSize: 'large'
    }
  }
  render(): React.ReactNode {
    return (
      <div className={Styles['footer-container']}>
        <div className={Styles['btn-box']}>
          <Button shape="round" className={Styles.btn} href="http://www.baidu.com">
            <div className={Styles['btn-content']}>
              <LeftOutlined />
              <p>上一篇</p>
              {/* <p>上一篇: 哈哈哈哈哈表情包jjjjjjjjssssssjdasdasdasj</p> */}
            </div>
          </Button>
          <Button shape="round" className={Styles.btn}>
            <div className={Styles['btn-content']}>
              {/* <p>下一篇: 哈哈哈哈哈表情包jjjjjjjjssssssjdasdasdasj</p> */}
              <p>下一篇</p>
              <RightOutlined />
            </div>
          </Button>
        </div>
        <div className={Styles['des-box']}>
          友情提示：按 ← → 方向键可以换表情包，鼠标移入眼睛图标可以预览表情包
        </div>
      </div>
    )
  }
}

export default EmojiFooter
