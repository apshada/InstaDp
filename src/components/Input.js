import React from 'react';  
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {

  IonContent, IonCard

} from '@ionic/react';
import { Icon, Input } from 'semantic-ui-react'
import CardExamples from './card';
import DownloadData from './Download';
import { Admob, AdmobOptions } from '@ionic-native/admob'

class InputData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          username: '',
          data: [],
          profilePic: '',
          followers: '',
          following: '',
          bio: '',
          postsCount: '',
          isPrivate: '',
          postsNode: '',
          errorsData : 0
          
        }
      }
    
      componentDidMount(){
        console.log('I amd Here')
        const opt = Admob.setOptions({
          publisherId : "ca-app-pub-3940256099942544/6300978111",
          tappxIdAndroid : "pub-54563-android-7684"
        })
        Admob.createBannerView(opt)
        
  }

  

      
      
      getDataFromApi = () => {
        return fetch("https://www.instagram.com/"+this.state.username+"/?__a=1")
          .then(response => response.json())
          .then((jsonData) => {
            this.state.data = []
            this.setState({data: this.state.data.concat(jsonData)})
            var objArr = this.state.data[0];
            var picUrl = objArr.graphql.user.profile_pic_url_hd;
            var full_name = objArr.graphql.user.full_name
            var followerCount = objArr.graphql.user.edge_followed_by.count;
            var followingCount = objArr.graphql.user.edge_follow.count;
            var bio = objArr.graphql.user.biography;
            var postsCount = objArr.graphql.user.edge_owner_to_timeline_media.count;
            var isPrivate = objArr.graphql.user.is_private;
            var postsNode = objArr.graphql.user.edge_owner_to_timeline_media.edges;

       
            
            this.setState({profilePic: picUrl, followers: followerCount, following: followingCount, bio: bio, postsCount: postsCount, isPrivate: isPrivate, postsNode: postsNode , name : full_name, errorsData : false})
    
    
            console.log(this.state)
    
          })
          .catch((error) => {
            console.error(error)
            this.setState({errorsData : true})
            
          })
      };

    render(){
    if(this.state.data.length === 0){
    return (
      
        <IonContent  >
            <IonCard>
           
          <Input
          size="huge"
          style={{width : '100%', height : "70px" }}
        icon={<Icon style={{ circular : true }}  name='search' inverted circular link onClick={()=>{this.getDataFromApi()}}  />}
        onChange={value=>{this.setState({username: value.target.value})}}
         placeholder='Search Username...' />
      
        </IonCard>
         </IonContent>
      
       
         
    );
  
  }
  else if(this.state.errorsData === true){
    return(
      <IonContent  >
      <IonCard>
     
    <Input
    size="huge"
    style={{width : '100%', height : "70px"}}
  icon={<Icon  name='search' inverted circular link onClick={()=>{this.getDataFromApi()}}  />}
  onChange={value=>{this.setState({username: value.target.value})}}
   placeholder='Search Username...' />
   
    
  </IonCard>
      <IonCard>
      <h3>User Not Found</h3>
      </IonCard>
   </IonContent>
    );
  }

  else{
    return(
       
      <IonContent>
        <IonCard>
      <Input 
      size="huge"
      style={{width : '100%', height : "70px"}}
      type="text"
    icon={<Icon name='search' inverted circular link onClick={()=>{this.getDataFromApi()}}  />}
    onChange={value=>{this.setState({username: value.target.value})}}
     placeholder='Search Username...' />
      </IonCard>
     <CardExamples bio={this.state.bio} images={this.state.profilePic}  name={this.state.name} 
        followers={this.state.followers} following={this.state.following} post={this.state.postsCount} 
        username={this.state.username}
     />
   
      <DownloadData  urldata={this.state.profilePic} name={this.state.name} />
      
     </IonContent>

    ); 
  }
}
}


export default InputData;