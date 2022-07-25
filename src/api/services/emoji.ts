/*
 * @Descripttion: 表情相关请求
 * @Author: EdisonGu
 * @Date: 2022-04-28 22:55:05
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-07-25 22:59:39
 */

import AxiosService from '../instance'
interface Res {
  code: number,
  data?: any
}

const fetchEmojiDetail = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/emojiDetail`, { params })
  return res ? res : { code: -1, data: null }
}

const fetchHotEmoji = async (params: any) : Promise<Res> => {
  const res =  await AxiosService.get('hotEmoji', { params })
  return res ? res : { code: -1, data: null }
}

export {
  fetchEmojiDetail,
  fetchHotEmoji
}