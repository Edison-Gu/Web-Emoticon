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

export {
  randomMsgText,
  randomCount,
  isJson
}