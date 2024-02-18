'use client'
import AWS from '@/public/images/AWS.svg'
import Azure from '@/public/images/Azure.svg'
import Bun from '@/public/images/Bun.svg'
import Django from '@/public/images/Django.svg'
import Docker from '@/public/images/Docker.svg'
import GitHubActions from '@/public/images/GitHub Actions.svg'
import GCP from '@/public/images/Google Cloud.svg'
import Java from '@/public/images/Java.svg'
import JavaScript from '@/public/images/JavaScript.svg'
import Kubernetes from '@/public/images/Kubernetes.svg'
import NextJS from '@/public/images/NextJs.svg'
import NodeJs from '@/public/images/NodeJs.svg'
import Python from '@/public/images/Python.svg'
import React from '@/public/images/React.svg'
import Redux from '@/public/images/Redux.svg'
import TypeScript from '@/public/images/TypeScript.svg'
import Webpack from '@/public/images/Webpack.svg'

import cn from '@/utils/cn'
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'
import { MouseEventHandler, useEffect, useState, useMemo } from 'react'

const styles = {
  icon: 'w-8 h-8',
  iconContainer: 'bg-slate-100 rounded-lg p-2',
}

export default function TechList() {
  const svgList = useMemo<
    Record<string, React.FC<Partial<SVGSVGElement>> | undefined>
  >(() => {
    return {
      AWS,
      Azure,
      Bun,
      Django,
      Docker,
      GitHubActions,
      GCP,
      Java,
      JavaScript,
      Kubernetes,
      NextJS,
      NodeJs,
      Python,
      React,
      Redux,
      TypeScript,
      Webpack,
    }
  }, [])

  const [show, setShow] = useState<string[]>(Object.keys(svgList))

  const handleIconClick: MouseEventHandler = (e) => {
    console.log('clicked', e.currentTarget.id)
    const name = e.currentTarget.id
    // setDeleted((prev) => [...prev, name])
    setShow((prev) => prev.filter((item) => item !== name))

    Promise.resolve(
      setTimeout(() => {
        setShow((prev) => [...prev, name])
      }, 2000)
    )
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="grid grid-cols-5 gap-8 py-4 "
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        initial="hidden"
        animate="show"
      >
        {show.map((name: string, i: number) => {
          const Icon = svgList[name]

          return (
            <m.div
              key={`icon${i}`}
              onClick={handleIconClick}
              id={name}
              className={cn(
                styles.iconContainer,
                'shadow-lg shadow-slate-800 hover:scale-110 transition-transform duration-200 ease-in-out'
              )}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              layout
            >
              {Icon && (
                <Icon key={`svg${i}`} id={name} className={styles.icon} />
              )}
            </m.div>
          )
        })}
      </m.div>
    </LazyMotion>
  )
}
