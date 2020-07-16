import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
/** Selection de notre librairie d'icon avec ajout d'une ligne de code dans android/app/build.gradle : 
  - - - - - apply from: "../../node_modules/react-native-vector-icons/fonts.gradle" - - - - - */
import Film from './pageFilm/PageFilm';
import Serie from './pageSerie/PageSerie';

const Tab = createMaterialBottomTabNavigator();

class TabNav extends Component {
  render() {
    return (
      <Tab.Navigator
        activeColor="blue"
        inactiveColor="silver"
        barStyle={{backgroundColor: '#DEDEDE'}}>
        <Tab.Screen
          name="Liste Film"
          component={Film}
          options={{
            tabBarLabel: 'Liste Film',
            tabBarIcon: ({color, size}) => (
              <Icon name="film" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Liste Série"
          component={Serie}
          options={{
            tabBarLabel: 'Liste Série',
            tabBarIcon: ({color, size}) => (
              <Icon name="tv" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default TabNav;
