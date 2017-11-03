//import liraries
import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, 
         Text, 
         StyleSheet, 
         ScrollView, 
         StatusBar, 
         Image, 
         Platform, 
         TouchableOpacity } from 'react-native';

         import { Container, Header, Left, Body, Right, Title, Content } from 'native-base';
import { firebaseRef } from '../service/Firebase';
import { Actions } from 'react-native-router-flux';
// import Header from '../ProfileService/Header';
// import Profiles from '../ProfileService/Profile';
// import Bar from '../ProfileService/Bar';
// import Info from '../ProfileService/Info';

// create a component

const MyStatusBar = ({backgroundColor}) => {
    <View style={[styles.statusBar, {backgroundColor}]}>
        <StatusBar translucent backgroundColor={backgroundColor}></StatusBar>
    </View>   
};
class Profile extends Component {
    // static navigationOptions = {
    //     // title: 'New',
    //     header: null,
    //     // tabBarLabel: 'Profile',
    //     gesturesEnabled: false,
    //     swipeEnabled: false,
    //     tabBarIcon: () => (
    //         <Icon name='user' color='white' type="entypo"></Icon>
    //     ),
    // };

    constructor(props) {
        super(props)
        
        this.state = {
            user: '',
            cuser: firebaseRef.auth().currentUser
        }

    }
    myStatusbar(){
        return (
            <View style={styles.statusBar}>
            <StatusBar translucent backgroundColor="orange" barStyle="light-content"></StatusBar>
        </View>
        )
    };
    componentWillMount(){
        var userId = this.state.cuser.uid;
        var userRef = firebaseRef.database().ref("users/"+userId);

        userRef.on("value", (data) => {
            this.setState({
                user: data.val()
            })
        });
    }
    
    onPressButton(){
        Actions.sched();
    }

    render() {
        // StatusBar.setBackgroundColor('orange')
        return (
            <Container>
            <Header style={styles.header} iosBarStyle="light-content">
              <Left/>
              <Body>
                <Title style={styles.tt}>Profile</Title>
              </Body>
              <Right/>
            </Header>
            <Content>
            <View style={{backgroundColor:'#EFEFF4',flex:1}}>
                {/* {this.myStatusbar()} */}
                {/* <View style={{borderBottomWidth:1, backgroundColor:'rgba(245,128,51,0.7)',borderColor:'#c8c7cc'}}>
                    <StatusBar barStyle="light-content"></StatusBar>
                    
                    
                    <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16, color: 'white'}}>Profile</Text>
                </View> */}
                
                <ScrollView>
                
                <View style={styles.row}>
                
                    <View style={[styles.box, styles.container]}>
                        <Image style={{
                            alignSelf: 'center',
                            height: 130,
                            width: 130,
                            borderWidth: 3,
                            borderRadius: 130/2,
                            borderColor: 'white'
                        }}
                         source={{uri: this.state.user.urlProfileImage}}
                         resizeMode="stretch"
                         ></Image>
                    </View>
                    <View style={[styles.box, styles.info]}>
                        <Text style={[styles.infoText, {fontWeight: 'bold'}]}>{this.state.user.Name}</Text>
                        <Text style={styles.infoText}>{this.state.user.Major}</Text>
                        <Text style={styles.infoText}>Year: {this.state.user.Year}</Text>
                        <Text style={styles.infoText}>{this.state.user.Std_Id}</Text>
                    </View>
                    
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={[styles.boxHeader, styles.boxCornerTop, {backgroundColor: 'rgba(245,128,51,0.7)'}]}>
                            <Text style={styles.infoText2}>Faculty</Text>
                        </View>
                        <View style={[styles.box2, styles.boxCornerBottom]}>
                            <Text style={styles.infoText}>{this.state.user.faculty}</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={[styles.boxHeader, styles.boxCornerTop, {backgroundColor: 'rgba(245,128,51,0.7)'}]}>
                            <Text style={styles.infoText2}>Department</Text>
                        </View>
                        <View style={[styles.box2, styles.boxCornerBottom]}>
                            <Text style={styles.infoText}>{this.state.user.department}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressButton.bind(this)}>
                            <Text style={styles.buttonText}>Time-table</Text>
                        </TouchableOpacity>
                    </View>
                        
                </View>
                </ScrollView>
            </View>
            </Content>
          </Container>
           
         
        );
    }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomLeftRadius: 130/2,
        borderTopLeftRadius: 130/2,
        backgroundColor: 'rgba(245,128,51,0.7)',
    },
    tt: {
        color: "white",
        fontSize: 18
    },
    header: {
        backgroundColor: 'rgba(245,128,51,0.7)'
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        backgroundColor: 'orange',
        height: APPBAR_HEIGHT,
    },
    row: {
        paddingTop: 20,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    column: {
        paddingTop: 20,
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    box: {
        paddingHorizontal: 5,
        flex: 1,
        height: 150,
        backgroundColor: 'rgba(255,255,255,0.7)'
    },
    box2: {
        paddingHorizontal: 5,
        flex: 1,
        height: 70,
        backgroundColor: 'rgba(255,255,255,0.7)',
        justifyContent: 'center'
    },
    boxHeader: {
        paddingHorizontal: 5,
        flex: 1,
        justifyContent: 'center',
        height: 35,
        backgroundColor: 'white'
    },
    infoText: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        padding: 10,
    },
    infoText2: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    info: {
        justifyContent: 'center',
        flex: 1.5,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    headerText:{
        backgroundColor: 'rgba(245,128,51,0.7)',
    },
    profilepic: {
        flex: 1,
        // width: null,
        // alignSelf: 'stretch',
        borderRadius: 150/2,
        // borderColor: '#fff',
        // borderWidth: 4,
        
    },
    profilepicWrap: {
        padding:10,
        alignSelf: 'center',
        width: 130,
        height: 130,
        borderRadius: 130/2,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 4,
    },
    boxCornerTop:{
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    boxCornerBottom:{
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    buttonContainer: {
        backgroundColor: "rgba(245,128,51,0.7)",
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default Profile;
