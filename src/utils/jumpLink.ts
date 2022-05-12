/*
 * @Descripttion: 跳转其它地址的方法
 * @Author: EdisonGu
 * @Date: 2022-04-29 10:15:48
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-05-03 10:48:40
 */
// const domain = process.env.JUMP_DOMAIN
import Router from 'next/router'
import config from '@/api/config'

const goEmoticon = (_id: string) => {
  // Router.push(`/emoticon/${_id}.html`)
  window.location.href = `${config.hostDomain}/emoticon/${_id}.html`
}

const goHeader = (key: string) => {
  switch (key) {
    case 'home':
      Router.push(`/`)
      break;
    case 'emoticonPage':
      Router.push(`/emoticon/index.html`)
        break;
    default:
      break;
  }
}

/**
 * 根据传参获取相应的页面地址
 * @param param
 */
const getPageUrl = ({id = '', type = 'emoticon'}) => {
  const { hostDomain } = config
  let url = hostDomain
  switch (type) {
    case 'emoticon':
      url = `${hostDomain}/emoticon/${id}.html`
      break
    case 'emoticonPage':
      url = `${hostDomain}/emoticon/index.html`
      break
    default:
      break
  }
  return url
}

export {
  goEmoticon,
  getPageUrl,
  goHeader
}

