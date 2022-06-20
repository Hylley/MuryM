import React from 'react'
import {
  IonApp,
  setupIonicReact,
  IonRouterOutlet,
  IonFooter,
  IonContent,
  IonHeader,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route } from 'react-router-dom'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */

/* Theme variables */
// import './theme/variables.css'

import { HomePage } from './pages'
import { Header } from './components/Header'

setupIonicReact()

const App: React.FC = () => {
  return (
    <IonApp>
      <Header />
      <IonContent>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path='/' component={HomePage} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonContent>
      <IonFooter>sdadsa</IonFooter>
    </IonApp>
  )
}

export default App
