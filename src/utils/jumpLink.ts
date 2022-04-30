/*
 * @Descripttion: 跳转其它地址的方法
 * @Author: EdisonGu
 * @Date: 2022-04-29 10:15:48
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-04-29 11:06:59
 */
// const domain = process.env.JUMP_DOMAIN
import config from '@/api/config'

const goEmoticon = (_id: string) => {
  window.location.href = `${config?.hostDomain}/emoticon/${_id}.html`
}

export {
  goEmoticon
}

