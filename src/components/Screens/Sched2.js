import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, 
         Text, 
         StyleSheet, 
         AsyncStorage, 
         AlertIOS, 
         Image,
         Button,
         Alert,
         TouchableOpacity,
         StatusBar
          } from 'react-native';

import SettingsList from 'react-native-settings-list';
import NavigationBar from 'react-native-navbar';
// import Button from '../service/button';
import styles from '../../styles/common-styles.js';
// import { StackNavigator } from 'react-navigation';
// import { firebaseRef } from './service/Firebase';
const titleConfig = {
    title: 'Sched',
};

const tabStyle = {
    backgroundColor: 'rgba(245,128,51,0.7)'
}
class Sched extends Component {
  // static navigationOptions = {
  //   tabBarIcon: () => (
  //       <Icon name="home"/>
  //     ),
  // };
  
  render() {
    // StatusBar.setBackgroundColor("orange");
    return (
      <View style={{flex: 1}}>
        
        <View style={{backgroundColor:'#EFEFF4',flex:1}}>
        <StatusBar translucent backgroundColor="orange"/>
        <NavigationBar title={titleConfig} style={tabStyle}/>
        {/* <View style={{borderBottomWidth:1, backgroundColor:'rgba(245,128,51,0.7)',borderColor:'#c8c7cc'}}>
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{alignSelf:'flex-start',marginTop:30, marginBottom:10, marginLeft:5}}>
                        <Text style={{fontWeight:'bold',fontSize:16, color: 'white'}}>Back</Text>
            </TouchableOpacity>
            <Text style={{alignSelf:'center',justifyContent: 'center',fontWeight:'bold',fontSize:16, color: 'white'}}>Sched</Text>
        </View>
        
    </View> */}
      <View style={{backgroundColor:'#EFEFF4',flex:1}}>
        {/* <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          
          <SettingsList.Item
            
            title='Register'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route to Wifi Page')}
          />
          <SettingsList.Item
            
            title='Add Subject'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route to Blutooth Page')}
          />
          <SettingsList.Item
            
            title='Change Subject'
            onPress={() => Alert.alert('Route To Cellular Page')}
          />
          <SettingsList.Item
            
            title='Drop Subject'
            titleInfo='Off'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route To Hotspot Page')}
          />
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item
            
            title='Notifications'
            onPress={() => Alert.alert('Route To Notifications Page')}
          />
          <SettingsList.Item
            icon={<Icon style={ { padding:5, paddingTop: 10 } } name='log-out' type="entypo" color='black'></Icon>}
            title='Log Out'
            onPress={ this.logout }
          />
          
        </SettingsList> */}
      </View>
    </View>
      {/* <View style={{borderBottomWidth:1, backgroundColor:'rgba(245,128,51,0.7)',borderColor:'#c8c7cc', height: 65}}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16, color: 'white'}}>Home</Text>
  </View> */}
      <Text></Text>
      {/* <Card>
        <CardSection>
          <Text>Item 1</Text>
        </CardSection>
        <CardSection>
          <Text>Item 2</Text>
        </CardSection>
        <CardSection>
          <Text>Item 2</Text>
        </CardSection>
      </Card> */}

      </View>
    );
  }
}

const page_styles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  },
  logo: {
      padding: 0
  },
  buttonContainer: {
      backgroundColor: "rgba(0,0,0,0.6)",
      paddingVertical: 15,
      borderRadius: 30,
  },
  buttonContainer2: {
      backgroundColor: "rgba(0,0,0,0.6)",
      
      borderRadius: 30,
      padding: 20,
      
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold'
  }
});

const styless = StyleSheet.create({
  body: {
      padding: 10,
      paddingTop: 10,
  }
})

export default Sched;
