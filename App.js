import React, {Component} from 'react';
import {View, Text, SafeAreaView, color, Animated} from 'react-native';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import TabNav from './TabsNav';
import Profil from './app/components/Profil/PageProfil';

const Drawer = createDrawerNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoggedIn: true,
      splashscreen: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({splashscreen: false});
    }, 3000);
  }

  render() {
    if (this.state.splashscreen) {
      return (
        <View
          style={{
            backgroundColor: 'darkblue',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Icon style={styles.icon} name="film" color={color} size={200} />
          </View>

          <View>
            <Text style={styles.logo}>S B O</Text>
          </View>
          <Text style={styles.logo2}>Moviez</Text>
        </View>
      );
    } else if (!this.state.LoggedIn) {
      return (
        <SafeAreaView style={{flex: 1}}>
          <View>
            <Text> Il faut se connecter ! </Text>
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <NavigationContainer>
          <Drawer.Navigator
            drawerStyle={{
              width: 200,
            }}>
            <Drawer.Screen name="Profil" component={Profil} />
            <Drawer.Screen name="Films / Séries" component={TabNav} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    }
  }
}
const styles = StyleSheet.create({
  logo: {
    textAlign: 'center',
    fontSize: 50,
    color: 'ghostwhite',
  },
  logo2: {
    textAlign: 'center',
    fontSize: 15,
    color: 'ghostwhite',
  },

  icon: {
    textAlign: 'center',
    color: 'ghostwhite',
  },
});

export default App;
