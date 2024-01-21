import NextLink from 'next/link'

import { FOOTER_LINKS, type Link } from '@/config/links'

const FooterLink = (props: Link) => {
  const { title, href } = props

  if (href.startsWith('/')) {
    return (
      <NextLink
        href={href}
        className='text-muted-foreground transition-colors duration-200 hover:text-foreground'
      >
        {title}
      </NextLink>
    )
  }

  return (
    <a
      href={href}
      className='text-muted-foreground transition-colors duration-200 hover:text-foreground'
      target='_blank'
      rel='noopener noreferrer'
    >
      {title}
    </a>
  )
}

const Footer = () => {
  return (
    <footer className='relative mx-auto mb-6 flex max-w-5xl flex-col rounded-2xl bg-background/30 p-8 shadow-sm saturate-100 backdrop-blur-[10px]'>
      <div className='mt-12 grid grid-cols-2 sm:grid-cols-3'>
        {FOOTER_LINKS.map((list) => (
          <div
            key={list.id}
            className='mb-10 flex flex-col items-start gap-4 pr-4'
          >
            {list.links.map((link) => (
              <FooterLink key={link.title} {...link} />
            ))}
          </div>
        ))}
      </div>
      <div className='mt-20 flex items-center justify-between text-sm'>
        <div>
          &copy; {new Date().getFullYear()} PromNET.hu - Internetes
          szolgáltatások - Polyák Csaba E.V.
        </div>
      </div>
    </footer>
  )
}

export default Footer
