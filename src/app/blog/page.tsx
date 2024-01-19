import type { Metadata, ResolvingMetadata } from 'next'

import FilteredPosts from '@/components/filtered-posts'
import PageTitle from '@/components/page-title'
import site from '@/config/site'
import getAllPosts from '@/lib/mdx'

export const runtime = 'edge'
const title = 'Blog'
const description =
  'Az egyéni weboldalam és blogom arra szolgál, hogy megosszam gondolataimat különböző témákban, beleértve oktatóanyagokat, jegyzeteket és személyes tapasztalatokat is. Kérlek, böngészd át az oldalamat, ahol találhatsz olyan webfejlesztési forrásokat is, melyek engem inspiráltak.'

type BlogPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/blog`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/blog`,
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

const BlogPage = () => {
  const posts = getAllPosts()

  return (
    <>
      <PageTitle
        title='Blog'
        description={`Eddig összesen ${posts.length} cikket írtam a blogomra. A cikkeket címük alapján keresve megtalálhatod a lenti keresődobozban..`}
      />
      <FilteredPosts posts={posts} />
    </>
  )
}

export default BlogPage
