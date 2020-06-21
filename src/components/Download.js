import {  IonToast, IonFabButton, IonFab, IonIcon, IonButton, IonModal} from '@ionic/react';
import React, { useState } from 'react'
import { Downloader, NotificationVisibility } from '@ionic-native/downloader';
import {downloadOutline } from 'ionicons/icons';
import { Admob, AdmobOptions } from '@ionic-native/admob'

const  DownloadData = (props) =>{
    
    const [showModal, setShowModal] = useState(false);
    const [showToast1, setShowToast1] = useState(false);
    const download = () => {
        setShowToast1(true)
       var DownloadRequest = {
            uri: `${props.urldata}`,
            title: `${props.name}`,
            description: '',
            mimeType: '',
            visibleInDownloadsUi: true,
            notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
            destinationInExternalFilesDir: {
                dirType: 'Downloads',
                subPath: 'MyFile.png'
            }
        };
        const opt = Admob.setOptions({
          publisherId : "ca-app-pub-3940256099942544/1033173712",
          tappxIdAndroid : "pub-54563-android-7684"
        })
          Admob.requestInterstitialAd(opt)
  
            Downloader.download(DownloadRequest)
            .then((location) => console.log('File downloaded at:'+location))
            .catch((error) => console.error(error))
          }
 
    
    return(

        <>
          <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Download Started"
        duration={200}
      />
               
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => download()}  color="secondary">
            <IonIcon icon={downloadOutline} />
          </IonFabButton>
        </IonFab>


        </>
        );
    }


export default DownloadData

