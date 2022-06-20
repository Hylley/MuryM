import { IonHeader, IonIcon } from '@ionic/react'
import { settingsOutline, searchOutline } from 'ionicons/icons'

import './Header.css'

export function Header() {
  return (
    <IonHeader className='header' collapse='condense'>
      <IonIcon icon={settingsOutline} className='icon' />
      <IonIcon icon={searchOutline} className='icon' />
    </IonHeader>
  )
}
