import { allProjects } from 'contentlayer/generated'
import type { Metadata, ResolvingMetadata } from 'next'

import PageTitle from '@/components/page-title'
import ProjectCards from '@/components/project-cards'
import site from '@/config/site'

export const runtime = 'edge'
const title = 'Projektek'
const description =
  'Lista a munkáimról, folyamatosan töltöm fel! Sajnos néhány régebbi már nem elérhetö :('

type ProjectsPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: ProjectsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/projects`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/projects`,
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

const ProjectsPage = () => {
  return (
    <>
      <PageTitle
        title='Projektek'
        description='Lista a munkáimról, folyamatosan töltöm fel! Sajnos néhány régebbi már nem elérhetö :('
      />
      <ProjectCards projects={allProjects} />
    </>
  )
}

export default ProjectsPage
