import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
} from '@ionic/react'

import { MangaResponse } from '../types'
import { MangaCard } from './MangaCard'

import './MangaList.css'

type MangaListProps = {
  onFetchNext: (ev: any) => Promise<void>
  threshold: string
  infiniteScrollDisabled: boolean
  mangaList?: MangaResponse
}

export function MangaList({
  infiniteScrollDisabled,
  onFetchNext,
  threshold,
  mangaList,
}: MangaListProps) {
  return (
    <IonContent>
      <IonList className='manga-list'>
        {mangaList &&
          mangaList.data.map(manga => {
            const coverArt = manga.relationships.find(
              relation => relation.type === 'cover_art'
            ) // MORRA API DE M&RD@

            const coverArtUrl = `https://uploads.mangadex.org/covers/${manga.id}/${coverArt?.attributes?.fileName}.512.jpg`

            return (
              <MangaCard
                key={manga.id}
                id={manga.id}
                src={coverArtUrl}
                title={manga.attributes.title.en}
              />
            )
          })}
        <IonInfiniteScroll
          onIonInfinite={onFetchNext}
          threshold={threshold}
          disabled={infiniteScrollDisabled}
        >
          <IonInfiniteScrollContent loadingSpinner='bubbles'></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonList>
    </IonContent>
  )
}
