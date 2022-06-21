import { IonCard } from '@ionic/react'
import './MangaCard.css'

type MangaCardProps = {
  id: string
  src: string
  title: string
}

export function MangaCard({ id, src, title }: MangaCardProps) {
  return (
    <IonCard className='manga-card' routerLink={`/${id}`}>
      <img src={src} alt={title} className='manga-list__img' loading='lazy'/>
      <h2>{title}</h2>
    </IonCard>
  )
}
