import {  IonToast, IonFabButton, IonFab, IonIcon, IonButton, IonModal} from '@ionic/react';
import React, { useState } from 'react'
import {lockClosedOutline } from 'ionicons/icons';


const  Privacy = (props) =>{
    
    const [showModal, setShowModal] = useState(false);
 
    
    return(
        <>
        <IonModal isOpen={showModal} cssClass='my-custom-class'>
          <div className="ui container">
        <h2>Privacy Policy</h2>
            <p>Your privacy is important to us. It is Manfam's policy to respect your privacy regarding any information we may collect from you across our website, <a href="https://apshada.netlify.com/">https://apshada.netlify.com/</a>, and other sites we own and operate.</p>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
            <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
            <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
            <p>This policy is effective as of 26 May 2020.</p>
            </div>
        <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
      </IonModal>
      
        <IonFab  vertical="bottom" horizontal="start" slot="fixed"> 
          <IonFabButton onClick={() => setShowModal(true)} color="tint" >
              <IonIcon icon={lockClosedOutline} />
          </IonFabButton>
        </IonFab>
        </>
        );
    }


export default Privacy

