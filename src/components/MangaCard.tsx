import './MangaCard.css'

type MangaCardProps = {
  id: string
  src: string
  title: string
}

export function MangaCard({ id, src, title }: MangaCardProps) {
  return (
    <div className='manga-card'>
      <img src={src} alt={title} className='manga-list__img' loading='lazy' />
      <h2>{title}</h2>
    </div>
  )
}
