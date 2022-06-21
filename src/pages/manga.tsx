import { IonContent, IonList, IonPage, IonSpinner, useIonViewWillEnter } from '@ionic/react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { api } from '../services/api'
import type { Data as Manga, MangaDetailsResponse } from '../types'
import type { Chapter, ChapterListResponse } from '../types/chapter'
import './manga.css'

type Params = {
  mangaId: string
}

type AdditionalInfo = { coverArtUrl: string; author?: string }

export function MangaPage() {
  const params = useParams<Params>()
  const [manga, setManga] = useState<Manga>()
  const [additionalInfo, setAdditionalInfo] = useState<AdditionalInfo>()
  const [chapterList, setChapterList] = useState<Chapter[]>()

  useIonViewWillEnter(() => {
    if (!params) return

    api
      .get<MangaDetailsResponse>(
        `/manga/${params.mangaId}?includes[]=cover_art&includes[]=author`
      )
      .then(response => {
        const manga = response.data.data

        const coverArt = manga?.relationships.find(
          relation => relation.type === 'cover_art'
        ) // MORRA API DE M&RD@

        const authorRelation = manga?.relationships.find(
          relation => relation.type === 'author'
        ) // MORRA API DE M&RD@

        const coverArtUrl = `https://uploads.mangadex.org/covers/${manga?.id}/${coverArt?.attributes?.fileName}.512.jpg`
        const author = authorRelation?.attributes?.name

        setManga(manga)
        setAdditionalInfo({ coverArtUrl, author })
      })
  }, [params])

  useIonViewWillEnter(() => {
    if (!params) return

    api
      .get<ChapterListResponse>(`/manga/${params.mangaId}/feed`)
      .then(response => {
        const sorted = response.data.data.sort((a, b) => {
          return Number(a.attributes.chapter) - Number(b.attributes.chapter)
        })

        setChapterList(sorted)
      })
  }, [params.mangaId])

  console.log(manga)

  return (
    <IonPage>
      <IonContent>
        {manga?.attributes.title.en ? <div className='manga-page'>
          <header className='manga-page__header'>
            <img
              src={additionalInfo?.coverArtUrl}
              alt={manga?.attributes.title.en}
            />
            <h1>{manga?.attributes.title.en}</h1>
          </header>
          <p>{manga?.attributes.description.en}</p>

          <div className='info'>
            <span>Status:</span> {manga?.attributes.status}
          </div>
          <div className='info'>
            <span>State:</span> {manga?.attributes.state}
          </div>
          <div className='info'>
            <span>Author:</span> {additionalInfo?.author}
          </div>
          <IonList className='tags'>
            {manga?.attributes.tags.map(tag => {
              return (
                <span className='tag' key={tag.id}>
                  {tag.attributes.name.en}
                </span>
              )
            })}
          </IonList>
          <IonList className='chapter-list'>
            {chapterList?.map(chapter => {
              return (
                <a key={chapter.id} className='chapter-list__item'>
                  <h2>{chapter.attributes.chapter}</h2>
                  <span>{chapter.attributes.createdAt}</span>
                </a>
              )
            })}
          </IonList>
        </div> : <IonSpinner name="crescent" class="absolute-center" />}
      </IonContent>
    </IonPage>
  )
}
