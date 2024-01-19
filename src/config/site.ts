import { type IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

type Site = {
  url: string
  title: string
  name: string
  keywords: string[]
  titleTemplate: string
  description: string
  githubUsername: string
  favicons: IconDescriptor[]
}

const prodBaseURL = 'https://promnet-hu.vercel.app'
const devBaseURL = 'http://localhost:3000'

const site: Site = {
  url: process.env.NODE_ENV === 'production' ? prodBaseURL : devBaseURL,
  title: 'PromNET - Internetes szolgáltatások',
  name: 'Polyák Csaba E.V.',
  keywords: [
    'csiber',
    'webtárhely',
    'domain',
    'webfejlesztés',
    'játékszerver',
    'szerviz'
  ],
  titleTemplate: '| PromNET.hu',
  description: 'Polyák Csaba E.V. • DEVOPS • Full Stack Developer',
  githubUsername: 'csiber',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png'
    }
  ]
}

export default site
