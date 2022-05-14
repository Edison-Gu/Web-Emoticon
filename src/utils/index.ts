import { MESSAGE_TEXT } from '@/constants/index'

const randomMsgText = () => {
  const index = Math.floor(Math.random() * MESSAGE_TEXT.length)
  return MESSAGE_TEXT[index]
}

const randomCount = (count: number = 10) => {
  return Math.floor(Math.random() * count)
}


export {
  randomMsgText,
  randomCount
}