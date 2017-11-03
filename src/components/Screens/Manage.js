
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

// import Button from '../service/button';
// import styles from '../../styles/common-styles.js';
import { StackNavigator } from 'react-navigation';
// import { firebaseRef } from '../service/Firebase';
import { Container, Header, Left, Body, Right, Title, Content } from 'native-base';
import { connect } from 'react-redux';
import {
    emailChanged,
    passwordChanged,
    loginUser,
    logoutUser } from '../../actions';
import { Actions } from 'react-native-router-flux';

class MainList extends Component {
  constructor(props){
    super(props);

    this.onButtonPress2 = this.onButtonPress2.bind(this);
  }
  onButtonPress() {
    // const { email, password } = this.props;

    this.props.logoutUser();
  }
  onButtonPress2(key){
    Actions.key();
  }
  render() {
    return (
      <Container>
      <Header style={styles.header} iosBarStyle="light-content">
        <Left/>
          
        <Body>
          <Title style={styles.tt}>Manage</Title>
        </Body>
        <Right/>
      </Header>
      <Content>
      <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          
          <SettingsList.Item
            
            title='Register'
            key="register"
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => {Actions.register()}}
          />
          <SettingsList.Item
            
            title='Add Subject'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => {Actions.addsubject()}}
          />
          <SettingsList.Item
            
            title='Change Subject'
            onPress={() => {Actions.changesubject()}}
          />
          <SettingsList.Item
            
            title='Drop Subject'
            onPress={() => {Actions.dropsubject()}}
          />
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item
            
            title='About'
            onPress={() => Alert.alert('Made by NBLOGIC Team! Version: 1.0')}
          />
          <SettingsList.Item
            icon={<Icon style={ { padding:5, paddingTop: 10 } } name='log-out' type="entypo" color='black'></Icon>}
            title='Log Out'
            onPress={ this.onButtonPress.bind(this) }
          />
          
        </SettingsList>
      </Content>
    </Container>
  
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

const styles = StyleSheet.create({
  body: {
      padding: 10,
      paddingTop: 10,
  },
  tt: {
    color: "white",
    fontSize: 18
  },
  header: {
    backgroundColor: 'rgba(245,128,51,0.7)'
  }
})

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  logoutUser
})(MainList);
// export default MainList;
