'use client'

import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons'
import {
  IconCode,
  IconCommand,
  IconLink,
  IconLogin,
  IconLogout
} from '@tabler/icons-react'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { useSignInModal } from '@/store/use-sign-in-modal'

type Groups = Array<{
  name: string
  actions: Array<{
    title: string
    icon: React.ReactNode
    onSelect: () => void | Promise<void>
  }>
}>

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false)
  const [copy] = useCopyToClipboard()
  const { status } = useSession()
  const { setOpen: setSignInModalOpen } = useSignInModal()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((value) => !value)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const openLink = React.useCallback((url: string) => {
    setOpen(false)
    window.open(url, '_blank', 'noopener')
  }, [])

  const groups: Groups = [
    {
      name: 'Fiók',
      actions: [
        ...(status === 'authenticated'
          ? [
              {
                title: 'Kijelentkezés',
                icon: <IconLogout />,
                onSelect: () => signOut()
              }
            ]
          : [
              {
                title: 'Belépés',
                icon: <IconLogin />,
                onSelect: () => {
                  setOpen(false)
                  setSignInModalOpen(true)
                }
              }
            ])
      ]
    },
    {
      name: 'Általános',
      actions: [
        {
          title: 'Link másolása',
          icon: <IconLink />,
          onSelect: async () => {
            setOpen(false)

            await copy({
              text: window.location.href,
              successMessage: (
                <div className='flex flex-col'>
                  <div>Copied</div>
                  <div className='text-sm text-muted-foreground'>
                    Oszd meg barátaiddal!
                  </div>
                </div>
              )
            })
          }
        },
        {
          title: 'PromSHOP',
          icon: <IconCode />,
          onSelect: () => openLink('https://promshop.hu')
        }
      ]
    },
    {
      name: 'Közösség',
      actions: [
        {
          title: 'GitHub',
          icon: <SiGithub />,
          onSelect: () => openLink('https://github.com/csiber')
        },
        {
          title: 'Facebook',
          icon: <SiFacebook />,
          onSelect: () => openLink('https://www.facebook.com/csiber/')
        },
        {
          title: 'Instagram',
          icon: <SiInstagram />,
          onSelect: () => openLink('https://instagram.com/csiber/')
        },
        {
          title: 'X',
          icon: <SiX />,
          onSelect: () => openLink('https://x.com/csiber')
        },
        {
          title: 'YouTube',
          icon: <SiYoutube />,
          onSelect: () => openLink('https://youtube.com/@csiber')
        }
      ]
    }
  ]

  return (
    <>
      <Button
        variant='ghost'
        className='size-9 p-0'
        onClick={() => setOpen(true)}
        type='button'
        aria-label='Parancs menü megnyitása'
      >
        <span className='sr-only'>Parancs menü megnyitása</span>
        <IconCommand size={20} />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Ird be mit keresel...' />
        <CommandList>
          <CommandEmpty>Nem találtam semmit.</CommandEmpty>
          {groups.map((group, i) => (
            <React.Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.actions.map((action) => (
                  <CommandItem key={action.title} onSelect={action.onSelect}>
                    {action.icon}
                    {action.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              {i !== groups.length - 1 && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default CommandMenu
