import '../styles/globals.scss'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import HtmlHead from '@/components/common/HtmlHead'
import PageHead from '@/components/common/PageHead/index'
import PageFooter from '@/components/common/PageFooter/index'

function MyApp({ Component, pageProps }: AppProps) {
  // const list = []
  // const router = useRouter()
  // const [data, setData] = useState(['1'])
  // console.log('----list', list)
  // console.log(router.route)
  // useEffect(() => {
  //   setData([router.route]);
  // }, [])
  return (
    <div>
      <div
        className='a-demo'
        onClick={() => {router.push('/')}}>
        demo
        <ul>
          {/* {data.map(item => (
            <li key={item}>
              {item}
            </li>
          ))} */}
        </ul>
      </div>
      <HtmlHead />
      <PageHead />
      <Component {...pageProps} />
      <PageFooter />
    </div>
  )
}

export default MyApp
