import type { Metadata, ResolvingMetadata } from 'next'

import Mdx from '@/components/mdx'
import PageTitle from '@/components/page-title'
import site from '@/config/site'
import getPage from '@/utils/get-page'

export const runtime = 'edge'
const title = 'Rólam'
const description = 'Kódolás nélkül a világ csak egy ötletes ötlet.'

type AboutPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: AboutPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/about`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/about`,
      type: 'profile',
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

const AboutPage = () => {
  const page = getPage('about')

  return (
    <>
      <PageTitle
        title='Rólam'
        description='👋 Szia! Polyák Csaba vagyok, informatikus.'
      />
      <Mdx code={page.body.code} />
    </>
  )
}

export default AboutPage
