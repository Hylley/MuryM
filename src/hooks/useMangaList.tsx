import { useEffect, useRef, useState } from 'react'
import { api } from '../services/api'
import { MangaResponse } from '../types'

const LIMIT = 20

export function useMangaList() {
  const [mangaList, setMangaList] = useState<MangaResponse>()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const offset = useRef(0)

  async function fetchNext() {
    offset.current += LIMIT + 7 // <- por algum motivo a api sempre repete os ultimos 7 resultados, gambiarra pra arrumar <-

    console.log(offset.current)

    const response = await api.get<MangaResponse>(
      '/manga?includes[]=cover_art',
      {
        params: {
          offset: offset.current,
          limit: LIMIT,
        },
      }
    )

    setMangaList(prev => ({
      ...response.data,
      data: prev!.data.concat(response.data.data),
    }))

    if (offset.current >= response.data.total) {
      setHasMore(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)

    api
      .get<MangaResponse>('/manga?includes[]=cover_art', {
        params: {
          offset: offset.current,
          limit: LIMIT,
        },
      })
      .then(response => {
        setMangaList(response.data)
        console.log(response.data.data.length)
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  }, [])

  return { mangaList, error, isLoading, fetchNext, hasMore }
}
