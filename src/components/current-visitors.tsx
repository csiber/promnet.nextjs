'use client'

import useSWR from 'swr'

import { Skeleton } from '@/components/ui'
import { env } from '@/env'
import fetcher from '@/lib/fetcher'
import { type Analytics } from '@/types'

const CurrentVisitors = () => {
  const { data } = useSWR<Analytics>('/api/analytics', fetcher, {
    refreshInterval: 30_000 // refresh every 30 seconds
  })

  return (
    <a
      href={env.NEXT_PUBLIC_UMAMI_WEBSITE_SHARE_URL}
      className='flex items-center justify-center gap-2'
      rel='noopener noreferrer'
      target='_blank'
      aria-label={
        data
          ? `${data.visitors} current visitor${data.visitors === 1 ? '' : 's'}`
          : 'Loading'
      }
    >
      {data ? (
        <>
          <span className='relative flex size-3'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
            <span className='relative inline-flex size-3 rounded-full bg-green-500' />
          </span>
          {data.visitors} aktuális látogató{data.visitors === 1 ? '' : '.'}
        </>
      ) : (
        <Skeleton
          className='h-5 w-32 rounded-md'
          data-testid='skeleton-loader'
        />
      )}
    </a>
  )
}

export default CurrentVisitors
