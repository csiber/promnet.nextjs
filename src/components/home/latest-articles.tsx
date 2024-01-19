'use client'

import { IconArrowUpRight, IconPencil } from '@tabler/icons-react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import getAllPosts from '@/lib/mdx'
import { type BlogPostCore, type Likes, type Views } from '@/types'
import cn from '@/utils/cn'
import dayjs from '@/utils/dayjs'

import { buttonVariants } from '../ui'

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

const LatestArticles = () => {
  const projectsRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(projectsRef, { once: true, margin: '-100px' })
  const posts = getAllPosts({
    limit: 2
  })

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={projectsRef}
      transition={{
        duration: 0.5
      }}
      className='my-24 will-change-[transform,opacity]'
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
        Legutóbbi bejegyzések
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
        {posts.map((post) => (
          <ArticleCard key={post._id} {...post} />
        ))}
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
        <Link
          href='/blog'
          className={cn(
            buttonVariants({
              variant: 'outline'
            }),
            'rounded-xl'
          )}
        >
          Összes bejegyzés megtekintése
        </Link>
      </div>
    </motion.div>
  )
}

type ArticleCardProps = BlogPostCore

const ArticleCard = (props: ArticleCardProps) => {
  const { _id, slug, title, summary, date } = props
  const [formattedDate, setFormattedDate] = React.useState('')
  const { data: viewsData, isLoading: viewsIsLoading } = useSWR<Views>(
    `/api/views?slug=${slug}`,
    fetcher
  )
  const { data: likesData, isLoading: likesIsLoading } = useSWR<Likes>(
    `/api/likes?slug=${slug}`,
    fetcher
  )

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format('LL'))
  }, [date])

  return (
    <Link
      key={_id}
      href={`/blog/${slug}`}
      className='group rounded-xl bg-background-lighter/60 p-2 shadow-card-border transition-colors duration-200 hover:bg-background-lighter'
    >
      <div className='flex items-center justify-between p-4'>
        <div className='flex items-center gap-3'>
          <IconPencil size={18} />
          <h2 className='font-light'>Blog</h2>
        </div>
        <IconArrowUpRight
          size={18}
          className='opacity-0 transition-opacity duration-200 group-hover:opacity-100'
        />
      </div>
      <Image
        width={1200}
        height={630}
        src={`/images/blog/${slug}/cover.png`}
        alt={title}
        className='rounded-xl'
      />
      <div className='flex items-center justify-between gap-2 px-2 pt-4 text-sm text-zinc-500'>
        {formattedDate || '--'}
        <div className='flex gap-2'>
          {likesIsLoading ? '--' : <div>{likesData?.likes} likes</div>}
          <div>&middot;</div>
          {viewsIsLoading ? '--' : <div>{viewsData?.views} views</div>}
        </div>
      </div>
      <div className='flex flex-col px-2 py-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5'>
        <h3 className='font-title text-2xl font-bold'>{title}</h3>
        <p className='mt-2 text-muted-foreground'>{summary}</p>
      </div>
    </Link>
  )
}

export default LatestArticles
