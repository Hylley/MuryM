import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonVirtualScroll,
} from '@ionic/react'
import { useState } from 'react'
import { useMangaList } from '../hooks/useMangaList'
import { MangaCard } from './MangaCard'

import './MangaList.css'

export function MangaList() {
  const { error, isLoading, mangaList, fetchNext, hasMore } = useMangaList()
  const [infiniteScrollDisabled, setInfiniteScrollDisabled] = useState(false)

  async function handleFetchNext(ev: any) {
    if (!hasMore) setInfiniteScrollDisabled(true)

    await fetchNext()
    ev.target.complete()
  }

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
          onIonInfinite={ev => handleFetchNext(ev)}
          threshold='60px'
          disabled={infiniteScrollDisabled}
        >
          <IonInfiniteScrollContent loadingSpinner='bubbles'></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonList>
    </IonContent>
  )
}
