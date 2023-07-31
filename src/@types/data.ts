export type Data = {
  page: DataPage[]
}

export type DataPage = {
  title: "Home"
  blocks: DataBlock[]
}

export type DataBlock = {
  type: DataBlockType
  title: string
  options?: DataBlockOptions
}

export type DataBlockType =
  | "general_header"
  | "main_header"
  | "presentation"
  | "blocks"
  | "three_blocks"
  | "logos"
  | "testimonials"

export type DataBlockOptions = {
  isDark?: boolean
  isRevert?: boolean
  description?: string
  image?: string
  cta?: {
    "cta-url"?: string
    "cta-label"?: string
  }
}
