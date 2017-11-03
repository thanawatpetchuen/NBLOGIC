/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
// import Router from './Router';
import {  Scene, Router, TabBar, Stack, Tabs } from 'react-native-router-flux';
import Login from './src/components/Login/Login';
import MainList from './src/components/MainList';
import Profile from './src/components/Screens/Profile';
import Manage from './src/components/Screens/Manage';
import { Icon } from 'react-native-elements';
import Sched from './src/components/Screens/Sched';
import Register from './src/components/Screens/Register';
import AddSubject from './src/components/Screens/AddSubject';
import ChangeSubject from './src/components/Screens/ChangeSubject';
import DropSubject from './src/components/Screens/DropSubject';

const iconHome = "ios-home-outline";

const TabIcon = ({ focused, title}) => {
  switch (title){
    case 'Home':
      return (
      <View style={{ alignContent: 'center', paddingTop: 10}}>
      {/* <Text style={{color: this.props.focused ? 'red' : 'black'}}>{this.props.title}</Text> */}
        <Icon type="ionicon" name="ios-home-outline" color={focused ? 'rgba(245,128,51,0.7)' : 'black'} size={30}/>
      </View>
    )
    case 'Profile':
      return (
        <View style={{ alignContent: 'center', paddingTop: 10}}>
        {/* <Text style={{color: this.props.focused ? 'red' : 'black'}}>{this.props.title}</Text> */}
          <Icon type="ionicon" name="ios-person-outline" color={focused ? 'rgba(245,128,51,0.7)' : 'black'} size={30}/>
        </View>
      )
    case 'Manage':
      return (
        <View style={{ alignContent: 'center', paddingTop: 10}}>
        {/* <Text style={{color: this.props.focused ? 'red' : 'black'}}>{this.props.title}</Text> */}
          <Icon type="ionicon" name="ios-settings-outline" color={focused ? 'rgba(245,128,51,0.7)' : 'black'} size={30}/>
        </View>
      )
  }
}


class App extends Component {
  componentWillMount() {
   
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    // StatusBar.setBarStyle('dark-content')
    return (
      <View style={{flex: 1}}>
      {/* <StatusBar color="orange"/>   */}
      
      <Provider store={store}>
        <Router>
          
          <Scene key="root" hideNavBar style={{paddingTop: 0}}>
            <Stack>
              <Scene key="login" title="Login" component={Login} hideNavBar/>
              <Scene key="tabbar" tabs={true} hideNavBar={true} showLabel={false} showIcon={true}
                     onSelect={el => {
                       if(typeof Actions !== 'object') return;
                       const {
                         sceneKey,
                         statusBarStyle
                       } = el.props
                       if(statusBarStyle){
                         {/* StatusBar.setBarStyle(statusBarStyle, true); */}
                         StatusBar.setBackgroundColor(color='rgba(245,128,51,0.7)');
                         Actions[sceneKey]()
                       }
                     }}>
                <Stack key="main" title="Home" icon={TabIcon} component={MainList} hideNavBar/>
                <Stack key="profile1" title="Profile" icon={TabIcon} >
                  <Scene key="profile" title="Profile" hideNavBar component={Profile} />  
                  <Scene key="sched" title="Time-Table" hideNavBar navigationBarStyle={{backgroundColor: "rgba(245,128,51,0.7)"}} component={Sched}/>
                </Stack>
                
                <Stack key="manage" title="Manage" icon={TabIcon} >
                  <Scene key="manage1" title="Manage" component={Manage} hideNavBar/>
                  <Scene key="register" title="Register" component={Register} hideNavBar/>
                  <Scene key="addsubject" title="AddSubject" component={AddSubject} hideNavBar/>
                  <Scene key="changesubject" title="ChangeSubject" component={ChangeSubject} hideNavBar/>
                  <Scene key="dropsubject" title="DropSubject" component={DropSubject} hideNavBar/>
                </Stack>
              </Scene>
              
                
            </Stack>
            
          </Scene>
        </Router>
      </Provider>
      </View>
    );
  }
}


export default App;
