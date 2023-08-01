import React from 'react'
import type { DataPage } from '@types'
import { HomeHeader, Presentation } from "@components"

type SectionFactoryProps = {
  data: DataPage
}

export const SectionsFactory = ({ data }: SectionFactoryProps) => (
  <>
    {data.blocks.map(b => {
      switch (b.type) {
        case 'general_header':
          return <HomeHeader key={b.title} title={b.title} {...b.options || {}} />
        case 'presentation':
          return <Presentation key={b.title} title={b.title} {...b.options || {}} />
        case 'blocks':
        case 'logos':
        case 'main_header':
        case 'testimonials':
        case 'three_blocks':
        default:
          return null
      }
    })}
  </>
)
