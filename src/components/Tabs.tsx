import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonPage,
  IonContent,
} from '@ionic/react'

import { homeOutline, bookmarkOutline, podiumOutline, cloudDownloadOutline } from 'ionicons/icons'
import { ReactNode } from 'react'

import './Tabs.css'

type TabsProps = {
  children: ReactNode
}

export function Tabs({ children }: TabsProps) {
  return (
    <IonPage>
      <IonTabs className='tabs'>
        <IonRouterOutlet>
          <IonContent>{children}</IonContent>
        </IonRouterOutlet>

        <IonTabBar slot='bottom' className='tab-bar'>
          <IonTabButton tab='home' href='/' className='tab-bar__button'>
            <IonIcon icon={homeOutline} />
          </IonTabButton>

          <IonTabButton tab='list' href='/list' className='tab-bar__button'>
            <IonIcon icon={bookmarkOutline} />
          </IonTabButton>

          <IonTabButton
            tab='popular'
            href='/popular'
            className='tab-bar__button'
          >
            <IonIcon icon={podiumOutline} />
          </IonTabButton>

          <IonTabButton tab='downloads' href='/downloads' className='tab-bar__button'>
            <IonIcon icon={cloudDownloadOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  )
}
