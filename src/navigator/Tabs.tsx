import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';

import  Icon  from 'react-native-vector-icons/Ionicons';

import { TabSearchScreen } from './TabScreen';

const Tab = createBottomTabNavigator();


export const Tabs = () => {
  return (
    <Tab.Navigator
     sceneContainerStyle={{
         backgroundColor: 'white'
     }}
     screenOptions={{
         tabBarActiveTintColor: 'blue',
         tabBarStyle:{
             position:'absolute',
             backgroundColor: 'rgba(255,255,255,0.8)',
             borderWidth: 0,
             paddingBottom: 10,
             elevation: 0,
             height: 60,
             
         },
         
     }}
    >
      <Tab.Screen 
      name="NavigatorScreen" 
      component={Navigator} 
      options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color})=> <Icon color={color} size={25} name='list-outline'/>
      }}
      />
      <Tab.Screen 
      name="Settings" 
      component={TabSearchScreen}
      options={{
        tabBarLabel: 'Search',
        headerShown: false,
        tabBarIcon: ({color})=> <Icon color={color} size={25} name='search-outline'/>
    }}
      />
    </Tab.Navigator>
  );
}