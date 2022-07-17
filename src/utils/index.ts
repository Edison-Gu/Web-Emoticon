/*
 * @Author: EdisonGu
 * @Date: 2022-06-07 09:19:37
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-16 15:57:33
 * @Descripttion: 
 */
import { MESSAGE_TEXT } from '@/constants/index'

/**
 * 随机获取点赞文案
 * @returns 
 */
const randomMsgText = () => {
  const index = Math.floor(Math.random() * MESSAGE_TEXT.length)
  return MESSAGE_TEXT[index]
}

/**
 * 随机获取count内的正整数
 * @param count 
 * @returns 
 */
const randomCount = (count: number = 10) => {
  return Math.floor(Math.random() * count)
}

/**
 * 判断是否是json字符串
 * @returns Boolean
 */

const isJson = (row:any) => {
  if (typeof row !== 'string') return false
  try {
    const data = JSON.parse(row)
    if (data && typeof data === 'object') {
      return true
    }
  } catch (error) {
    return false
  }
}

/**
 * 转换新浪的图片地址 orj180 - 最小，orj360 - 小，bmiddle - 默认大小，mw1024 - 大，mw2000 - 超大
 * 动图不转换为最小的
 * @params size: mini - orj360, normal - bmiddle, large - mw1024, max - mw2000
 */

const transfromImgSrc = ({src, size = 'mini'} : {src: string, size?: string}) => {
  if (size === 'mini' && src.indexOf('gif') > -1) { // 动图不转换为最小的
    return src
  }
  if (src.indexOf('bmiddle') > -1) {
    switch (size) {
      case 'mini':
        src = src.replace('bmiddle', 'orj360')
        break;
      case 'large':
        src = src.replace('bmiddle', 'mw1024')
      default:
        break;
    }
  }
  console.log('-----src', src)
  return src
}

export {
  randomMsgText,
  randomCount,
  isJson,
  transfromImgSrc
}