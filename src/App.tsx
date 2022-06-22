import React from 'react'
import { IonApp, setupIonicReact, IonContent } from '@ionic/react'
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
import { Tabs } from './components/Tabs'
import { MangaPage } from './pages/manga'
import { ReaderPage } from './pages/reader'

setupIonicReact()

const App: React.FC = () => {
  return (
    <IonApp>
      <Header />
      <IonContent>
        <IonReactRouter>
          <Tabs>
            <Route path='/' component={HomePage} />
            <Route path='/m/:mangaId' component={MangaPage} />
            <Route path='/r/:chapterId' component={ReaderPage} />
          </Tabs>
        </IonReactRouter>
      </IonContent>
    </IonApp>
  )
}

export default App
