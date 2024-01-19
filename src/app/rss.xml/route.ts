import { NextResponse } from 'next/server'
import RSS from 'rss'

import site from '@/config/site'
import getAllPosts from '@/lib/mdx'

export const GET = () => {
  const feed = new RSS({
    title: 'PromNET.hu',
    description: 'Internetes szolgáltatások',
    site_url: `${site.url}`,
    feed_url: `${site.url}/rss.xml`,
    language: 'hu-HU',
    image_url: `${site.url}/images/og.png`
  })

  const posts = getAllPosts()

  for (const post of posts) {
    const { title, summary, date, slug } = post

    feed.item({
      title,
      url: `${site.url}/blog/${slug}`,
      date,
      description: summary,
      author: 'Polyák Csaba'
    })
  }

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
