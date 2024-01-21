import type { Metadata, ResolvingMetadata } from 'next'

import Mdx from '@/components/mdx'
import PageTitle from '@/components/page-title'
import site from '@/config/site'
import getPage from '@/utils/get-page'

export const runtime = 'edge'
const title = 'Kapcsolat'
const description = 'Vállalkozás adatai, mert fontos!'

type ContactPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: ContactPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/contact`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/contact`,
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

const ContactPage = () => {
  const page = getPage('contact')

  return (
    <>
      <PageTitle
        title='Kapcsolat'
        description='Vállalkozás adatai, mert fontos!'
      />
      <Mdx code={page.body.code} />
    </>
  )
}

export default ContactPage
