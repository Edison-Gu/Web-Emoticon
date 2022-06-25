/*
 * @Descripttion: 表情包卡片组件
 * @Author: EdisonGu
 * @Date: 2022-04-26 22:08:28
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-06-23 19:24:54
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import ImageNext from 'next/image'
import Link from 'next/link'
import { DEFAULT_IMG } from '@/constants'
import { getPageUrl } from '@/utils/jumpLink'
import { randomMsgText } from '@/utils/index'
import { Tooltip, message, Dropdown, Space, Image } from 'antd'
import { LikeOutlined, EyeOutlined, DownloadOutlined, SwapRightOutlined } from '@ant-design/icons'
import DashboardIcon from '@/components/common/Icon/Dashboard'
import Waterfall from '@/components/Waterfall'
import ImgWaterfall from '@/components/common/ImgWaterfall'

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
  handleStyle({index, type = 'style'}:{index: number, type?: string}) {
    const { imgItem: { imgList = [] } } = this.props
    let style = {
      width: '',
      height: '',
      marginBottom: '0'
    }
    let width = 240
    let height = 120
    if (imgList.length > 3) {
      switch (index) {
        case 0:
          style.width = '100%'
          style.height = '160px'
          style.marginBottom = '2px'
          width = 240
          height = 160
          break;
        default:
          style.width = `${236 / 3}px`
          style.height = '78px'
          width = 236 / 3 // 中间留2px间距
          height = 78
          break;
      }
    }
    return type === 'style' 
            ? style
            : type === 'width' ? width : height
  }
  /**
   * 处理下拉组件的位置
   */
  handlePosition() {
    let positon:any = 'bottomLeft'
    const dom:any = this.myRef.current
    if (!dom) return
    const top = dom.getBoundingClientRect().top
    positon = top > 400 ? 'topRight' : 'bottomRight'
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
        <ImgWaterfall  imgList={imgList} id={id} waterfallConfig={waterfallConfig} />
        {/* <Waterfall
          el={`#waterfall${id}`}
          columnWidth={120}
          columnCount={3}
          columnGap={2}
          rowGap={2}
        >
          {
            imgList.map((item:any, index:number) => (
              <li key={index}>
                <Link href={getPageUrl({id: item.id, type: 'emoji'})}>
                  <a title={item.imgTitle} >
                    <div className={Styles['img-item']}>
                      <Image
                        key={index}
                        width={120}
                        preview={false}
                        title={item.imgTitle}
                        src={item.imgDataOriginal}
                        alt={item.imgDes}
                        fallback={DEFAULT_IMG}
                      />
                    </div>
                  </a>
                </Link>
              </li>
            ))
          }
        </Waterfall> */}
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
                  <div key={index} style={this.handleStyle({index})}>
                    <ImageNext
                      className={Styles['img-item']}
                      src={item.imgDataOriginal}
                      alt={item.imgDes}
                      title={item.imgTitle}
                      width={this.handleStyle({index, type: 'width'})}
                      height={this.handleStyle({index, type: 'height'})}
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
              overlayClassName="dropdown-container" 
              overlay={this.imgContent()} placement={positon}
              destroyPopupOnHide={true}
              trigger={['click']}
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
