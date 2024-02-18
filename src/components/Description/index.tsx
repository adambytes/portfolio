'use client'
import cn from '@/utils/cn'
import { useEffect, useState, useRef } from 'react'
import {
  m,
  LazyMotion,
  domAnimation,
  AnimatePresence,
  motion,
} from 'framer-motion'

function Message({
  key,
  message,
  className,
}: {
  key: string
  message: string
  className: string
}) {
  return (
    <m.p
      className={className}
      key={key}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
    >
      {message}
    </m.p>
  )
}
export default function Description() {
  const [index, setIndex] = useState(0)

  const descriptions = [
    "Hi, I'm Adam. I'm a fullstack software engineer based in New York City. My expertise is in building scalable and maintainable web applications using React and NextJs.",
    "I'm passionate about building products that are user-friendly and accessible. I'm always looking for new opportunities to learn and grow as a developer.",
    "I hand crafted this website using NextJs, TailwindCSS, and Framer Motion. I'll be using this space to test out new technologies and showcase my work. Feel free to reach out to me on LinkedIn or Twitter.",
  ]

  const styles = {
    p: 'text-xs sm:text-base md:text-base py-6 text-center',
    arrow: 'cursor-pointer text-4xl sm:text-xl md:text-3xl',
  }

  const handleIndexChange = (delta: number) => {
    setIndex((prev) => prev + delta)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleIndexChange(1)
    }, 3000)
    return () => clearInterval(interval)
  }, [index])

  return (
    <div className="flex flex-row items-center justify-center gap-4 w-[60vw] md:min-w-[60vw] sm:min-w-[80vw]">
      <span className={styles.arrow} onClick={() => handleIndexChange(-1)}>
        &lt;
      </span>
      <LazyMotion features={domAnimation}>
        <AnimatePresence initial={false} mode="wait">
          <Message
            key={`${index}-${
              descriptions[Math.abs(index) % descriptions.length]
            }`}
            className={cn(styles.p)}
            message={descriptions[Math.abs(index) % descriptions.length]}
          />
        </AnimatePresence>
      </LazyMotion>
      <span className={styles.arrow} onClick={() => handleIndexChange(1)}>
        &gt;
      </span>
    </div>
  )
}
// Hi, I&apos;m Adam. I&apos;m a fullstack software engineer based in New
// York City. My expertise is in building scalable and maintainable web
// applications using React and NextJs.
