'use client'

import React from 'react'

import dayjs from '@/utils/dayjs'

const editURL = (slug: string) =>
  `https://github.com/csiber/promnet.hu/blob/main/src/content/blog/${slug}.mdx?plain=1`

type FooterProps = {
  slug: string
  modifiedTime: string
}

const Footer = (props: FooterProps) => {
  const { slug, modifiedTime } = props

  const [formattedDate, setFormattedDate] = React.useState('')

  React.useEffect(() => {
    setFormattedDate(dayjs(modifiedTime).format('YYYY.MM.DD'))
  }, [modifiedTime])

  return (
    <div className='my-8 flex w-full items-center justify-between py-4 text-sm'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={editURL(slug)}
        className='text-muted-foreground transition-colors duration-200 hover:text-foreground'
      >
        Szerkesztés a GitHUB-on
      </a>
      <div className='text-muted-foreground'>
        Utoljára frissítve: {formattedDate || '----/--/--'}
      </div>
    </div>
  )
}

export default Footer
