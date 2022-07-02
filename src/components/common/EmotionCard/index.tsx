/*
 * @Descripttion: 表情包卡片组件
 * @Author: EdisonGu
 * @Date: 2022-04-26 22:08:28
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-02 17:35:12
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import ImageNext from 'next/image'
import Link from 'next/link'
import { getPageUrl } from '@/utils/jumpLink'
import { randomMsgText } from '@/utils/index'
import { Tooltip, message, Dropdown, Space, Image } from 'antd'
import { LikeOutlined, EyeOutlined, DownloadOutlined, SwapRightOutlined } from '@ant-design/icons'
import DashboardIcon from '@/components/common/Icon/Dashboard'
import ImgWaterfall from '@/components/common/ImgWaterfall'
import ImgFixed from '@/components/common/ImgFixed'

interface State {
  visible: boolean,
  actionsComponent: any,
  positon: any
}
interface Props {
  imgItem: any,
  actions?: Array<any>
}
class EmotionCard extends Component<Props, State> {
  static defaultProps = {
    // actions: ['like', 'eyes', 'download']
    actions: ['like', 'eyes']
  }
  private myRef: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      visible: false,
      positon: 'bottomLeft',
      actionsComponent: {
        like: <Tooltip placement="top" key="like" title="点赞">
                <LikeOutlined  onClick={() => this.actionClick('like')} />
              </Tooltip>,
        eyes: <Tooltip placement="top" key="eyes" title="预览">
                <div onClick={() => this.actionClick('eyes')}>
                  预览
                  <SwapRightOutlined />
                  <EyeOutlined />
                </div>
              </Tooltip>
        // download: <Tooltip placement="top" key="download" title={`下载表情${this.props.type === 'emotion' ? '包' : ''}`}>
        //             <DownloadOutlined />
        //           </Tooltip>
      }
    }
  }
  componentDidMount() {
    this.handlePosition()
    window.addEventListener('scroll', () => {
      this.handlePosition()
    })
  }
  actionClick(type: string) {
    switch (type) {
      case 'like':
        message.success(randomMsgText())
        break;
      case 'eyes':
        this.setVisible(true)
        break;
    
      default:
        break;
    }
    const { imgItem: { imgDataOriginal } } = this.props
    if (type === 'download') {
      window.open(imgDataOriginal)
    }
  }
  setVisible(visible: boolean){
    this.setState({ visible })
  }
  handleStyle(index:number) {
    const { imgItem: { imgList = [] } } = this.props
    let style = {
      width: '',
      height: '',
      marginBottom: '0'
    }
    if (imgList.length > 3) {
      switch (index) {
        case 0:
          style.width = '100%'
          style.height = '160px'
          style.marginBottom = '2px'
          break;
        default:
          style.width = `${236 / 3}px`
          style.height = '78px'
          break;
      }
    }
    return style
  }
  handleSize({index, type = 'width'}:{index: number, type?: string}) {
    const { imgItem: { imgList = [] } } = this.props
    let width = 240
    let height = 120
    if (imgList.length > 3) {
      switch (index) {
        case 0:
          width = 240
          height = 160
          break;
        default:
          width = 236 / 3 // 中间留2px间距
          height = 78
          break;
      }
    }
    return type === 'width' ? width : height
  }
  /**
   * 处理下拉组件的位置
   */
  handlePosition() {
    let positon:any = 'bottomLeft'
    const dom:any = this.myRef.current
    if (!dom) return
    const top = dom.getBoundingClientRect().top
    positon = top > 300 ? 'topRight' : 'bottomRight'
    this.setState({positon})
  }
  imgContent() {
    let { imgItem: { imgList = [], id } } = this.props
    imgList = imgList.map((item: any) => ({
      ...item,
      src: item.imgDataOriginal
    }))
    const waterfallConfig = {
      columnWidth: 120,
      columnCount: 3,
      columnGap: 2,
      rowGap: 2,
    }
    const menu = (
      <div className={Styles['dropdown-container']}>
        <div className={Styles['waterfall-container']}>
          <ImgWaterfall  imgList={imgList} id={id} waterfallConfig={waterfallConfig} />
        </div>
      </div>
    )
    return menu
  }
  render() {
    const { imgItem: { imgList = [], title, count, id } } = this.props
    const { positon } = this.state
    const emotionList:any = []
    imgList.map((item:any, index:any) => {
      if (index < 4) {
        emotionList.push(item)
      }
    })
    
    return (
      <div className={Styles['img-card-container']}>
        <div className={Styles['img-content']}>
          <Link href={getPageUrl({id})}>
            <a className={Styles['img-content-a']}>
              {
                emotionList.map((item:any, index:number) => (
                  <div key={index} style={this.handleStyle(index)}>
                    {/* <ImgFixed imgConfig={{
                      src: item.imgDataOriginal,
                      alt: item.imgAlt,
                      title: item.imgTitle
                      }} /> */}
                    <ImageNext
                      className={Styles['img-item']}
                      src={item.imgDataOriginal}
                      alt={item.imgDes}
                      title={item.imgTitle}
                      width={this.handleSize({index})}
                      height={this.handleSize({index, type: 'height'})}
                      quality={10}
                    />
                  </div>
                ))
              }
            </a>
          </Link>
        </div>
        <div className={Styles['img-detail']}>
          <div className={Styles.title}>
            <p>
            <Link href={getPageUrl({id})}>
              <a title={title}>
                {title}
              </a>
            </Link>
            </p>
            <Dropdown
              className={Styles['dropdown-icon']}
              overlayClassName="dropdown-container" 
              overlay={this.imgContent()} placement={positon}
              destroyPopupOnHide={true}
              // trigger={['click']}
              >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  <DashboardIcon ref={this.myRef} className={Styles['icon-dashboard']}/>
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className={Styles.des}>
            {count}张表情
          </div>
        </div>
      </div>
    )
  }
}

export default EmotionCard
// export default withTranslation('translation')(EmotionCard)
