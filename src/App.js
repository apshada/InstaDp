import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp, IonFab, IonFabButton, IonIcon
} from '@ionic/react';
import Home from './components/Home';
import InputData from './components/Input';

import { lockClosedOutline } from 'ionicons/icons';
import Privacy from './components/privacy';


class App extends Component {
  render() {
    return (
      <IonApp>
     
       
        <Home />
        <InputData />
        <Privacy />
      </IonApp>
    );
  }
}

export default App;