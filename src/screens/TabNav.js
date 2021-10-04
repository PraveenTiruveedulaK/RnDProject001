import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="TabOne"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'TabOne') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'TabTwo') {
            iconName = focused ? 'lock' : 'lock';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
