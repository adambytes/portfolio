'use client'
import './style.scss'
import { useMouse } from 'react-use'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const mouseRef = useRef(null)
  const { docX, docY } = useMouse(mouseRef)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const style = {
    left: `${pos.x}px`,
    top: `${pos.y}px`,
  }

  useEffect(() => {
    setPos({ x: docX, y: docY })
  }, [docX, docY])
  return <div className="circle" style={style}></div>
}
