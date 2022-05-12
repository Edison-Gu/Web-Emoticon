import { MESSAGE_TEXT } from '@/constants/index'

const randomMsgText = () => {
  const index = Math.floor(Math.random() * MESSAGE_TEXT.length)
  return MESSAGE_TEXT[index]
}


export {
  randomMsgText
}