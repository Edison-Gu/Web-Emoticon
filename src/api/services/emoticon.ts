/*
 * @Descripttion: 
 * @Author: EdisonGu
 * @Date: 2022-04-27 15:16:33
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-04-30 19:54:35
 */
import AxiosService from '../instance'
interface Res {
  code: number,
  data?: any,
  total?: number,
  randomPageNo?: number
}

const fetchEmoticonList = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/emoticonList`, { params })
  return res ? res : { code: -1, data: null }
}

const fetchNewestList = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/emoticonList`, { params: {
    pageNo: 5,
    pageSize: 20
  } })
  return res ? res : { code: -1, data: null }
}

const fetchEmoticonDetail = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/emoticonDetail`, { params })
  return res ? res : { code: -1, data: null }
}

export {
  fetchEmoticonList,
  fetchNewestList,
  fetchEmoticonDetail
}