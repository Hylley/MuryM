import { IonHeader, IonIcon, IonSegment, IonSegmentButton } from '@ionic/react'
import { settingsOutline, searchOutline } from 'ionicons/icons'

import './Header.css'

export function Header() {
  return (
    <IonHeader className='header' collapse='condense'>
      <IonIcon icon={settingsOutline} className='icon' />
      <h2>MuryM</h2>
      <IonIcon icon={searchOutline} className='icon' />
    </IonHeader>
  )
}
