import React, {
    Component,
  } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    View,
    StatusBar,
    Platform,
    Text,
    // NavigatorIOS,
    TouchableOpacity,
    ScrollView,
    Image
  } from 'react-native';

  import { Container, Header, Left, Body, Right, Title, Content, Icon} from 'native-base';
  import { Actions } from 'react-native-router-flux';
  
  
  
  
  
  
  export default class DropSubject extends Component {
  onPressButton(){
    Actions.pop();
  }
    render() {
      return (
        <Container>
          <Header style={styles.header} iosBarStyle="light-content">
            <Left>
              <Icon style={styles.tt} name="arrow-back" onPress={this.onPressButton.bind(this)}/>
            </Left>
            
            <Body>
              <Title style={styles.tt}>Drop Subject</Title>
            </Body>
            <Right/>
          </Header>
          <Content>
          
          </Content>
        </Container>
        
      );
    }
  }
  
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header:{
      backgroundColor: "rgba(245,128,51,0.7)"
    },
    content: {
      flex: 1,
      backgroundColor: '#33373B',
    },
    tt: {
      color: 'white'
    },
    back: {
    
      
    },
  
  });
  
  