/*
 * @Descripttion: 表情详情底部组件
 * @Author: EdisonGu
 * @Date: 2022-05-03 11:56:39
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-06-23 21:03:09
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import Link from 'next/link'
import { Button, Image, message } from 'antd'
import { LeftOutlined, RightOutlined, EyeOutlined, SwapRightOutlined } from '@ant-design/icons'
import { getPageUrl } from '@/utils/jumpLink'
interface Props {
  nextInfo: any,
  preInfo: any,
  type?: string
}

interface State {
  visible: boolean,
  vImgType: string,
  vImgList: Array<object>
}
class EmojiFooter extends Component<Props, State> {
  static defaultProps = {
    type: 'emoji'
  } 
  constructor(props: Props) {
    super(props)
    this.state = {
      visible: false,
      vImgType: 'pre',
      vImgList: []
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', e => {
      const { nextInfo, preInfo, type } = this.props
      if (e.keyCode == 37 && preInfo.id) {
        window.location.href = getPageUrl({ id: preInfo.id, type  })
      }
      if (e.keyCode == 39 && nextInfo.id) {
        window.location.href = getPageUrl({ id: nextInfo.id, type })
      }
    })
  }
  handleTitle(title: any) {
    const { type } = this.props
    if (type === 'emoji') {}
    if (title) {
      return `: ${title}`
    }
  }
  /**
   * 
   * @param visible 
   * @param vImgType pre-上一篇眼睛icon，next- 下一篇眼睛icon，img-图片容器关闭按钮
   * @returns 
   */
  setVisible(visible: boolean, vImgType: string){
    const { nextInfo, preInfo, type } = this.props
    const { imgList: preImgList = [] } = preInfo
    const { imgList: nextImgList = [] } = nextInfo
    let vImgList =[]
    if (vImgType == 'img') {
      this.setState({
        visible
      })
      return
    }
    if (type === 'emoji') {
      vImgList = vImgType === 'pre' ? [preInfo] : [nextInfo]
    } else {
      vImgList = vImgType === 'pre' ? preImgList : nextImgList
    }
    if (!vImgList || vImgList.length == 0) {
      message.warning('诶，预览不了，好气~')
      return
    }
    this.setState({
      visible,
      vImgList
    })
    
  }
  render(): React.ReactNode {
    const { visible, vImgList } = this.state
    const { nextInfo, preInfo, type } = this.props
    return (
      <div className={Styles['footer-container']}>
        <div className={Styles['btn-box']}>
          <div>
          <Link href={getPageUrl({id: nextInfo.id, type})}>
                  <a title={nextInfo.title} >
                    1
                  </a>
                </Link>
            {/* <Button
              className={Styles.btn}
              shape="round"
              href={getPageUrl({id: preInfo.id, type})}
              disabled={!preInfo.id}>
              <div className={Styles['btn-content']}>
                
              </div>
            </Button> */}
            <div className={Styles['eye-box']} onClick={() => this.setVisible(true, 'pre')}>
              <span>
                预览表情点我，点我
                <SwapRightOutlined />
              </span>
              <EyeOutlined />
            </div>
          </div>
          <div>
            <Button
              className={Styles.btn}
              shape="round"
              disabled={!nextInfo.id}>
              <div className={Styles['btn-content']}>
                {/* <Link href={getPageUrl({id: nextInfo.id, type})}> */}
                    {/* <a title={nextInfo.title} >
                      
                  </a> */}
                  <p>下一篇{this.handleTitle(nextInfo.title)}</p>
                  <RightOutlined />
                {/* </Link> */}
              </div>
            </Button>
            <div className={Styles['eye-box']} onClick={() => this.setVisible(true, 'next')} >
              <span>
                预览表情点我，点我
                <SwapRightOutlined />
              </span>
              <EyeOutlined/>
            </div>
          </div>
          <div style={{ display: 'none' }}>
            <Image.PreviewGroup key="next" preview={{ visible, onVisibleChange: vis => this.setVisible(vis, 'img') }}>
              {
                vImgList.map((item: any, index: number) => (
                  <Image
                    key={index}
                    src={item.imgDataOriginal}
                    alt={item.imgAlt}
                    title={item.imgTitle}
                  />
                ))
              }
            </Image.PreviewGroup>
          </div>
        </div>
        <div className={Styles['des-box']}>
          友情提示：按 ← → 方向键可以换表情包，鼠标点击眼睛图标可以预览表情包
        </div>
      </div>
    )
  }
}

export default EmojiFooter
