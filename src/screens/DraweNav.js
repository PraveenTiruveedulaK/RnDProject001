import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainScreen from './MainScreen';
import DetailScreen from './DetailScreen';
import TabNav from './TabNav';
import SettingsScreen from './SettingsScreen';
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="Detail" component={DetailScreen} />
      <Drawer.Screen name="TabNav" component={TabNav} />
      <Drawer.Screen name="Global Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
