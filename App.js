import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Explore from './screens/Explore';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5
          }
        }}
      >
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarLabel: 'EXPLORE',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search-outline" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{
            tabBarLabel: 'SAVED',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Trips"
          component={Trips}
          options={{
            tabBarLabel: 'TRIPS',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/airbnb.png')}
                style={{
                  height: size,
                  width: size,
                  tintColor: color
                }}
              />
            )
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={{
            tabBarLabel: 'INBOX',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubble-outline" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

