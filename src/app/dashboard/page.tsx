import type { Metadata, ResolvingMetadata } from 'next'

import PageTitle from '@/components/page-title'
import site from '@/config/site'

import Items from './items'

export const runtime = 'edge'
const title = 'Vezérlőpult'
const description =
  'Ez az én személyes irányítópultom, amely kiszolgáló nélküli függvényként telepített Next.js API-útvonalakkal készült. Ezzel az irányítópulttal különféle mutatókat követek nyomon olyan platformokon, mint a YouTube, a GitHub és egyebek.'

type DashboardPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: DashboardPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/dashboard`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/dashboard`,
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

const DashboardPage = () => {
  return (
    <>
      <PageTitle
        title='Vezérlőpult'
        description='Ez az én személyes irányítópultom, amely kiszolgáló nélküli függvényként telepített Next.js API-útvonalakkal készült. Ezzel az irányítópulttal különféle mutatókat követek nyomon olyan platformokon, mint a YouTube, a GitHub és egyebek.'
      />
      <Items />
    </>
  )
}

export default DashboardPage
