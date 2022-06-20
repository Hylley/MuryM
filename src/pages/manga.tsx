import { IonContent, IonPage, IonTitle } from '@ionic/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { api } from '../services/api'
import { Data as Manga, MangaDetailsResponse } from '../types'

type Params = {
  mangaId: string
}

export function MangaPage() {
  const params = useParams<Params>()
  const [manga, setManga] = useState<Manga>()
  const [coverArt, setCoverArt] = useState('')

  useEffect(() => {
    api
      .get<MangaDetailsResponse>(
        `/manga/${params.mangaId}?includes[]=cover_art`
      )
      .then(response => {
        const manga = response.data.data

        const coverArt = manga?.relationships.find(
          relation => relation.type === 'cover_art'
        ) // MORRA API DE M&RD@

        const coverArtUrl = `https://uploads.mangadex.org/covers/${manga?.id}/${coverArt?.attributes?.fileName}.512.jpg`

        setManga(manga)
        setCoverArt(coverArtUrl)
      })
  }, [params])

  useEffect(() => {
    api
      .get<MangaDetailsResponse>(`/manga/${params.mangaId}/feed`)
      .then(response => {
        console.log(response.data.data)
      })
  }, [params.mangaId])

  return (
    <IonPage>
      <IonContent>
        <img src={coverArt} alt={manga?.attributes.title.en} />
        <h1>{manga?.attributes.title.en}</h1>
        <p>{manga?.attributes.description.en}</p>
        {manga?.attributes.tags.map(tag => {
          return <span key={tag.id}>{tag.attributes.name.en}</span>
        })}
      </IonContent>
    </IonPage>
  )
}
