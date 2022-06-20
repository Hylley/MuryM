import { IonHeader, IonIcon } from '@ionic/react'
import { settingsOutline, personOutline } from 'ionicons/icons'

import './Header.css'

export function Header() {
  return (
    <IonHeader className='header'>
      <IonIcon icon={settingsOutline} className='icon' />
      <IonIcon icon={personOutline} className='icon' />
    </IonHeader>
  )
}
