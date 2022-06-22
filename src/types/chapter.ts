export interface ChapterListResponse {
  result: string
  response: string
  data: Chapter[]
  limit: number
  offset: number
  total: number
}

export interface Chapter {
  id: string
  type: string
  attributes: Attributes
  relationships: Relationship[]
}

export interface Attributes {
  volume: any
  chapter: string
  title: string
  translatedLanguage: string
  externalUrl: string
  publishAt: string
  readableAt: string
  createdAt: string
  updatedAt: string
  pages: number
  version: number
}

export interface Relationship {
  id: string
  type: string
}

export interface ChapterPagesResponse {
  result: string
  baseUrl: string
  chapter: ChapterPages
}

export interface ChapterPages {
  hash: string
  data: string[]
  dataSaver: string[]
}
