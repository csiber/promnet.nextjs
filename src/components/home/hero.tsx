'use client'

import { motion, useAnimate } from 'framer-motion'
import React from 'react'

import Image from '@/components/mdx/image'

const TEXTS = [
  {
    text: 'szuper',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
  },
  {
    text: 'lenyűgöző',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]'
  },
  {
    text: 'fantasztikus',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]'
  },
  {
    text: 'pörgős',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
  }
]

const Hero = () => {
  const [scope, animate] = useAnimate()

  React.useEffect(() => {
    animate(
      [
        [scope.current, { y: '0%' }, { duration: 0 }],
        [scope.current, { y: '-25%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-50%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-75%' }, { duration: 0.3, at: '+1.3' }]
      ],
      {
        repeat: Number.POSITIVE_INFINITY
      }
    )
  }, [animate, scope])

  return (
    <div className='space-y-6 md:my-16'>
      <div className='flex flex-col-reverse gap-8 md:flex-row md:justify-between'>
        <motion.div
          className='flex flex-col gap-4 will-change-[transform,opacity] md:max-w-xl'
          initial={{
            y: 40,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5
          }}
        >
          <h1 className='bg-gradient-to-b from-white via-white/90 to-white/70 to-90% bg-clip-text font-title text-2xl font-bold leading-9 text-transparent sm:text-4xl sm:leading-[3.5rem]'>
            Polyák Csaba vagyok, DEVOPS fejlesztő és{' '}
            <div className='inline-grid h-9 overflow-hidden sm:h-[3.5rem]'>
              <div ref={scope}>
                {TEXTS.map(({ text, className }, index) => (
                  <div className={className} key={index}>
                    {text}
                  </div>
                ))}
              </div>
            </div>{' '}
            weboldalakkal és szerverekkel foglalkozom.
          </h1>
          <div className='text-sm text-muted-foreground'>
            Keress bátran elérhetőségeimen!
          </div>
        </motion.div>
        <motion.div
          className='relative size-20 md:size-28'
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 0.3
          }}
        >
          <Image
            src='/images/cloud.gif'
            className='rounded-full'
            width={112}
            height={112}
            alt='cloud'
            lazy={false}
          />
          <div className='absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-0 blur-2xl md:opacity-50' />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
