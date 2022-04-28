/*
 * @Descripttion: 
 * @Author: EdisonGu
 * @Date: 2022-04-27 15:16:33
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-04-28 11:56:39
 */
import AxiosService from '../instance'
interface Res {
  code: number,
  data?: any
}

const fetchNewestList = async (params: any): Promise<Res> => {
  const res = await AxiosService.get(`/emoticonList`, { params })
  return res ? res : { code: -1, data: null }
}

export {
  fetchNewestList
}