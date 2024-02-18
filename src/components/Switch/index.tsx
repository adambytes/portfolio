'use client'

import { forwardRef, useEffect, useState } from 'react'
import './styles.scss'
import cn from '@/utils/cn'

interface SwitchProps {
  className?: string
}

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    const [checked, setChecked] = useState(false)

    const handleClick = () => {
      const theme = localStorage.getItem('theme')
      // check if localstorage is set

      if (theme === null) {
        localStorage.setItem('theme', 'dark')
        return
      }

      document.body.setAttribute(
        'data-theme',
        theme === 'dark' ? 'light' : 'dark'
      )

      localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
      setChecked(!checked)
    }

    useEffect(() => {
      const theme = localStorage.getItem('theme')

      if (theme === null) {
        localStorage.setItem('theme', 'dark')
      }

      document.body.setAttribute('data-theme', theme!)
      setChecked(theme !== 'dark')
    }, [])

    return (
      <div className={cn(className)} {...props} ref={ref}>
        <input
          id="toggle-box"
          className="light-dark cursor-pointer"
          type="checkbox"
          role="switch"
          aria-checked={checked}
          defaultChecked={checked}
          onChange={() => handleClick()}
        />
        <label htmlFor="toggle-box" className="cursor-pointer" />
      </div>
    )
  }
)

Switch.displayName = 'Switch'

export default Switch
