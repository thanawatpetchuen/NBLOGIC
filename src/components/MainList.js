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
import NavigationBar from 'react-native-navbar';
import { Container, Header, Left, Body, Right, Title, Content, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';






export default class MainList extends Component {
onPressButton(){
  Actions.pop();
}
  render() {
    return (
      <Container>
        <Header style={styles.header} iosBarStyle="light-content">
          <Left/>
          
          <Body>
            <Title style={styles.tt}>Home</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
        
        </Content>
      </Container>
      // <View style={styles.container}>
      //   {/* <View style={[styles.statusBar]}> */}
      //     {/* <StatusBar translucent backgroundColor="rgba(245,128,51,0.7)"  /> */}
      //   {/* </View> */}
      //   {/* <NavigatorIOS></NavigatorIOS> */}
      //   <NavigationBar title={titleConfig} style={tabStyle}/>
      //   <MyStatusBar backgroundColor="rgba(245,128,51,0.7)" barStyle="light-content" />
      //   {/* <StatusBar translucent barStyle="dark-content" /> */}
        
      //   {/* <View style={styles.appBar} /> */}
      //       {/* <View style={{justifyContent: "space-between"}}>
      //       <Text style={{alignSelf: 'flex-start'}}>asdd</Text>
      //       </View>
      //       <View>
      //         <Text style={{alignSelf: 'flex-end'}}>asdd</Text>
      //       </View> */}
            
            
        
      //   <View style={styles.content} />
      // </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: "rgba(245,128,51,0.7)"
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'rgba(245,128,51,0.7)',
    height: APPBAR_HEIGHT,
    flexDirection: 'row'
    // alignItem: 'center'
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

//   AppRegistry.registerComponent('App', () => DarkTheme);