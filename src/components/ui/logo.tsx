import Image from 'next/image'
import React from 'react'

const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} style={{ display: 'flex', alignItems: 'center' }}>
    <Image
      src='/images/cloud.gif'
      alt='Cloud'
      width={28}
      height={28}
      style={{ marginRight: '2px' }}
    />
    <span style={{ fontWeight: 'bold' }}>
      Prom<span style={{ color: 'lightblue' }}>NET</span>
    </span>
  </div>
)

export { Logo }
