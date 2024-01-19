'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import cn from '@/utils/cn'

import { buttonVariants } from '../ui'
import CodingHours from './coding-hours'
import Connect from './connect'
import FavouriteFramework from './favourite-framework'
import LocationCard from './location-card'
import StacksCard from './stacks-card'

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

const AboutMe = () => {
  const cardsRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5
      }}
      className='relative my-24 will-change-[transform,opacity]'
    >
      <motion.h2
        className='text-center font-title text-3xl font-bold sm:text-4xl'
        initial={{
          y: 30,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        Rólam
      </motion.h2>
      <motion.div
        className='mt-12 grid gap-4 md:grid-cols-2'
        initial={{
          y: 40,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        <div className='grid gap-4'>
          <LocationCard />
          <StacksCard />
        </div>
        <div className='grid gap-4'>
          <Connect />
          <div className='grid gap-4 [@media(min-width:450px)]:grid-cols-2'>
            <CodingHours />
            <FavouriteFramework />
          </div>
        </div>
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
        <Link
          href='/about'
          className={cn(buttonVariants({ variant: 'outline' }), 'rounded-xl')}
        >
          Tudj meg többet rólam
        </Link>
      </div>
    </motion.div>
  )
}

export default AboutMe
