import React, { ReactElement, useEffect, useRef } from 'react'

import Waterfall from './waterfall'

interface Iprops {
  mode?: 'position' | 'grid'
  el?: string
  children?: ReactElement[]
  columnWidth: number
  columnCount: number
  columnGap: number
  rowGap: number
  delay?: number
  customStyle?: string
  onChangeUlMaxH?: (h: number) => void
}
export default function WaterfallComps({
  children,
  el="#react-waterfall-comps",
  mode='position',
  columnWidth,
  columnCount,
  columnGap,
  rowGap,
  delay = 300,
  customStyle='',
  onChangeUlMaxH,
}: Iprops): ReactElement {
  const wfRef = useRef<any>()

  useEffect(() => {
    // console.log('---wfRef.current', wfRef.current)
    if (wfRef.current) return
    wfRef.current = Waterfall({
      mode,
      el,
      columnWidth,
      columnCount,
      columnGap,
      rowGap,
      delay,
      customStyle,
      onChangeUlMaxH: h => onChangeUlMaxH?.(h)
    })
  }, [])

  useEffect(() => {
    if (children.length) {
      wfRef.current?.load?.()
    }
  }, [children.length])
  
  return <ul id={el.slice(1)}>{children}</ul>
}