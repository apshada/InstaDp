import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {

  IonHeader,
  IonToolbar,
  IonTitle,

} from '@ionic/react';

class Home extends Component {
  render() {
    return (
         
         <IonHeader>
           <IonToolbar>
            <IonTitle  >
              <center>
                <h1 style={{fontFamily: 'Dancing Script', fontWeight: 'bold', fontSize : '40px'}}>
              Insta DP
              </h1>
              </center>
            </IonTitle>
           </IonToolbar>
         </IonHeader>
          
     
    );
  }
}

export default Home;