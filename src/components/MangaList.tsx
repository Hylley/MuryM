import { IonContent } from '@ionic/react'
import { useMangaList } from '../hooks/useMangaList'
import { MangaCard } from './MangaCard'

import './MangaList.css'

export function MangaList() {
  const { error, isLoading, mangaList, fetchNext, hasMore } = useMangaList()

  function handleFetchNext() {
    if (hasMore) fetchNext()
  }

  return (
    <IonContent>
      <div className='manga-list'>
        {!isLoading &&
          mangaList &&
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
        <button onClick={handleFetchNext}>fetch next</button>
      </div>
    </IonContent>
  )
}
