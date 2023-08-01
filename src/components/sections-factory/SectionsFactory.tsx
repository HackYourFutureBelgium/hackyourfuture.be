import React from 'react'
import type { DataPage, DataBlockType } from '../../@types/data'
import HomeHeader from "../page-sections/home-header"
import Presentation from "../page-sections/presentation"

type SectionFactoryProps = {
  data: DataPage
}

const SectionsFactory = ({ data }: SectionFactoryProps) => {
  console.log('data', data)
  return (
    <>
      {data.blocks.map(b => {
        switch (b.type) {
          case 'general_header':
            return <HomeHeader key={b.title} title={b.title} />
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
}

export default SectionsFactory
