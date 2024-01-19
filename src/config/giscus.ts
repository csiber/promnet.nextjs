import { type GiscusProps } from '@giscus/react'

import { env } from '@/env'

const GISCUS_CONFIG: GiscusProps = {
  repo: env.NEXT_PUBLIC_GISCUS_REPO,
  repoId: env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
  category: env.NEXT_PUBLIC_GISCUS_CATEGORY,
  categoryId: env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  mapping: 'pathname',
  reactionsEnabled: '1',
  theme: 'dark',
  emitMetadata: '1',
  inputPosition: 'bottom',
  lang: 'hu',
  loading: 'eager'
} as const

export default GISCUS_CONFIG
