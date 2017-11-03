import React, { Component, View, Text } from 'react';
import { Scene, Router, Stack, Tabs, TabIcon } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import MainList from './src/components/MainList';
import Login from './src/components/Login/Login';
import Icon from 'react-native-vector-icons';

// const { iconName } = this.props;

// TabIcon = () => {
//   // render(){
//     // var color = this.props.selected ? 'gray' : 'black';
    
//     return(
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         alignItems: 'center',
//         alignSelf: 'center',
//         justifyContent: 'center'
//       }}>
//         <Icon style={{color: 'gray'}} name={this.props.iconName || "circle"} size={18}/>
//         <Text style={{color: 'black', fontSize: 12}}>{this.props.title}</Text>
//       </View>
//     )
//   }


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }}>
    <Scene key="root">
        <Stack>
          <Scene hideNavBar>
            <Scene key="login" component={Login}/>
            <Tabs key="tabbar">
                <Scene key="tab1" 
                       title="Home" 
                       initial
                       iconName="home"
                       showLabel={false}
                       showIcon={true}
                       component={LoginForm}/>
                <Scene key="tab2" 
                       title="Profile" 
                       component={MainList}/>
                <Scene key="tab3" 
                       title="Manage" 
                       component={MainList}/>
            </Tabs>
            
        </Scene>
        </Stack>
        
       {/* <Scene key="auth" hideNavBar>
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>
      <Scene key="main" hideNavBar>
        <Scene key="mainList" component={MainList} title="Items" />
      </Scene>  */}
    </Scene>
      
    </Router>
  );
};

export default RouterComponent;
