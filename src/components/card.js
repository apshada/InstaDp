import React from 'react';
import { IonCard, IonCardHeader,  IonCardContent, IonImg,} from '@ionic/react';

import './card.css'

class CardExamples extends React.Component{
  
  render(){
  return (
  
    <IonCard>
        <IonCardHeader>
         <div className="profile-stats">
                 <ul>
                 <li><span className="profile-stat-count">{this.props.post}</span> posts</li>
                 <li><span className="profile-stat-count">{this.props.followers}</span> followers</li>
                 <li><span className="profile-stat-count">{this.props.following}</span> following</li>
	 		        	</ul>
             	</div>

        </IonCardHeader>
  
      <IonCardContent>
  <h2>Name : {this.props.name}</h2>
  <h3>Bio : {this.props.bio}</h3>
      <IonImg src={this.props.images}  >

      </IonImg>
      </IonCardContent>
    </IonCard>
   
  
  );
};
};

export default CardExamples
