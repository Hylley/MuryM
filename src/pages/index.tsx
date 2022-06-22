import { IonPage } from '@ionic/react'
import { useState } from 'react'
import { MangaList } from '../components/MangaList'
import { useMangaList } from '../hooks/useMangaList'

export function HomePage() {
  const { mangaList, fetchNext, hasMore } = useMangaList()
  const [infiniteScrollDisabled, setInfiniteScrollDisabled] = useState(false)

  async function handleFetchNext(ev: any) {
    if (!hasMore) setInfiniteScrollDisabled(true)

    await fetchNext()
    ev.target.complete()
  }

  return (
    <IonPage>
      <MangaList
        infiniteScrollDisabled={infiniteScrollDisabled}
        mangaList={mangaList}
        onFetchNext={handleFetchNext}
        threshold='100px'
      />
    </IonPage>
  )
}
