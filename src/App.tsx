import React from 'react';
import {
  IonApp,
  setupIonicReact,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonFooter,
  IonLabel,
  IonSegment,
  IonSegmentButton
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import {} from 'ionicons/icons';

setupIonicReact();

const App: React.FC = () => {
  return (
  <IonApp>
    <IonHeader>
      <IonSegment color="primary" onIonChange={e => console.log('Segment selected', e.detail.value)}>
        <IonSegmentButton value="friends">
          <IonLabel>Friends</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="enemies">
          <IonLabel>Enemies</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </IonHeader>

    <IonContent>
      
    </IonContent>

    <IonFooter>
    </IonFooter>
  </IonApp>
  )
};

export default App;
