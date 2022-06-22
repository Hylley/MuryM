import {
  IonContent,
  IonList,
  IonPage,
  IonSpinner,
  useIonViewDidEnter,
} from '@ionic/react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { api } from '../services/api'
import { ChapterPagesResponse } from '../types/chapter'

import './reader.css'

type ReaderParams = {
  chapterId: string
}

type Page = {
  id: string
  url: string
}

const HIGH_QUALITY = false // futuramente podera ser modificado pelo usuario como economia de dados ou algo do genero

export function ReaderPage() {
  const params = useParams<ReaderParams>()
  const history = useHistory()
  const [pages, setPages] = useState<Page[]>([])

  useIonViewDidEnter(() => {
    api
      .get<ChapterPagesResponse>(`/at-home/server/${params.chapterId}`)
      .then(response => {
        const baseUrl = response.data.baseUrl
        const { data, dataSaver, hash } = response.data.chapter

        const filenames = HIGH_QUALITY ? data : dataSaver

        const pages = filenames.map(filename => {
          const quality = HIGH_QUALITY ? 'data' : 'data-saver'

          return {
            id: `${filename}${Math.random() * Math.random()}`, // the gambiarra
            url: `${baseUrl}/${quality}/${hash}/${filename}`,
          }
        })

        setPages(pages)
      })
  }, [params])

  return (
    <IonPage>
      <IonContent>
        {pages.length ? (
          <IonList className='page-list'>
            {pages.map((p, index) => (
              <div key={p.id}>
                <img src={p.url} alt={`Página ${index + 1}`} />
              </div>
            ))}
            <footer>
              <button onClick={() => history.goBack()}>
                Voltar para lista de capítulos
              </button>
            </footer>
          </IonList>
        ) : (
          <IonSpinner name='crescent' class='absolute-center' />
        )}
      </IonContent>
    </IonPage>
  )
}
