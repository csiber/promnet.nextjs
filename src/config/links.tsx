import {
  type IconType,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons'
import {
  IconChartBar,
  IconDeviceDesktop,
  IconFlame,
  IconMessageCircle,
  IconPencil,
  IconUserCircle
} from '@tabler/icons-react'

export type Link = {
  href: string
  title: string
}

type HeaderLinks = Array<{
  icon: React.ReactNode
  href: string
  text: string
}>

type FooterLinks = Array<{
  id: number
  links: Link[]
}>

type SocialLinks = Array<{
  href: string
  title: string
  icon: IconType
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <IconPencil size={14} />,
    href: 'https://promnetszerviz.hu',
    text: 'Szerviz'
  },
  {
    icon: <IconDeviceDesktop size={14} />,
    href: 'https://promshop.hu',
    text: 'Webshop'
  },
  {
    icon: <IconMessageCircle size={14} />,
    href: '/guestbook',
    text: 'Vendégkönyv'
  },
  {
    icon: <IconChartBar size={14} />,
    href: '/dashboard',
    text: 'Vezérlőpult'
  },
  {
    icon: <IconFlame size={14} />,
    href: '/projects',
    text: 'Projektek'
  },
  {
    icon: <IconUserCircle size={14} />,
    href: '/about',
    text: 'Rólam'
  },
  {
    icon: <IconDeviceDesktop size={14} />,
    href: '/contact',
    text: 'Kapcsolat'
  }
]

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      {
        href: '/',
        title: 'Otthon'
      },
      {
        href: '/blog',
        title: 'Blog'
      },
      {
        href: '/about',
        title: 'Rólam'
      },
      {
        href: '/dashboard',
        title: 'Vezérlöpult'
      }
    ]
  },
  {
    id: 2,
    links: [
      {
        href: '/guestbook',
        title: 'Vendégkönyv'
      },
      {
        href: '/projects',
        title: 'Projektek'
      },
      {
        href: '/contact',
        title: 'Kapcsolat'
      },
      {
        href: 'https://promshop.hu',
        title: 'Webshop'
      }
    ]
  },
  {
    id: 3,
    links: [
      {
        href: 'https://www.facebook.com/csiber/',
        title: 'Facebook'
      },
      {
        href: 'https://www.instagram.com/csiber/',
        title: 'Instagram'
      },
      {
        href: 'https://github.com/csiber',
        title: 'GitHub'
      },
      {
        href: 'https://www.youtube.com/@csiber',
        title: 'YouTube'
      }
    ]
  }
]

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: 'https://github.com/csiber',
    title: 'GitHub',
    icon: SiGithub
  },
  {
    href: 'https://www.facebook.com/csiber/',
    title: 'Facebook',
    icon: SiFacebook
  },
  {
    href: 'https://www.instagram.com/csiber/',
    title: 'Instagram',
    icon: SiInstagram
  },
  {
    href: 'https://x.com/csiber',
    title: 'X',
    icon: SiX
  },
  {
    href: 'https://www.youtube.com/@csiber',
    title: 'YouTube',
    icon: SiYoutube
  }
]
