import { IonImg } from '@ionic/react'

type MangaCardProps = {
  id: string
  src: string
  title: string
}

export function MangaCard({ id, src, title }: MangaCardProps) {
  return (
    <div>
      <IonImg src={src} alt={title} />
      <h2>{title}</h2>
    </div>
  )
}
