export type Blog = {
  title: string
  description: string
  dir: string
  extention: string
  fullscreen: boolean
  imgsrc: string
  path: string
  position: number
  slug: string
  toc: Array<Object>
  version: number
  body: object
  category: string
  tags: Array<string>
  createdAt: string
  updatedAt: string
}

export type BlogList = Blog[]