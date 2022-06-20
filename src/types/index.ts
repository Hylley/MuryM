export interface MangaResponse {
  result: string
  response: string
  data: Data[]
  limit: number
  offset: number
  total: number
}

export interface MangaDetailsResponse {
  result: string
  response: string
  data: Data
}
export interface Data {
  id: string
  type: string
  attributes: MangaAttributes
  relationships: Relationship[]
}

export interface MangaAttributes {
  title: Title
  altTitles: AltTitle[]
  description: Description
  isLocked: boolean
  links: Links
  originalLanguage: string
  lastVolume: any
  lastChapter: any
  publicationDemographic: any
  status: string
  year: any
  contentRating: string
  tags: Tag[]
  state: string
  chapterNumbersResetOnNewVolume: boolean
  createdAt: string
  updatedAt: string
  version: number
  availableTranslatedLanguages: string[]
}

export interface Title {
  en: string
}

export interface AltTitle {
  zh: string
}

export interface Description {
  en: string
}

export interface Links {
  engtl: string
}

export interface Tag {
  id: string
  type: string
  attributes: TagAttributes
  relationships: any[]
}

export interface TagAttributes {
  name: Name
  description: any[]
  group: string
  version: number
}

export interface Name {
  en: string
}

export interface Relationship {
  id: string
  type: string
  attributes?: CoverArtAttributes
}

export interface CoverArtAttributes {
  description: string
  volume: any
  fileName: string
  locale: string
  createdAt: string
  updatedAt: string
  version: number
}
