import { IconPinnedFilled } from '@tabler/icons-react'
import React from 'react'

const Pinned = () => {
  return (
    <div className='relative mb-12 overflow-hidden rounded-lg px-4 py-6'>
      <div className='absolute inset-0 -z-10 rounded-lg bg-[linear-gradient(119deg,rgb(75,87,196)0%,rgb(31,133,206)30%,rgb(125,20,166)42%,rgb(134,15,60)63%,rgb(18,8,45)73%)] opacity-80' />
      <div className='mb-3 flex items-center gap-2'>
        <IconPinnedFilled className='rotate-45' />
        Rögzítve
      </div>
      <div>
        Halihó! Köszönöm, hogy meglátogattad a honlapomat. Ha van egy perced,
        szeretném hallani a gondolataidat a munkámmal kapcsolatban. Kérlek,
        jelentkezzen be a saját Google vagy GitHub-fiókoddal a megjegyzés
        írásához. Köszönöm szépen! :)
      </div>
    </div>
  )
}

export default Pinned
